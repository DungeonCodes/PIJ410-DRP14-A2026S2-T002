# Revisão orientada pela professora

Data: 13/10/2026. Escopo: estrutura editorial-científica de `final.md`, sem composição ou formatação de entrega. Foram confrontados `auditoria-final-documental-cientifica-v3.md`, `docs/validacao/**`, decisões, histórico, contexto, demais auditorias e referências.

## Orientações recebidas

Objetivos diretos e sem citações; briefing curto das fases na abertura de 2.5; distinção entre fases e versões; sequência inteligível entre objetivos, método e resultados; capítulo 3 em desenvolvimento técnico, avaliação externa e verificação técnica; rastreabilidade de feedback, análise, decisão, implementação e teste.

## Conferência pós-crash das orientações

| Orientação da professora | Documentada? | Aplicada no `final.md`? | Evidência |
|---|---|---|---|
| Objetivos diretos, sem justificativa ou método embutido | Sim | Sim | Seção 2.1.2: seis verbos de ação, sem explicação de procedimentos. |
| Zero citações nos objetivos | Sim | Sim | Seção 2.1 integral: nenhuma chamada bibliográfica. |
| Briefing das fases na abertura da metodologia | Sim | Sim | Abertura de 2.5 e tabela de quatro fases, com estados finais. |
| Fase distinta de versão | Sim | Sim | Abertura de 2.5 e 2.5.9: fases são escopos funcionais; V1, V2 e V3 são versões da interface. |
| Metodologia na ordem dos objetivos | Sim | Sim | 2.5.4–2.5.5 dados; 2.5.6–2.5.8 indicadores; 2.5.9 interface; 2.5.10 CPR; 2.5.11 IA; 2.5.12 avaliação. |
| Resultados em três grandes eixos | Sim | Sim | 3.1 desenvolvimento; 3.2 avaliação e alterações; 3.3 verificação técnica e limites. |
| Feedback externo separado de verificação técnica | Sim | Sim | Percepções de P1 em 3.2.2; decisões e implementação em 3.2.5; testes em 3.3.1. |
| Rastreabilidade feedback → análise/decisão → alteração → teste | Sim | Sim | Tabela 14 em 3.2.5, com origem, feedback, análise e decisão, alteração, versão e verificação. |

O sumário e as listas de figuras e tabelas foram sincronizados com os títulos vigentes. A
atribuição da aceitação dos sete feedbacks foi harmonizada com `docs/decisions.md`: decisão do
grupo sob instrução expressa do responsável. O TCLE da terceira aplicação foi obtido e assinado;
o documento protegido permanece fora do Git. Data e modalidade não constam do registro primário
consultado. Seu marcador de TCLE foi preservado com as respostas originais de P1.

## Conferência pós-crash e legibilidade  13/10/2026

| Orientação | Estado | Evidência |
|---|---|---|
| 1. Objetivos diretos | ATENDIDA | Seção 2.1.2: seis ações objetivas, sem justificativa ou procedimento embutido. |
| 2. Zero citações nos objetivos | ATENDIDA | Seção 2.1: nenhuma chamada bibliográfica. |
| 3. Briefing de fases | ATENDIDA | Abertura de 2.5: quatro fases e estados em quadro breve. |
| 4. Fase distinta de versão | ATENDIDA | Abertura de 2.5 e 2.5.9: fase funcional; V1/V2/V3 como versões da interface. |
| 5. Ordem objetivos → metodologia | ATENDIDA | Objetivos 1–6 seguem 2.5.4–2.5.12 após delineamento, escuta e requisitos. |
| 6. Ordem metodologia → resultados | ATENDIDA | Dados, indicadores, interface, CPR e IA em 3.1; avaliação em 3.2; testes em 3.3. |
| 7. Resultados em três eixos | ATENDIDA | Seções 3.1, 3.2 e 3.3. |
| 8. Alterações originadas nas avaliações identificadas | ATENDIDA | FB-V1-P1-001 e sete feedbacks V2→V3 na Tabela 14; Ads e CPR iniciais identificados como evolução técnica. |
| 9. Verificação técnica independente | ATENDIDA | Percepções de P1 em 3.2; cálculos, testes, hashes, reprodução e bloqueios em 3.3.1. |
| 10. Sumário textual sincronizado | ATENDIDA | Títulos e hierarquia conferidos com os headings numerados do corpo. |
| 11. Listas textuais sincronizadas | ATENDIDA | Seis legendas de figuras e 14 legendas de tabelas conferidas com as listas. |
| 12. Clareza e redução de redundâncias | ATENDIDA | Aberturas de 2.5 e 3, sequência de 3.2 e limitações de 3.3.2 revistas sem alteração científica. |
| Numeração das páginas | PENDENTE DE COMPOSIÇÃO | Depende da composição final do DOCX/PDF; nenhum número artificial inserido. |
| Números de página nas listas | PENDENTE DE COMPOSIÇÃO | Dependem da paginação final. |
| Apresentação visual das listas equivalente ao sumário | PENDENTE DE COMPOSIÇÃO | Ajuste reservado à composição final. |

## Objetivos — diagnóstico

O objetivo geral já preservava o escopo histórico. A abertura de 2.1 continha explicação metodológica e uma citação. Havia sete objetivos específicos: organização de dados; identificação de indicadores; cálculo determinístico; experimento CPR; simulação agêntica; interface; avaliação externa. Os objetivos de indicadores e cálculo se sobrepunham, e os itens de ML e IA descreviam procedimentos e salvaguardas. O parágrafo final da seção relatava resultados e limites, que pertencem ao capítulo 3. Contagem de citações acadêmicas em 2.1: **1 antes, 0 depois**.

## Objetivos — alterações

O objetivo geral foi mantido. Os sete itens foram sintetizados em seis, preservando o conteúdo histórico: dados; indicadores e cálculos; interface; experimento CPR; IA agêntica; avaliação e incorporação viável. A explicação sobre tema norteador e recorte sintético foi incorporada à Introdução, onde o assunto já era tratado. Definições de CPR, comparação, leakage, regressão e supervisão permanecem em 2.3 e 2.5. Resultados e graus de atendimento foram retirados de 2.1 e registrados abaixo, com evidência no capítulo 3 e nas considerações finais. A simulação agêntica específica permanece sem registro; o uso de agentes no desenvolvimento e na verificação não foi convertido em resultado de simulação.

## Mapa objetivo — metodologia — resultado

Matriz de auditoria preparada a partir dos objetivos históricos, métodos e evidências antes da reorganização do capítulo 3; numeração abaixo já corresponde ao texto revisto.

| Ordem | Objetivo específico | Metodologia correspondente | Resultado correspondente | Grau de atendimento |
|---|---|---|---|---|
| 1 | Organizar dados de captação, matrículas e mídia digital | 2.5.4 fontes; 2.5.5 preparo e rastreabilidade | 3.1.1–3.1.5, contratos e módulos sintéticos; sem base operacional consolidada | PARCIALMENTE ATENDIDO |
| 2 | Construir indicadores comparáveis | 2.5.6 níveis; 2.5.7 regras; 2.5.8 auditoria | 3.1.3–3.1.5 e 3.3.1; comparações limitadas por denominador, fonte e período | ATENDIDO no cenário acadêmico |
| 3 | Desenvolver interface web | 2.5.9 criar e prototipar; 2.5.12 implementar e testar | 3.1.1–3.1.5, V1/V2/V3; Fases 3 e 4 bloqueadas | PARCIALMENTE ATENDIDO no escopo completo; Fases 1 e 2 atendidas |
| 4 | Avaliar previsão experimental de CPR | 2.5.10 protocolo de ML | 3.1.6 e 3.3.2; experimento reproduzível, desempenho limitado | ATENDIDO como experimento, sem uso operacional |
| 5 | Aplicar práticas de IA agêntica como apoio à construção, análise e verificação da solução | 2.5.11 uso assistivo, contexto delimitado, inspeção, testes e supervisão | 3.1.7 e considerações finais; uso documentado na construção, análise e verificação | ATENDIDO no escopo assistivo; sem avaliação científica de eficácia |
| 6 | Avaliar protótipo e incorporar contribuições viáveis | 2.5.12 avaliação, decisão, implementação e verificação | 3.2.2–3.2.5; V3 implementada e verificada; sem reavaliação por P1 | PARCIALMENTE ATENDIDO |

## Metodologia — fases

A abertura de 2.5 contém briefing de quatro fases: Fase 1, Captação e Matrículas; Fase 2, Ads e CPR experimental; Fase 3, conteúdo orgânico; Fase 4, Gestão e Arquitetura. Fases 1 e 2 implementadas no ambiente acadêmico; Fases 3 e 4 bloqueadas. Fase designa bloco funcional; V1, V2 e V3 designam versões da interface. O detalhamento da prototipação permanece em 2.5.9 e o procedimento de avaliação, implementação e teste em 2.5.12, sem repetir a tabela breve da abertura.

## Metodologia — sequência

Após delineamento, escuta e requisitos (2.5.1–2.5.3), o método segue dados (2.5.4–2.5.5), níveis e indicadores (2.5.6–2.5.8), interface e fases (2.5.9), ML (2.5.10), IA assistiva (2.5.11), avaliação, decisão e verificação (2.5.12). Essa ordem acompanha os seis objetivos sem impor correspondência numérica artificial.

## Resultados — estrutura anterior

O capítulo 3 tinha nove seções no mesmo nível: contato, estado das fases, arquitetura, resultados técnicos, validação comunitária, comparação V1–V2, rastreabilidade, ajustes e limitações. Testes apareciam junto aos módulos técnicos; feedback e limites estavam afastados da narrativa das três aplicações.

## Resultados — nova estrutura

- **3.1 Desenvolvimento e resultados técnicos:** estado das fases (antiga 3.2), arquitetura (3.3), Captação, Matrículas, Ads e CPR (3.4.1–3.4.4); a revisão pós-crash acrescentou a síntese do uso assistivo de IA em 3.1.7.
- **3.2 Avaliação com a comunidade e alterações decorrentes:** contato inicial (antiga 3.1), três aplicações de P1 (3.5), comparação V1–V2 (3.6), rastreabilidade (3.7), feedback e ajustes (3.8).
- **3.3 Verificação técnica da solução e limitações:** testes (antiga 3.4.5) e limitações (3.9).

As tabelas, figuras, números experimentais, falas e limitações foram mantidos. A Tabela 14 foi ampliada para reunir os oito feedbacks e a cadeia de decisão e verificação. Tabelas históricas do ciclo V1–V2 conservam seu recorte explícito. Na revisão pós-crash, o sumário e a lista de tabelas foram sincronizados com o corpo; a paginação continua destinada à composição final.

## Feedback externo — validação técnica

P1 avaliou clareza, compreensão, utilidade percebida e dificuldades. A mesma participante participou de três aplicações sucessivas: V1, reavaliação focal da V2 e avaliação ampliada da V2 com 16 questões. FB-V1-P1-001 originou apenas o gráfico temporal consolidado na V2; Ads e ML iniciais foram evolução técnica independente. Os sete FB-V2-P1-001 a 007 foram aceitos por decisão registrada do grupo, sob instrução expressa do responsável pelo projeto, analisados quanto a dados e limites, implementados na V3 e verificados tecnicamente. P1 **não** reavaliou a V3. Testes, hashes, determinismo, reprodução do ML, correção de cálculos, divisão por zero, distinção de métricas, bloqueios e não vazamento pertencem à verificação técnica. Nem a opinião de P1 nem o sucesso dos testes demonstram impacto institucional ou causalidade.

## Alterações realizadas

Revisados 2.1, abertura e sequência de 2.5 e organização de 3; acrescentada cadeia metodológica de feedback; ampliada a Tabela 14; corrigidas referências internas no corpo atingidas pela reorganização; registrado este mapa e o run log. Não foram editados código, dados, respostas primárias, figuras, DOCX ou PDF.

## Pontos preservados

Problema científico, métricas e resultados de ML, algoritmo e artefatos, literatura de IA agêntica, dados sintéticos, versões da interface, sete feedbacks, respostas de P1, referências validadas e conclusões científicas. A ausência de simulação específica permanece registrada como limite do objetivo histórico; não impede o atendimento do objetivo vigente de aplicação assistiva. A V3 permanece implementada e verificada, sem avaliação posterior por P1.

## Micro-revisão do objetivo 5 — 13/10/2026

A redação vigente passou de “Avaliar o uso de IA agêntica como apoio à construção e à análise da solução” para “Aplicar práticas de IA agêntica como apoio à construção, análise e verificação da solução”. A seção 2.5.11 e o registro de uso confirmado pelo responsável técnico documentam agentes na programação, auditoria do repositório, revisão documental, análise de consistência, elaboração e verificação de testes e conferência dos algoritmos e artefatos de CPR, sempre sob supervisão humana. Esses fatos cobrem construção, análise e verificação; portanto, o objetivo vigente é **ATENDIDO**. A classificação anterior de atendimento parcial correspondia à exigência histórica de simulação agêntica específica via CLI, que não integra o objetivo reformulado. Não houve avaliação científica independente da eficácia da IA agêntica.

## Revisão de legibilidade para leitor não especialista

- **Termos clarificados:** dados sintéticos, cálculos determinísticos, séries temporais, indicadores de mídia, fluxo de dados, controle de acesso aos módulos, arquivos de resultados, variáveis do modelo, vazamento de informação, referências simples, testes temporais, medidas de erro e práticas de IA agêntica. A ideia em português antecede o termo técnico nas primeiras ocorrências relevantes.
- **Parágrafos simplificados:** Resumo, abertura de 2.3.7, protocolo de 2.5.10, procedimento de 2.5.11, apresentação de 3.1.6, arquitetura de 3.1.2, limitações de 3.3.2 e Considerações Finais. O resultado principal dos experimentos antecede as tabelas.
- **Redundâncias reduzidas:** ressalvas consecutivas sobre cenário sintético, ausência de causalidade e uso operacional; repetição da cronologia V1–V3 e de detalhes metodológicos nos resultados. A explicação completa dos limites permanece em 3.3.2.
- **Conteúdo científico preservado:** seis objetivos, fases e hierarquia, números e fórmulas de ML, dados e versões, respostas e feedbacks de P1, conclusões, citações e 28 referências. A IA agêntica permanece atendida somente como uso assistivo, sob decisão humana.

## Gate final

- Objetivos diretos, sem citações e sem metodologia embutida: **A**.
- Metodologia abre com fases e segue a lógica dos objetivos: **A**.
- Resultados separam feedback externo, alterações e verificação técnica: **A**.
- Teste de compreensão: (1) objetivo geral direto: sim; (2) citações em 2.1: zero; (3) justificativa nos objetivos: não; (4) método embutido nos objetivos: não; (5) abertura com fases: sim; (6) fase e versão distintas: sim; (7) sequência lógica: sim; (8) três eixos de resultados: sim; (9) origem em P1 rastreável: sim; (10) verificação técnica independente: sim; (11) V3 sem reavaliação por P1: sim; (12) seis objetivos com resultados identificáveis: sim, com graus delimitados.
- Integridade: `git diff --check` aprovado; `test:interface` (17 arquivos V1), `test:v3-feedback`, `test:nao-vazamento` (38 verificações), `test:determinismo` (46 testes) e `ml:google-cpr:sazonal:verificar` aprovados. O verificador `verificar:integridade-docs` depende de uma linha de base temporária ausente; ela não foi criada. Nenhum commit ou push.
