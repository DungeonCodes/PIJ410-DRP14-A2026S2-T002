# Versões da interface acadêmica

O versionamento representa composições históricas da interface. Ele é distinto da capacidade
técnica global do projeto e dos gates de implantação.

| Versão | Conteúdo |
|---|---|
| V1 | Captação + Matrículas |
| V2 | Captação + Matrículas + Ads + ML CPR + evolução temporal consolidada (FB-V1-P1-001) |

As origens são distintas: Ads e ML CPR constituem evolução técnica/acadêmica; a evolução
temporal consolidada foi aprovada pelo grupo após o feedback real de P1.

## V1 — baseline inicial pré-Ads

Estado funcional:

- Fase 1: Captação e Matrículas.

Ads ainda não fazia parte da interface. As únicas rotas funcionais são `/v1`,
`/v1/captacao` e `/v1/matriculas`. Rotas `/v1/ads/**` respondem 404 e não redirecionam
para V2. A navegação V1 não apresenta Ads, Orgânico, Gestão ou Arquitetura.

## V2 — evolução técnica/acadêmica

Estado funcional:

- Fase 1: Captação e Matrículas;
- Fase 2: Ads — Visão Geral, Google Ads, Meta Ads e Estratégia;
- demonstração acadêmica do experimento CPR;
- previsão sazonal experimental de CPR.

A incorporação de Ads e ML à V2 decorreu de evolução técnica/acadêmica. A primeira evidência
real de uso da V2 foi a reavaliação da mesma P1 em `respostas/v2-p1-reavaliacao.md`; nenhuma
resposta fictícia foi atribuída à comunidade.

Após a validação individual de P1 na V1, o grupo aprovou FB-V1-P1-001. A V2 agora apresenta
uma evolução temporal consolidada e selecionável em `/v2/captacao`. Essa alteração tem origem
comunitária distinta da inclusão técnica de Ads e ML.

### Granularidade e filtros da evolução temporal

| Série | Fonte | Granularidade original | Granularidade utilizada |
|---|---|---|---|
| Contatos | Contagens mensais do funil de Captação | Mês por safra e ciclo | Mês/ano |
| Visitas | Contagens mensais do funil de Captação | Mês por safra e ciclo | Mês/ano |
| Matrículas do funil | Contagens mensais do funil de Captação | Mês por safra e ciclo | Mês/ano |

Os filtros existentes de safra e ciclo recortam as três séries com os mesmos critérios.
Não há filtro de período adicional; o eixo usa os meses das safras selecionadas em ordem
cronológica. Meses sem observação permanecem `null`; zero é exibido somente quando há zero
observado. Não há interpolação, normalização percentual ou segundo eixo Y.

O módulo Matrículas usa outra base de contagens mensais, com totais próprios que não equivalem
às matrículas do funil de Captação. Seu gráfico de efetivação por mês permanece complementar
em `/v2/matriculas`; os filtros daquela página continuam independentes. A distinção é indicada
na seção consolidada para evitar comparação enganosa entre bases diferentes.

| Gráfico temporal anterior | Classificação na V2 | Decisão |
|---|---|---|
| Contatos por mês, em Captação | SUBSTITUÍDO PELO CONSOLIDADO | Removido apenas da apresentação V2 |
| Visitas por mês, em Captação | SUBSTITUÍDO PELO CONSOLIDADO | Removido apenas da apresentação V2 |
| Matrículas por mês, em Captação | SUBSTITUÍDO PELO CONSOLIDADO | Removido apenas da apresentação V2 |
| Efetivação de matrículas por mês, no módulo Matrículas | COMPLEMENTAR | Mantido; outra base e outra finalidade |

Funil, situação dos contatos, origem declarada e composição por safra/ciclo/turma são
visualizações não temporais e permanecem.

## Capacidade técnica e composição histórica

| Escopo | Estado |
|---|---|
| Capacidade técnica — Fase 1 | ATIVA |
| Capacidade técnica — Fase 2 | IMPLEMENTADA |
| Conteúdo V1 | Somente Fase 1 |
| Conteúdo V2 | Fases 1 e 2 |
| Fases 3 e 4 | BLOQUEADAS |

A restrição é aplicada na composição/roteamento da interface. Dados, métricas, seeds,
experimentos e artefatos científicos permanecem compartilhados e intactos.

## Versão corrente e aliases

`CURRENT_UI_VERSION = "v1"` permanece inalterado. Assim, `/captacao` e `/matriculas`
continuam apontando para V1. Enquanto V1 for corrente, não há alias canônico de Ads: `/ads`,
`/ads/google`, `/ads/meta` e `/ads/estrategia` respondem 404. Para acessar a capacidade técnica
de Ads, deve-se usar explicitamente `/v2/ads`, `/v2/ads/google`, `/v2/ads/meta` e
`/v2/ads/estrategia`. Essa decisão evita atribuir silenciosamente conteúdo V2 à V1.

## Validação

P1, gerente de Marketing, utilizou presencialmente a V1 e reavaliou a V2 em 07/10/2026, após
a implementação de FB-V1-P1-001; TCLE obtido: SIM. Houve uma participante em dois momentos.
A versão apresentada deve ser registrada em cada momento. As notas pertencem à mesma pessoa,
mas a versões e itens diferentes; não constituem comparação quantitativa controlada.
O instrumento mais extenso de V2 permanece separado em
`instrumento_validacao_v2.md`; sessões futuras devem registrar versão e seguir o TCLE conforme
o protocolo definido.

## Registro cronológico

| ID | Origem | Alteração | Versão | Evidência comunitária |
|---|---|---|---|---|
| HIST-001 | Correção factual da cronologia | V1 recomposta como baseline pré-Ads | V1 | Não se aplica |
| TEC-001 | Evolução técnica/acadêmica | Ads, experimento CPR e previsão sazonal | V2 | Nenhuma; validação futura |

### Alteração aprovada pelo grupo após feedback real

| ID | Origem | V1 | Alteração | Destino |
|---|---|---|---|---|
| FB-V1-P1-001 | Feedback real P1; implementação aprovada pelo grupo | Gráficos temporais distribuídos | Consolidação de Contatos, Visitas e Matrículas do funil em gráfico temporal multissérie selecionável | V2 |

Evidência posterior: a mesma P1 reavaliou V2 e relatou que a visualização conjunta facilitou a
comparação ao longo do tempo; não relatou dificuldades nem solicitou outra alteração naquele
momento. Trata-se de evidência exploratória individual, não validação definitiva. A expressão
“qualidade do lead” aparece na resposta de P1 como percepção; não constitui métrica comprovada.
