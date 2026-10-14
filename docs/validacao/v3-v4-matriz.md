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

As páginas das Fases 1 e 2 são reutilizadas na V4 com aviso de conteúdo histórico preservado.
Fase funcional e versão da interface continuam conceitos distintos. A V3 permanece a versão
decorrente dos sete feedbacks da terceira avaliação de P1; a V4 ainda não foi avaliada.

Próximo ciclo previsto: avaliação da V4 com instrumento a definir posteriormente. O grupo
analisará eventuais feedbacks; os aceitos **poderão** originar uma V5. Não há V5 nesta etapa.
