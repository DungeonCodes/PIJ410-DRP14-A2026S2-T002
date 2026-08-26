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
| 2.1 Objetivos | 1,0 | ⬜ em revisão |
| 2.2 Justificativa e delimitação do problema | 1,0 | ⬜ em revisão |
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
| Tema específico | Desenvolvimento de análise de dados em escala sobre dados históricos de investimentos em mídia digital, com indicadores determinísticos, aprendizagem de máquina para análise preditiva, IA agêntica como apoio controlado e interface web para visualização dos resultados |
| Problema | Dados de investimento e desempenho de mídia digital encontram-se dispersos em diferentes fontes, dificultando a análise do retorno das campanhas e a tomada de decisão sobre a distribuição do orçamento de marketing |
| Objetivo | Desenvolver e aplicar métodos de análise de dados e aprendizagem de máquina sobre dados históricos de investimentos em mídia digital de uma instituição de ensino, a fim de produzir indicadores e análises que apoiem a interpretação dos resultados e a tomada de decisão sobre a distribuição do orçamento de marketing. A plataforma web será o meio de apresentação desses resultados. |
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

A ideia básica que orienta o trabalho é que esse conjunto disperso pode ser consolidado e
submetido à análise de dados em escala. Indicadores calculados por regras determinísticas serão
complementados por um modelo de aprendizagem de máquina treinado e avaliado a partir dos dados
históricos; a interface web apresentará esses resultados de modo acompanhável pela gestão. O
objeto deste trabalho é, assim, o desenvolvimento e a validação de uma análise de dados aplicada
a investimentos em mídia digital no contexto educacional, comunicada por uma plataforma web e
avaliada junto aos profissionais que respondem por essas decisões.

A escolha do tema decorre de uma necessidade real, manifestada por uma instituição de ensino
privada da região metropolitana de São Paulo à qual o grupo teve acesso por intermédio de um de
seus integrantes. Em conversa inicial, a gestora de marketing da instituição expôs a
dificuldade de estabelecer quanto deveria ser investido em tráfego pago e de avaliar se os
valores praticados eram adequados aos objetivos institucionais. Em contato posterior com a
direção, o grupo buscou identificar quais indicadores seriam mais relevantes para acompanhar os
investimentos realizados e seus resultados ao longo do tempo. A receptividade da equipe e o
acesso direto aos profissionais envolvidos indicaram condições favoráveis para desenvolver a
solução e submetê-la à validação da própria comunidade participante.

Soma-se a essa demanda a composição interdisciplinar do grupo, que reúne estudantes dos cursos
de Bacharelado em Ciência de Dados e Engenharia da Computação. Aplicações em Aprendizado de
Máquina, Redes Neurais e Aprendizado Profundo fornecem o repertório de algoritmos, frameworks e
modelos neurais pertinente à análise e à interpretação dos dados do projeto (UNIVESP, 2020).
Visão Computacional amplia o repertório de aquisição, processamento e análise de dados visuais,
enquanto Impactos da Computação na Sociedade orienta a reflexão sobre os aspectos éticos,
sociais, legais e de governança de dados relacionados ao uso de inteligência artificial
(UNIVESP, 2020; UNIVESP, 2026). Esses conteúdos são mobilizados como base de formação; o projeto não
prevê o uso de imagens nem de dados sensíveis da instituição parceira.

<!-- FORMATAÇÃO (aplicada na conversão para .docx):
     título "1 Introdução" → estilo 1ttulonivel1
     parágrafos            → estilo atexto-base
     Este bloco de texto tem 5 parágrafos. O modelo da UNIVESP determina que o parágrafo em
     branco entre parágrafos vem do próprio estilo (after=360); não inserir linha vazia. -->

---

## 2 Desenvolvimento

### 2.1 Objetivos

O projeto busca desenvolver análise de dados em escala a partir de um conjunto de dados históricos
existentes de investimentos em mídia digital, aplicando aprendizagem de máquina e preparando uma
interface para visualização dos resultados. Essa finalidade corresponde explicitamente ao tema
norteador da UNIVESP e articula o problema identificado junto à comunidade parceira (GRUPO DO
PROJETO INTEGRADOR, 2026).

#### Objetivo geral

Desenvolver e aplicar métodos de análise de dados e aprendizagem de máquina sobre dados históricos
de investimentos em mídia digital de uma instituição de ensino, a fim de produzir indicadores e
análises que apoiem a interpretação dos resultados e a tomada de decisão sobre a distribuição do
orçamento de marketing. A plataforma web será o meio de apresentação desses resultados.

A consolidação dos dados e a organização de indicadores respondem à necessidade de tornar a
avaliação de campanhas comparável e útil à gestão. No marketing digital, métricas e indicadores
de desempenho apoiam a formulação de estratégias e permitem verificar se os resultados estão
alinhados aos objetivos organizacionais (SAURA; PALOS-SÁNCHEZ; SUÁREZ, 2017). Por essa razão, os
dois primeiros objetivos específicos concentram-se em reunir os registros dispersos e estruturar
indicadores que permitam analisar canais e campanhas.

O objetivo de aplicar análise de dados e aprendizagem de máquina não pressupõe que esses recursos
substituam a decisão humana. Ele decorre do potencial da ciência de dados para extrair informações
acionáveis de conjuntos extensos de dados no contexto do marketing digital e apoiar a tomada de
decisão (SAURA, 2021). No projeto, aprendizagem de máquina não será sinônimo de usar uma ferramenta
de IA generativa: consistirá no treinamento e na avaliação de pelo menos um modelo supervisionado
com exemplos históricos, para estimar uma variável de desempenho definida na etapa de preparação
dos dados. A aprendizagem de máquina se caracteriza justamente pela melhoria do desempenho em uma
tarefa a partir da experiência representada pelos dados (JORDAN; MITCHELL, 2015).

Os indicadores como investimento, impressões, cliques, custo por clique, taxa de conversão e
retorno serão calculados por rotinas determinísticas, com entradas, parâmetros e resultados
registráveis. Essa camada não será apresentada como aprendizagem de máquina; ela servirá de base
comparável e reprodutível para a análise e para a avaliação do modelo preditivo (PENG, 2011). Na
literatura de marketing, a aprendizagem de máquina é uma subárea da IA aplicada a grandes volumes
de dados e a casos como apoio à decisão e impacto financeiro (DE MAURO; SESTINO; BACCONI, 2022).

A IA agêntica será empregada via linha de comando somente como camada auxiliar: poderá organizar
a execução de cenários de simulação, propor explicações para indicadores e apoiar a revisão dos
artefatos produzidos. Ela não treinará nem substituirá o modelo de aprendizagem de máquina. Agentes
baseados em modelos de linguagem constituem uma arquitetura que combina o modelo a planejamento,
memória e uso de ferramentas, mas o campo ainda apresenta desafios que exigem controles e avaliação
humana (WANG et al., 2024). Portanto, as respostas dos agentes não serão tratadas como cálculo,
evidência empírica ou decisão autônoma; cada cenário será calculado ou estimado pelas rotinas e
modelos definidos pelo grupo e ficará sujeito à revisão humana.

O desenvolvimento da interface e a avaliação do protótipo decorrem da necessidade de converter a
análise em informação compreensível para quem decide. No contexto educacional, dashboards podem
apoiar gestores na compreensão de informações oriundas de diferentes sistemas e nos processos de
tomada de decisão (LEMES; DIAS; OLIVEIRA, 2023). A avaliação com profissionais da instituição
parceira será orientada por métodos de experiência do usuário, cuja literatura sistematiza técnicas
para compreender necessidades e avaliar serviços de informação (PINHEIRO; DIAS, 2023).

Em decorrência dessas necessidades, foram definidos os seguintes objetivos específicos:

#### Objetivos específicos

* Consolidar dados históricos de investimento e desempenho de campanhas provenientes de fontes
  distintas em uma estrutura adequada à análise.
* Identificar e organizar indicadores que permitam comparar o desempenho de canais e campanhas.
* Implementar rotinas determinísticas para calcular indicadores a partir dos dados consolidados,
  com parâmetros e resultados passíveis de conferência.
* Preparar dados históricos, treinar e avaliar ao menos um modelo supervisionado de aprendizagem
  de máquina para estimar uma variável de desempenho de campanhas, comparando-o a uma referência
  determinística e registrando suas métricas de avaliação.
* Empregar IA agêntica via linha de comando como apoio controlado à formulação, execução e
  interpretação de cenários de simulação, sem substituir os cálculos determinísticos, o modelo de
  aprendizagem de máquina ou a revisão humana.
* Desenvolver uma interface web que apresente os indicadores de forma compreensível para a
  gestão.
* Avaliar a versão inicial do protótipo com profissionais da instituição parceira, registrando as
  contribuições recebidas para sua evolução.

### 2.2 Justificativa e delimitação do problema

O problema de pesquisa foi identificado nas conversas iniciais com a gestora de marketing e a
direção da instituição parceira. Os dados de investimento e desempenho das campanhas de mídia
digital permanecem distribuídos em fontes distintas, o que dificulta comparar canais, avaliar o
retorno das campanhas e decidir sobre a distribuição do orçamento de marketing (GRUPO DO PROJETO
INTEGRADOR, 2026). Diante desse contexto, a pesquisa é orientada pela seguinte questão: como
organizar e apresentar os dados históricos de investimentos em mídia digital de modo a apoiar a
tomada de decisão da gestão de uma instituição de ensino?

O problema vincula-se ao tema norteador da UNIVESP porque parte de um conjunto de dados existente,
demanda análise de dados em escala e aprendizagem de máquina para interpretá-lo e prevê uma
interface web para tornar os resultados acompanháveis. A escolha de indicadores e métricas é necessária para avaliar a
efetividade das estratégias de marketing digital e verificar sua aderência aos objetivos
organizacionais (SAURA; PALOS-SÁNCHEZ; SUÁREZ, 2017). A proposta, portanto, não se limita à
criação de uma interface: busca converter dados dispersos em informação que possa sustentar uma
decisão de gestão.

A relevância acadêmica decorre da aproximação entre ciência de dados, marketing digital e apoio à
decisão. A literatura aponta que a ciência de dados pode extrair informações acionáveis de grandes
conjuntos de dados nesse contexto, embora ainda existam lacunas sobre sua gestão e aplicação em
estratégias de marketing (SAURA, 2021). A relevância social e cultural está em desenvolver a
solução a partir das necessidades expressas pelos profissionais da própria comunidade participante,
preservando seu contexto de trabalho e submetendo a versão inicial à sua avaliação (GRUPO DO
PROJETO INTEGRADOR, 2026). Espera-se, assim, contribuir para que a gestão acompanhe informações
relevantes às suas decisões sem impor um modelo desvinculado da realidade institucional.

O escopo está limitado à consolidação, análise e visualização de dados históricos relacionados a
campanhas de mídia paga e aos indicadores definidos com a instituição parceira. Não fazem parte
do estudo a integração com contas reais de anúncios, CRM, sistemas acadêmicos ou outras bases
operacionais, nem o tratamento de dados pessoais ou informações comerciais sensíveis. A solução
será desenvolvida em ambiente acadêmico independente, com dados locais fictícios ou sanitizados,
preservando a confidencialidade da comunidade participante. A camada de IA agêntica receberá apenas
esses dados locais e será acionada pela CLI do grupo. As configurações inicialmente previstas são
Claude Fable 5 e GPT-5.6 Sol com esforço de raciocínio *xhigh*, quando estiverem disponíveis nos
ambientes licenciados; as documentações técnicas apresentam o primeiro para trabalho agêntico de
longa duração e o segundo para tarefas profissionais complexas com configuração de esforço
*xhigh* (ANTHROPIC, 2026; OPENAI, 2026). Essa escolha é instrumental e pode ser substituída por
configuração equivalente, sem alterar o método: resultados de simulações continuarão identificados
como exploratórios e dependerão de cálculo determinístico e revisão humana.

### 2.3 Fundamentação teórica

Em elaboração. Para evitar a confusão entre os termos centrais do projeto, a fundamentação adotará
três camadas distintas. A primeira é a análise determinística, formada por métricas e indicadores
obtidos por regras explícitas. A segunda é a aprendizagem de máquina, entendida como treinamento e
avaliação de modelos que aprendem padrões a partir de exemplos históricos e produzem estimativas
para novas observações (JORDAN; MITCHELL, 2015). A terceira é a IA agêntica/generativa, utilizada
somente como apoio controlado à organização e interpretação, sem ser apresentada como o método que
aprende com os dados.

Essa distinção é particularmente necessária no marketing digital: a revisão de De Mauro, Sestino e
Bacconi (2022) posiciona a aprendizagem de máquina como subárea da IA e identifica aplicações em
marketing ligadas a apoio à decisão e impacto financeiro. Assim, a contribuição técnica prevista
não é apenas uma interface nem uma explicação gerada por IA: inclui o desenvolvimento, treinamento
e avaliação de um modelo de aprendizagem de máquina sobre a base histórica preparada para o estudo.
O modelo, a variável-alvo, as variáveis de entrada, o particionamento dos dados e as métricas de
avaliação serão documentados na metodologia e nos resultados.

### 2.4 Metodologia

⬜ Em elaboração. A metodologia detalhará a preparação da base, a definição da variável-alvo, a
separação entre treinamento e teste, o treinamento do modelo supervisionado e o registro de suas
métricas de avaliação, além das rotinas determinísticas de indicadores. Como apoio à organização da produção documental, serão mantidos registros
versionados de escopo, fontes, decisões e revisões. Ferramentas de IA poderão apoiar a consulta,
organização e revisão desses registros sob contexto controlado; a seleção do conteúdo, a validação
das fontes e a aprovação das versões permanecerão sob responsabilidade do grupo.

### 2.5 Resultados preliminares: solução inicial

⬜ Não iniciado.

---

## Referências

⬜ Gerada a partir de `/docs/referencias.md`, incluindo apenas as obras efetivamente citadas.
