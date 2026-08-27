// =============================================================================
// GERADOR — funil de captação sintético
// =============================================================================
// REGRA CENTRAL: nenhum indicador é sorteado de forma independente. Contatos
// são o único volume sorteado; visitas derivam de contatos pela taxa-alvo, e
// matrículas derivam de visitas. Assim `taxaContatoVisita` exibida é sempre
// exatamente `visitas / contatos`, e não uma terceira variável que pode
// contradizer as outras duas.
//
// A série mensal usa `repartirInteiro`, então a soma dos doze meses reproduz o
// total anual EXATAMENTE — não "aproximadamente".
// =============================================================================
import {
  CANAIS,
  CICLOS,
  CONTATOS_BASE,
  PESO_CICLO,
  REFERENCE_DATE,
  SAFRAS,
  SAZONALIDADE_CAPTACAO,
  STATUS,
  TAXAS_FUNIL,
  TURMAS_POR_CICLO,
  metadados,
  type Ciclo,
  type MetadadosCenario,
  type Safra,
  type StatusLead,
} from './cenario.ts';
import { arredondar, criarAleatorio, repartirInteiro } from './prng.ts';

export interface PontoMensal {
  mes: number;
  contatos: number | null;
  visitas: number | null;
  matriculas: number | null;
}

export interface GrupoCaptacao {
  safra: Safra;
  ciclo: Ciclo;
  contatos: number;
  visitas: number;
  matriculas: number;
  perdidos: number;
  quentes: number;
  frios: number;
  semClassificacao: number;
  /** Categoria como VALOR, nunca como chave de esquema — ver nota abaixo. */
  canais: { canal: string; valor: number }[];
  turmas: { turma: string; valor: number }[];
  mensal: PontoMensal[];
}

export interface DatasetCaptacao {
  meta: MetadadosCenario;
  safras: number[];
  ciclos: string[];
  ultimaObservacao: string;
  grupos: GrupoCaptacao[];
}

/** Índice do último mês observado dentro de uma safra (0-based), ou 11. */
function ultimoMesObservado(safra: number): number {
  const [anoRef, mesRef] = REFERENCE_DATE.split('-').map(Number);
  if (safra < anoRef) return 11;
  if (safra > anoRef) return -1;
  return mesRef - 1;
}

export function gerarCaptacao(seed: string): DatasetCaptacao {
  const grupos: GrupoCaptacao[] = [];

  for (const safra of SAFRAS) {
    // Contatos da safra repartidos entre ciclos pelos pesos — soma exata.
    const contatosPorCiclo = repartirInteiro(
      CONTATOS_BASE[safra],
      CICLOS.map((c) => PESO_CICLO[c]),
    );

    CICLOS.forEach((ciclo, idx) => {
      // Fluxo próprio por (safra, ciclo): mudar um grupo não desloca os outros.
      const r = criarAleatorio(`${seed}:captacao:${safra}:${ciclo}`);
      const contatos = contatosPorCiclo[idx];

      // Variação de ±12% na taxa do grupo, mantendo a taxa da safra como centro.
      const taxaCV = TAXAS_FUNIL[safra].contatoVisita * r.entre(0.88, 1.12);
      const visitas = Math.min(contatos, Math.round(contatos * taxaCV));

      const taxaVM = TAXAS_FUNIL[safra].visitaMatricula * r.entre(0.9, 1.1);
      const matriculas = Math.min(visitas, Math.round(visitas * taxaVM));

      // O restante do funil sai de uma repartição do que NÃO virou matrícula,
      // então matriculados + perdidos + quentes + frios + s/classif = contatos.
      const restante = contatos - matriculas;
      const [perdidos, quentes, frios, semClassificacao] = repartirInteiro(restante, [
        r.entre(38, 48),
        r.entre(14, 22),
        r.entre(20, 30),
        r.entre(4, 9),
      ]);

      // Rótulo de categoria é VALOR, não chave. Usar o rótulo como nome de
      // campo faria uma varredura de PII por nome de campo confundir a
      // categoria "Telefone" com um telefone de verdade — e, pior, tornaria o
      // esquema dependente de texto legível.
      const canaisVals = repartirInteiro(contatos, CANAIS.map(() => r.entre(0.6, 1.6)));
      const canais = CANAIS.map((c, i) => ({ canal: c, valor: canaisVals[i] }));

      const turmasDoCiclo = TURMAS_POR_CICLO[ciclo];
      const turmasVals = repartirInteiro(matriculas, turmasDoCiclo.map(() => r.entre(0.7, 1.4)));
      const turmas = turmasDoCiclo.map((t, i) => ({ turma: t, valor: turmasVals[i] }));

      // Séries mensais: cada métrica repartida pela sazonalidade, soma exata.
      const pesosMes = SAZONALIDADE_CAPTACAO.map((p) => p * r.entre(0.85, 1.15));
      const mContatos = repartirInteiro(contatos, pesosMes);
      const mVisitas = repartirInteiro(visitas, pesosMes);
      const mMatriculas = repartirInteiro(matriculas, pesosMes);

      const corte = ultimoMesObservado(safra);
      const mensal: PontoMensal[] = Array.from({ length: 12 }, (_, m) => {
        // Mês posterior à última observação é AUSÊNCIA de medição, não zero.
        if (m > corte) return { mes: m + 1, contatos: null, visitas: null, matriculas: null };
        return { mes: m + 1, contatos: mContatos[m], visitas: mVisitas[m], matriculas: mMatriculas[m] };
      });

      // O que caiu em meses não observados volta para os meses observados, para
      // que a soma da série continue igual ao total anual.
      const sobra = (arr: number[]) => arr.slice(corte + 1).reduce((a, b) => a + b, 0);
      const redistribuir = (campo: 'contatos' | 'visitas' | 'matriculas', arr: number[]) => {
        const extra = sobra(arr);
        if (extra <= 0 || corte < 0) return;
        const observados = mensal.slice(0, corte + 1);
        const add = repartirInteiro(extra, observados.map((_, i) => pesosMes[i]));
        observados.forEach((p, i) => { p[campo] = (p[campo] ?? 0) + add[i]; });
      };
      redistribuir('contatos', mContatos);
      redistribuir('visitas', mVisitas);
      redistribuir('matriculas', mMatriculas);

      grupos.push({
        safra, ciclo, contatos, visitas, matriculas,
        perdidos, quentes, frios, semClassificacao, canais, turmas, mensal,
      });
    });
  }

  return {
    meta: metadados(seed),
    safras: [...SAFRAS],
    ciclos: [...CICLOS],
    ultimaObservacao: REFERENCE_DATE,
    grupos,
  };
}

/** Taxas derivadas — sempre calculadas, nunca armazenadas. */
export function taxas(g: { contatos: number; visitas: number; matriculas: number }) {
  return {
    contatoVisita: g.contatos > 0 ? arredondar((g.visitas / g.contatos) * 100, 1) : 0,
    visitaMatricula: g.visitas > 0 ? arredondar((g.matriculas / g.visitas) * 100, 1) : 0,
  };
}

export type { StatusLead };
export { STATUS };
