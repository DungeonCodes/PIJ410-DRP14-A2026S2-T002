# Versões da interface acadêmica

O versionamento representa composições históricas da interface. Ele é distinto da capacidade
técnica global do projeto e dos gates de implantação.

| Versão | Conteúdo |
|---|---|
| V1 | Captação + Matrículas |
| V2 | Captação + Matrículas + Ads + ML CPR + evolução temporal consolidada (FB-V1-P1-001) |
| V3 | Fases 1 e 2 com as sete melhorias FB-V2-P1-001 a FB-V2-P1-007; nova apresentação final do protótipo acadêmico |

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
a implementação de FB-V1-P1-001; TCLE obtido: SIM nessas duas aplicações iniciais. Houve uma
participante em ambos os momentos.
A mesma P1 participou depois de uma avaliação ampliada da V2 para orientar a V3, documentada em
`instrumento_validacao_v2_para_v3.md`, `respostas/v2-p1-para-v3.md` e `feedback-v2-v3.md`.
Esse é o terceiro momento sucessivo da mesma participante, sem constituir nova amostra
independente. Data, modalidade e TCLE específicos desta nova aplicação ainda dependem de
confirmação no registro de respostas. P1 classificou a V2 na opção C, como necessitando
alterações importantes antes da versão final. Os feedbacks FB-V2-P1-001 a FB-V2-P1-007
foram aceitos pelo responsável e implementados na V3. Essa implementação não é validação por P1.

A versão apresentada deve ser registrada em cada momento. As notas pertencem à mesma pessoa,
mas a versões e itens diferentes; não constituem comparação quantitativa controlada.
O instrumento extenso `instrumento_validacao_v2.md` permanece separado da reavaliação anterior
e deste novo instrumento de 16 questões. Sessões futuras devem registrar versão e seguir o TCLE
conforme o protocolo definido.

## Estado histórico para a V3

V1 permanece congelada como baseline. V2 permanece a versão avaliada. A cadeia documentada é
V1 → P1/V1 → FB-V1-P1-001 → V2 → P1/V2 → avaliação ampliada da V2 pela mesma P1 →
FB-V2-P1-001 a FB-V2-P1-007 → decisão do responsável: aceitar todos → V3 implementada e
verificada tecnicamente. P1 avaliou a V2, não a V3; a revisão visual humana da V3 está pendente.

A V3 usa `/v3` e seus módulos com o mesmo mecanismo de roteamento. V1 e V2 mantêm suas rotas,
composições e apresentação históricas. `CURRENT_UI_VERSION = "v1"` e os aliases canônicos não
mudaram. As Fases 1 e 2 estão ativas nas V2/V3; as Fases 3 e 4 continuam bloqueadas em todas
as versões. **Versão da interface não equivale a fase funcional.**

A V3 reutiliza os contratos sintéticos existentes e acrescenta somente regras de apresentação
e derivação documentadas em `v3-dados-sinteticos.md`. A comparação mensal de Ads com Matrículas
é exploratória, entre cenários fictícios independentes, sem atribuição causal.

## Registro cronológico

| ID | Origem | Alteração | Versão | Evidência comunitária |
|---|---|---|---|---|
| HIST-001 | Correção factual da cronologia | V1 recomposta como baseline pré-Ads | V1 | Não se aplica |
| TEC-001 | Evolução técnica/acadêmica | Ads, experimento CPR e previsão sazonal | V2 | Nenhuma no momento da inclusão; avaliação ampliada posterior da V2 |
| V3-001 | Sete feedbacks aceitos após avaliação ampliada da mesma P1 | Apresentação executiva mensal, análises temporais, composição por série e comunicação do ML | V3 | P1 avaliou V2; V3 ainda sem nova avaliação por P1 |

### Alteração aprovada pelo grupo após feedback real

| ID | Origem | V1 | Alteração | Destino |
|---|---|---|---|---|
| FB-V1-P1-001 | Feedback real P1; implementação aprovada pelo grupo | Gráficos temporais distribuídos | Consolidação de Contatos, Visitas e Matrículas do funil em gráfico temporal multissérie selecionável | V2 |

Evidência posterior: a mesma P1 reavaliou V2 e relatou que a visualização conjunta facilitou a
comparação ao longo do tempo; não relatou dificuldades nem solicitou outra alteração naquele
momento. Trata-se de evidência exploratória individual, não validação definitiva. A expressão
“qualidade do lead” aparece na resposta de P1 como percepção; não constitui métrica comprovada.
