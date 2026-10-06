# Versões da interface acadêmica

Decisão: ADR-008 em `docs/decisions.md`. Versões comparáveis usam `/v1`, `/v2` e,
se autorizadas no futuro, V3 e seguintes. Não se usam nomes relativos como old/new/legacy.
Versionamento de apresentação não é versionamento do experimento científico nem abertura de fases.

## V1

Status: **BASELINE PRÉ-VALIDAÇÃO**.

Data de congelamento: **06/10/2026**.

Fases: 1 e 2 ativas; 3 e 4 bloqueadas.

Objetivo: servir como referência inicial da interface antes dos ajustes oriundos da validação.
Preserva o estado funcional/visual aprovado localmente, exceto prefixo de rota e identificador discreto.

Páginas: `/v1`, `/v1/captacao`, `/v1/matriculas`, `/v1/ads`, `/v1/ads/google`,
`/v1/ads/meta` e `/v1/ads/estrategia`.

V1 somente pode ser alterada para bug crítico, erro factual, vulnerabilidade, vazamento ou
falha que impeça execução. Uma melhoria de UX não autoriza editar V1. Toda exceção exige
motivo documentado, testes e revisão humana da proteção de hashes.

## V2

Status: **BASE INICIAL — AINDA SEM ALTERAÇÕES DE FEEDBACK**.

Origem: V1.

Objetivo: receber ajustes decorrentes de validação, preservando a V1 para comparação.
As mesmas páginas existem sob `/v2`, inicialmente equivalentes. Nenhuma melhoria, feedback,
aprovação, resultado comparativo ou benefício foi presumido.

| Versão | Estado | Alterações em relação à anterior | Evidência |
|---|---|---|---|
| V1 | baseline | Não se aplica; estado atual aprovado localmente | Pré-validação; não é avaliação comunitária |
| V2 | preparada | Nenhuma ainda, exceto identificação/roteamento | [PENDENTE — feedback e avaliação reais] |

## Arquitetura e proteção

- `src/lib/interface.ts`: versões aceitas, `CURRENT_UI_VERSION`, prefixos e aliases com filtros preservados.
- `src/app/(app)/[uiVersion]/`: validação da versão, layout e roteador comum; versão/rota desconhecida dá 404.
- `src/ui/v1/`: composições de tela preservadas; componentes existentes em `src/components/`
  e estilo base são dependências protegidas da baseline, não pontos de edição de UX para V2.
- `src/ui/v2/index.ts`: registro independente que herda as apresentações V1 inicialmente.
  Uma alteração futura substitui somente a página/componente necessário por uma implementação
  em `src/ui/v2/`, sem editar a baseline ou copiar a camada analítica.
- `data-ui-version` permite escopo de estilos futuros por versão; nunca alterar CSS global
  ou componentes protegidos para melhorar V2. O tema atual permanece igual.
- `scripts/ui-v1-baseline.mjs`: hashes de 17 fontes de apresentação/identidade; testes verificam
  esses arquivos sem regenerar ou aprovar hashes automaticamente. Não é snapshot de dados.
- Datasets em `src/data/`, contratos, tipos, utilitários analíticos e algoritmos em `src/lib/`
  são únicos e compartilhados. Não existem calcularMetricasV1/V2 nem cópias de datasets nas UIs.
- O artefato CPR é o mesmo para ambas; treinamento permanece na CLI, nunca no navegador.

Rotas canônicas apontam para `CURRENT_UI_VERSION`, atualmente `v1`, por redirect temporário 307.
Filtros da URL são preservados. Navegação e página inicial mantêm o prefixo da versão acessada.
Não há seletor de versão para o participante; o pesquisador acessa `/v1` ou `/v2` diretamente.
O identificador discreto aparece no desktop e mobile, inclusive em capturas de evidência.

Promover V2 exige feedback real, alterações selecionadas, testes, comparação e decisão explícita.
Não há promoção, deploy ou autorização de publicação nesta execução. O bloqueio do histórico Git
permanece separado e não foi resolvido.

## Comparabilidade e primeira aplicação

A primeira sessão real deve usar **V1**, sem apresentar V2 como alternativa. Registrar versão,
dataset/seed, período, filtros e módulos efetivamente apresentados. Pela ampliação documental explícita de 06/10/2026, o instrumento cobre Captação, Matrículas
e Ads (Visão Geral, Google Ads, Meta Ads, Estratégia e comunicação do experimento CPR),
com tarefas A–K e 18 perguntas em 30 a 40 minutos. Não se avalia a qualidade científica
do modelo. Fases 3 e 4 continuam bloqueadas; V2 não recebe mudanças nem é apresentada.

Comparações posteriores exigem mesmo dataset, métricas, período/filtros, fórmulas, gates e
definição de CPR. Somente elementos deliberadamente modificados de apresentação podem variar.
Alteração de algoritmo científico exige decisão própria, não apenas nova versão da interface.

Ciclo: V1 → validação → feedback real → seleção de alterações → V2 → nova validação →
comparação V1/V2 → eventual V3. Nenhuma dessas etapas futuras é declarada concluída.

## Changelog de validação — template vazio

| ID | Feedback/evidência | Alteração proposta | Versão | Status |
|---|---|---|---|---|

Preencher somente após coleta e análise de evidências reais, distinguindo observação e interpretação.

## Verificações

`npm run test:interface` verifica configuração, gates, herança inicial e proteção de V1.
`npm run test:interface:http -- --url=http://127.0.0.1:3101` verifica servidor local, paridade
do conteúdo principal nas duas versões (incluindo filtros), identificadores, navegação,
aliases e bloqueios. O teste HTTP não acessa ambientes publicados.
