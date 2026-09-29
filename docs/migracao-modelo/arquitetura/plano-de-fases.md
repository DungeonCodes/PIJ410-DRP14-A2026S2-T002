# Plano de fases — espelhamento acadêmico

**Data do plano:** 27/08/2026 · **Decisão:** [ADR-A001](ADR-A001-espelhamento-dados-sinteticos-rollout.md)

> O **plano completo existe desde 27/08/2026**. A **disponibilização funcional é incremental**.
> Uma coisa é ter o desenho; outra é entregar o módulo. Este documento registra as duas.

Nenhuma fase abre por data. Abrir é mudar `habilitado` para `true` em `src/lib/fases.ts` — um
commit humano, revisável, com o módulo pronto e testado.

---

## FASE 0 — Governança  ✅ concluída em 27/08/2026

Estabelecer as regras antes de escrever a primeira página.

| Entrega | Onde |
|---|---|
| Decisão registrada | [`ADR-A001`](ADR-A001-espelhamento-dados-sinteticos-rollout.md) |
| Matriz de classificação de arquivos | [`matriz-classificacao.md`](matriz-classificacao.md) |
| Desenho da sincronização futura | [`manifesto-sincronizacao.md`](manifesto-sincronizacao.md) |
| Feature gate central | `src/lib/fases.ts` |
| Guarda de servidor fail-closed | `src/lib/gate-servidor.ts` |
| Verificador de integridade do scaffold científico | `scripts/verificar-integridade-docs.mjs` |
| Varredura de não vazamento | `scripts/test-nao-vazamento.mjs` |

**Critério de saída:** zona científica byte a byte inalterada; varredura de vazamento sem
achados; aplicação compila sem variável de ambiente.

---

## FASE 1 — Captação + Matrículas  ✅ ativa desde 27/08/2026

Os dois módulos que não dependem de nenhuma plataforma externa — por isso vieram primeiro: são
os que se sustentam inteiramente com dados sintéticos, sem precisar simular a semântica de uma
API de anúncios.

O ambiente acadêmico sanitizado desta fase está funcional e publicado na Vercel. A publicação
contém somente Captação e Matrículas, sem APIs reais, bases operacionais ou credenciais, e não
altera a situação planejada das fases 2 a 4.

| Entrega | Onde |
|---|---|
| Motor determinístico (PRNG com semente) | `src/lib/sintetico/prng.ts` |
| Configuração do cenário | `src/lib/sintetico/cenario.ts` |
| Geradores | `src/lib/sintetico/gerar-captacao.ts`, `gerar-matriculas.ts` |
| Datasets versionados | `src/data/captacao-sintetico.json`, `matriculas-sintetico.json` |
| Páginas | `/captacao`, `/matriculas` |
| Testes | `test:fases`, `test:determinismo`, `test:nao-vazamento` |

**Escopo funcional entregue:** métricas de topo, funil com taxas derivadas, distribuição de
situação, séries mensais por safra, origem do contato, comparativo por safra; e, em matrículas,
composição rematrícula × nova por safra, ciclo e turma, sazonalidade e tabela de retenção com
indeterminação declarada.

**Critério de saída:** invariantes matemáticos verdes sob pelo menos três sementes distintas.

---

## FASE 2 — Ads  ⏳ planejada

Espelhar `Visão geral`, `Google Ads`, `Meta Ads` e `Estratégia`.

**O que precisa ser construído antes de abrir:**

1. Cenário sintético de mídia paga com **relações analíticas preservadas** — não basta gerar
   números que fechem em CTR e CPC. O cenário precisa contar uma história coerente, do tipo:
   *há demanda disponível + há perda relevante por orçamento + a verba é insuficiente ⇒ existe
   base para recomendar aumento de investimento.* Sem isso, a página de estratégia exibiria
   uma recomendação sem premissa.
2. Invariantes de mídia: `CTR = cliques/impressões`, `CPC = custo/cliques`,
   `CPA = custo/conversões`, e janelas temporais que **não** sejam deriváveis umas das outras
   por divisão (uma frequência semanal não é a mensal ÷ 4).
3. Vocabulário neutro: nenhuma campanha, conta ou identificador do ambiente real.

**Não abrir enquanto** a página de estratégia não puder declarar os limites do que o cenário
permite afirmar.

---

## FASE 3 — Reels orgânicos  ⏳ planejada

Espelhar `/organico`.

**O que precisa ser construído antes de abrir:**

1. Conjunto sintético de publicações com métricas de alcance e interação coerentes entre si.
2. Score de conteúdo com pesos declarados e distinção entre **métrica ausente** e **métrica
   zero** — um item sem medição não pode despencar no ranking como se tivesse performado mal.
3. Ordenação total com desempate explícito, para que o ranking seja reprodutível e não dependa
   da ordem incidental de entrada.

---

## FASE 4 — Objetivo da Gestão + Arquitetura & Algoritmos  ⏳ planejada

**Objetivo da Gestão** — página de premissa externa. No cenário acadêmico, um plano fictício de
ocupação de turmas, isolado da base sintética apurada, para demonstrar a separação entre
*premissa recebida* e *dado calculado*.

**Arquitetura & Algoritmos** — documentação técnica em prosa dentro da própria aplicação:
stack, fontes, e a lógica de cada algoritmo. É a página que fecha o argumento de
reprodutibilidade do trabalho, e por isso vem por último: só faz sentido quando há algoritmos
para descrever.

---

## FASE 5 — Sincronização estrutural  ⏳ planejada

Permitir que evoluções estruturais da arquitetura de referência cheguem ao projeto acadêmico
**sem** transportar dado, segredo ou identidade.

Desenho em [`manifesto-sincronizacao.md`](manifesto-sincronizacao.md). Direção **unidirecional**
`ORIGINAL → ACADÊMICO`, sempre com revisão humana, nunca como clone bruto.

**Deliberadamente a última fase.** Um sincronizador construído antes da governança seria um
canal de transporte sem filtro — exatamente o risco que todo o resto do plano existe para
evitar.

---

## Quadro-resumo

```text
27/08/2026

FASE 0 GOVERNANÇA        ✅ concluída
FASE 1 ATIVA
├─ Captação
└─ Matrículas

FASE 2 PLANEJADA
└─ Ads (visão geral · Google · Meta · Estratégia)

FASE 3 PLANEJADA
└─ Reels orgânicos

FASE 4 PLANEJADA
├─ Objetivo da Gestão
└─ Arquitetura & Algoritmos

FASE 5 PLANEJADA
└─ Sincronização estrutural segura
```
