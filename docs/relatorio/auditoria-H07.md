# Auditoria H07 — integração curricular coletiva

Data: 2026-10-08. **H07 RESOLVIDA.**

**Gate: H07 RESOLVIDA — NÃO RESTAM BLOQUEADORES CIENTÍFICOS DE CONTEÚDO**, no escopo de H07 e considerando H08/H12 previamente resolvidas. Este gate não certifica conclusão das demais tarefas formais de entrega.

## Critério vigente e correção metodológica

Por determinação explícita do responsável pelo projeto, a aplicação das disciplinas é avaliada em nível coletivo. O grupo inclui estudantes de Ciência de Dados e Engenharia de Computação, conforme confirmação humana externa ao repositório já fornecida. Não há matriz curricular única nem necessidade de vincular disciplina a pessoa. Foram removidas as exigências anteriores de curso/matriz de Rafael, respostas individuais, histórico escolar e comprovação de matrícula. Nenhuma pergunta individual é necessária para H07.

São necessários e suficientes nesta auditoria: disciplina em matriz oficial de pelo menos um dos cursos representados; previsão curricular anterior ou concomitante ao PJI410; conteúdo diretamente relacionado nas ementas; atividade efetivamente executada e documentada no PI. A redação usa integração de conhecimentos curriculares do grupo, sem dizer que todos cursaram determinada disciplina. Isso não é prova de histórico escolar individual e não será apresentado como tal.

A/B/C agora designam, respectivamente, vínculo forte, aceitável e fraco entre currículo e aplicação. Os critérios e bloqueios das rodadas anteriores foram substituídos; o histórico das versões permanece no Git. Ausência de material didático específico não constitui bloqueador e não autoriza inventar consulta.

## Fontes oficiais e recorte temporal

1. [Plano de Ensino de PJI410](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/PJI410.html): confirma **Projeto Integrador em Computação IV**, os dois cursos e os eixos de resolução de problemas, análise de dados, aprendizagem de máquina e interface de visualização. O plano inclui nuvem/IoT, mas isso não será apresentado como implementação executada no projeto.
2. [PPC dos cursos de Computação, versão com códigos revisados](https://univesp.br/sites/58f6506869226e9479d38201/assets/6012ad8f7c1bd13535c41a85/PPC-BTI_C_digos_Revisados.pdf): grades completas de Ciência de Dados e Engenharia de Computação (§§2.10.6/2.10.7, páginas numeradas 23–27), ementas §6 e PJI410 no 7º semestre/bimestres 13–14 em ambos os cursos.
3. [PPC 2020 já catalogado](https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BTI.pdf): mesmas posições curriculares pertinentes, mas com códigos incompletos/anteriores. A revisão de códigos e o Plano de Ensino fundamentam a identificação de PJI410; PJI310 é o componente III anterior, não o atual.
4. [PPC 2026 de Ciência de Dados](https://apps.univesp.br/manual-do-aluno/assets/PPC/ciencia-de-dados/PPC-BCD-2026.pdf), já consultado: possui Estatística Aplicada e uma organização de Projetos Integradores Extensionistas. Não foi tomado como substituto automático da sequência PJI410 nem usado para trocar nomes da matriz correspondente ao componente atual. O ano civil da execução não determina a matriz. O recorte adotado é a sequência oficial que identifica PJI410, considerando conjuntamente as duas grades e sem atribuição individual.

Foram percorridas ambas as grades até o 7º semestre. Não se extrai uma lista de todos os componentes; somente os de relação concreta foram classificados abaixo. Todas as oito disciplinas mantidas precedem PJI410. Componentes posteriores, disciplinas de outra trilha sem presença nas duas grades e conteúdos sem aplicação foram excluídos.

## Disciplinas auditadas: curso, período, ementa e artefato

CD = Ciência de Dados; EC = Engenharia de Computação. S = semestre; b = bimestre. Posições referem-se ao PPC com códigos revisados. Evidência de aplicação corresponde ao código/documentação versionados, não ao simples armazenamento de um material.

| Disciplina oficial | Curso/período até PJI410 | Conteúdo curricular relacionado | Aplicação e evidência concreta | Grau / decisão |
|---|---|---|---|---|
| Algoritmos e Programação de Computadores I | CD/EC, S2/b3 | Funções, operações e estruturas de controle | Funções determinísticas e geradores em src/lib/sintetico e src/lib/ads | A; omitida para evitar duplicação com II |
| Algoritmos e Programação de Computadores II | CD/EC, S2/b4 | Módulos, arquivos, JSON, Git e testes | Separação em funções/módulos, leitura/escrita de JSON, scripts e versionamento | A; mantida |
| Estatística e Probabilidade | CD/EC, S3/b6 | Estatística descritiva e organização de dados | Agregações e indicadores em src/lib/ads/metricas.ts, captacao-data.ts e matriculas-data.ts; descrição de séries | A; mantida, sem alegar inferência populacional |
| Banco de Dados | CD/EC, S4/b7 | Modelagem e sistemas de banco de dados | Uso de arquivos JSON sem implementação relacional, SQL ou SGBD demonstrada | C; excluída |
| Desenvolvimento Web | CD S4/b8; EC S6/b12 | Aplicações web, frontend e componentes | package.json, src/app, src/components e src/ui: Next.js, React e TypeScript | A; mantida |
| Engenharia de Software | CD/EC, S5/b9 | Arquitetura, testes e gerência de configuração/liberação | src/lib/fases.ts, gate-servidor.ts, divisão cálculo/apresentação, scripts/test-*.mjs, Git e ADRs | A; mantida |
| Introdução à Ciência de Dados | CD, S4/b8 | Preparação/pré-processamento, experimentos e resultados | src/lib/ads/dados.ts, metricas.ts, google-ml.ts e protocolos: ausências, elegibilidade e organização experimental | A; mantida; não implica uso de pandas, NumPy, Jupyter ou k-NN |
| Modelagem e Inferência Estatística | CD, S5/b9 | Regressão e avaliação de ajuste | treinarLinear e avaliação quantitativa em src/lib/ads/google-ml.ts e google-sazonal.ts | A no recorte de regressão; omitida por sobreposição com ML/estatística |
| Visualização Computacional | CD, S6/b11 | Gráficos tabulares, filtros e agregação | src/components/graficos.tsx, src/ui/v2/components/evolucao-temporal.tsx e graficos-cpr-sazonal.tsx | A; mantida |
| Aprendizado de Máquinas | CD, S6/b12 | Tarefas de aprendizagem, avaliação e comparação de modelos | google-ml.ts, google-sazonal.ts, scripts experimentais/testes e protocolos CPR: regressão, baselines, cortes temporais, leakage, MAE/RMSE/R² e previsão sazonal experimental | A; mantida, sem domínio avançado/eficácia operacional |
| Interface Humano-Computador | EC, S6/b12 | Projeto de interfaces, interação e avaliação de usabilidade | registros V1/P1 e V2/P1, evolução temporal V2 e scripts/test-v2-feedback.mjs | A; mantida; não generaliza P1 a todos os usuários |
| Plataforma de Ingestão e Análise de Dados | EC, S6/b11 | Coleta/análise em IoT e integração a nuvens | Arquivos sintéticos locais não demonstram dispositivos IoT ou plataforma de ingestão em nuvem | C; excluída |
| Projeto e Análise de Algoritmos | EC, S7/b13 | Técnicas de projeto e análise de algoritmos | Rotinas comuns não demonstram análise de complexidade, algoritmos gulosos, programação dinâmica ou análise formal executada | C; excluída |
| Estruturas de Dados | CD/EC, S3/b5 | Estruturas específicas e algoritmos de manipulação | Arrays/objetos e agrupamentos comuns não individualizam esse conteúdo | C; excluída |
| Fundamentos de Internet e Web | CD/EC, S2/b4 | Fundamentos da web | Aplicação web existente; relação menos específica que Desenvolvimento Web | B; omitida por sobreposição |
| Geometria Analítica e Álgebra Linear | CD/EC, S5/b10 | Operações vetoriais/matriciais | Solver QR local no treino linear | B; omitida por ser instrumental e já tratada no experimento |
| Impactos da Computação na Sociedade | CD S7/b13; EC S9/b17 (fora do corte em EC) | Questões éticas/sociais da computação | Decisões de dados sintéticos, proteção de informações e supervisão humana | B pelo recorte de responsabilidade; omitida da lista prioritária, práticas preservadas na metodologia |
| Redes Neurais / Aprendizado Profundo | CD, S7/b13 e b14 | Redes e aprendizagem profunda | Experimentos executados usam regressão linear e baselines | C; excluídas |
| Visão Computacional | CD, S7/b14 | Processamento/análise de imagens | Dashboards não constituem visão computacional | C; excluída |
| Aplicações em Aprendizado de Máquina | Outra trilha do BTI no PPC; não consta das grades CD/EC adotadas | Nome oficial, mas falta pertinência a essas grades | Artefatos de ML existem, porém não autorizam escolher componente de outra trilha | Excluída por recorte curricular; substituída por Aprendizado de Máquinas |
| Projeto Integrador em Computação IV — PJI410 | CD/EC, S7/b13–14 | Integração, resolução de problemas, dados, ML e visualização | Plano de Ação, seção 2.5, aplicação e experimentos executados | A; base integradora explicada na abertura, sem ampliar a tabela de oito disciplinas |

Modelagem e Inferência Estatística não é mais classificada como fraca apenas pela ausência de inferência populacional: a regressão linear executada é aplicação concreta de parte de sua ementa. Foi omitida por economia editorial, não por falta de vínculo. Plataforma de Ingestão e Análise de Dados foi rebaixada de candidata aceitável para C após conferência de sua ênfase em IoT/nuvem. Não se associou automaticamente armazenamento JSON a Banco de Dados.

## Planos de Ensino consultados

Além de PJI410, foram conferidos os planos oficiais de [COM110](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM110.html), [COM120](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM120.html), [COM320](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM320.html), [COM390](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM390.html), [PES300](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/PES300.html), [COM350](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM350.html), [COM400](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM400.html), [COM410](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM410.html), [COM330](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM330.html), [COM420](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/COM420.html) e [PES310](https://assets.univesp.br/blackboard/plano-de-ensino/disciplinas/PES310.html).

Algumas páginas têm diferenças editoriais de código/grafia em relação ao PPC: COM120 omite II no cabeçalho, mas a grade registra Algoritmos e Programação de Computadores II; o plano de IHC COM330 sustenta o conteúdo que o PPC também descreve em §6.28, enquanto EC na grade usa COM430. A consulta à página COM430 falhou; a ementa no próprio PPC permanece disponível e suficiente. Introdução à Ciência de Dados segue a grafia do plano COM350, com identidade curricular indicada pelo código e pela grade. A seção 2.4 não afirma que todas as tecnologias do projeto foram ensinadas por uma aula específica.

## Redação e fechamento

Selecionadas oito disciplinas A: Algoritmos e Programação de Computadores II; Desenvolvimento Web; Engenharia de Software; Estatística e Probabilidade; Introdução à Ciência de Dados; Visualização Computacional; Aprendizado de Máquinas; Interface Humano-Computador. São conhecimentos curriculares integrados coletivamente, com aplicação limitada aos artefatos observáveis. Não se apresenta catálogo curricular, trajetória individual ou leitura universal de materiais.

A seção 2.4 foi reescrita com contextualização coletiva, base oficial PJI410, tabela disciplina–curso–aplicação e limites dos experimentos. Removido o marcador H07. Há nomes oficiais, posição temporal, conteúdo curricular e aplicação documentada para todas as oito relações. **Não resta confirmação humana necessária para H07 pelo critério vigente.**

Corrigida a identificação do projeto atual para PJI410 — Projeto Integrador em Computação IV no cabeçalho/referência interna do Final e em metadados equivalentes das fontes correntes master_context, questionário, parcial e catálogo de referências. O identificador interno da turma/repositório PIJ410-DRP14-A2026S2-T002 e os nomes de arquivos não foram renomeados. Os snapshots históricos V1/V2/V3 e documentos oficiais permanecem intactos; suas denominações anteriores registram versões históricas e não são adotadas para identificar o componente atual. Não foram alteradas menções curriculares legítimas ao componente III anterior.

O inventário abaixo preserva a distinção entre material consultado/documentado, referência externa e disponibilidade. Seus vínculos não comprovam leitura integral ou uso por todos. A indicação curricular oficial é suficiente para o critério coletivo adotado, mas não transforma bibliografia de ementa em consulta realizada.

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


## Integridade da execução

Ciência de Dados e Engenharia de Computação consideradas conjuntamente. Nenhuma disciplina atribuída a pessoa; nenhuma afirmação de que todos cursaram os mesmos componentes; nenhuma pergunta individual, histórico escolar, telefone, RA ou registro privado utilizado nesta rodada. Confirmação humana agregada dos cursos aceita como contexto. Código, dados, documentos oficiais, snapshots e capítulos substantivos fora de 2.4 preservados; exceções no Final limitadas à identificação factual do componente. Sem geração de DOCX/PDF, commit ou push. H08 e H12 não foram reabertas. Verificação: git diff --check e comparação de escopo das alterações.
