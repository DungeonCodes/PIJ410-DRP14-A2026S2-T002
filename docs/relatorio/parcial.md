# Relatório Parcial — PIJ410

> Fonte única do texto do relatório parcial (ADR-001). O `.docx` de entrega é gerado a partir
> deste arquivo. Não editar o `.docx` diretamente.
>
> **Status:** em redação. Seções concluídas são marcadas com ✅; em aberto, com ⬜.
> Marcadores `«PENDENTE: …»` indicam decisão do grupo ainda não tomada — nenhum documento vai
> para conversão com marcador pendente.

| Seção | Rubrica | Status |
|---|---|---|
| Pré-textuais (capa, folha de rosto, ficha, resumo, sumário) | 2,0 (Linguagem e Referências) | ⬜ |
| 1 Introdução | 1,0 | ⬜ em revisão |
| 2.1 Objetivos | 1,0 | ⬜ |
| 2.2 Justificativa e delimitação do problema | 1,0 | ⬜ |
| 2.3 Fundamentação teórica | 2,0 | ⬜ |
| 2.4 Metodologia | 1,5 | ⬜ |
| 2.5 Resultados preliminares: solução inicial | 1,5 | ⬜ |
| Referências | — | ⬜ |

## Dados do projeto

Consolidados a partir do Plano de Ação do grupo (`/docs/univesp/Plano_de_Acao_PIJ410_2026S2.docx`).
Fonte de verdade para título, problema e objetivo — o relatório não pode divergir do Plano, sob
pena de o item "Adequações" do relatório final registrar inconsistência.

| Campo | Conteúdo |
|---|---|
| Turma | PIJ410-DRP14-A2026S2-T002 |
| Orientadora | Letícia Vieira Santos |
| Polos | Aricanduva, São Rafael, Rosa da China, Jaçanã |
| Integrantes | 8 (ver Plano de Ação; um RA ainda a informar) |
| Título provisório | Plataforma Analítica para Apoio à Tomada de Decisão em Investimentos de Mídia Digital no Contexto Educacional |
| Tema específico | Análise de dados de investimentos em mídia digital para apoio à tomada de decisão em uma instituição de ensino, com dados históricos, algoritmos analíticos e modelos de inteligência artificial, e visualização em interface web |
| Problema | Dados de investimento e desempenho de mídia digital encontram-se dispersos em diferentes fontes, dificultando a análise do retorno das campanhas e a tomada de decisão sobre a distribuição do orçamento de marketing |
| Objetivo | Desenvolver uma plataforma web para consolidar e analisar dados de investimentos em mídia digital de uma instituição de ensino, utilizando métodos analíticos e recursos de inteligência artificial para apoiar a interpretação dos resultados e a tomada de decisão sobre a distribuição do orçamento de marketing |
| Comunidade externa | Instituição de ensino privada da região metropolitana de São Paulo; acesso por intermédio de um integrante; interlocutoras: gestora de marketing e direção/mantenedora |
| Entrega do parcial | Quinzena 4 — até 04/10/2026 |

---

## 1 Introdução

<!-- RUBRICA (1,0 pt) — nota máxima exige as cinco ações, com clareza:
     desenvolve o tema · anuncia a ideia básica · situa o tema no contexto geral da área ·
     descreve as motivações da escolha · indica o objeto do trabalho.
     As Orientações para Avaliação acrescentam: indicar quais disciplinas cursadas
     auxiliaram no desenvolvimento do projeto. -->

A divulgação de instituições de ensino privadas passou a depender, de forma crescente, de
campanhas veiculadas em plataformas de anúncios digitais. Além de consumirem parcela
significativa do orçamento de marketing dessas instituições, tais plataformas produzem, como
subproduto da veiculação, um registro contínuo e volumoso de informações sobre investimento,
alcance, cliques e conversões. Constitui-se assim um conjunto de dados históricos cuja análise
pode orientar decisões de gestão — objeto de estudo que se situa no campo da análise de dados
aplicada ao apoio à tomada de decisão. No contexto educacional, painéis de indicadores podem
apoiar gestores na compreensão de informações oriundas de diferentes sistemas e nos processos de
tomada de decisão (LEMES; DIAS; OLIVEIRA, 2023).

Em campanhas digitais, métricas como retorno sobre investimento e taxa de conversão subsidiam a
avaliação das campanhas; entretanto, a multiplicidade de configurações possíveis torna essa
análise não trivial e influencia as escolhas de investimento (MARTINS, 2019). Na instituição
parceira, os registros de investimento e desempenho permanecem dispersos entre fontes distintas,
com indicadores, unidades de medida e recortes temporais próprios (GRUPO DO PROJETO INTEGRADOR,
2026). Essa fragmentação dificulta a comparação dos resultados entre canais e campanhas, a
avaliação do retorno obtido e a decisão sobre como distribuir o orçamento de marketing (GRUPO DO
PROJETO INTEGRADOR, 2026). O problema que este trabalho enfrenta é, portanto, de natureza
analítica antes de ser tecnológica: os dados existem, mas não se apresentam em forma que sustente
a decisão.

A ideia básica que orienta o trabalho é que esse conjunto disperso pode ser consolidado,
submetido a métodos analíticos e a recursos de inteligência artificial que auxiliem a
interpretação dos resultados, e apresentado em uma interface web capaz de tornar os
indicadores acompanháveis pela gestão. O objeto deste trabalho é, assim, o desenvolvimento e a
validação de uma plataforma analítica para apoio à tomada de decisão sobre investimentos em
mídia digital no contexto educacional, construída a partir de dados históricos de campanhas de
uma instituição de ensino e avaliada junto aos profissionais que respondem por essas decisões.

A escolha do tema decorre de uma necessidade real, manifestada por uma instituição de ensino
privada da região metropolitana de São Paulo à qual o grupo teve acesso por intermédio de um de
seus integrantes. Em conversa inicial, a gestora de marketing da instituição expôs a
dificuldade de estabelecer quanto deveria ser investido em tráfego pago e de avaliar se os
valores praticados eram adequados aos objetivos institucionais. Em contato posterior com a
direção, o grupo buscou identificar quais indicadores seriam mais relevantes para acompanhar os
investimentos realizados e seus resultados ao longo do tempo. A receptividade da equipe e o
acesso direto aos profissionais envolvidos indicaram condições favoráveis para desenvolver a
solução e submetê-la à validação da própria comunidade participante.

Soma-se a essa demanda o interesse do grupo em aplicar, sobre um problema concreto, os
conteúdos desenvolvidos ao longo do curso. «PENDENTE: nome do curso e listagem das disciplinas
cursadas, com os conteúdos e materiais específicos mobilizados — a rubrica exige referência a
material específico, não apenas o nome da disciplina. O Plano de Ação não traz essa
informação.»

<!-- FORMATAÇÃO (aplicada na conversão para .docx):
     título "1 Introdução" → estilo 1ttulonivel1
     parágrafos            → estilo atexto-base
     Este bloco de texto tem 5 parágrafos. O modelo da UNIVESP determina que o parágrafo em
     branco entre parágrafos vem do próprio estilo (after=360); não inserir linha vazia. -->

---

## 2 Desenvolvimento

### 2.1 Objetivos

⬜ Não iniciado.

### 2.2 Justificativa e delimitação do problema

⬜ Não iniciado.

### 2.3 Fundamentação teórica

⬜ Não iniciado. Acervo levantado em `/docs/referencias.md` (36 obras, todas ainda `candidata`).

### 2.4 Metodologia

⬜ Não iniciado.

### 2.5 Resultados preliminares: solução inicial

⬜ Não iniciado.

---

## Referências

⬜ Gerada a partir de `/docs/referencias.md`, incluindo apenas as obras efetivamente citadas.
