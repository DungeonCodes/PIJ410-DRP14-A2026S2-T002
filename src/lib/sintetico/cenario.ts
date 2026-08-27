// =============================================================================
// CONFIGURAÇÃO DO CENÁRIO SINTÉTICO
// =============================================================================
// Um cenário INDEPENDENTE, não uma versão maquiada de dados reais. Nada aqui é
// derivado de valores observados na arquitetura de referência: os patamares,
// as taxas e as sazonalidades abaixo foram escolhidos para compor uma história
// plausível de captação escolar e são declarados como tais.
//
// TRÊS DATAS DIFERENTES, e a confusão entre elas é o erro que este arquivo
// existe para impedir:
//
//   projeto_iniciado_em  27/08/2026  quando a adaptação acadêmica começou
//   gerado_em            27/08/2026  quando o dataset sintético foi produzido
//   periodo_historico    2022–2026   cronologia FICTÍCIA que o cenário retrata
//
// A terceira não afirma que o grupo coletava dados em 2022. Ela é a linha do
// tempo simulada de uma instituição fictícia, e o dataset inteiro nasceu no
// mesmo dia da segunda.
// =============================================================================

export const SCHEMA_VERSION = 1;
export const SCENARIO_VERSION = 'cenario-alfa-1';
export const SEED_PADRAO = 'pij410-alfa-2026';

/** Data em que a adaptação acadêmica começou. Fato, não gatilho. */
export const PROJETO_INICIADO_EM = '2026-08-27';

/** Data de produção do dataset. Igual à de início porque foi o mesmo dia. */
export const GERADO_EM = '2026-08-27';

/**
 * Última observação da cronologia fictícia. O gerador não escreve nada depois
 * disso: mês posterior vira `null` (ausência de observação), nunca zero.
 */
export const REFERENCE_DATE = '2026-08-15';

/** Safras (anos letivos) que o cenário cobre. */
export const SAFRAS = [2022, 2023, 2024, 2025, 2026] as const;
export type Safra = (typeof SAFRAS)[number];

/** Ciclos da educação básica. Rótulos genéricos, sem turma identificável. */
export const CICLOS = ['EI', 'EF-I', 'EF-II', 'EM'] as const;
export type Ciclo = (typeof CICLOS)[number];

export const CICLO_ROTULO: Record<Ciclo, string> = {
  EI: 'Educação Infantil',
  'EF-I': 'Fundamental Anos Iniciais',
  'EF-II': 'Fundamental Anos Finais',
  EM: 'Ensino Médio',
};

/**
 * Volume-base de contatos por safra. Curva inventada: crescimento até 2024,
 * acomodação em 2025 e safra 2026 ainda em curso (por isso menor).
 */
export const CONTATOS_BASE: Record<Safra, number> = {
  2022: 340,
  2023: 412,
  2024: 505,
  2025: 468,
  2026: 296,
};

/** Peso relativo de cada ciclo na demanda. Soma não precisa dar 1: é peso. */
export const PESO_CICLO: Record<Ciclo, number> = {
  EI: 38,
  'EF-I': 30,
  'EF-II': 19,
  EM: 13,
};

/**
 * Taxas-alvo do funil, por safra. São o ESQUELETO do cenário — o gerador
 * calcula visitas e matrículas A PARTIR daqui, em vez de sortear os três
 * números de forma independente. É isso que impede taxa exibida ≠ taxa real.
 */
export const TAXAS_FUNIL: Record<Safra, { contatoVisita: number; visitaMatricula: number }> = {
  2022: { contatoVisita: 0.21, visitaMatricula: 0.44 },
  2023: { contatoVisita: 0.23, visitaMatricula: 0.46 },
  2024: { contatoVisita: 0.26, visitaMatricula: 0.49 },
  2025: { contatoVisita: 0.25, visitaMatricula: 0.47 },
  2026: { contatoVisita: 0.27, visitaMatricula: 0.45 },
};

/**
 * Sazonalidade mensal da captação (jan…dez). Pico em out–dez, quando a
 * matrícula do ano seguinte é decidida, e vale de meio de ano fraco.
 */
export const SAZONALIDADE_CAPTACAO = [
  0.11, 0.07, 0.05, 0.04, 0.04, 0.05, 0.06, 0.08, 0.10, 0.14, 0.15, 0.11,
] as const;

/** Sazonalidade da efetivação de matrícula. Desloca-se para o fim do ano. */
export const SAZONALIDADE_MATRICULA = [
  0.13, 0.09, 0.05, 0.03, 0.03, 0.03, 0.05, 0.09, 0.11, 0.15, 0.14, 0.10,
] as const;

/** Base de alunos matriculados por safra, para o painel de Matrículas. */
export const MATRICULAS_BASE: Record<Safra, number> = {
  2022: 612,
  2023: 658,
  2024: 704,
  2025: 731,
  2026: 749,
};

/**
 * Taxa de retenção (rematrícula) por safra. Usada para repartir a base entre
 * rematrículas e matrículas novas — nunca sorteadas em separado.
 */
export const RETENCAO_BASE: Record<Safra, number> = {
  2022: 0.85,
  2023: 0.87,
  2024: 0.88,
  2025: 0.86,
  2026: 0.89,
};

/** Turmas fictícias por ciclo. Nomenclatura genérica, sem correspondência real. */
export const TURMAS_POR_CICLO: Record<Ciclo, readonly string[]> = {
  EI: ['Infantil 1', 'Infantil 2', 'Infantil 3', 'Infantil 4', 'Infantil 5'],
  'EF-I': ['1º Ano', '2º Ano', '3º Ano', '4º Ano', '5º Ano'],
  'EF-II': ['6º Ano', '7º Ano', '8º Ano', '9º Ano'],
  EM: ['1ª Série EM', '2ª Série EM', '3ª Série EM'],
};

/** Canais de contato fictícios. Nenhum identifica ferramenta contratada. */
export const CANAIS = ['Site', 'Telefone', 'Indicação', 'Redes sociais', 'Visita espontânea'] as const;

/** Situações do funil. Espelham a estrutura de relatório, não pessoas. */
export const STATUS = ['matriculado', 'perdido', 'quente', 'frio', 'sem-classificacao'] as const;
export type StatusLead = (typeof STATUS)[number];

export const STATUS_ROTULO: Record<StatusLead, string> = {
  matriculado: 'Matriculado',
  perdido: 'Perdido',
  quente: 'Em negociação',
  frio: 'Sem avanço',
  'sem-classificacao': 'Sem classificação',
};

/** Metadados carimbados em todo artefato gerado. */
export interface MetadadosCenario {
  schema_version: number;
  scenario_version: string;
  seed: string;
  project_started_at: string;
  generated_at: string;
  reference_date: string;
  synthetic: true;
  nota: string;
}

export function metadados(seed: string = SEED_PADRAO): MetadadosCenario {
  return {
    schema_version: SCHEMA_VERSION,
    scenario_version: SCENARIO_VERSION,
    seed,
    project_started_at: PROJETO_INICIADO_EM,
    generated_at: GERADO_EM,
    reference_date: REFERENCE_DATE,
    synthetic: true,
    nota:
      'Dados inteiramente sintéticos, gerados por algoritmo determinístico. Não derivam de nenhuma base operacional. As datas representam uma cronologia fictícia; o projeto acadêmico começou em ' +
      PROJETO_INICIADO_EM +
      '.',
  };
}
