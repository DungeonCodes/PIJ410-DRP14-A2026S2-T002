# Auditoria final de evidências, apêndices, anexos e privacidade — 2026-10-09

Escopo: `docs/relatorio/final.md`, o modelo oficial, os cinco PDFs institucionais em `docs/univesp/`, instrumentos/registros de `docs/validacao/`, questionário inicial, nove capturas em `docs/relatorio/figuras/`, protocolos de ML, código de identidade somente para conferir o rótulo visual, e `docs/run_log.md`. Esta auditoria não compõe o DOCX/PDF, não altera imagens, código, dados ou respostas e não resolve H10.

## Correção da auditoria bibliográfica

O inventário final tem **19** referências: **15 artigos, 1 dissertação e 3 documentos institucionais/internos**. A menção anterior a 16 artigos foi erro aritmético da resposta, não uma vigésima entrada. `auditoria-referencias-final.md` agora explicita a conta. Conferência literal do modelo: “As citações e paráfrases devem ser feitas de acordo com as regras da ABNT 6023, de 2002.” Isso descreve a redação do modelo, não define a norma nesta auditoria; H10 permanece aberta.

## Inventário de evidências

“Citada” significa citada ou incorporada no corpo/estrutura de `final.md`. Instrumentos em branco e artefatos técnicos têm função diferente das respostas primárias. A existência do TCLE preenchido é confirmação humana documentada; o arquivo assinado não foi acessado nem está versionado.

| ID | Evidência | Arquivo fonte | Citada? | Destino | Estado / limite |
|---|---|---|---|---|---|
| E01 | Questionário inicial, 30 perguntas e campos | `docs/questionario_comunidade_externa.md` | Sim | APÊNDICE A | Autêntico; Git registra início em 26/08/2026, antes da V1 de 07/10; transpor só perguntas/campos |
| E02 | Respostas do levantamento inicial | Mesmo arquivo, respostas preenchidas | Sim, em síntese | NÃO INCLUIR | Manter como fonte de rastreio; conteúdo institucional e respostas integrais desnecessários no apêndice |
| E03 | Consentimento das entrevistas iniciais | Confirmação do responsável em `docs/run_log.md`; TCLE assinado fora do Git | Sim | ANEXO A, conforme H11 | Obtido segundo confirmação humana; formulário não conferido nesta auditoria |
| E04 | Instrumento aplicado à V1: 2 tarefas, 6 perguntas | `docs/validacao/instrumento_validacao_v1.md`; `roteiro_validacao.md` | Sim | APÊNDICE B | Perguntas 1–3 escala 1–5, 4–6 abertas; coincide com respostas |
| E05 | Respostas primárias P1/V1 | `docs/validacao/respostas/v1-p1.md` | Sim | CORPO; eventual APÊNDICE D | Uma P1, três notas 5/5 e três respostas abertas; original preservado |
| E06 | Feedback FB-V1-P1-001 e aprovação do grupo | `v1-p1.md`; `versoes-interface.md` | Sim | CORPO | Sugestão de P1 separada da decisão do grupo |
| E07 | V1 e V2, escopo e ordem histórica | `docs/validacao/versoes-interface.md` | Sim | CORPO | V1 pré-Ads; V2 incorpora Ads/ML por evolução técnica e gráfico conjunto por feedback |
| E08 | Perguntas realmente aplicadas na reavaliação V2 | `docs/validacao/respostas/v2-p1-reavaliacao.md` | Sim | APÊNDICE B | Seis perguntas registradas no próprio formulário de respostas; transpor com rótulo próprio |
| E09 | Respostas primárias P1/V2 | Mesmo registro | Sim | CORPO; eventual APÊNDICE D | Mesma P1; texto original e versão normalizada identificados separadamente |
| E10 | Instrumento V2 extenso de 18 perguntas | `docs/validacao/instrumento_validacao_v2.md` | Não como aplicado | NÃO INCLUIR | Documento futuro, distinto da reavaliação V2; não atribuir suas perguntas a P1 |
| E11 | TCLE P1, status | `v1-p1.md`, `v2-p1-reavaliacao.md`, protocolo e run log; assinado fora do Git | Sim | ANEXO A, conforme H11 | `TCLE obtido: SIM`; arquivo assinado não conferido; P1 anonimizada |
| E12 | Critérios/tarefas de validação | `instrumento_validacao_v1.md`, `roteiro_validacao.md`, `protocolo_evidencias.md` | Sim | APÊNDICE C, se não duplicar B | Elaborados pelo grupo; sintetizar apenas o necessário |
| E13 | Capturas V1 Captação e Matrículas | `fig-v1-captacao.png`, `fig-v1-matriculas.png` | Sim | CORPO | Dois PNG reais 1600×900; rótulo lateral da disciplina desatualizado |
| E14 | Gráficos V1 separados | `fig-v1-captacao-graficos-temporais.png` | Sim | CORPO | Três gráficos separados: Contatos, Visitas e Matrículas; rótulo lateral desatualizado |
| E15 | Gráfico V2 consolidado | `fig-v2-captacao-evolucao-temporal.png` | Sim | CORPO | Três séries selecionáveis no mesmo gráfico; rótulo lateral desatualizado |
| E16 | Ads V2, visão geral | `fig-v2-ads-visao-geral.png` | Sim | CORPO | Dados declarados sintéticos; rótulo lateral desatualizado |
| E17 | Histórico/previsão CPR sazonal V2 | `fig-v2-google-cpr-sazonal.png`; `src/data/google-cpr-sazonal.json` | Sim | CORPO | MAE/RMSE/R² e horizonte coincidem com artefato; gráfico distingue observado sintético de previsão |
| E18 | Capturas V2 Google, Meta e Estratégia | `fig-v2-google-ads.png`, `fig-v2-meta-ads.png`, `fig-v2-estrategia.png` | Não | NÃO INCLUIR | Disponíveis; não inserir automaticamente; também exibem rótulo lateral desatualizado |
| E19 | Experimentos CPR e verificadores | `docs/migracao-modelo/arquitetura/experimento-google-cpr*.md`; `src/data/google-cpr*.json`; scripts de teste | Sim | CORPO | Protocolo e artefatos versionados; logs completos não são apêndice obrigatório |
| E20 | Testes técnicos e não vazamento | `docs/run_log.md`; `scripts/test-*.mjs` | Sim | CORPO | Execuções registradas; dumps de terminal desnecessários no trabalho |
| E21 | Uso de IA agêntica | Metodologia e `docs/run_log.md` | Sim | CORPO | Registro metodológico suficiente; conversas/prompts privados não devem ser anexados |
| E22 | Fotografia da sessão presencial | Nenhum arquivo fotográfico localizado no repositório | Não; marcador removido | NÃO INCLUIR | Fotografia de sessão não exigida pelos documentos consultados |
| E23 | Fluxo de arquitetura | Diagrama textual em `final.md` §3.3 | Sim | CORPO | Figura gráfica D04 não existe; fluxo textual já descreve o processo |
| E24 | Modelo oficial, PPCs e obras acadêmicas | `docs/univesp/`, referências bibliográficas | Citados conforme função | NÃO INCLUIR | Não anexar documentos extensos de terceiros sem necessidade/autorização |

## Cadeia de validação comunitária

| Etapa | Evidência disponível | Suficiente? |
|---|---|---|
| Levantamento inicial | Questionário de 30 perguntas, respostas preenchidas, registro histórico e confirmação humana de TCLE | Sim, com restrição: sem data/TCLE assinado acessível no Git |
| V1 | Composição em `versoes-interface.md`, captura e rotas V1 | Sim |
| P1/V1 | Instrumento de 6 perguntas e respostas originais de 07/10/2026 | Sim |
| FB-V1-P1-001 | Perguntas 5–6 de P1/V1; ID e interpretação posterior | Sim |
| Decisão do grupo | `v1-p1.md` e `versoes-interface.md` separam sugestão e aprovação | Sim |
| Implementação V2 | Registro de versões, código de interface, captura do gráfico consolidado | Sim |
| P1/V2 | Seis perguntas/respostas da mesma P1, após ajuste, em `v2-p1-reavaliacao.md` | Sim; individual e exploratória |

O instrumento V2 de 18 perguntas existe, mas foi reservado a uso futuro e não explica as seis perguntas efetivamente registradas na reavaliação. As notas dos dois momentos não foram tratadas como comparação experimental controlada. O relato de “qualidade do lead” permanece percepção de P1, não métrica medida.

## Figuras: existência, versão e integridade

Há **nove** capturas PNG distintas, todas 1600×900; **seis** são referenciadas no corpo. As três não usadas são Google Ads, Meta Ads e Estratégia da V2. As figuras utilizadas aparecem próximas aos trechos correspondentes e as legendas identificam captura da aplicação acadêmica com dados sintéticos. V1 mostra séries temporais separadas; V2 mostra uma visualização com Contatos, Visitas e Matrículas selecionáveis. A figura sazonal reproduz visualmente os valores arredondados do artefato JSON (regressão MAE 7,58; RMSE 14,26; R² −0,275; baseline sazonal MAE 9,20; RMSE 15,38), sinaliza projeção experimental e não mostra intervalo de confiança ou recomendação financeira.

**Inconsistência editorial encontrada:** cinco das seis figuras usadas mostram na barra lateral `PIJ410 — Projeto Integrador em Computação III`; `src/lib/identidade.ts` mantém literalmente essa identificação. O plano oficial e o relatório identificam **PJI410 — Projeto Integrador em Computação IV**. A sexta captura, de CPR sazonal, foi feita com rolagem e não exibe esse rótulo. As três capturas não usadas também o exibem. O problema é de identificação visual; os dados e a distinção V1/V2 continuam verificáveis. Antes da composição final, obter captura fiel com identificação corrigida ou enquadrar a captura de modo transparente para não reproduzir o rótulo incorreto. Esta auditoria não editou imagem nem código.

Não há fotografia da sessão presencial. O Regulamento não a exige. O modelo recomenda imagens, storyboards ou ilustrações da **solução**, já atendidas por capturas; a única menção a foto é a restrição a fotos de crianças/adolescentes sem autorização. H09 não bloqueia a evidência científica.

## Apêndices e anexos

Apêndice é material preparado pelo grupo; anexo é material de terceiros. Os instrumentos e a síntese elaborados pelo grupo estão corretamente previstos como apêndices. O TCLE institucional preenchido, conforme modelo externo, está corretamente previsto como anexo, sujeito à decisão H11.

| Apêndice | Conteúdo | Fonte real | Pronto para transposição? |
|---|---|---|---|
| A | Questionário inicial: 30 perguntas e campos, sem respostas | `docs/questionario_comunidade_externa.md` | Sim, mediante extração dos campos/perguntas |
| B | Instrumento V1 de 2 tarefas/6 perguntas e bloco separado de 6 perguntas P1/V2 | `instrumento_validacao_v1.md`; `respostas/v2-p1-reavaliacao.md` | Sim; não usar o instrumento V2 futuro |
| C | Tarefas/critérios de avaliação e regras de registro | `roteiro_validacao.md`; `protocolo_evidencias.md`; instrumentos | Parcial; decidir se agrega informação além do B |
| D | Síntese anonimizada das respostas V1 e V2 | Dois registros primários P1 | Parcial; decidir nível de transcrição sem duplicar desnecessariamente o corpo |

Respostas completas podem melhorar a rastreabilidade, mas não são necessárias para sustentar as conclusões individualizadas já descritas. Se transpostas, manter V1/V2 separados e preservar a forma original ou assinalar claramente qualquer normalização. Não incluir no Apêndice A as respostas do questionário inicial. Nenhum script, JSON, commit ou log técnico extenso precisa virar referência ou apêndice acadêmico.

| Anexo | Documento | Autoria | Necessário? | Restrição |
|---|---|---|---|---|
| A | TCLE preenchido das entrevistas iniciais e da validação P1 | Modelo UNIVESP; preenchimento das partes | Sim, segundo art. 13 do Regulamento | Assinados fora do Git; orientação institucional necessária sobre entrega privada/publicação e proteção de dados |
| B | “Documentos externos necessários”, sem peça identificada | Terceiros | Não demonstrado | Não anexar PPC, artigos, livros ou documentação extensa apenas por serem citados |

O art. 13 do `docs/univesp/Regulamento_PI.pdf` determina literalmente que o TCLE preenchido conste na versão final do trabalho. A alternativa de mencionar apenas a obtenção no corpo ou anexar só modelo em branco **não satisfaz, isoladamente, essa redação**. H11 permanece para conciliar a entrega institucional do formulário preenchido com a preservação de dados na versão pública. Nenhum TCLE assinado foi consultado, copiado ou adicionado ao Git.

## Correspondência entre afirmação e evidência

| Afirmação empírica | Evidência real | Estado |
|---|---|---|
| Houve levantamento inicial de necessidades | Questionário preenchido, histórico do arquivo e run log | COMPROVADA COM RESTRIÇÃO: registro inicial sem data da sessão no formulário |
| V1 continha Captação/Matrículas, sem Ads | Registro de versões, rotas e capturas V1 | COMPROVADA |
| P1 avaliou V1 presencialmente | Instrumento/respostas P1/V1, data/modalidade no registro | COMPROVADA |
| P1 sugeriu gráfico conjunto selecionável | Respostas V1, perguntas 5–6 | COMPROVADA |
| Grupo aprovou FB-V1-P1-001 | Registros P1/V1 e versões | COMPROVADA |
| V2 implementou gráfico multissérie | Código/registro de versões e captura V2 | COMPROVADA |
| A mesma P1 reavaliou V2 | Seis perguntas/respostas do registro P1/V2 | COMPROVADA |
| Experimentos ML ocorreram e seus valores foram exibidos | Protocolos, scripts, JSONs e captura CPR | COMPROVADA |
| Testes passaram | Run log com comandos/resultados e scripts correspondentes | COMPROVADA COM RESTRIÇÃO: logs brutos completos não anexados |
| TCLE foi obtido nas entrevistas iniciais | Confirmação humana documentada no run log | COMPROVADA COM RESTRIÇÃO: assinado fora do Git |
| TCLE P1 foi obtido | Dois registros `TCLE obtido: SIM`; confirmação humana | COMPROVADA COM RESTRIÇÃO: assinado fora do Git |

## Privacidade e decisões

Nos materiais destinados ao relatório, não foram localizados nome completo de participante externa, CPF, RG, e-mail, endereço, assinatura ou telefone preenchido. O questionário inicial contém a opção genérica “Telefone” para **formato da conversa**, não um número. As capturas mostram apenas dados e identidade fictícios, com aviso de cenário sintético. P1 permanece identificada somente como “Gerente de Marketing”. O risco residual está na futura inserção dos TCLEs preenchidos e na possível transposição integral das respostas iniciais; ambos exigem tratamento editorial. O arquivo do questionário inicial também contém informações contextuais da instituição que não precisam ser reproduzidas no apêndice.

| ID | Estado | Próxima ação |
|---|---|---|
| H09 — foto da sessão | RESOLVIDA | Nenhuma foto localizada; o marcador e a legenda da foto opcional foram removidos de `final.md`. Não usar captura como foto. |
| H11 — TCLE | AGUARDA CONFIRMAÇÃO | Definir com orientadora/UNIVESP como incluir o termo preenchido exigido pelo art. 13 na entrega institucional sem publicação de PII. |
| D04 — figura de arquitetura | EDITORIAL | Figura gráfica OPCIONAL: o fluxo textual já existe; decidir se omite o marcador gráfico ou cria visual em etapa posterior. |
| D05 — outros documentos externos | DESNECESSÁRIA | Nenhum outro anexo foi justificado; remover Anexo B vazio na composição, salvo exigência nova. |
| D06 — apêndices B/D | EDITORIAL | Transpor perguntas aplicadas; decidir concisão de C/D, mantendo respostas originais e V1/V2 separados. |
| D07 — numeração das figuras | EDITORIAL | Numerar apenas quando a seleção final e o DOCX estiverem definidos. |

**Gate de evidências:** EVIDÊNCIAS CIENTÍFICAS SUFICIENTES E RASTREÁVEIS.

**Gate de privacidade:** MATERIAL APTO PARA COMPOSIÇÃO FINAL SEM EXPOSIÇÃO DE PII.

Essa classificação se refere aos materiais atualmente destinados ao relatório. A inserção futura dos TCLEs preenchidos continua sujeita à decisão H11 e não pode ocorrer no Git público.

**Gate editorial:** APÊNDICES E ANEXOS AINDA REQUEREM DECISÕES EDITORIAIS.
