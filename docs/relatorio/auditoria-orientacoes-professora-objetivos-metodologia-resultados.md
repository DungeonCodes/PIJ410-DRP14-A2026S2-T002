# Revisão orientada pela professora

Data: 13/10/2026. Escopo: estrutura editorial-científica de `final.md`, sem composição ou formatação de entrega. A fonte `auditoria-final-documental-cientifica-v3.md` indicada na solicitação não está presente no repositório; foram confrontados `docs/validacao/**`, decisões, histórico, contexto, auditorias disponíveis e referências.

## Orientações recebidas

Objetivos diretos e sem citações; briefing curto das fases na abertura de 2.5; distinção entre fases e versões; sequência inteligível entre objetivos, método e resultados; capítulo 3 em desenvolvimento técnico, avaliação externa e verificação técnica; rastreabilidade de feedback, análise, decisão, implementação e teste.

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
| 5 | Aplicar práticas de IA agêntica como apoio à construção, análise e verificação da solução | 2.5.11 uso assistivo, contexto delimitado, inspeção, testes e supervisão | 3.1 e considerações finais; uso documentado na construção, análise e verificação | ATENDIDO no escopo assistivo; sem avaliação científica de eficácia |
| 6 | Avaliar protótipo e incorporar contribuições viáveis | 2.5.12 avaliação, decisão, implementação e verificação | 3.2.2–3.2.5; V3 implementada e verificada; sem reavaliação por P1 | PARCIALMENTE ATENDIDO |

## Metodologia — fases

A abertura de 2.5 contém briefing de quatro fases: Fase 1, Captação e Matrículas; Fase 2, Ads e CPR experimental; Fase 3, conteúdo orgânico; Fase 4, Gestão e Arquitetura. Fases 1 e 2 implementadas no ambiente acadêmico; Fases 3 e 4 bloqueadas. Fase designa bloco funcional; V1, V2 e V3 designam versões da interface. O detalhamento da prototipação permanece em 2.5.9 e o procedimento de avaliação, implementação e teste em 2.5.12, sem repetir a tabela breve da abertura.

## Metodologia — sequência

Após delineamento, escuta e requisitos (2.5.1–2.5.3), o método segue dados (2.5.4–2.5.5), níveis e indicadores (2.5.6–2.5.8), interface e fases (2.5.9), ML (2.5.10), IA assistiva (2.5.11), avaliação, decisão e verificação (2.5.12). Essa ordem acompanha os seis objetivos sem impor correspondência numérica artificial.

## Resultados — estrutura anterior

O capítulo 3 tinha nove seções no mesmo nível: contato, estado das fases, arquitetura, resultados técnicos, validação comunitária, comparação V1–V2, rastreabilidade, ajustes e limitações. Testes apareciam junto aos módulos técnicos; feedback e limites estavam afastados da narrativa das três aplicações.

## Resultados — nova estrutura

- **3.1 Desenvolvimento e resultados técnicos:** estado das fases (antiga 3.2), arquitetura (3.3), Captação, Matrículas, Ads e CPR (3.4.1–3.4.4).
- **3.2 Avaliação com a comunidade e alterações decorrentes:** contato inicial (antiga 3.1), três aplicações de P1 (3.5), comparação V1–V2 (3.6), rastreabilidade (3.7), feedback e ajustes (3.8).
- **3.3 Verificação técnica da solução e limitações:** testes (antiga 3.4.5) e limitações (3.9).

As tabelas, figuras, números experimentais, falas e limitações foram mantidos. A Tabela 14 foi ampliada para reunir os oito feedbacks e a cadeia de decisão e verificação. Tabelas históricas do ciclo V1–V2 conservam seu recorte explícito. O sumário pré-textual não foi atualizado por instrução expressa de deixar a formatação para etapa posterior.

## Feedback externo — validação técnica

P1 avaliou clareza, compreensão, utilidade percebida e dificuldades. A mesma participante participou de três aplicações sucessivas: V1, reavaliação focal da V2 e avaliação ampliada da V2 com 16 questões. FB-V1-P1-001 originou apenas o gráfico temporal consolidado na V2; Ads e ML iniciais foram evolução técnica independente. Os sete FB-V2-P1-001 a 007 foram aceitos pelo responsável, analisados quanto a dados e limites, implementados na V3 e verificados tecnicamente. P1 **não** reavaliou a V3. Testes, hashes, determinismo, reprodução do ML, correção de cálculos, divisão por zero, distinção de métricas, bloqueios e não vazamento pertencem à verificação técnica. Nem a opinião de P1 nem o sucesso dos testes demonstram impacto institucional ou causalidade.

## Alterações realizadas

Revisados 2.1, abertura e sequência de 2.5 e organização de 3; acrescentada cadeia metodológica de feedback; ampliada a Tabela 14; corrigidas referências internas no corpo atingidas pela reorganização; registrado este mapa e o run log. Não foram editados código, dados, respostas primárias, figuras, DOCX ou PDF.

## Pontos preservados

Problema científico, métricas e resultados de ML, algoritmo e artefatos, literatura de IA agêntica, dados sintéticos, versões da interface, sete feedbacks, respostas de P1, referências validadas e conclusões científicas. A ausência de simulação específica permanece registrada como limite do objetivo histórico; não impede o atendimento do objetivo vigente de aplicação assistiva. A V3 permanece implementada e verificada, sem avaliação posterior por P1.

## Micro-revisão do objetivo 5 — 13/10/2026

A redação vigente passou de “Avaliar o uso de IA agêntica como apoio à construção e à análise da solução” para “Aplicar práticas de IA agêntica como apoio à construção, análise e verificação da solução”. A seção 2.5.11 e o registro de uso confirmado pelo responsável técnico documentam agentes na programação, auditoria do repositório, revisão documental, análise de consistência, elaboração e verificação de testes e conferência dos algoritmos e artefatos de CPR, sempre sob supervisão humana. Esses fatos cobrem construção, análise e verificação; portanto, o objetivo vigente é **ATENDIDO**. A classificação anterior de atendimento parcial correspondia à exigência histórica de simulação agêntica específica via CLI, que não integra o objetivo reformulado. Não houve avaliação científica independente da eficácia da IA agêntica.

## Gate final

- Objetivos diretos, sem citações e sem metodologia embutida: **A**.
- Metodologia abre com fases e segue a lógica dos objetivos: **A**.
- Resultados separam feedback externo, alterações e verificação técnica: **A**.
- Teste de compreensão: (1) objetivo geral direto: sim; (2) citações em 2.1: zero; (3) justificativa nos objetivos: não; (4) método embutido nos objetivos: não; (5) abertura com fases: sim; (6) fase e versão distintas: sim; (7) sequência lógica: sim; (8) três eixos de resultados: sim; (9) origem em P1 rastreável: sim; (10) verificação técnica independente: sim; (11) V3 sem reavaliação por P1: sim; (12) seis objetivos com resultados identificáveis: sim, com graus delimitados.
- Integridade: `git diff --check` aprovado; `test:interface` (17 arquivos V1), `test:v3-feedback`, `test:nao-vazamento` (38 verificações), `test:determinismo` (46 testes) e `ml:google-cpr:sazonal:verificar` aprovados. O verificador `verificar:integridade-docs` depende de uma linha de base temporária ausente; ela não foi criada. Nenhum commit ou push.
