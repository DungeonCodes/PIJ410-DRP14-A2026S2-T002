# Referências Bibliográficas

> Registro do levantamento bibliográfico do PIJ410. Este arquivo é a **fonte única** das
> referências do projeto: toda obra citada nos relatórios deve constar aqui, e toda obra
> aqui listada deve ter sido efetivamente localizada — nada é adicionado por inferência.

Norma adotada: **ABNT NBR 6023:2018** (referências) e **NBR 10520:2023** (citações).
Ver `/docs/decisions.md` e `.claude/skills/pesquisa-bibliografica/references/abnt.md`.

## Como usar

Busque com o script do projeto e traga os resultados para cá:

```bash
python .claude/skills/pesquisa-bibliografica/scripts/buscar.py "termo" --desde 2018
```

Regras de manutenção:

* Uma obra só entra depois de localizada em base acadêmica, com DOI ou link verificável.
* O eixo temático amarra a obra a uma seção do relatório — obra sem eixo é obra sem uso.
* Obra descartada não é apagada: vai para a seção de descartes, com o motivo. Isso
  reconstrói o critério de seleção quando o tutor perguntar como as fontes foram escolhidas.
* Referência completa em ABNT fica na última seção, em ordem alfabética, pronta para colar.

## Legenda de status

| Status | Significado |
|---|---|
| `candidata` | localizada na busca, ainda não lida |
| `lida` | texto lido, pertinência confirmada |
| `citada` | já usada no relatório, com citação no texto |
| `descartada` | avaliada e recusada — motivo registrado |

## Eixos temáticos

Os eixos derivam da **hipótese preliminar** registrada em `/docs/master_context.md`. O problema
de pesquisa ainda está **pendente**; estes eixos são provisórios e serão revistos quando o
grupo fechar o tema com a instituição parceira.

| Eixo | Descrição | Seção do relatório |
|---|---|---|
| `E1` | Marketing digital e captação de alunos em instituições de ensino | 2.3 Fundamentação teórica |
| `E2` | Investimento em mídia paga, métricas e retorno | 2.3 Fundamentação teórica |
| `E3` | Dashboards, BI e indicadores para decisão gerencial | 2.3 Fundamentação teórica / Resultados |
| `E4` | Visualização de dados e apoio à tomada de decisão | 2.3 Fundamentação teórica |
| `E5` | Gestão educacional baseada em dados; retenção e evasão | 2.3 Fundamentação teórica |
| `E6` | Design Thinking e metodologia (ouvir, criar, implementar) | Metodologia |
| `E7` | UX/UI, usabilidade e avaliação de interface | 2.3 Fundamentação teórica / Resultados |
| `E8` | Arquitetura front-end, React e renderização no servidor (Next.js) | 2.4 Aplicação das disciplinas / Resultados |
| `E9` | Bancos de dados relacionais, modelagem e desempenho (PostgreSQL) | 2.4 Aplicação das disciplinas / Resultados |
| `E10` | Análise de dados, pipelines e qualidade de dados | 2.4 Aplicação das disciplinas |
| `E11` | Agentes de LLM, memória, engenharia de contexto e apoio controlado a simulações | Metodologia (processo de desenvolvimento) |

Os eixos `E7` a `E10` sustentam o item **"Relação com as disciplinas estudadas"**, que vale
**2,0 pontos** no relatório final e exige conteúdo de *mais de três disciplinas com referência
a materiais específicos*. Sem bibliografia técnica esse item não fecha.

O eixo `E11` é de natureza diferente: descreve **como o grupo organizou o desenvolvimento**
(o scaffolding de contexto em `/docs/` — `master_context.md`, `agent_rules.md`, `decisions.md`,
`run_log.md` — funciona como memória persistente para trabalho assistido por agentes). Isso
pertence à metodologia de desenvolvimento, **não** ao Design Thinking exigido pela rubrica, que
trata do ciclo ouvir/criar/implementar junto à comunidade externa. Não confundir os dois na
redação: são camadas distintas e a banca avalia apenas a segunda.

---

## Acervo

Rodada de buscas em **2026-08-24**, bases Crossref + OpenAlex + Semantic Scholar.
Todos os DOIs abaixo foram testados e resolvem. Termos de busca em `/docs/run_log.md`.

As obras assinaladas como `citada` foram lidas e empregadas no relatório. As demais permanecem
como `candidata`; **ler antes de citar**.

### E1 — Marketing digital e captação de alunos

| # | Obra | Ano | Veículo | Status |
|---|---|---|---|---|
| 1 | LEAL; NASCIMENTO; SOARES NETO — O marketing digital no processo de captação discente de uma IES | 2019 | Cadernos de Gestão e Empreendedorismo | `candidata` |
| 2 | BEZERRA et al. — Estratégias de marketing de relacionamento na captação de clientes de uma IES a distância | 2023 | Ciências Sociais Aplicadas em Revista | `candidata` |
| 3 | CAMPELO et al. — Marketing digital na captação e fidelização de clientes | 2021 | Revista Vox Metropolitana | `candidata` |
| 4 | MANGINI et al. — Plano de Marketing de Serviços Aplicado a Instituição de Ensino | 2018 | Revista Inovação, Projetos e Tecnologias | `candidata` |

A obra 1 é a mais próxima do recorte: captação discente por meio digital, em IES, contexto brasileiro.

### E2 — Mídia paga, métricas e retorno

| # | Obra | Ano | Veículo | Cit. | Status |
|---|---|---|---|---|---|
| 5 | SAURA — Using Data Sciences in Digital Marketing: framework, methods, and performance metrics | 2021 | Journal of Innovation & Knowledge | 470 | `citada` |
| 6 | SAURA; PALOS-SÁNCHEZ; SUÁREZ — Understanding the Digital Marketing Environment with KPIs and Web Analytics | 2017 | Future Internet | 220 | `citada` |
| 7 | SRIRAM et al. — Return on investment and return on ad spend at the action level of AIDA | 2022 | Int. Journal of Internet Marketing and Advertising | 4 | `candidata` |
| 8 | MARTINS — Otimização de campanha publicitária na rede de pesquisa do Google Ads (dissertação, USP) | 2019 | Biblioteca Digital USP | 1 | `citada` |

As obras 5 e 6 são a base conceitual mais forte do acervo para KPIs e métricas de mídia digital. A 8 é a única que trata **Google Ads** diretamente, e é brasileira.

### E3 — Dashboards, BI e indicadores gerenciais

| # | Obra | Ano | Veículo | Status |
|---|---|---|---|---|
| 9 | LEMES; DIAS; OLIVEIRA — Análise do uso de dashboard como apoio à tomada de decisão em instituições de ensino: RSL | 2023 | RENOTE | `citada` |
| 10 | GOMES et al. — Dashboard para Gestão Acadêmica | 2019 | Congresso de Computação e Tecnologias da Informação | `candidata` |
| 11 | ARISTIZÁBAL — Sucesso de sistemas de Business Intelligence: uma abordagem multidimensional (tese, USP) | 2016 | Biblioteca Digital USP | `candidata` |

A obra 9 é revisão sistemática sobre exatamente o cruzamento dashboard × instituição de ensino — ponto de partida natural, e traz outras referências pelo caminho.

### E4 — Visualização de dados e decisão

| # | Obra | Ano | Veículo | Cit. | Status |
|---|---|---|---|---|---|
| 12 | MATHEUS; JANSSEN; MAHESHWARI — Data science empowering the public: data-driven dashboards | 2018 | Government Information Quarterly | 373 | `candidata` |
| 13 | BACH et al. — Dashboard Design Patterns | 2022 | IEEE Transactions on Visualization and Computer Graphics | 143 | `candidata` |
| 14 | SEDRAKYAN; MANNENS; VERBERT — Guiding the choice of learning dashboard visualizations | 2018 | Journal of Computer Languages | 114 | `candidata` |

A obra 13 sustenta decisões de projeto do protótipo; a 14 liga design de dashboard a contexto educacional.

### E5 — Gestão educacional baseada em dados

| # | Obra | Ano | Veículo | Status |
|---|---|---|---|---|
| 15 | OLIVEIRA; MEDEIROS — Modelo de Predição de Evasão Escolar com Base em Dados de Autoavaliação | 2024 | Revista Brasileira de Informática na Educação | `candidata` |
| 16 | LOPES — Avaliação institucional e gestão escolar: o papel dos dados na tomada de decisão | 2025 | Observatório de la Economía Latinoamericana | `candidata` |

### E6 — Design Thinking e metodologia

| # | Obra | Ano | Veículo | Status |
|---|---|---|---|---|
| 17 | ROSADO; DIAS — A Metodologia Design Thinking nas pesquisas científicas | 2024 | Encontros Bibli | `candidata` |
| 18 | SILVA-NETO; LEITE — Design Thinking aplicado como metodologia para solução de problemas no ensino | 2023 | Ciência & Educação (Bauru) | `candidata` |
| 19 | SANTOS et al. — A metodologia Design Thinking: estratégia gerencial para empreendimentos | 2017 | Revista Latino-Americana de Inovação e Engenharia de Produção | `candidata` |

A obra 17 é a mais útil para justificar metodologicamente o uso de Design Thinking em pesquisa acadêmica — que é o que a rubrica cobra.

### E7 — UX/UI e usabilidade

| # | Obra | Ano | Veículo | Status |
|---|---|---|---|---|
| 20 | PINHEIRO; DIAS — Técnicas e métodos de pesquisa de experiência do usuário (UX) | 2023 | Perspectivas em Gestão & Conhecimento | `citada` |
| 21 | RESENDE JÚNIOR; LEITE — Problemas de usabilidade em software de processos administrativos do Governo Federal | 2024 | iSys (SBC) | `candidata` |
| 22 | SILVA; GOMES — Usabilidade para Democracia: avaliação heurística do Portal da Transparência | 2019 | Design Proceedings | `candidata` |

A obra 20 dá o repertório de **métodos de avaliação de UX** — é o que fundamenta a validação do protótipo com a instituição parceira. A 22 é exemplo aplicado de avaliação heurística, útil como modelo de procedimento.

### E8 — Front-end, React e renderização no servidor

| # | Obra | Ano | Veículo | Cit. | Status |
|---|---|---|---|---|---|
| 23 | KALUŽA; VUKELIĆ — Comparison of front-end frameworks for web applications development | 2018 | Zbornik Veleučilišta u Rijeci | 45 | `candidata` |
| 24 | THAKKAR — Building React Apps with Server-Side Rendering (livro; contém capítulo sobre Next.js) | 2020 | Apress | 6 | `candidata` |
| 25 | VYAS — Comparative Analysis on Front-End Frameworks for Web Applications | 2022 | IJRASET | 23 | `candidata` |

A obra 24 é a única do acervo que trata **Next.js** nominalmente, e é livro — fonte confiável pela rubrica. As obras 23 e 25 servem para **justificar a escolha do framework**, que é o tipo de argumentação que a banca espera na seção de resultados.

### E9 — Bancos de dados relacionais e PostgreSQL

| # | Obra | Ano | Veículo | Cit. | Status |
|---|---|---|---|---|---|
| 26 | SALUNKE; OUDA — A Performance Benchmark for the PostgreSQL and MySQL Databases | 2024 | Future Internet | 34 | `candidata` |
| 27 | MAKRIS et al. — MongoDB vs PostgreSQL: a comparative study on performance aspects | 2020 | GeoInformatica | 76 | `candidata` |
| 28 | LEIS et al. — How good are query optimizers, really? | 2015 | Proceedings of the VLDB Endowment | 704 | `candidata` |

A obra 27 é a que **justifica a escolha do relacional** frente ao NoSQL — decisão de projeto que precisa estar argumentada, não apenas declarada. A 28 é referência clássica de otimização de consultas; use se o trabalho discutir desempenho.

### E10 — Análise de dados e pipelines

| # | Obra | Ano | Veículo | Cit. | Status |
|---|---|---|---|---|---|
| 29 | SIVARAJAH et al. — Critical analysis of Big Data challenges and analytical methods | 2016 | Journal of Business Research | 2036 | `candidata` |
| 30 | TSAI et al. — Big data analytics: a survey | 2015 | Journal of Big Data | 807 | `candidata` |
| 31 | FOIDL et al. — Data pipeline quality: influencing factors and root causes of data-related issues | 2023 | Journal of Systems and Software | 41 | `candidata` |
| 32 | PENG — Reproducible research in computational science | 2011 | Science | — | `citada` |

A obra 29 conecta análise de dados a **decisão gerencial**, que é a ponte entre o eixo técnico e o problema do projeto. A 31 é a mais aplicável na prática: trata de qualidade de dados em pipeline, exatamente o risco de integrar dados de plataformas de anúncio.

### E11 — Agentes de LLM, memória e contexto

| # | Obra | Ano | Veículo | Cit. | Revisão por pares | Status |
|---|---|---|---|---|---|---|
| 33 | PARK et al. — Generative Agents: Interactive Simulacra of Human Behavior | 2023 | ACM UIST | 1726 | sim | `candidata` |
| 34 | WANG et al. — A survey on large language model based autonomous agents | 2024 | Frontiers of Computer Science | 1437 | sim | `citada` |
| 35 | LIU et al. — Lost in the Middle: How Language Models Use Long Contexts | 2024 | TACL | 1188 | sim | `candidata` |
| 36 | GAO et al. — Retrieval-Augmented Generation for LLMs: A Survey | 2023 | arXiv | 707 | **não — preprint** | `candidata` |
| 37 | SUMERS et al. — Cognitive Architectures for Language Agents | 2023 | arXiv | 65 | **não — preprint** | `candidata` |
| 38 | ANTHROPIC — Introducing Claude Fable 5 and Claude Mythos 5 | 2026 | documentação técnica oficial | — | não se aplica | `citada` |
| 39 | OPENAI — GPT-5.6 Sol Model | 2026 | documentação técnica oficial | — | não se aplica | `citada` |

**Atenção à rubrica.** A fundamentação teórica zera se as fontes não forem confiáveis, e preprint
não passou por revisão por pares. As obras 33, 34 e 35 são publicadas e sustentam o eixo sozinhas;
prefira-as. As obras 36 e 37 só devem ser citadas se não houver equivalente publicado — e a 37 é
conhecida por ter versão em periódico, que precisa ser localizada antes de citar.

A obra 34 foi lida e citada para delimitar o papel dos agentes como apoio sujeito a controle
humano. As obras 38 e 39 registram, como fontes técnicas — e não como fundamentação teórica — as
configurações de modelos previstas para uso via CLI. A obra 35 permanece candidata e poderá ser
avaliada, antes de eventual citação, para a discussão sobre limites de contexto e organização da
memória.

---

## Lacunas do acervo

Registradas para a próxima rodada:

* **Fonte do ciclo ouvir → criar → implementar.** As Orientações da UNIVESP atribuem o ciclo HCD
  a *Araújo e Garbin (2016)*. Essa obra não apareceu nas buscas por API e precisa ser localizada —
  é a referência que a própria banca usa.
* **Obras metodológicas clássicas.** Severino (*Metodologia do Trabalho Científico*), Gil e o
  toolkit HCD da IDEO são livros; APIs de artigo não os indexam. Buscar em catálogo de biblioteca.
* **Nenhuma obra sobre educação básica.** Todo o eixo E1 trata de ensino superior. Se a instituição
  parceira for de educação básica, o recorte precisa ser complementado.
* **E2 tem pouca literatura brasileira.** As duas obras mais fortes são internacionais. Buscar em
  periódicos nacionais de administração e comunicação.
* **Clássicos de UX são livros.** Nielsen (heurísticas de usabilidade), Norman (*The Design of
  Everyday Things*) e Krug não aparecem em API de artigo. O eixo E7 fica sem sua base canônica
  até que sejam buscados em catálogo de biblioteca.
* **Next.js tem só uma obra, e nenhuma acadêmica recente.** A literatura revisada por pares sobre
  o framework é escassa; documentação oficial não conta como fundamentação. Considerar citar a
  documentação apenas como fonte técnica, distinta da fundamentação teórica.
* **Nada sobre modelagem dimensional.** O eixo E9 cobre desempenho e comparação de SGBD, mas não
  modelagem de dados analíticos (star schema, fato/dimensão), que é o que o protótipo precisa.
* **E11 depende de preprints.** Localizar as versões publicadas de GAO et al. e SUMERS et al.
  antes de citar; ver a ressalva na seção do eixo.

---

## Descartes

| Obra | Motivo do descarte |
|---|---|
| Diversos resultados de "publicidade" e "mídia" (racismo na publicidade, publicidade e educação infantil, revista de moda, webativismo) | Ruído lexical: retornados pelos termos "mídia" e "publicidade", sem relação com investimento em mídia paga |
| Rayyan — a web and mobile app for systematic reviews (25.877 cit.) | Ferramenta de revisão sistemática, não fundamentação; retornado por "systematic review" no termo de busca |
| Resultados de Design Thinking em enfermagem, IoT, embalagem, cinema | Metodologia correta, domínio de aplicação sem relação com o projeto |
| Café com Agroecologia; O ecossistema de startups de software de São Paulo | Sem relação com o problema; retornados por coocorrência de termos genéricos |

---

## Referências em ABNT

Ordem alfabética. Conferir capitalização de títulos antes de colar no relatório: vários
periódicos brasileiros publicam títulos em caixa alta e os metadados reproduzem isso.

ARISTIZÁBAL, Catalina Ramírez. **Sucesso de sistemas de Business Intelligence**: uma abordagem multidimensional. 2016. Tese (Doutorado) – Universidade de São Paulo, São Paulo, 2016. DOI: 10.11606/t.3.2016.tde-18082016-101353. Disponível em: https://doi.org/10.11606/t.3.2016.tde-18082016-101353. Acesso em: 24 ago. 2026.

ANTHROPIC. **Introducing Claude Fable 5 and Claude Mythos 5**. 2026. Disponível em: https://platform.claude.com/docs/es/models/fable-5/introducing-claude-fable-5-and-claude-mythos-5. Acesso em: 25 ago. 2026.

BACH, Benjamin et al. Dashboard Design Patterns. **IEEE Transactions on Visualization and Computer Graphics**, v. 29, n. 1, p. 1-11, 2022. DOI: 10.1109/tvcg.2022.3209448. Disponível em: https://doi.org/10.1109/tvcg.2022.3209448. Acesso em: 24 ago. 2026.

BEZERRA, Maria Luana Gonçalves et al. Estratégias de marketing de relacionamento na captação de clientes de uma instituição de ensino superior à distância. **Ciências Sociais Aplicadas em Revista**, v. 26, n. 46, p. 157-174, 2023. DOI: 10.48075/csar.v26i46.31119. Disponível em: https://doi.org/10.48075/csar.v26i46.31119. Acesso em: 24 ago. 2026.

CAMPELO, Arandi et al. Marketing digital na captação e fidelização de clientes: a visão de alunos do curso de Administração de uma instituição de ensino superior. **Revista Vox Metropolitana**, n. 5, p. 199-213, 2021. DOI: 10.48097/2674-8673.2021n5p14. Disponível em: https://doi.org/10.48097/2674-8673.2021n5p14. Acesso em: 24 ago. 2026.

FOIDL, Harald et al. Data pipeline quality: influencing factors, root causes of data-related issues, and processing problem areas for developers. **Journal of Systems and Software**, v. 207, p. 111855, 2023. DOI: 10.1016/j.jss.2023.111855. Disponível em: https://doi.org/10.1016/j.jss.2023.111855. Acesso em: 24 ago. 2026.

GAO, Yunfan et al. **Retrieval-Augmented Generation for Large Language Models**: a survey. arXiv, 2023. Preprint, não revisado por pares. DOI: 10.48550/arXiv.2312.10997. Disponível em: https://doi.org/10.48550/arXiv.2312.10997. Acesso em: 24 ago. 2026.

GOMES, Robson Ferreira et al. Dashboard para Gestão Acadêmica. **Congresso de Computação e Tecnologias da Informação**, v. 1, n. 21, p. 64-72, 2019. DOI: 10.33911/encoinfo.21.2019.v1.6. Disponível em: https://doi.org/10.33911/encoinfo.21.2019.v1.6. Acesso em: 24 ago. 2026.

GRUPO DO PROJETO INTEGRADOR. **Plano de ação do Projeto Integrador em Computação III**: PIJ410-DRP14-A2026S2-T002. São Paulo: UNIVESP, 2026. Documento interno.

KALUŽA, Marin; VUKELIĆ, Bernard. Comparison of front-end frameworks for web applications development. **Zbornik Veleučilišta u Rijeci**, v. 6, n. 1, p. 261-282, 2018. DOI: 10.31784/zvr.6.1.19. Disponível em: https://doi.org/10.31784/zvr.6.1.19. Acesso em: 24 ago. 2026.

LEAL, Janayna Souto; NASCIMENTO, Kelvys Wlysses Sousa do; SOARES NETO, João Batista. O marketing digital no processo de captação discente de uma instituição de ensino superior. **Cadernos de Gestão e Empreendedorismo**, v. 7, n. 3, p. 52-67, 2019. DOI: 10.32888/cge.v7i3.32200. Disponível em: https://doi.org/10.32888/cge.v7i3.32200. Acesso em: 24 ago. 2026.

LEIS, Viktor et al. How good are query optimizers, really? **Proceedings of the VLDB Endowment**, v. 9, n. 3, p. 204-215, 2015. DOI: 10.14778/2850583.2850594. Disponível em: https://doi.org/10.14778/2850583.2850594. Acesso em: 24 ago. 2026.

LEMES, Thieny de Cássio; DIAS, Marina Oliveira de Souza; OLIVEIRA, Tiago de. Análise do uso de dashboard como ferramenta de apoio a tomada de decisão em instituições de ensino: uma revisão sistemática da literatura. **RENOTE**, v. 21, n. 1, p. 281-290, 2023. DOI: 10.22456/1679-1916.134356. Disponível em: https://doi.org/10.22456/1679-1916.134356. Acesso em: 24 ago. 2026.

LIU, Nelson F. et al. Lost in the Middle: how language models use long contexts. **Transactions of the Association for Computational Linguistics**, v. 12, p. 157-173, 2024. DOI: 10.1162/tacl_a_00638. Disponível em: https://doi.org/10.1162/tacl_a_00638. Acesso em: 24 ago. 2026.

LOPES, Gabriel César Dias. Avaliação institucional e gestão escolar: o papel dos dados na tomada de decisão. **Observatório de la Economía Latinoamericana**, v. 23, n. 1, p. e8826, 2025. DOI: 10.55905/oelv23n1-214. Disponível em: https://doi.org/10.55905/oelv23n1-214. Acesso em: 24 ago. 2026.

MAKRIS, Antonios et al. MongoDB vs PostgreSQL: a comparative study on performance aspects. **GeoInformatica**, v. 25, n. 2, p. 243-268, 2020. DOI: 10.1007/s10707-020-00407-w. Disponível em: https://doi.org/10.1007/s10707-020-00407-w. Acesso em: 24 ago. 2026.

MANGINI, Eduardo Roque et al. Plano de Marketing de Serviços Aplicado a Instituição de Ensino. **Revista Inovação, Projetos e Tecnologias**, v. 6, n. 2, p. 1-15, 2018. DOI: 10.5585/iptec.v6i2.123. Disponível em: https://doi.org/10.5585/iptec.v6i2.123. Acesso em: 24 ago. 2026.

MARTINS, Felipe. **Otimização de uma campanha publicitária na rede de pesquisa do Google Ads utilizando Teoria da Decisão Bayesiana**. 2019. Dissertação (Mestrado) – Universidade de São Paulo, São Paulo, 2019. DOI: 10.11606/d.45.2019.tde-22102019-115749. Disponível em: https://doi.org/10.11606/d.45.2019.tde-22102019-115749. Acesso em: 24 ago. 2026.

MATHEUS, Ricardo; JANSSEN, Marijn; MAHESHWARI, Devender. Data science empowering the public: data-driven dashboards for transparent and accountable decision-making in smart cities. **Government Information Quarterly**, v. 37, n. 3, p. 101284, 2018. DOI: 10.1016/j.giq.2018.01.006. Disponível em: https://doi.org/10.1016/j.giq.2018.01.006. Acesso em: 24 ago. 2026.

OLIVEIRA, Ronei dos Santos; MEDEIROS, Francisco. Modelo de Predição de Evasão Escolar com Base em Dados de Autoavaliação de Cursos de Graduação. **Revista Brasileira de Informática na Educação**, v. 32, p. 1-21, 2024. DOI: 10.5753/rbie.2024.3542. Disponível em: https://doi.org/10.5753/rbie.2024.3542. Acesso em: 24 ago. 2026.

OPENAI. **GPT-5.6 Sol Model**. 2026. Disponível em: https://developers.openai.com/api/docs/models/gpt-5.6-sol. Acesso em: 25 ago. 2026.

PARK, Joon Sung et al. Generative Agents: interactive simulacra of human behavior. In: ACM SYMPOSIUM ON USER INTERFACE SOFTWARE AND TECHNOLOGY, 36., 2023, San Francisco. **Proceedings** [...]. New York: ACM, 2023. p. 1-22. DOI: 10.1145/3586183.3606763. Disponível em: https://doi.org/10.1145/3586183.3606763. Acesso em: 24 ago. 2026.

PENG, Roger D. Reproducible research in computational science. **Science**, v. 334, n. 6060, p. 1226-1227, 2011. DOI: 10.1126/science.1213847. Disponível em: https://doi.org/10.1126/science.1213847. Acesso em: 25 ago. 2026.

PINHEIRO, Gabriela da Silva Santos; DIAS, Célia da Consolação. Técnicas e métodos de pesquisa de experiência do usuário (UX) para avaliação de estudo de usuários da informação. **Perspectivas em Gestão & Conhecimento**, v. 13, n. 2, p. 133-148, 2023. DOI: 10.22478/ufpb.2236-417x.2023v13n2.63290. Disponível em: https://doi.org/10.22478/ufpb.2236-417x.2023v13n2.63290. Acesso em: 24 ago. 2026.

RESENDE JÚNIOR, Sinval Ferreira; LEITE, Letícia Lopes. Um estudo sobre problemas de usabilidade no software de processos administrativos eletrônicos do Governo Federal do Brasil. **iSys: Brazilian Journal of Information Systems**, v. 17, n. 1, 2024. DOI: 10.5753/isys.2024.4141. Disponível em: https://doi.org/10.5753/isys.2024.4141. Acesso em: 24 ago. 2026.

ROSADO, Keila Mara Lara; DIAS, Célia da Consolação. A Metodologia Design Thinking nas pesquisas científicas e a pertinência de sua apropriação pela Ciência da Informação. **Encontros Bibli: Revista Eletrônica de Biblioteconomia e Ciência da Informação**, v. 29, 2024. DOI: 10.5007/1518-2924.2024.e96222. Disponível em: https://doi.org/10.5007/1518-2924.2024.e96222. Acesso em: 24 ago. 2026.

SALUNKE, Sanket Vilas; OUDA, Abdelkader. A Performance Benchmark for the PostgreSQL and MySQL Databases. **Future Internet**, v. 16, n. 10, p. 382, 2024. DOI: 10.3390/fi16100382. Disponível em: https://doi.org/10.3390/fi16100382. Acesso em: 24 ago. 2026.

SANTOS, Pedro Vieira Souza et al. A metodologia Design Thinking: estratégia gerencial para empreendimentos. **Revista Latino-Americana de Inovação e Engenharia de Produção**, v. 5, n. 8, p. 25, 2017. DOI: 10.5380/relainep.v5i7.55490. Disponível em: https://doi.org/10.5380/relainep.v5i7.55490. Acesso em: 24 ago. 2026.

SAURA, José Ramón. Using Data Sciences in Digital Marketing: framework, methods, and performance metrics. **Journal of Innovation & Knowledge**, v. 6, n. 2, p. 92-102, 2021. DOI: 10.1016/j.jik.2020.08.001. Disponível em: https://doi.org/10.1016/j.jik.2020.08.001. Acesso em: 25 ago. 2026.

SAURA, José Ramón; PALOS-SÁNCHEZ, Pedro; SUÁREZ, Luis Manuel Cerdá. Understanding the Digital Marketing Environment with KPIs and Web Analytics. **Future Internet**, v. 9, n. 4, p. 76, 2017. DOI: 10.3390/fi9040076. Disponível em: https://doi.org/10.3390/fi9040076. Acesso em: 24 ago. 2026.

SEDRAKYAN, Gayane; MANNENS, Erik; VERBERT, Katrien. Guiding the choice of learning dashboard visualizations: linking dashboard design and data visualization concepts. **Journal of Computer Languages**, v. 50, p. 19-38, 2018. DOI: 10.1016/j.jvlc.2018.11.002. Disponível em: https://doi.org/10.1016/j.jvlc.2018.11.002. Acesso em: 24 ago. 2026.

SILVA, Marília Gabriella Lima Lira da; GOMES, Paula Priscilla Fagundes Araújo B. Usabilidade para Democracia: avaliação heurística da interface do Portal da Transparência da cidade de Santa Rita - PB. **Design Proceedings**, p. 2727-2737, 2019. DOI: 10.5151/9cidi-congic-6.0076. Disponível em: https://doi.org/10.5151/9cidi-congic-6.0076. Acesso em: 24 ago. 2026.

SILVA-NETO, Sebastião Luiz da; LEITE, Bruno Silva. Design Thinking aplicado como metodologia para a solução de problemas no ensino de Química: um estudo de caso a partir de uma problemática ambiental. **Ciência & Educação**, Bauru, v. 29, 2023. DOI: 10.1590/1516-731320230043. Disponível em: https://doi.org/10.1590/1516-731320230043. Acesso em: 24 ago. 2026.

SIVARAJAH, Uthayasankar et al. Critical analysis of Big Data challenges and analytical methods. **Journal of Business Research**, v. 70, p. 263-286, 2016. DOI: 10.1016/j.jbusres.2016.08.001. Disponível em: https://doi.org/10.1016/j.jbusres.2016.08.001. Acesso em: 24 ago. 2026.

SRIRAM, K. V. et al. Return on investment and return on ad spend at the action level of AIDA using last touch attribution method on digital advertising platforms. **International Journal of Internet Marketing and Advertising**, v. 17, n. 1/2, p. 111, 2022. DOI: 10.1504/ijima.2022.125145. Disponível em: https://doi.org/10.1504/ijima.2022.125145. Acesso em: 24 ago. 2026.

SUMERS, Theodore R. et al. **Cognitive Architectures for Language Agents**. arXiv, 2023. Preprint, não revisado por pares. DOI: 10.48550/arXiv.2309.02427. Disponível em: https://doi.org/10.48550/arXiv.2309.02427. Acesso em: 24 ago. 2026.

THAKKAR, Mohit. **Building React Apps with Server-Side Rendering**. Berkeley: Apress, 2020. DOI: 10.1007/978-1-4842-5869-9. Disponível em: https://doi.org/10.1007/978-1-4842-5869-9. Acesso em: 24 ago. 2026.

TSAI, Chun-Wei et al. Big data analytics: a survey. **Journal of Big Data**, v. 2, n. 1, 2015. DOI: 10.1186/s40537-015-0030-3. Disponível em: https://doi.org/10.1186/s40537-015-0030-3. Acesso em: 24 ago. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Projeto pedagógico dos cursos de Bacharelado em Tecnologia da Informação, Ciência de Dados e Engenharia de Computação**. São Paulo: UNIVESP, 2020. Disponível em: https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BTI.pdf. Acesso em: 25 ago. 2026.

UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO (UNIVESP). **Projeto pedagógico do curso de Bacharelado em Ciência de Dados**. São Paulo: UNIVESP, 2026. Disponível em: https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BCD-2026.pdf. Acesso em: 25 ago. 2026.

VYAS, Rishi. Comparative Analysis on Front-End Frameworks for Web Applications. **International Journal for Research in Applied Science and Engineering Technology**, v. 10, n. 7, p. 298-307, 2022. DOI: 10.22214/ijraset.2022.45260. Disponível em: https://doi.org/10.22214/ijraset.2022.45260. Acesso em: 24 ago. 2026.

WANG, Lei et al. A survey on large language model based autonomous agents. **Frontiers of Computer Science**, v. 18, n. 6, 2024. DOI: 10.1007/s11704-024-40231-1. Disponível em: https://doi.org/10.1007/s11704-024-40231-1. Acesso em: 24 ago. 2026.
