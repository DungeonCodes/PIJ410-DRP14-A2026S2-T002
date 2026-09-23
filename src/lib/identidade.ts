// =============================================================================
// IDENTIDADE DA DEMONSTRAÇÃO ACADÊMICA
// =============================================================================
// Este painel NUNCA deve ser lido como o ambiente operacional de uma
// instituição real. Duas coisas garantem isso, e são diferentes entre si:
//
//   1. o produto tem nome próprio, acadêmico (`APP`);
//   2. a instituição que aparece nos dados é uma ENTIDADE FICTÍCIA do cenário
//      sintético (`INSTITUICAO_FICTICIA`), inventada para a demonstração.
//
// Relação com a ADR-003 (`docs/decisions.md`, protegida e não alterada aqui):
// aquela decisão veda dar nome ou codinome à INSTITUIÇÃO PARCEIRA REAL, que no
// relatório é referida por descrição genérica. Nomear uma entidade fictícia de
// um cenário sintético é outra coisa — não identifica a parceira, não é um
// codinome dela, e existe só para que a interface tenha um cabeçalho coerente.
// A regra da ADR-003 continua valendo integralmente na documentação científica,
// que esta iniciativa não toca.
// =============================================================================

/** Nome do produto acadêmico. Não é o nome de nenhuma instituição. */
export const APP = {
  nome: 'Painel Analítico Acadêmico',
  disciplina: 'PIJ410 — Projeto Integrador em Computação III',
  instituicaoDeEnsino: 'UNIVESP',
  semestre: '2026 · 2º semestre',
} as const;

/**
 * Entidade fictícia retratada pelo cenário sintético. Não corresponde a
 * nenhuma instituição real e não é codinome de nenhuma.
 */
export const INSTITUICAO_FICTICIA = {
  nome: 'Instituição Educacional Alfa',
  descritor: 'entidade fictícia · cenário de demonstração',
} as const;

/**
 * Selo de dados sintéticos. Texto fixo e inequívoco: nunca usar formulação
 * ambígua ("dados de exemplo", "amostra") e jamais "dados reais".
 */
export const SELO_SINTETICO = 'Ambiente acadêmico · dados sintéticos' as const;

/**
 * Frase de contexto exibida junto ao selo quando há espaço. Declara os três
 * fatos que impedem leitura equivocada do painel.
 */
export const AVISO_SINTETICO =
  'Todos os números deste painel são gerados por algoritmo determinístico a partir de uma semente versionada. Não há conexão com nenhum sistema, conta de anúncios ou base operacional. Nenhum dado pessoal é representado.' as const;
