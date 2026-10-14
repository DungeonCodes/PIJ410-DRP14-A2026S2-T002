# Matriz V3 → V4

A transição V3→V4 é **EVOLUÇÃO TÉCNICA/ACADÊMICA** do grupo. Não ocorreu questionário,
entrevista ou avaliação comunitária entre as versões. Nenhum item abaixo tem origem em P1.

## Auditoria do escopo documentado antes da implementação

| Fase | Funcionalidade documentada | Evidência no repositório | Estado anterior | Necessário para V4 |
|---|---|---|---|---|
| 3 | `/organico` com publicações sintéticas, alcance e interações coerentes | `docs/migracao-modelo/arquitetura/plano-de-fases.md`, `src/lib/fases.ts` | BLOQUEADO | Sim |
| 3 | Score com pesos declarados, ausência diferente de zero e desempate total | `plano-de-fases.md` | PLANEJADO | Sim |
| 4 | Objetivo da Gestão como plano fictício de ocupação, isolado da base apurada | `plano-de-fases.md` | BLOQUEADO | Sim |
| 4 | Arquitetura & Algoritmos como documentação em prosa da stack, fontes e lógica | `plano-de-fases.md` | BLOQUEADO | Sim |
| 3–4 | Visualizações, métricas ou integrações adicionais sem contrato de dados e cálculo | Menções gerais em documentos de contexto | SEM ESPECIFICAÇÃO SUFICIENTE | Não; nenhuma funcionalidade foi inferida |

## Alterações técnicas

| ID | Módulo | V3 | V4 | Motivo | Origem | Evidência técnica |
|---|---|---|---|---|---|---|
| TEC-002 | Reels orgânicos | Fase 3 bloqueada | Publicações sintéticas, filtro mensal, score e ranking explicável | Completar a Fase 3 conforme o plano | EVOLUÇÃO TÉCNICA/ACADÊMICA | `src/lib/v4/organico.ts`, `src/ui/v4/pages/organico.tsx`, `test:v4` |
| TEC-003 | Objetivo da Gestão | Fase 4 bloqueada | Plano fictício de ocupação sem mistura com dado apurado | Demonstrar premissa externa separada de observação | EVOLUÇÃO TÉCNICA/ACADÊMICA | `src/lib/v4/gestao.ts`, `src/ui/v4/pages/gestao.tsx`, `test:v4` |
| TEC-004 | Arquitetura & Algoritmos | Fase 4 bloqueada | Página em prosa sobre stack, fontes, cálculos, verificações e limites | Fechar a documentação funcional prevista | EVOLUÇÃO TÉCNICA/ACADÊMICA | `src/ui/v4/pages/arquitetura.tsx`, testes HTTP |
| TEC-005 | Composição V4 | V1–V3 sem Fases 3 e 4 | `/v4` reúne os nove módulos das quatro fases; aliases e versões anteriores preservados | Disponibilizar o escopo concluído em versão separada | EVOLUÇÃO TÉCNICA/ACADÊMICA | `src/ui/v4/index.tsx`, `src/lib/fases.ts`, `test:interface`, `test:interface:http` |
| TEC-006 | Meta Ads | Somente totais mensais por campanha e indicador | Top 5 de criativos sintéticos da linha de conversas, ordenado por CPR | Demonstrar comparação explicável de anúncios pagos sem confundir com Orgânico | EVOLUÇÃO TÉCNICA/ACADÊMICA | `src/lib/v4/ads.ts`, `src/ui/v4/pages/meta.tsx`, `test:v4` |
| TEC-007 | Google Ads | Somente totais mensais por campanha | Top 5 de palavras-chave sintéticas, ordenado por custo por conversão registrada | Demonstrar comparação de custo e conversões da plataforma | EVOLUÇÃO TÉCNICA/ACADÊMICA | `src/lib/v4/ads.ts`, `src/ui/v4/pages/google.tsx`, `test:v4` |
| TEC-008 | Estratégia | Investimento e contagens mensais em painéis separados | Gráfico temporal complementar de CPR Google e CPR Meta por conversa, sem agregação | Dar leitura temporal de custos com denominadores identificados | EVOLUÇÃO TÉCNICA/ACADÊMICA | `src/lib/v4/ads.ts`, `src/ui/v4/pages/estrategia.tsx`, `src/ui/v4/graficos.tsx`, `test:v4` |

Na segunda iteração técnica, as páginas Meta, Google e Estratégia da V4 envolvem as páginas
V3 preservadas e acrescentam seções exclusivas da V4. Não houve novo instrumento, entrevista,
feedback ou avaliação de P1. As outras páginas das Fases 1 e 2 são reutilizadas com aviso de
conteúdo histórico preservado.
Fase funcional e versão da interface continuam conceitos distintos. A V3 permanece a versão
decorrente dos sete feedbacks da terceira avaliação de P1; a V4 ainda não havia sido avaliada
no momento dessa transição.

**Avaliação posterior:** P1 avaliou a V4 em 14/10/2026, na modalidade online, após sua
implementação. O [registro primário](respostas/v4-p1.md) e a [análise](analise-v4-p1.md)
documentam essa quarta aplicação. Ela não constitui origem das alterações V3→V4; todos os
itens TEC acima permanecem evolução técnica/acadêmica. Nenhuma alteração relevante foi
solicitada e nenhuma V5 foi criada.
