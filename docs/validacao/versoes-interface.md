# Versões da interface acadêmica

O versionamento representa composições históricas da interface. Ele é distinto da capacidade
técnica global do projeto e dos gates de implantação.

| Versão | Conteúdo |
|---|---|
| V1 | Captação + Matrículas |
| V2 | Captação + Matrículas + Ads + ML CPR |

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

A V2 decorreu de evolução técnica/acadêmica, não de feedback comunitário. Não existem
resultados de validação da V2 nem feedback fictício atribuído à comunidade.

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

A primeira aplicação comunitária usa o questionário curto V1, somente com Captação e
Matrículas, em 10–15 minutos. O instrumento mais extenso foi preservado separadamente em
`instrumento_validacao_v2.md` para uso futuro. O TCLE segue o protocolo definido.

## Registro cronológico

| ID | Origem | Alteração | Versão | Evidência comunitária |
|---|---|---|---|---|
| HIST-001 | Correção factual da cronologia | V1 recomposta como baseline pré-Ads | V1 | Não se aplica |
| TEC-001 | Evolução técnica/acadêmica | Ads, experimento CPR e previsão sazonal | V2 | Nenhuma; validação futura |
