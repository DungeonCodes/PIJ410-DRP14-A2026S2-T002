# Run Log

## Registro

Data:
Ação realizada:
Arquivos alterados:
Resultado:
Pendências:
Próximo passo:

---

Data: 2026-08-24
Ação realizada: download dos dois modelos oficiais de relatório do PI (parcial e final) a partir de assets.univesp.br e registro na pasta de documentos normativos.
Arquivos alterados:
- `docs/univesp/Modelo_Relatorio_Parcial.docx` (novo)
- `docs/univesp/Modelo_Relatorio_Final.docx` (novo)
- `docs/univesp/README.md` (tabela de origens e notas atualizadas)
Resultado: arquivos íntegros (Office Open XML válido). Nenhum commit realizado.
Pendências: definir a ferramenta de edição de `.docx` que preserve a formatação dos gabaritos; os modelos ainda não foram analisados.
Próximo passo: análise dos documentos oficiais da UNIVESP como fonte normativa, conforme `/docs/master_context.md`.

---

Data: 2026-08-24
Ação realizada: análise (somente leitura) dos modelos de relatório e dos 5 PDFs normativos da UNIVESP; criação de duas skills de projeto a partir do que foi extraído.
Arquivos alterados:
- `.claude/skills/relatorio-pi/SKILL.md` (novo)
- `.claude/skills/relatorio-pi/references/rubricas.md` (novo)
- `.claude/skills/relatorio-pi/references/formatacao.md` (novo)
- `.claude/skills/pesquisa-bibliografica/SKILL.md` (novo)
- `.claude/skills/pesquisa-bibliografica/references/abnt.md` (novo)
- `.claude/skills/pesquisa-bibliografica/scripts/buscar.py` (novo)
Resultado: modelos `.docx` permaneceram intactos. Estrutura de seções, estilos nomeados, margens e rubricas de avaliação mapeados e registrados nas skills. Script `buscar.py` testado contra Crossref, OpenAlex e Semantic Scholar, com saída em ABNT. Nenhum commit realizado.
Pendências:
- Norma ABNT: skills adotam NBR 6023:2018 + NBR 10520:2023; o modelo da UNIVESP pede 6023:2002. Registrar em `decisions.md` e confirmar com o tutor.
- Divergência entre documentos oficiais quanto ao tamanho do grupo: Regulamento Art. 3º diz 5 a 8 integrantes; Orientações para Avaliação dizem até 7.
- Tema norteador do semestre ainda não identificado; é exigência transversal nas rubricas.
Próximo passo: revisão humana das skills; identificar o tema norteador do PIJ410 no AVA.

---

Data: 2026-08-24
Ação realizada: criação do registro de referências bibliográficas e primeira rodada de levantamento.
Arquivos alterados:
- `docs/referencias.md` (novo)
- `.claude/skills/pesquisa-bibliografica/scripts/buscar.py` (correção: acento em "Disponível"; desescape de entidades HTML vindas dos periódicos)
Termos de busca utilizados (bases Crossref + OpenAlex + Semantic Scholar):
- E1: "marketing digital captação de alunos instituição de ensino" (desde 2016)
- E2: "retorno sobre investimento mídia paga publicidade digital métricas" (desde 2016) -- ruído alto, refeita como
      "digital advertising effectiveness return on investment marketing metrics" (desde 2015)
- E3: "dashboard business intelligence indicadores gestão tomada de decisão" (desde 2015)
- E4: "data visualization decision making dashboard design" (desde 2014)
- E5: "gestão escolar baseada em dados evasão retenção de alunos" (desde 2015)
- E6: "design thinking human centered design metodologia projeto" (desde 2014) -- ruído alto, refeita como
      "design thinking metodologia ouvir criar implementar solução social" (desde 2014)
Resultado: 19 obras selecionadas em 6 eixos temáticos, todas com DOI testado e resolvido. Todas em status
`candidata` -- nenhuma foi lida ainda. Descartes registrados com motivo. Nenhum commit realizado.
Pendências:
- Localizar Araújo e Garbin (2016), fonte do ciclo HCD citada pelas próprias Orientações da UNIVESP.
- Obras metodológicas clássicas (Severino, Gil, toolkit HCD da IDEO) são livros e não aparecem em API de artigo.
- Eixo E1 cobre apenas ensino superior; se a instituição parceira for de educação básica, ampliar o recorte.
- Eixo E2 tem pouca literatura brasileira.
Próximo passo: ler as obras prioritárias (LEMES et al. 2023, SAURA 2020, LEAL et al. 2019) e mudar status para `lida`.

---

Data: 2026-08-24
Ação realizada: ampliação do levantamento bibliográfico com os eixos técnicos (UX/UI, front-end/Next.js,
PostgreSQL, análise de dados, agentes de LLM e memória); inclusão do arXiv como base de busca.
Arquivos alterados:
- `docs/referencias.md` (eixos E7 a E11; 17 obras novas; total 36)
- `.claude/skills/pesquisa-bibliografica/scripts/buscar.py` (nova base `arxiv`, com marcação explícita de preprint)
Termos de busca utilizados:
- E7: "usabilidade avaliação heurística interface design experiência do usuário" (crossref,openalex; desde 2015)
- E8: "server-side rendering React web application performance frontend architecture" (desde 2016)
- E9: "relational database PostgreSQL data modeling query performance" (desde 2015)
- E10: "ETL data pipeline exploratory data analysis reproducible workflow" (desde 2015) -- ruído de bioinformática,
      refeita como "business intelligence data warehouse dimensional modeling analytics architecture"
- E11: "memory augmented large language model agents long-term memory architecture" (s2,openalex,arxiv; desde 2022)
      + "cognitive architecture language agents memory modules operating system context" (s2,arxiv; desde 2023)
      + "retrieval augmented generation knowledge grounding survey" (s2,openalex; desde 2020)
Resultado: 36 obras no acervo, todas com DOI testado. Lista ABNT conferida: ordem alfabética, sem duplicatas,
todas com DOI e data de acesso. `arxiv` ficou fora das bases padrão do script, de propósito: preprint não é
fonte revisada por pares e a rúbrica exige fonte confiável. Nenhum commit realizado.
Pendências novas:
- Clássicos de UX (Nielsen, Norman, Krug) são livros e não aparecem em API de artigo.
- Next.js tem apenas uma obra no acervo (livro Apress); literatura revisada por pares sobre o framework é escassa.
- Falta modelagem dimensional (star schema, fato/dimensão) no eixo E9.
- E11 depende de dois preprints (GAO et al.; SUMERS et al.); localizar as versões publicadas antes de citar.
- Definir com o grupo se o eixo E11 entra no relatório como metodologia de desenvolvimento; não confundir com o
  Design Thinking exigido pela rúbrica, que trata do ciclo junto à comunidade externa.
Próximo passo: ler as obras prioritárias e mudar status para `lida`.

---

Data: 2026-08-24
Ação realizada: registro dos dois primeiros ADRs; início da redação do relatório parcial pela Introdução.
Arquivos alterados:
- `docs/decisions.md` (ADR-001 Markdown como fonte única; ADR-002 norma ABNT vigente; tabela de pendências)
- `docs/relatorio/parcial.md` (novo -- esqueleto do relatório e primeira versão da Introdução)
- `.claude/skills/relatorio-pi/references/redacao.md` (novo -- redação científica)
- `.claude/skills/relatorio-pi/SKILL.md` (fluxo ADR-001 e referência à nova seção de redação)
Resultado: Introdução em 5 parágrafos, 383 palavras, registro impessoal verificado (nenhuma ocorrência de
primeira pessoa). Nenhuma citação inserida: as 36 obras do acervo continuam com status `candidata` e não
foram lidas. Avaliada a necessidade de skill nova para texto científico: não é necessária -- `relatorio-pi`
cobre estrutura e rúbricas, `pesquisa-bibliografica` cobre fontes; o que faltava era ofício de redação,
adicionado como arquivo de referência. Nenhum commit realizado.
Pendências que bloqueiam o fechamento da Introdução (5 marcadores no texto):
- forma de referência à instituição parceira (anonimização)
- como o grupo chegou à instituição e o que motivou o recorte
- definição do objeto do trabalho
- curso e disciplinas cursadas, com conteúdos específicos
- tema norteador do semestre (transversal às rúbricas)
Próximo passo: validação humana do texto da Introdução; preencher os marcadores; seguir para 2.1 Objetivos.

---

Data: 2026-08-24
Ação realizada: leitura do Plano de Ação do grupo e reescrita completa da Introdução a partir dele.
Arquivos alterados:
- `docs/relatorio/parcial.md` (bloco "Dados do projeto"; Introdução reescrita)
- `docs/decisions.md` (ADR-003 ajustado; pendências resolvidas movidas para seção própria)
Fonte: `docs/univesp/Plano_de_Acao_PIJ410_2026S2.docx`, lido com pandoc (arquivo não alterado).
Resultado: Introdução com 5 parágrafos e 470 palavras, registro impessoal verificado. Cinco das seis ações
exigidas pela rúbrica estão contempladas; falta apenas a indicação das disciplinas. Marcadores pendentes
caíram de 5 para 2. Nenhum commit realizado.
Pendências resolvidas pelo Plano de Ação:
- tema norteador (análise de dados em escala + IA + interface de visualização)
- tamanho do grupo: 8 integrantes, conforme o Regulamento (Art. 3º, de 5 a 8)
- motivação e processo de escolha do local
- título provisório, problema e objetivo
Pendências que permanecem:
- curso e disciplinas cursadas, com conteúdos específicos (não consta no Plano de Ação)
- segmento da instituição parceira (básica, superior ou técnica) -- afeta o recorte do eixo E1 do acervo
- RA de uma integrante consta como "a informar"
- citação do eixo E3/E4 no primeiro parágrafo, após leitura das obras
Observação: o Plano de Ação está em `/docs/univesp/`, pasta reservada aos documentos normativos da UNIVESP.
Sendo produção do grupo, caberia melhor em `/docs/`. Não foi movido sem autorização.
Próximo passo: validação humana da Introdução; atualizar `master_context.md`, que ainda registra
objetivo, problema e escopo como pendentes; seguir para 2.1 Objetivos.

---

Data: 2026-08-24
Ação realizada: leitura e uso da primeira fonte acadêmica na Introdução.
Fonte verificada: LEMES, Thieny de Cássio; DIAS, Marina Oliveira de Souza; OLIVEIRA, Tiago de.
*Análise do uso de dashboard como ferramenta de apoio a tomada de decisão em instituições de
ensino: uma revisão sistemática da literatura*. RENOTE, 2023. DOI:
10.22456/1679-1916.134356.
Procedimento: página oficial da RENOTE/UFRGS e resumo lidos; metadados, autoria, DOI e aderência
ao argumento conferidos. A obra sustenta a paráfrase de que painéis de indicadores podem apoiar
a compreensão de informações e a tomada de decisão em instituições de ensino.
Resultado: inserida na Introdução a citação indireta no sistema autor-data
`(LEMES; DIAS; OLIVEIRA, 2023)`, conforme o padrão ABNT adotado pelo projeto para três autores.
Status da obra alterado de `candidata` para `citada` em `docs/referencias.md`. Nenhum commit
realizado.

---

Data: 2026-08-24
Ação realizada: leitura e uso de fonte para justificar a observação de métricas no segundo
parágrafo da Introdução.
Fonte verificada: MARTINS, Felipe. *Otimização de uma campanha publicitária na rede de pesquisa
do Google Ads utilizando Teoria da Decisão Bayesiana*. Dissertação (Mestrado), Universidade de
São Paulo, 2019. DOI: 10.11606/d.45.2019.tde-22102019-115749.
Procedimento: texto integral da dissertação, hospedado no repositório oficial da USP, lido no
trecho de resumo. A fonte descreve ROI e taxa de conversão como métricas usuais de avaliação de
campanhas e explica que a multiplicidade de configurações torna a análise não trivial.
Resultado: inserida a citação indireta `(MARTINS, 2019)` na Introdução. A dispersão de dados
permanece identificada explicitamente como característica do contexto da instituição parceira,
registrada no Plano de Ação. Status da obra alterado de `candidata` para `citada` em
`docs/referencias.md`. Nenhum commit realizado.

---

Data: 2026-08-24
Ação realizada: padronização de evidências na redação do PI.
Decisão aplicada: toda afirmação sobre o mundo, dados, métodos ou efeitos deve ter referência
verificável; apenas a proposta do grupo e o relato explícito de sua construção não exigem fonte
externa. Fatos da instituição parceira passam a citar o Plano de Ação do grupo.
Arquivos alterados:
- `.claude/skills/relatorio-pi/references/redacao.md` (regra de rastreabilidade)
- `docs/relatorio/parcial.md` (segundo parágrafo da Introdução)
- `docs/referencias.md` (referência do Plano de Ação)
Resultado: afirmações sobre métricas de campanhas são apoiadas por Martins (2019); dados
fragmentados e seus efeitos no contexto da instituição parceira são apoiados pelo Plano de Ação
(GRUPO DO PROJETO INTEGRADOR, 2026). Nenhum commit realizado.

---

Data: 2026-08-25
Ação realizada: confirmação dos cursos do grupo e inserção da relação interdisciplinar na
Introdução.
Fonte de composição: informação declarada pelo grupo — Bacharelado em Ciência de Dados e
Engenharia da Computação. Fontes curriculares verificadas: PPC 2020 dos cursos de Bacharelado
em Tecnologia da Informação, Ciência de Dados e Engenharia da Computação; PPC 2026 de Ciência
de Dados, ambos publicados pela UNIVESP.
Resultado: removido o marcador pendente da Introdução. Aplicações em Aprendizado de Máquina,
Redes Neurais, Aprendizado Profundo, Visão Computacional e Impactos da Computação na Sociedade
foram relacionados ao projeto com citações aos PPCs oficiais. A redação declara apenas a
formação mobilizada pelo grupo e não atribui todas as disciplinas a todos os integrantes. Nenhum
commit realizado.

---

Data: 2026-08-25
Ação realizada: início da seção Desenvolvimento, com redação de 2.1 Objetivos.
Fonte: objetivo, problema e tema específico registrados no Plano de Ação do grupo.
Resultado: definido um objetivo geral idêntico em escopo ao Plano de Ação e cinco objetivos
específicos, todos no infinitivo. A seção explicita a relação com o tema norteador e prevê a
avaliação futura do protótipo, sem registrá-la como atividade já realizada. Nenhum commit
realizado.

---

Data: 2026-08-25
Ação realizada: fundamentação científica dos objetivos do relatório parcial.
Fontes lidas e utilizadas: SAURA; PALOS-SÁNCHEZ; SUÁREZ (2017), sobre KPIs e web analytics;
SAURA (2021), sobre ciência de dados e informações acionáveis em marketing digital; LEMES; DIAS;
OLIVEIRA (2023), sobre dashboards em instituições de ensino; e PINHEIRO; DIAS (2023), sobre
métodos de experiência do usuário.
Resultado: incluída a subseção "Fundamentação dos objetivos", relacionando cada conjunto de
objetivos à evidência correspondente. As três obras foram marcadas como `citada` no acervo. A
referência de Saura foi corrigida de 2020 para 2021 após conferência da edição publicada pelo
periódico. Nenhum commit realizado.

---

Data: 2026-08-25
Ação realizada: ajuste estrutural de 2.1 Objetivos.
Decisão aplicada: a justificativa científica dos objetivos permanece integrada ao texto corrido da
própria seção, entre o objetivo geral e os objetivos específicos; não foi criado capítulo ou
subseção adicional. Nenhum commit realizado.

---

Data: 2026-08-25
Ação realizada: redação inicial de 2.2 Justificativa e delimitação do problema.
Fontes: contexto e contribuição à comunidade documentados no Plano de Ação; relevância de
indicadores, ciência de dados e marketing digital sustentada por SAURA; PALOS-SÁNCHEZ; SUÁREZ
(2017) e SAURA (2021).
Resultado: seção estruturada com problema, pergunta de pesquisa, relação com o tema norteador,
relevância acadêmica/social/cultural e escopo explícito. Nenhum resultado ou validação foi
antecipado. Nenhum commit realizado.

---

Data: 2026-08-25
Ação realizada: revisão do escopo técnico para incorporar inferência determinística e apoio de IA
agêntica via CLI às simulações.
Fontes verificadas: WANG et al. (2024), sobre agentes autônomos baseados em modelos de linguagem;
PENG (2011), sobre reprodutibilidade em ciência computacional; documentação oficial de ANTHROPIC
(2026), para Claude Fable 5; e OPENAI (2026), para GPT-5.6 Sol e o esforço de raciocínio `xhigh`.
Resultado: atualizados o quadro inicial, os objetivos e a delimitação do relatório parcial; o
acervo E11, as decisões e o contexto mestre. Definido que cálculos e inferências serão
determinísticos e conferíveis; agentes apenas apoiarão cenários exploratórios, interpretação e
revisão, sempre com dados fictícios ou sanitizados e revisão humana. Nenhum commit realizado.

---

Data: 2026-08-25
Ação realizada: registro do uso de IA como apoio controlado à produção documental.
Resultado: a metodologia do relatório parcial passou a registrar, de forma sucinta, que escopo,
fontes, decisões e revisões serão mantidos em registros versionados; a IA poderá apoiar consulta,
organização e revisão, enquanto seleção de conteúdo, validação de fontes e aprovação de versões
permanecem sob responsabilidade do grupo. Diretriz também registrada no contexto mestre e nas
decisões. Nenhum commit realizado.

---

Data: 2026-08-26
Ação realizada: inclusão explícita de aprendizagem de máquina no escopo analítico do PI e revisão
do relatório parcial para distinguir indicadores determinísticos, modelo supervisionado de
aprendizagem de máquina e IA agêntica/generativa.
Arquivos alterados:
- `docs/relatorio/parcial.md`
- `docs/referencias.md`
- `docs/master_context.md`
- `docs/decisions.md`
Fontes verificadas: JORDAN; MITCHELL (2015), sobre aprendizagem de máquina como melhoria de
desempenho a partir de experiência/dados; DE MAURO; SESTINO; BACCONI (2022), sobre aprendizagem
de máquina como subárea da IA e seus casos de uso em marketing.
Resultado: o relatório prevê preparar dados históricos, treinar e avaliar ao menos um modelo
supervisionado para estimar uma variável de desempenho de campanhas, com comparação a uma camada
de indicadores determinísticos. A IA agêntica permanece apenas como apoio controlado e não é
apresentada como o método de aprendizagem de máquina. Nenhum resultado preditivo foi antecipado.
Pendências: definir a variável-alvo, as variáveis de entrada, o modelo a comparar e as métricas de
avaliação após o levantamento e a preparação dos dados.
Próximo passo: incorporar as orientações da orientadora às metas das quinzenas e detalhar o método
de avaliação do modelo no relatório.

---

Data: 2026-08-26
Ação realizada: ampliação da estrutura de fundamentação teórica para explicitar marketing digital,
tráfego pago, indicadores de Ads e a relação entre métricas e decisões de investimento.
Arquivos alterados:
- `docs/relatorio/parcial.md`
- `docs/referencias.md`
Fontes verificadas: KANNAN; LI (2017), sobre o enquadramento do marketing digital; LI; KANNAN;
VISWANATHAN; PANI (2016), sobre atribuição, decisão de lance, alocação de orçamento e retorno em
busca paga.
Resultado: foram incluídos os subcapítulos 2.3.1 a 2.3.3, uma matriz inicial de indicadores e
perguntas de decisão e a exigência metodológica de declarar regra de atribuição, período, nível de
agregação e fórmulas. ROAS só será calculado caso a base contenha receita ou valor de conversão
confiável; caso contrário, a análise usará conversões, taxa de conversão e CPA.
Próximo passo: confirmar com a instituição quais campos e qual regra de atribuição estarão
disponíveis na base histórica antes de definir os indicadores finais.

---

Data: 2026-08-26
Ação realizada: desenvolvimento do texto-base do subcapítulo 2.3.1, "Marketing digital e decisão
orientada por dados", para revisão do grupo.
Arquivos alterados:
- `docs/relatorio/parcial.md`
Fontes utilizadas: KANNAN; LI (2017) e SAURA (2021), ambas já registradas em
`docs/referencias.md`.
Resultado: o texto delimita marketing digital como processo integrado, separa evidência analítica
de causalidade não demonstrada e mantém a análise de dados e a aprendizagem de máquina como
contribuição central do PI. A interface web é caracterizada como meio de visualização.

---

Data: 2026-08-26
Ação realizada: revisão das citações do relatório parcial conforme o sistema autor-data da ABNT
NBR 10520:2023 e o manual de normalização da UNIVESP.
Arquivos alterados:
- `docs/relatorio/parcial.md`
- `docs/decisions.md`
Fonte verificada: manual "Normas ABNT 2023", publicado pela UNIVESP, que exemplifica a autoria de
pessoa física em maiúsculas e minúsculas dentro dos parênteses, seguida de vírgula e ano.
Resultado: as citações parentéticas passaram a usar formas como `(Saura, 2021)` e
`(Lemes; Dias; Oliveira, 2023)`; citações narrativas, como `Saura (2021)`, foram preservadas.
As referências bibliográficas continuam com sobrenomes em maiúsculas, como determina a sua
estrutura própria.

---

Data: 2026-08-26
Ação realizada: desenvolvimento do texto-base do subcapítulo 2.3.2, "Tráfego pago e campanhas de
Ads", para revisão do grupo.
Arquivos alterados:
- `docs/relatorio/parcial.md`
Fontes verificadas: MARTINS (2019), sobre configurações e otimização em campanhas de busca do
Google Ads; LI et al. (2016), sobre atribuição, lances e orçamento em publicidade de busca paga.
Resultado: o texto delimita o tráfego pago como domínio de aplicação dos dados históricos,
condiciona as unidades de análise aos campos realmente disponíveis e preserva a análise de dados,
a aprendizagem de máquina e a revisão humana como elementos centrais do projeto.

---

Data: 2026-08-26
Ação realizada: desenvolvimento dos subcapítulos 2.3.4 a 2.3.7 da fundamentação teórica.
Arquivos alterados:
- `docs/relatorio/parcial.md`
- `docs/referencias.md`
Fontes verificadas: FOIDL et al. (2024), sobre qualidade e etapas de pipelines de dados; JORDAN;
MITCHELL (2015) e DE MAURO; SESTINO; BACCONI (2022), sobre aprendizagem de máquina; LEMES; DIAS;
OLIVEIRA (2023), sobre dashboards em instituições de ensino; WANG et al. (2024), sobre agentes
baseados em modelos de linguagem.
Resultado: a fundamentação passa a abordar preparação e rastreabilidade dos dados, delimitação e
avaliação de aprendizagem de máquina, visualização por dashboard e uso controlado de IA agêntica.
A referência de Foidl et al. foi conferida e corrigida para o ano do volume publicado, 2024, sendo
incluída nas referências do relatório e marcada como citada no acervo.

---

Data: 2026-08-26
Ação realizada: delimitação dos repositórios para a etapa de aprendizagem de máquina.
Arquivos alterados:
- `docs/master_context.md`
- `docs/decisions.md`
- `docs/relatorio/parcial.md`
Resultado: o treinamento, os testes, os dados autorizados e o relatório técnico detalhado do modelo
ficam no repositório real da solução. Este repositório do PI permanece destinado à documentação
acadêmica e, posteriormente, a uma interface web independente com resultados sanitizados ou
fictícios. Nenhum dado real, modelo, credencial ou código operacional deve ser copiado para cá.

---

Data: 2026-08-26
Ação realizada: formalização da camada de interpretação assistida por modelos de linguagem de alta
capacidade e das regras de engenharia de memória/contexto.
Arquivos alterados:
- `docs/relatorio/parcial.md`
- `docs/master_context.md`
- `docs/decisions.md`
Fonte mantida: WANG et al. (2024), já registrada e citada, para a caracterização de agentes
baseados em modelos de linguagem e seus desafios de avaliação e confiabilidade.
Resultado: a IA agêntica pode organizar evidências, comparar cenários e gerar explicações
preliminares sobre resultados já calculados, mas não substitui o modelo de aprendizagem de máquina.
Cada explicação ou recomendação deve apontar dados, período, cálculos, resultados estimados ou
referências que a sustentam; saídas sem base verificável não serão utilizadas.

---

Data: 2026-08-26
Ação realizada: revisão do relatório parcial a partir do relatório anonimizado da estrutura do
sistema original e reorganização planejada da metodologia.
Arquivos alterados:
- `docs/relatorio/parcial.md`
Referência interna analisada:
- `docs/migracao-modelo/referencias/RELATORIO-ESTRUTURA-E-METODOLOGIA-ADS.md`
Resultado: a metodologia foi estruturada em nove subcapítulos. O motor de Ads será apresentado
como análise determinística auditável de três camadas, com limites explícitos de atribuição. A
aprendizagem de máquina passou a ser um experimento separado e condicionado à disponibilidade de
histórico suficiente de conteúdo orgânico da Meta; não há resultado, variável-alvo ou modelo
antecipado.

---

Data: 2026-08-26
Ação realizada: redação dos conteúdos metodológicos 2.4.1 a 2.4.6 e 2.4.8 a 2.4.9.
Arquivos alterados:
- `docs/relatorio/parcial.md`
- `docs/referencias.md`
Fontes verificadas: ROSADO; DIAS (2024), sobre a aplicabilidade de Design Thinking em pesquisa;
FOIDL et al. (2024), sobre qualidade de pipelines; PENG (2011), sobre reprodutibilidade; PINHEIRO;
DIAS (2023), sobre técnicas de pesquisa de experiência do usuário; WANG et al. (2024), sobre
agentes baseados em modelos de linguagem.
Resultado: a metodologia distingue o motor determinístico de Ads, o experimento de aprendizagem de
máquina ainda condicionado à base orgânica da Meta, a interpretação assistida por IA e a validação
da interface. A referência de Rosado e Dias foi marcada como citada e incluída no relatório.

---

Data: 2026-08-26
Ação realizada: inclusão da justificativa bibliográfica para a construção do protótipo e da
arquitetura da interface web na metodologia.
Arquivos alterados:
- `docs/relatorio/parcial.md`
- `docs/referencias.md`
Fontes verificadas: THAKKAR (2020), sobre aplicações React com renderização no servidor e Next.js;
BACH et al. (2023), sobre padrões de design de dashboards e suas decisões de visualização.
Resultado: foi criado o item 2.4.9, "Construção do protótipo e arquitetura da interface", e a
validação foi renumerada para 2.4.10. A escolha final de tecnologias permanece pendente e será
registrada antes da implementação; as fontes sustentam a direção técnica, não uma implementação já
concluída.

---

Data: 2026-08-26
Ação realizada: reforço das citações científicas na metodologia do relatório parcial.
Arquivos alterados:
- `docs/relatorio/parcial.md`
Fontes mobilizadas no texto: SAURA (2021); SAURA; PALOS-SÁNCHEZ; SUÁREZ (2017); LI et al. (2016);
MARTINS (2019); JORDAN; MITCHELL (2015); DE MAURO; SESTINO; BACCONI (2022), além das fontes já
cadastradas para Design Thinking, pipelines, reprodutibilidade, IA agêntica, arquitetura web,
dashboards e UX.
Resultado: os procedimentos de métricas, atribuição, cenários, auditoria e protocolo de ML agora
possuem citações próximas às afirmações metodológicas correspondentes. As regras internas do
projeto permanecem explicitamente identificadas como decisões e limites do próprio método.

---

Data: 2026-08-26
Ação realizada: criação de questionário estruturado para conversa com a coordenação de marketing e
a direção da instituição parceira.
Arquivo criado:
- `docs/questionario_comunidade_externa.md`
Resultado: o questionário reúne núcleo comum, perguntas específicas por função e quadro de síntese
para o grupo. As perguntas cobrem demanda, fontes de dados, indicadores, limites de atribuição,
regras de decisão, confidencialidade, requisitos da interface e validação, sem solicitar dados
pessoais ou credenciais.

---

Data: 2026-08-27
Ação realizada: revisão integral do relatório parcial contra a rubrica da UNIVESP e o acervo
bibliográfico do projeto.
Fontes candidatas avaliadas para possível ampliação: Leal, Nascimento e Soares Neto (2019),
Sedrakyan, Mannens e Verbert (2018) e Sivarajah et al. (2016), consultadas nos periódicos de origem.
Resultado: as candidatas permaneceram fora do relatório por incompatibilidade de segmento,
especificidade de domínio ou risco de enquadrar o conjunto como Big Data sem evidência suficiente.
O texto foi ampliado com fontes já lidas para fortalecer a introdução, a reprodutibilidade, o design
de dashboards, a abordagem quantitativa/qualitativa e o ciclo ouvir–criar–prototipar. A seção 2.5
passou a registrar a concepção da solução inicial e a distinguir explicitamente a ideia documentada
da aplicação ainda pendente. As referências comerciais da Anthropic e da OpenAI foram retiradas do
relatório parcial e mantidas no acervo como documentação técnica lida, sem uso acadêmico atual.
Arquivos alterados: `docs/relatorio/parcial.md`, `docs/referencias.md`,
`docs/fichamentos_bibliograficos.md`, `docs/decisions.md` e `docs/run_log.md`. Nenhum commit realizado.

---

Data: 2026-08-27
Ação realizada: criação de uma síntese de triagem das obras completas do acervo bibliográfico.
Buscas complementares: páginas dos periódicos, repositórios institucionais, DOI e versões abertas
dos textos dos eixos E1, E3 a E11; foram verificados objetivos, métodos, resultados e limitações
disponíveis. Consultas específicas incluíram captação e marketing de serviços em IES, dashboards e
BI, Design Thinking, avaliação de usabilidade, frameworks front-end, benchmarks de PostgreSQL,
Big Data, agentes generativos, contexto longo, RAG e arquiteturas cognitivas para agentes.
Resultado: `docs/resumos_obras_bibliograficas.md` reúne as 43 obras e três fontes institucionais,
separa leitura registrada, abstract/trechos e metadados, e atribui uma decisão preliminar de
prioridade sem promover candidatas nem autorizar citações. A ADR-004 e os documentos do acervo foram
atualizados para exigir, em futuras inclusões, catálogo ABNT, síntese geral e fichamento do recorte.
Arquivos alterados: `docs/resumos_obras_bibliograficas.md`, `docs/referencias.md`,
`docs/fichamentos_bibliograficos.md`, `docs/decisions.md` e `docs/run_log.md`. Nenhum commit realizado.

---

Data: 2026-08-27
Ação realizada: reconhecimento formal da baseline técnica da aplicação acadêmica na governança do
projeto.
Evidências verificadas no próprio repositório: aplicação Next.js + TypeScript; feature gate central
em `src/lib/fases.ts`; Fase 1 ativa com Captação e Matrículas; módulos de Ads, Reels orgânicos,
Objetivo da Gestão e Arquitetura & Algoritmos bloqueados; datasets locais sintéticos com metadados e
geração determinística; testes de fases, determinismo e não vazamento.
Validações executadas antes da atualização documental: integridade da zona científica protegida
confirmada; 54 verificações do feature gate, 46 verificações de determinismo e 35 verificações de
não vazamento aprovadas. Nenhum gerador de dados, build ou integração externa foi executado.
Resultado: criada a ADR-006 canônica, com referência ao ADR-A001 técnico já existente, e atualizado
o contexto mestre. A baseline é 27/08/2026; datas anteriores exibidas nos datasets representam
cronologia sintética, não coleta acadêmica. Nenhuma fase foi liberada e não houve alteração em
aplicação, dados, scripts, configurações, documentação científica protegida ou outputs. Nenhum
commit ou push realizado.
Arquivos alterados: `docs/decisions.md`, `docs/run_log.md` e `docs/master_context.md`.

---

Data: 2026-08-27
Ação realizada: revisão de sincronização entre a documentação científica/acadêmica e o rollout
funcional da aplicação.
Documentos inspecionados: contexto mestre, decisões, relatório parcial, Plano de Ação oficial,
rascunho do Plano de Ação, planejamento por fases, documentação de migração e referência, registros
de execução, requisitos metodológicos e materiais de Design Thinking. O Plano de Ação foi mantido
como registro histórico e planejado, sem reescrita de atividades ou evidências.
Inconsistências corrigidas: o relatório parcial ainda registrava a primeira versão executável e a
aplicação com dados fictícios como pendentes; a documentação geral ainda continha formulações de
protótipo futuro; e os materiais de referência não estavam explicitamente separados do estado
funcional acadêmico. Foi registrada a confirmação do grupo de que o ambiente sanitizado da Fase 1
está funcional e publicado na Vercel, exclusivamente com Captação e Matrículas e dados sintéticos.
Ads, Reels orgânicos, Objetivo da Gestão e Arquitetura & Algoritmos permanecem planejados e
bloqueados. A aplicação e a validação com a comunidade externa continuam pendentes e não foram
apresentadas como realizadas.
Validação: 54 verificações do feature gate e 35 verificações de não vazamento aprovadas. Nenhum
código, configuração, dataset, modelo ou documento normativo da UNIVESP foi alterado; nenhuma fase
foi habilitada.
Arquivos alterados nesta revisão: `docs/master_context.md`, `docs/decisions.md`,
`docs/relatorio/parcial.md`, `docs/migracao-modelo/README.md`,
`docs/migracao-modelo/arquitetura/plano-de-fases.md` e `docs/run_log.md`. Nenhum commit ou push
realizado.

---

Data: 2026-10-01
Ação realizada: Revisão V3 — feedback da orientadora.
Feedback aplicado: foram inseridos, nos Resultados preliminares, o registro do contato inicial com a
gestora de marketing e com a direção/mantenedora, sua relação com os requisitos iniciais e a
estratégia incremental de prototipação; a divisão em quatro fases foi explicitada na Metodologia; o
Objetivo Geral foi reduzido ao resultado pretendido; foram incluídos o recorte sintético atual de
Captação e Matrículas, expansões de siglas na primeira ocorrência, fontes das tabelas e instruções
para destacar filtros interativos nas Figuras 1 e 3. Os cinco placeholders de figuras foram
preservados.

Atualização posterior: a comparação V2→V3 foi demarcada diretamente em `parcial.md`; V2 foi usada
como baseline, V3 permanece a versão corrente de revisão e a ADR-001 foi emendada para registrar a
política de marcações editoriais e a montagem manual posterior do DOCX. V1 e V2 foram preservadas.

Pendência: não há período histórico autorizado para uso acadêmico de Google Ads, Meta Ads ou conteúdo
orgânico; os respectivos recortes permanecem condicionados à disponibilidade e à autorização das
fontes. Não foram inventados períodos, entrevistas, feedbacks nem validação externa.

### Checklist de exportação V3
- inserir/verificar numeração de páginas;
- atualizar páginas da Lista de Ilustrações;
- verificar fonte das tabelas;
- revisar quebras de página/texto;
- conferir figuras e legendas no PDF final.

Resultado: `docs/relatorio/parcial.md` permanece a fonte de verdade. V1 e V2 foram preservadas,
e `docs/relatorio/Relatorio_Parcial_V3.md` permanece sincronizada como versão corrente de revisão.
Nenhum DOCX/PDF, código, dado, documento oficial, commit ou push foi alterado/gerado.

---

Data: 2026-09-23
Ação realizada: registro do ADR-007 para revisão de alterações propostas nos relatórios.
Arquivo alterado:
- `docs/decisions.md`
Resultado: propostas passam a usar, no ponto exato da alteração, os blocos `(Exclusão vN: ...)` e `(Inclusão vN: ...)`. Após aprovação, o texto é consolidado sem marcadores; o Git preserva as versões anteriores e arquivos com marcações não são convertidos em entregas.

---

Data: 2026-09-23
Ação realizada: renomeação da fonte do Relatório Parcial para explicitar seu escopo no nome do arquivo.
Arquivos alterados:
- `docs/relatorio/parcial.md` → `docs/relatorio/relatorio_parcial.md`
- `docs/decisions.md`
- `docs/migracao-modelo/README.md`
Resultado: o ADR-007 passa a apontar nominalmente para `docs/relatorio/relatorio_parcial.md`.

---

Data: 2026-09-23
Ação realizada: proposta de revisão dos objetivos específicos do Relatório Parcial.
Arquivo alterado:
- `docs/relatorio/relatorio_parcial.md`
Resultado: conforme o ADR-007, a lista anterior de sete objetivos foi preservada em `(Exclusão v1: ...)` e a proposta de cinco objetivos em `(Inclusão v2: ...)`. A alteração agrupa dados e indicadores, retira a IA agêntica como objetivo específico e preserva-a como apoio metodológico.

---

Data: 2026-09-23
Ação realizada: explicitação da correspondência entre objetivos específicos e metodologia planejada.
Arquivo alterado:
- `docs/relatorio/relatorio_parcial.md`
Resultado: foi inserido, conforme o ADR-007, um bloco `(Inclusão v1: ...)` que vincula os cinco objetivos específicos aos itens metodológicos correspondentes e afirma que a relação descreve procedimentos planejados, não resultados.

---

Data: 2026-09-23
Ação realizada: explicitação dos resultados preliminares por objetivo específico.
Arquivo alterado:
- `docs/relatorio/relatorio_parcial.md`
Resultado: o item 2.5 passou a relacionar cada um dos cinco objetivos ao resultado de concepção já existente e às etapas ainda pendentes, sem apresentar planejamento como resultado alcançado.

---

Data: 2026-09-29
Ação realizada: reconciliação do documento colaborativo `docs/relatorio/Relatório Parcial - Grupo 11.docx.pdf` com `docs/relatorio/parcial.md`.
Diagnóstico: não havia arquivo `.docx` nem versões V1/V2/V3 em `docs/relatorio/`; o arquivo disponível, apesar do nome, é um PDF e foi preservado. A fonte de verdade permanece o Markdown. Foram encontradas aproximadamente dez diferenças relevantes, predominantemente pré-textuais, omissões e conteúdo desatualizado.
Resultado: nenhuma alteração foi incorporada ao Markdown. O PDF mantém informação anterior à baseline de 27/08/2026, ao declarar a versão executável como pendente e omitir os módulos sintéticos funcionais de Captação e Matrículas. Também contém capa/ficha com nomes de integrantes, indicação incorreta de Projeto Integrador IV e lista de ilustrações sem relação com este relatório. Resumo e palavras-chave ficaram pendentes de revisão humana, pois refletem o estado anterior do protótipo. Não houve alteração em DOCX/PDF, modelos oficiais, código, dados, decisões ou deploy. Nenhum commit ou push realizado.
Arquivos alterados: `docs/run_log.md`.

---

Data: 2026-09-29
Ação realizada: criação do snapshot formal `docs/relatorio/Relatorio_Parcial_V1.md` a partir de `docs/relatorio/parcial.md`.
Resultado: V1 criada como cópia fiel da fonte de verdade; o PDF colaborativo antigo foi preservado e nenhuma versão anterior foi sobrescrita. A ADR-001 passou a registrar que futuras correções ocorrem primeiro no Markdown-fonte e geram snapshots V2, V3 e seguintes.
Arquivos alterados/criados: `docs/relatorio/Relatorio_Parcial_V1.md`, `docs/decisions.md` e `docs/run_log.md`. Nenhum DOCX/PDF foi gerado, modificado ou sobrescrito; nenhum commit ou push realizado.

---

Data: 2026-09-29
Ação realizada: preparação exclusiva da seção 2.5, “Resultados preliminares: solução inicial”, para capturas do protótipo acadêmico.
Resultado: confirmadas as páginas ativas `/captacao` e `/matriculas` e a página inicial com o plano de rollout; foram preparados cinco placeholders de figuras, sem inserção de imagem. Captação e Matrículas são apresentadas como Fase 1 funcional com dados sintéticos; fases posteriores e validação com a comunidade permanecem planejadas. Nenhuma alteração funcional foi realizada.
Arquivos alterados: `docs/relatorio/parcial.md` e `docs/run_log.md`. Nenhum commit ou push realizado.

---

Data: 2026-09-29
Ação realizada: revisão final dos cinco placeholders de figuras da seção 2.5 e criação do snapshot `docs/relatorio/Relatorio_Parcial_V2.md`.
Resultado: os placeholders foram tornados mais prescritivos para a captura manual; V2 foi criada como cópia fiel de `docs/relatorio/parcial.md`, e V1 foi preservada. Nenhuma imagem, alteração funcional, DOCX ou PDF foi inserido ou gerado.
Arquivos alterados/criados: `docs/relatorio/parcial.md`, `docs/relatorio/Relatorio_Parcial_V2.md` e `docs/run_log.md`. Nenhum commit ou push realizado.

---

Data: 2026-10-01
Ação realizada: V3 — ajustes mínimos após auditoria do feedback da orientadora.
Resultado: expandida a primeira ocorrência de CRM e esclarecida a ocorrência de RA como Registro
Acadêmico. A busca documental não encontrou períodos históricos reais autorizados para Google Ads,
Meta Ads ou conteúdo orgânico; a pendência permaneceu explicitamente delimitada no relatório, sem
inserção de datas. Nenhum outro conteúdo foi alterado; V1 e V2 foram preservadas e V3 permanece a
versão corrente de revisão. Nenhum DOCX/PDF, código, dataset, decisão, commit ou push foi alterado.

Data: 2026-10-01
Ação realizada: V3 — preparação editorial para montagem manual do DOCX.
Resultado: conteúdo vigente foi demarcado nos pontos de risco, notas históricas foram classificadas
como não copiar, placeholders como ação manual e URLs de captura como não copiar. O checklist manual
foi consolidado ao final do relatório; V3 permanece corrente.

---

Data: 2026-10-06
Ação realizada: Início da estruturação do Relatório Final.
Modelo final inspecionado: `docs/migracao-modelo/referencias/Modelo_Relatorio_Final.docx`,
confirmado como idêntico ao modelo oficial preservado em `docs/univesp/Modelo_Relatorio_Final.docx`.
Também foram verificadas as orientações oficiais em `docs/univesp/`, incluindo a estrutura e a
rubrica específicas do Relatório Final e a exigência regulamentar de TCLE na versão final quando
houver coleta de informações, opiniões ou imagens de terceiros.
Resultado: criado `docs/relatorio/final.md` como nova fonte editorial do Relatório Final. Foram
reaproveitados do Relatório Parcial o contexto, a introdução, os objetivos, a justificativa, a
fundamentação teórica, a metodologia, o contato inicial com a comunidade e os resultados técnicos
comprovados da Fase 1. Foram acrescentados placeholders explícitos para validação, feedback,
comparação entre necessidades iniciais e avaliação final, ajustes, resultados técnicos ainda não
obtidos, figuras, considerações finais, TCLE e apêndices.
Integridade: nenhuma validação, entrevista, aprovação, satisfação, impacto, resultado de uso,
resultado de aprendizagem de máquina ou período histórico foi inventado. O Relatório Parcial e
suas versões V1, V2 e V3 foram preservados; o modelo DOCX foi preservado. Nenhum código, dataset,
feature gate, deploy ou configuração da Vercel foi alterado. Nenhum DOCX/PDF foi gerado. Nenhum
commit ou push foi realizado.
Arquivos alterados nesta execução: `docs/relatorio/final.md`, `docs/decisions.md` e
`docs/run_log.md`.

---

Data: 2026-10-06
Ação realizada: Auditoria inicial do Relatório Final.
Consistência das fases: corrigida a regressão que apresentava Sincronização Estrutural como Fase 5;
o relatório volta a representar quatro fases, mantendo Objetivo da Gestão e Arquitetura & Algoritmos
como componentes da Fase 4. A Fase 1 permanece ativa/funcional e as Fases 2 a 4,
planejadas/bloqueadas.
Placeholders: revisados os sete placeholders existentes; os de testes finais e validação foram
marcados explicitamente como dependentes de etapas futuras. Nenhum placeholder foi excluído.
Resultados antecipados: não foram encontradas afirmações indevidas de validação, feedback, impacto,
testes finais, aprendizagem de máquina, IA aplicada ou módulos planejados concluídos.
Correções realizadas: somente numeração/descrição das fases e estado dos dois placeholders futuros.

---

Data: 2026-10-06
Ação realizada: Preparação da validação com a comunidade.
Instrumentos criados: README, roteiro de validação, instrumento breve, protocolo de evidências e modelo de registro de respostas em `docs/validacao/`.
Integridade: nenhuma resposta, feedback ou resultado foi preenchido ou inventado. A anonimização foi adotada; quando preenchido, o TCLE deve permanecer fora do Git em armazenamento restrito. Nenhuma alteração funcional foi realizada.

---

Data: 2026-10-06
Ação realizada: Atualização acadêmica por referência técnica e experimento Google Ads CPR.
Preflight: HOST DESKTOP-VU6VMS6; ambos em dev; Node v24.14.1 e npm 11.11.0. HEAD acadêmico
47e499e64eeaee2cca59bab793864c8b7571521f, com alterações documentais anteriores preservadas.
A referência iniciou em a9c6c25ce234341fd8b5fdd7d33bb013b053e884 com alterações locais e passou,
por commit externo durante a leitura, a edfa12451ccca19edf1d845960cf664bc153dee1 limpo. Os 304
arquivos técnicos conferidos mantiveram os hashes iniciais até esse corte; esta execução não escreveu na referência.
Na verificação final, foram observadas novas alterações externas de investimento por ciclo:
309 arquivos técnicos, sete deltas de código (incluindo cinco arquivos novos). O núcleo e sua
integração foram auditados e classificados separadamente, sem ingerir os artefatos operacionais;
a implementação acadêmica permanece vinculada ao corte registrado, não a sincronização contínua.
Auditoria: registrados preflight, comparação por data, 454 caminhos alterados, inventário de
232 caminhos técnicos, matriz de relevância e seleção. A origem exata da baseline anterior não
tinha SHA registrado; isso permanece explícito. Sinalizada revisão de parâmetros operacionais
no documento técnico legado, sem transportar seus valores para a nova implementação.
Implementação: contratos puros de métricas, cenário Ads gerado do zero, quatro interfaces
reduzidas preparadas atrás do gate e experimento local de CPR. ML restrito ao Google Ads,
registrado na ADR-007; features t−2 disponíveis na emissão, split temporal, purga de targets
imaturos, scaler apenas no treino, OLS e baseline de persistência. Seed documentada.
Resultados sintéticos executados: 198 amostras de treino e 71 de teste; regressão linear
MAE 5,853007, RMSE 7,673297 e R² 0,097625; persistência MAE 6,615678, RMSE 8,363078 e
R² −0,071903. Resultados não representam eficácia real ou feedback da comunidade.
Fase 1: filtros deduplicados, limite de atribuição explícito e rótulo participação de
rematrículas corrigido; safras indeterminadas não alimentam composição. Datasets existentes
preservados. Governança e sincronização descritas como processos, mantendo quatro fases funcionais.
Verificação: npm test (fases, determinismo, ML, reprodução e não vazamento), lint, TypeScript
e build passaram. HTTP local confirmou Fase 1 com 200 e fases bloqueadas com 404; filtros
repetidos conservam indicadores e a primeira safra não apresenta composição inventada.
Integridade: feature gates, relatórios Parcial/Final, versões históricas, modelos oficiais e
instrumentos de validação preservados. Sem dados reais, segredos ou PII nos novos artefatos;
sem API operacional, deploy, DOCX/PDF, commit ou push feitos por esta execução.

---

Data: 2026-10-06
Ação realizada: Gate técnico-documental pós-migração e ML CPR.
Arquivos alterados: legado técnico de Ads; final.md; auditoria da referência; documentação do
experimento; User-Agent do script bibliográfico (remoção de contato institucional); este registro.
Resultado: legado atual substituído por síntese conceitual sem parâmetros operacionais; método,
CPR, controles de leakage e resultados sintéticos integrados pontualmente ao Final. Experimento
CLI reproduzido com 198 amostras de treino e 71 de teste: persistência MAE 6,615678, RMSE 8,363078,
R² −0,071903; regressão MAE 5,853007, RMSE 7,673297, R² 0,097625. Ganho modesto, sem eficácia real
presumida. Fase 1 funcional, Fases 2–4 bloqueadas e validação comunitária ainda pendente.
Verificação: ml:google-cpr, ml:google-cpr:verificar, npm test (inclui 37 verificações de não
vazamento), lint, TypeScript e build passaram. Busca ampliada em texto, nove DOCX e seis PDFs
não encontrou credenciais ou identificadores operacionais no conteúdo atual; três páginas
normativas sem texto extraível limitam a checagem textual. Modelos, Parcial e versões, instrumentos
de validação, código da aplicação, gates e artefatos sintéticos preservados. ADR-007 consistente,
sem alteração. Sem validação inventada, API operacional, DOCX/PDF novo, deploy, commit ou push.
Decisão do gate: BLOQUEADO POR SANITIZAÇÃO. As versões antigas com parâmetros operacionais
(6095a9b) e contato institucional (9ef8af9) continuam no histórico Git; a correção atual não os apaga.
Próximo passo: revisão humana e decisão específica sobre tratamento do histórico antes da liberação.

---

Data: 2026-10-06
Ação realizada: Ativação acadêmica da Fase 2 — Ads.
Resultado: gate central liberado explicitamente para /ads, /ads/google, /ads/meta e /ads/estrategia.
Sidebar e navegação mobile derivam do catálogo existente, com agrupamento Ads no desktop;
home ajustada para os seis módulos. Identidade acadêmica, tema e instituição fictícia preservados.
Dados: contratos e datasets sintéticos existentes reutilizados sem alteração; nenhuma API real.
Google apresenta indicadores, filtros de ano-calendário/campanha e artefato de CPR da CLI;
Meta mantém conversas/interações separadas e ausência explícita. Estratégia é determinística,
com premissa mensal fictícia de R$ 10.000, sem recomendação ou execução de campanhas.
ML: métricas de persistência e regressão reproduzidas e exibidas somente em Google Ads;
sem treinamento no navegador, com aviso de ganho modesto e baixo poder explicativo.
Verificação: ml:google-cpr, ml:google-cpr:verificar, npm test (58 testes de fases, determinismo,
CPR e 37 verificações de não vazamento), lint, TypeScript e build passaram. Build local iniciado
em 127.0.0.1:3100; seis rotas ativas com HTTP 200, /organico, /gestao e /arquitetura com HTTP 404.
Navegador: grupo Ads visível, filtros alteram indicadores e preservam métricas fixas de ML;
sem erros de console observados. Prévia visual mantida fora do repositório.
Documentação: Final atualizado somente tecnicamente após testes; emenda de estado na ADR-006
e ADR-A001, com método e não objetivos da ADR-007 preservados. Contexto e protocolo alinhados.
Integridade: instrumentos de validação, Parcial e versões históricas, modelos e dados preservados;
nenhuma validação, resposta, feedback ou impacto inventado. Fases 3 e 4 permanecem bloqueadas.
Gate: FASE 2 ACADÊMICA PRONTA PARA VALIDAÇÃO LOCAL. Instrumento atual cobre somente a Fase 1.
O bloqueador anterior de sanitização do histórico Git não foi tratado nem revogado; esta liberação
é exclusivamente local e não autoriza publicação do histórico. Sem deploy, commit ou push.
Próximo passo: revisão humana da aplicação local; decidir separadamente se o instrumento será ampliado.

---

Data: 2026-10-06
Ação realizada: Versionamento da interface acadêmica — criação de V1 e base V2.
Resultado: V1 congelada como baseline pré-validação; V2 criada por herança equivalente, sem
melhoria ou feedback inventado. Roteador versionado comum, canônicas com redirect 307 para
CURRENT_UI_VERSION=v1, filtros preservados, identificação discreta e navegação dentro da versão.
Dados, contratos, algoritmos, métricas, seed e artefato CPR compartilhados, sem duplicação.
Proteção: 17 fontes de apresentação V1 verificadas por hashes normalizados, sem atualização
automática; mudanças de UX devem substituir apresentações em V2, sem editar a baseline.
Verificação: ml:google-cpr, ml:google-cpr:verificar, npm test, lint, TypeScript, build e não
vazamento passaram. Teste de interface incluído na suíte; 40 verificações HTTP aprovadas em
127.0.0.1:3101, incluindo versões, aliases, filtros, links, paridade e bloqueios. Comparação
adicional confirmou conteúdo principal da V1 igual ao estado anterior nos sete caminhos.
Integridade: 29 arquivos científicos/de dados conferidos por hash permaneceram intactos;
ADR-007 preservada integralmente. Ajustada somente a asserção de caminho do consumidor de ML
após mover sua página para a baseline; treinamento, testes matemáticos e resultados não mudaram.
Documentação: ADR-008 e versoes-interface.md criados; instrumentos registram versão, cenário,
seed e recortes. Primeira sessão deve usar V1; instrumento mantém tarefas da Fase 1, sem avaliar
Ads automaticamente. Final recebeu apenas nota metodológica, sem resultado comparativo.
Fases 1 e 2 ativas em ambas; Fases 3 e 4 bloqueadas. Histórico Git problemático não tratado;
alterações anteriores da working tree preservadas. Sem dados reais, APIs operacionais, PII,
deploy, commit, push, DOCX/PDF ou versão numerada do Relatório Final.
Gate: VERSIONAMENTO PRONTO — VALIDAR V1.
Próximo passo: aplicar primeira sessão real com V1; consolidar feedback antes de alterar V2.

---

Data: 2026-10-06
Ação realizada: Ampliação da validação V1 para Fase 2 acadêmica.
Resultado: V1 permanece baseline e única versão da primeira sessão; tarefas A–E da Fase 1
preservadas, F–K adicionadas para Ads/Google/Meta/Estratégia e comunicação do experimento CPR.
Instrumento com 18 perguntas, sessão de 30–40 minutos, rastreabilidade e matriz antes/depois
com evidências futuras pendentes; compreensão espontânea separada de esclarecimentos.
Nenhuma resposta coletada, participante simulado ou feedback inventado; changelog vazio.
V2 sem alterações, aplicação/dados/ML/CPR/final.md intactos. TCLE antes da coleta, preenchido
fora do Git; registro anonimizado apenas após obtenção efetiva. Sem deploy, commit, push
ou tratamento do histórico Git. Verificação documental: 18 perguntas, 11 tarefas, matrizes
pendentes e changelog vazio; somente os sete arquivos autorizados mudaram entre 137 hashes.
test:interface (17 fontes V1), test:nao-vazamento (37 verificações) e diff --check aprovados;
busca complementar nos documentos alterados sem identificadores ou credenciais encontrados.
Gate: INSTRUMENTO V1 PRONTO PARA VALIDAR FASES 1 E 2.

---

Data: 2026-10-06
Ação realizada: Previsão sazonal experimental de CPR — evolução técnica acadêmica exclusiva V2.
Origem: DEMANDA TÉCNICA/ACADÊMICA DE DEMONSTRAÇÃO DE ML, não feedback comunitário.
Auditado ads-sintetico.json: 292 linhas Google, 73 meses de 2017-01 a 2023-01, 4 campanhas,
284 CPRs individuais fechados, 71 CPRs mensais consolidados, sem duplicidades/mês totalmente
ausente. Novembro/2018 incompleto e janeiro/2023 provisório preservados como ausência.
Novo protocolo local: agregação soma(custo)/soma(conversões), análise descritiva Jan–Dez,
OLS com calendário cíclico/tendência/CPR t−2 e t−12, scaler só no treino e maturação sintética.
Treino inicial: 44 amostras até 2021-11; holdout recursivo de 12 meses em 2022, com origem fixa
e ponte explícita para dezembro/2021 imaturo. Persistência: MAE 6,563180/RMSE 13,132417;
sazonal: 9,200559/15,375354; OLS: 7,575144/14,257769/R² −0,275481.
OLS supera t−12 (MAE −17,67%, RMSE −7,27%), mas não persistência t−2.
Rolling origin complementar: OLS MAE 6,335071/RMSE 12,541304/R² 0,013138; sem eficácia real.
Reajuste final em 57 meses elegíveis; previsão recursiva 2023-02 a 2024-01, com ponte de
2023-01 apenas estimada, nunca observada. Sem crescimento imposto ou intervalo de confiança.
Novo JSON determinístico: google-cpr-sazonal.json; SHA256
81e3917fcba921f3fd4bc50324debd0063210193ca294e22e91132f43fd64bbf.
Pipeline executado duas vezes por CLI, artefato byte a byte verificado; fonte e artefato antigos
preservados por hash. Comandos anteriores continuam reproduzíveis, sem modificar gerador/seed.
V2/Google acrescenta gráficos histórico/previsão e índice sazonal, métricas e avisos; V1 e seus
17 hashes protegidos intactos. Testes de herança revisados para única extensão V2 autorizada,
não removidos; inventário de não vazamento estendido ao quinto artefato com controle de PII.
Passaram: ML anterior/novo e verificadores, npm test, lint, TypeScript, build e 38 checks de
não vazamento. 40 checks HTTP locais aprovados, incluindo V1/V2 Google 200, extensão somente
V2, painel original preservado com filtros, canônicas V1 e Fases 3/4 em 404.
Navegador: dois gráficos renderizados e sem erros de console; captura técnica em outputs/
cpr-sazonal-v2.png, ignorada no Git, sem atribuição comunitária.
Metodologia e resultados técnicos incorporados pontualmente no Final; ADR-008/contexto e
versões registram a origem técnica e o cuidado com novo conteúdo científico na comparação.
ADR-007, Parcial e versões históricas intactos; primeira sessão segue V1 e instrumentos não
receberam resultados. Nenhum repositório real acessado, API, dado real, PII ou credencial.
Sem deploy, commit, push, DOCX/PDF ou tratamento do histórico Git. diff --check aprovado.
Gate: PREVISÃO SAZONAL CPR PRONTA PARA DEMONSTRAÇÃO NA V2.
Limite: demonstração válida frente a t−12, não superioridade geral nem previsão operacional.

## Registro da primeira validação real da V1 — P1

Seis respostas reais de P1 registradas em `docs/validacao/respostas/v1-p1.md`: três avaliações
5/5; preferência por gráficos temporais; observação sobre gráficos em diversos lugares; sugestão
de gráfico combinado de contatos, visitas e matrículas com seleção de séries. Perfil, data,
modalidade e condição do TCLE permanecem pendentes de confirmação. A interpretação do grupo
aguarda demais participantes. Nenhuma alteração funcional foi executada e nenhum resultado foi
incorporado ao Relatório Final. Sem dados pessoais, commit, push ou deploy.

---
