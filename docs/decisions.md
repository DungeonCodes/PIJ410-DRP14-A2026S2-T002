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

Snapshots formais de revisão são cópias numeradas do Markdown-fonte, como
`docs/relatorio/Relatorio_Parcial_V1.md`. Cada snapshot preserva o estado aprovado naquele
momento e não é alterado retroativamente: correções futuras são feitas primeiro em
`docs/relatorio/parcial.md` e geram a próxima versão numerada (V2, V3 e assim por diante).
DOCX e PDF permanecem artefatos derivados ou referências de colaboração, nunca fontes
principais.

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

### Emenda de 2026-10-01 — Política dos arquivos Markdown do relatório

`docs/relatorio/parcial.md` continua sendo a fonte de verdade editorial. Os arquivos
`Relatorio_Parcial_V1.md`, `Relatorio_Parcial_V2.md`, `Relatorio_Parcial_V3.md` e futuras versões
numeradas são artefatos de revisão, comparação e rastreabilidade; não são o documento acadêmico
final entregue à UNIVESP.

O DOCX será preparado manualmente, posteriormente, usando o Markdown como referência. Por serem
artefatos de revisão, os Markdown podem conter marcações editoriais explícitas, como `(V2  SAI: ...)`,
`(V3  ENTRA: ...)` e `(V2  V3  MOVE: ...)`; essas marcações servem exclusivamente à revisão humana e
não devem ser copiadas para o DOCX final. O DOCX não é fonte de verdade e alterações manuais nele
que precisem tornar-se oficiais devem primeiro ser reconciliadas em `parcial.md`.

Para orientar a montagem manual, a convenção editorial usa `(DOCX  COPIAR: ...)` para conteúdo
vigente selecionado, `(REVISÃO  NÃO COPIAR: ...)` para histórico e notas editoriais, e
`(DOCX  AÇÃO MANUAL: ...)` para tarefas de montagem. Esses três marcadores também não pertencem ao
DOCX final; apenas orientam a seleção humana.

V1 e V2 são versões encerradas, imutáveis e históricas. A versão corrente de revisão, atualmente
V3, pode receber anotações e correções enquanto permanecer sincronizada com `parcial.md`; ela só se
torna encerrada mediante decisão explícita. Quando houver nova rodada após o encerramento, a fonte
gerará a próxima versão numerada, como V4, sem modificar V3.

### Emenda de 2026-10-06 — Fonte editorial do Relatório Final

`docs/relatorio/parcial.md` permanece a fonte editorial do Relatório Parcial e não será
sobrescrito ou convertido na fonte do Relatório Final. `docs/relatorio/final.md` passa a ser a
fonte editorial própria do Relatório Final.

O Relatório Final terá ciclo de versões independente, com snapshots numerados como
`Relatorio_Final_V1.md`, `Relatorio_Final_V2.md` e seguintes. Esses snapshots serão criados
somente após a revisão da fonte editorial e não serão alterados retroativamente. Nesta etapa,
nenhum snapshot do Relatório Final foi criado.

O DOCX continuará sendo montado manualmente a partir do Markdown aprovado. O arquivo
`docs/migracao-modelo/referencias/Modelo_Relatorio_Final.docx` é referência estrutural e de
formatação, permanece intacto e não constitui fonte editorial.

---

## ADR-002 — Norma ABNT vigente, não a citada no modelo

**Data:** 2026-08-24

**Decisão:** O projeto adota **NBR 6023:2018** para referências e **NBR 10520:2023** para citações.

**Motivo:** o modelo da UNIVESP pede "ABNT 6023, de 2002" para citações. São duas imprecisões: a
NBR 6023 trata de *referências*, não de citações — citações são objeto da NBR 10520 — e a versão
vigente da 6023 é a de 2018. Seguir a norma atual é tecnicamente correto e o resultado permanece
compatível com o que o modelo exemplifica.

**Aplicação confirmada em 2026-08-26:** no sistema autor-data, a autoria de pessoa física dentro
dos parênteses deve ser grafada em maiúsculas e minúsculas, seguida de vírgula e ano — por exemplo,
`(Saura, 2021)` e `(Saura; Palos-Sánchez; Suárez, 2017)`. A forma toda em maiúsculas, como
`(SAURA, 2021)`, corresponde à orientação anterior à NBR 10520:2023. Siglas institucionais podem
permanecer em maiúsculas, como em `(UNIVESP, 2026)`.

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

## ADR-004 — Fichamento obrigatório para cada obra do acervo bibliográfico

**Data:** 2026-08-27

**Decisão:** Toda obra adicionada a `docs/referencias.md` deverá receber, na mesma alteração, duas
entradas complementares: uma síntese de triagem em `docs/resumos_obras_bibliograficas.md` e um
registro em `docs/fichamentos_bibliograficos.md`. A síntese deve declarar sua base documental,
apresentar o objetivo e a contribuição geral da obra, limites, decisão preliminar e link de acesso.
O fichamento deve conter a identificação da obra, link persistente, situação de leitura e, quando a
obra estiver lida, resumo próprio, recorte adotado pelo PI, localização verificável do recorte e
seção do relatório em que será usada.

Uma obra recém-localizada pode entrar como `candidata`. Sua síntese de triagem pode ser baseada em
abstract ou metadados, desde que essa limitação esteja explícita e não seja apresentada como leitura
integral. O fichamento deverá registrar `leitura pendente`, sem resumo ou recorte inferidos. A obra
só poderá ser citada no relatório depois de passar para `fichada` ou `usada no relatório`. Citação
direta exige a página verificada no fichamento; citações indiretas devem apontar a seção, capítulo
ou outro localizador útil quando houver.

**Motivo:** a lista ABNT informa a existência e os metadados da fonte, mas não permite comparar a
proposta geral das obras nem torna transparente qual parte sustenta o projeto. A síntese separada
facilita a decisão coletiva sobre o que ler e incorporar; o fichamento permite conferir o recorte,
evita extrapolações e preserva a rastreabilidade entre fonte, decisão e redação do relatório.

**Alternativas consideradas:**

* *Manter apenas `docs/referencias.md`.* Descartada: não registra proposta geral, leitura, recorte
  nem ponto de conferência da obra.
* *Misturar resumo integral e recorte em uma única tabela.* Descartada: dificulta distinguir o que
  a obra discute do que o PI efetivamente adotou.
* *Criar fichamento somente para fontes já citadas.* Descartada: deixaria candidatas sem responsável,
  acesso ou histórico de triagem e tornaria a regra difícil de aplicar nas próximas inclusões.

**Impacto esperado:** o acervo passa a ter uma trilha verificável de catálogo, triagem e uso. A
inclusão de uma fonte exige um pequeno trabalho adicional, compensado por decisão coletiva mais
simples e menor risco de citação sem aderência ao recorte do PI.

---

## ADR-005 — Bibliografia selecionada por função argumentativa, não por volume

**Data:** 2026-08-27

**Decisão:** O relatório parcial utilizará somente obras lidas que sustentem uma afirmação necessária
e não redundante. Fontes candidatas não serão promovidas apenas para aumentar o número de citações.
Na revisão atual, foram mantidas as bases já adotadas para marketing digital, métricas, atribuição,
pipelines, reprodutibilidade, aprendizagem de máquina, dashboards, UX, Design Thinking e agentes.

As candidatas do eixo E1 permanecem sem uso até a confirmação do segmento da instituição parceira,
pois tratam de ensino superior. A obra de Sedrakyan, Mannens e Verbert permanece candidata porque
seu objeto são dashboards de aprendizagem, e não painéis gerenciais de campanhas. Sivarajah et al.
permanece candidata para evitar classificar o conjunto do PI como Big Data sem evidência de volume,
velocidade ou variedade que exija esse enquadramento. Documentações comerciais de modelos foram
retiradas do relatório: o fornecedor e a configuração são instrumentais e não fundamentam o método.

**Motivo:** a rubrica avalia suficiência, confiabilidade e síntese das teorias. Acumular referências
laterais enfraquece o encadeamento e pode criar afirmações mais amplas que o recorte empírico.

**Alternativas consideradas:**

* *Citar todas as obras catalogadas.* Descartada: parte do acervo ainda não foi lida e vários textos
  pertencem a domínios ou decisões técnicas que não aparecem no relatório parcial.
* *Manter nomes de modelos comerciais na justificativa.* Descartada: a informação é volátil e não
  modifica o protocolo de controle, rastreabilidade ou revisão humana.

**Impacto esperado:** fundamentação mais coesa, lista de referências correspondente ao texto e
critérios explícitos para promover candidatas em revisões futuras.

---

## ADR-006 — Baseline da aplicação acadêmica independente e rollout por fases

**Data:** 2026-08-27

**Decisão:** A partir de 27/08/2026, o PIJ410 possui uma aplicação web acadêmica própria em
Next.js + TypeScript, independente e construída incrementalmente com dados sintéticos. A Fase 1
disponibiliza exclusivamente os módulos Captação e Matrículas. Ads, Reels orgânicos, Objetivo da
Gestão e Arquitetura & Algoritmos permanecem planejados e bloqueados, ainda que possam ter estrutura
preparada no código.

O ambiente acadêmico sanitizado correspondente à Fase 1 está funcional e publicado na Vercel. Essa
publicação não amplia o escopo disponível: somente Captação e Matrículas estão acessíveis, com dados
sintéticos e sem conexão com APIs, sistemas operacionais ou bases reais da instituição parceira.

A aplicação pode utilizar uma arquitetura externa de referência apenas no nível conceitual e
estrutural. Ela não tem dependência de runtime, importação entre repositórios, caminho local,
arquivo, API privada, credencial ou dado proveniente dessa referência. A abertura de uma fase exige
alteração humana explícita e versionada; nenhuma fase é liberada por data.

**Motivo:** a baseline torna verificável o que foi efetivamente disponibilizado no início da
aplicação, preserva a cronologia do PI e impede que demonstrações sintéticas sejam confundidas com
dados ou operação da instituição parceira. As datas históricas exibidas pelos datasets representam
um cenário histórico sintético, e não coleta acadêmica anterior a 27/08/2026.

**Documentação detalhada:** [ADR-A001 — Espelhamento estrutural, dados sintéticos e rollout
acadêmico por fases](migracao-modelo/arquitetura/ADR-A001-espelhamento-dados-sinteticos-rollout.md),
[plano de fases](migracao-modelo/arquitetura/plano-de-fases.md) e [matriz de classificação]
(migracao-modelo/arquitetura/matriz-classificacao.md). O ADR-A001 é a decisão técnica local da
subpasta; esta ADR é o registro canônico resumido para a governança do projeto e não o duplica.

**Alternativas consideradas:**

* *Tratar a aplicação como ambiente operacional, staging, produção ou backup.* Descartada: o
  repositório contém uma aplicação acadêmica independente, sem integração externa e com dados
  sintéticos.
* *Marcar rotas preparadas como entrega funcional.* Descartada: presença de scaffold não constitui
  disponibilidade; o feature gate deve continuar a falhar fechado.
* *Converter ou perturbar dados externos para demonstrar os módulos.* Descartada: valores reais com
  ruído, escala ou troca de rótulos continuam sendo dados externos. O cenário deve ser gerado do
  zero e preservar somente relações analíticas plausíveis.

**Impacto esperado:** o grupo dispõe de uma referência única para distinguir baseline técnico,
cronologia sintética, módulos disponíveis e planejamento futuro. A independência da aplicação e a
sanitização dos dados passam a ser requisitos permanentes da evolução do protótipo.

### Emenda de 2026-10-06 — Ativação acadêmica local da Fase 2

Por solicitação explícita, a Fase 2 passa a disponibilizar localmente Ads (visão geral),
Google Ads, Meta Ads e Estratégia, exclusivamente sobre os contratos e datasets sintéticos
existentes. A Fase 1 permanece ativa; Fases 3 e 4 continuam bloqueadas. O gate central,
a navegação derivada e os guardas das rotas são preservados. Esta liberação não constitui
deploy nem altera automaticamente o ambiente publicado.

Google Ads exibe o artefato reproduzível do experimento de CPR da ADR-007, sem treinamento
no navegador ou recomendação de investimento. Meta Ads preserva resultados separados por
indicador; Estratégia permanece determinística com premissa fictícia declarada. Não há
conexão com APIs, contas ou dados operacionais. A ativação técnica não é validação comunitária;
os instrumentos existentes continuam destinados à Fase 1 até revisão humana específica.

---

## ADR-007 — Experimento sintético local de CPR restrito a Google Ads

**Data:** 2026-10-06

**Decisão:** Pela solicitação explícita de atualização acadêmica, este repositório passa a conter
um experimento supervisionado exploratório, inteiramente sintético e reproduzível localmente,
restrito ao Google Ads. O target CPR significa Custo por Resultado, com resultado definido como
conversões registradas pelo Google Ads; no contrato de referência é equivalente a custo por
conversão/CPA. A fórmula é custo/conversões, com `null` quando o denominador não é positivo.
Não representa custo por matrícula nem por lead único.

O experimento usa regressão linear OLS, comparada à persistência do último CPR histórico elegível,
features históricas disponíveis no instante da emissão, calendário conhecido, split temporal e
purga de targets ainda indisponíveis no corte de treino. Investimento, resultados, CPR e demais
variáveis contemporâneas ao target não entram como features. A maturação de 14 dias é uma hipótese
declarada do cenário acadêmico; não é uma regra presumida da conta real.

Esta decisão substitui, **para o experimento sintético**, a orientação de 26/08/2026 de manter
treinamento e testes exclusivamente fora do repositório acadêmico. Dados, modelos, credenciais,
integrações e código operacional continuam excluídos. Captação, Matrículas, Meta Ads, conteúdo
orgânico e gestão não recebem ML. Nenhuma inferência aciona investimento ou operação externa.

Na decisão inicial, o rollout mantinha Fase 1 ativa e Fases 2–4 bloqueadas. A emenda da ADR-006
de 06/10/2026 autoriza posteriormente a Fase 2 acadêmica local: a interface Google Ads exibe
o artefato da CLI sem executar treinamento. Fases 3 e 4 permanecem bloqueadas; método, target
e não objetivos desta ADR são preservados.
A atualização editorial do Relatório Final será feita em rodada própria; relatórios históricos
não são reescritos por esta decisão.

**Motivo:** demonstrar método de análise de dados e aprendizagem de máquina com prevenção de
leakage, independência e rastreabilidade, sem transformar o PI em réplica operacional.

**Alternativas consideradas:** aprender a fórmula com custo/resultados contemporâneos
(descartada); usar split aleatório (descartada neste cenário temporal); manter somente estatística
descritiva (alternativa se não houver histórico elegível); acrescentar modelos complexos
(não necessário para a pergunta mínima).

**Impacto esperado:** método, seed, features, coeficientes, previsões e métricas ficam verificáveis.
O resultado continua limitado ao gerador sintético, sem evidência de eficácia operacional,
atribuição causal ou validação pela comunidade.

**Documentação técnica:** [auditoria de seleção](migracao-modelo/arquitetura/auditoria-referencia-2026-10-06.md)
e [protocolo do experimento](migracao-modelo/arquitetura/experimento-google-cpr.md).

---

## ADR-008 — Versões rastreáveis da interface e baseline pré-validação

**Data:** 2026-10-06.

**Decisão corrigida em 07/10/2026:** adotar `/v1` e `/v2`, não nomes relativos
old/new/legacy. V1 representa o baseline inicial pré-Ads, composto somente pela Fase 1
(Captação e Matrículas). V2 representa a evolução técnica/acadêmica que introduziu a Fase 2
(Ads, Google Ads, Meta Ads e Estratégia), o experimento CPR e sua extensão sazonal. Fases 3 e 4
permanecem bloqueadas. Dados, contratos, algoritmos e artefatos CPR são únicos e compartilhados.

`CURRENT_UI_VERSION` em `src/lib/interface.ts` permanece `v1`. As canônicas de Captação e
Matrículas redirecionam para essa versão, preservando filtros. Ads não possui alias canônico
enquanto V1 for corrente e deve ser acessado explicitamente em `/v2/ads/**`. Navegação permanece dentro da versão
acessada; identificação discreta é exibida no desktop/mobile, sem seletor para o participante.
V2 só pode tornar-se corrente após decisão explícita. Os gates de capacidade técnica são
independentes da composição histórica da apresentação.

V1 somente muda por bug crítico, erro factual, vulnerabilidade, vazamento ou falha de execução,
com justificativa, testes e revisão humana dos hashes protegidos. Melhorias de UX são feitas
inicialmente em V2. Não alterar componentes/CSS protegidos compartilhados pela baseline para
melhorar V2: substituir a apresentação necessária em `src/ui/v2/`, com estilos escopados.

Primeira validação usa V1, somente Captação e Matrículas, sem apresentar V2 como alternativa.
Nenhum feedback ou benefício foi inventado.
ADR-007 e seus resultados permanecem intactos; o histórico Git problemático não é tratado aqui.

**Motivo:** preservar uma referência anterior ao feedback e permitir comparar mudanças de
interface sem confundi-las com alterações de dados ou método científico.

**Alternativas:** fork completo (duplicação desnecessária); versões com dados distintos
(comparação confundida); edição contínua da baseline (perda da referência); promoção automática
de V2 (descartada). O mínimo adotado é roteador comum, apresentações registradas e proteção V1.

**Documentação:** `docs/validacao/versoes-interface.md`.

---

### Emenda consolidada em 2026-10-07 — evolução técnica exclusiva V2

Por demanda técnica/acadêmica explícita, V2 incorpora Ads, o experimento CPR e a previsão
sazonal experimental em Google Ads, preservando a baseline inicial V1 sem Ads.
Origem: demonstração acadêmica de ML, não feedback comunitário. Experimento separado, dados
sintéticos existentes, OLS, t−2/t−12, maturação, holdout recursivo e rolling origin são descritos
em `experimento-google-cpr-sazonal.md`. ADR-007 e seus resultados anteriores não são alterados.
CURRENT_UI_VERSION permanece V1. Primeira validação usa exclusivamente V1.
Comparações futuras devem separar novo conteúdo científico de mudanças apenas visuais.
Não há promoção automática, avaliação comunitária inventada ou autorização de publicação.

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
* **Uso de indicadores determinísticos, aprendizagem de máquina e IA agêntica.** Atualizado pelo
  grupo em 26 ago. 2026: indicadores serão calculados por rotinas determinísticas e reprodutíveis;
  em paralelo, o projeto treinará e avaliará ao menos um modelo supervisionado de aprendizagem de
  máquina sobre dados históricos para estimar uma variável de desempenho de campanhas. A IA
  agêntica via CLI servirá de apoio controlado a cenários de simulação, interpretação e revisão,
  sem ser apresentada como o modelo de aprendizagem de máquina. As saídas dos agentes não
  substituem cálculos, resultados do modelo, evidência empírica, decisão humana ou a validação com
  a comunidade externa. O eixo E11 integra a metodologia de desenvolvimento e permanece distinto
  do ciclo de Design Thinking exigido pela rubrica. No trabalho escrito, os agentes podem apoiar
  consulta, organização e revisão de registros versionados, mas a seleção do conteúdo, a validação
  das fontes e a aprovação das versões pertencem ao grupo.
  O treinamento, os testes e o relatório técnico do modelo ocorrerão no repositório real da
  solução; neste repositório acadêmico serão mantidos apenas o relato metodológico e resultados
  sanitizados ou fictícios necessários à apresentação posterior.
  **Atualização de 06/10/2026:** a restrição de localização do treinamento/testes foi substituída
  pela ADR-007 para o experimento sintético local de CPR no Google Ads. O ambiente operacional
  e seus dados continuam fora do repositório acadêmico.
  Modelos de linguagem de alta capacidade poderão gerar interpretação assistida dos resultados,
  desde que recebam somente contexto versionado e sanitizado. Cada explicação ou recomendação deve
  apontar os fatos, cálculos, resultados estimados ou referências que a sustentam; saídas sem base
  verificável não serão usadas.
