// =============================================================================
// PRNG DETERMINÍSTICO — mulberry32 sobre semente derivada por string
// =============================================================================
// `Math.random()` é proibido em todo o pipeline sintético. Um dataset acadêmico
// precisa ser REPRODUZÍVEL: a mesma versão de esquema, a mesma versão de
// cenário e a mesma semente têm de produzir exatamente os mesmos números, em
// qualquer máquina, em qualquer dia. Sem isso, nenhum resultado apresentado no
// relatório pode ser conferido por terceiros.
//
// mulberry32 é escolhido por ser curto, auditável em uma leitura e ter estado
// de 32 bits explícito — não porque tenha qualidade criptográfica, que aqui é
// irrelevante e enganosa de sugerir.
// =============================================================================

/**
 * Hash FNV-1a de 32 bits. Converte um rótulo legível ("captacao:2025:EI") em
 * semente numérica, para que cada série tenha seu próprio fluxo sem que o
 * autor precise administrar números mágicos.
 */
export function semearDe(texto: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < texto.length; i += 1) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export interface Aleatorio {
  /** Próximo float em [0, 1). */
  proximo(): number;
  /** Inteiro em [min, max], inclusivo nos dois extremos. */
  inteiro(min: number, max: number): number;
  /** Float em [min, max). */
  entre(min: number, max: number): number;
  /** Escolhe um item da lista. Lista vazia lança — é erro de programação. */
  escolher<T>(itens: readonly T[]): T;
}

/**
 * Gerador a partir de uma semente numérica ou de um rótulo. Dois geradores
 * criados com a mesma entrada produzem a mesma sequência.
 */
export function criarAleatorio(semente: number | string): Aleatorio {
  let estado = (typeof semente === 'string' ? semearDe(semente) : semente >>> 0) || 1;

  const proximo = () => {
    estado = (estado + 0x6d2b79f5) >>> 0;
    let t = estado;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  return {
    proximo,
    inteiro: (min, max) => min + Math.floor(proximo() * (max - min + 1)),
    entre: (min, max) => min + proximo() * (max - min),
    escolher: (itens) => {
      if (itens.length === 0) throw new Error('escolher() recebeu lista vazia');
      return itens[Math.floor(proximo() * itens.length)];
    },
  };
}

/**
 * Distribui `total` em `partes` posições respeitando pesos, com o resto
 * atribuído por maior sobra. Garante `soma(resultado) === total` exatamente —
 * é o que impede a soma das partes de divergir do total exibido.
 */
export function repartirInteiro(total: number, pesos: readonly number[]): number[] {
  const somaPesos = pesos.reduce((a, b) => a + b, 0);
  if (somaPesos <= 0 || pesos.length === 0) return pesos.map(() => 0);

  const exatos = pesos.map((p) => (total * p) / somaPesos);
  const base = exatos.map((v) => Math.floor(v));
  let resto = total - base.reduce((a, b) => a + b, 0);

  const ordem = exatos
    .map((v, i) => ({ i, sobra: v - Math.floor(v) }))
    .sort((a, b) => b.sobra - a.sobra || a.i - b.i);

  for (const { i } of ordem) {
    if (resto <= 0) break;
    base[i] += 1;
    resto -= 1;
  }
  return base;
}

/** Arredonda para `casas` decimais de forma estável (evita 0.1+0.2 na saída). */
export function arredondar(valor: number, casas = 2): number {
  const f = 10 ** casas;
  return Math.round((valor + Number.EPSILON) * f) / f;
}
