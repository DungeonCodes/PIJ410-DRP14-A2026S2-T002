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
tomada de decisão (Lemes; Dias; Oliveira, 2023).

Em campanhas digitais, métricas como retorno sobre investimento e taxa de conversão subsidiam a
avaliação das campanhas; entretanto, a multiplicidade de configurações possíveis torna essa
análise não trivial e influencia as escolhas de investimento (Martins, 2019). Na instituição
parceira, os registros de investimento e desempenho permanecem dispersos entre fontes distintas,
com indicadores, unidades de medida e recortes temporais próprios (Grupo do Projeto Integrador,
2026). Essa fragmentação dificulta a comparação dos resultados entre canais e campanhas, a
avaliação do retorno obtido e a decisão sobre como distribuir o orçamento de marketing (Grupo do
Projeto Integrador, 2026). O problema que este trabalho enfrenta é, portanto, de natureza
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
norteador da UNIVESP e articula o problema identificado junto à comunidade parceira (Grupo do
Projeto Integrador, 2026).

#### Objetivo geral

Desenvolver e aplicar métodos de análise de dados e aprendizagem de máquina sobre dados históricos
de investimentos em mídia digital de uma instituição de ensino, a fim de produzir indicadores e
análises que apoiem a interpretação dos resultados e a tomada de decisão sobre a distribuição do
orçamento de marketing. A plataforma web será o meio de apresentação desses resultados.

A consolidação dos dados e a organização de indicadores respondem à necessidade de tornar a
avaliação de campanhas comparável e útil à gestão. No marketing digital, métricas e indicadores
de desempenho apoiam a formulação de estratégias e permitem verificar se os resultados estão
alinhados aos objetivos organizacionais (Saura; Palos-Sánchez; Suárez, 2017). Por essa razão, os
dois primeiros objetivos específicos concentram-se em reunir os registros dispersos e estruturar
indicadores que permitam analisar canais e campanhas.

O objetivo de aplicar análise de dados e aprendizagem de máquina não pressupõe que esses recursos
substituam a decisão humana. Ele decorre do potencial da ciência de dados para extrair informações
acionáveis de conjuntos extensos de dados no contexto do marketing digital e apoiar a tomada de
decisão (Saura, 2021). No projeto, aprendizagem de máquina não será sinônimo de usar uma ferramenta
de IA generativa: consistirá no treinamento e na avaliação de pelo menos um modelo supervisionado
com exemplos históricos, para estimar uma variável de desempenho definida na etapa de preparação
dos dados. A aprendizagem de máquina se caracteriza justamente pela melhoria do desempenho em uma
tarefa a partir da experiência representada pelos dados (Jordan; Mitchell, 2015).

Os indicadores como investimento, impressões, cliques, custo por clique, taxa de conversão e
retorno serão calculados por rotinas determinísticas, com entradas, parâmetros e resultados
registráveis. Essa camada não será apresentada como aprendizagem de máquina; ela servirá de base
comparável e reprodutível para a análise e para a avaliação do modelo preditivo (Peng, 2011). Na
literatura de marketing, a aprendizagem de máquina é uma subárea da IA aplicada a grandes volumes
de dados e a casos como apoio à decisão e impacto financeiro (De Mauro; Sestino; Bacconi, 2022).

A IA agêntica será empregada via linha de comando somente como camada auxiliar: poderá organizar
a execução de cenários de simulação, propor explicações para indicadores e apoiar a revisão dos
artefatos produzidos. Ela não treinará nem substituirá o modelo de aprendizagem de máquina. Agentes
baseados em modelos de linguagem constituem uma arquitetura que combina o modelo a planejamento,
memória e uso de ferramentas, mas o campo ainda apresenta desafios que exigem controles e avaliação
humana (Wang et al., 2024). Portanto, as respostas dos agentes não serão tratadas como cálculo,
evidência empírica ou decisão autônoma; cada cenário será calculado ou estimado pelas rotinas e
modelos definidos pelo grupo e ficará sujeito à revisão humana.

O desenvolvimento da interface e a avaliação do protótipo decorrem da necessidade de converter a
análise em informação compreensível para quem decide. No contexto educacional, dashboards podem
apoiar gestores na compreensão de informações oriundas de diferentes sistemas e nos processos de
tomada de decisão (Lemes; Dias; Oliveira, 2023). A avaliação com profissionais da instituição
parceira será orientada por métodos de experiência do usuário, cuja literatura sistematiza técnicas
para compreender necessidades e avaliar serviços de informação (Pinheiro; Dias, 2023).

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
retorno das campanhas e decidir sobre a distribuição do orçamento de marketing (Grupo do Projeto
Integrador, 2026). Diante desse contexto, a pesquisa é orientada pela seguinte questão: como
organizar e apresentar os dados históricos de investimentos em mídia digital de modo a apoiar a
tomada de decisão da gestão de uma instituição de ensino?

O problema vincula-se ao tema norteador da UNIVESP porque parte de um conjunto de dados existente,
demanda análise de dados em escala e aprendizagem de máquina para interpretá-lo e prevê uma
interface web para tornar os resultados acompanháveis. A escolha de indicadores e métricas é necessária para avaliar a
efetividade das estratégias de marketing digital e verificar sua aderência aos objetivos
organizacionais (Saura; Palos-Sánchez; Suárez, 2017). A proposta, portanto, não se limita à
criação de uma interface: busca converter dados dispersos em informação que possa sustentar uma
decisão de gestão.

A relevância acadêmica decorre da aproximação entre ciência de dados, marketing digital e apoio à
decisão. A literatura aponta que a ciência de dados pode extrair informações acionáveis de grandes
conjuntos de dados nesse contexto, embora ainda existam lacunas sobre sua gestão e aplicação em
estratégias de marketing (Saura, 2021). A relevância social e cultural está em desenvolver a
solução a partir das necessidades expressas pelos profissionais da própria comunidade participante,
preservando seu contexto de trabalho e submetendo a versão inicial à sua avaliação (Grupo do
Projeto Integrador, 2026). Espera-se, assim, contribuir para que a gestão acompanhe informações
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
*xhigh* (Anthropic, 2026; OpenAI, 2026). Essa escolha é instrumental e pode ser substituída por
configuração equivalente, sem alterar o método: resultados de simulações continuarão identificados
como exploratórios e dependerão de cálculo determinístico e revisão humana.

### 2.3 Fundamentação teórica

Para evitar a confusão entre os termos centrais do projeto, a fundamentação adota
três camadas distintas. A primeira é a análise determinística, formada por métricas e indicadores
obtidos por regras explícitas. A segunda é a aprendizagem de máquina, entendida como treinamento e
avaliação de modelos que aprendem padrões a partir de exemplos históricos e produzem estimativas
para novas observações (Jordan; Mitchell, 2015). A terceira é a IA agêntica/generativa, utilizada
somente como apoio controlado à organização e interpretação, sem ser apresentada como o método que
aprende com os dados.

Essa distinção é particularmente necessária no marketing digital: a revisão de De Mauro, Sestino e
Bacconi (2022) posiciona a aprendizagem de máquina como subárea da IA e identifica aplicações em
marketing ligadas a apoio à decisão e impacto financeiro. Assim, a contribuição técnica prevista
não é apenas uma interface nem uma explicação gerada por IA: inclui o desenvolvimento, treinamento
e avaliação de um modelo de aprendizagem de máquina sobre a base histórica preparada para o estudo.
O modelo, a variável-alvo, as variáveis de entrada, o particionamento dos dados e as métricas de
avaliação serão documentados na metodologia e nos resultados.

#### 2.3.1 Marketing digital e decisão orientada por dados

O marketing digital pode ser compreendido como um conjunto integrado de atividades, canais e
interações mediadas por tecnologias digitais, e não como a simples publicação de anúncios. Nessa
perspectiva, a organização define objetivos, seleciona pontos de contato com seus públicos,
acompanha as respostas obtidas e ajusta suas ações à luz dos resultados. Kannan e Li (2017)
destacam justamente a necessidade de examinar o marketing digital de forma integrada, considerando
os diferentes canais e as jornadas que conectam a organização aos seus públicos.

Para uma instituição de ensino, esse enquadramento aproxima os dados de mídia de uma decisão
gerencial concreta: avaliar como os recursos de comunicação contribuem para os objetivos de
captação definidos pela organização. Isso não autoriza concluir, sem evidência, que uma campanha
causou uma matrícula. O que a análise poderá fazer é organizar os registros históricos disponíveis,
identificar padrões de desempenho e apresentar evidências comparáveis sobre canais, campanhas,
públicos e períodos, sempre dentro dos limites dos dados recebidos.

O uso de dados no marketing digital transforma registros operacionais — como investimento,
exposição, interações e conversões registradas — em insumos para acompanhamento e decisão. Saura
(2021) associa a aplicação de ciência de dados no marketing digital à análise de desempenho e à
utilização de métricas para orientar ações. No escopo deste projeto, a interface web será o meio
de visualização desses resultados; a contribuição central será a análise dos dados históricos e,
posteriormente, o emprego de aprendizagem de máquina para estimar uma variável de desempenho
definida e avaliada metodologicamente.

Assim, a decisão orientada por dados será tratada como processo de apoio, e não como substituição
do julgamento dos responsáveis da instituição. Os indicadores e as estimativas analíticas devem
oferecer evidências para priorizar investigações e discutir a distribuição do orçamento, enquanto
as decisões finais permanecem condicionadas ao contexto institucional, às metas de captação e às
restrições identificadas pela comunidade externa.

#### 2.3.2 Tráfego pago e campanhas de Ads

Tráfego pago, no escopo deste trabalho, corresponde às ações de comunicação em que a instituição
investe recursos para veicular anúncios em plataformas digitais e direcionar usuários a um ponto de
contato definido. A expressão não se confunde com todo o marketing digital: ela delimita a parcela
das ações cuja veiculação produz registros de investimento e desempenho. O recorte empírico será
formado exclusivamente pelos dados históricos de campanhas que a instituição parceira autorizar
para uso acadêmico.

As campanhas de Ads oferecem diferentes possibilidades de configuração. No caso da publicidade de
busca, por exemplo, é possível associar anúncios a palavras-chave e ajustar lances segundo fatores
como dispositivo e período de veiculação (Martins, 2019). Essa variedade torna inadequada uma
leitura que considere somente o total investido ou o total de cliques. A análise deverá observar as
unidades efetivamente presentes na base — como canal, campanha, grupo/conjunto de anúncios,
anúncio, palavra-chave ou período — sem presumir que todos esses campos estarão disponíveis.

O propósito da análise não será declarar, antecipadamente, qual campanha deve receber mais
orçamento. Será organizar evidências para comparar exposição, interesse, conversão e custo em
relação aos objetivos de captação definidos com a instituição. Em publicidade de busca paga, as
decisões de lance e de orçamento são influenciadas pelo modo como as conversões são atribuídas aos
elementos que antecedem a ação do usuário (Li et al., 2016). Por isso, a regra de atribuição
registrada pela plataforma, quando disponível, será tratada como parte do contexto analítico e não
como um detalhe técnico dispensável.

Desse modo, o tráfego pago constitui o domínio de aplicação da análise de dados em escala do PI.
Os dados de campanhas serão consolidados, submetidos às rotinas de indicadores e, em etapa
posterior, utilizados no treinamento e na avaliação de um modelo de aprendizagem de máquina. A
interface web terá a função de apresentar as evidências produzidas; ela não substitui a análise
nem determina autonomamente as decisões de investimento.

#### 2.3.3 Indicadores de Ads e tomada de decisão

Os indicadores serão calculados por regras determinísticas e usados em conjunto, evitando decisões
baseadas em uma métrica isolada. Investimento, impressões e alcance descrevem a exposição;
cliques e CTR avaliam a resposta inicial; CPC mostra o custo do tráfego; conversões e taxa de
conversão aproximam o resultado de captação; CPA e retorno/ROAS apoiam a comparação entre o valor
gerado e o recurso aplicado (Saura, 2021; Saura; Palos-Sánchez; Suárez, 2017).

| Indicador ou combinação | Pergunta de decisão que orienta |
|---|---|
| Investimento, impressões e alcance | Onde houve entrega e exposição suficientes para justificar continuidade ou revisão da segmentação? |
| Cliques, CTR e CPC | Quais anúncios, públicos ou palavras-chave atraem interesse com custo compatível? |
| Conversões, taxa de conversão e CPA | Quais campanhas transformam interesse em ação desejada a um custo sustentável? |
| Receita/valor atribuído, investimento e ROAS/retorno | Como priorizar a distribuição do orçamento entre campanhas e canais? |

A atribuição de conversões será declarada antes das comparações, pois a regra escolhida altera o
crédito atribuído aos elementos da jornada e pode modificar decisões de lance, orçamento e retorno
estimado (Li et al., 2016). Quando não houver receita ou valor de conversão confiável na base, o
relatório não calculará ROAS como se fosse dado observado; usará conversões, taxa de conversão e
CPA como indicadores disponíveis, registrando essa limitação.

#### 2.3.4 Análise de dados em escala e apoio à tomada de decisão

A análise de dados em escala, neste projeto, começa pela organização de um conjunto histórico
existente de registros de mídia paga. O objetivo não é acumular dados, mas estabelecer um processo
reprodutível para receber, identificar, padronizar, integrar e transformar os registros em uma base
adequada à análise. Essa preparação é necessária para que comparações entre campanhas e períodos
não sejam afetadas por nomes inconsistentes, formatos incompatíveis, valores ausentes, duplicações
ou unidades de medida diferentes.

A qualidade desse processo é parte do resultado analítico. Foidl et al. (2024) identificam
ingestão, integração, limpeza e transformação como etapas relevantes de pipelines de dados e
associam problemas de qualidade a aspectos como tipos de dados, compatibilidade e rastreabilidade.
No projeto, cada transformação relevante deverá ser documentada, de modo que um indicador ou uma
estimativa possa ser relacionado à sua origem, ao período analisado e às regras aplicadas.

Após a preparação, a análise explorará os dados em seus níveis de agregação disponíveis para
identificar distribuição de investimento, variações temporais, diferenças de desempenho e possíveis
inconsistências a investigar. Esses achados não serão automaticamente convertidos em relações de
causa e efeito. Eles funcionarão como evidências para a interpretação conjunta com a instituição e
como base para as rotinas de indicadores e para a etapa posterior de aprendizagem de máquina.

#### 2.3.5 Aprendizagem de máquina aplicada ao marketing digital

A aprendizagem de máquina será empregada como método analítico distinto do cálculo de indicadores.
Enquanto CTR, CPC, taxa de conversão e CPA resultam de fórmulas previamente definidas, um modelo de
aprendizagem de máquina é treinado com exemplos históricos para reconhecer padrões e produzir uma
estimativa para observações não usadas no treinamento. Jordan e Mitchell (2015) caracterizam esse
campo pela melhoria do desempenho em uma tarefa a partir da experiência representada pelos dados.

No contexto do marketing, De Mauro, Sestino e Bacconi (2022) situam a aprendizagem de máquina como
subárea da inteligência artificial e identificam aplicações ligadas ao apoio à decisão e ao impacto
financeiro. Neste PI, a sua aplicação dependerá da definição posterior de uma variável-alvo que
possa ser medida na base disponibilizada. Exemplos possíveis incluem estimar uma medida de
desempenho futura ou classificar registros segundo uma regra definida pelo grupo; a escolha não
será antecipada antes da inspeção e preparação dos dados.

O método exigirá a descrição das variáveis de entrada, da variável-alvo, do particionamento entre
treinamento e teste, do modelo ou modelos comparados e das métricas de avaliação. A qualidade de um
modelo não será inferida apenas por produzir uma previsão aparentemente plausível: deverá ser
avaliada em dados separados e confrontada com uma referência simples e reprodutível. Dessa forma,
a aprendizagem de máquina complementará os indicadores determinísticos, sem substituí-los.

#### 2.3.6 Visualização de dados e dashboards para apoio à gestão educacional

A visualização de dados é a camada pela qual os resultados analíticos se tornam acessíveis aos
profissionais que participam da decisão. Um dashboard não deve apenas reunir gráficos: deve
apresentar indicadores, comparações e recortes temporais de forma que o usuário possa compreender
o que está sendo medido e formular perguntas sobre o desempenho das campanhas. Em instituições de
ensino, Lemes, Dias e Oliveira (2023) identificam o uso de dashboards como recurso de apoio à
tomada de decisão e à integração de informações provenientes de sistemas distintos.

No protótipo, a interface web deverá apresentar os indicadores calculados, os filtros compatíveis
com a base e, quando houver modelo validado, suas estimativas claramente diferenciadas de valores
observados. O desenho da visualização deverá preservar contexto: período, canal, unidade de análise,
fórmula do indicador e limitações dos dados precisam estar disponíveis para interpretação. Assim,
a interface não transformará uma estimativa em certeza nem ocultará a regra que originou uma métrica.

A avaliação com a comunidade externa verificará se as visualizações permitem compreender os
resultados e discutir as decisões previstas. As sugestões recebidas serão registradas como
evidências de adequação e melhoria do protótipo, sem afirmar que o dashboard, por si só, garante
melhoria nas decisões ou nos resultados de captação.

#### 2.3.7 Uso controlado de IA agêntica e supervisão humana

A IA agêntica será tratada como recurso auxiliar de organização e interação com ferramentas, e não
como sinônimo de aprendizagem de máquina aplicada à base de campanhas. Agentes baseados em modelos
de linguagem podem combinar componentes como planejamento, memória e uso de ferramentas; contudo,
a área permanece em desenvolvimento e apresenta desafios de avaliação e confiabilidade (Wang et
al., 2024). Essa característica impede que suas respostas sejam aceitas como evidência sem
verificação.

No projeto, modelos de linguagem de alta capacidade poderão atuar como camada de interpretação
assistida: organizar evidências, comparar cenários e formular explicações preliminares sobre
indicadores e resultados já calculados. Essa atividade não será confundida com a inferência do
modelo de aprendizagem de máquina. O agente não terá acesso a contas reais de anúncios, não
executará alterações de orçamento e não definirá o modelo de aprendizagem de máquina sem validação
do grupo. Dados sensíveis ou identificáveis não serão enviados a essa camada.

Para garantir rastreabilidade, a engenharia de memória/contexto do agente reunirá somente
documentos versionados, dados locais sanitizados, fórmulas de indicadores, resultados do modelo e
decisões já registradas. Toda explicação ou recomendação deverá indicar a evidência que a sustenta
— dado, período, cálculo, resultado estimado ou referência bibliográfica — e será rejeitada quando
criar métricas, resultados ou conclusões sem base verificável. A decisão final sobre a interpretação
dos resultados, as recomendações e a evolução do protótipo permanecerá sob responsabilidade humana,
em diálogo com a instituição parceira.

### 2.4 Metodologia

⬜ Em elaboração. A metodologia detalhará a preparação da base, a definição da variável-alvo, a
separação entre treinamento e teste, o treinamento do modelo supervisionado e o registro de suas
métricas de avaliação, além das rotinas determinísticas de indicadores. Para a análise de tráfego
pago, também registrará o nível de agregação dos dados, o período, a regra de atribuição disponível
e as fórmulas dos indicadores empregados, de modo que as recomendações de orçamento possam ser
rastreáveis. O código, os dados autorizados, o treinamento, os testes e o relatório técnico
detalhado de aprendizagem de máquina serão mantidos no repositório real da solução. Este
repositório acadêmico registrará somente o método, os resultados sanitizados ou fictícios que forem
necessários à demonstração e, posteriormente, a interface web independente de visualização. Como
apoio à organização da produção documental, serão mantidos registros
versionados de escopo, fontes, decisões e revisões. Ferramentas de IA poderão apoiar a consulta,
organização e revisão desses registros sob contexto controlado; a seleção do conteúdo, a validação
das fontes e a aprovação das versões permanecerão sob responsabilidade do grupo. Para a camada de
interpretação assistida, o contexto do agente será composto apenas por registros versionados,
indicadores com fórmulas documentadas, resultados calculados ou estimados e referências
verificadas. Cada explicação ou recomendação deverá registrar os elementos que a fundamentam;
saídas sem evidência verificável não serão utilizadas.

### 2.5 Resultados preliminares: solução inicial

⬜ Não iniciado.

---

## Referências

ANTHROPIC. **Introducing Claude Fable 5 and Claude Mythos 5**. 2026. Disponível em: https://platform.claude.com/docs/es/models/fable-5/introducing-claude-fable-5-and-claude-mythos-5. Acesso em: 25 ago. 2026.

DE MAURO, Andrea; SESTINO, Andrea; BACCONI, Andrea. Machine learning and artificial intelligence use in marketing: a general taxonomy. **Italian Journal of Marketing**, v. 2022, p. 439-457, 2022. DOI: 10.1007/s43039-022-00057-w. Disponível em: https://doi.org/10.1007/s43039-022-00057-w. Acesso em: 26 ago. 2026.

FOIDL, Harald et al. Data pipeline quality: influencing factors, root causes of data-related issues, and processing problem areas for developers. **Journal of Systems and Software**, v. 207, p. 111855, 2024. DOI: 10.1016/j.jss.2023.111855. Disponível em: https://doi.org/10.1016/j.jss.2023.111855. Acesso em: 26 ago. 2026.

GRUPO DO PROJETO INTEGRADOR. **Plano de ação do Projeto Integrador em Computação III**: PIJ410-DRP14-A2026S2-T002. São Paulo: UNIVESP, 2026. Documento interno.

JORDAN, Michael I.; MITCHELL, Tom M. Machine learning: trends, perspectives, and prospects. **Science**, v. 349, n. 6245, p. 255-260, 2015. DOI: 10.1126/science.aaa8415. Disponível em: https://doi.org/10.1126/science.aaa8415. Acesso em: 26 ago. 2026.

KANNAN, P. K.; LI, Hongshuang "Alice". Digital marketing: a framework, review and research agenda. **International Journal of Research in Marketing**, v. 34, n. 1, p. 22-45, 2017. DOI: 10.1016/j.ijresmar.2016.11.006. Disponível em: https://doi.org/10.1016/j.ijresmar.2016.11.006. Acesso em: 26 ago. 2026.

LEMES, Thieny de Cássio; DIAS, Marina Oliveira de Souza; OLIVEIRA, Tiago de. Análise do uso de dashboard como ferramenta de apoio a tomada de decisão em instituições de ensino: uma revisão sistemática da literatura. **RENOTE**, v. 21, n. 1, p. 281-290, 2023. DOI: 10.22456/1679-1916.134356. Disponível em: https://doi.org/10.22456/1679-1916.134356. Acesso em: 24 ago. 2026.

LI, Hongshuang "Alice"; KANNAN, P. K.; VISWANATHAN, Siva; PANI, Abhishek. Attribution strategies and return on keyword investment in paid search advertising. **Marketing Science**, v. 35, n. 6, p. 831-848, 2016. DOI: 10.1287/mksc.2016.0987. Disponível em: https://doi.org/10.1287/mksc.2016.0987. Acesso em: 26 ago. 2026.

MARTINS, Felipe. **Otimização de uma campanha publicitária na rede de pesquisa do Google Ads utilizando Teoria da Decisão Bayesiana**. 2019. Dissertação (Mestrado) – Universidade de São Paulo, São Paulo, 2019. DOI: 10.11606/d.45.2019.tde-22102019-115749. Disponível em: https://doi.org/10.11606/d.45.2019.tde-22102019-115749. Acesso em: 24 ago. 2026.

OPENAI. **GPT-5.6 Sol Model**. 2026. Disponível em: https://developers.openai.com/api/docs/models/gpt-5.6-sol. Acesso em: 25 ago. 2026.

PENG, Roger D. Reproducible research in computational science. **Science**, v. 334, n. 6060, p. 1226-1227, 2011. DOI: 10.1126/science.1213847. Disponível em: https://doi.org/10.1126/science.1213847. Acesso em: 25 ago. 2026.

PINHEIRO, Gabriela da Silva Santos; DIAS, Célia da Consolação. Técnicas e métodos de pesquisa de experiência do usuário (UX) para avaliação de estudo de usuários da informação. **Perspectivas em Gestão & Conhecimento**, v. 13, n. 2, p. 133-148, 2023. DOI: 10.22478/ufpb.2236-417x.2023v13n2.63290. Disponível em: https://doi.org/10.22478/ufpb.2236-417x.2023v13n2.63290. Acesso em: 24 ago. 2026.

SAURA, José Ramón. Using Data Sciences in Digital Marketing: framework, methods, and performance metrics. **Journal of Innovation & Knowledge**, v. 6, n. 2, p. 92-102, 2021. DOI: 10.1016/j.jik.2020.08.001. Disponível em: https://doi.org/10.1016/j.jik.2020.08.001. Acesso em: 25 ago. 2026.

SAURA, José Ramón; PALOS-SÁNCHEZ, Pedro; SUÁREZ, Luis Manuel Cerdá. Understanding the Digital Marketing Environment with KPIs and Web Analytics. **Future Internet**, v. 9, n. 4, p. 76, 2017. DOI: 10.3390/fi9040076. Disponível em: https://doi.org/10.3390/fi9040076. Acesso em: 24 ago. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Projeto pedagógico dos cursos de Bacharelado em Tecnologia da Informação, Ciência de Dados e Engenharia de Computação**. São Paulo: UNIVESP, 2020. Disponível em: https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BTI.pdf. Acesso em: 25 ago. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Projeto pedagógico do curso de Bacharelado em Ciência de Dados**. São Paulo: UNIVESP, 2026. Disponível em: https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BCD-2026.pdf. Acesso em: 25 ago. 2026.

WANG, Lei et al. A survey on large language model based autonomous agents. **Frontiers of Computer Science**, v. 18, n. 6, 2024. DOI: 10.1007/s11704-024-40231-1. Disponível em: https://doi.org/10.1007/s11704-024-40231-1. Acesso em: 24 ago. 2026.
