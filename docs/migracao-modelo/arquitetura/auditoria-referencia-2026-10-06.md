# Auditoria de referência técnica e seleção acadêmica — 2026-10-06

## Preflight, procedência e limite da comparação

HOST dos dois repositórios: `DESKTOP-VU6VMS6`. Node: `v24.14.1`; npm: `11.11.0`.
Ambos utilizam `package-lock.json`; não declaram `packageManager` no package.json.
Os caminhos abaixo são registrados exclusivamente para identificar os alvos explicitamente indicados na solicitação; nenhum caminho de referência entra no runtime acadêmico.

| Repositório | Caminho autorizado | Branch | HEAD inicial |
|---|---|---|---|
| Referência técnica | `C:\Users\tisap\Documents\GitHub\campanha_sapucaia_2027` | dev | `a9c6c25ce234341fd8b5fdd7d33bb013b053e884` |
| Destino acadêmico | `C:\Users\tisap\Documents\GitHub\PIJ410-DRP14-A2026S2-T002` | dev | `47e499e64eeaee2cca59bab793864c8b7571521f` |

Git status inicial do destino (alterações anteriores preservadas):

```text
 M docs/decisions.md
 M docs/run_log.md
?? docs/migracao-modelo/referencias/Modelo_Relatorio_Final.docx
?? docs/relatorio/final.md
?? docs/validacao/
```

Git status inicial da referência (somente metadados de arquivo, sem conteúdo de dados):

```text
 M campanha_2027_sapucaia/00-overview/RUNBOOK-ATUALIZACAO-DADOS.md
 M campanha_2027_sapucaia/01-decisoes/0058-google-ads-api-aquisicao-de-dados-paralela.md
 M campanha_2027_sapucaia/01-decisoes/README.md
 M campanha_2027_sapucaia/05-dados/ads/README.md
 M package.json
 M scripts/check-media-governance.mjs
 M scripts/test-google-ads-acquisition.mjs
 M scripts/test-google-ads-api.mjs
?? campanha_2027_sapucaia/01-decisoes/0059-google-ads-api-prontidao-e-contrato-de-cutover.md
?? campanha_2027_sapucaia/05-dados/ads/processed/google_ads_api_cutover_readiness.json
?? campanha_2027_sapucaia/05-dados/ads/processed/google_ads_api_history_conversion_lag.json
?? campanha_2027_sapucaia/05-dados/ads/processed/google_ads_api_history_daily.json
?? campanha_2027_sapucaia/05-dados/ads/processed/google_ads_api_history_search_share_daily.json
?? campanha_2027_sapucaia/05-dados/ads/processed/google_ads_api_history_search_share_monthly.json
?? scripts/google-ads-readiness.mjs
?? scripts/test-google-ads-readiness.mjs
?? src/lib/google-ads/dashboard-adapter.ts
?? src/lib/google-ads/freshness.ts
?? src/lib/google-ads/readiness.ts
```

Scripts acadêmicos existentes: `dev`, `build`, `start`, `lint`, `dados:gerar`,
`verificar:integridade-docs`, `test:fases`, `test:determinismo`, `test:nao-vazamento`, `test`.
Scripts relevantes da referência: `build:enrollments`, `process:ads`, `process:crm-leads`,
`process:crm-visitas`, `process:captacao-origem`, `google-ads:fetch`, `google-ads:reconcile`,
`google-ads:diagnose-conversions`, `google-ads:readiness`, `test:google-ads-readiness`,
`test:captacao-granularidade`, `test:organic-top4`, `test:midia-orcamento`,
`test:ads-google-managerial`, `test:ads-meta-managerial`, além de dev/build/start/lint.
Nenhum script operacional da referência foi executado.

Durante a leitura, a referência foi commitada externamente e passou a
`edfa12451ccca19edf1d845960cf664bc153dee1`, sem pendências locais.
Os 304 arquivos em src/scripts/package.json/package-lock.json conferidos no preflight mantiveram
os mesmos hashes. Esta execução não fez escrita, commit ou push na referência.

No encerramento da verificação, o mesmo HEAD passou a apresentar **novas alterações externas**:
um pipeline de investimento por ciclo, seus contratos e seu card na Estratégia. Foram observados
309 arquivos técnicos e sete diferenças de conteúdo/caminho em relação ao preflight (duas em
arquivos existentes e cinco arquivos técnicos novos), além de artefatos/documentação operacionais.
O corte reproduzível da implementação permanece o HEAD consolidado acima; o delta simultâneo
foi inspecionado e classificado separadamente a seguir, sem incorporar parâmetros financeiros.

A baseline acadêmica foi construída em 27/08/2026 sobre o documento de estrutura gerado em
26/08/2026. Não há SHA de origem formalmente registrado nessa baseline. Para o levantamento
histórico adotou-se como **comparador por data**, e não como origem comprovada de cada arquivo,
`4e1fa6e08e489500cb5308d0ed254b7101eadb60` (26/08/2026, documento de estrutura).
Essa lacuna de procedência não foi preenchida por suposição.

**Legado revisado no gate de 06/10/2026:** o documento em
`docs/migracao-modelo/referencias/RELATORIO-ESTRUTURA-E-METODOLOGIA-ADS.md` declarava manter
parâmetros financeiros e taxas operacionais. Seu conteúdo atual foi substituído por síntese
conceitual, sem valores, metas, limiares, calendários ou diagnósticos operacionais.
Nenhum desses valores foi reutilizado, perturbado ou calibrado nos datasets sintéticos.
A sanitização da árvore de trabalho não reescreve versões anteriores no histórico Git.

Comparação de metadados entre o comparador e o HEAD consolidado: **454 caminhos alterados**,
dos quais 231 de código/configuração, 75 documentos operacionais, 141 dados/artefatos operacionais
e 7 outros. O inventário técnico ao fim contém 232 caminhos, incluindo o dataset operacional
em src/data, classificado como NÃO MIGRAR. Foram inspecionados os contratos analíticos, os
consumidores pertinentes e as alterações técnicas relevantes; conteúdos brutos, credenciais e
operações de escrita foram excluídos. O inventário não equivale a uma leitura de dados operacionais.

## Evoluções relevantes encontradas

| Área | Estado técnico encontrado | Tratamento acadêmico |
|---|---|---|
| Captação | Linha temporal com fontes por competência; granularidade diária/semanal/mensal; aditivos separados de visitas deduplicadas por bucket; origem registrada/inferida/desconhecida | Preservar o funil sintético, deduplicar seleções de filtro e explicitar limite de atribuição. Documentar granularidades e transição; a base mensal acadêmica não sustenta diário ou semanal por redistribuição |
| Matrículas | Continuidade N versus N−1, base anterior explícita, exclusão de saídas por conclusão conforme regra institucional; preservação de data original em troca de turma | Não copiar nomes, registros ou regras institucionais. Corrigir o rótulo acadêmico: rematrículas/total atual é participação, não retenção de coorte |
| Ads geral | Visão gerencial por canal, estado atual separado de histórico, orçamento planejado separado de gasto | Preparar visão acadêmica reduzida, com total somente quando a cobertura de ambos os canais é conhecida |
| Google Ads | Série mensal/campanha e novo contrato diário; custo em micros, conversões fracionárias, métricas derivadas, diagnóstico de atraso e cobertura | Reimplementar contratos sintéticos e experimento temporal de CPR; nenhuma aquisição por API |
| Fonte Google | Adapter e readiness presentes; constante de fonte do dashboard ainda é CSV, com cutover separado | Não declarar integração API como fonte já substituída; aproveitar apenas separação entre aquisição, contrato e consumo |
| Meta Ads | Métricas por objetivo/frente, janelas fechadas/rolantes, frequência/alcançe não aditivos; nova governança de escrita | Adaptar somente custo/resultado por indicador e ausência de cobertura; excluir publicação/automação e constantes de negócio |
| Estratégia | Comparação orçamento × realizado, escopos/ciclos e cenários de frequência com premissas explícitas | Exemplo fictício de orçamento versus gasto; sem motor automático de decisão ou recomendação derivada do ML |
| Conteúdo orgânico | Score com ausência explícita, pesos versionados e desempate total; shortlist operacional | Documentar somente ranking explicável e determinismo; não migrar mídia, identificadores ou promoção automática |
| Objetivo da Gestão | Premissas recebidas isoladas dos dados apurados, com observações sobre inconsistências | Documentar a distinção entre meta/premissa e observação; não transportar projeções financeiras ou planos da instituição |
| Arquitetura & Algoritmos | Núcleos puros separados de I/O, contratos, testes offline, reconciliação e bloqueio por cobertura/qualidade | Aplicar pureza, determinismo e verificações no núcleo acadêmico; documentar o restante |

## Matriz de seleção por funcionalidade

As categorias descrevem a seleção feita nesta rodada. MIGRAR significa reimplementar o conceito
ou método puro após revisão; não significa copiar arquivos operacionais.

| Componente | Existe no real | Relevante ao PI | Deve migrar | Motivo |
|---|---|---|---|---|
| Funil, indicadores e comparações de Captação | Sim | Sim (1, 2, 6, 7) | ADAPTAR | Preservar demonstração existente; deduplicar filtros e explicitar origem como associação, não atribuição causal |
| Fontes e mudanças de definição por competência | Sim | Sim (1, 7) | DOCUMENTAR SOMENTE | Base acadêmica não possui transição real a reconciliar |
| Granularidade diária/semanal | Sim | Sim (3, 6, 7) | DOCUMENTAR SOMENTE | Exige eventos sintéticos próprios; não derivar artificialmente da base mensal |
| Visitas únicas por bucket | Sim | Sim (1, 7) | DOCUMENTAR SOMENTE | Não somar contagens deduplicadas entre períodos; implementação futura exige unidade sintética apropriada |
| Origem explícita/inferida/desconhecida | Sim | Sim (4, 5, 7) | DOCUMENTAR SOMENTE | Preservar incerteza; não adotar inferências específicas da instituição |
| Regra de origem ausente/Site/Telefone como busca | Sim | Não como regra geral | NÃO MIGRAR | Regra operacional local não é atribuição comprovada de mídia |
| Associação CRM a campanhas | Sim | Limitada (7) | DOCUMENTAR SOMENTE | Associação não aditiva não é aquisição nem origem; nenhuma base CRM entra |
| Matrículas por safra/ciclo/turma | Sim | Sim (1, 2, 6) | DOCUMENTAR SOMENTE | Já existe demonstração acadêmica agregada |
| Retenção N−1 com classificação individual | Sim | Sim (2, 7) | DOCUMENTAR SOMENTE | Base acadêmica atual não conserva coortes; rótulo da proporção atual foi corrigido |
| Cruzamento por nome e registros individuais | Sim | Não neste ambiente | NÃO MIGRAR | Não é necessário expor pessoas para demonstrar indicadores agregados |
| Preservação de data em mudança de turma | Sim | Sim (1, 7) | DOCUMENTAR SOMENTE | Princípio de integridade temporal; sem histórico individual acadêmico para aplicar |
| Agregação de custos/conversões antes de calcular CPR | Sim | Sim (2, 4, 7, 8) | MIGRAR | Núcleo puro próprio recalcula razões sobre os totais |
| CTR, CPC e CPM com ausência/zero explícitos | Sim | Sim (2, 6, 7) | MIGRAR | Fórmulas e tratamento de ausência reimplementados localmente |
| Google campanha × mês | Sim | Sim (2, 3, 6, 8) | ADAPTAR | Cenário próprio de campanhas fictícias, sem correspondência 1:1 |
| Google campanha × dia | Sim | Sim (7, 8) | DOCUMENTAR SOMENTE | Fundamenta estrutura temporal; experimento mínimo utiliza contrato mensal |
| Conversões fracionárias e não únicas | Sim | Sim (7, 8) | MIGRAR | Mantida a semântica, sem convertê-las em leads ou matrículas |
| Regimes de disponibilidade/maturação | Sim | Sim (7, 8) | ADAPTAR | Data disponível explícita; janela acadêmica inventada e declarada |
| Adapter API/CSV e reconciliação de paridade | Sim | Sim (1, 7) | DOCUMENTAR SOMENTE | Somente arquitetura; nenhum SDK, cliente ou arquivo real |
| Search impression share e clipping | Sim | Sim (4, 7) | DOCUMENTAR SOMENTE | Não existe histórico elegível no cenário mínimo; não inventar feature para o ML |
| Status, orçamento e lance atuais como histórico | Sim | Não como feature | NÃO MIGRAR | Informação posterior replicada no passado produz leakage |
| Visão gerencial Google e filtros | Sim | Sim (3, 6, 8) | ADAPTAR | Tela preparada, com ano/campanha fictícios; gate continua fechado |
| Meta resultados separados por indicador | Sim | Sim (2, 4, 6) | ADAPTAR | Conversas e interações sintéticas não são somadas em CPR comum |
| Frequência e alcance não aditivos | Sim | Sim (7) | DOCUMENTAR SOMENTE | Não somar janelas nem derivar frequência semanal da mensal |
| Bandas de frequência/valores de referência operacionais | Sim | Não sem hipótese própria | NÃO MIGRAR | Constantes do cliente não são benchmarks universais |
| Orçamento versus gasto e cobertura entre canais | Sim | Sim (3, 4, 5, 6) | ADAPTAR | Comparação de meses compatíveis; premissa acadêmica fictícia e explícita |
| Cenários/decisões reais de investimento | Sim | Não como dados | NÃO MIGRAR | Financeiro identificável e decisões particulares; não são parâmetros acadêmicos |
| Rank orgânico explicável e desempate | Sim | Sim (2, 7) | DOCUMENTAR SOMENTE | Pode orientar cenário futuro; não ampliado nesta rodada |
| Criativos, thumbnails, links e contas | Sim | Não | NÃO MIGRAR | Identidade, IDs e ativos reais |
| Premissa de gestão separada da observação | Sim | Sim (5, 7) | DOCUMENTAR SOMENTE | Conceito útil; valores e plano real não são reutilizados |
| Núcleos puros, contratos e ordenação determinística | Sim | Sim (1, 7, 8) | MIGRAR | Código acadêmico próprio, sem I/O ou rede no cálculo |
| Validação de cobertura, dados ausentes e denominador | Sim | Sim (1, 2, 7) | MIGRAR | Falha explícita; não imputa zero nem recomenda sem medição |
| Google/Meta/Instagram APIs, Sheets, CRM e banco real | Sim | Não como conexão | NÃO MIGRAR | Somente contratos documentados; ambiente permanece offline |
| OAuth, login, autorização de plataforma e produção | Sim | Não | NÃO MIGRAR | Sem função no experimento demonstrativo |
| Escrita, ativação, pausa ou publicação de anúncios | Sim | Não | NÃO MIGRAR | Operação fora do objetivo científico |
| Modelo supervisionado Google CPR | Não localizado nos contratos auditados | Sim (8) | ADAPTAR | Experimento acadêmico novo; não presumir ML já existente no sistema real |
| ML em outros módulos | Não necessário | Não neste escopo | NÃO MIGRAR | Restrição explícita do grupo: ML somente em Google Ads |

## Delta externo observado ao encerrar a auditoria

O novo núcleo distingue valores observados, derivados e recomendados, analisa janelas históricas
e separa ciclo financeiro de mês-calendário. Esses conceitos são relevantes aos objetivos 3, 4,
5 e 7, mas seus limiares, divisões de orçamento e recomendações são específicos do contexto real.
Não são features nem resultados do experimento de CPR acadêmico.

Há ainda tratamentos que não devem ser reproduzidos automaticamente: uma janela sem linhas
retorna somas zero, e médias de conjuntos vazios não têm guarda explícita no diagnóstico Meta.
São riscos de ausência/denominador na aplicação do contrato, não afirmações sobre os dados
efetivamente coletados. O núcleo acadêmico mantém `null` para ausência e rejeita métricas inválidas.

| Caminho técnico do delta | Classificação | Tratamento |
|---|---|---|
| `src/lib/media-investment-cycle-core.ts` | DOCUMENTAR SOMENTE | Conceitos de janela, ciclo e classe de evidência; sem copiar heurísticas, parâmetros ou motor de recomendação |
| `src/lib/media-investment-cycle.ts` | NÃO MIGRAR | Leitor de artefato operacional; não transportar dados |
| `src/components/ads/InvestimentoCicloCard.tsx` | DOCUMENTAR SOMENTE | Separação entre observação, cálculo e recomendação; nenhum número/asset real |
| `src/app/(app)/ads/estrategia/page.tsx` | DOCUMENTAR SOMENTE | Inclusão do card no sistema real; não transplanta a página nem amplia o escopo acadêmico |
| `scripts/build-media-investment-cycle.mjs` | NÃO MIGRAR | Pipeline de artefatos reais; não executado |
| `scripts/test-media-investment-cycle.mjs` | DOCUMENTAR SOMENTE | Princípios de testes offline; fixtures reais não entram |
| `package.json` | DOCUMENTAR SOMENTE | Novos scripts operacionais não são incorporados ao package acadêmico |

Alterações de dados e o insight de investimento associados a esse delta não foram ingeridos.
A referência segue sendo modificada externamente; este documento é uma auditoria com corte,
não uma sincronização contínua. Nenhuma dessas mudanças externas foi descartada.

## Implementação e limites desta atualização

Núcleo analítico: `src/lib/ads/metricas.ts`. Gerador: `src/lib/sintetico/gerar-ads.ts`.
Experimento: `src/lib/ads/google-ml.ts` e `scripts/experimento-google-cpr.mjs`.
As quatro páginas de Ads receberam composição reduzida de interface acadêmica. O feature gate
permanece byte a byte igual: Fase 1 ativa; Fases 2–4 bloqueadas. Presença de preparação não é
entrega disponível ao usuário. Reels, Gestão e Arquitetura continuam sem implementação funcional nova.

Em Matrículas, a proporção calculada sobre o total atual passou a ser nomeada como participação
de rematrículas. Safras sem classificação deixam de alimentar cards e gráficos de composição;
seus volumes totais continuam presentes, e a tabela exibe ausência na composição desconhecida.
Nenhum número dos datasets existentes foi recalculado. Retenção de coorte e evasão continuam sem
evidência no cenário agregado atual. Seleções repetidas de safra/ciclo são deduplicadas nos dois módulos.

Não foram copiadas bibliotecas operacionais, registros, exports, assets, constantes de contas,
parâmetros financeiros reais ou configurações. Os novos datasets são gerados do zero com seed
e contêm apenas métricas agregadas/códigos de cenário fictícios.

A documentação científica permaneceu preservada na migração inicial: não foram alterados Parcial, suas versões, Final,
modelos oficiais ou evidências de comunidade. Naquele momento, a atualização do recorte do ML no Final e a revisão
de qualquer menção à retenção ficaram pendentes de revisão editorial, sem resultados empíricos presumidos.
No gate posterior de 06/10/2026, o Final recebeu somente a integração técnico-metodológica do
experimento de CPR e correções de consistência, inclusive participação de rematrículas em vez
de retenção de coorte. A validação com a comunidade continua pendente.

Método, leakage e resultados: [experimento-google-cpr.md](experimento-google-cpr.md).

## Gate técnico-documental pós-migração e ML CPR

O conteúdo atual do legado foi sanitizado e o Final recebeu método, resultados sintéticos e
limitações, sem abrir fases ou preencher validação comunitária. A varredura ampliada encontrou
também um contato institucional real no User-Agent do script bibliográfico em
`.claude/skills/pesquisa-bibliografica/scripts/buscar.py`; ele foi removido, sem mudança da pesquisa.
O teste automático de não vazamento cobre runtime, não essa pasta nem a documentação científica.

**Bloqueador de sanitização no histórico:** o commit `6095a9b` ainda contém a versão operacional
do legado, com parâmetros financeiros; o commit `9ef8af9` ainda contém o contato institucional
do script. São exposições verificadas, não simples referências de procedência. A árvore de
trabalho corrigida não apaga esses objetos Git. Não foi reescrito histórico, feito commit ou push.
Antes de liberar o gate, é necessária decisão humana sobre tratamento seguro do histórico;
essa operação não está autorizada nesta execução.

## Inventário completo de caminhos técnicos alterados

Status Git em relação ao comparador por data: A = adicionado; M = modificado; D = removido;
R099 = renomeado. Inclui nomes de arquivo, nunca conteúdo de datasets ou de configuração sensível.
A decisão por funcionalidade acima prevalece: uma linha ADAPTAR reutiliza somente os conceitos
explicitamente indicados, não o arquivo inteiro.

| Status | Caminho técnico na referência | Classificação | Ação/limite |
|---|---|---|---|
| M | `package.json` | DOCUMENTAR SOMENTE | Sem copiar SDKs ou scripts operacionais; scripts acadêmicos próprios. |
| M | `scripts/analise-limitacao-google.mjs` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `scripts/build-enrollments.mjs` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `scripts/build-instagram-top4.mjs` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `scripts/build-meta-mfa4-budget.mjs` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `scripts/build-meta-mfa4-scenarios.mjs` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `scripts/check-crm-safety.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/check-investimento-ledger.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| M | `scripts/check-media-governance.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/check-meta-ledger-safety.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/fetch-meta-mfa4.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/fetch-meta-portfolio-snapshot.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/fetch-meta-write-status.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/google-ads-conversion-diagnostic.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/google-ads-fetch.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/google-ads-health.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/google-ads-readiness.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/google-ads-reconcile.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-activate.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-authorize.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-batch.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-curated-fast.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-curated-reconcile.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-curated.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-ads-execute.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-pause.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-ads-plan.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-reconcile-active-ad.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-reconcile-ad.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-reconcile-with-issues.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-resume-w1.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-v1-remarketing-2027.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-validate-w2.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-w4-arm.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-w4-plan.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-ads-wave.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write-status-core.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/README.md` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/activate-w3.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/adapters/reconhecimento.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/adapters/remarketing-2027.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/adapters/seguidores.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/allowlist.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/api-freeze.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/approval.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/canary-permit.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/client.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/commissioning.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/curated-fast-path-exec.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/curated-fast-path-real.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/curated-fast-path-runner.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/curated-fast-path-sim.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/curated-fast-path.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/curated.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/destinations.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/erros-meta.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/guard.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/leitores.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/leva.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/machine.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/media.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/pause-w4.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/payload-binding.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/pre-commissioning.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/protected-ads.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/read-model.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/reconcile-active.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/reconcile-with-issues.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/reconcile.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/resume-w1.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `scripts/meta-write/state.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/top4.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/validate-only.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/w4-arm.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/w4-targets.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/meta-write/wave.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/process-captacao-contatos-origem.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/process-crm-campaign-association.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/process-crm-leads.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/process-crm-oportunidades.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/process-crm-visitas-agendadas.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/reconcile-captacao-julho-contatos.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/reconcile-captacao-julho-visitas.mjs` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `scripts/test-ads-data.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-ads-google-managerial.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-ads-meta-managerial.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-ads-overview.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-approval-binding.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-anos-origem-google.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-evolucao-mensal.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-granularidade-ui.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-granularidade.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-matricula-rematricula.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-origem-precedencia.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-origem-viewer.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-origem.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-captacao-timeline.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-commissioning-policy.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-commissioning.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-crm-campaign-association-ui.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-crm-campaign-association.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-crm-contatos.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-crm-oportunidades.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-crm-visitas-agendadas.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-curated-add-only.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-curated-fast-path-e2e.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-curated-fast-path.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-datas-interface.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| M | `scripts/test-enrollments-guards.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-erros-meta.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-followers-api-freeze.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-followers-dof-governance.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-followers-managerial-status.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-followers-manual-parity.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-google-ads-acquisition.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-google-ads-api.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-google-ads-conversion-diagnostic.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-google-ads-readiness.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-google-impression-share.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-investimento-ledger-check.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-leva-batch-writer.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-leva-top4-gate.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-manual-protected-ad-guard.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-meta-ledger-safety.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-meta-mfa4-budget.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-meta-mfa4-scenarios.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-meta-mfa4.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-meta-portfolio-scenarios.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-meta-write-data.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| M | `scripts/test-meta-write-guards.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-midia-orcamento.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-navigation.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-nova-metodologia.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-organic-top4.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-organico-thumbnails.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-painel-crm.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-payload-binding.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-reconcile-active-w3.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-reconcile-w3.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-reconhecimento-adapter.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-remarketing-2027-adapter.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-resume-w1.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-rotation-wave-gate.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-rotation-wave-writer.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-rotulos-campanha.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-seguidores-adapter.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-serie-contatos-2026.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-top4-planner.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-validate-only.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-w4-arm.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-w4-pause-executor.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| A | `scripts/test-w4-target-plan.mjs` | DOCUMENTAR SOMENTE | Usar princípios de verificação; fixtures e regras reais não são copiadas. |
| M | `src/app/(app)/ads/estrategia/page.tsx` | ADAPTAR | Implementação acadêmica própria e reduzida, com dados sintéticos; Fase 2 bloqueada. |
| M | `src/app/(app)/ads/google/page.tsx` | ADAPTAR | Implementação acadêmica própria e reduzida, com dados sintéticos; Fase 2 bloqueada. |
| M | `src/app/(app)/ads/meta/[campaignId]/page.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/app/(app)/ads/meta/page.tsx` | ADAPTAR | Implementação acadêmica própria e reduzida, com dados sintéticos; Fase 2 bloqueada. |
| M | `src/app/(app)/ads/page.tsx` | ADAPTAR | Implementação acadêmica própria e reduzida, com dados sintéticos; Fase 2 bloqueada. |
| A | `src/app/(app)/captacao/page.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| D | `src/app/(app)/dashboard/page.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| R099 | `src/app/(app)/objetivo-gestao/page.tsx → src/app/(app)/gestao/page.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/app/(app)/matriculas/page.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/app/(app)/organico/page.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/app/(app)/page.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/components/ads/MetaApiShared.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/ads/MetaWriteStatus.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/components/app-shell.tsx` | DOCUMENTAR SOMENTE | A navegação acadêmica já deriva do gate único; preservar. |
| M | `src/components/auth/LoginForm.tsx` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/components/dashboard/CaptacaoTemporal.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/ComparativoJanJun.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/CrmAssociacaoCampanhas.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/CrmPainelCliente.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/CrmSnapshotPanel.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/EvolucaoDetalheChart.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/EvolucaoMensalCaptacao.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/EvolucaoMensalCrm.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/EvolucaoMensalCrmGrafico.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/GranularidadeToggle.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/components/dashboard/MonthlyChart.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/OrcamentoVsRealizadoMidia.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/OrigemContatosCaptacao.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/PerformanceCrmGraficos.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/dashboard/PerformanceCrmTrafego.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/fontes-de-dados.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/components/organico/CicloConteudoFilterBar.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/components/organico/ReelThumb.tsx` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/components/sidebar-nav.tsx` | DOCUMENTAR SOMENTE | A navegação acadêmica já deriva do gate único; preservar. |
| M | `src/data/enrollments.json` | NÃO MIGRAR | Dataset operacional; apenas contagens sintéticas acadêmicas são admitidas. |
| M | `src/lib/ads-data.ts` | ADAPTAR | Implementação acadêmica própria e reduzida, com dados sintéticos; Fase 2 bloqueada. |
| A | `src/lib/ads-overview-core.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/ads-overview.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/campanhas-rotulos.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/captacao-granularidade-server.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/captacao-granularidade.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/captacao-origem-data.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/captacao-origem.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/captacao-timeline-server.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/captacao-timeline.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/lib/ciclo.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/crm-data.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/lib/crm-performance.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/datas.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/lib/enrollment-data.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/google-ads/acquisition.ts` | ADAPTAR | Apenas métricas, agregação e disponibilidade temporal; nenhuma API. |
| A | `src/lib/google-ads/auth.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/lib/google-ads/client.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/lib/google-ads/config.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/lib/google-ads/conversion-diagnostic.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/google-ads/dashboard-adapter.ts` | ADAPTAR | Apenas métricas, agregação e disponibilidade temporal; nenhuma API. |
| A | `src/lib/google-ads/freshness.ts` | ADAPTAR | Apenas métricas, agregação e disponibilidade temporal; nenhuma API. |
| A | `src/lib/google-ads/gaql.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/lib/google-ads/readiness.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/google-ads/reconcile.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/google-ads/sanitize.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `src/lib/leads.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/meta-mfa4-budget.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/meta-mfa4-core.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/meta-mfa4-data.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/meta-mfa4-scenarios.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/meta-portfolio-scenarios.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/meta-write-data.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/lib/midia-mensal.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/midia-orcamento-core.ts` | ADAPTAR | Implementação acadêmica própria e reduzida, com dados sintéticos; Fase 2 bloqueada. |
| A | `src/lib/midia-orcamento.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/navigation.ts` | DOCUMENTAR SOMENTE | A navegação acadêmica já deriva do gate único; preservar. |
| M | `src/lib/organico-ciclo.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/organico-ranking.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| A | `src/lib/organico-thumbnails.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `src/lib/sheets-data.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| M | `src/lib/supabase/middleware.ts` | NÃO MIGRAR | Integração, dados/identificadores operacionais ou operação externa. |
| A | `src/types/captacao-timeline.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/types/enrollment.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
| M | `src/types/lead.ts` | DOCUMENTAR SOMENTE | Contrato/estrutura auditada; sem cópia operacional. |
