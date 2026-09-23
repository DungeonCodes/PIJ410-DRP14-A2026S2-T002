// =============================================================================
// Camada de leitura das matrículas — dataset SINTÉTICO versionado
// =============================================================================
// Não há pessoas aqui. O dataset guarda apenas CONTAGENS por (safra, ciclo,
// turma, mês): nenhum nome, responsável, documento, data de nascimento,
// contato ou identificador. Não existindo registro individual, não existe
// reidentificação possível.
// =============================================================================
import bruto from '@/data/matriculas-sintetico.json';

export interface TurmaMatriculas {
  turma: string;
  total: number;
  rematriculas: number;
  novas: number;
}

export interface GrupoMatriculas {
  safra: number;
  ciclo: string;
  total: number;
  rematriculas: number;
  novas: number;
  retencaoPct: number | null;
  turmas: TurmaMatriculas[];
  mensal: (number | null)[];
}

interface MetaCenario {
  schema_version: number;
  scenario_version: string;
  seed: string;
  project_started_at: string;
  generated_at: string;
  reference_date: string;
  synthetic: boolean;
  nota: string;
}

interface Dataset {
  meta: MetaCenario;
  safras: number[];
  ciclos: string[];
  safrasIndeterminadas: number[];
  grupos: GrupoMatriculas[];
}

const dataset = bruto as unknown as Dataset;

export const META_MATRICULAS = dataset.meta;
export const SAFRAS_INDETERMINADAS = dataset.safrasIndeterminadas;

export function safrasDisponiveis(): number[] {
  return [...dataset.safras].sort((a, b) => a - b);
}

export function ciclosDisponiveis(): string[] {
  return [...dataset.ciclos];
}

export interface MetricasMatriculas {
  total: number;
  rematriculas: number;
  novas: number;
  /** `null` quando o recorte só contém safras sem base N−1. */
  retencaoPct: number | null;
}

function filtrar(safras: number[], ciclos: string[]): GrupoMatriculas[] {
  return dataset.grupos.filter(
    (g) => safras.includes(g.safra) && (ciclos.length === 0 || ciclos.includes(g.ciclo)),
  );
}

function somar(grupos: GrupoMatriculas[]): MetricasMatriculas {
  const total = grupos.reduce((a, g) => a + g.total, 0);
  const rematriculas = grupos.reduce((a, g) => a + g.rematriculas, 0);
  const determinaveis = grupos.filter((g) => g.retencaoPct !== null);
  const baseDet = determinaveis.reduce((a, g) => a + g.total, 0);
  const remaDet = determinaveis.reduce((a, g) => a + g.rematriculas, 0);
  return {
    total,
    rematriculas,
    novas: total - rematriculas,
    // Retenção só é publicada sobre safras COM base anterior. Misturar a
    // primeira safra no denominador inventaria uma queda que não existe.
    retencaoPct: baseDet > 0 ? Math.round((remaDet / baseDet) * 1000) / 10 : null,
  };
}

export interface PayloadMatriculas {
  metricas: MetricasMatriculas;
  porSafra: { safra: number; metricas: MetricasMatriculas }[];
  porCiclo: { ciclo: string; metricas: MetricasMatriculas }[];
  turmas: TurmaMatriculas[];
  mensal: { mes: string; mesIndice: number; [safra: string]: number | string | null }[];
  safrasIndeterminadas: number[];
}

const MESES = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export function obterMatriculas(safras: number[], ciclos: string[]): PayloadMatriculas {
  const grupos = filtrar(safras, ciclos);
  const ordenadas = [...safras].sort((a, b) => a - b);

  const turmasAcc = new Map<string, TurmaMatriculas>();
  for (const g of grupos) {
    for (const t of g.turmas) {
      const atual = turmasAcc.get(t.turma) ?? { turma: t.turma, total: 0, rematriculas: 0, novas: 0 };
      atual.total += t.total;
      atual.rematriculas += t.rematriculas;
      atual.novas += t.novas;
      turmasAcc.set(t.turma, atual);
    }
  }

  return {
    metricas: somar(grupos),
    porSafra: ordenadas.map((safra) => ({
      safra,
      metricas: somar(grupos.filter((g) => g.safra === safra)),
    })),
    porCiclo: dataset.ciclos
      .filter((c) => ciclos.length === 0 || ciclos.includes(c))
      .map((ciclo) => ({ ciclo, metricas: somar(grupos.filter((g) => g.ciclo === ciclo)) })),
    turmas: [...turmasAcc.values()].filter((t) => t.total > 0),
    mensal: MESES.map((nome, i) => {
      const ponto: { mes: string; mesIndice: number; [safra: string]: number | string | null } = {
        mes: nome,
        mesIndice: i,
      };
      for (const safra of ordenadas) {
        const doAno = grupos.filter((g) => g.safra === safra);
        const valores = doAno.map((g) => g.mensal[i] ?? null);
        ponto[String(safra)] =
          valores.length === 0 || valores.every((v) => v === null)
            ? null
            : valores.reduce<number>((a, v) => a + (v ?? 0), 0);
      }
      return ponto;
    }),
    safrasIndeterminadas: dataset.safrasIndeterminadas,
  };
}
