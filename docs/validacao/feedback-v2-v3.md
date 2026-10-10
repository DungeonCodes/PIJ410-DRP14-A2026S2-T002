# Feedback V2 — V3

## Princípio de rastreabilidade

Resposta original → interpretação → feedback → decisão do grupo → ação na V3 → evidência. A [transcrição primária](respostas/v2-p1-para-v3.md) preserva as falas; este arquivo contém análise posterior. A mesma P1, Gerente de Marketing, participou em terceiro momento sucessivo. Não há nova amostra independente. Por decisão expressa do responsável pelo projeto, os sete feedbacks foram aceitos e incorporados à V3 funcional. P1 avaliou a V2; ainda não há avaliação de P1 sobre a V3.

| ID | Resposta original (origem) | Interpretação / feedback | Decisão do grupo | Ação na V3 | Evidência |
|---|---|---|---|---|---|
| FB-V2-P1-001 | Q6: “mas poderia ter um gráfico temporal tb entrevisitas/matriculas onde mostra percentual de efetivação.” | Acompanhar temporalmente visitas, matrículas e percentual de efetivação. Candidato técnico: **Efetivação visita–matrícula = Matrículas / Visitas × 100**, sujeito a compatibilidade de fonte, recorte e denominador. | ACEITO | IMPLEMENTADO E VERIFICADO NA V3 | [Q6](respostas/v2-p1-para-v3.md#questão-6) |
| FB-V2-P1-002 | Q6: “Em amtricula poderíamos ter uma avaliação de metriculas e rematrículas por series. do infantil ao medio” | Analisar matrículas e rematrículas por séries/etapas, do Infantil ao Ensino Médio. Verificar antes se o dataset sintético tem granularidade suficiente; não criar séries nem dados ausentes. | ACEITO | IMPLEMENTADO E VERIFICADO NA V3 | [Q6](respostas/v2-p1-para-v3.md#questão-6) |
| FB-V2-P1-003 | Q7–9: notas 3, 3 e 3; Q9: “Visao geral preciso de um resumo mensal pois avalio o investimento mensalmente, e tenho que enxergar o quanto investi no mês e quantas conversões obtive” e “deixar a Visao geral so com o resumo sem gráfico de investimento e leads gerados.” | Orientar a Visão Geral de Ads ao resumo executivo mensal de investimento e conversões; avaliar mover gráficos detalhados para painéis específicos. | ACEITO | IMPLEMENTADO E VERIFICADO NA V3 | [Q7–9](respostas/v2-p1-para-v3.md#questão-7) |
| FB-V2-P1-004 | Q9: “seria bom tb ja ter tb no gráfico temporal aqui quantos leads reais gerou, isso p´doe estar no painel google” | Solicitação de evolução temporal de leads no Google Ads. “Leads reais” é expressão da participante, não descrição factual do protótipo: qualquer métrica futura deve ser rotulada conforme a natureza sintética do cenário. | ACEITO | IMPLEMENTADO E VERIFICADO NA V3 | [Q9](respostas/v2-p1-para-v3.md#questão-9) |
| FB-V2-P1-005 | Q9: “No Meta ADS preciso saber tb quantos resultados alcançamo (pessoas alcançadas) e quanto investimos nesse mês comparado aos leads gerados pela plataforma,” | Comparar alcance de pessoas, investimento mensal e leads no Meta Ads. Alcance, lead e conversão são métricas distintas. Verificar campos existentes no dataset antes de decidir a apresentação. | ACEITO | IMPLEMENTADO E VERIFICADO NA V3 | [Q9](respostas/v2-p1-para-v3.md#questão-9) |
| FB-V2-P1-006 | Q10: “preciso aqui em gráfico temporal quantos estamos investindo por mês, uma linha google, uma meta, e olhar ledas gerados (uma linha, e outra para matriculas” | Proposta de visão temporal em Estratégia com investimento Google, investimento Meta, leads e matrículas. Visa resumir mídia investida e desfechos de captação. A visualização poderá mostrar evolução/associação temporal, sem afirmar causalidade entre investimento e matrícula. | ACEITO | IMPLEMENTADO E VERIFICADO NA V3 | [Q10](respostas/v2-p1-para-v3.md#questão-10) |
| FB-V2-P1-007 | Comentário espontâneo antes de Q11: “Achei que esta variando muito a previsão, da p entender mas n parece proximo do real”; Q11–13: 4, 5, 5. | A apresentação foi compreendida e considerada potencialmente útil, mas a previsão foi percebida como muito variável e pouco próxima do esperado na prática. Trata-se de percepção visual, não validação matemática. | ACEITO | IMPLEMENTADO E VERIFICADO NA V3 | [Comentário e Q11–13](respostas/v2-p1-para-v3.md#comentário-espontâneo-antes-da-questão-11) |

## Limites de interpretação

A participante relatou utilizar a relação entre contatos e visitas como apoio à interpretação da qualidade percebida dos leads (Q6). O protótipo não mede objetivamente qualidade de lead; a fala não demonstra causalidade nem valida uma métrica.

Em Q16, P1 apontou Matrículas como a parte mais útil por representar sua conversão final e influenciar sua leitura da verba disponível. É uma percepção profissional individual, sem generalização para outras pessoas ou instituições.

FB-V2-P1-007 pode ser discutido futuramente à luz dos resultados quantitativos já documentados: desempenho limitado, R² negativo no holdout e regressão sem superar t2 no holdout principal. Essa associação é contextual; a opinião de P1 não comprova desempenho preditivo nem justifica alterar o algoritmo para ajustar sua aparência à expectativa da participante.

## Síntese quantitativa descritiva

As notas abaixo pertencem somente a esta aplicação da mesma P1. Não são inferência estatística nem comparação controlada com as aplicações anteriores.

| Bloco | Questões | Notas |
|---|---|---|
| A. Navegação e visão geral | 1–3 | 4, 5, 4 |
| B. Captação e Matrículas | 4–5 | 5, 4 |
| C. Ads e Estratégia | 7–10 | 3, 3, 3, 3 |
| D. Previsão experimental / ML | 11–13 | 4, 5, 5 |

Q6, Q14 e Q16 são abertas. Q15 é uma classificação categórica: **C — Precisa de alterações importantes antes da versão final**.

## Síntese científica

P1 avaliou favoravelmente a navegação e Captação/Matrículas, enquanto Ads e Estratégia concentraram as menores notas e pedidos de resumos mensais e comparações temporais. A participante apontou Matrículas como o desfecho mais útil à sua análise. Considerou compreensível a apresentação da previsão experimental e vislumbrou utilidade complementar, mas percebeu variação excessiva e distância do que espera na prática. Classificou a V2 como carente de alterações importantes antes da versão final. São percepções exploratórias de uma participante em seu terceiro contato sucessivo com o protótipo.

## Implementação e verificação

Os estados progrediram de **ACEITO** para **EM IMPLEMENTAÇÃO**, **IMPLEMENTADO** e **IMPLEMENTADO E VERIFICADO** após build, testes locais e inspeção visual dos previews. Verificação técnica não equivale a nova validação pela participante.

| ID | Alteração implementada | Arquivos principais | Teste / evidência | Estado final |
|---|---|---|---|---|
| FB-V2-P1-001 | Taxa mensal de efetivação do mesmo funil com tooltip de visitas, matrículas e percentual; zero visitas/ausência resultam em taxa indisponível. | `src/lib/v3/calculos.ts`, `src/ui/v3/pages/captacao.tsx`, `src/ui/v3/graficos.tsx` | `test:v3-feedback`, `test:interface:http`, `v3-preview-captacao-efetivacao.png` | IMPLEMENTADO E VERIFICADO |
| FB-V2-P1-002 | Barras comparativas de matrículas novas e rematrículas por séries reais do dataset sintético; primeira safra sem classificação excluída. | `src/lib/v3/metricas.ts`, `src/ui/v3/pages/matriculas.tsx`, `src/ui/v3/graficos.tsx` | `test:v3-feedback`, `test:interface:http`, `v3-preview-matriculas-series.png` | IMPLEMENTADO E VERIFICADO |
| FB-V2-P1-003 | Resumo mensal com seletor, KPIs e tabela por canal, sem repetir gráficos dos painéis específicos. | `src/ui/v3/pages/ads.tsx`, `src/ui/v3/pages/periodo.tsx` | `test:interface:http`, `v3-preview-ads.png` | IMPLEMENTADO E VERIFICADO |
| FB-V2-P1-004 | Google: investimento temporal e leads simulados derivados dos cliques, distintos de conversões e CPR. | `src/lib/v3/metricas.ts`, `src/ui/v3/pages/google.tsx`, `src/ui/v3/graficos.tsx` | `test:v3-feedback`, `test:interface:http`, `v3-preview-google.png` | IMPLEMENTADO E VERIFICADO |
| FB-V2-P1-005 | Meta: investimento, alcance simulado, leads simulados e resultados originais separados; escalas em gráficos próprios. | `src/lib/v3/metricas.ts`, `src/ui/v3/pages/meta.tsx`, `src/ui/v3/graficos.tsx` | `test:v3-feedback`, `test:interface:http`, `v3-preview-meta.png` | IMPLEMENTADO E VERIFICADO |
| FB-V2-P1-006 | Estratégia: investimento por canal em R$ e leads/matrículas em contagens, com mesmo eixo temporal e aviso de cenários independentes. | `src/lib/v3/metricas.ts`, `src/ui/v3/pages/estrategia.tsx`, `src/ui/v3/graficos.tsx` | `test:v3-feedback`, `test:interface:http`, `v3-preview-estrategia.png` | IMPLEMENTADO E VERIFICADO |
| FB-V2-P1-007 | Bloco explicativo simples, aviso de desempenho limitado e gráfico de histórico/previsão sem mudar valores nem algoritmo. | `src/ui/v3/previsao.tsx` | `test:google-cpr:sazonal`, `ml:google-cpr:sazonal:verificar`, `v3-preview-google-cpr.png` | IMPLEMENTADO E VERIFICADO |

## Estado da V3

**V3 implementada e verificada tecnicamente; revisão visual humana pendente.** Cadeia: V1 → P1/V1 → FB-V1-P1-001 → V2 → P1/V2 → avaliação ampliada V2 para V3 → FB-V2-P1-001 a FB-V2-P1-007 → aceitação dos sete feedbacks → V3. A V3 ainda não foi avaliada por P1.
