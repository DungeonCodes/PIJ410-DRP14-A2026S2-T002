// =============================================================================
// GERADOR — matrículas sintéticas
// =============================================================================
// Mesma disciplina do funil: a base de alunos é o único volume sorteado por
// safra; rematrículas saem da taxa de retenção e novas são o COMPLEMENTO
// exato. Nunca há um terceiro número capaz de contradizer os dois primeiros —
// `rematriculas + novas === total`, por construção, e não por conferência.
//
// Nenhuma pessoa é representada. O dataset guarda apenas CONTAGENS por
// (safra, ciclo, turma, mês). Não há nome, responsável, documento, data de
// nascimento, contato nem identificador — não existe registro individual a ser
// reidentificado.
// =============================================================================
import {
  CICLOS,
  MATRICULAS_BASE,
  PESO_CICLO,
  REFERENCE_DATE,
  RETENCAO_BASE,
  SAFRAS,
  SAZONALIDADE_MATRICULA,
  TURMAS_POR_CICLO,
  metadados,
  type Ciclo,
  type MetadadosCenario,
  type Safra,
} from './cenario.ts';
import { criarAleatorio, repartirInteiro } from './prng.ts';

export interface TurmaMatriculas {
  turma: string;
  total: number;
  rematriculas: number;
  novas: number;
}

export interface GrupoMatriculas {
  safra: Safra;
  ciclo: Ciclo;
  total: number;
  rematriculas: number;
  novas: number;
  /** `null` na primeira safra: sem base N−1, retenção é indeterminada. */
  retencaoPct: number | null;
  turmas: TurmaMatriculas[];
  /** Efetivações por mês (1–12). `null` = mês não observado. */
  mensal: (number | null)[];
}

export interface DatasetMatriculas {
  meta: MetadadosCenario;
  safras: number[];
  ciclos: string[];
  /** Safras sem base N−1 → rematrícula/nova indeterminada. */
  safrasIndeterminadas: number[];
  grupos: GrupoMatriculas[];
}

function ultimoMesObservado(safra: number): number {
  const [anoRef, mesRef] = REFERENCE_DATE.split('-').map(Number);
  if (safra < anoRef) return 11;
  if (safra > anoRef) return -1;
  return mesRef - 1;
}

export function gerarMatriculas(seed: string): DatasetMatriculas {
  const grupos: GrupoMatriculas[] = [];
  const primeiraSafra = SAFRAS[0];

  for (const safra of SAFRAS) {
    const totalPorCiclo = repartirInteiro(
      MATRICULAS_BASE[safra],
      CICLOS.map((c) => PESO_CICLO[c]),
    );

    CICLOS.forEach((ciclo, idx) => {
      const r = criarAleatorio(`${seed}:matriculas:${safra}:${ciclo}`);
      const total = totalPorCiclo[idx];

      // Primeira safra do cenário não tem N−1: retenção indeterminada, e o
      // dataset diz isso em vez de inventar um número.
      const temBaseAnterior = safra > primeiraSafra;
      const retencao = RETENCAO_BASE[safra] * r.entre(0.96, 1.04);
      const rematriculas = temBaseAnterior ? Math.round(total * Math.min(retencao, 0.97)) : 0;
      const novas = total - rematriculas;

      const turmasDoCiclo = TURMAS_POR_CICLO[ciclo];
      const pesosTurma = turmasDoCiclo.map(() => r.entre(0.8, 1.25));
      const totalTurmas = repartirInteiro(total, pesosTurma);
      const remaTurmas = repartirInteiro(rematriculas, pesosTurma);

      const turmas: TurmaMatriculas[] = turmasDoCiclo.map((t, i) => {
        const tot = totalTurmas[i];
        const rema = Math.min(remaTurmas[i], tot);
        return { turma: t, total: tot, rematriculas: rema, novas: tot - rema };
      });

      // Corrige a soma das turmas para bater com a rematrícula do ciclo: o
      // `min()` acima pode ter aparado unidades.
      let deficit = rematriculas - turmas.reduce((a, t) => a + t.rematriculas, 0);
      for (const t of turmas) {
        if (deficit <= 0) break;
        const folga = t.total - t.rematriculas;
        const usar = Math.min(folga, deficit);
        t.rematriculas += usar;
        t.novas -= usar;
        deficit -= usar;
      }

      const pesosMes = SAZONALIDADE_MATRICULA.map((p) => p * r.entre(0.85, 1.15));
      const porMes = repartirInteiro(total, pesosMes);
      const corte = ultimoMesObservado(safra);

      const mensal: (number | null)[] = porMes.map((v, m) => (m > corte ? null : v));
      const extra = porMes.slice(corte + 1).reduce((a, b) => a + b, 0);
      if (extra > 0 && corte >= 0) {
        const add = repartirInteiro(extra, pesosMes.slice(0, corte + 1));
        for (let m = 0; m <= corte; m += 1) mensal[m] = (mensal[m] ?? 0) + add[m];
      }

      grupos.push({
        safra,
        ciclo,
        total,
        rematriculas,
        novas,
        retencaoPct: temBaseAnterior && total > 0
          ? Math.round((rematriculas / total) * 1000) / 10
          : null,
        turmas,
        mensal,
      });
    });
  }

  return {
    meta: metadados(seed),
    safras: [...SAFRAS],
    ciclos: [...CICLOS],
    safrasIndeterminadas: [primeiraSafra],
    grupos,
  };
}
