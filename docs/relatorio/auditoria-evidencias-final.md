# Auditoria final de evidências, apêndices, anexos e privacidade — 2026-10-09

Escopo original: `docs/relatorio/final.md`, o modelo oficial, os cinco PDFs institucionais em `docs/univesp/`, instrumentos/registros de `docs/validacao/`, questionário inicial, nove capturas originais em `docs/relatorio/figuras/`, protocolos de ML, código de identidade e `docs/run_log.md`. A atualização visual abaixo registra duas novas capturas reais V2 e uma correção isolada da apresentação, sem compor o DOCX/PDF. H10 foi resolvida posteriormente conforme ADR-009.

## Correção da auditoria bibliográfica

O inventário final tem **19** referências: **15 artigos, 1 dissertação e 3 documentos institucionais/internos**. A menção anterior a 16 artigos foi erro aritmético da resposta, não uma vigésima entrada. `auditoria-referencias-final.md` agora explicita a conta. Conferência literal do modelo: “As citações e paráfrases devem ser feitas de acordo com as regras da ABNT 6023, de 2002.” Isso descreve a redação histórica do modelo; a decisão posterior do responsável adotou NBR 10520:2023 para citações e NBR 6023:2025 para referências.

## Inventário de evidências

“Citada” significa citada ou incorporada no corpo/estrutura de `final.md`. Instrumentos em branco e artefatos técnicos têm função diferente das respostas primárias. A existência do TCLE preenchido é confirmação humana documentada; o arquivo assinado não foi acessado nem está versionado.

| ID | Evidência | Arquivo fonte | Citada? | Destino | Estado / limite |
|---|---|---|---|---|---|
| E01 | Questionário inicial, 30 perguntas e campos | `docs/questionario_comunidade_externa.md` | Sim | APÊNDICE A | Autêntico; Git registra início em 26/08/2026, antes da V1 de 07/10; transpor só perguntas/campos |
| E02 | Respostas do levantamento inicial | Mesmo arquivo, respostas preenchidas | Sim, em síntese | NÃO INCLUIR | Manter como fonte de rastreio; conteúdo institucional e respostas integrais desnecessários no apêndice |
| E03 | Consentimento das entrevistas iniciais | Confirmação do responsável em `docs/run_log.md`; TCLE assinado fora do Git | Sim | ANEXO A na entrega institucional | Obtido segundo confirmação humana; formulário não conferido nesta auditoria |
| E04 | Instrumento aplicado à V1: 2 tarefas, 6 perguntas | `docs/validacao/instrumento_validacao_v1.md`; `roteiro_validacao.md` | Sim | APÊNDICE B | Perguntas 1–3 escala 1–5, 4–6 abertas; coincide com respostas |
| E05 | Respostas primárias P1/V1 | `docs/validacao/respostas/v1-p1.md` | Sim | CORPO | Uma P1, três notas 5/5 e três respostas abertas; original preservado |
| E06 | Feedback FB-V1-P1-001 e aprovação do grupo | `v1-p1.md`; `versoes-interface.md` | Sim | CORPO | Sugestão de P1 separada da decisão do grupo |
| E07 | V1 e V2, escopo e ordem histórica | `docs/validacao/versoes-interface.md` | Sim | CORPO | V1 pré-Ads; V2 incorpora Ads/ML por evolução técnica e gráfico conjunto por feedback |
| E08 | Perguntas realmente aplicadas na reavaliação V2 | `docs/validacao/respostas/v2-p1-reavaliacao.md` | Sim | APÊNDICE B | Seis perguntas registradas no próprio formulário de respostas; transpor com rótulo próprio |
| E09 | Respostas primárias P1/V2 | Mesmo registro | Sim | CORPO | Mesma P1; texto original e versão normalizada identificados separadamente |
| E10 | Instrumento V2 extenso de 18 perguntas | `docs/validacao/instrumento_validacao_v2.md` | Não como aplicado | NÃO INCLUIR | Documento futuro, distinto da reavaliação V2; não atribuir suas perguntas a P1 |
| E11 | TCLE P1, status | `v1-p1.md`, `v2-p1-reavaliacao.md`, protocolo e run log; assinado fora do Git | Sim | ANEXO A na entrega institucional | `TCLE obtido: SIM`; arquivo assinado não conferido; P1 anonimizada |
| E12 | Critérios/tarefas de validação | `instrumento_validacao_v1.md`, `roteiro_validacao.md`, `protocolo_evidencias.md` | Sim | CORPO e APÊNDICE B, quando pertinente | Material adicional não foi transposto como Apêndice C para evitar duplicação |
| E13 | Capturas V1 Captação e Matrículas | `fig-v1-captacao.png`, `fig-v1-matriculas.png` | Sim | CORPO | PNGs históricos 1600×900 preservados; rótulo legado explicado uma vez no relatório |
| E14 | Gráficos V1 separados | `fig-v1-captacao-graficos-temporais.png` | Sim | CORPO | PNG histórico preservado; três gráficos separados, rótulo legado explicado |
| E15 | Gráfico V2 consolidado | `fig-v2-captacao-evolucao-temporal-pji410.png`; original `fig-v2-captacao-evolucao-temporal.png` preservado | Sim, novo PNG | CORPO | Nova captura real 1600×900; três séries selecionáveis; rótulo PJI410 IV |
| E16 | Ads V2, visão geral | `fig-v2-ads-visao-geral-pji410.png`; original `fig-v2-ads-visao-geral.png` preservado | Sim, novo PNG | CORPO | Nova captura real 1600×900; dados sintéticos; rótulo PJI410 IV |
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

O inventário inicial tinha **nove** capturas PNG. Com as duas novas capturas reais V2, há **11 PNGs** em `docs/relatorio/figuras/`, todos 1600×900, e **seis** são referenciados no corpo. As três capturas V1 usadas continuam originais. As duas capturas V2 substituídas permanecem no repositório para rastreabilidade. As três outras capturas V2 não usadas são Google Ads, Meta Ads e Estratégia. As figuras utilizadas aparecem próximas aos trechos correspondentes e as legendas identificam versão e dados sintéticos. V1 mostra séries temporais separadas; V2 mostra uma visualização com Contatos, Visitas e Matrículas selecionáveis. A figura sazonal reproduz visualmente os valores arredondados do artefato JSON (regressão MAE 7,58; RMSE 14,26; R² −0,275; baseline sazonal MAE 9,20; RMSE 15,38), sinaliza projeção experimental e não mostra intervalo de confiança ou recomendação financeira.

**Correção visual aplicada em 09/10/2026:** o rótulo `PIJ410 — Projeto Integrador em Computação III` tem origem em `APP.disciplina`, linha 23 de `src/lib/identidade.ts`, consumido pelo `src/components/app-shell.tsx` e pelo título do layout raiz. Esses dois arquivos fazem parte dos 17 hashes protegidos da V1 e foram preservados. A V2 agora usa `src/ui/v2/shell.tsx` e `src/lib/identidade-v2.ts`, com `PJI410 — Projeto Integrador em Computação IV`; o layout versionado corrige também o título da rota V2. As novas capturas reais de Ads e Captação V2 substituem apenas as referências editoriais em `final.md`, sem sobrescrever os PNGs anteriores. A captura sazonal V2 permanece válida porque não exibe o rótulo. As três capturas V1 continuam reproduzindo a interface histórica apresentada a P1; uma nota após a Figura 1 explica o rótulo legado sem afirmar que P1 viu a identificação corrigida. Os três PNGs V2 não usados ainda exibem o rótulo antigo, mas não integram o relatório. Nenhum pixel de captura histórica foi substituído ou retocado.

Não há fotografia da sessão presencial. O Regulamento não a exige. O modelo recomenda imagens, storyboards ou ilustrações da **solução**, já atendidas por capturas; a única menção a foto é a restrição a fotos de crianças/adolescentes sem autorização. H09 não bloqueia a evidência científica.

## Apêndices e anexos

Apêndice é material preparado pelo grupo; anexo é material de terceiros. Os instrumentos e a síntese elaborados pelo grupo estão corretamente previstos como apêndices. O TCLE institucional preenchido, conforme modelo externo, será inserido manualmente como anexo apenas na entrega institucional final; H11 está resolvida operacionalmente.

| Apêndice | Conteúdo | Fonte real | Pronto para transposição? |
|---|---|---|---|
| A | Questionário inicial: 30 perguntas e campos, sem respostas | `docs/questionario_comunidade_externa.md` | Sim, mediante extração dos campos/perguntas |
| B | Instrumento V1 de 2 tarefas/6 perguntas e bloco separado de 6 perguntas P1/V2 | `instrumento_validacao_v1.md`; `respostas/v2-p1-reavaliacao.md` | Sim; não usar o instrumento V2 futuro |
| C | Tarefas/critérios de avaliação e regras de registro | `roteiro_validacao.md`; `protocolo_evidencias.md`; instrumentos | Não incluído: o necessário está no corpo e no Apêndice B |
| D | Síntese anonimizada das respostas V1 e V2 | Dois registros primários P1 | Não incluído: a síntese necessária está no corpo e os originais permanecem preservados |

Respostas completas podem melhorar a rastreabilidade, mas não são necessárias para sustentar as conclusões individualizadas já descritas. Se transpostas, manter V1/V2 separados e preservar a forma original ou assinalar claramente qualquer normalização. Não incluir no Apêndice A as respostas do questionário inicial. Nenhum script, JSON, commit ou log técnico extenso precisa virar referência ou apêndice acadêmico.

| Anexo | Documento | Autoria | Necessário? | Restrição |
|---|---|---|---|---|
| A | TCLE preenchido das entrevistas iniciais e da validação P1 | Modelo UNIVESP; preenchimento das partes | Sim, segundo art. 13 do Regulamento | Inserção manual apenas na versão institucional final; assinados fora do Git público |
| B | “Documentos externos necessários”, sem peça identificada | Terceiros | Não demonstrado | Não anexar PPC, artigos, livros ou documentação extensa apenas por serem citados |

O art. 13 do `docs/univesp/Regulamento_PI.pdf` determina literalmente que o TCLE preenchido conste na versão final do trabalho. A alternativa de mencionar apenas a obtenção no corpo ou anexar só modelo em branco **não satisfaz, isoladamente, essa redação**. O responsável confirmou a inserção manual dos termos preenchidos na versão institucional final, com os arquivos assinados fora do Git público. Nenhum TCLE assinado foi consultado, copiado ou adicionado ao Git nesta auditoria.

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

Nos materiais destinados ao relatório, não foram localizados nome completo de participante externa, CPF, RG, e-mail, endereço, assinatura ou telefone preenchido. O questionário inicial contém a opção genérica “Telefone” para **formato da conversa**, não um número. As capturas mostram apenas dados e identidade fictícios, com aviso de cenário sintético. P1 permanece identificada somente como “Gerente de Marketing”. O risco residual está na inserção manual futura dos TCLEs preenchidos na versão institucional; as respostas iniciais preenchidas não foram transpostas para o apêndice. O arquivo do questionário inicial contém informações contextuais da instituição que não precisam ser reproduzidas no apêndice.

| ID | Estado | Próxima ação |
|---|---|---|
| H09 — foto da sessão | RESOLVIDA | Nenhuma foto localizada; o marcador e a legenda da foto opcional foram removidos de `final.md`. Não usar captura como foto. |
| H11 — TCLE | RESOLVIDA OPERACIONALMENTE | Inserir manualmente os termos preenchidos na versão institucional final; manter assinados fora do Git público. |
| D04 — figura de arquitetura | DESNECESSÁRIA | O fluxo textual já descreve a arquitetura; não há marcador gráfico pendente. |
| D05 — outros documentos externos | DESNECESSÁRIA | Nenhum outro anexo foi justificado; remover Anexo B vazio na composição, salvo exigência nova. |
| D06 — apêndices | RESOLVIDA | Apêndices A e B transpostos; C/D omitidos por redundância. |
| D07 — numeração das figuras | EDITORIAL | Numerar apenas quando a seleção final e o DOCX estiverem definidos. |

**Gate de evidências:** EVIDÊNCIAS CIENTÍFICAS SUFICIENTES E RASTREÁVEIS.

**Gate de privacidade:** MATERIAL APTO PARA COMPOSIÇÃO FINAL SEM EXPOSIÇÃO DE PII.

Essa classificação se refere aos materiais atualmente destinados ao relatório. Os TCLEs preenchidos serão inseridos manualmente apenas na versão institucional final e não podem ser incorporados ao Git público.

**Gate editorial após a decisão H11:** APÊNDICES E ANEXOS PRONTOS PARA COMPOSIÇÃO EDITORIAL, com inserção manual dos TCLEs apenas na entrega institucional.

Atualização administrativa de 09/10/2026: RA de Michele Jeremias da Silva Santos confirmado
diretamente pela integrante como 1700600 e preenchido na fonte editorial corrente. A conversa
privada e sua captura não foram incorporadas ao repositório.
