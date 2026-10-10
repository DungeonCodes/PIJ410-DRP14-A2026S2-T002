# Auditoria de rastreabilidade da avaliação V2 e da V3

Esta auditoria confronta a evidência documental com a implementação e os testes do repositório. P1 é a mesma Gerente de Marketing nas três aplicações sucessivas registradas: avaliação da V1, reavaliação focal da V2 e avaliação ampliada da V2. O levantamento inicial de necessidades descrito na seção 3.1 do Relatório Final é antecedente metodológico distinto dessas três aplicações. Não há avaliação posterior da V3 por P1, nem amostra independente.

| Evidência | Arquivo fonte | Relatório Final | Estado |
|---|---|---|---|
| Instrumento ampliado de 16 questões e escala | `instrumento_validacao_v2_para_v3.md` | 3.5 e Apêndice B.3, com as 16 questões | Conferido |
| Respostas literais de P1 e notas | `respostas/v2-p1-para-v3.md` | 3.5; referência ao registro primário no Apêndice B.3 | Conferido; falas preservadas |
| FB-V2-P1-001 — efetivação visita–matrícula | `feedback-v2-v3.md`; `src/lib/v3/calculos.ts`; `src/ui/v3/pages/captacao.tsx` | 3.7 e 3.8 | Aceito, implementado e verificado |
| FB-V2-P1-002 — matrículas e rematrículas por série existente | `feedback-v2-v3.md`; `src/lib/v3/metricas.ts`; `src/ui/v3/pages/matriculas.tsx` | 3.7 e 3.8 | Aceito, implementado e verificado |
| FB-V2-P1-003 — resumo mensal executivo de Ads | `feedback-v2-v3.md`; `src/ui/v3/pages/ads.tsx` | 3.7 e 3.8 | Aceito, implementado e verificado |
| FB-V2-P1-004 — investimento e leads simulados no Google | `feedback-v2-v3.md`; `src/lib/v3/metricas.ts`; `src/ui/v3/pages/google.tsx` | 3.7 e 3.8 | Aceito, implementado e verificado |
| FB-V2-P1-005 — investimento, alcance e leads simulados no Meta | `feedback-v2-v3.md`; `src/lib/v3/metricas.ts`; `src/ui/v3/pages/meta.tsx` | 3.7 e 3.8 | Aceito, implementado e verificado |
| FB-V2-P1-006 — comparação temporal em Estratégia | `feedback-v2-v3.md`; `src/ui/v3/pages/estrategia.tsx` | 3.7 a 3.9 | Aceito, implementado e verificado; sem atribuição causal |
| FB-V2-P1-007 — comunicação da previsão experimental | `feedback-v2-v3.md`; `src/ui/v3/previsao.tsx` | 3.5 e 3.7 a 3.9 | Aceito, implementado e verificado; algoritmo preservado |
| Decisão de aceitar os sete feedbacks | `docs/decisions.md`; `feedback-v2-v3.md` | 3.7, 3.8 e capítulo 4 | Registrada |
| V3 como versão da interface distinta das fases | `versoes-interface.md`; `src/lib/interface.ts`; `src/ui/index.ts`; `src/ui/v3/index.ts` | 2.5.4, 3.2, 3.3 e capítulo 4 | Implementada; Fases 3 e 4 bloqueadas |
| Verificação técnica da V3 e preservação da V1/V2 | `package.json`; `scripts/test-v3-feedback.mjs`; `scripts/test-interface.mjs`; `scripts/test-interface-http.mjs`; `docs/run_log.md` | 3.4.5 | Testes registrados; verificação técnica não equivale a reavaliação por P1 |
| Dados sintéticos adicionais e limites | `v3-dados-sinteticos.md`; `src/lib/v3/calculos.ts`; `src/lib/v3/metricas.ts` | 3.8, 3.9 e capítulo 4 | Regras `pij410-v3-extensao-1` documentadas; sem dados operacionais ou causalidade |
| Limitações do CPR experimental | `feedback-v2-v3.md`; artefatos de CPR preservados; `src/ui/v3/previsao.tsx` | 3.4, 3.5, 3.9 e capítulo 4 | Desempenho limitado explícito; P1 não validou matematicamente o modelo |

## Conferência das respostas primárias

O registro contém Q1–Q16. As notas são Q1=4, Q2=5, Q3=4, Q4=5, Q5=4, Q7=3, Q8=3, Q9=3, Q10=3, Q11=4, Q12=5 e Q13=5; Q15 é a opção C. As falas abertas de Q6, Q9, Q10, Q14, Q15, Q16 e o comentário espontâneo sobre ML permanecem no registro primário sem correção. A interpretação sobre qualidade percebida dos leads, o desfecho Matrículas e a percepção visual sobre a previsão estão separadas em `feedback-v2-v3.md`.

## Classificação de passagens potencialmente obsoletas

| Local | Classificação | Motivo ou correção |
|---|---|---|
| `docs/run_log.md`, registros anteriores à implementação da V3 | Histórica legítima | Descrevem o estado no momento de cada execução; o registro posterior documenta a implementação. |
| `docs/decisions.md`, decisões antigas sobre a V1 e sobre versões do relatório parcial | Histórica legítima | Não descrevem o estado atual da interface V3. |
| `docs/validacao/respostas/v2-p1-reavaliacao.md` | Histórica legítima | O texto sobre dois momentos pertence ao registro da segunda aplicação. |
| `docs/relatorio/auditoria-evidencias-final.md` (09/10/2026) | Histórica legítima | Inventaria as evidências disponíveis antes da terceira aplicação e da V3; a presente matriz registra o ciclo posterior. |
| `docs/relatorio/final.md`, tabelas históricas V1–V2 e estado datado de 06/10/2026 | Histórica legítima | As legendas e o texto explicitam o recorte temporal; a narrativa atual inclui a terceira aplicação e a V3. |
| `docs/validacao/README.md` e `protocolo_evidencias.md` | Corrigida | Ambos passaram a registrar as três aplicações da mesma P1 e a distinção entre V2 avaliada e V3 implementada. |
| `docs/validacao/versoes-interface.md` | Corrigida | A referência a dois momentos foi limitada às duas primeiras aplicações. |
| `docs/relatorio/final.md`, introdução, 2.5.4, 3.2 e Apêndice B.3 | Corrigida | A terceira avaliação, a disponibilidade da Fase 2 em V3 e as 16 questões foram explicitadas. |

Data, modalidade e TCLE específicos da terceira aplicação seguem sem confirmação no registro primário. Essa pendência de metadados não foi preenchida por inferência e não altera a rastreabilidade das respostas, decisões ou implementação técnica.
