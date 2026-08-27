// =============================================================================
// FEATURE GATE ACADÊMICO — fonte ÚNICA de disponibilidade dos módulos
// =============================================================================
// O plano completo do espelhamento existe desde 27/08/2026, mas a
// disponibilização funcional é INCREMENTAL. Este módulo é o único lugar do
// repositório que decide se um módulo está disponível ao usuário.
//
// Por que uma fonte única, e não um booleano por página:
//
//   1. um módulo bloqueado precisa sumir de TRÊS lugares ao mesmo tempo —
//      sidebar, menu mobile e cards de navegação. Três checagens independentes
//      divergem na primeira distração;
//   2. a rota precisa falhar FECHADA mesmo quando alguém digita a URL. Se a
//      decisão vivesse na navegação, a página continuaria servível;
//   3. o teste automatizado precisa de um objeto para percorrer. Booleanos
//      espalhados não são enumeráveis.
//
// NÃO existe leitura de relógio aqui. `PROJETO_INICIADO_EM` é um fato datado,
// não um gatilho: uma fase não "abre sozinha" quando a data chega. A abertura é
// um commit humano que muda `habilitado` para `true`. Isso é deliberado — o
// rollout é uma decisão do grupo, não uma passagem de tempo.
// =============================================================================

/**
 * Início da adaptação acadêmica. NÃO é a data de criação da arquitetura de
 * referência, que já existia. Ver `docs/migracao-modelo/arquitetura/`.
 */
export const PROJETO_INICIADO_EM = '2026-08-27';

/** Fases do rollout acadêmico. */
export type Fase = 1 | 2 | 3 | 4;

export interface ModuloAcademico {
  /** Chave estável — usada por rotas, navegação e testes. */
  chave: string;
  /** Rota canônica no App Router. */
  rota: string;
  /** Rótulo exibido na navegação quando habilitado. */
  rotulo: string;
  /** Fase do rollout em que o módulo entra. */
  fase: Fase;
  /**
   * Disponível ao usuário AGORA. `false` = a rota responde 404 e o módulo não
   * aparece em nenhuma superfície de navegação, mesmo que o código exista.
   */
  habilitado: boolean;
  /** Grupo visual da navegação, quando o módulo pertence a um. */
  grupo?: string;
}

/**
 * O catálogo. Ordem = ordem de exibição na navegação.
 *
 * PREPARADO NO CÓDIGO ≠ DISPONÍVEL AO USUÁRIO: os módulos das fases 2–4 têm
 * rota, página e estrutura no repositório para que o espelhamento com a
 * arquitetura de referência seja incremental e revisável. Todos permanecem
 * `habilitado: false` até que o grupo decida abri-los.
 */
export const MODULOS: readonly ModuloAcademico[] = [
  { chave: 'captacao', rota: '/captacao', rotulo: 'Captação', fase: 1, habilitado: true },
  { chave: 'matriculas', rota: '/matriculas', rotulo: 'Matrículas', fase: 1, habilitado: true },

  { chave: 'ads', rota: '/ads', rotulo: 'Visão geral', fase: 2, habilitado: false, grupo: 'Ads' },
  { chave: 'ads-google', rota: '/ads/google', rotulo: 'Google Ads', fase: 2, habilitado: false, grupo: 'Ads' },
  { chave: 'ads-meta', rota: '/ads/meta', rotulo: 'Meta Ads', fase: 2, habilitado: false, grupo: 'Ads' },
  { chave: 'ads-estrategia', rota: '/ads/estrategia', rotulo: 'Estratégia', fase: 2, habilitado: false, grupo: 'Ads' },

  { chave: 'organico', rota: '/organico', rotulo: 'Reels orgânicos', fase: 3, habilitado: false },

  { chave: 'gestao', rota: '/gestao', rotulo: 'Objetivo da Gestão', fase: 4, habilitado: false },
  { chave: 'arquitetura', rota: '/arquitetura', rotulo: 'Arquitetura & Algoritmos', fase: 4, habilitado: false },
];

/** Descrição de cada fase, para documentação e para a tela de contexto. */
export const FASES: Record<Fase, { nome: string; situacao: 'ativa' | 'planejada' }> = {
  1: { nome: 'Captação e Matrículas', situacao: 'ativa' },
  2: { nome: 'Ads', situacao: 'planejada' },
  3: { nome: 'Reels orgânicos', situacao: 'planejada' },
  4: { nome: 'Objetivo da Gestão e Arquitetura', situacao: 'planejada' },
};

/** Módulo pela chave, ou `null`. */
export function moduloPorChave(chave: string): ModuloAcademico | null {
  return MODULOS.find((m) => m.chave === chave) ?? null;
}

/** Normaliza pathname: sem barra final, sem query/hash. */
function normalizar(rota: string): string {
  const limpo = rota.split('?')[0].split('#')[0];
  if (limpo.length > 1 && limpo.endsWith('/')) return limpo.slice(0, -1);
  return limpo || '/';
}

/**
 * Módulo dono de um pathname — **match mais específico vence**.
 *
 * Não é prefix match solto: em `/ads`, `/ads/google` não casa, então só a
 * "Visão geral" é a dona. Em `/ads/google`, os candidatos são `/ads` e
 * `/ads/google`, e o mais longo vence. Sub-rotas sem módulo próprio herdam o
 * ancestral mais próximo — o que faz uma futura `/ads/meta/<id>` já nascer
 * bloqueada junto com `/ads/meta`, sem precisar ser listada.
 */
export function moduloDaRota(pathname: string): ModuloAcademico | null {
  const p = normalizar(pathname);
  let melhor: ModuloAcademico | null = null;
  for (const m of MODULOS) {
    if (p === m.rota || p.startsWith(`${m.rota}/`)) {
      if (melhor === null || m.rota.length > melhor.rota.length) melhor = m;
    }
  }
  return melhor;
}

/**
 * Um módulo está disponível? **Fail closed**: chave desconhecida devolve
 * `false`. Nenhum módulo é liberado por omissão.
 */
export function moduloHabilitado(chave: string): boolean {
  return moduloPorChave(chave)?.habilitado === true;
}

/**
 * A rota está disponível? Rota fora do catálogo (`/`, por exemplo) NÃO é
 * governada por este gate e devolve `true` — quem decide o 404 dessas é o
 * próprio App Router.
 */
export function rotaHabilitada(pathname: string): boolean {
  const m = moduloDaRota(pathname);
  return m === null ? true : m.habilitado;
}

/** Somente os módulos que o usuário pode ver e acessar hoje. */
export function modulosHabilitados(): ModuloAcademico[] {
  return MODULOS.filter((m) => m.habilitado);
}

/** Módulos de uma fase. */
export function modulosDaFase(fase: Fase): ModuloAcademico[] {
  return MODULOS.filter((m) => m.fase === fase);
}
