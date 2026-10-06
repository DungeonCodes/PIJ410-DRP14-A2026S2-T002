# Relatório Final — Projeto Integrador em Computação III (PIJ410)

<!--
CONTROLE EDITORIAL — não integrar ao DOCX/PDF de entrega.

| Seção do Parcial | Destino no Final | Classificação | Ação |
|---|---|---|---|
| Guia editorial, histórico V2/V3 e checklist de montagem | Não migrar | NÃO MIGRAR | Excluir marcações comparativas, URLs operacionais e instruções internas. |
| Dados do projeto | Capa, folha de rosto e ficha catalográfica | REVISAR | Confirmar título definitivo, cursos, nomes, Registro Acadêmico pendente, cidade, polo e dados do tutor. |
| 1 Introdução | 1 Introdução | REVISAR | Preservar o texto vigente e atualizar somente afirmações que dependam do estado final do projeto. |
| 2.1 Objetivos | 2.1 Objetivos | REVISAR | Preservar objetivos; ao final, conferir sua correspondência com os resultados efetivamente obtidos. |
| 2.2 Justificativa e delimitação do problema | 2.2 Justificativa e delimitação do problema | REUTILIZAR | Manter problema, relevância, escopo e limites já consolidados. |
| 2.3 Fundamentação teórica | 2.3 Fundamentação teórica | REUTILIZAR | Manter texto e citações vigentes; não acrescentar bibliografia nesta estrutura inicial. |
| Conteúdos de disciplinas citados na Introdução | 2.4 Aplicação das disciplinas estudadas no Projeto Integrador | NOVO NO FINAL | Organizar a relação entre mais de três disciplinas, materiais específicos e partes da solução. |
| 2.4 Metodologia | 2.5 Metodologia | EXPANDIR | Renumerar, preservar o método e completar implementar/testar, validação, feedback e ajustes. |
| 2.5 Resultados preliminares | 3 Resultados: solução final | EXPANDIR | Manter apenas resultados comprovados e abrir espaços explícitos para resultados finais. |
| Contato inicial com a comunidade | 3.1 Contato inicial e necessidades identificadas | REUTILIZAR | Preservar o registro já consolidado, sem tratá-lo como validação final. |
| Estratégia incremental e protótipo acadêmico | 3.2 e 3.3 | REVISAR | Atualizar o estado das fases antes de cada versão numerada do Final. |
| Captação e Matrículas | 3.4 Resultados técnicos | EXPANDIR | Manter o resultado funcional da Fase 1 e acrescentar apenas módulos realmente concluídos. |
| Aplicação/validação pendente | 3.5 a 3.8 | NOVO NO FINAL | Registrar aplicação, devolutivas, comparação antes/depois e ajustes somente após sua realização. |
| Limitações já declaradas | 3.9 Limitações | EXPANDIR | Consolidar dados sintéticos, ausência de integração, atribuição, períodos e generalização. |
| Figuras do Parcial | Capítulo 3 e listas pré-textuais | REVISAR | Reaproveitar somente imagens ainda fiéis e incluir novas evidências finais depois. |
| Referências | Referências | REUTILIZAR | Migrar as obras efetivamente citadas e conferir correspondência citação–referência. |
| Considerações finais | 4 Considerações finais | NOVO NO FINAL | Estruturar retomada de objetivos, resultados, comunidade, limitações e continuidade. |
| TCLE, instrumentos e evidências | Anexos e Apêndices | NOVO NO FINAL | Inserir TCLE no artefato final e organizar instrumentos sem expor dados pessoais no Markdown. |
-->

> Fonte editorial do Relatório Final, conforme ADR-001. Este arquivo admite apenas os marcadores
> `[PENDENTE – ...]`, `[REVISAR – ...]` e `[INSERIR FIGURA – ...]`. Planejamento não constitui
> resultado. O Relatório Parcial permanece preservado em `docs/relatorio/parcial.md`.

# ELEMENTOS PRÉ-TEXTUAIS

## Capa

**UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO**

[PENDENTE – inserir os nomes dos integrantes conforme o registro acadêmico vigente, sem acrescentar outros identificadores pessoais]

**Plataforma Analítica para Apoio à Tomada de Decisão em Investimentos de Mídia Digital no Contexto Educacional**

[REVISAR – confirmar o título definitivo do trabalho]

**Vídeo de apresentação do Projeto Integrador**

[PENDENTE – inserir o link válido do vídeo publicado no YouTube]

[PENDENTE – confirmar cidade e polo que constarão na capa]

2026

## Folha de rosto

**UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO**

**Plataforma Analítica para Apoio à Tomada de Decisão em Investimentos de Mídia Digital no Contexto Educacional**

[REVISAR – confirmar o título definitivo do trabalho]

Relatório Técnico-Científico apresentado na disciplina de Projeto Integrador para os cursos de
[PENDENTE – confirmar a forma oficial de registrar Bacharelado em Ciência de Dados e Engenharia da Computação]
da Universidade Virtual do Estado de São Paulo (UNIVESP).

[PENDENTE – confirmar cidade e polo]

2026

## Ficha catalográfica

[PENDENTE – preencher a ficha conforme o modelo oficial: autoria; título definitivo; total de folhas; natureza do trabalho; curso ou cursos; Universidade Virtual do Estado de São Paulo; tutor; polo; ano]

[REVISAR – confirmar o Registro Acadêmico ainda pendente antes da montagem do artefato final]

## Resumo

[PENDENTE – redigir, em parágrafo único e com até 250 palavras, a introdução, os objetivos, a metodologia, os resultados efetivamente obtidos e as considerações finais]

**Palavras-chave:** [PENDENTE – definir cinco palavras-chave, separadas por ponto e vírgula].

## Lista de ilustrações

[PENDENTE – gerar após a seleção, a numeração e a paginação definitivas das figuras]

## Lista de tabelas

[PENDENTE – gerar após a seleção, a numeração e a paginação definitivas das tabelas]

## Sumário

[PENDENTE – atualizar automaticamente no DOCX após a paginação final]

1 Introdução

2 Desenvolvimento

2.1 Objetivos

2.2 Justificativa e delimitação do problema

2.3 Fundamentação teórica

2.4 Aplicação das disciplinas estudadas no Projeto Integrador

2.5 Metodologia

3 Resultados: solução final

4 Considerações finais

Referências

Anexos

Apêndices

# 1 INTRODUÇÃO

O marketing digital articula canais, pontos de contato e interações que precisam ser examinados
em conjunto ao longo da relação entre a organização e seus públicos (Kannan; Li, 2017). Quando
campanhas são veiculadas em plataformas de anúncios, essas interações produzem registros de
investimento, alcance, cliques e conversões. A aplicação de métodos de ciência de dados permite
organizar tais registros e relacionar métricas de desempenho às decisões de marketing (Saura,
2021). No contexto educacional, painéis de indicadores podem apoiar gestores na compreensão de
informações oriundas de diferentes sistemas e nos processos de tomada de decisão (Lemes; Dias;
Oliveira, 2023).

Em campanhas digitais, métricas como investimento, conversão e retorno precisam ser interpretadas
em relação aos objetivos organizacionais e às configurações de cada ação (Saura; Palos-Sánchez;
Suárez, 2017). Na publicidade de busca, a possibilidade de combinar palavras-chave, lances,
dispositivos e períodos torna insuficiente uma leitura baseada em um único total (Martins, 2019).
Na instituição parceira, os registros de investimento e desempenho permanecem dispersos entre
fontes distintas, com indicadores, unidades de medida e recortes temporais próprios (Grupo do
Projeto Integrador, 2026). Essa fragmentação dificulta a comparação dos resultados entre canais e
campanhas, a avaliação do retorno obtido e a decisão sobre como distribuir o orçamento de marketing
(Grupo do Projeto Integrador, 2026). O problema que este trabalho enfrenta é, portanto, de natureza
analítica antes de ser tecnológica: os dados existem, mas não se apresentam em forma que sustente
a decisão.

A ideia básica que orienta o trabalho é que esse conjunto disperso pode ser consolidado e submetido
à análise de dados em escala. Indicadores calculados por regras determinísticas poderão ser
complementados pela investigação experimental de padrões. Neste trabalho, foi executado um
experimento separado de regressão para CPR no Google Ads, com dados integralmente sintéticos,
com resultados da CLI exibidos no módulo Google Ads da Fase 2 acadêmica, sem treinamento
no navegador. A interface web apresenta os resultados
disponíveis de modo acompanhável pela gestão. O objeto deste trabalho é, assim, o desenvolvimento e
a validação de uma análise de dados aplicada a investimentos em mídia digital no contexto
educacional, comunicada por uma plataforma web e avaliada junto aos profissionais que respondem por
essas decisões.

A escolha do tema decorre de uma necessidade real, manifestada por uma instituição de ensino
privada da região metropolitana de São Paulo à qual o grupo teve acesso por intermédio de um de
seus integrantes. Em conversa inicial, a gestora de marketing da instituição expôs a dificuldade
de estabelecer quanto deveria ser investido em tráfego pago e de avaliar se os valores praticados
eram adequados aos objetivos institucionais. Em contato posterior com a direção, buscou-se
identificar quais indicadores seriam mais relevantes para acompanhar os investimentos realizados e
seus resultados ao longo do tempo. A receptividade da equipe e o acesso direto aos profissionais
envolvidos indicaram condições para desenvolver a solução e submetê-la à validação da comunidade
participante, sem antecipar o resultado dessa validação.

Soma-se a essa demanda a composição interdisciplinar do grupo, que reúne estudantes dos cursos de
Bacharelado em Ciência de Dados e Engenharia da Computação. Aplicações em Aprendizado de Máquina,
Redes Neurais e Aprendizado Profundo fornecem repertório de algoritmos, frameworks e modelos
neurais pertinente à análise e à interpretação dos dados do projeto (UNIVESP, 2020). Visão
Computacional amplia o repertório de aquisição, processamento e análise de dados visuais, enquanto
Impactos da Computação na Sociedade orienta a reflexão sobre os aspectos éticos, sociais, legais e
de governança de dados relacionados ao uso de inteligência artificial (UNIVESP, 2020; UNIVESP,
2026). Esses conteúdos são mobilizados como base de formação; o projeto não prevê o uso de imagens
nem de dados sensíveis da instituição parceira.

# 2 DESENVOLVIMENTO

## 2.1 Objetivos

O projeto busca desenvolver análise de dados em escala a partir de um conjunto de dados históricos
de investimentos em mídia digital, aplicando métodos analíticos e preparando uma interface para
visualização dos resultados. A aprendizagem de máquina foi delimitada a um experimento sintético
de CPR no Google Ads, executado separadamente do protótipo. Essa finalidade corresponde ao tema norteador da UNIVESP e
articula o problema identificado junto à comunidade parceira (Grupo do Projeto Integrador, 2026).

### 2.1.1 Objetivo geral

Desenvolver uma solução analítica para organizar dados históricos de investimentos em mídia digital
e apoiar a tomada de decisão sobre a distribuição do orçamento de marketing em uma instituição de
ensino.

### 2.1.2 Objetivos específicos

- Consolidar dados históricos de investimento e desempenho de campanhas provenientes de fontes distintas em uma estrutura adequada à análise.
- Identificar e organizar indicadores que permitam comparar o desempenho de canais e campanhas.
- Implementar rotinas determinísticas para calcular indicadores a partir dos dados consolidados, com parâmetros e resultados passíveis de conferência.
- Avaliar, em dados históricos integralmente sintéticos de Google Ads, uma regressão supervisionada para estimar CPR, comparando-a à persistência do CPR histórico elegível e registrando métricas, controles de leakage e limitações.
- Empregar IA agêntica via linha de comando como apoio controlado à formulação, execução e interpretação de cenários de simulação, sem substituir os cálculos determinísticos, o modelo de aprendizagem de máquina ou a revisão humana.
- Desenvolver uma interface web que apresente os indicadores de forma compreensível para a gestão.
- Avaliar a versão do protótipo com profissionais da instituição parceira, registrando as contribuições recebidas para sua evolução.

[REVISAR – após a conclusão do desenvolvimento e da validação, conferir quais objetivos foram atendidos integralmente, parcialmente ou não puderam ser executados]

## 2.2 Justificativa e delimitação do problema

O problema de pesquisa foi identificado nas conversas iniciais com a gestora de marketing e a
direção da instituição parceira. Os dados de investimento e desempenho das campanhas de mídia
digital permanecem distribuídos em fontes distintas, o que dificulta comparar canais, avaliar o
retorno das campanhas e decidir sobre a distribuição do orçamento de marketing (Grupo do Projeto
Integrador, 2026). Diante desse contexto, a pesquisa é orientada pela seguinte questão: como
organizar e apresentar os dados históricos de investimentos em mídia digital de modo a apoiar a
tomada de decisão da gestão de uma instituição de ensino?

O problema vincula-se ao tema norteador da UNIVESP porque parte de um conjunto de dados existente,
demanda análise de dados em escala e prevê uma interface web para tornar os resultados
acompanháveis. A aprendizagem de máquina integra o tema por meio do experimento sintético de
CPR no Google Ads, sem inferência operacional ou decisão autônoma. A escolha de indicadores e métricas é necessária para
avaliar a efetividade das estratégias de marketing digital e verificar sua aderência aos objetivos
organizacionais (Saura; Palos-Sánchez; Suárez, 2017). A proposta, portanto, não se limita à criação
de uma interface: busca converter dados dispersos em informação que possa sustentar uma decisão de
gestão.

A relevância acadêmica decorre da aproximação entre ciência de dados, marketing digital e apoio à
decisão. A literatura aponta que a ciência de dados pode extrair informações acionáveis de grandes
conjuntos de dados nesse contexto, embora ainda existam lacunas sobre sua gestão e aplicação em
estratégias de marketing (Saura, 2021). A relevância social e cultural está em desenvolver a
solução a partir das necessidades expressas pelos profissionais da comunidade participante,
preservando seu contexto de trabalho e submetendo o protótipo à sua avaliação (Grupo do Projeto
Integrador, 2026). Busca-se, assim, contribuir para que a gestão acompanhe informações relevantes às
suas decisões sem impor um modelo desvinculado da realidade institucional.

O escopo está limitado à consolidação, à análise e à visualização de dados históricos relacionados
a campanhas de mídia e aos indicadores definidos com a instituição parceira. Não fazem parte do
estudo a integração com contas reais de anúncios, gestão de relacionamento com clientes (CRM),
sistemas acadêmicos ou outras bases operacionais, nem o tratamento de dados pessoais ou
informações comerciais sensíveis. O ambiente acadêmico independente e sanitizado utiliza somente
dados sintéticos locais. As Fases 1 e 2 estão funcionais localmente: Captação, Matrículas e Ads
(visão geral, Google Ads, Meta Ads e Estratégia). Conteúdo orgânico e Objetivo da Gestão com
Arquitetura e Algoritmos, das Fases 3 e 4, permanecem planejados e bloqueados. A
camada de IA agêntica poderá receber apenas contexto fictício ou
sanitizado e será acionada pelo grupo. Resultados de simulações deverão ser identificados como
exploratórios e dependerão de cálculo determinístico e revisão humana.

## 2.3 Fundamentação teórica

A fundamentação adota três camadas distintas. A primeira é a análise determinística, formada por
métricas e indicadores obtidos por regras explícitas. A segunda é a aprendizagem de máquina,
entendida como treinamento e avaliação de modelos que aprendem padrões a partir de exemplos
históricos e produzem estimativas para novas observações (Jordan; Mitchell, 2015). A terceira é a
IA agêntica ou generativa, utilizada somente como apoio controlado à organização e à interpretação,
sem ser apresentada como o método que aprende com os dados.

Essa distinção é particularmente necessária no marketing digital: a revisão de De Mauro, Sestino e
Bacconi (2022) posiciona a aprendizagem de máquina como subárea da IA e identifica aplicações em
marketing ligadas a apoio à decisão e impacto financeiro. Assim, a contribuição técnica prevista
não é apenas uma interface nem uma explicação gerada por IA. O recorte de aprendizagem de máquina
adotado é uma regressão supervisionada para CPR no Google Ads, com dados sintéticos. O modelo,
a variável-alvo, as entradas, o particionamento e as métricas do experimento executado são
documentados nas subseções 2.5.11 e 3.4.4.

### 2.3.1 Marketing digital e decisão orientada por dados

O marketing digital pode ser compreendido como um conjunto integrado de atividades, canais e
interações mediadas por tecnologias digitais, e não como a simples publicação de anúncios. Nessa
perspectiva, a organização define objetivos, seleciona pontos de contato com seus públicos,
acompanha as respostas obtidas e ajusta suas ações à luz dos resultados. Kannan e Li (2017)
destacam a necessidade de examinar o marketing digital de forma integrada, considerando os
diferentes canais e as jornadas que conectam a organização aos seus públicos.

Para uma instituição de ensino, esse enquadramento aproxima os dados de mídia de uma decisão
gerencial concreta: avaliar como os recursos de comunicação contribuem para os objetivos de
captação definidos pela organização. Isso não autoriza concluir, sem evidência, que uma campanha
causou uma matrícula. A análise pode organizar os registros históricos disponíveis, identificar
padrões de desempenho e apresentar evidências comparáveis sobre canais, campanhas, públicos e
períodos, sempre dentro dos limites dos dados recebidos.

O uso de dados no marketing digital transforma registros operacionais, como investimento,
exposição, interações e conversões registradas, em insumos para acompanhamento e decisão. Saura
(2021) associa a aplicação de ciência de dados no marketing digital à análise de desempenho e à
utilização de métricas para orientar ações. No escopo deste projeto, a interface web é o meio de
visualização dos resultados; a contribuição central é a organização analítica dos dados e, em
experimento separado, a avaliação de aprendizagem de máquina sobre o CPR sintético do Google Ads.
Não há aprendizagem de máquina em Captação, Matrículas, Meta Ads, conteúdo orgânico ou gestão;
esses módulos utilizam ou preveem análise determinística e descritiva.

Assim, a decisão orientada por dados é tratada como processo de apoio, e não como substituição do
julgamento dos responsáveis da instituição. Os indicadores e as estimativas analíticas devem
oferecer evidências para priorizar investigações e discutir a distribuição do orçamento, enquanto
as decisões finais permanecem condicionadas ao contexto institucional, às metas de captação e às
restrições identificadas pela comunidade externa.

### 2.3.2 Tráfego pago e campanhas de anúncios

Tráfego pago, no escopo deste trabalho, corresponde às ações de comunicação em que a instituição
investe recursos para veicular anúncios em plataformas digitais e direcionar usuários a um ponto de
contato definido. A expressão não se confunde com todo o marketing digital: ela delimita a parcela
das ações cuja veiculação produz registros de investimento e desempenho. O recorte demonstrativo
desta etapa utiliza exclusivamente dados sintéticos, sem importação de registros operacionais
da instituição parceira.

As campanhas de anúncios oferecem diferentes possibilidades de configuração. No caso da
publicidade de busca, por exemplo, é possível associar anúncios a palavras-chave e ajustar lances
segundo fatores como dispositivo e período de veiculação (Martins, 2019). Essa variedade torna
inadequada uma leitura que considere somente o total investido ou o total de cliques. A análise
deverá observar as unidades efetivamente presentes na base, como canal, campanha, grupo de
anúncios, anúncio, palavra-chave ou período, sem presumir que todos esses campos estarão
disponíveis.

O propósito da análise não é declarar antecipadamente qual campanha deve receber mais orçamento.
Busca-se organizar evidências para comparar exposição, interesse, conversão e custo em relação aos
objetivos de captação definidos com a instituição. Em publicidade de busca paga, as decisões de
lance e de orçamento são influenciadas pelo modo como as conversões são atribuídas aos elementos
que antecedem a ação do usuário (Li et al., 2016). Por isso, a regra de atribuição registrada pela
plataforma, quando disponível, deve ser tratada como parte do contexto analítico.

### 2.3.3 Indicadores e tomada de decisão

Os indicadores são calculados por regras determinísticas e usados em conjunto, evitando decisões
baseadas em uma métrica isolada. Investimento, impressões e alcance descrevem a exposição; cliques e
taxa de cliques (CTR) avaliam a resposta inicial; custo por clique (CPC) mostra o custo do tráfego;
conversões e taxa de conversão aproximam o resultado de captação; custo por aquisição (CPA) e
retorno sobre o investimento em publicidade (ROAS) apoiam a comparação entre o valor gerado e o
recurso aplicado (Saura, 2021; Saura; Palos-Sánchez; Suárez, 2017).

| Indicador ou combinação | Pergunta de decisão que orienta |
|---|---|
| Investimento, impressões e alcance | Onde houve entrega e exposição suficientes para justificar continuidade ou revisão da segmentação? |
| Cliques, CTR e CPC | Quais anúncios, públicos ou palavras-chave atraem interesse com custo compatível? |
| Conversões, taxa de conversão e CPA | Quais campanhas transformam interesse em ação desejada a um custo sustentável? |
| Receita ou valor atribuído, investimento e ROAS | Como priorizar a distribuição do orçamento entre campanhas e canais? |

Fonte: Elaborado pelo grupo (2026).

A atribuição de conversões deve ser declarada antes das comparações, pois a regra escolhida altera o
crédito atribuído aos elementos da jornada e pode modificar decisões de lance, orçamento e retorno
estimado (Li et al., 2016). Quando não houver receita ou valor de conversão confiável na base, o
relatório não calculará ROAS como se fosse dado observado; usará os indicadores disponíveis e
registrará a limitação.

### 2.3.4 Análise de dados em escala e apoio à tomada de decisão

A análise de dados em escala começa pela organização de registros históricos. O objetivo não é
acumular dados, mas estabelecer um processo reprodutível para receber, identificar, padronizar,
integrar e transformar os registros em uma base adequada à análise. Essa preparação evita que
comparações entre campanhas e períodos sejam afetadas por nomes inconsistentes, formatos
incompatíveis, valores ausentes, duplicações ou unidades de medida diferentes.

A qualidade desse processo é parte do resultado analítico. Foidl et al. (2024) identificam
ingestão, integração, limpeza e transformação como etapas relevantes de pipelines de dados e
associam problemas de qualidade a aspectos como tipos de dados, compatibilidade e rastreabilidade.
Cada transformação relevante deverá ser documentada, de modo que um indicador ou uma estimativa
possa ser relacionado à sua origem, ao período analisado e às regras aplicadas.

A reprodutibilidade exige que outro integrante consiga reconstruir o resultado a partir das mesmas
entradas e condições de processamento (Peng, 2011). Por isso, o histórico de transformações, as
fórmulas e os parâmetros compõem a evidência do resultado. Achados agregados não são convertidos
automaticamente em relações de causa e efeito; funcionam como evidências para interpretação
conjunta com a instituição e como base para as rotinas de indicadores.

### 2.3.5 Aprendizagem de máquina aplicada ao marketing digital

A aprendizagem de máquina é tratada como método analítico distinto do cálculo de indicadores.
Enquanto CTR, CPC, taxa de conversão e CPA resultam de fórmulas previamente definidas, um modelo de
aprendizagem de máquina é treinado com exemplos históricos para reconhecer padrões e produzir uma
estimativa para observações não usadas no treinamento. Jordan e Mitchell (2015) caracterizam esse
campo pela melhoria do desempenho em uma tarefa a partir da experiência representada pelos dados.

No contexto do marketing, De Mauro, Sestino e Bacconi (2022) situam a aprendizagem de máquina como
subárea da inteligência artificial e identificam aplicações ligadas ao apoio à decisão e ao impacto
financeiro. Neste PI, o recorte experimental é uma regressão para CPR no Google Ads, com
variáveis históricas elegíveis e calendário em cenário inteiramente sintético. O desenho
exclui informação contemporânea que reconstruiria a fórmula do target ou não estaria disponível
na emissão da estimativa; não propõe previsão de matrículas ou recomendação de orçamento.

O método exige a descrição das variáveis de entrada, da variável-alvo, do particionamento entre
treinamento e teste, dos modelos comparados e das métricas de avaliação. A qualidade de um modelo
não pode ser inferida apenas por produzir uma previsão aparentemente plausível: deve ser avaliada
em dados separados e confrontada com uma referência simples e reprodutível.

### 2.3.6 Visualização de dados e dashboards para apoio à gestão educacional

A visualização de dados é a camada pela qual os resultados analíticos se tornam acessíveis aos
profissionais que participam da decisão. Um dashboard deve apresentar indicadores, comparações e
recortes temporais de forma que o usuário compreenda o que está sendo medido e formule perguntas
sobre o desempenho das campanhas. Em instituições de ensino, Lemes, Dias e Oliveira (2023)
identificam o uso de dashboards como recurso de apoio à tomada de decisão e à integração de
informações provenientes de sistemas distintos.

Padrões de design de dashboards ajudam a relacionar estrutura, interação e conteúdo, permitindo
justificar por que determinada visão emprega comparação temporal, detalhamento, agrupamento ou
destaque de exceções (Bach et al., 2023). O protótipo seleciona os recursos visuais por sua função
na interpretação. A interface deve preservar contexto: período, canal, unidade de análise, fórmula
do indicador e limitações dos dados precisam permanecer disponíveis.

A avaliação com a comunidade externa deve verificar se as visualizações permitem compreender os
resultados e discutir as decisões previstas. As sugestões recebidas serão registradas como
evidências de adequação e melhoria do protótipo, sem afirmar que o dashboard, por si só, garante
melhoria nas decisões ou nos resultados de captação.

### 2.3.7 Uso controlado de IA agêntica e supervisão humana

A IA agêntica é tratada como recurso auxiliar de organização e interação com ferramentas, e não
como sinônimo de aprendizagem de máquina aplicada à base de campanhas. Agentes baseados em modelos
de linguagem podem combinar componentes como planejamento, memória e uso de ferramentas; contudo,
a área permanece em desenvolvimento e apresenta desafios de avaliação e confiabilidade (Wang et
al., 2024). Essa característica impede que suas respostas sejam aceitas como evidência sem
verificação.

Modelos de linguagem de alta capacidade poderão atuar como camada de interpretação assistida:
organizar evidências, comparar cenários e formular explicações preliminares sobre indicadores e
resultados já calculados. O agente não terá acesso a contas reais de anúncios, não executará
alterações de orçamento e não definirá o modelo de aprendizagem de máquina sem validação do grupo.
Dados sensíveis ou identificáveis não serão enviados a essa camada.

Para garantir rastreabilidade, a engenharia de memória e contexto reunirá somente documentos
versionados, dados locais sanitizados, fórmulas de indicadores, resultados do modelo e decisões já
registradas. Toda explicação ou recomendação deverá indicar a evidência que a sustenta e será
rejeitada quando criar métricas, resultados ou conclusões sem base verificável. A decisão final
permanece sob responsabilidade humana, em diálogo com a instituição parceira.

## 2.4 Aplicação das disciplinas estudadas no Projeto Integrador

O desenvolvimento articula conteúdos de mais de três disciplinas dos cursos de Bacharelado em
Ciência de Dados e Engenharia da Computação. Aplicações em Aprendizado de Máquina fornece o
repertório para formular uma tarefa supervisionada, separar dados de treinamento e teste, comparar
modelos e selecionar métricas de avaliação. Redes Neurais e Aprendizado Profundo amplia a
compreensão sobre modelos preditivos e seus limites, sem implicar que uma rede neural tenha sido
implementada ou validada neste projeto. Esses conteúdos integram os projetos pedagógicos dos cursos
e são mobilizados de acordo com a disponibilidade efetiva dos dados (UNIVESP, 2020; UNIVESP, 2026).

Visão Computacional contribui para a compreensão de aquisição, preparação e análise de dados
visuais. No escopo atual, essa disciplina oferece repertório metodológico, mas não corresponde a um
módulo implementado, pois o projeto não utiliza imagens da instituição nem dados identificáveis.
Impactos da Computação na Sociedade fundamenta as decisões de anonimização, minimização de dados,
supervisão humana e delimitação do uso de inteligência artificial, especialmente diante da
possibilidade de publicação acadêmica dos resultados (UNIVESP, 2020; UNIVESP, 2026).

A construção da interface em Next.js e TypeScript também mobiliza conteúdos de desenvolvimento de
sistemas e engenharia de software, como componentização, separação entre dados e apresentação,
controle de acesso por feature gate e testes automatizados. A arquitetura web utiliza componentes
React e renderização no servidor, recursos discutidos por Thakkar (2020), para manter a aplicação
acadêmica independente de integrações operacionais.

[PENDENTE – identificar, para cada disciplina, os materiais específicos efetivamente estudados e usados pelo grupo, pois a rubrica final exige referência explícita aos materiais e não apenas às ementas]

[REVISAR – confirmar a lista de disciplinas efetivamente cursadas pelos integrantes e manter apenas relações demonstráveis com a solução]

## 2.5 Metodologia

O percurso metodológico combina uma etapa quantitativa, voltada à preparação e à análise dos
registros, com uma etapa qualitativa, destinada a compreender as necessidades dos profissionais e
avaliar a utilidade e a compreensão do protótipo. As duas etapas permanecem articuladas: os dados
delimitam o que pode ser calculado ou estimado, enquanto a participação da comunidade indica quais
perguntas de gestão e formas de apresentação são relevantes. A descrição distingue a baseline
técnica construída dos procedimentos ainda planejados; atividades não realizadas não são
apresentadas como resultados.

### 2.5.1 Delineamento aplicado e Design Thinking

O projeto possui caráter aplicado: parte de uma demanda apresentada pela instituição parceira e
busca produzir uma solução analítica passível de discussão no contexto em que o problema foi
identificado. O percurso combina levantamento de necessidades, análise de dados, construção de
visualizações e validação progressiva com os profissionais que participam das decisões de
marketing. Essa aproximação é compatível com o uso de Design Thinking em pesquisas que articulam
compreensão do problema, ideação e experimentação de soluções (Rosado; Dias, 2024).

A sequência metodológica é composta por escuta inicial, definição do problema, identificação de
requisitos, prototipação, testes, validação e ajustes. Cada passagem deverá deixar evidências:
registro da necessidade, decisão de projeto, versão do protótipo, tarefa de teste, contribuição
recebida e ajuste correspondente.

### 2.5.2 Ouvir e interpretar o contexto

Na etapa de ouvir, foram consolidados os registros das conversas iniciais com profissionais da
instituição parceira. A escuta identificou a necessidade de compreender quanto investir em tráfego
pago, avaliar a adequação dos valores investidos, acompanhar indicadores, comparar informações ao
longo do tempo e organizar dados dispersos. O relato mantém a instituição e os participantes
anonimizados e não incorpora dados pessoais ou informações comerciais sensíveis.

[PENDENTE – confirmar a existência do TCLE aplicável às interações já realizadas e preservar o documento preenchido para inclusão obrigatória na versão final]

### 2.5.3 Definir o problema e os requisitos

As necessidades iniciais foram convertidas no problema de organizar e apresentar dados históricos
de investimentos em mídia digital para apoiar a tomada de decisão. A definição orientou requisitos
de indicadores, comparações, filtros, visualizações e rastreabilidade. A análise não deve confundir
associação agregada com causalidade, nem apresentar dado ausente como zero ou estimativa silenciosa.

### 2.5.4 Criar e prototipar

Na etapa de criar, as necessidades foram relacionadas aos campos disponíveis, às regras de cálculo
e às alternativas de visualização. A baseline foi construída em Next.js e TypeScript, separando os
dados sintéticos locais da camada de apresentação web. A construção segue estratégia incremental:
Fase 1, Captação e Matrículas; Fase 2, Ads; Fase 3, conteúdo orgânico; Fase 4, Objetivo da Gestão e
Arquitetura e Algoritmos. As Fases 1 e 2 constituem resultado funcional acadêmico local;
as Fases 3 e 4 permanecem bloqueadas.

### 2.5.5 Implementar, testar, validar e ajustar

Para tornar rastreáveis as futuras avaliações, a interface foi identificada por versões.
V1 é a baseline pré-validação congelada em 06/10/2026; V2 inicia equivalente e poderá receber
ajustes selecionados a partir de feedback real. Ambas utilizam os mesmos dados sintéticos,
métricas, fórmulas e feature gates. A primeira aplicação deve registrar V1, período e filtros;
nenhuma melhoria de V2 ou resultado de comparação foi obtido nesta etapa.

A implementação disponível será apresentada à comunidade por meio de tarefas orientadas de
interpretação. A avaliação deverá registrar compreensão dos indicadores, utilidade percebida,
dificuldades, sugestões e prioridades de melhoria. Técnicas de pesquisa de experiência do usuário
apoiam a identificação de necessidades e a avaliação de serviços de informação (Pinheiro; Dias,
2023).

[PENDENTE – aplicar o instrumento de validação com a comunidade externa]

[PENDENTE – registrar participantes por perfil, data, formato, tarefas realizadas e critérios de avaliação, sem identificação nominal desnecessária]

[PENDENTE – descrever os testes executados, as devolutivas coletadas e os ajustes decorrentes]

### 2.5.6 Arquitetura analítica de três camadas

O motor analítico adota três camadas com escopos distintos. A primeira é formada por regras de
negócio e indicadores determinísticos que comparam valores observados a requisitos declarados. A
segunda realiza leituras agregadas do funil de captação e das matrículas, quando os períodos e os
campos permitem esse cruzamento. A terceira registra os limites de atribuição individual, isto é,
os casos em que as fontes disponíveis não permitem ligar uma ação de mídia, um contato e uma
matrícula específica.

Essa separação impede que um resultado de regra seja apresentado como causalidade ou que uma
correlação agregada seja tratada como atribuição por canal. Quando uma informação necessária não
estiver disponível, o resultado será sinalizado como não verificável (Saura, 2021; Li et al.,
2016).

### 2.5.7 Fontes de dados, recortes temporais e confidencialidade

Cada fonte deve ter período de referência e unidade de análise identificados antes de qualquer
comparação. Métricas de fontes ou janelas temporais distintas não podem ser somadas ou comparadas
como se representassem o mesmo fenômeno. No ambiente acadêmico, o recorte demonstrado para
captação e matrículas é inteiramente sintético: abrange as safras de 2022 a 2026, com última
observação simulada em 15/08/2026. Não há período histórico real autorizado para Google Ads, Meta Ads ou
conteúdo orgânico. O experimento de CPR utiliza uma cronologia fictícia independente, de 2017 a 2023,
sem correspondência com campanhas ou períodos operacionais da instituição.

Os dados reais, o código operacional e os relatórios operacionais detalhados permanecem fora
deste repositório. No ambiente acadêmico, são usados somente dados sintéticos, sem
identificadores pessoais, credenciais, nomes de contas ou informações comerciais sensíveis.

### 2.5.8 Preparação, governança e rastreabilidade dos dados

Os dados passam por identificação da origem, normalização de nomes e formatos, verificação de
tipos, tratamento explícito de valores ausentes e consolidação em artefatos versionados. Cada
indicador deve preservar fonte, período, unidade de análise e fórmula. Problemas de qualidade em
pipelines podem ocorrer na ingestão, integração, limpeza e transformação, o que reforça a
necessidade de documentar as regras aplicadas (Foidl et al., 2024).

Valores ausentes, incompatibilidades de período e falhas estruturais são sinalizados; não são
convertidos silenciosamente em zero nem em estimativas. Essa regra distingue um indicador medido de
um dado indisponível e possibilita auditoria posterior.

### 2.5.9 Indicadores, regras de negócio e cenários determinísticos

Os indicadores são calculados por rotinas determinísticas, com fórmulas e parâmetros registrados.
Podem incluir investimento, impressões, alcance, frequência, cliques, CTR, CPC, conversões, taxa de
conversão, CPA, custo por mil impressões e participação de impressões, conforme os campos
efetivamente disponibilizados. A interpretação ocorre no contexto do objetivo da campanha.

Regras de negócio, sazonalidade, capacidade de atendimento e limites de variação de orçamento
devem ser explicitados antes da construção de cenários. Cenários mínimo, ideal e agressivo, quando
aplicáveis, serão cálculos direcionais e reproduzíveis baseados em parâmetros declarados. Eles não
projetarão matrícula, não garantirão retorno e não ocultarão conflitos entre regras ou limitações
dos dados (Saura; Palos-Sánchez; Suárez, 2017; Martins, 2019).

### 2.5.10 Auditoria, reprodutibilidade e limites de atribuição

Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de
transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite
conferir resultados computacionais e suas condições de produção (Peng, 2011).

Impressão, clique, conversão de plataforma, conversa, contato, visita e matrícula não são tratados
como sinônimos. Quando houver apenas dados agregados, a análise poderá descrever associação entre
etapas do funil, mas não atribuir uma matrícula a uma campanha ou canal específico (Li et al.,
2016).

### 2.5.11 Protocolo experimental de aprendizagem de máquina

Foi executado um experimento supervisionado, exploratório e reproduzível, restrito ao CPR do
Google Ads. Neste recorte, CPR é o custo por conversão registrada na plataforma, calculado como
investimento dividido pelas conversões registradas. Não representa custo por matrícula ou por
lead único e não estabelece causalidade entre anúncio e matrícula. Denominador zero ou ausente
produz valor indefinido, não zero artificial. O protocolo distingue indicadores calculados por
fórmula de modelos treinados com exemplos históricos (Jordan; Mitchell, 2015; De Mauro;
Sestino; Bacconi, 2022).

O conjunto é integralmente sintético, gerado de forma independente com a seed fixa
`pij410-ads-cenario-independente-1`. A unidade de análise é campanha por mês-calendário, em
cronologia fictícia de 2017 a 2023. A disponibilidade dos dados foi simulada como 14 dias após
o encerramento do mês. Essa maturação é uma hipótese do cenário sintético, não uma regra da
plataforma ou da instituição real. Para estimativas emitidas no início de t, o mês t−1 ainda
não está disponível; por isso, utilizam-se métricas de t−2 cuja disponibilidade precede a emissão.

As entradas são CPR, CTR, CPC e logaritmo de um mais o número de cliques de t−2, além do seno e
cosseno do mês de t. Os atributos históricos não recompõem o CPR contemporâneo. As exclusões
metodológicas foram definidas antes da avaliação, para prevenir leakage, isto é, uso de
informação do resultado ou do futuro no treinamento ou na emissão da estimativa.

| Grupo | Decisão | Justificativa |
|---|---|---|
| Investimento e conversões em t | Excluir | Compõem diretamente o target e não estão disponíveis na emissão |
| CPR em t | Excluir | É o próprio target |
| Métricas contemporâneas e configurações posteriores | Excluir | Informação indisponível na emissão ou decidida posteriormente |
| Métricas históricas t−2 | Utilizar | Disponibilidade verificada antes da observação-alvo |
| Calendário | Utilizar | Conhecido antecipadamente |

Fonte: Elaborado pelo grupo (2026).

O particionamento é temporal, sem sorteio aleatório: 198 amostras de treino e 71 de teste, com
corte na data fictícia de 01/07/2021. Targets ainda indisponíveis no corte foram retirados do
treino; amostras sem histórico elegível ou CPR definido foram excluídas. A padronização foi
ajustada exclusivamente no treino, sem usar estatísticas do teste. O modelo permanece fixo e
a avaliação emite estimativas mensais sucessivas, podendo utilizar históricos do período de
teste somente depois de sua maturação. Não se trata de prever todo o horizonte no dia do corte.

A referência é a persistência do CPR elegível de t−2. Ela foi comparada a uma regressão linear
com intercepto, treinada apenas nas amostras anteriores ao corte. Foram calculados MAE, RMSE e
R² no conjunto de teste, mantendo registro de previsões e condições de execução, conforme o
princípio de reprodutibilidade computacional (Peng, 2011). A execução ocorre localmente via CLI,
sem API real. A interface Google Ads da Fase 2 exibe o artefato de resultados da CLI, sem
executar treinamento no navegador ou recomendar investimento. Os resultados estão em 3.4.4.

### 2.5.12 Interpretação assistida por IA e engenharia de contexto

Modelos de linguagem podem organizar evidências, comparar cenários e formular explicações
preliminares a partir de indicadores já calculados. Essa atividade não constitui evidência empírica
independente nem aprendizagem de máquina aplicada à base. O contexto disponibilizado ao agente é
restrito a documentos versionados, dados sanitizados, fórmulas, resultados e referências
verificadas. Saídas sem base rastreável não são utilizadas (Wang et al., 2024).

[PENDENTE – registrar eventual uso efetivo de IA na solução final, incluindo tarefa, contexto autorizado, evidência de revisão humana e limites]

# 3 RESULTADOS: SOLUÇÃO FINAL

Este capítulo distingue resultados comprovados, desenvolvimento em curso e itens planejados. Na
estado local verificado em 06/10/2026, as Fases 1 e 2 estão ativas; Fases 3 e 4 permanecem
planejadas e bloqueadas. A Fase 2 utiliza Google Ads e Meta Ads integralmente sintéticos,
sem integração real. O experimento de CPR descrito em 3.4.4 continua executado pela CLI;
a interface apenas apresenta seus resultados reproduzíveis, sem treinamento no navegador.
A ativação técnica não constitui validação comunitária nem novo deploy.

## 3.1 Contato inicial e necessidades identificadas

O contato inicial com a gestora de marketing evidenciou a necessidade de compreender quanto deveria
ser investido em tráfego pago e de avaliar se os valores investidos eram adequados aos objetivos da
instituição.

No contato com a direção, buscou-se compreender quais informações, indicadores e percepções seriam
necessários para apresentar e acompanhar os investimentos e os resultados ao longo do tempo. Essas
necessidades orientaram a organização inicial dos indicadores, das comparações, das visualizações e
da estrutura da interface, sem constituir validação ou aprovação do protótipo.

## 3.2 Estado real das fases do protótipo

| Fase | Escopo | Estado em 06/10/2026 | Evidência documental |
|---|---|---|---|
| Fase 1 | Captação e Matrículas | ATIVA/FUNCIONAL | Módulos funcionais com dados sintéticos |
| Fase 2 | Ads: visão geral, Google Ads, Meta Ads e estratégia | ATIVA/FUNCIONAL NO AMBIENTE ACADÊMICO LOCAL | Gate liberado explicitamente; build, testes e quatro rotas HTTP 200; somente dados sintéticos |
| Fase 3 | Conteúdo orgânico | PLANEJADA/BLOQUEADA | Feature gate fechado; conjunto sintético e algoritmos pendentes |
| Fase 4 | Objetivo da Gestão, Arquitetura e Algoritmos | PLANEJADA/BLOQUEADA | Feature gate fechado; depende das fases anteriores |

Fonte: Elaborado pelo grupo com base no estado versionado do repositório (2026).

[REVISAR – atualizar esta tabela antes de cada versão numerada do Relatório Final]

## 3.3 Estratégia incremental e arquitetura da solução

A aplicação web acadêmica é independente do ambiente operacional da instituição. A Fase 1 tornou-se
funcional em 27/08/2026 e disponibiliza Captação e Matrículas. Em 06/10/2026, a Fase 2 foi
ativada e verificada localmente, acrescentando os quatro módulos de Ads. Os módulos apresentam
relatórios, indicadores e visualizações baseados em dados sintéticos e não mantêm conexão com
contas de anúncios, CRM, sistema acadêmico ou base real da instituição parceira.

```text
dados sintéticos das Fases 1 e 2
        ↓
inventário, limpeza e padronização
        ↓
indicadores determinísticos
        ↓
Captação, Matrículas e Ads na interface web
        ↓
aplicação e avaliação pela comunidade externa [PENDENTE]
```

Figura [numeração pendente] – Arquitetura e fluxo de dados da solução acadêmica

[INSERIR FIGURA – representar o fluxo sem incluir dados, credenciais ou nomes da instituição]

Fonte: Elaborado pelo grupo (2026).

## 3.4 Resultados técnicos

### 3.4.1 Módulo de Captação

O módulo de Captação apresenta o funil sintético de contatos, visitas e matrículas. A página permite
selecionar safras e ciclos, consultar indicadores do recorte e visualizar as taxas derivadas entre
as etapas do funil. Os valores pertencem ao cenário acadêmico determinístico e não representam
resultados da instituição parceira.

Além da visão agregada, o módulo disponibiliza séries mensais, distribuição da situação dos
contatos, origem declarada e comparativo por safra. Esses recursos tornam visíveis diferentes
recortes do cenário e preservam a distinção entre valores observados no conjunto sintético e dados
ausentes.

Figura [numeração pendente] – Visão final do módulo de Captação

[INSERIR FIGURA – inserir tela final atualizada, com filtros, indicadores e funil]

Fonte: Elaborado pelo grupo (2026).

Figura [numeração pendente] – Visualizações complementares do módulo de Captação

[INSERIR FIGURA – inserir série temporal e comparação por safra ou origem]

Fonte: Elaborado pelo grupo (2026).

### 3.4.2 Módulo de Matrículas

O módulo de Matrículas apresenta histórico sintético por safra, ciclo, turma e mês. A interface
permite filtrar os recortes e distinguir total de matrículas, rematrículas, novas matrículas e
participação de rematrículas no total da safra atual. Essa participação não é retenção de coorte;
o protótipo não dispõe da população elegível anterior necessária para calcular essa retenção.

As visualizações complementares discriminam a composição por ciclo e turma, a efetivação mensal e
a tabela de participação de rematrículas por safra. A organização mantém separados os valores calculados, as contagens
sintéticas e os casos em que não há base de comparação.

Figura [numeração pendente] – Visão final do módulo de Matrículas

[INSERIR FIGURA – inserir tela final atualizada, com filtros, indicadores e composição por safra]

Fonte: Elaborado pelo grupo (2026).

Figura [numeração pendente] – Visualizações complementares do módulo de Matrículas

[INSERIR FIGURA – inserir composição por ciclo ou turma e série mensal ou participação de rematrículas]

Fonte: Elaborado pelo grupo (2026).

### 3.4.3 Módulos de Ads e componentes ainda planejados

A Fase 2 disponibiliza localmente visão geral, Google Ads, Meta Ads e Estratégia, mantendo a
identidade acadêmica e os dados sintéticos. Google Ads apresenta investimento, impressões,
cliques, conversões registradas, CTR, CPC, CPM e CPR, com filtros de ano-calendário fictício
e campanha, além de série mensal de CPR. A granularidade é mensal, sem filtros diários artificiais.

Na visão geral, a comparação entre canais se limita a investimentos em períodos compatíveis;
resultados com denominadores distintos não são tratados como equivalentes. Meta Ads separa
conversas e interações e seus custos por resultado, sem ML. Ausências tornam o agregado
incompleto. Estratégia apresenta gastos por canal e comparação determinística com uma premissa
mensal sintética de R$ 10.000, explicitamente fictícia e sem recomendação ou execução de campanhas.

[PENDENTE – atualizar somente após implementação comprovada de conteúdo orgânico, Objetivo da Gestão ou Arquitetura e Algoritmos]

[PENDENTE – registrar funcionalidades, filtros, indicadores, algoritmos e visualizações efetivamente concluídos, sem converter scaffolding ou planejamento em resultado]

### 3.4.4 Experimento de aprendizagem de máquina para CPR

O experimento descrito em 2.5.11 foi efetivamente executado e pode ser reproduzido localmente
via CLI. Os artefatos sintéticos registram condições de execução, amostras e previsões.
O treinamento permanece separado da interface: a Fase 2 acadêmica está ativa localmente e
Google Ads exibe o artefato de resultados, independente dos filtros de consulta. Não há treinamento
no navegador, inferência operacional ou recomendação automática. Não foram utilizados dados operacionais ou APIs reais.

| Modelo | MAE (R$ fictícios) | RMSE (R$ fictícios) | R² |
|---|---:|---:|---:|
| Persistência t−2 | 6,615678 | 8,363078 | −0,071903 |
| Regressão linear | 5,853007 | 7,673297 | 0,097625 |

Fonte: Elaborado pelo grupo, a partir da execução do experimento sintético (2026).

A regressão linear apresentou erros menores que a persistência nas métricas observadas,
mas o ganho foi modesto e o poder explicativo permaneceu baixo. Os resultados sustentam apenas
a comparação experimental neste cenário sintético. Não demonstram desempenho em dados reais,
eficácia institucional, atribuição causal ou capacidade de automatizar investimentos. A hipótese
de maturação de 14 dias também é exclusivamente sintética.

Figura [numeração pendente] – CPR sintético observado e previsto no conjunto de teste

[INSERIR FIGURA – comparação entre CPR sintético observado e previsto; opcional, sem figura produzida nesta execução]

Fonte: Elaborado pelo grupo (2026).

[PENDENTE – descrever eventual uso efetivo de IA assistiva e a revisão humana correspondente]

### 3.4.5 Testes técnicos

Na ativação local da Fase 2, passaram os testes automatizados de fases, determinismo,
CPR e reprodução dos artefatos, incluindo 37 verificações de não vazamento, além de lint,
TypeScript e build. As rotas de Captação, Matrículas e dos quatro módulos de Ads responderam
HTTP 200; conteúdo orgânico, gestão e arquitetura permaneceram em HTTP 404. Essas verificações
técnicas não constituem avaliação pela comunidade ou evidência de impacto institucional.

[PENDENTE – consolidar os testes funcionais, de integridade, determinismo, não vazamento, acessibilidade e demais verificações efetivamente executadas sobre a versão final]

Figura [numeração pendente] – Evidência dos resultados de testes da versão final

[PENDENTE  inserir figura somente após a execução dos testes finais e apenas se a evidência visual for necessária e não expuser dados sensíveis]

Fonte: Elaborado pelo grupo (2026).

## 3.5 Validação da solução com a comunidade

[PENDENTE – inserir resultado da apresentação e da utilização do protótipo pela comunidade externa]

[PENDENTE – descrever tarefas realizadas, compreensão da interface, utilidade percebida, dificuldades, críticas e sugestões efetivamente registradas]

[PENDENTE – registrar o instrumento aplicado, a quantidade e o perfil dos participantes de forma agregada e não identificável]

Figura [numeração pendente] – Evidência anonimizada da validação da solução

[PENDENTE  inserir figura somente após a validação e apenas com evidência autorizada, sem nomes, rostos, contatos, documentos ou outros identificadores pessoais]

Fonte: Elaborado pelo grupo (2026).

## 3.6 Comparação entre necessidade inicial e avaliação final

[PENDENTE – comparar as necessidades e expectativas registradas na escuta inicial com a utilização e a avaliação final do protótipo]

| Dimensão | Antes: necessidade ou expectativa inicial | Depois: evidência da avaliação final |
|---|---|---|
| Investimento em mídia | Compreender quanto investir e avaliar a adequação dos valores | [PENDENTE] |
| Indicadores | Acompanhar informações relevantes para a gestão | [PENDENTE] |
| Comparações | Comparar períodos e, quando houver dados, canais ou campanhas | [PENDENTE] |
| Organização | Reunir informações dispersas em uma visão compreensível | [PENDENTE] |
| Interface | Apresentar resultados de modo sintético e acompanhável | [PENDENTE] |

Fonte: Elaborado pelo grupo (2026).

## 3.7 Rastreabilidade entre necessidade, solução e validação

A tabela é compatível com o capítulo de resultados do modelo oficial porque sintetiza a relação
entre a escuta, a solução construída e a contribuição da comunidade. A coluna de validação
permanece pendente até que exista evidência real.

| Necessidade identificada | Elemento da solução | Evidência no protótipo | Resultado da validação |
|---|---|---|---|
| Compreender quanto investir em mídia | Indicadores e comparação determinística de orçamento | Ads sintéticos ativos localmente; premissa fictícia, sem determinar orçamento ideal | [PENDENTE] |
| Avaliar a adequação dos investimentos | Métricas determinísticas e limites explícitos | Indicadores de Ads sintéticos; dados reais de mídia não autorizados | [PENDENTE] |
| Acompanhar indicadores | Painéis de Captação e Matrículas | Indicadores, filtros e visualizações da Fase 1 | [PENDENTE] |
| Comparar períodos e canais | Filtros temporais e visualizações comparativas | Safras na Fase 1; ano-calendário fictício e investimentos por canal na Fase 2 | [PENDENTE] |
| Organizar informações dispersas | Interface web com dados e contexto padronizados | Módulos acadêmicos independentes com dados sintéticos | [PENDENTE] |

Fonte: Elaborado pelo grupo (2026).

## 3.8 Feedback e ajustes decorrentes

[PENDENTE – descrever cada feedback efetivamente recebido, a decisão do grupo e o ajuste correspondente]

| Feedback ou observação | Decisão do grupo | Ajuste realizado | Evidência | Situação |
|---|---|---|---|---|
| [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |

Fonte: Elaborado pelo grupo (2026).

## 3.9 Limitações

Os módulos funcionais utilizam dados inteiramente sintéticos e não mantêm conexão operacional com
contas de anúncios, CRM, sistemas acadêmicos ou bases da instituição. Por isso, o protótipo
demonstra organização, cálculo e visualização, mas não comprova desempenho real de campanhas nem
impacto institucional.

As fontes disponíveis não permitem atribuir individualmente uma matrícula a uma ação de mídia.
Associações agregadas devem ser interpretadas dentro do período, da unidade de análise e da regra de
atribuição declarados. A ausência de períodos históricos autorizados para Google Ads, Meta Ads e
conteúdo orgânico impede apresentar resultados operacionais desses componentes. Não impede
o experimento separado de CPR, executado exclusivamente sobre dados sintéticos.

Resultados obtidos em cenário sintético não podem ser generalizados para a operação da instituição
ou para outras organizações. O experimento de CPR apresentou baixo poder explicativo e depende
do processo gerador e da hipótese sintética de maturação de 14 dias. Não demonstra disponibilidade
histórica de métricas reais ou utilidade operacional. A interpretação assistida por IA não
substitui evidência, cálculo ou decisão humana.

[PENDENTE – registrar limitações observadas durante testes e validação com a comunidade]

# 4 CONSIDERAÇÕES FINAIS

O projeto parte do problema de organizar e apresentar dados históricos de investimentos em mídia
digital para apoiar a tomada de decisão em uma instituição de ensino. A estrutura desenvolvida até
o momento demonstra uma aplicação acadêmica independente, com dados sintéticos, regras
determinísticas e módulos funcionais de Captação, Matrículas e Ads no ambiente local. Esse resultado sustenta apenas as
afirmações técnicas correspondentes às Fases 1 e 2 e não comprova, por si só, impacto sobre decisões ou
resultados da comunidade.

Separadamente, o experimento demonstrou a viabilidade técnica de aplicar regressão supervisionada
ao problema acadêmico de CPR definido. Entretanto, o baixo poder explicativo exige interpretar
seus resultados apenas como exercício experimental sobre dados sintéticos. Essa constatação
provisória não estabelece eficácia operacional nem atendimento integral aos objetivos do projeto.

[PENDENTE – avaliar o atendimento do objetivo geral e de cada objetivo específico com base nos resultados finais]

[PENDENTE – sintetizar os principais resultados técnicos efetivamente concluídos]

[PENDENTE – retomar os resultados à luz das referências utilizadas]

[PENDENTE – registrar o retorno da comunidade, o impacto observado e o balanço entre a solução inicial e a solução final]

[PENDENTE – consolidar as contribuições e limitações do trabalho]

[PENDENTE – indicar possibilidades de continuidade sem apresentá-las como entregas concluídas]

# REFERÊNCIAS

[REVISAR – confirmar com a orientadora a aplicação da NBR 6023:2018 e da NBR 10520:2023, conforme a pendência registrada na ADR-002; o modelo oficial ainda menciona a edição de 2002]

BACH, Benjamin et al. Dashboard Design Patterns. **IEEE Transactions on Visualization and Computer Graphics**, v. 29, n. 1, p. 342-352, 2023. DOI: 10.1109/tvcg.2022.3209448. Disponível em: https://doi.org/10.1109/tvcg.2022.3209448. Acesso em: 26 ago. 2026.

DE MAURO, Andrea; SESTINO, Andrea; BACCONI, Andrea. Machine learning and artificial intelligence use in marketing: a general taxonomy. **Italian Journal of Marketing**, v. 2022, p. 439-457, 2022. DOI: 10.1007/s43039-022-00057-w. Disponível em: https://doi.org/10.1007/s43039-022-00057-w. Acesso em: 26 ago. 2026.

FOIDL, Harald et al. Data pipeline quality: influencing factors, root causes of data-related issues, and processing problem areas for developers. **Journal of Systems and Software**, v. 207, p. 111855, 2024. DOI: 10.1016/j.jss.2023.111855. Disponível em: https://doi.org/10.1016/j.jss.2023.111855. Acesso em: 26 ago. 2026.

GRUPO DO PROJETO INTEGRADOR. **Plano de ação do Projeto Integrador em Computação III**: PIJ410-DRP14-A2026S2-T002. São Paulo: UNIVESP, 2026. Documento interno.

JORDAN, Michael I.; MITCHELL, Tom M. Machine learning: trends, perspectives, and prospects. **Science**, v. 349, n. 6245, p. 255-260, 2015. DOI: 10.1126/science.aaa8415. Disponível em: https://doi.org/10.1126/science.aaa8415. Acesso em: 26 ago. 2026.

KANNAN, P. K.; LI, Hongshuang "Alice". Digital marketing: a framework, review and research agenda. **International Journal of Research in Marketing**, v. 34, n. 1, p. 22-45, 2017. DOI: 10.1016/j.ijresmar.2016.11.006. Disponível em: https://doi.org/10.1016/j.ijresmar.2016.11.006. Acesso em: 26 ago. 2026.

LEMES, Thieny de Cássio; DIAS, Marina Oliveira de Souza; OLIVEIRA, Tiago de. Análise do uso de dashboard como ferramenta de apoio a tomada de decisão em instituições de ensino: uma revisão sistemática da literatura. **RENOTE**, v. 21, n. 1, p. 281-290, 2023. DOI: 10.22456/1679-1916.134356. Disponível em: https://doi.org/10.22456/1679-1916.134356. Acesso em: 24 ago. 2026.

LI, Hongshuang "Alice"; KANNAN, P. K.; VISWANATHAN, Siva; PANI, Abhishek. Attribution strategies and return on keyword investment in paid search advertising. **Marketing Science**, v. 35, n. 6, p. 831-848, 2016. DOI: 10.1287/mksc.2016.0987. Disponível em: https://doi.org/10.1287/mksc.2016.0987. Acesso em: 26 ago. 2026.

MARTINS, Felipe. **Otimização de uma campanha publicitária na rede de pesquisa do Google Ads utilizando Teoria da Decisão Bayesiana**. 2019. Dissertação (Mestrado) – Universidade de São Paulo, São Paulo, 2019. DOI: 10.11606/d.45.2019.tde-22102019-115749. Disponível em: https://doi.org/10.11606/d.45.2019.tde-22102019-115749. Acesso em: 24 ago. 2026.

PENG, Roger D. Reproducible research in computational science. **Science**, v. 334, n. 6060, p. 1226-1227, 2011. DOI: 10.1126/science.1213847. Disponível em: https://doi.org/10.1126/science.1213847. Acesso em: 25 ago. 2026.

PINHEIRO, Gabriela da Silva Santos; DIAS, Célia da Consolação. Técnicas e métodos de pesquisa de experiência do usuário (UX) para avaliação de estudo de usuários da informação. **Perspectivas em Gestão & Conhecimento**, v. 13, n. 2, p. 133-148, 2023. DOI: 10.22478/ufpb.2236-417x.2023v13n2.63290. Disponível em: https://doi.org/10.22478/ufpb.2236-417x.2023v13n2.63290. Acesso em: 24 ago. 2026.

ROSADO, Keila Mara Lara; DIAS, Célia da Consolação. A metodologia Design Thinking nas pesquisas científicas e a pertinência de sua apropriação pela Ciência da Informação. **Encontros Bibli: Revista Eletrônica de Biblioteconomia e Ciência da Informação**, v. 29, e96222, 2024. DOI: 10.5007/1518-2924.2024.e96222. Disponível em: https://doi.org/10.5007/1518-2924.2024.e96222. Acesso em: 26 ago. 2026.

SAURA, José Ramón. Using Data Sciences in Digital Marketing: framework, methods, and performance metrics. **Journal of Innovation & Knowledge**, v. 6, n. 2, p. 92-102, 2021. DOI: 10.1016/j.jik.2020.08.001. Disponível em: https://doi.org/10.1016/j.jik.2020.08.001. Acesso em: 25 ago. 2026.

SAURA, José Ramón; PALOS-SÁNCHEZ, Pedro; SUÁREZ, Luis Manuel Cerdá. Understanding the Digital Marketing Environment with KPIs and Web Analytics. **Future Internet**, v. 9, n. 4, p. 76, 2017. DOI: 10.3390/fi9040076. Disponível em: https://doi.org/10.3390/fi9040076. Acesso em: 24 ago. 2026.

THAKKAR, Mohit. **Building React Apps with Server-Side Rendering**: use React, Redux, and Next to build full server-side rendering applications. Berkeley: Apress, 2020. DOI: 10.1007/978-1-4842-5869-9. Disponível em: https://doi.org/10.1007/978-1-4842-5869-9. Acesso em: 26 ago. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Projeto pedagógico dos cursos de Bacharelado em Tecnologia da Informação, Ciência de Dados e Engenharia de Computação**. São Paulo: UNIVESP, 2020. Disponível em: https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BTI.pdf. Acesso em: 25 ago. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Projeto pedagógico do curso de Bacharelado em Ciência de Dados**. São Paulo: UNIVESP, 2026. Disponível em: https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BCD-2026.pdf. Acesso em: 25 ago. 2026.

WANG, Lei et al. A survey on large language model based autonomous agents. **Frontiers of Computer Science**, v. 18, n. 6, 2024. DOI: 10.1007/s11704-024-40231-1. Disponível em: https://doi.org/10.1007/s11704-024-40231-1. Acesso em: 24 ago. 2026.

# ANEXOS

## Anexo A – Termo de Consentimento Livre e Esclarecido

[PENDENTE – incluir no artefato final o TCLE preenchido e aplicável às interações com a comunidade, conforme o Regulamento do PI; não transcrever no Markdown dados pessoais desnecessários]

[REVISAR – verificar se o documento deve ser apresentado com restrição ou tratamento adicional antes da publicação acadêmica]

## Anexo B – Documentos externos necessários

[PENDENTE – incluir apenas documentos externos indispensáveis, autorizados e sem conteúdo confidencial]

# APÊNDICES

## Apêndice A – Roteiro de entrevista ou conversa inicial

[PENDENTE – consolidar a versão efetivamente aplicada, sem identificação nominal dos participantes]

## Apêndice B – Instrumento de validação do protótipo

[PENDENTE – anexar o questionário ou roteiro efetivamente aplicado para avaliação da interface]

## Apêndice C – Critérios de avaliação da interface

[PENDENTE – registrar tarefas, critérios de compreensão, utilidade, navegação e priorização de melhorias]

## Apêndice D – Respostas consolidadas da validação

[PENDENTE – inserir síntese agregada e anonimizada somente após a aplicação do instrumento]
