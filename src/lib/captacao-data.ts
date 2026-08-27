// =============================================================================
// Camada de leitura do funil de captação — dataset SINTÉTICO versionado
// =============================================================================
// Import estático do JSON: não há fetch, banco, planilha nem API. As agregações
// são somas sobre 20 grupos — custo desprezível, e a aplicação nunca gera dado
// em runtime.
//
// Taxas NUNCA são lidas do arquivo: são recalculadas aqui a partir de
// numerador e denominador, para que o que a tela mostra seja aritmeticamente
// consistente com os volumes exibidos ao lado.
// =============================================================================
import bruto from '@/data/captacao-sintetico.json';

export interface GrupoCaptacao {
  safra: number;
  ciclo: string;
  contatos: number;
  visitas: number;
  matriculas: number;
  perdidos: number;
  quentes: number;
  frios: number;
  semClassificacao: number;
  canais: { canal: string; valor: number }[];
  turmas: { turma: string; valor: number }[];
  mensal: { mes: number; contatos: number | null; visitas: number | null; matriculas: number | null }[];
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
  ultimaObservacao: string;
  grupos: GrupoCaptacao[];
}

const dataset = bruto as unknown as Dataset;

export const META_CAPTACAO = dataset.meta;
export const ULTIMA_OBSERVACAO = dataset.ultimaObservacao;

export function safrasDisponiveis(): number[] {
  return [...dataset.safras].sort((a, b) => a - b);
}

export function ciclosDisponiveis(): string[] {
  return [...dataset.ciclos];
}

function filtrar(safras: number[], ciclos: string[]): GrupoCaptacao[] {
  return dataset.grupos.filter(
    (g) => safras.includes(g.safra) && (ciclos.length === 0 || ciclos.includes(g.ciclo)),
  );
}

export interface MetricasFunil {
  contatos: number;
  visitas: number;
  matriculas: number;
  perdidos: number;
  quentes: number;
  frios: number;
  semClassificacao: number;
  taxaContatoVisita: number;
  taxaVisitaMatricula: number;
}

function somar(grupos: GrupoCaptacao[]): MetricasFunil {
  const s = grupos.reduce(
    (a, g) => ({
      contatos: a.contatos + g.contatos,
      visitas: a.visitas + g.visitas,
      matriculas: a.matriculas + g.matriculas,
      perdidos: a.perdidos + g.perdidos,
      quentes: a.quentes + g.quentes,
      frios: a.frios + g.frios,
      semClassificacao: a.semClassificacao + g.semClassificacao,
    }),
    { contatos: 0, visitas: 0, matriculas: 0, perdidos: 0, quentes: 0, frios: 0, semClassificacao: 0 },
  );
  return {
    ...s,
    taxaContatoVisita: s.contatos > 0 ? Math.round((s.visitas / s.contatos) * 1000) / 10 : 0,
    taxaVisitaMatricula: s.visitas > 0 ? Math.round((s.matriculas / s.visitas) * 1000) / 10 : 0,
  };
}

export interface SafraCaptacao {
  safra: number;
  metricas: MetricasFunil;
}

export interface PontoMensalSerie {
  mes: string;
  mesIndice: number;
  [safra: string]: number | string | null;
}

export interface PayloadCaptacao {
  totalSemFiltro: number;
  safras: SafraCaptacao[];
  agregado: MetricasFunil;
  mensal: { contatos: PontoMensalSerie[]; visitas: PontoMensalSerie[]; matriculas: PontoMensalSerie[] };
  ultimaObservacao: string;
}

const MESES = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

/**
 * Série mensal por safra. Mês sem observação vem `null`, não zero — a distinção
 * entre "não houve" e "ainda não foi observado" é preservada até o gráfico, que
 * interrompe a linha em vez de desenhar uma queda que não aconteceu.
 */
function serieMensal(
  grupos: GrupoCaptacao[],
  safras: number[],
  campo: 'contatos' | 'visitas' | 'matriculas',
): PontoMensalSerie[] {
  return MESES.map((nome, i) => {
    const ponto: PontoMensalSerie = { mes: nome, mesIndice: i };
    for (const safra of safras) {
      const doAno = grupos.filter((g) => g.safra === safra);
      if (doAno.length === 0) {
        ponto[String(safra)] = null;
        continue;
      }
      const valores = doAno.map((g) => g.mensal[i]?.[campo] ?? null);
      ponto[String(safra)] = valores.every((v) => v === null)
        ? null
        : valores.reduce<number>((a, v) => a + (v ?? 0), 0);
    }
    return ponto;
  });
}

export function obterCaptacao(safras: number[], ciclos: string[]): PayloadCaptacao {
  const grupos = filtrar(safras, ciclos);
  const ordenadas = [...safras].sort((a, b) => a - b);
  return {
    totalSemFiltro: dataset.grupos.reduce((a, g) => a + g.contatos, 0),
    safras: ordenadas.map((safra) => ({
      safra,
      metricas: somar(grupos.filter((g) => g.safra === safra)),
    })),
    agregado: somar(grupos),
    mensal: {
      contatos: serieMensal(grupos, ordenadas, 'contatos'),
      visitas: serieMensal(grupos, ordenadas, 'visitas'),
      matriculas: serieMensal(grupos, ordenadas, 'matriculas'),
    },
    ultimaObservacao: dataset.ultimaObservacao,
  };
}

/** Distribuição de situação do funil no recorte atual. */
export function distribuicaoStatus(safras: number[], ciclos: string[]) {
  const m = somar(filtrar(safras, ciclos));
  return [
    { chave: 'matriculado', rotulo: 'Matriculado', valor: m.matriculas },
    { chave: 'quente', rotulo: 'Em negociação', valor: m.quentes },
    { chave: 'frio', rotulo: 'Sem avanço', valor: m.frios },
    { chave: 'perdido', rotulo: 'Perdido', valor: m.perdidos },
    { chave: 'sem-classificacao', rotulo: 'Sem classificação', valor: m.semClassificacao },
  ];
}

/** Origem declarada do contato, agregada no recorte. */
export function distribuicaoCanais(safras: number[], ciclos: string[]) {
  const acc: Record<string, number> = {};
  for (const g of filtrar(safras, ciclos)) {
    for (const c of g.canais) acc[c.canal] = (acc[c.canal] ?? 0) + c.valor;
  }
  return Object.entries(acc)
    .map(([canal, valor]) => ({ canal, valor }))
    .sort((a, b) => b.valor - a.valor);
}
