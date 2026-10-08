# Auditoria H07 — disciplinas e materiais

Data: 2026-10-08. Resultado: **AINDA BLOQUEADA — necessária confirmação humana.**

Nota de integração Git em 08/10/2026: a auditoria abaixo registra o estado local anterior ao
merge. A atualização remota acrescenta os registros `docs/validacao/respostas/v1-p1.md` e
`v2-p1-reavaliacao.md` e a implementação do ajuste temporal V2. Com essas novas evidências,
Interface Humano-Computador tem relação explícita com avaliação e ajuste na seção 2.4 integrada
(nível A quanto à aplicação). As descrições de instrumentos apenas preparados abaixo são
históricas. Permanecem sem comprovação a disciplina cursada e o material didático consultado.

## Método

Busca global pelos termos solicitados: 104 arquivos textuais, 72 com ocorrências e 1.400 correspondências antes desta edição. Inventariados e extraídos todos os PDFs e DOCX em `docs/`; consultados relatórios, referências, fichamentos, resumos, run log, decisões, documentação técnica, código pertinente e histórico Git. A extração não verifica layout nem texto presente apenas em imagens. O textconv Git de DOCX está indisponível; os binários foram lidos diretamente.

Os PPCs são referenciados, não armazenados localmente. Conferidos os links oficiais já catalogados, somente para nome/escopo: [PPC 2020](https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BTI.pdf) e [PPC 2026](https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BCD-2026.pdf).

A/B/C avaliam aplicação de conceitos, não matrícula, conclusão ou leitura individual. O run log de 25/08/2026 confirma os cursos do grupo e uma associação editorial aos PPCs; não confirma quais disciplinas foram cursadas ou materiais de aula consultados. Git confirma implementação/documentação, não leitura. Não se encontrou lista confirmada de disciplinas cursadas, nem registro de consulta a aulas técnicas.

## Disciplinas e implementação

| Disciplina oficial | Conceito mobilizado / aplicação | Evidência no projeto | Nível | Material específico comprovado? |
|---|---|---|---|---|
| Aplicações em Aprendizado de Máquina | Regressão linear, baselines, split temporal, MAE/RMSE/R², prevenção de leakage, CPR experimental | Relação explícita na 2.4; `src/lib/ads/google-ml.ts`, `google-sazonal.ts`, protocolos `experimento-google-cpr*.md`, scripts e artefatos | A | Nenhuma aula; documentação scikit-learn usada como referência técnica externa |
| Impactos da Computação na Sociedade | Dados sintéticos, exclusão de PII e supervisão humana | Relação explícita na 2.4, ADR-006/007, contexto e `scripts/test-nao-vazamento.mjs`; nome/escopo no PPC 2026 | A | Não; PPC é fonte curricular |
| Projeto Integrador em Computação III | Planejamento, problema e organização metodológica | Plano de Ação, Final 2.5, orientações e run log | A | Plano de Ação e orientação oficial documentados; não prova leitura de todos nem conclusão do ciclo metodológico |
| Desenvolvimento Web | Next.js/TypeScript, React, componentes e apresentação | `src/app/`, `src/components/`, `src/ui/`; prática descrita na 2.4; PPC 2020 §6.23 | B | Thakkar é referência externa; nenhuma aula comprovada |
| Engenharia de Software | Modularização, versionamento, testes e liberação incremental | `src/lib/fases.ts`, `gate-servidor.ts`, scripts de testes, Git e ADR-008; PPC §6.31 | B | Não |
| Introdução a Ciência de Dados | Preparação e avaliação experimental | `src/lib/ads/dados.ts`, `google-ml.ts`, protocolos; PPC §6.30 | B | Não |
| Estatística e Probabilidade | Agregações, médias, séries e métricas de erro | `metricas.ts`, `google-ml.ts`, `google-sazonal.ts`; PPC §6.16 | B | Não; nenhuma inferência populacional comprovada |
| Visualização Computacional | Gráficos tabulares, filtros e agregação | `src/components/graficos.tsx` e gráficos sazonais; PPC §6.41 | B | Bach é referência externa |
| Interface Humano-Computador | Interface e planejamento de avaliação de usabilidade | Interface, instrumentos de validação, Pinheiro; Dias citados; PPC §6.28 | B | Referência externa; instrumentos não provam validação executada |
| Algoritmos e Programação de Computadores I / II | Funções e rotinas determinísticas | Métricas e geradores; PPC §§6.7/6.10 | B | Não; não distingue qual das duas originou os conhecimentos |
| Banco de Dados | Apenas candidata; sem banco relacional implementado | JSONs locais e fontes PostgreSQL candidatas; PPC §6.19 | C | Não; JSON não comprova estudo de SQL/modelagem relacional |
| Redes Neurais | Sem aplicação comprovada | Alegação genérica na 2.4; experimentos usam OLS | C | Não |
| Aprendizado Profundo | Sem aplicação comprovada | Alegação genérica na 2.4; sem rede implementada | C | Não |
| Visão Computacional | Sem aplicação comprovada | Repertório alegado na 2.4; sem processamento de imagens | C | Não |
| Estruturas de Dados | Relação apenas plausível | Arrays/objetos comuns não individualizam a disciplina; PPC §6.13 | C | Não |
| Modelagem e Inferência Estatística | Inferência não demonstrada | Métricas não comprovam inferência populacional; PPC §6.32 | C | Não |

Redes Neurais e Aprendizado Profundo são disciplinas separadas no PPC 2020. Estatística Aplicada aparece na matriz 2026, mas não se adotou como cursada: a matriz do grupo requer confirmação. Não se criou disciplina chamada Análise de Dados, UX, Inteligência Artificial ou Design Thinking para completar quantidade.

## Materiais

Os números remetem a `docs/fichamentos_bibliograficos.md`. Uso editorial registrado não equivale a consulta didática nas disciplinas ou leitura integral por todos. A numeração de seções dos fichamentos reflete parcialmente o Parcial; foi confrontada com o Final.

| Material | Disciplina / relação | Evidência de uso | Classificação |
|---|---|---|---|
| PPC UNIVESP 2020/2026 | Nomes/escopos | Catálogo, fichamentos, resumos, log 25/08 e citações | EMENTA/PLANO DA DISCIPLINA; uso curricular editorial, não prova de aula |
| Plano de Ação preenchido e versões V2/V3 | PI | Tema, problema e planejamento retomados no relatório/log | UTILIZADO E DOCUMENTADO; produzido pelo grupo |
| Orientações para alunos de PI | PI | Final 2.5; ciclo HCD no PDF p. 6 | UTILIZADO E DOCUMENTADO como orientação metodológica |
| Orientações de Avaliação/Entregas, Regulamento e modelos | PI | Rubricas, ADR-001, migração e estrutura editorial | UTILIZADO E DOCUMENTADO como fontes normativas; sem prova de leitura individual |
| Manual do Aluno e Normas Acadêmicas 2018 | Contexto institucional | Inventário, sem vínculo com implementação disciplinar | DISPONÍVEL, MAS USO NÃO COMPROVADO para H07 |
| Thakkar (2020), obra 24 | Desenvolvimento Web | Fichamento e citação na 2.4 | REFERÊNCIA EXTERNA DO RELATÓRIO |
| Jordan; Mitchell (2015), De Mauro; Sestino; Bacconi (2022), obras 40/41 | ML/marketing | Fichamentos e Final 2.3/2.5 | REFERÊNCIA EXTERNA DO RELATÓRIO |
| Bach et al. (2023), Pinheiro; Dias (2023), obras 13/20 | Visualização/IHC | Fichamentos e Final 2.3.6/2.5.5 | REFERÊNCIA EXTERNA DO RELATÓRIO |
| Rosado; Dias (2024), obra 17 | Design Thinking/PI | Fichamento e Final 2.5 | REFERÊNCIA EXTERNA DO RELATÓRIO |
| Saura (2021), Saura; Palos-Sánchez; Suárez (2017), Martins (2019), obras 5/6/8 | Indicadores/marketing | Fichamentos e Final 2.3 | REFERÊNCIA EXTERNA DO RELATÓRIO |
| Lemes; Dias; Oliveira (2023), Foidl et al. (2024), Peng (2011), Wang et al. (2024), obras 9/31/32/34 | Dashboards/dados/reprodutibilidade/agentes | Fichamentos e citações no Final | REFERÊNCIA EXTERNA DO RELATÓRIO |
| Kannan; Li (2017), Li et al. (2016), obras 42/43 | Marketing/atribuição | Fichamentos e Final 2.3 | REFERÊNCIA EXTERNA DO RELATÓRIO |
| scikit-learn — Common pitfalls e referências técnicas dos protocolos CPR | ML | Protocolo declara scaler aprendido só no treino; código segue a regra | UTILIZADO E DOCUMENTADO como referência externa; biblioteca não usada no código |
| Obras candidatas 1–4, 7, 10–12, 14–16, 18–19, 21–23, 25–30, 33, 35–37 | Áreas do catálogo | Fichamentos: candidata/leitura pendente | DISPONÍVEL, MAS USO NÃO COMPROVADO; catalogadas, nem todas em arquivo local |
| Anthropic/OpenAI (2026), obras 38/39 | Ferramentas | Fichadas; menção comercial retirada do Parcial | NÃO RELACIONADO à comprovação disciplinar H07; há registro documental anterior |
| IDEO/HCD e bibliografias dos PPCs | Método/bibliografia curricular | Menção à origem do ciclo e indicação curricular | DISPONÍVEL, MAS USO NÃO COMPROVADO como consulta direta |
| Catálogo, fichamentos e resumos | Registros do projeto | Status/recortes | UTILIZADO E DOCUMENTADO como rastreabilidade editorial |
| Parciais, snapshots, PDF do Parcial, referências legadas e modelos de migração | Fontes editoriais | Migração e log | UTILIZADO E DOCUMENTADO como fontes editoriais; não prova de aula |

Não se localizou acervo de apostilas/slides de disciplinas técnicas com registro de uso. Design Thinking vem da orientação oficial do PI e de referência externa; não é tratado como disciplina autônoma.

## Afirmações da seção anterior

| Afirmação | Julgamento | Tratamento após classificação |
|---|---|---|
| Mais de três disciplinas dos cursos | DEPENDE DE CONFIRMAÇÃO HUMANA | Não afirmar quantidade de disciplinas efetivamente estudadas |
| ML: tarefa supervisionada, treino/teste, modelos e métricas | CONFIRMADA quanto à aplicação | Detalhar apenas experimento CPR |
| Redes Neurais/Aprendizado Profundo amplia compreensão | NÃO COMPROVADA | Retirar mobilização alegada; manter candidatas C neste registro |
| Sem rede neural implementada/validada | CONFIRMADA no escopo | Manter limite |
| Conteúdos constam dos PPCs e são mobilizados conforme dados | PRECISA DE AJUSTE | Separar existência curricular, aplicação e trajetória cursada |
| Visão Computacional contribui para aquisição/preparação/análise visual | NÃO COMPROVADA | Retirar relação; gráficos não são visão computacional |
| Sem módulo visual/imagens institucionais | CONFIRMADA no escopo | Manter delimitação na classificação C |
| Impactos fundamenta anonimização/minimização/supervisão | PRECISA DE AJUSTE | Práticas demonstradas; origem didática e matrícula não comprovadas |
| Next.js/TypeScript, componentes, separação, gates e testes | CONFIRMADA como prática; PRECISA DE AJUSTE na atribuição | Associação B com nomes oficiais |
| Gates como controle de acesso | PRECISA DE AJUSTE | Liberação incremental; não sugerir autenticação |
| Thakkar/SSR para independência operacional | PRECISA DE AJUSTE | Referência externa; independência decorre da implementação/decisões |
| Identificar materiais usados e confirmar disciplinas cursadas | DEPENDE DE CONFIRMAÇÃO HUMANA | Preservar pendência H07 |

Redes neurais, aprendizado profundo e visão computacional não foram excluídos silenciosamente: suas alegações e julgamento estão registrados acima. A redação original permanece no Git anterior à edição, em `docs/relatorio/final.md`, seção 2.4.

## Confirmações indispensáveis

1. Disciplinas oficiais efetivamente cursadas por integrantes que mobilizaram os conhecimentos; matriz/ano e pertinência das associações B. Não afirmar que todos cursaram todas; não publicar dados pessoais.
2. Se houver comprovação de consulta a materiais específicos, registrar título/autor ou aula/semana, disciplina e atividade correspondente. A ausência de aula/apostila comprovada, isoladamente, não impede descrever a aplicação dos conhecimentos. Não confundir ausência de registro com prova de que nenhum material foi consultado, nem escolher bibliografia retrospectivamente para cumprir rubrica.

A rubrica de Avaliação, p. 9, pede mais de três disciplinas estudadas e referências a materiais específicos para pontuação máxima. A falta de aula comprovada não impede descrever aplicação; impede afirmar concluída a confirmação requerida por H07. Referências externas são documentadas como tais.

## Integridade

Escrita restrita à seção 2.4, este registro e run log. Capítulos 3/4, P1, V1/V2, código, dados, figuras e ML preservados. Sem commit/push. Outros marcadores do Final não foram resolvidos nem reclassificados nesta auditoria; não se conclui inexistência de outros bloqueadores científicos.

## Auditoria final após integração — 08/10/2026

**H07 permanece aberta pela falta de confirmação das disciplinas efetivamente estudadas e da matriz aplicável.** A aplicação dos conhecimentos descritos é sustentada pelos artefatos. A falta de apostila/aula específica não é, isoladamente, bloqueador científico dessa descrição. H08 e H12 não foram reabertas.

Nesta rodada foram relidos integralmente 2.4, contexto, regras, decisões e rubrica; pesquisados documentos, fontes, scripts e código; extraído o texto de todos os PDF/DOCX em `docs/`; conferidos inventário, fichamentos, registros V1/P1 e V2/P1, protocolos CPR e histórico Git recente. Extração textual não cobre imagens sem texto pesquisável. Os PPCs oficiais vinculados foram novamente acessados. Não foi encontrado registro suficiente de disciplinas cursadas ou consulta a aulas técnicas. A seção 2.4 e a auditoria anterior não são corroboradores independentes de suas próprias alegações.

### Afirmações vigentes da seção 2.4

| Afirmação | Classificação | Evidência / limite |
|---|---|---|
| Conhecimentos mobilizados relacionados a disciplinas dos PPCs | PARCIALMENTE CONFIRMADA | Nomes/escopos e práticas compatíveis confirmados; origem na formação estudada não comprovada. |
| Relações não comprovam disciplinas cursadas ou materiais consultados | CONFIRMADA no alcance da busca | Cursos declarados no log de 25/08 não identificam disciplinas cursadas. |
| Regressão supervisionada, baselines, split temporal, MAE/RMSE/R² e prevenção de leakage | CONFIRMADA quanto à aplicação | `src/lib/ads/google-ml.ts`, `google-sazonal.ts`, scripts e protocolos CPR; Aplicações em Aprendizado de Máquina: A quanto ao artefato. |
| Previsão experimental sem eficácia operacional ou superioridade geral | CONFIRMADA | Protocolos e resultados sintéticos; inclui experimento sazonal. |
| Ausência de redes neurais/aprendizado profundo implementados | CONFIRMADA no escopo auditado | Experimentos usam regressão linear local e baselines. |
| Next.js, TypeScript, componentes, separação cálculo/apresentação, Git e testes | CONFIRMADA como prática | `package.json`, `src/app`, `src/components`, `src/lib`, scripts e histórico. Desenvolvimento Web/Engenharia de Software: B, sem prova da origem didática. React também consta das dependências/componentes. |
| Gates, liberação incremental e reprodutibilidade | CONFIRMADA | `src/lib/fases.ts`, `gate-servidor.ts`, scripts e protocolos; gates não demonstram autenticação. |
| Associação software pelo escopo/implementação, sem origem didática | CONFIRMADA | PPC 2020 §§6.23/6.31 e artefatos. |
| Thakkar como referência externa, sem comprovar material da disciplina | CONFIRMADA como uso editorial | Fichamento/citação; não prova leitura integral ou por todos. |
| Avaliação e ajuste temporal após feedback de P1 | CONFIRMADA | `docs/validacao/respostas/v1-p1.md`, `v2-p1-reavaliacao.md`, `src/ui/v2/temporal.ts`, `components/evolucao-temporal.tsx`, `pages/captacao.tsx` e `scripts/test-v2-feedback.mjs`. IHC: A para atividade executada. |
| Preparação/agregação, ausências, séries, indicadores e gráficos | CONFIRMADA como prática | `src/lib/ads/dados.ts`, `metricas.ts`, módulos CPR, geradores e gráficos. Introdução a Ciência de Dados/Estatística e Probabilidade/Visualização Computacional: B. |
| Avaliação limitada ao experimento, sem inferência populacional/causalidade | CONFIRMADA | Protocolos e resultados sintéticos. |
| Nome Estatística e Probabilidade no PPC 2020 | CONFIRMADA | §6.16; matriz do grupo DEPENDE DE CONFIRMAÇÃO HUMANA. Não substituir por Estatística Aplicada do PPC 2026 sem confirmação. |
| Dados sintéticos, exclusão de PII/integrações, supervisão humana | CONFIRMADA como decisão/prática | ADR-006/007, contexto, geradores e `test-nao-vazamento.mjs`. Impactos da Computação na Sociedade: B para associação curricular, substituindo A anterior baseado na própria redação. |
| Escopo de Impactos no PPC 2026, sem comprovar disciplina cursada | CONFIRMADA | Ementa COM500 contempla ética/governança; trajetória permanece sem confirmação. |
| PI organiza ouvir/criar/implementar; Design Thinking como abordagem | CONFIRMADA | Orientações, Plano de Ação e 2.5; PI: A. Rosado/Dias é referência externa. |
| Etapas planejadas não equivalem a realizadas | CONFIRMADA como delimitação | Não certifica execução integral do planejamento. |
| Disciplinas efetivamente estudadas e sua matriz | DEPENDE DE CONFIRMAÇÃO HUMANA | PPC, cursos declarados e código não bastam. |

IHC passa a A para avaliação executada, substituindo a descrição histórica de instrumentos apenas preparados. A/B classificam aplicação, não estudo individual. As alegações NÃO COMPROVADAS sobre redes neurais, aprendizado profundo e visão computacional pertencem à seção anterior e continuam excluídas da narrativa vigente.

### Complemento curricular

O PPC 2020 também identifica Aprendizado de Máquinas (§6.42), Fundamentos de Internet e Web (§6.11), Gerência e Qualidade de Software (§6.38) e Plataforma de Ingestão e Análise de Dados (§6.39). Há práticas compatíveis, mas não se individualizou sua mobilização como disciplinas estudadas; não foram acrescentadas nem contadas para completar quantidade. Algoritmos e Programação de Computadores I/II permanecem B para rotinas, sem distinguir a origem entre as duas. As candidatas C da tabela anterior permanecem excluídas. JSON não comprova modelagem relacional; gráficos não comprovam visão computacional. Não foram criadas disciplinas chamadas UX, Análise de Dados, Inteligência Artificial ou Design Thinking.

### Materiais: categorias finais

O inventário detalhado anterior permanece válido, com estas equivalências e limites:

- **USO COMPROVADO:** Plano de Ação, orientações de PI, documentos normativos/modelos e registros editoriais retomados expressamente em metodologia, decisões e log. Uso documental/metodológico, sem prova de leitura por todos; não são apostilas técnicas.
- **EMENTA/PLANO DA DISCIPLINA:** PPCs 2020/2026, consultados como fontes curriculares. Bibliografia indicada no PPC não herda comprovação de consulta.
- **REFERÊNCIA BIBLIOGRÁFICA EXTERNA:** obras citadas/fichadas da tabela anterior. Uso editorial não prova leitura integral. Documentação scikit-learn é referência técnica explicitamente vinculada ao protocolo; a biblioteca não foi usada no código.
- **APENAS DISPONÍVEL:** Manual do Aluno e Normas 2018 no alcance de H07, obras candidatas, IDEO/HCD e bibliografias curriculares sem consulta direta registrada. Disponibilidade pode ser apenas link catalogado.
- **USO PROVÁVEL, MAS NÃO COMPROVADO:** nenhuma aula/apostila técnica individualizada com sustentação suficiente para essa categoria; código compatível não identifica o material consultado.
- **NÃO RELACIONADO:** documentação comercial de ferramentas/agentes como comprovação de disciplina cursada, conforme inventário anterior.

Não foi encontrado acervo de apostilas/slides/videoaulas técnicas acompanhado de registro de consulta. Referências externas não serão convertidas em materiais de aula.

### Confirmação mínima e resultado editorial

Para fechar H07, obter uma relação confirmada pelo grupo com **nome oficial da disciplina estudada, matriz/ano aplicável e atividade em que seus conhecimentos foram mobilizados**, sem atribuir todas a todos. Uma declaração registrada pode atender à lacuna; não se exige publicar histórico acadêmico ou dados pessoais. Material específico somente será incluído com comprovação de consulta associada à atividade.

A exigência de materiais específicos para pontuação máxima da rubrica permanece distinta da suficiência científica da descrição. Não justifica inventar consulta nem bloquear automaticamente a aplicação demonstrada. Ajustado apenas o marcador H07 da seção 2.4 para refletir essa distinção; conteúdo factual preservado. Sem geração de DOCX/PDF, commit ou push.
