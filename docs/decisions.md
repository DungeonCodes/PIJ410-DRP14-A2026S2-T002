# Decisions

Registro das decisões de projeto. Uma entrada por decisão, mais recente ao final.

## Modelo

```
Data:
Decisão:
Motivo:
Alternativas consideradas:
Impacto esperado:
```

---

## ADR-001 — Markdown como fonte única; `.docx` é artefato gerado

**Data:** 2026-08-24

**Decisão:** Todo texto dos relatórios é escrito e revisado em Markdown, versionado em
`/docs/relatorio/`. O `.docx` de entrega é **gerado a partir do Markdown aprovado**, aplicando
os estilos do modelo oficial da UNIVESP, e fica em `/outputs/` (não versionado). O PDF postado
no AVA é gerado a partir desse `.docx`.

Fluxo:

```text
docs/relatorio/*.md   →   outputs/*.docx   →   outputs/*.pdf
   (fonte, no git)        (gerado)            (entrega no AVA)
```

Os modelos em `/docs/univesp/` permanecem **intactos** como referência normativa; nunca são
editados, apenas usados como origem dos estilos.

**Motivo:** o texto precisa de revisão iterativa por várias pessoas e de histórico de alterações.
Markdown dá diff legível no git, permite revisão linha a linha e não corrompe. `.docx` é binário:
o diff é ilegível, edições concorrentes conflitam e a formatação se perde com facilidade. Separar
fonte de artefato também evita a pergunta "qual versão do `.docx` é a atual".

**Alternativas consideradas:**

* *Editar o `.docx` diretamente a cada revisão.* Descartada: sem diff útil, risco de quebrar os
  estilos do modelo, e nenhuma rastreabilidade de quem mudou o quê.
* *Escrever no Google Docs e exportar.* Descartada: sai do repositório, quebra a rastreabilidade
  exigida em `/docs/agent_rules.md` e a exportação não preserva os estilos da UNIVESP.
* *Gerar o `.docx` com pandoc a partir do Markdown.* Descartada como caminho principal: pandoc
  cria estilos próprios e ignora os `styleId` do modelo oficial. A conversão precisa aplicar os
  estilos nomeados do modelo (`atexto-base`, `1ttulonivel1`, `ccitao` e demais), o que é feito
  editando `word/document.xml` sobre uma cópia do modelo.

**Impacto esperado:** revisão do texto fica no fluxo do git. A conversão para `.docx` passa a ser
um passo mecânico e verificável — validação de esquema mais conferência visual das páginas
renderizadas — em vez de trabalho manual sujeito a erro. Custo: é preciso manter o conversor.

---

## ADR-002 — Norma ABNT vigente, não a citada no modelo

**Data:** 2026-08-24

**Decisão:** O projeto adota **NBR 6023:2018** para referências e **NBR 10520:2023** para citações.

**Motivo:** o modelo da UNIVESP pede "ABNT 6023, de 2002" para citações. São duas imprecisões: a
NBR 6023 trata de *referências*, não de citações — citações são objeto da NBR 10520 — e a versão
vigente da 6023 é a de 2018. Seguir a norma atual é tecnicamente correto e o resultado permanece
compatível com o que o modelo exemplifica.

**Alternativas consideradas:**

* *Seguir o modelo ao pé da letra (6023:2002).* Descartada: reproduz um erro de referência
  normativa. Mantida como recuo caso o tutor exija aderência literal — o ajuste seria pontual.

**Impacto esperado:** referências e citações tecnicamente corretas. Risco baixo e reversível de o
tutor apontar divergência com o material da disciplina.

**Pendência:** confirmar com o tutor na primeira orientação.

---

## ADR-003 — Anonimização genérica da instituição parceira

**Data:** 2026-08-24

**Decisão:** A instituição parceira é referida por **descrição genérica**, sem nome nem codinome:
*"uma instituição de ensino privada da região metropolitana de São Paulo"*. A descrição é usada
de forma consistente em todo o relatório e nos anexos.

O atributo *privada* está sustentado pelo Plano de Ação, que menciona mantenedora e orçamento de
marketing; a região, pelos polos do grupo. O **segmento de atuação** (educação básica, superior
ou técnica) ainda não foi confirmado e por isso não é afirmado no texto — ver pendências.

Dados que **não** podem aparecer em nenhum artefato: nome da instituição, endereço, nomes de
funcionários, alunos ou responsáveis, contatos, IDs de contas de anúncio, valores contratuais e
qualquer identificador de sistema.

**Motivo:** `/docs/master_context.md` prevê anonimização e veda a exposição de dados sensíveis. As
rubricas cobram que o problema tenha sido **delimitado a partir de um contexto real** e que a
comunidade externa esteja caracterizada — nenhuma delas exige identificação nominal. A descrição
genérica satisfaz a exigência acadêmica sem expor a instituição, que é relevante porque os
trabalhos aprovados são publicados no repositório público do PI (Regulamento, Art. 20º).

**Alternativas consideradas:**

* *Codinome fixo ("Instituição Alfa").* Descartada: acrescenta uma camada de nomenclatura sem
  ganho, já que o trabalho envolve uma única instituição e não há risco de ambiguidade.
* *Nome real com autorização formal.* Descartada: daria mais concretude ao relato, mas exige
  autorização adicional à do TCLE e expõe a instituição em repositório público de forma
  permanente, sem contrapartida em nota.

**Impacto esperado:** o texto ganha uma forma fixa de referência, aplicada desde a Introdução. A
caracterização da comunidade externa exigida pela Metodologia passa a ser feita por atributos
(porte, segmento, região, perfil de investimento) em vez de identificação.

---

## Pendências aguardando decisão

Registradas para não se perderem; nenhuma foi decidida ainda.

| Pendência | Origem | Bloqueia |
|---|---|---|
| Segmento da instituição parceira (básica, superior ou técnica) | não consta no Plano de Ação | caracterização da comunidade externa; recorte do acervo bibliográfico (eixo E1 cobre apenas ensino superior) |
| RA de uma integrante consta como "a informar" | Plano de Ação | ficha catalográfica e capa |


## Resolvidas pelo Plano de Ação

Registradas aqui porque constaram como pendências e já não são.

* **Tema norteador.** O Plano de Ação declara o tema do grupo derivado dele: análise de conjuntos
  de dados existentes, métodos analíticos e recursos de inteligência artificial, com interface web
  para visualização dos resultados. Toda menção ao tema norteador no relatório deve amarrar-se a
  esses elementos.
* **Tamanho do grupo.** São 8 integrantes. O Regulamento (Art. 3º) admite de 5 a 8, logo o grupo
  está em conformidade. As Orientações para Avaliação mencionam "até 7", mas o Regulamento é a
  norma superior e prevalece. Vale mencionar à orientadora na primeira orientação.
* **Motivação e escolha do local.** Descritas no Plano de Ação e incorporadas à Introdução.
* **Cursos e disciplinas do grupo.** O grupo reúne estudantes de Bacharelado em Ciência de Dados
  e Engenharia da Computação. A Introdução relaciona as disciplinas informadas pelo grupo às
  ementas dos PPCs oficiais da UNIVESP, sem pressupor que todos os integrantes cursaram todas
  elas.
* **Uso de algoritmos determinísticos e IA agêntica.** Confirmado pelo grupo em 25 ago. 2026:
  inferências e indicadores serão produzidos por rotinas determinísticas e reprodutíveis; a IA
  agêntica via CLI servirá de apoio controlado a cenários de simulação, interpretação e revisão.
  As saídas dos agentes não substituem cálculos, evidência empírica, decisão humana ou a validação
  com a comunidade externa. O eixo E11 integra a metodologia de desenvolvimento e permanece
  distinto do ciclo de Design Thinking exigido pela rubrica.
