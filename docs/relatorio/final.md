# Relatório Final — Projeto Integrador em Computação IV (PJI410)

<!-- Fonte editorial do Relatório Final (ADR-001). A paginação será inserida na composição. -->

# ELEMENTOS PRÉ-TEXTUAIS

## Capa

**UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO**

Ademário Silva Mascarenhas — RA 23210269

Alexsander da Silva Fernandes — RA 23225327

Lucas Baldoino Santos — RA 1707374

Marcos da Silva — RA 1906409

Michele Jeremias da Silva Santos — RA 1700600

Rafael Gonçalves Martins — RA 1705632

Raul Kelmani Ribeiro França Junior — RA 23200936

Rodrigo Felipe Nunes de Vasconcelos — RA 23205582

**Plataforma Analítica para Apoio à Tomada de Decisão em Investimentos de Mídia Digital no Contexto Educacional**

**Vídeo de apresentação do Projeto Integrador**

[PENDENTE – URL do vídeo final publicado no YouTube; inserir após publicação pelo grupo]

Grupo 11 · Turma PIJ410-DRP14-A2026S2-T002 · PJI410 — Projeto Integrador em Computação IV

Polos Aricanduva, São Rafael, Rosa da China e Jaçanã

São Paulo – SP

2026

## Folha de rosto

**UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO**

**Plataforma Analítica para Apoio à Tomada de Decisão em Investimentos de Mídia Digital no Contexto Educacional**

Relatório Técnico-Científico apresentado na disciplina Projeto Integrador em Computação IV
(PJI410), para os cursos de Bacharelado em Ciência de Dados e Bacharelado em Engenharia de
Computação da Universidade Virtual do Estado de São Paulo (UNIVESP).

Orientadora do PI: Letícia Vieira Santos.

Grupo 11 · Turma PIJ410-DRP14-A2026S2-T002.

Polos Aricanduva, São Rafael, Rosa da China e Jaçanã.

São Paulo – SP.

2026

## Ficha catalográfica

MASCARENHAS, Ademário Silva; FERNANDES, Alexsander da Silva; SANTOS, Lucas Baldoino;
SILVA, Marcos da; SANTOS, Michele Jeremias da Silva; MARTINS, Rafael Gonçalves; FRANÇA JUNIOR,
Raul Kelmani Ribeiro; VASCONCELOS, Rodrigo Felipe Nunes de. **Plataforma Analítica para Apoio
à Tomada de Decisão em Investimentos de Mídia Digital no Contexto Educacional**.
[PENDENTE – total final de folhas após a composição do DOCX/PDF] f. Relatório Técnico-Científico —
Projeto Integrador em Computação IV (PJI410), Bacharelado em Ciência de Dados e Bacharelado em
Engenharia de Computação, Universidade Virtual do Estado de São Paulo. Orientadora do PI:
Letícia Vieira Santos. Polos: Aricanduva, São Rafael, Rosa da China e Jaçanã. São Paulo, 2026.

## Resumo

Este relatório apresenta o desenvolvimento de uma plataforma analítica acadêmica para organizar informações sobre investimentos em mídia digital e apoiar a tomada de decisão em uma instituição de ensino. O projeto partiu de necessidades identificadas em conversas com profissionais da comunidade externa e adotou um percurso de escuta, definição do problema, prototipação, testes e avaliação. A aplicação web utiliza exclusivamente dados sintéticos, indicadores determinísticos, filtros e visualizações. A V1 reúne Captação e Matrículas; a V2 acrescenta módulos de Ads e uma visualização temporal consolidada. Uma gerente de Marketing avaliou presencialmente a V1, apontou a dispersão dos gráficos temporais e sugeriu reuni-los. Após decisão do grupo e implementação do ajuste, a mesma participante reavaliou a V2 e relatou maior facilidade de comparação. Um experimento separado de aprendizado de máquina estimou custo por resultado em cenário sintético, com validação temporal e comparação com baselines; o resultado sazonal apresentou desempenho preditivo limitado e não fundamenta recomendações operacionais. Testes automatizados e registros versionados sustentam a execução técnica. A contribuição demonstrada é a organização rastreável de informações e de um ciclo de melhoria da interface. Dados sintéticos, ausência de integrações operacionais e avaliação por uma única participante impedem inferir impacto institucional ou generalizar os resultados.

**Palavras-chave:** Inteligência de negócios; Mídia digital; Visualização de dados; Aprendizado de máquina; Tomada de decisão.

## Lista de ilustrações

<!-- Paginação e numeração definitivas das figuras serão conferidas na composição do DOCX/PDF. -->

- Figura 1 – Indicadores e filtros da Captação na V1
- Figura 2 – Indicadores e composição por safra em Matrículas na V1
- Figura 3 – Visão geral acadêmica de Ads na V2
- Figura 4 – Histórico sintético e previsão sazonal experimental de CPR na V2
- Figura 5 – Gráficos temporais separados de Captação na V1
- Figura 6 – Evolução temporal consolidada de Captação na V2

## Lista de tabelas

<!-- Paginação e numeração definitivas das tabelas serão conferidas na composição do DOCX/PDF. -->

- Tabela 1 – Indicadores e perguntas de decisão
- Tabela 2 – Disciplinas estudadas e aplicações no projeto
- Tabela 3 – Organização funcional das fases e relação com as versões da interface
- Tabela 4 – Grupos de variáveis do experimento de CPR
- Tabela 5 – Estado das fases do protótipo
- Tabela 6 – Resultados do experimento inicial de CPR
- Tabela 7 – Resultados da previsão sazonal de CPR no holdout
- Tabela 8 – Resultados da previsão sazonal de CPR no rolling origin
- Tabela 9 – Valores projetados de CPR sintético
- Tabela 10 – Comparação entre necessidades iniciais e ciclo V1–V2
- Tabela 11 – Evolução da visualização temporal da V1 à V2
- Tabela 12 – Rastreabilidade entre necessidade, solução e validação
- Tabela 13 – Rastreabilidade do ajuste FB-V1-P1-001
- Tabela 14 – Feedback e ajuste decorrente da validação

## Sumário

<!-- Paginação do sumário a atualizar na composição do DOCX/PDF. -->

- 1 Introdução
- 2 Desenvolvimento
  - 2.1 Objetivos
    - 2.1.1 Objetivo geral
    - 2.1.2 Objetivos específicos
  - 2.2 Justificativa e delimitação do problema
  - 2.3 Fundamentação teórica
    - 2.3.1 Marketing digital e decisão orientada por dados
    - 2.3.2 Tráfego pago e campanhas de anúncios
    - 2.3.3 Indicadores e tomada de decisão
    - 2.3.4 Análise de dados em escala e apoio à tomada de decisão
    - 2.3.5 Aprendizagem de máquina aplicada ao marketing digital
    - 2.3.6 Visualização de dados e dashboards para apoio à gestão educacional
    - 2.3.7 Uso controlado de IA agêntica e supervisão humana
  - 2.4 Aplicação das disciplinas estudadas no Projeto Integrador
  - 2.5 Metodologia
    - 2.5.1 Delineamento aplicado e Design Thinking
    - 2.5.2 Ouvir e interpretar o contexto
    - 2.5.3 Definir o problema e os requisitos
    - 2.5.4 Criar e prototipar
    - 2.5.5 Implementar, testar, validar e ajustar
    - 2.5.6 Níveis de interpretação analítica
    - 2.5.7 Fontes de dados, recortes temporais e confidencialidade
    - 2.5.8 Preparação, governança e rastreabilidade dos dados
    - 2.5.9 Indicadores, regras de negócio e cenários determinísticos
    - 2.5.10 Auditoria, reprodutibilidade e limites de atribuição
    - 2.5.11 Protocolo experimental de aprendizagem de máquina
    - 2.5.12 Uso assistivo de IA agêntica e verificação humana
- 3 Resultados: solução final
  - 3.1 Contato inicial e necessidades identificadas
  - 3.2 Estado real das fases do protótipo
  - 3.3 Estratégia incremental e arquitetura da solução
  - 3.4 Resultados técnicos
    - 3.4.1 Módulo de Captação
    - 3.4.2 Módulo de Matrículas
    - 3.4.3 Módulos de Ads e componentes ainda planejados
    - 3.4.4 Experimento de aprendizagem de máquina para CPR
    - 3.4.5 Testes técnicos
  - 3.5 Validação da solução com a comunidade
  - 3.6 Comparação entre necessidades iniciais e avaliação do ciclo V1–V2
  - 3.7 Rastreabilidade entre necessidade, solução e validação
  - 3.8 Feedback e ajustes decorrentes
  - 3.9 Limitações
- 4 Considerações finais
- Referências
- Apêndices
  - Apêndice A – Instrumento de levantamento inicial
  - Apêndice B – Instrumentos de validação aplicados à V1 e à V2

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
Cerdá Suárez, 2017). Na publicidade de busca, a possibilidade de combinar palavras-chave, lances,
dispositivos e períodos torna insuficiente uma leitura baseada em um único total (Martins, 2019).
Na instituição parceira, os registros de investimento e desempenho permanecem dispersos entre
fontes distintas, com indicadores, unidades de medida e recortes temporais próprios (Grupo do
Projeto Integrador, 2026). Essa fragmentação dificulta a comparação dos resultados entre canais e
campanhas, a avaliação do retorno obtido e a decisão sobre como distribuir o orçamento de marketing
(Grupo do Projeto Integrador, 2026). O problema que este trabalho enfrenta é, portanto, de natureza
analítica antes de ser tecnológica: os dados existem, mas não se apresentam em forma que sustente
a decisão.

A ideia básica que orienta o trabalho é que esse conjunto disperso pode ser consolidado e submetido
à análise de dados em escala. Os indicadores calculados por regras determinísticas foram
complementados por um experimento separado de regressão para CPR no Google Ads, com dados
integralmente sintéticos. Os resultados produzidos pela CLI são exibidos no módulo Google Ads
da Fase 2 acadêmica, sem treinamento no navegador. A interface web apresenta os resultados
disponíveis para acompanhamento pela gestão. O objeto deste trabalho é, assim, o desenvolvimento
acadêmico de uma solução analítica para investimentos em mídia digital no contexto educacional.
A avaliação comunitária registrada limitou-se a Captação, Matrículas e ao ajuste de visualização
temporal, sem avaliar decisões de orçamento ou os módulos de Ads e ML.

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
Bacharelado em Ciência de Dados e Engenharia de Computação. A seção 2.4 relaciona os componentes
curriculares desses cursos às atividades documentadas: desenvolvimento web, engenharia de software,
preparação e visualização de dados, estatística e aprendizagem de máquina (UNIVESP, 2020). O
experimento implementado utiliza regressão linear; não foram implementadas redes neurais,
aprendizado profundo ou visão computacional. A proteção dos dados e a supervisão humana orientam
as decisões do projeto, sem uso de dados sensíveis da instituição parceira.

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

No estado documentado, os dados de investimento e desempenho foram organizados por módulo em
cenários sintéticos; não houve consolidação de fontes operacionais distintas em uma base
institucional. Os indicadores, os cálculos determinísticos e a interface foram implementados no
ambiente acadêmico com esses dados; o experimento de CPR foi executado e comparado às referências
definidas. A avaliação da interface foi parcial: uma profissional examinou Captação, Matrículas e
o ajuste temporal, não Ads ou ML. O responsável técnico confirmou o uso de agentes de IA como
apoio ao desenvolvimento, à revisão e à verificação técnico-científica, descrito em 2.5.12. Não
há registro de uma simulação agêntica específica via linha de comando; portanto, a modalidade de
simulação prevista no objetivo de IA não é declarada atendida integralmente.

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
organizacionais (Saura; Palos-Sánchez; Cerdá Suárez, 2017). A proposta, portanto, não se limita à criação
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
que antecedem a ação do usuário (Li *et al.*, 2016). Por isso, a regra de atribuição registrada pela
plataforma, quando disponível, deve ser tratada como parte do contexto analítico.

### 2.3.3 Indicadores e tomada de decisão

Os indicadores são calculados por regras determinísticas e usados em conjunto, evitando decisões
baseadas em uma métrica isolada. Investimento, impressões e alcance descrevem a exposição; cliques e
taxa de cliques (CTR) avaliam a resposta inicial; custo por clique (CPC) mostra o custo do tráfego;
conversões e taxa de conversão aproximam o resultado de captação; custo por aquisição (CPA) e
retorno sobre o investimento em publicidade (ROAS) apoiam a comparação entre o valor gerado e o
recurso aplicado (Saura, 2021; Saura; Palos-Sánchez; Cerdá Suárez, 2017).

Tabela 1 – Indicadores e perguntas de decisão

| Indicador ou combinação | Pergunta de decisão que orienta |
|---|---|
| Investimento, impressões e alcance | Onde houve entrega e exposição suficientes para justificar continuidade ou revisão da segmentação? |
| Cliques, CTR e CPC | Quais anúncios, públicos ou palavras-chave atraem interesse com custo compatível? |
| Conversões, taxa de conversão e CPA | Quais campanhas transformam interesse em ação desejada a um custo sustentável? |
| Receita ou valor atribuído, investimento e ROAS | Como priorizar a distribuição do orçamento entre campanhas e canais? |

Fonte: Elaborado pelo grupo (2026).

A atribuição de conversões deve ser declarada antes das comparações, pois a regra escolhida altera o
crédito atribuído aos elementos da jornada e pode modificar decisões de lance, orçamento e retorno
estimado (Li *et al.*, 2016). Quando não houver receita ou valor de conversão confiável na base, o
relatório não calculará ROAS como se fosse dado observado; usará os indicadores disponíveis e
registrará a limitação.

### 2.3.4 Análise de dados em escala e apoio à tomada de decisão

A análise de dados em escala começa pela organização de registros históricos. O objetivo não é
acumular dados, mas estabelecer um processo reprodutível para receber, identificar, padronizar,
integrar e transformar os registros em uma base adequada à análise. Essa preparação evita que
comparações entre campanhas e períodos sejam afetadas por nomes inconsistentes, formatos
incompatíveis, valores ausentes, duplicações ou unidades de medida diferentes.

A qualidade desse processo é parte do resultado analítico. Foidl *et al.* (2024) identificam
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
destaque de exceções (Bach *et al.*, 2023). O protótipo seleciona os recursos visuais por sua função
na interpretação. A interface deve preservar contexto: período, canal, unidade de análise, fórmula
do indicador e limitações dos dados precisam permanecer disponíveis.

A avaliação com a comunidade externa deve verificar se as visualizações permitem compreender os
resultados e discutir as decisões previstas. As sugestões recebidas serão registradas como
evidências de adequação e melhoria do protótipo, sem afirmar que o dashboard, por si só, garante
melhoria nas decisões ou nos resultados de captação.

### 2.3.7 Uso controlado de IA agêntica e supervisão humana

A IA agêntica designa aqui o uso auxiliar de agentes baseados em modelos de linguagem no processo
de desenvolvimento e análise, distinto do modelo supervisionado aplicado aos dados de campanhas.
Esses agentes podem articular planejamento, etapas de ação e ferramentas para consultar ambientes
externos (Wang *et al.*, 2024; Yao *et al.*, 2023). Em engenharia de software, há sistemas
experimentais capazes de navegar repositórios, editar arquivos e executar testes (Yang *et al.*,
2024). Essas capacidades contextualizam a classe de ferramentas utilizada; não demonstram, por si,
a correção das alterações deste projeto.

A literatura sobre geração de código com requisitos explícitos relaciona especificações, casos
de teste e conferência do comportamento produzido (Han *et al.*, 2024). A seleção e a organização
do contexto também requerem cuidado: em tarefas estudadas por Liu *et al.* (2024), a posição da
informação relevante em entradas longas afetou o desempenho dos modelos. Neste trabalho,
desenvolvimento orientado por requisitos, decomposição de tarefas e organização do contexto
descrevem práticas de engenharia adotadas; não são apresentados como uma metodologia científica
autônoma denominada *spec-driven development* ou *context engineering*.

A revisão da própria resposta pelo modelo não substitui feedback externo confiável, como
verificações reproduzíveis e inspeção de evidências (Kamoi *et al.*, 2024). Diretrizes de
interação humano–IA reforçam a necessidade de manter meios de avaliação e correção pelo usuário
(Amershi *et al.*, 2019). Por isso, análises e alterações propostas por agentes foram submetidas
à conferência documental, a testes quando cabíveis e à decisão humana. Saídas dos agentes não
constituem evidência científica independente; também não substituem os resultados do experimento
de CPR, a validação com P1 ou a responsabilidade do grupo pelas conclusões.

## 2.4 Aplicação das disciplinas estudadas no Projeto Integrador

Considerando a composição do grupo por estudantes de Bacharelado em Ciência de Dados e
Engenharia de Computação, o desenvolvimento do projeto mobilizou conhecimentos presentes em
diferentes componentes curriculares das respectivas matrizes. A relação é apresentada em nível
coletivo, pela correspondência entre os conteúdos curriculares e as atividades executadas, sem
atribuir disciplinas a integrantes específicos ou afirmar que todos cursaram os mesmos componentes.

O Plano de Ensino oficial de PJI410 — Projeto Integrador em Computação IV (UNIVESP, [s. d.])
abrange os dois cursos e articula resolução de problemas, análise de dados, aprendizagem de
máquina e interface para visualização de resultados. As matrizes do PPC dos cursos de Computação
(UNIVESP, 2020)
situam PJI410 no sétimo semestre. Os oito componentes da Tabela 2 estão previstos antes
desse período em pelo menos um dos cursos representados no grupo.

Tabela 2 – Disciplinas estudadas e aplicações no projeto

| Disciplina | Curso(s) em que está presente | Aplicação no projeto |
|---|---|---|
| Algoritmos e Programação de Computadores II | Ciência de Dados e Engenharia de Computação | Organização de funções e módulos, manipulação de arquivos JSON e rotinas determinísticas para gerar cenários e calcular indicadores. |
| Desenvolvimento Web | Ciência de Dados e Engenharia de Computação | Construção da aplicação em Next.js, React e TypeScript, com componentes, páginas, filtros e apresentação dos resultados. |
| Engenharia de Software | Ciência de Dados e Engenharia de Computação | Separação entre dados, cálculos e apresentação; arquitetura modular; versionamento; testes automatizados; liberação incremental por feature gates e rotinas reproduzíveis. |
| Estatística e Probabilidade | Ciência de Dados e Engenharia de Computação | Organização e agregação dos dados sintéticos, descrição de séries mensais, cálculo de indicadores e interpretação quantitativa limitada ao cenário demonstrativo. |
| Introdução à Ciência de Dados | Ciência de Dados | Preparação dos dados sintéticos, distinção entre ausência e zero, seleção de observações elegíveis e organização dos experimentos e de seus resultados. |
| Visualização Computacional | Ciência de Dados | Apresentação de indicadores e gráficos nos dashboards, filtragem, agregação e consolidação temporal de séries, inclusive na interface V2. |
| Aprendizado de Máquinas | Ciência de Dados | Formulação e avaliação dos experimentos supervisionados de CPR: comparação de regressão linear com baselines, divisão temporal, prevenção de leakage e métricas MAE, RMSE e R². |
| Interface Humano-Computador | Engenharia de Computação | Avaliação da apresentação da interface e implementação da visualização temporal consolidada na V2 após o feedback de P1, seguida de reavaliação. |

Fonte: Elaboração do grupo, com base nas matrizes e ementas oficiais da UNIVESP e nos artefatos
do projeto. A grafia Introdução à Ciência de Dados segue o Plano de Ensino de COM350; o PPC
registra o mesmo componente como Introdução a Ciência de Dados.

Na construção do software, os conhecimentos de programação foram articulados aos de arquitetura,
componentização e verificação. A aplicação separa as fontes sintéticas das funções de cálculo e
dos componentes de apresentação; o controle de versão registra sua evolução, e os testes verificam
regras de cálculo, disponibilidade dos módulos e comportamento das versões da interface. Os
feature gates regulam a liberação incremental das fases. A organização dos dados e as
visualizações, por sua vez, tornam os indicadores e as séries temporais examináveis por filtros e
gráficos. A avaliação documentada de V1 e a reavaliação de V2 sustentam a relação entre apresentação,
interação e melhoria da interface, sem generalizar a percepção de P1 a todos os usuários.

Nos experimentos de aprendizagem de máquina, a regressão linear e os baselines foram avaliados
sobre CPR sintético do Google Ads, com separação temporal e controle da disponibilidade das
informações utilizadas. MAE, RMSE e R² apoiaram a comparação quantitativa dos resultados. O
experimento sazonal acrescentou uma previsão exploratória no mesmo contexto sintético. Essas
atividades não demonstram eficácia preditiva operacional, superioridade geral do modelo,
causalidade ou inferência sobre a população da instituição. A associação curricular se limita aos
conteúdos aplicados; não implica utilização de todas as técnicas ou bibliotecas das ementas.

Os PPCs e os Planos de Ensino sustentam a identificação e o escopo dos componentes curriculares;
não são apresentados como prova de consulta a uma aula ou apostila específica. As referências
bibliográficas externas mantêm seu papel de fundamentação e apoio técnico. Design Thinking é
tratado como abordagem metodológica orientadora do Projeto Integrador, conforme desenvolvido na
seção 2.5, sem ser acrescentado como disciplina autônoma.

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

Na etapa de ouvir, foram consolidados os registros das entrevistas/conversas iniciais com
profissionais da instituição parceira, apoiadas pelo questionário estruturado preservado em
`docs/questionario_comunidade_externa.md`. A escuta identificou a necessidade de compreender
quanto investir em tráfego pago, avaliar a adequação dos valores investidos, acompanhar
indicadores, comparar informações ao longo do tempo e organizar dados dispersos. O relato mantém
a instituição e os participantes anonimizados e não incorpora dados pessoais ou informações
comerciais sensíveis.

As entrevistas iniciais foram realizadas mediante TCLE. Os termos preenchidos serão inseridos
manualmente como anexo na versão institucional final, fora do repositório público. Esse
consentimento refere-se ao levantamento inicial e não se confunde com o TCLE registrado para a
avaliação posterior de P1.

### 2.5.3 Definir o problema e os requisitos

As necessidades iniciais foram convertidas no problema de organizar e apresentar dados históricos
de investimentos em mídia digital para apoiar a tomada de decisão. A definição orientou requisitos
de indicadores, comparações, filtros, visualizações e rastreabilidade. A análise não deve confundir
associação agregada com causalidade, nem apresentar dado ausente como zero ou estimativa silenciosa.

### 2.5.4 Criar e prototipar

Na etapa de criar e prototipar, o grupo relacionou as necessidades aos campos disponíveis, às
regras de cálculo e às alternativas de visualização. O plano funcional foi dividido em quatro
fases para limitar o escopo de cada incremento, testar módulos menores e preservar a distinção
entre o que estava planejado e o que podia ser utilizado. Mecanismos centrais de habilitação
(*feature gates*) ocultam da navegação e bloqueiam as rotas dos módulos ainda não liberados.
A liberação de cada fase exige implementação, verificação e decisão humana registrada; nenhuma
fase é aberta automaticamente pela passagem de uma data.

A Fase 1 reuniu Captação e Matrículas, módulos que puderam ser prototipados com dados sintéticos
locais sem depender de plataformas de anúncios. Constituiu a primeira baseline funcional e a
interface apresentada a P1 na validação inicial. Sua organização permitiu examinar indicadores,
filtros e visualizações desses dois módulos antes da ampliação do escopo.

A Fase 2 acrescentou Ads — Visão geral, Google Ads, Meta Ads e Estratégia — no ambiente
acadêmico local, também com dados sintéticos. A interface Google Ads apresenta artefatos dos
experimentos acadêmicos de CPR executados fora do navegador. A liberação técnica dessa fase
ampliou as possibilidades de demonstração, mas não corresponde a integração com contas reais
nem a validação de Ads ou ML pela participante.

A Fase 3 prevê Reels orgânicos; a Fase 4, Objetivo da Gestão e Arquitetura & Algoritmos.
Ambas permaneceram bloqueadas porque seus módulos e requisitos de dados ainda não haviam sido
concluídos. A presença de rotas preparadas no código não as torna resultados funcionais. Essa
restrição manteve o protótipo disponível limitado aos incrementos verificáveis.

As fases designam blocos funcionais; V1 e V2 designam composições versionadas da interface.
A V1 preserva a Fase 1 com os gráficos temporais separados de Captação. A V2 preserva os módulos
da Fase 1, incorpora a Fase 2 e apresenta o gráfico temporal consolidado de Captação aprovado
após o feedback FB-V1-P1-001. Ads e CPR entraram por evolução técnica e acadêmica independente
desse feedback. O versionamento permite comparar a interface inicialmente avaliada com a
evolução posterior sem reescrever a experiência de P1.

Tabela 3 – Organização funcional das fases e relação com as versões da interface

| Fase | Escopo | Estado no protótipo | Relação com as versões |
|---|---|---|---|
| Fase 1 | Captação e Matrículas | Funcional; baseline acadêmica | V1 e V2; apresentação temporal de Captação distinta em cada versão |
| Fase 2 | Ads: Visão geral, Google Ads, Meta Ads e Estratégia; apresentação dos artefatos CPR em Google Ads | Funcional no ambiente acadêmico local | Incorporada à V2 por evolução técnica/acadêmica |
| Fase 3 | Reels orgânicos | Planejada e bloqueada | Não integra V1 nem V2 |
| Fase 4 | Objetivo da Gestão e Arquitetura & Algoritmos | Planejada e bloqueada | Não integra V1 nem V2 |

Fonte: Elaborado pelo grupo com base no plano de fases, nos registros das versões e no estado
versionado do protótipo (2026).

### 2.5.5 Implementar, testar, validar e ajustar

Para tornar rastreáveis as avaliações, cada sessão registrou a versão da interface apresentada.
P1 utilizou inicialmente a V1, sem Ads ou CPR. Após a sugestão FB-V1-P1-001 e a aprovação do
grupo, a V2 recebeu a visualização temporal consolidada; a mesma P1 reavaliou essa versão.
Os módulos comuns às duas versões utilizam os mesmos dados sintéticos, métricas e fórmulas.
Os dois momentos não constituem comparação experimental controlada.

A participante avaliou as versões indicadas em seus registros anonimizados. As respostas
documentaram compreensão dos indicadores, utilidade percebida, dificuldades e sugestões.
Técnicas de pesquisa de experiência do usuário
apoiam a identificação de necessidades e a avaliação de serviços de informação (Pinheiro; Dias,
2023).

P1, gerente de Marketing, participou presencialmente em 07/10/2026 dos dois momentos;
TCLE obtido: SIM. O documento assinado permanece fora do repositório.

### 2.5.6 Níveis de interpretação analítica

A interpretação dos indicadores adota três níveis com escopos distintos. O primeiro reúne regras
de negócio e indicadores determinísticos que comparam valores observados a requisitos declarados.
O segundo realiza leituras agregadas do funil de captação e das matrículas, quando os períodos e os
campos permitem esse cruzamento. O terceiro registra os limites de atribuição individual, isto é,
os casos em que as fontes disponíveis não permitem ligar uma ação de mídia, um contato e uma
matrícula específica.

Esses níveis descrevem a leitura dos indicadores; o experimento de aprendizagem de máquina e o
apoio de IA são procedimentos separados, descritos em 2.5.11 e 2.5.12. Essa separação impede que um
resultado de regra seja apresentado como causalidade ou que uma correlação agregada seja tratada
como atribuição por canal. Quando uma informação necessária não
estiver disponível, o resultado será sinalizado como não verificável (Saura, 2021; Li *et al.*,
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

A preparação dos cenários documenta origem, nomes, formatos, tipos, valores ausentes e
consolidação em artefatos versionados. Cada indicador deve preservar fonte, período, unidade de
análise e fórmula. Problemas de qualidade em
pipelines podem ocorrer na ingestão, integração, limpeza e transformação, o que reforça a
necessidade de documentar as regras aplicadas (Foidl *et al.*, 2024).

Na implementação acadêmica, os cenários são gerados localmente com parâmetros e sementes fixos,
gravados em arquivos JSON versionados e lidos por contratos locais da aplicação. Os filtros
selecionam os registros do recorte; funções separadas calculam somas, razões e séries antes da
apresentação em componentes web. Não há ingestão de base operacional, banco de dados ou API de
anúncios nesse fluxo.

Valores ausentes, incompatibilidades de período e falhas estruturais são sinalizados; não são
convertidos silenciosamente em zero nem em estimativas. Essa regra distingue um indicador medido de
um dado indisponível e possibilita auditoria posterior.

### 2.5.9 Indicadores, regras de negócio e cenários determinísticos

Os indicadores são calculados por rotinas determinísticas, com fórmulas e parâmetros registrados.
Podem incluir investimento, impressões, alcance, frequência, cliques, CTR, CPC, conversões, taxa de
conversão, CPA, custo por mil impressões e participação de impressões, conforme os campos
efetivamente disponibilizados. A interpretação ocorre no contexto do objetivo da campanha.

Nos módulos Ads implementados, CTR é cliques divididos por impressões (em porcentagem), CPC é
investimento dividido por cliques e CPM é investimento dividido por impressões, multiplicado por
mil. Em Google Ads, CPR é investimento dividido por conversões registradas no cenário; sem
denominador válido, a razão permanece indefinida. Em Captação, contatos, visitas e matrículas são
contagens do cenário sintético no recorte selecionado; as taxas entre etapas são recalculadas a
partir dessas contagens, sem vincular pessoas individualmente.

Regras de negócio, sazonalidade, capacidade de atendimento e limites de variação de orçamento
devem ser explicitados antes da construção de cenários. Cenários mínimo, ideal e agressivo, quando
aplicáveis, serão cálculos direcionais e reproduzíveis baseados em parâmetros declarados. Eles não
projetarão matrícula, não garantirão retorno e não ocultarão conflitos entre regras ou limitações
dos dados (Saura; Palos-Sánchez; Cerdá Suárez, 2017; Martins, 2019).

### 2.5.10 Auditoria, reprodutibilidade e limites de atribuição

Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de
transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite
conferir resultados computacionais e suas condições de produção (Peng, 2011).

Impressão, clique, conversão de plataforma, conversa, contato, visita e matrícula não são tratados
como sinônimos. Quando houver apenas dados agregados, a análise poderá descrever associação entre
etapas do funil, mas não atribuir uma matrícula a uma campanha ou canal específico (Li *et al.*,
2016).

### 2.5.11 Protocolo experimental de aprendizagem de máquina

Foi executado um experimento supervisionado, exploratório e reproduzível, restrito ao CPR do
Google Ads. Neste recorte, CPR é o custo por conversão registrada no cenário, calculado como
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

Tabela 4 – Grupos de variáveis do experimento de CPR

| Grupo | Decisão | Justificativa |
|---|---|---|
| Investimento e conversões em t | Excluir | Compõem diretamente o target e não estão disponíveis na emissão |
| CPR em t | Excluir | É o próprio target |
| Métricas contemporâneas e configurações posteriores | Excluir | Informação indisponível na emissão ou decidida posteriormente |
| Métricas históricas t−2 | Utilizar | Disponibilidade verificada antes da observação-alvo |
| Calendário | Utilizar | Conhecido antecipadamente |

Fonte: Elaborado pelo grupo (2026).

O particionamento é temporal, sem sorteio aleatório (Bergmeir; Benítez, 2012): 198 amostras de treino e 71 de teste, com
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

MAE é o erro absoluto médio; RMSE é a raiz do erro quadrático médio e penaliza mais os erros
grandes (Hyndman; Koehler, 2006). R² compara a soma dos erros quadráticos à variação dos valores observados em torno da
média do conjunto avaliado. R² negativo indica desempenho inferior ao da referência constante
baseada nessa média; não é percentual de acerto nem substitui a comparação com a persistência t−2.

Como extensão técnica separada, foi executada regressão temporal para CPR mensal consolidado:
soma dos investimentos dividida pela soma das conversões, com cobertura integral. Foram
examinados todos os anos sintéticos disponíveis, de 2017 a janeiro/2023; 71 dos 73 meses
possuem CPR consolidado válido. O arquivo de origem contém 292 registros campanha–mês, dos quais
284 têm CPR individual definido; novembro/2018 tem cobertura incompleta e janeiro/2023 é
provisório, razão pela qual não entram como CPR mensal observado. A análise sazonal descritiva
calcula média, mediana, dispersão e índice por mês do calendário; não constitui aprendizagem de
máquina. O modelo OLS utiliza
seno/cosseno do mês, índice temporal e CPR t−2/t−12. t−1 foi excluído pela maturação sintética
de 14 dias; t−24 não foi incluído para preservar a pequena amostra, sem escolha baseada no teste.

O último ano completo foi detectado automaticamente: 2022. O treino possui 44 amostras,
de janeiro/2018 a novembro/2021, com dezembro/2021 purgado pela disponibilidade no corte.
O holdout recursivo prevê os 12 meses de 2022 na mesma origem, sem incorporar seus resultados,
comparando OLS a persistência t−2 e sazonal t−12. A padronização usa somente treino. Também foi
executado rolling origin mensal, incorporando apenas resultados já maduros. Após avaliação,
o OLS pré-especificado foi reajustado em 57 amostras elegíveis até dezembro/2022 para projetar
fevereiro/2023 a janeiro/2024. Janeiro/2023 provisório permaneceu ausente no histórico; uma
ponte estimada foi identificada somente como lag auxiliar da recursão. Não foram calculados
intervalos de confiança. O novo artefato é apresentado apenas em V2/Google Ads e sua origem
é demanda técnica acadêmica, não feedback da comunidade.

Os procedimentos locais estão registrados em
`docs/migracao-modelo/arquitetura/experimento-google-cpr.md` e
`experimento-google-cpr-sazonal.md`. A partir do dataset sintético versionado, os comandos
`npm run ml:google-cpr` e `npm run ml:google-cpr:sazonal` geram os artefatos;
`npm run ml:google-cpr:verificar` e `npm run ml:google-cpr:sazonal:verificar` repetem os cálculos e
conferem os resultados com os arquivos versionados sem gravá-los.

### 2.5.12 Uso assistivo de IA agêntica e verificação humana

Durante o desenvolvimento do protótipo e da documentação técnica, agentes de inteligência
artificial foram utilizados como apoio à leitura e auditoria do repositório, programação, revisão
de código e textos, organização documental, elaboração e verificação de testes, conferência dos
algoritmos e artefatos dos experimentos de CPR e análise de consistência entre método, resultados
e conclusões. O uso foi confirmado pelo responsável técnico.

As tarefas foram delimitadas por requisitos, decisões e critérios registrados. Conforme a
atividade, forneceram-se ao agente arquivos versionados, dados sanitizados e restrições
pertinentes; suas análises ou alterações foram inspecionadas, confrontadas com os artefatos do
projeto e submetidas a testes ou verificadores aplicáveis antes de aceitação, ajuste ou rejeição
pelos integrantes. O contexto fornecido não incluiu contas reais de anúncios nem dados pessoais
da participante. Esse fluxo descreve o procedimento do grupo, sem atribuir aos agentes uma
validação independente dos resultados.

Arquitetura, metodologia, escolha dos modelos, interpretação dos resultados, aprovação das
alterações, validação comunitária e conclusões permaneceram sob responsabilidade humana. Os
agentes não produziram as estimativas de CPR: elas resultaram da regressão linear e dos baselines
documentados em 2.5.11. Não há registro de experimento específico de simulação agêntica na
solução analítica. As ferramentas não geraram respostas de P1 nem substituíram entrevistas; os
registros originais dos dois momentos de validação foram preservados.

# 3 RESULTADOS: SOLUÇÃO FINAL

Este capítulo distingue resultados comprovados, desenvolvimento em curso e itens planejados. No
estado local verificado em 06/10/2026, as Fases 1 e 2 estão ativas; Fases 3 e 4 permanecem
planejadas e bloqueadas. A Fase 2 utiliza Google Ads e Meta Ads integralmente sintéticos,
sem integração real. O experimento de CPR descrito em 3.4.4 continua executado pela CLI;
a interface apenas apresenta seus resultados reproduzíveis, sem treinamento no navegador.
A ativação técnica não constitui validação comunitária nem novo deploy.
Não houve consolidação de fontes institucionais reais. Houve apoio de agentes de IA ao
desenvolvimento e à verificação técnico-científica, mas não há execução documentada de uma
simulação agêntica específica via linha de comando; o objetivo correspondente foi atendido apenas
parcialmente.

## 3.1 Contato inicial e necessidades identificadas

Na conversa inicial, a gestora de marketing apresentou a necessidade de compreender quanto investir
em tráfego pago e avaliar a adequação dos valores aos objetivos da instituição. Em contato posterior
com a direção/mantenedora, o grupo buscou identificar informações e indicadores para acompanhar os
investimentos e resultados ao longo do tempo. O levantamento inicial também registrou a necessidade
de reunir dados dispersos, comparar resultados de canais e campanhas e apoiar decisões sobre a
distribuição do orçamento. Esses pontos orientaram indicadores, comparações e visualizações do
protótipo; descrevem o contato inicial e não constituem validação ou aprovação da interface. O
levantamento foi apoiado pelo questionário estruturado da comunidade externa preservado no
repositório, distinto dos instrumentos posteriores de validação da V1/V2.

## 3.2 Estado real das fases do protótipo

Tabela 5 – Estado das fases do protótipo

| Fase | Escopo | Estado em 06/10/2026 | Evidência documental |
|---|---|---|---|
| Fase 1 | Captação e Matrículas | ATIVA/FUNCIONAL | Módulos funcionais com dados sintéticos |
| Fase 2 | Ads: visão geral, Google Ads, Meta Ads e estratégia | ATIVA/FUNCIONAL NO AMBIENTE ACADÊMICO LOCAL | Gate liberado explicitamente; build, testes e quatro rotas HTTP 200; somente dados sintéticos |
| Fase 3 | Reels orgânicos | PLANEJADA/BLOQUEADA | Feature gate fechado; conjunto sintético e algoritmos pendentes |
| Fase 4 | Objetivo da Gestão e Arquitetura & Algoritmos | PLANEJADA/BLOQUEADA | Feature gate fechado; depende das fases anteriores |

Fonte: Elaborado pelo grupo com base no estado versionado do repositório (2026).

O quadro registra a disponibilidade efetiva, distinta do plano exposto em 2.5.4. A Fase 1
compõe a V1 e a V2; a Fase 2 está acessível somente pela V2 no ambiente acadêmico local. A
publicação anterior da Fase 1 não foi ampliada por essa liberação local. As Fases 3 e 4 não
foram entregues funcionalmente.

## 3.3 Estratégia incremental e arquitetura da solução

O projeto implementa uma aplicação web acadêmica independente do ambiente operacional. Dados
sintéticos versionados são lidos por contratos locais, agregados por rotinas determinísticas e
apresentados em interface Next.js/TypeScript. Um feature gate central controla a disponibilidade
funcional das fases; a composição versionada mantém V1 restrita à Fase 1 e V2 com as Fases 1 e 2.
Os experimentos de CPR são reproduzidos pela CLI e seus artefatos são apresentados em Google Ads
na V2, sem treinamento no navegador. Não há integração operacional com contas de anúncios, CRM,
sistema acadêmico ou base real da instituição.

```text
datasets sintéticos versionados e contratos analíticos locais
        ↓
leitura, validação e agregação determinística
        ↓
feature gate funcional + composição V1/V2
        ↓
V1: Captação e Matrículas | V2: Captação, Matrículas e Ads
        ↓
CLI CPR → artefatos reproduzíveis → apresentação em Google Ads na V2
```

## 3.4 Resultados técnicos

### 3.4.1 Módulo de Captação

O módulo de Captação apresenta o funil sintético de contatos, visitas e matrículas. A página permite
selecionar safras e ciclos, consultar indicadores do recorte e visualizar as taxas derivadas entre
as etapas do funil. Os valores pertencem ao cenário acadêmico determinístico e não representam
resultados da instituição parceira.

Além da visão agregada, o módulo disponibiliza séries mensais, distribuição da situação dos
contatos, origem declarada e comparativo por safra. Na V1, Contatos, Visitas e Matrículas apareciam
em gráficos temporais separados. A V2 substituiu somente esses gráficos por uma evolução temporal
consolidada, com seleção independente das três séries, em resposta ao feedback FB-V1-P1-001.
As demais visualizações de funil, situação e origem permanecem distintas. Os dados são sintéticos;
a origem declarada não prova atribuição a anúncios ou causalidade.

Figura 1 – Indicadores e filtros da Captação na V1

![Interface de Captação da V1 com filtros, indicadores e funil sintético.](figuras/fig-v1-captacao.png)

Fonte: Elaborado pelo grupo (2026), captura da aplicação acadêmica local com dados sintéticos.

Nota: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo
legado “PIJ410 — Projeto Integrador em Computação III”. O componente correto deste trabalho é
PJI410 — Projeto Integrador em Computação IV.

### 3.4.2 Módulo de Matrículas

O módulo de Matrículas apresenta histórico sintético por safra, ciclo, turma e mês. A interface
permite filtrar os recortes e distinguir total de matrículas, rematrículas, novas matrículas e
participação de rematrículas no total da safra atual.

As visualizações complementares discriminam a composição por ciclo e turma, a efetivação mensal e
a participação de rematrículas por safra. O percentual apresentado corresponde à participação das
rematrículas no total atual das safras classificáveis; apesar do nome legado no campo interno, não
é retenção de coorte. A aplicação não calcula evasão nem continuidade individual entre safras.
Contagens, cálculos e casos sem base de comparação permanecem distintos.

Figura 2 – Indicadores e composição por safra em Matrículas na V1

![Interface de Matrículas da V1 com filtros, indicadores e composição por safra sintética.](figuras/fig-v1-matriculas.png)

Fonte: Elaborado pelo grupo (2026), captura da aplicação acadêmica local com dados sintéticos.

### 3.4.3 Módulos de Ads e componentes ainda planejados

A V2 disponibiliza localmente Visão Geral Ads, Google Ads, Meta Ads e Estratégia, todos com dados
sintéticos. Não há integração com Google Ads API, Meta API ou CRM. Google Ads apresenta
investimento, impressões, cliques, conversões registradas, CTR, CPC, CPM e CPR, com filtros de
ano-calendário fictício e campanha e série mensal de CPR. CPR = investimento / conversões
registradas; não significa custo por matrícula ou lead único e não demonstra atribuição causal.
A granularidade é mensal, sem filtros diários artificiais.

Na Visão Geral, a comparação entre canais se limita a investimentos em períodos compatíveis;
resultados com denominadores distintos não são tratados como equivalentes. Meta Ads mantém
separados os resultados e custos por conversa e por interação; ausência de métrica produz valor
indisponível/agregado incompleto, não zero. Meta Ads não utiliza ML. Estratégia compara gastos
por canal com uma premissa mensal sintética de R$ 10.000 e apresenta gasto do último mês selecionado,
saldo e percentual de execução. Esse orçamento é fictício, não aprovado, ideal ou recomendação
automática; não há otimização nem execução de campanhas.

Figura 3 – Visão geral acadêmica de Ads na V2

![Visão geral de Ads da V2 com indicadores sintéticos e distinção entre resultados Google e Meta.](figuras/fig-v2-ads-visao-geral-pji410.png)

Fonte: Elaborado pelo grupo (2026), captura da aplicação acadêmica local com dados sintéticos.

### 3.4.4 Experimento de aprendizagem de máquina para CPR

O experimento descrito em 2.5.11 foi efetivamente executado e pode ser reproduzido localmente
via CLI. Os artefatos sintéticos registram condições de execução, amostras e previsões.
O treinamento permanece separado da interface: a Fase 2 acadêmica está ativa localmente e
Google Ads exibe o artefato de resultados, independente dos filtros de consulta. Não há treinamento
no navegador, inferência operacional ou recomendação automática. O target é CPR = investimento /
conversões registradas; não representa custo por matrícula ou lead único. Não foram utilizados
dados operacionais ou APIs reais.

Tabela 6 – Resultados do experimento inicial de CPR

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

#### Previsão sazonal mensal — extensão técnica exclusiva V2

O experimento sazonal separado foi efetivamente executado e reproduzido pela CLI sobre o
dataset sintético existente de janeiro/2017 a janeiro/2023. O CPR mensal é calculado como soma
do investimento dividida pela soma das conversões registradas, quando a cobertura mensal é válida;
71 dos 73 meses do calendário têm CPR consolidado válido. O modelo OLS usa seno e cosseno do mês,
índice temporal e CPR t−2/t−12 como features. Não há variáveis contemporâneas ao alvo; t−1 é
excluído pela hipótese sintética de maturação de 14 dias. O holdout recursivo de 12 meses em 2022
é a avaliação principal e produziu:

Tabela 7 – Resultados da previsão sazonal de CPR no holdout

| Método | MAE (R$ fictícios) | RMSE (R$ fictícios) | R² |
|---|---:|---:|---:|
| Persistência t−2 | 6,563180 | 13,132417 | −0,082082 |
| Sazonal t−12 | 9,200559 | 15,375354 | −0,483273 |
| Regressão linear | 7,575144 | 14,257769 | −0,275481 |

Fonte: Elaborado pelo grupo a partir da execução sintética (2026).

A regressão superou o baseline sazonal t−12, com MAE 17,67% e RMSE 7,27% menores, mas não superou
a persistência t−2. O R² negativo e os erros observados indicam baixo poder explicativo neste
experimento sintético. O rolling origin mensal de um passo é análise complementar, não substitui
o holdout principal:

Tabela 8 – Resultados da previsão sazonal de CPR no rolling origin

| Método | MAE (R$ fictícios) | RMSE (R$ fictícios) | R² |
|---|---:|---:|---:|
| Persistência t−2 | 7,332367 | 12,576527 | 0,007587 |
| Sazonal t−12 | 8,321915 | 12,633565 | −0,001435 |
| Regressão linear | 6,335071 | 12,541304 | 0,013138 |

Fonte: Elaborado pelo grupo a partir da execução sintética (2026).

Os dois protocolos medem horizontes distintos. Nenhum resultado demonstra eficácia real ou
capacidade de automatizar investimentos.

Na análise descritiva retrospectiva, dezembro apresentou o maior índice sazonal (1,214), outubro
também ficou acima da média (1,131) e junho abaixo (0,893). O índice compara médias históricas
mensais com a média global; não é ML nem demonstra sazonalidade estável.

A V2 apresenta histórico sintético e projeção experimental recursiva de fevereiro/2023 a
janeiro/2024, além do índice sazonal e da comparação dos métodos. As maiores projeções são para
dezembro/2023 e fevereiro/2023; as menores, para maio e julho/2023. Os valores são estimativas do
cenário, não resultados futuros observados. Valores extremos e lags previstos podem se propagar
pela recursão. Essa extensão teve origem técnica/acadêmica, não comunitária; a alteração comunitária
FB-V1-P1-001 refere-se somente ao gráfico consolidado de Captação.

Tabela 9 – Valores projetados de CPR sintético

| Mês projetado | CPR sintético previsto (R$ fictícios) | Mês projetado | CPR sintético previsto (R$ fictícios) |
|---|---:|---|---:|
| Fev./2023 | 73,75 | Ago./2023 | 56,62 |
| Mar./2023 | 48,87 | Set./2023 | 51,36 |
| Abr./2023 | 67,15 | Out./2023 | 59,08 |
| Mai./2023 | 47,64 | Nov./2023 | 54,74 |
| Jun./2023 | 59,42 | Dez./2023 | 75,43 |
| Jul./2023 | 47,87 | Jan./2024 | 60,01 |

Fonte: Artefato sintético `src/data/google-cpr-sazonal.json` (2026).

Nota: Não foram calculados intervalos de confiança nem houve verificação dessas projeções com
dados reais posteriores.

Figura 4 – Histórico sintético e previsão sazonal experimental de CPR na V2

![Histórico sintético de CPR e projeção experimental, identificados separadamente na interface Google Ads da V2.](figuras/fig-v2-google-cpr-sazonal.png)

Fonte: Elaborado pelo grupo (2026), captura da aplicação acadêmica local com dados sintéticos.

### 3.4.5 Testes técnicos

Na verificação técnica registrada em 06/10/2026, passaram `npm test`, lint, TypeScript, build,
os verificadores dos dois experimentos CPR e 38 verificações de não vazamento. Quarenta
verificações HTTP locais cobriram as rotas V1/V2, o acesso da extensão sazonal somente na V2 e as
rotas bloqueadas das Fases 3 e 4. A reprodução dos experimentos foi comparada byte a byte aos
artefatos versionados. Esses testes verificam software e reprodutibilidade; não equivalem à
avaliação comunitária realizada por P1/V1 e pela mesma P1/V2 nem demonstram impacto institucional.

## 3.5 Validação da solução com a comunidade

### Primeira interação de P1 — V1

P1, gerente de Marketing, participou presencialmente em 07/10/2026; TCLE obtido: SIM.
Utilizou a V1, composta somente por Captação e Matrículas, com dados sintéticos. Atribuiu
5/5 à clareza de Captação, 5/5 à clareza de Matrículas e 5/5 à facilidade de localizar e utilizar
os filtros. Destacou os gráficos temporais como úteis para observar o comportamento ao longo do
tempo. Sobre a dificuldade, respondeu: “Os gráficos em diversos lugares.” Sugeriu reunir
contatos, visitas e matrículas em uma visualização temporal com seleção das séries. Essas respostas
são evidência individual, não percepção atribuível a todos os usuários.

### Ajuste realizado

A sugestão foi identificada como FB-V1-P1-001. O grupo aprovou sua implementação com a finalidade
de reduzir a dispersão visual e permitir comparação simultânea. Na V1, as séries temporais de
Contatos, Visitas e Matrículas eram exibidas em gráficos separados. A V2 passou a oferecer uma
visualização única de evolução temporal, com seleção independente dessas três séries. A decisão
de implementar foi do grupo; P1 reavaliou a V2 somente após o ajuste.

### Reavaliação da mesma P1 — V2

P1 utilizou a V2 após o ajuste, com foco em Captação, Matrículas e na visualização temporal
consolidada. Atribuiu 5/5 à clareza de Captação, 5/5 à facilidade de seleção das séries e 5/5 à
clareza de Matrículas. Relatou que a visualização conjunta facilitou a análise da relação entre
contatos, visitas e matrículas ao longo do tempo, não relatou dificuldade adicional e respondeu
“Por enquanto, tudo ok.” à pergunta sobre novas alterações. Sua referência à “qualidade do lead”
descreve uma percepção de uso, não uma
métrica comprovada da plataforma. As séries são agregadas e não sustentam rastreamento
individual, causalidade ou atribuição entre contato e matrícula.

O escopo observado foi Captação, Matrículas e o ajuste temporal da V2. Ads e ML integram a
evolução técnica da V2, sem avaliação registrada por P1 neste ciclo.

As respostas primárias dos dois momentos estão preservadas em
`docs/validacao/respostas/v1-p1.md` e `docs/validacao/respostas/v2-p1-reavaliacao.md`.
Trata-se de uma participante que avaliou dois estados sucessivos da interface; a reavaliação
não constitui amostra independente nem validação definitiva.

## 3.6 Comparação entre necessidades iniciais e avaliação do ciclo V1–V2

Esta matriz distingue as necessidades iniciais do que foi efetivamente observado nos dois
momentos da mesma participante. O ciclo não avaliou todas as dimensões do protótipo.

Tabela 10 – Comparação entre necessidades iniciais e ciclo V1–V2

| Dimensão | Antes: necessidade ou expectativa inicial | Evidência deste ciclo (P1/V1 e P1/V2) |
|---|---|---|
| Investimento em mídia | Compreender quanto investir e avaliar a adequação dos valores | Não avaliado neste ciclo; Ads e orçamento não integraram as tarefas registradas. |
| Indicadores | Acompanhar informações relevantes para a gestão | P1 atribuiu 5/5 à clareza de Captação e Matrículas em cada versão; avaliação individual desses módulos. |
| Comparações | Comparar períodos e, quando houver dados, canais ou campanhas | P1 destacou gráficos temporais na V1 e relatou comparação facilitada pelo gráfico conjunto na V2; canais e campanhas não foram avaliados. |
| Organização | Reunir informações dispersas em uma visão compreensível | P1 apontou gráficos temporais em lugares diferentes na V1 e relatou facilidade de comparação após a consolidação na V2. |
| Interface | Apresentar resultados de modo sintético e acompanhável | P1 atribuiu 5/5 aos filtros na V1 e à seleção das séries na V2; sem inferência para a interface inteira. |

Fonte: Elaborado pelo grupo (2026).

O recorte documentado do ciclo V1–V2 permite a seguinte comparação descritiva dos dois momentos
da mesma P1. As notas não medem ganho experimental entre versões:

Tabela 11 – Evolução da visualização temporal da V1 à V2

| Aspecto | V1 | Evidência inicial | Alteração na V2 | Reavaliação |
|---|---|---|---|---|
| Visualização temporal | Séries de Contatos, Visitas e Matrículas em gráficos separados | Apontou “Os gráficos em diversos lugares” e sugeriu visualização conjunta selecionável | Gráfico temporal consolidado com seleção independente das séries | Relatou que a visualização conjunta facilitou a comparação ao longo do tempo |

Fonte: Elaborado pelo grupo com base nos dois registros anonimizados de P1 (2026).

Figura 5 – Gráficos temporais separados de Captação na V1

![Gráficos mensais separados de Contatos, Visitas e Matrículas na V1.](figuras/fig-v1-captacao-graficos-temporais.png)

Fonte: Elaborado pelo grupo (2026), captura da aplicação acadêmica local com dados sintéticos.

Figura 6 – Evolução temporal consolidada de Captação na V2

![Gráfico temporal da V2 com Contatos, Visitas e Matrículas do funil selecionados simultaneamente.](figuras/fig-v2-captacao-evolucao-temporal-pji410.png)

Fonte: Elaborado pelo grupo (2026), captura da aplicação acadêmica local com dados sintéticos.

## 3.7 Rastreabilidade entre necessidade, solução e validação

A tabela relaciona a escuta inicial, a solução construída e o alcance da avaliação registrada.
As dimensões de Ads não foram apresentadas nas tarefas de P1; a cadeia específica de
FB-V1-P1-001 é discriminada na Tabela 13.

Tabela 12 – Rastreabilidade entre necessidade, solução e validação

| Necessidade identificada | Elemento da solução | Evidência no protótipo | Evidência do ciclo P1 |
|---|---|---|---|
| Compreender quanto investir em mídia | Indicadores e comparação determinística de orçamento | Ads sintéticos ativos localmente; premissa fictícia, sem determinar orçamento ideal | Não avaliado por P1 neste ciclo. |
| Avaliar a adequação dos investimentos | Métricas determinísticas e limites explícitos | Indicadores de Ads sintéticos; dados reais de mídia não autorizados | Não avaliado por P1 neste ciclo. |
| Acompanhar indicadores | Painéis de Captação e Matrículas | Indicadores, filtros e visualizações da Fase 1 | P1 atribuiu 5/5 à clareza de ambos os módulos nos dois momentos. |
| Comparar períodos e canais | Filtros temporais e visualizações comparativas | Safras na Fase 1; ano-calendário fictício e investimentos por canal na Fase 2 | P1 destacou a utilidade dos gráficos temporais; canais não foram avaliados. |
| Organizar informações dispersas | Interface web com dados e contexto padronizados | Módulos acadêmicos independentes com dados sintéticos | P1 apontou dispersão dos gráficos temporais na V1 e relatou comparação facilitada na V2 após o ajuste. |

Fonte: Elaborado pelo grupo (2026).

Tabela 13 – Rastreabilidade do ajuste FB-V1-P1-001

| Necessidade/observação | Evidência | Decisão | Implementação | Avaliação posterior |
|---|---|---|---|---|
| Visualizações temporais distribuídas (FB-V1-P1-001) | P1/V1 relatou a dispersão e sugeriu um gráfico conjunto selecionável | O grupo aprovou a consolidação | V2 reuniu Contatos, Visitas e Matrículas em visualização temporal multissérie selecionável | P1/V2 relatou que a apresentação facilitou a comparação; não relatou nova dificuldade |

Fonte: Elaborado pelo grupo com base nos dois registros anonimizados de P1 (2026).

## 3.8 Feedback e ajustes decorrentes

Até o momento, há um ajuste comunitário documentado neste ciclo. A observação de P1 foi a
dispersão das visualizações temporais; o resultado posterior é sua própria percepção na V2,
sem demonstração de solução definitiva ou eficácia geral.

Tabela 14 – Feedback e ajuste decorrente da validação

| Feedback ou observação | Decisão do grupo | Ajuste realizado | Evidência | Situação |
|---|---|---|---|---|
| Gráficos temporais em diversos lugares (FB-V1-P1-001) | O grupo aprovou a consolidação sugerida por P1 | V2 reuniu Contatos, Visitas e Matrículas em gráfico temporal multissérie selecionável | Na reavaliação, P1 relatou comparação facilitada, respondeu “Não.” sobre dificuldades e “Por enquanto, tudo ok.” sobre novas alterações | Implementado na V2; evidência individual positiva |

Fonte: Elaborado pelo grupo (2026).

## 3.9 Limitações

Os módulos funcionais utilizam dados inteiramente sintéticos e não mantêm conexão operacional com
APIs ou contas de anúncios, CRM, sistemas acadêmicos ou bases da instituição. Por isso, o protótipo
demonstra organização, cálculo e visualização, mas não comprova desempenho real de campanhas nem
impacto institucional.

As fontes disponíveis não permitem atribuir individualmente uma matrícula a uma ação de mídia
nem estabelecer inferência causal.
Associações agregadas devem ser interpretadas dentro do período, da unidade de análise e da regra de
atribuição declarados. A ausência de períodos históricos autorizados para Google Ads, Meta Ads e
conteúdo orgânico impede apresentar resultados operacionais desses componentes. Não impede
o experimento separado de CPR, executado exclusivamente sobre dados sintéticos.

Resultados obtidos em cenário sintético não podem ser generalizados para a operação da instituição
ou para outras organizações. Os experimentos de CPR são exploratórios, apresentam poder preditivo
limitado e dependem do processo gerador e da hipótese sintética de maturação de 14 dias. A previsão
recursiva pode amplificar valores extremos. Esses resultados não demonstram disponibilidade
histórica de métricas reais ou utilidade operacional. A interpretação assistida por IA não
substitui evidência, cálculo ou decisão humana.

A validação comunitária contou com uma participante, gerente de Marketing, que, em 7 de outubro
de 2026, avaliou presencialmente a V1 e, após a implementação do ajuste decorrente de seu feedback,
reavaliou a V2. Essa avaliação em dois momentos permite acompanhar a percepção da
alteração, mas não equivale à validação por amostra independente nem a uma comparação quantitativa
controlada. A evidência é exploratória e predominantemente qualitativa; sua generalização é
limitada pela participação de uma única pessoa. O gráfico reúne séries sintéticas agregadas,
sem rastreamento de indivíduos,
medição objetiva da qualidade de cada lead ou atribuição causal entre etapas do funil.

# 4 CONSIDERAÇÕES FINAIS

O objetivo geral de desenvolver uma solução analítica para organizar dados históricos de
investimentos em mídia digital e apoiar a decisão sobre a distribuição do orçamento de marketing
foi atendido quanto à construção de um protótipo acadêmico. A aplicação organiza dados históricos
sintéticos, calcula indicadores e apresenta recortes temporais e comparações. Seus recursos de
investimento, gasto, saldo e CPR destinam-se a apoiar a análise de orçamento, mas não houve neste
ciclo avaliação comunitária dessa decisão nem demonstração de melhoria na operação da instituição.
Essa distinção preserva o papel dos indicadores e das visualizações exposto na fundamentação do
capítulo 2: oferecer elementos para interpretação, sem substituir a decisão humana.

No escopo dos objetivos específicos, foram implementados a estrutura sintética de dados, os
cálculos determinísticos e a interface com Captação e Matrículas na V1. A V2 acrescentou Visão
Geral de Ads, Google Ads, Meta Ads, Estratégia e demonstrações acadêmicas de CPR. A comparação
entre canais limita-se a investimentos em períodos compatíveis, sem equiparar resultados de
denominadores diferentes. Testes automatizados, verificações de não vazamento e reprodução dos
artefatos sustentam o funcionamento técnico descrito, não a eficácia institucional. Agentes de IA
apoiaram o desenvolvimento, a auditoria e a verificação técnico-científica sob revisão humana;
isso não demonstra execução de uma simulação agêntica específica via linha de comando. A avaliação
com profissional da instituição alcançou Captação, Matrículas e o ajuste temporal; Fases 3 e 4
permaneceram bloqueadas.

No experimento inicial de CPR, a regressão apresentou erros menores que a persistência t−2. No
holdout principal do experimento sazonal, superou o baseline t−12, mas não a persistência t−2, e
obteve R² negativo. Os experimentos demonstram execução metodológica e reprodutibilidade em dados
sintéticos, com controle de informação contemporânea ao alvo, mas não desempenho preditivo
suficiente para uso operacional ou recomendação automática de investimento.

A validação comunitária envolveu uma participante, P1, gerente de Marketing, presencialmente em
07/10/2026, com TCLE obtido. Na V1, com Captação e Matrículas, ela apontou gráficos temporais
dispersos e sugeriu reuni-los com seleção de séries. O grupo aprovou FB-V1-P1-001 e implementou
essa mudança específica na V2. Na reavaliação, a mesma participante relatou que a visualização
conjunta facilitou a comparação, não relatou nova dificuldade e não solicitou outra alteração
naquele momento. Esse caso documenta um ciclo de escuta, avaliação, ajuste e reavaliação. Visão
Geral de Ads, Google Ads, Meta Ads, Estratégia, CPR e previsão sazonal tiveram origem
técnica/acadêmica e não foram avaliados por P1 neste ciclo.

A contribuição do protótipo está na organização de informações sintéticas com regras explícitas,
na distinção entre ausência e zero, na separação entre indicadores calculados e experimentos de
ML, no versionamento V1/V2 e na rastreabilidade do ajuste decorrente de feedback real. O alcance
das conclusões é limitado por dados sintéticos, uma participante com perfil específico, reavaliação
pela mesma pessoa sem amostra independente, séries agregadas sem rastreamento individual ou
inferência causal, ausência de APIs e CRM operacionais e poder preditivo limitado dos experimentos.
Esses limites não permitem generalizar a percepção de P1 nem afirmar impacto institucional.

Como continuidade, poderão ser avaliados os módulos de Ads e Estratégia com profissionais da
área, ampliados o número e a diversidade de participantes e examinados dados reais somente com
autorização e anonimização adequadas. Integrações operacionais exigiriam requisitos próprios de
segurança; séries históricas mais amplas e modelos preditivos adicionais dependeriam de volume e
qualidade de dados suficientes. As Fases 3 e 4 poderão ser avaliadas após sua implementação.

# REFERÊNCIAS

AMERSHI, Saleema *et al.* Guidelines for Human-AI Interaction. In: CHI CONFERENCE ON HUMAN FACTORS IN COMPUTING SYSTEMS, 2019, Glasgow. **Proceedings** [...]. New York: ACM, 2019. p. 1-13. DOI: 10.1145/3290605.3300233. Disponível em: https://doi.org/10.1145/3290605.3300233. Acesso em: 9 out. 2026.

BACH, Benjamin *et al.* Dashboard Design Patterns. **IEEE Transactions on Visualization and Computer Graphics**, v. 29, n. 1, p. 342-352, 2023. DOI: 10.1109/tvcg.2022.3209448. Disponível em: https://doi.org/10.1109/tvcg.2022.3209448. Acesso em: 26 ago. 2026.

BERGMEIR, Christoph; BENÍTEZ, José M. On the use of cross-validation for time series predictor evaluation. **Information Sciences**, v. 191, p. 192-213, 2012. DOI: 10.1016/j.ins.2011.12.028. Disponível em: https://doi.org/10.1016/j.ins.2011.12.028. Acesso em: 9 out. 2026.

DE MAURO, Andrea; SESTINO, Andrea; BACCONI, Andrea. Machine learning and artificial intelligence use in marketing: a general taxonomy. **Italian Journal of Marketing**, v. 2022, n. 4, p. 439-457, 2022. DOI: 10.1007/s43039-022-00057-w. Disponível em: https://doi.org/10.1007/s43039-022-00057-w. Acesso em: 26 ago. 2026.

FOIDL, Harald *et al.* Data pipeline quality: influencing factors, root causes of data-related issues, and processing problem areas for developers. **Journal of Systems and Software**, v. 207, p. 111855, 2024. DOI: 10.1016/j.jss.2023.111855. Disponível em: https://doi.org/10.1016/j.jss.2023.111855. Acesso em: 26 ago. 2026.

GRUPO DO PROJETO INTEGRADOR. **Plano de ação**: PIJ410-DRP14-A2026S2-T002. [S. l.]: UNIVESP, 2026. Documento interno do grupo.

HAN, Hojae *et al.* ArchCode: Incorporating Software Requirements in Code Generation with Large Language Models. In: ANNUAL MEETING OF THE ASSOCIATION FOR COMPUTATIONAL LINGUISTICS, 62., 2024, Bangkok. **Proceedings** [...]. Bangkok: Association for Computational Linguistics, 2024. p. 13520-13552. DOI: 10.18653/v1/2024.acl-long.730. Disponível em: https://doi.org/10.18653/v1/2024.acl-long.730. Acesso em: 9 out. 2026.

HYNDMAN, Rob J.; KOEHLER, Anne B. Another look at measures of forecast accuracy. **International Journal of Forecasting**, v. 22, n. 4, p. 679-688, 2006. DOI: 10.1016/j.ijforecast.2006.03.001. Disponível em: https://doi.org/10.1016/j.ijforecast.2006.03.001. Acesso em: 9 out. 2026.

JORDAN, Michael I.; MITCHELL, Tom M. Machine learning: trends, perspectives, and prospects. **Science**, v. 349, n. 6245, p. 255-260, 2015. DOI: 10.1126/science.aaa8415. Disponível em: https://doi.org/10.1126/science.aaa8415. Acesso em: 26 ago. 2026.

KAMOI, Ryo *et al.* When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey of Self-Correction of LLMs. **Transactions of the Association for Computational Linguistics**, v. 12, p. 1417-1440, 2024. DOI: 10.1162/tacl_a_00713. Disponível em: https://doi.org/10.1162/tacl_a_00713. Acesso em: 9 out. 2026.

KANNAN, P. K.; LI, Hongshuang "Alice". Digital marketing: a framework, review and research agenda. **International Journal of Research in Marketing**, v. 34, n. 1, p. 22-45, 2017. DOI: 10.1016/j.ijresmar.2016.11.006. Disponível em: https://doi.org/10.1016/j.ijresmar.2016.11.006. Acesso em: 26 ago. 2026.

LEMES, Thieny de Cássio; DIAS, Marina Oliveira de Souza; OLIVEIRA, Tiago de. Análise do uso de dashboard como ferramenta de apoio a tomada de decisão em instituições de ensino: uma revisão sistemática da literatura. **RENOTE**, v. 21, n. 1, p. 281-290, 2023. DOI: 10.22456/1679-1916.134356. Disponível em: https://doi.org/10.22456/1679-1916.134356. Acesso em: 24 ago. 2026.

LI, Hongshuang "Alice"; KANNAN, P. K.; VISWANATHAN, Siva; PANI, Abhishek. Attribution strategies and return on keyword investment in paid search advertising. **Marketing Science**, v. 35, n. 6, p. 831-848, 2016. DOI: 10.1287/mksc.2016.0987. Disponível em: https://doi.org/10.1287/mksc.2016.0987. Acesso em: 26 ago. 2026.

LIU, Nelson F. *et al.* Lost in the Middle: How Language Models Use Long Contexts. **Transactions of the Association for Computational Linguistics**, v. 12, p. 157-173, 2024. DOI: 10.1162/tacl_a_00638. Disponível em: https://doi.org/10.1162/tacl_a_00638. Acesso em: 9 out. 2026.

MARTINS, Felipe. **Otimização de uma campanha publicitária na rede de pesquisa do Google Ads utilizando Teoria da Decisão Bayesiana**. 2019. Dissertação (Mestrado) – Universidade de São Paulo, São Paulo, 2019. DOI: 10.11606/d.45.2019.tde-22102019-115749. Disponível em: https://doi.org/10.11606/d.45.2019.tde-22102019-115749. Acesso em: 24 ago. 2026.

PENG, Roger D. Reproducible research in computational science. **Science**, v. 334, n. 6060, p. 1226-1227, 2011. DOI: 10.1126/science.1213847. Disponível em: https://doi.org/10.1126/science.1213847. Acesso em: 25 ago. 2026.

PINHEIRO, Gabriela da Silva Santos; DIAS, Célia da Consolação. Técnicas e métodos de pesquisa de experiência do usuário (UX) para avaliação de estudo de usuários da informação. **Perspectivas em Gestão & Conhecimento**, v. 13, n. 2, p. 133-148, 2023. DOI: 10.22478/ufpb.2236-417x.2023v13n2.63290. Disponível em: https://doi.org/10.22478/ufpb.2236-417x.2023v13n2.63290. Acesso em: 24 ago. 2026.

ROSADO, Keila Mara Lara; DIAS, Célia da Consolação. A metodologia Design Thinking nas pesquisas científicas e a pertinência de sua apropriação pela Ciência da Informação. **Encontros Bibli: Revista Eletrônica de Biblioteconomia e Ciência da Informação**, v. 29, e96222, 2024. DOI: 10.5007/1518-2924.2024.e96222. Disponível em: https://doi.org/10.5007/1518-2924.2024.e96222. Acesso em: 26 ago. 2026.

SAURA, José Ramón. Using Data Sciences in Digital Marketing: framework, methods, and performance metrics. **Journal of Innovation & Knowledge**, v. 6, n. 2, p. 92-102, 2021. DOI: 10.1016/j.jik.2020.08.001. Disponível em: https://doi.org/10.1016/j.jik.2020.08.001. Acesso em: 25 ago. 2026.

SAURA, José Ramón; PALOS-SÁNCHEZ, Pedro; CERDÁ SUÁREZ, Luis Manuel. Understanding the Digital Marketing Environment with KPIs and Web Analytics. **Future Internet**, v. 9, n. 4, p. 76, 2017. DOI: 10.3390/fi9040076. Disponível em: https://doi.org/10.3390/fi9040076. Acesso em: 24 ago. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Plano de Ensino**: disciplina Projeto Integrador em Computação IV (PJI410). [S. l.]: UNIVESP, [s. d.]. Disponível em: https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/PJI410.html. Acesso em: 9 out. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Projeto pedagógico dos cursos de Bacharelado em Tecnologia da Informação, Ciência de Dados e Engenharia de Computação**. São Paulo: UNIVESP, 2020. Disponível em: https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BTI.pdf. Acesso em: 25 ago. 2026.

WANG, Lei *et al.* A survey on large language model based autonomous agents. **Frontiers of Computer Science**, v. 18, n. 6, art. 186345, 2024. DOI: 10.1007/s11704-024-40231-1. Disponível em: https://doi.org/10.1007/s11704-024-40231-1. Acesso em: 24 ago. 2026.

YANG, John *et al.* SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering. **Advances in Neural Information Processing Systems**, v. 37, 2024. DOI: 10.52202/079017-1601. Disponível em: https://proceedings.neurips.cc/paper_files/paper/2024/hash/5a7c947568c1b1328ccc5230172e1e7c-Abstract-Conference.html. Acesso em: 9 out. 2026.

YAO, Shunyu *et al.* ReAct: Synergizing Reasoning and Acting in Language Models. In: INTERNATIONAL CONFERENCE ON LEARNING REPRESENTATIONS, 11., 2023, Kigali. **Proceedings** [...]. [S. l.: s. n.], 2023. Disponível em: https://arxiv.org/abs/2210.03629. Acesso em: 9 out. 2026.

<!-- Na versão institucional final, inserir manualmente o Anexo A com os TCLEs preenchidos e assinados, mantidos fora do Git. Incluir o anexo no sumário somente após essa inserção protegida. -->

# APÊNDICES

## Apêndice A – Instrumento de levantamento inicial

Transposição dos 30 itens e campos de `docs/questionario_comunidade_externa.md`, sem respostas preenchidas, síntese da conversa ou identificação pessoal. Este instrumento antecede e não substitui a avaliação da V1/V2.

### A.1 Identificação da conversa

- Data.
- Formato: ☐ Presencial; ☐ Videochamada; ☐ Telefone; ☐ Outro.
- Participante(s) da instituição.
- Cargo(s): ☐ Coordenação de marketing; ☐ Direção; ☐ Ambos; ☐ Outro.
- Integrantes do grupo presentes.
- Autorização para registrar respostas sem identificação nominal: ☐ Sim; ☐ Não.

### A.2 Perguntas comuns à coordenação de marketing e à direção

#### A.2.1 Contexto e prioridade

1. Quais são hoje os principais objetivos da instituição relacionados à captação e à comunicação
   digital?

2. Quais decisões sobre investimentos em marketing são mais difíceis de tomar atualmente?

3. Em quais períodos do ano a demanda por matrículas, visitas ou contatos costuma ser mais relevante?
   Existem limitações de capacidade que precisam ser consideradas?

4. Quais públicos, ciclos/modalidades ou serviços são prioritários? Há públicos ou frentes que não
   devem ser priorizados neste momento?

#### A.2.2 Dados e informações disponíveis

5. Quais fontes de informação são usadas atualmente para acompanhar marketing e captação?

   - ☐ Google Ads
   - ☐ Meta Ads
   - ☐ Instagram/Facebook orgânico
   - ☐ Planilha de contatos ou funil
   - ☐ Sistema acadêmico/matrículas
   - ☐ CRM
   - ☐ Relatórios manuais
   - ☐ Outra:

6. Quais informações dessas fontes são mais confiáveis para a tomada de decisão? Quais apresentam
   lacunas, atrasos ou dificuldades de interpretação?

7. Há dados que não podem ser compartilhados, mesmo de forma sanitizada, no contexto acadêmico?

8. É possível disponibilizar relatórios históricos sem dados pessoais, por exemplo com métricas
   agregadas por campanha, período ou publicação?

   - ☐ Sim
   - ☐ Sim, mediante validação prévia
   - ☐ Não neste momento
   - ☐ Não sei informar

#### A.2.3 Critérios de sucesso e limitações

9. Quais indicadores ajudam a decidir se uma ação de marketing merece continuidade, revisão ou
   interrupção?

   - ☐ Investimento
   - ☐ Alcance/impressões
   - ☐ Frequência
   - ☐ Cliques/CTR
   - ☐ CPC/CPM
   - ☐ Conversões
   - ☐ Custo por conversão/CPA
   - ☐ Conversas iniciadas
   - ☐ Visitas
   - ☐ Matrículas
   - ☐ Outro:

10. Há alguma regra, limite ou princípio que uma recomendação de investimento deve respeitar?

   Exemplos: teto de orçamento, período de matrícula, capacidade de atendimento, público
   prioritário, campanha que não deve ser alterada.

11. Quais conclusões seriam inadequadas ou arriscadas de tirar apenas a partir dos dados atuais?

### A.3 Bloco específico — coordenação de marketing

12. Como as campanhas de mídia paga são planejadas, acompanhadas e revisadas atualmente?

13. Quais plataformas e formatos de campanha são usados? Para cada um, qual é o objetivo esperado?

14. Quais métricas são vistas com maior frequência? Quais são difíceis de calcular ou comparar?

15. As campanhas possuem recortes de período, público, região, ciclo ou objetivo que devem ser
    preservados na análise?

16. Como é registrada uma conversão em cada plataforma? Há alguma regra de atribuição conhecida
    (por exemplo, último clique, primeiro clique ou outra)?

17. Sobre conteúdo orgânico da Meta, existem relatórios históricos de publicações e métricas de
    alcance, interações, salvamentos, compartilhamentos, reproduções ou seguidores?

    - ☐ Sim, com histórico suficiente
    - ☐ Sim, mas com histórico limitado
    - ☐ Não
    - ☐ Não sei informar

    Observações sobre formato, período e possibilidade de uso sanitizado:

18. Que perguntas um painel deveria responder rapidamente para facilitar seu trabalho?

19. Que tipo de alerta, comparação ou explicação seria útil — e qual poderia gerar interpretação
    equivocada?

### A.4 Bloco específico — direção da instituição

20. Que tipo de decisão estratégica a direção espera apoiar com uma análise de marketing digital?

21. Quais resultados institucionais devem ser considerados além das métricas de mídia?

    - ☐ Capacidade de atendimento
    - ☐ Visitas/agendamentos
    - ☐ Novas matrículas
    - ☐ Retenção/rematrículas
    - ☐ Posicionamento institucional
    - ☐ Outro:

22. Quais restrições institucionais devem aparecer antes de qualquer sugestão de distribuição de
    orçamento?

23. Como a direção prefere receber uma análise: painel resumido, comparativo por período, cenários
    de investimento, relatório textual ou combinação desses formatos?

24. Quais elementos tornariam a análise suficientemente confiável para apoiar uma discussão de
    gestão? E quais exigiriam confirmação adicional?

25. Que riscos éticos, reputacionais, operacionais ou de confidencialidade precisam ser evitados?

### A.5 Perguntas prospectivas sobre a solução

26. Qual conjunto mínimo de informações a interface deve mostrar para ser útil?

27. Quais filtros seriam indispensáveis?

    - ☐ Período
    - ☐ Canal/plataforma
    - ☐ Campanha
    - ☐ Objetivo da campanha
    - ☐ Público/segmento agregado
    - ☐ Ciclo/modalidade
    - ☐ Outro:

28. Como deve ficar explícita a diferença entre dado observado, cálculo determinístico e estimativa?

29. Uma interpretação assistida por IA, sempre acompanhada dos dados, cálculos e fontes que a
    sustentam, seria útil? Que limites ela deveria respeitar?

30. A instituição teria disponibilidade para avaliar uma versão inicial do protótipo e registrar
    sugestões de melhoria?

    - ☐ Sim
    - ☐ Talvez, dependendo do período
    - ☐ Não neste momento

## Apêndice B – Instrumentos de validação aplicados à V1 e à V2

### B.1 Instrumento V1 — primeira avaliação de P1

A avaliação utilizou somente Captação e Matrículas da V1, com dados sintéticos. As duas tarefas e as seis perguntas abaixo foram transpostas de `docs/validacao/instrumento_validacao_v1.md`, sem as respostas da participante.

**Tarefa 1 — Captação:** Observe a tela de Captação, altere um dos filtros e explique o que você entende dos indicadores apresentados.

**Tarefa 2 — Matrículas:** Observe a tela de Matrículas e explique o que você entende sobre o total, novas matrículas e rematrículas.

Nas perguntas 1 a 3, a escala foi de 1 a 5, em que 1 representa a menor concordância e 5 a maior. As perguntas 4 a 6 foram abertas. O instrumento permitia “não sei”, “não se aplica” ou recusa.

1. As informações apresentadas em Captação ficaram fáceis de compreender?
2. As informações apresentadas em Matrículas ficaram fáceis de compreender?
3. Foi fácil localizar e utilizar os filtros?
4. Qual informação apresentada você considera mais útil para acompanhar a captação e as matrículas?
5. Houve alguma informação, gráfico ou elemento da tela que você não entendeu ou teve dificuldade para utilizar?
6. O que você alteraria ou acrescentaria nesta primeira versão?

### B.2 Perguntas da reavaliação V2 — mesma P1

As seis perguntas abaixo foram transpostas do registro efetivo em `docs/validacao/respostas/v2-p1-reavaliacao.md`. Não há instrumento V2 independente para esta reavaliação; o documento posterior de 18 perguntas não foi aplicado a P1. O escopo registrado foi Captação, Matrículas e a visualização temporal consolidada, com dados sintéticos. As respostas numéricas registradas para as perguntas 1, 2 e 4 foram expressas em escala de cinco pontos; as demais foram abertas.

1. As informações apresentadas em Captação ficaram fáceis de compreender?
2. Foi fácil utilizar a seleção de Contatos, Visitas e Matrículas no gráfico temporal?
3. Visualizar essas informações no mesmo gráfico ajudou ou dificultou a comparação ao longo do tempo? Por quê?
4. As informações apresentadas em Matrículas ficaram fáceis de compreender?
5. Houve alguma informação, gráfico ou elemento que você não entendeu ou teve dificuldade para utilizar?
6. O que você ainda alteraria ou acrescentaria nesta versão?

As respostas originais e a distinção entre transcrição e versão normalizada permanecem nos registros de validação. A síntese necessária está no corpo deste relatório.
