# Relatório de Estrutura da Aplicação + Metodologia de Cálculo das Inferências de Investimento em Ads

> **Documento anonimizado.** Não contém nomes de pessoas, nomes de instituições, identificadores
> de contas, handles de redes sociais, credenciais, IDs de planilha ou qualquer dado pessoal.
> Campanhas e sistemas de terceiros aparecem por **função** (ex.: "campanha de Pesquisa",
> "sistema acadêmico"), nunca pelo nome próprio. Os valores financeiros e as taxas incluídos são
> parâmetros operacionais do próprio projeto — são a substância da metodologia e por isso foram
> mantidos.
>
> Gerado a partir da leitura completa do repositório.
> Data de geração: 26/08/2026 · Branch: `dev`

---

## Sumário

**Parte I — Estrutura da aplicação**
1. Identidade técnica
2. Árvore de diretórios
3. Autenticação e proteção de rotas
4. Inventário completo de páginas (20 rotas)
5. Rotas de API
6. Camada de dados (`src/lib/`)
7. Componentes
8. Scripts e pipelines
9. Governança de mídia paga (read-only + exceção controlada)
10. Observações técnicas e pontos de atenção

**Parte II — Metodologia de cálculo das inferências de investimento em Ads**
11. Princípio geral: o motor de 3 camadas
12. Enquadramento estratégico: captura × geração de demanda
13. Fontes, recortes temporais e o que nunca se soma
14. Diagnóstico 1 — gargalo da mídia social: frequência semanal
15. Diagnóstico 2 — gargalo da busca paga: perda de impressões
16. Sazonalidade: as três estações e o teto de capacidade
17. **O cálculo dos três cenários de investimento** (fórmulas completas)
18. As 8 regras de negócio e o semáforo de conformidade (Camada 1)
19. Correlação agregada funil → matrícula (Camada 2)
20. Limites declarados de atribuição (Camada 3)
21. Vereditos por campanha
22. Tabela consolidada de constantes e fórmulas
23. Como auditar / reproduzir qualquer número

---

# PARTE I — ESTRUTURA DA APLICAÇÃO

## 1. Identidade técnica

| Item | Valor |
|---|---|
| Tipo | Dashboard analítico interno (privado, single-tenant) |
| Framework | Next.js 16.2.4 — App Router |
| Runtime UI | React 19.2.4 (Server Components por padrão) |
| Estilo | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Gráficos | Recharts 3.x |
| Ícones | lucide-react |
| Autenticação | Supabase (`@supabase/ssr` + `supabase-js`) |
| Integração externa em runtime | `googleapis` — Planilhas, escopo **readonly** |
| Deploy | Vercel |
| Linguagem | TypeScript 5 |
| Locale | pt-BR (`<html lang="pt-BR">`, formatação `toLocaleString('pt-BR')`) |

**Padrão arquitetural central:** *preparação local → arquivo versionado → app lê estático*.
Scripts rodam manualmente na máquina do time, gravam JSON/imagens no repositório, e a aplicação em
produção só lê esses arquivos.

Consequências desse padrão:

- produção não guarda tokens de terceiros;
- cada atualização de dado vira um commit auditável;
- qualquer número exibido é reproduzível a partir do arquivo versionado;
- a **única** fonte "ao vivo" em runtime é a planilha do funil.

---

## 2. Árvore de diretórios

```
raiz/
├── src/
│   ├── app/
│   │   ├── (app)/          → route group AUTENTICADO (layout com AppShell)
│   │   ├── api/            → 3 route handlers
│   │   └── login/          → rota pública
│   ├── components/         → UI por domínio: ads/ auth/ dashboard/ enrollments/ organico/
│   ├── lib/                → acesso a dados + algoritmos puros
│   │   └── supabase/       → client, server, middleware, auth-guard, actions
│   ├── data/               → JSON versionado de matrículas (gerado por script)
│   ├── types/              → tipos compartilhados
│   └── middleware.ts       → proteção global de rotas
│
├── scripts/                → 15 scripts de preparação local
│   └── meta-write/         → módulo de escrita restrita (8 módulos + adapters)
├── data/                   → JSONs de apoio + análise determinística + overrides manuais
├── docs/                   → setup, requisitos, diagnósticos (este arquivo)
├── campanha_2027_<nome>/   → documentação viva (00 a 10) + dados-fonte
│   ├── 01-decisoes/        → 23 ADRs numerados (fonte da verdade metodológica)
│   └── 05-dados/ads/       → raw/ (exports) e processed/ (JSONs normalizados)
├── public/                 → criativos e thumbnails baixados
└── .claude/                → settings + hook de política de versionamento
```

---

## 3. Autenticação e proteção de rotas

- `src/middleware.ts` intercepta **todas** as rotas exceto assets estáticos (`_next/static`,
  `_next/image`, favicon, imagens), delegando para `lib/supabase/middleware.ts` (`updateSession`).
- Rotas de API usam `requireUser()` (`lib/supabase/auth-guard.ts`) → HTTP 401 padronizado sem sessão.
- Sessão exibida no `AppShell`; logout via Server Action.
- Tema escuro por variáveis CSS (`--bg`, `--text`, `--accent-*`).

---

## 4. Inventário completo de páginas — 20 rotas

### 4.1 Rota pública (1)

| Rota | Linhas | Descrição |
|---|---|---|
| `/login` | 42 | Tela de acesso. `LoginForm` (client) dentro de `<Suspense>`. |

### 4.2 Grupo autenticado `(app)` (19)

#### Núcleo (6)

| Rota | Linhas | Descrição |
|---|---|---|
| `/` | 116 | Hub. Resumo do funil do ano letivo alvo + cards de acesso. `revalidate = 3600`. |
| `/dashboard` | 152 | **Funil de Captação.** Filtro multi-ano (`?anos=`) + ciclo (`?ciclos=`). Alterna modo simples ↔ comparativo. Trata falha estrutural da planilha com tela de erro dedicada. |
| `/matriculas` | 53 | **Histórico de matrículas.** 8 painéis, cada um com filtro próprio (default: duas safras mais recentes): métricas, comparação por calendário, série anual, empilhado, retenção, distribuição por segmento, quebra por turma, sazonalidade por tipo. |
| `/objetivo-gestao` | 227 | **Premissa externa.** Plano entregue pela gestão, transcrito em constante *hardcoded*. Página fisicamente isolada — não importa nenhum módulo de dados do app. |
| `/arquitetura` | 300 | Documentação técnica em prosa: stack, cinco fontes de dados, lógica de cada algoritmo. Sem segredos. |
| `/organico` | 516 | Ranking de conteúdo orgânico não impulsionado. Filtros: janela (`?win=` 7/15/30 dias) e ciclo do conteúdo (`?ciclos=`). Score ponderado transparente. |

#### Bloco Ads (5)

| Rota | Linhas | Descrição |
|---|---|---|
| `/ads` | 777 | Dashboard consolidado das duas plataformas, com aviso de recortes temporais diferentes. Seletor de janela, criativos ativos, melhores/piores custos por resultado, plano de execução e ~10 cards de base metodológica. |
| `/ads/google` | 150 | Um card por campanha: custo, cliques, CTR, CPC, conversões, taxa. |
| `/ads/meta` | 205 | Um card por campanha ativa, com indicador de resultado explícito e criativo. Seletor de janela. |
| `/ads/meta/[campaignId]` | 207 | Rota dinâmica: detalhe da campanha, anúncios individuais por janela. |
| `/ads/estrategia` | **1.897** | **A decisão de mídia do projeto.** 12 seções — objeto da Parte II deste documento. |

#### Bloco `campanha-2027` — 8 páginas construídas, **não linkadas** na navegação

Comentadas no array `navigation` do `AppShell` (`// TODO: habilitar quando pronto`). Acessíveis por
URL direta. Lêem conteúdo de arquivos Markdown da documentação viva via `lib/campaign-docs.ts`.

| Rota | Linhas | Conteúdo |
|---|---|---|
| `/campanha-2027` | 67 | Visão geral executiva |
| `/campanha-2027/mvp` | 77 | Escopo mínimo, público, mensagens, canais |
| `/campanha-2027/referencias-2026` | 61 | Leitura do ciclo anterior |
| `/campanha-2027/funil` | 51 | Funil mínimo de captação + retenção |
| `/campanha-2027/experimentos` | 52 | Experimentos iniciais |
| `/campanha-2027/metricas` | 30 | O que medir antes de escalar |
| `/campanha-2027/decisoes` | 70 | Decisões, insights, pendências, backlog |
| `/campanha-2027/apresentacao` | 200 | Deck em formato página |

---

## 5. Rotas de API — 3 handlers

| Rota | Auth | Descrição |
|---|---|---|
| `GET /api/sheets/leads` | ✅ | Payload do funil, `?ano=` opcional, `revalidate = 3600`. Erros com `hint` acionável. |
| `GET /api/sheets/test` | ✅ | Diagnóstico de conectividade. Mapeia erros para códigos legíveis com instrução de correção. |
| `GET /api/debug/env` | ❌ | Diagnóstico de variáveis de ambiente. **Ver seção 10.** |

---

## 6. Camada de dados (`src/lib/`) — 20 módulos

**Acesso a fonte**

- `sheets-client.ts` — cliente com escopo **readonly** explícito; ponto único de acesso (33 linhas)
- `sheets-data.ts` — dados do funil, modo simples e comparativo
- `enrollment-data.ts` — carrega o JSON de matrículas, monta os painéis
- `ads-data.ts` (629 linhas) — tipos e leitores de busca paga (mensal/campanha/total) e de mídia social (4 janelas de insight)
- `ads-creativos.ts` — resolver de criativos por nome normalizado

**Algoritmos puros**

- `leads.ts` (387) — parsing, saneamento de datas, métricas, funil, breakdown mensal, distribuição de status
- `enrollment-retention.ts` (277) — classificação rematrícula × nova
- `organico-ciclo.ts` (224) — ciclo do conteúdo por legenda ou curadoria manual
- `organico-score.ts` (62) — score ponderado de conteúdo orgânico
- `captacao-estrutura.ts` (110) — validação estrutural da planilha
- `ciclo.ts` — normalização turma → ciclo (EI, EF-I, EF-II, EM)

**Apresentação:** `segment-colors.ts`, `tipo-colors.ts`, `year-colors.ts`
**Documentação viva:** `campaign-docs.ts` (parser Markdown), `campaign-data.ts` (8 seletores)

---

## 7. Componentes — 32 arquivos

| Pasta | Qtd | Destaques |
|---|---|---|
| `dashboard/` | 9 | Cada visual tem par simples + `*Comparative` |
| `enrollments/` | 10 | 7 gráficos + filtros por painel |
| `ads/` | 4 | `AdsDashboardCharts`, `EstrategiaCharts`, `CreativeThumb`, `MetaApiShared` |
| `organico/` | 2 | `ReelThumb`, `CicloConteudoFilterBar` |
| `auth/` | 1 | `LoginForm` |
| Avulsos | 6+ | `app-shell`, `metric-card`, `section-header`, `strategy-card`, `simple-table`, `list-block`, `funnel-step`, `decision-card`, `empty-state`, `captacao-estrutura-erro` |

Estado de filtro vive **na URL**, não no navegador — qualquer visão é compartilhável por link.

---

## 8. Scripts e pipelines

**Ingestão** (manuais, nunca em produção)

| Comando | Função |
|---|---|
| `npm run build:enrollments` | Planilhas anuais do sistema acadêmico → JSON único versionado |
| `npm run process:ads` | Export CSV de busca paga → JSONs normalizados |
| `npm run meta:api` | API de anúncios: campanhas/anúncios ativos em 4 janelas + criativos |
| `npm run ig:organic` | Conteúdo orgânico dos últimos 30 dias, métrica a métrica |
| `npm run thumbs:ads` | Download de thumbnails |

**Verificação**

| Comando | Função |
|---|---|
| `npm run test:enrollments-guards` | Guardas do pipeline de matrículas |
| `npm run verify:retention` | Verificação da lógica de retenção |
| `npm run diagnose:matching` | Diagnóstico de cruzamento de nomes |
| `npm run test:meta-write` | 99 testes do módulo de escrita |
| `npm run check:media-governance` | Verificador de governança (alias `check:readonly`) |

**Análise determinística**

| Script | Função |
|---|---|
| `scripts/analise-limitacao-google.mjs` | Classifica a limitação da campanha de busca — ver seção 15 |
| `scripts/analise-fable5.mjs` | Análise auxiliar |

---

## 9. Governança de mídia paga

- **Busca paga: 100% read-only.** Nenhuma escrita, em nenhuma hipótese.
- **Mídia social — Campanha e Conjunto de anúncios: 100% read-only.** Orçamento, lance,
  segmentação, posicionamento, programação e objetivo nunca são alterados por código.
- **Mídia social — Anúncio e Criativo:** escrita só pelo módulo restrito `scripts/meta-write/`,
  limitada a 4 operações (criar anúncio nascendo pausado; criar criativo sobre mídia já publicada;
  pausado→ativo de anúncio novo aprovado; ativo→pausado de anúncio antigo aprovado).
  **DELETE e ARCHIVE são proibidos.**
- Escrita real exige credencial segregada, dry-run, autorização humana explícita e allowlist de
  destinos. **Estado atual: transporte de escrita não habilitado — nenhuma escrita é possível.**
- Arquitetura do módulo: allowlist de destinos → contrato por destino → regra de mídia → guard
  *deny-by-default* → revalidação GET dos objetos-pai → máquina de estados → registro de
  plano/execução/auditoria → **um único arquivo autorizado a emitir POST, com 13 travas cumulativas**.

---

## 10. Observações técnicas e pontos de atenção

**Ponto de atenção — `GET /api/debug/env`**

É o único endpoint sem `requireUser()`. Além de booleanos e comprimentos, retorna
`PRIVATE_KEY_FIRST_30` e `PRIVATE_KEY_LAST_30` de uma chave privada. Os 30 primeiros caracteres são
o cabeçalho PEM (baixo valor), mas os 30 últimos são material da chave.
**Recomendação:** adicionar o guard de sessão e remover os dois campos de recorte — os booleanos e o
comprimento já resolvem o diagnóstico.

**Outros pontos**

- **Débito de navegação:** 8 páginas do bloco `campanha-2027` prontas mas fora do menu.
- **Assimetria de tamanho:** `/ads/estrategia` (1.897 linhas) e `/ads` (777) concentram muita lógica
  de apresentação em arquivo único — candidatas a extração de seções.
- **Cache uniforme:** `revalidate = 3600` em todas as páginas com dado ao vivo.
- **Cultura de honestidade de dado**, consistente no código: dado ausente vira `null` sinalizado,
  nunca zero; data inválida não descarta o registro; falha estrutural vira tela de erro, não número
  errado; a página de premissa externa é isolada da base apurada.
- **23 ADRs** documentam cada escolha metodológica.

---
---

# PARTE II — METODOLOGIA DE CÁLCULO DAS INFERÊNCIAS DE INVESTIMENTO EM ADS

> Fonte primária: `src/app/(app)/ads/estrategia/page.tsx`, `scripts/analise-limitacao-google.mjs`,
> ADR 0016 (motor de 3 camadas) e ADR 0020 (magnitude da limitação por orçamento).
>
> **Princípio fundador:** *nenhum valor de cenário é digitado à mão.* Só a **configuração oficial
> aprovada** e os **multiplicadores** vivem no código; todo o resto é computado em runtime a partir
> das fontes reais. Cards de verba manuais foram deliberadamente aposentados por não serem
> auditáveis.

---

## 11. Princípio geral: o motor de 3 camadas

O método separa explicitamente o que temos do que não temos. Nenhuma camada se disfarça de outra.

| Camada | O que é | Status | Onde aparece |
|---|---|---|---|
| **1 · Conformidade** | Semáforo determinístico das 8 regras. Comparação pura real × requisito. Sem inferência causal. | **TEMOS** | seção 7 da página |
| **2 · Correlação agregada** | Funil → matrícula por safra × ciclo. | **TEMOS, COM RESSALVAS** | seção 8 da página |
| **3 · Atribuição individual** | Ligar um lead específico a uma matrícula específica, por canal. | **NÃO TEMOS** | seção 9 da página |

A Camada 3 **não é uma análise — é uma declaração de limite**. Existe no produto justamente para
impedir o erro mais caro do marketing escolar: falsa precisão de atribuição.

Onde falta dado, o status é **"não verificável"** — nunca é inventado nem preenchido por estimativa
silenciosa.

---

## 12. Enquadramento estratégico: captura × geração de demanda

Regra "95:5" da literatura de marketing (Ehrenberg-Bass / John Dawes):

- **~5% do mercado** está em busca ativa num dado momento → é onde a **busca paga colhe** (captura).
- **~95%** ainda não está procurando → é onde a **mídia social semeia** lembrança para a hora da
  decisão (geração).

A proporção é rotulada na interface como **ilustrativa, da literatura — não é dado medido do
projeto**. O enquadramento serve para dar vocabulário comum à equipe: a mídia social é defendida
pelo próprio papel, sem ser cobrada por métricas de busca.

**Consequência metodológica direta:** custos de campanhas com objetivos diferentes **nunca** são
comparados entre si. Cada campanha é julgada contra o próprio objetivo.

---

## 13. Fontes, recortes temporais e o que nunca se soma

| Fonte | Recorte | Natureza |
|---|---|---|
| Busca paga | Total histórico do CSV exportado (sem janela) | Export manual do painel |
| Mídia social | Janelas de **7 / 15 / 30 dias e total** | API de anúncios, fetch local |
| Funil de captação | Ao vivo (planilha, cache 1h) | Única fonte em runtime |
| Matrículas | Safras anuais consolidadas | Sistema acadêmico, XLS → JSON |
| Impression share | nov/2024 a jul/2026, mensal | Export manual do editor de relatórios |

**Regras de não-soma explicitadas no código (`sumMetaApiWindow`):**

- Só se somam entre campanhas: **gasto, impressões e alcance** — e o alcance somado já é declarado
  como possivelmente contando a mesma conta em campanhas diferentes.
- **Cliques no link e conversas iniciadas** são cada um de UM tipo de ação: somam-se só consigo
  mesmos, nunca entre tipos.
- As **4 janelas não são deriváveis umas das outras** — por isso todas são buscadas a cada fetch.
  Frequência semanal **não** é frequência mensal ÷ 4.
- Busca paga e mídia social **não são somadas nem comparadas** como se fossem o mesmo período.
- **Conversões de busca não são leads únicos** (a contagem pode ser "uma" ou "todas" por clique,
  o que permite taxas > 100%). **Conversa iniciada ≠ lead ≠ matrícula.**
- No acumulado ("total"), o alcance soma contas ao longo de meses e pode superar a população do
  raio geográfico — a interface declara que o retrato honesto de presença ativa são as janelas de
  7/15/30 dias.

---

## 14. Diagnóstico 1 — gargalo da mídia social: frequência semanal

O alcance da campanha de reconhecimento já cobre aproximadamente as contas do raio de ~5 km.
O gargalo, portanto, **não é alcance — é frequência**.

### 14.1 Medição (não é estimativa)

```
freqSem = frequency da janela de 7 dias
        = impressões da semana ÷ contas alcançadas na semana
```

A janela de 7 dias **é** uma semana, então a frequência semanal é **medida direta**, com data de
início e fim exibidas na interface. Isso é rotulado no produto como *"medida na janela de 7 dias —
não é estimativa"*.

### 14.2 Alvo de negócio

```
FREQ_MIN   = 2 exibições por conta por semana
FREQ_IDEAL = 3 exibições por conta por semana
```

Base: repetição fixa para construção de reconhecimento (mera exposição · Ehrenberg-Bass).

### 14.3 Custo para atingir a frequência-alvo — **estimativa linear declarada**

```
custoRecMes(alvo) = spend_7d × (alvo ÷ freqSem) × (30 ÷ 7)
```

Onde:

- `spend_7d` = investimento medido na janela de 7 dias
- `alvo ÷ freqSem` = fator de escala para chegar à frequência desejada
- `30 ÷ 7` = conversão de semana para mês

**Premissas explicitamente declaradas na interface:**

- alcance semanal constante;
- CPM constante;
- a plataforma **pode preferir ampliar alcance em vez de repetir** — por isso a recomendação
  operacional que acompanha é *usar meta/limite de frequência na campanha*.

Ordem de grandeza registrada no ADR: **~R$ 970/mês** para 2×/semana e **~R$ 1.450/mês** para
3×/semana, apenas na campanha de reconhecimento.

### 14.4 Composição do orçamento total de mídia social no cenário

```
metaFloor = orçamento remarketing de mensagens + orçamento seguidores
          = 232,50 + 157,50 = R$ 390,00   (demais campanhas mantidas como estão)

meta2x = custoRecMes(2) + metaFloor
meta3x = custoRecMes(3) + metaFloor
```

Se a janela de 7 dias não vier no último fetch, o valor cai para a config oficial (R$ 900) e a
interface declara "sem dado" em vez de estimar.

---

## 15. Diagnóstico 2 — gargalo da busca paga: perda de impressões

### 15.1 Por que o selo do painel foi rejeitado como evidência

A campanha de busca exibia o selo "Qualificado (limitado)" em 20 de 20 meses do CSV. O selo foi
**descartado como base de decisão** por dois motivos registrados em ADR:

1. Ele mede **frequência** (quantas vezes a campanha bateu no teto de orçamento), **não magnitude**
   (quanto de busca foi efetivamente perdido).
2. A plataforma tem incentivo comercial para exibi-lo — o selo induz aumento de gasto.

Verificação posterior confirmou ainda que o selo no CSV é o **estado atual replicado em toda linha**,
não uma série histórica mês a mês. Vale só como indicador de hoje.

### 15.2 A métrica factual adotada: impression share

Métrica real de magnitude = **parcela de impressões perdida na rede de pesquisa**, decomposta em
duas causas independentes:

```
100% = IS obtido + perda por orçamento + perda por classificação
```

- **perda por orçamento** — a campanha não apareceu porque a verba acabou
- **perda por classificação** — a campanha não apareceu porque o anúncio foi menos competitivo
  (qualidade/lance)
- **IS obtido** — a fração do inventário elegível que efetivamente foi capturada

### 15.3 O algoritmo de classificação — 100% determinístico

`scripts/analise-limitacao-google.mjs` → `data/analise-limitacao-google.json`

Características declaradas no cabeçalho do script:

- **Node puro: sem IA, sem API, sem rede.** Mesma entrada → mesma saída (exceto o carimbo
  `gerado_em`, isolado no fim do JSON).
- Parsing pt-BR rigoroso: `"50,40%"` → `50.4`; um export em formato US viraria `5040` e é
  **rejeitado** pela validação de limites `[0,100]`, em vez de gravado silenciosamente.
- Validações abortam se a entrada não for a esperada.
- A página **consome** o JSON por import estático — **não recalcula nada em runtime**.

Duas camadas de classificação, aplicadas por mês fechado e **que não se substituem**:

**Camada MAGNITUDE** — *"quão grande é a perda por orçamento?"*

| Faixa | Critério | Cor na interface |
|---|---|---|
| moderada | < 40 p.p. | neutra |
| alta | 40 – 54 p.p. | âmbar |
| severa | ≥ 54 p.p. | vermelho |

**Camada DOMINÂNCIA** — *"qual das duas perdas é maior no mês?"*

| Rótulo | Critério |
|---|---|
| limitado-orcamento | perda por orçamento maior, com margem ≥ 10 p.p. |
| limitado-classificacao | perda por classificação maior, com margem ≥ 10 p.p. |
| misto | margem entre as duas < 10 p.p. |

Um mês pode ser **misto em dominância e alto em magnitude** simultaneamente.

### 15.4 As 9 decisões editoriais — julgamento declarado, não medição

O script documenta no topo que **nenhuma destas é medição**; todas são julgamento do dono do
projeto, registradas para auditoria:

1. **Limiar de dominância = 10,0 p.p.** — arbitrário por natureza; por isso o JSON inclui análise de
   sensibilidade reportando em que limiar o dominante de cada regime mudaria.
2. **Cortes de magnitude = 40,0 e 54,0 p.p.** — posicionados nos **vazios naturais da distribuição
   deste export** (vãos 37,41–43,52 e 52,13–55,78). Não são normas de mercado.
3. **Não existe faixa "baixa"** — o piso da série fechada é ~23,41% de perda por orçamento. A
   ausência de qualquer mês com limitação desprezível é um **achado da série**, reportado como tal
   em vez de escondido numa faixa vazia.
4. **Regimes por calendário fixo:** "2024" = nov–dez/2024 (amostra de só 2 meses, ressalva
   explícita), "2025" = jan–dez/2025, "2026-S1" = jan–jun/2026. O corte semestral mistura estações.
5. **Mês parcial fica fora de tudo** — sem rótulo em nenhuma camada, fora dos regimes, em seção
   própria ("outlier").
6. **Peso igual por mês** — o export não traz volume de impressões, então cada mês conta 1 nas
   agregações. Distorção conhecida e declarada.
7. **Dominante do regime por pluralidade** (sem exigir maioria absoluta); empate é reportado como
   estrutura `{rotulos, empate}`, nunca como string ambígua.
8. **Três rótulos por camada** — qualquer esquema discreto apaga gradação, então os valores
   contínuos ficam no JSON para conferência.
9. **O script é snapshot de um export específico** (total de meses e mês parcial *hardcoded* por
   design). Garante replicabilidade daquele arquivo; não é pipeline genérico. Export futuro exige
   cópia revisada do script e novo ADR se as regras mudarem.

### 15.5 A conclusão é temporal, não um rótulo único

| Regime | Leitura |
|---|---|
| **2025** | Limitação por orçamento **moderada e secundária** — moderada em 8 de 12 meses; a perda **dominante** do ano foi por **classificação** em 8 de 12. Mas o piso de 23,41% mostra que nunca foi desprezível. |
| **2026-S1** | **Virada de regime — severa e dominante.** Todos os 6 meses em perda alta ou severa (4 severa + 2 alta, zero moderada); dominância por orçamento em 4 de 6, e os 2 "mistos" são quase-empates em nível alto. |
| **Transversal** | O IS efetivamente obtido ficou entre **~1% e ~9%** em toda a série — a campanha captura fração mínima do inventário elegível, independentemente de qual perda domine. |

### 15.6 A virada jun/jul 2026 — sinal a vigiar, não conclusão

Registrado no código como constante separada e explicitamente rotulado como **mês parcial**:

- perda por classificação em jul/2026 (parcial): **89,38%** — recorde da série
- IS obtido correspondente: **10,62%** (= 100 − 0,00 de orçamento − 89,38 de classificação)
- máximo anterior de perda por classificação em mês fechado: **75,57%**

Leitura: a perda por orçamento **cedeu**, e o gargalo migrou para **competitividade do anúncio**.
A ação recomendada muda de natureza — não é só verba, é também qualidade/lance. A interface pede
reconferência quando o mês fechar e 1–2 semanas após qualquer ajuste.

---

## 16. Sazonalidade: as três estações e o teto de capacidade

### 16.1 Mapa de estações (constante `SEASON_BY_MONTH`)

| Meses | Estação | Papel |
|---|---|---|
| Jan | Colheita principal | captura |
| Fev – Jun | **Semeadura** | geração de demanda |
| Jul | Colheita secundária | captura fraca |
| Ago – Dez | **Colheita principal** (pico em out) | captura |

Fonte: cruzamento do funil com as matrículas por safra.

### 16.2 O teto de capacidade — restrição que vem *antes* do orçamento

Novas matrículas de jul–ago (segmentos EI + EF-I), série histórica: **27 → 20 → 12 → 2** (com um ano
excluído como outlier). Tendência de queda inequívoca.

```
CAP_NOVAS_MIN = 2
CAP_NOVAS_MAX = 15   ← faixa realista de absorção do meio-de-ano
```

**Regra explícita: a média otimista da série (15,3) NUNCA é usada.** Nenhum cenário mira acima de
15 novas no meio-de-ano.

A consequência é a regra mais importante do cenário Agressivo: **"+30% OU capacidade, o que vier
primeiro"**. No meio-de-ano, a capacidade vem primeiro — o degrau de verba só se justifica pelo que
ele prepara para out–dez, não pelo que colhe em agosto.

### 16.3 Filtro de série

`MIN_SERIES_YEAR = 2021` — anos anteriores são excluídos das séries: um deles tem 1 registro no
funil (ruído) e o outro não tem novas classificáveis.

---

## 17. O cálculo dos três cenários de investimento

### 17.1 A âncora: configuração oficial, não realizado

Decisão registrada em ADR: os cenários são ancorados na **configuração oficial aprovada**, e
**não** no realizado do último mês fechado.

> **Motivo:** o mês de referência rodou muito abaixo da config aprovada. Ancorar no realizado
> normalizaria a subexecução como base. Alternativa considerada e **rejeitada** formalmente.

```
CFG = {
  busca_pesquisa:     R$ 2.100/mês   (R$ 70,00/dia)
  busca_remarketing:  R$   400/mês   (R$ 13,33/dia)
  busca_total:        R$ 2.500/mês

  social_reconhecim.: R$   510/mês   (R$ 17,00/dia)
  social_rmk_msgs:    R$ 232,50/mês  (R$  7,75/dia)
  social_seguidores:  R$ 157,50/mês  (R$  5,25/dia)  ← mínimo aceito pela plataforma
  social_total:       R$   900/mês
}
```

Nota operacional sobre o piso de R$ 5,25/dia: a plataforma **recusou** R$ 4/dia na campanha de
seguidores e sugeriu R$ 5,25 — evidência operacional registrada, com a ressalva de que o limite
varia por objetivo, moeda, conta, campanha e conjunto.

### 17.2 Os multiplicadores e seu racional

| Constante | Valor | Racional registrado no código |
|---|---|---|
| `MULT_MINIMO` | **1,15** (+15%) | Piso da faixa 15–20% indicada por consultoria externa para sair do estado "limitado" |
| `MULT_IDEAL` | **1,25** (+25%) | Incremento gradual que o algoritmo de leilão absorve sem reaprender do zero |
| `MULT_AGRESSIVO` | **1,30** (+30%) | Teto da regra "+30% OU capacidade, o que vier primeiro" |

### 17.3 Fórmulas — lado da busca paga

```
gMin   = CFG.busca_total × 1,15  = 2.500 × 1,15 = R$ 2.875
gIdeal = CFG.busca_total × 1,25  = 2.500 × 1,25 = R$ 3.125
gAgr   = CFG.busca_total × 1,30  = 2.500 × 1,30 = R$ 3.250
```

**Onde o incremento é alocado — regra explícita:** *todo o incremento vai para a campanha de
Pesquisa*, mantendo o remarketing estável em R$ 400.

```
pesquisa_no_cenario = CFG.busca_pesquisa + (gX − CFG.busca_total)

Mínimo:    2.100 + (2.875 − 2.500) = R$ 2.475
Ideal:     2.100 + (3.125 − 2.500) = R$ 2.725
Agressivo: 2.100 + (3.250 − 2.500) = R$ 2.850
```

### 17.4 Fórmulas — lado da mídia social

O lado social **não usa multiplicador**. Ele é **dimensionado pela frequência-alvo medida**
(seção 14):

```
Mínimo:    meta2x = custoRecMes(2) + 390
Ideal:     meta3x = custoRecMes(3) + 390
Agressivo: meta3x  (idêntico ao Ideal — ver 17.6)
```

### 17.5 Totais e mix

```
total_cenario = gX + metaNx     → arredondado à DEZENA na exibição

mixLabel(g, m) = round( g ÷ (g + m) × 100 ) : complemento
```

Ordens de grandeza registradas: **Mínimo ~R$ 4.230 · Ideal ~R$ 4.970 · Agressivo ~R$ 5.090**.

**Arredondamento como política de honestidade:** a função `brlEst` arredonda toda estimativa à
dezena (`~R$ 4.230`) explicitamente *"para não fingir precisão"*. Valores medidos usam formatação
exata; estimativas nunca.

### 17.6 O conflito declarado entre a Regra 1 e a Regra 2

A frequência ideal de 3×/semana **não cabe** dentro de 30% do orçamento total. O mix resultante do
cenário Ideal desvia do alvo 70:30 — e a página **declara o conflito em vez de escondê-lo**,
oferecendo o *fallback* explícito: ficar em 2×/semana preserva ~69:31.

Este é um traço deliberado do método: quando duas regras do próprio projeto se tensionam, o produto
mostra a tensão e o custo de cada saída, em vez de escolher silenciosamente.

No cenário Agressivo, o lado social **não sobe além de 3×/semana** — a justificativa registrada é
que acima do alvo de negócio a repetição vira desperdício de frequência. Só a busca paga escala.

### 17.7 O que os cenários deliberadamente NÃO fazem

- **Não projetam conversões.** Racional literal no código: *"a config é ~5× o realizado de junho —
  extrapolar custo/conversão a essa distância inventaria precisão."*
- **Não prometem matrícula.** Nenhum cenário atribui matrícula a plataforma.
- **Não usam a média otimista** da capacidade de meio-de-ano.
- **Não ultrapassam a capacidade** de absorção (2–15 novas).

### 17.8 Ressalvas obrigatórias exibidas junto aos cenários

1. A configuração de R$ 2.500 / R$ 900 **ainda não tem performance observada nesse patamar** — os
   cenários são **direcionais, não garantia**.
2. **70/30 é política + padrão de mercado, não veredito dos dados.**
3. Custos de frequência são **estimativas lineares** (alcance e CPM constantes).
4. O meio-de-ano está em queda (27 → 2): a colheita secundária não sustenta expectativa.
5. Alerta do Agressivo: custo/conversão subindo (**+18% Q1→Q2, +114% ano a ano**) somado ao
   meio-de-ano em queda → **só com revisão semanal e gatilho de recuo ao Ideal**.

---

## 18. As 8 regras de negócio e o semáforo de conformidade (Camada 1)

### 18.1 As regras

| # | Regra | Valor | Base técnica |
|---|---|---|---|
| 1 | Frequência na mídia social | mín 2×/sem · ideal 3× | Repetição fixa para reconhecimento (mera exposição · Ehrenberg-Bass) |
| 2 | Proporção busca : social | alvo 70:30 · social nunca ≥ busca | Os ~30% são o que **financia a frequência mínima** no raio de 5 km — **deriva do alvo de frequência, não de benchmark externo** |
| 3 | Incremento por passo | máx +25–30% | O leilão reaprende a cada mudança grande; saltos resetam a otimização |
| 4 | Foco de segmento | verba só Berçário · EI · EF-I | EF-II/EM lotados (0–3 novas no meio-de-ano histórico) — captar lá é desperdício |
| 5 | Sazonalidade | captura ago–dez (pico out) · geração fev–jul | Regra 95:5 |
| 6 | Nunca dobrar de uma vez | salto de 2× vetado | Saturação medida: custo/conv +114% a/a · +18% Q1→Q2 |
| 7 | **Matrícula = fonte única** | só o sistema acadêmico | Conversões de busca e conversas de mídia social são **indício, NÃO matrícula** |
| 8 | Funil confiável só a partir de 2025 | 2022–2024 = referência histórica | v→m > 100% nessas safras **prova** registro incompleto; atendimento dedicado desde 2025 disciplinou o registro |

### 18.2 O semáforo — comparação determinística real × requisito

Cinco estados possíveis, e a existência dos dois últimos é o ponto metodológico central:

| Status | Significado |
|---|---|
| `conforme` | Requisito atendido |
| `atencao` | Dentro do mínimo, abaixo do ideal |
| `viola` | Abaixo do mínimo |
| `nao-verificavel` | **As fontes não permitem verificar — sem dado, sem status** |
| `governanca` | Princípio ativo de governança de dados, não métrica |

Exemplos de lógica implementada:

```
Regra 1:  freqSem ≥ 3 → conforme · ≥ 2 → atenção · < 2 → viola
                        (sem janela 7d no fetch → não-verificável)

Regra 2:  social ≥ busca      → viola
          share social < 30%  → atenção
          caso contrário      → conforme
          share social = 900 ÷ 3.400 = 26,47%  → mix "~73:27"
          (o arredondamento usa PISO no lado dominante, para não inflar a busca)

Regra 4:  SEMPRE não-verificável — "as fontes não separam gasto por ciclo"

Regra 5:  depende da estação corrente do mês em execução; na véspera da colheita
          com frequência abaixo do mínimo → atenção

Regra 6:  MULT_AGRESSIVO ≥ 2 → viola   (folga atual: 70 p.p. até o veto)

Regras 7 e 8: status "governança" — princípios, não medições
```

O semáforo **não mede resultado de matrícula e não faz atribuição**. Isso é afirmado explicitamente
no rodapé do painel.

---

## 19. Correlação agregada funil → matrícula (Camada 2)

### 19.1 Alinhamento

- Contatos e visitas são agrupados pela **safra declarada pela família** no funil (a mesma regra do
  filtro do dashboard), cruzada com o **ciclo** derivado da turma.
- Matrícula = **somente novas** vindas do sistema acadêmico (Regra 7).
- "Nova" é classificada por cruzamento de listas **N contra N−1** por nome normalizado, com match
  exato e regra estrita: presente no ano anterior → rematrícula; ausente → nova.

### 19.2 As duas taxas — e por que só uma é publicada como taxa

```
c→v  =  visitas ÷ contatos × 100      ← ÚNICA taxa publicada como taxa
v→m  =  novas   ÷ visitas  × 100      ← NÃO é conversão
```

**c→v (contato → visita)** é publicada como taxa, com **volume mínimo de 40 contatos por grupo
safra × ciclo** para ser exibida. Valores registrados: **2025 = 23,7% · 2026 em curso = 25,8%**.

**v→m (visita → matrícula) NÃO é tratada como conversão.** É usada como **termômetro de qualidade
de registro**:

| Safra | v→m | Leitura |
|---|---|---|
| 2025 | 50% | registro adequado |
| 2026 | 122% | registro incompleto (em curso) |

**v→m > 100% é impossível como conversão real** — mais matrículas do que visitas registradas só
pode significar sub-registro do funil. Uma auditoria da classificação nova/rematrícula descartou
erro de matching como explicação alternativa (impacto máximo estimado 4–6 p.p.).

Daí a Regra 8: safras anteriores a 2025 viram **referência histórica**, nunca base confiável.

### 19.3 Limite declarado da camada

Isto é **correlação agregada por safra**, explicitamente rotulado como **NÃO sendo**:

- atribuição por plataforma;
- casamento aluno-a-aluno.

Safras que só existem no funil (uma safra futura começando) viram nota de rodapé com a contagem de
contatos, em vez de entrarem numa taxa sem denominador.

---

## 20. Limites declarados de atribuição (Camada 3)

**Com as fontes atuais não é possível dizer que um lead específico virou uma matrícula específica,
nem por qual canal ele chegou.**

As cinco barreiras, listadas na interface:

| # | Barreira | Detalhe |
|---|---|---|
| 1 | Nomes do funil incompletos | não casam 1-a-1 com o sistema acadêmico |
| 2 | Sistema acadêmico sem campo de origem | a matrícula não registra canal |
| 3 | "Como conheceu" **~93% vazio** | a origem quase nunca é anotada |
| 4 | Sem atribuição multi-toque | a família pode ver mídia social e depois buscar na busca — cadeia não rastreada |
| 5 | Funil sub-registrado antes de 2025 | Regra 8 |

**O que destravaria** (instrumentação futura, declarada como *não promessa*): campo de origem
obrigatório no lead · registro disciplinado de todo contato · identificador ligando funil ↔ sistema
acadêmico · fase de persistência para séries temporais. **Mesmo com tudo isso, atribuição
multi-toque completa não fica garantida.**

### 20.1 O mecanismo canal-a-canal — hipótese rotulada como hipótese

A página descreve o mecanismo esperado (exposição repetida na semeadura fev–jun aumenta a chance de
a família lembrar do colégio e buscá-lo quando a decisão chega em ago–dez) e imediatamente afirma:

> **"Nossos dados são consistentes com esse desenho, mas consistência não é prova: não medimos
> essa cadeia."**

E na ressalva final: parte do pico ago–dez coincide com campanhas próprias — **não dá para separar
procura orgânica de resposta induzida**.

---

## 21. Vereditos por campanha

Cada campanha é julgada **contra o próprio objetivo**. Custos de objetivos diferentes não se
comparam — isso é regra, não recomendação.

| Campanha (por função) | Veredito | Objetivo aferido | Racional |
|---|---|---|---|
| Busca · Pesquisa | **manter + reforçar** | capturar busca ativa (cliques → conversões) | Há busca real não capturada (IS obtido ~10%, teto histórico); com a perda por orçamento cedendo, o ganho passa por verba **e** por competitividade do anúncio |
| Busca · Performance Max | **verificar** | descrita como "público de concorrentes" — não confirmável nos dados internos | Perfil de CPC muito baixo indica display/intenção baixa; custo/conv **não comparável** ao da Pesquisa. Verificar a audiência real no painel antes de decidir — não decidir no escuro |
| Social · Reconhecimento | **manter + reforçar** | alcance × frequência no raio de ~5 km | Sub-entrega o próprio objetivo por frequência; reforço já dimensionado nos cenários |
| Social · Seguidores | **observação** | crescer o perfil | Custo conhecido, **resultado-fim não medido em nenhuma fonte** — sem dado, sem veredito. Medição adiada para a fase de persistência |
| Social · Remarketing de mensagens | **manter + avaliar** | iniciar conversas com contatos da lista | Performa contra o próprio objetivo e as conversas têm profundidade (medida em 2ª e 3ª troca); volume baixo faz o custo oscilar · **conversa ≠ lead ≠ matrícula** |

Métricas de eficiência usadas nos vereditos:

```
CPC de captura     = gasto acumulado no ano da Pesquisa ÷ cliques acumulados da Pesquisa
                     (nunca o CPC "blended" com remarketing)
custo/conv YTD     = gasto acumulado no ano ÷ conversões acumuladas
custo por conversa = gasto total da campanha ÷ conversas iniciadas
CPM                = gasto ÷ impressões × 1000
```

**Profundidade de conversa** é medida por tipos de ação distintos (primeira resposta, 2ª troca,
3ª troca) — cada um somado apenas consigo mesmo.

---

## 22. Tabela consolidada de constantes e fórmulas

### 22.1 Constantes de configuração

| Constante | Valor | Onde |
|---|---|---|
| `CFG.gPesquisa` | R$ 2.100/mês (R$ 70/dia) | `ads/estrategia/page.tsx` |
| `CFG.gRemarketing` | R$ 400/mês (R$ 13,33/dia) | idem |
| `CFG.gTotal` | R$ 2.500/mês | idem |
| `CFG.mReconhecimento` | R$ 510/mês (R$ 17/dia) | idem |
| `CFG.mRmkMsgs` | R$ 232,50/mês (R$ 7,75/dia) | idem |
| `CFG.mSeguidores` | R$ 157,50/mês (R$ 5,25/dia) | idem |
| `CFG.mTotal` | R$ 900/mês | idem |
| `FREQ_MIN` / `FREQ_IDEAL` | 2 / 3 ×semana | idem |
| `MULT_MINIMO` / `IDEAL` / `AGRESSIVO` | 1,15 / 1,25 / 1,30 | idem |
| `CAP_NOVAS_MIN` / `MAX` | 2 / 15 novas | idem |
| `SAFRA_FUNIL_CONFIAVEL` | 2025 | idem |
| `MIN_CONTATOS_GRUPO` | 40 contatos | idem |
| `MIN_SERIES_YEAR` | 2021 | idem |
| `LIMIAR_DOMINANCIA_PP` | 10,0 p.p. | `analise-limitacao-google.mjs` |
| `CORTE_ALTA_PP` / `CORTE_SEVERA_PP` | 40,0 / 54,0 p.p. | idem |
| `JANELA_SENSIBILIDADE_CORTE_PP` | 3,0 p.p. | idem |

### 22.2 Fórmulas

| Grandeza | Fórmula |
|---|---|
| Frequência semanal | `impressões_7d ÷ alcance_7d` (medida direta da janela) |
| Custo p/ frequência-alvo | `spend_7d × (alvo ÷ freqSem) × (30 ÷ 7)` |
| Piso social | `rmk_msgs + seguidores = R$ 390` |
| Social no cenário | `custoRecMes(alvo) + 390` |
| Busca no cenário | `CFG.gTotal × MULT` |
| Pesquisa no cenário | `CFG.gPesquisa + (gX − CFG.gTotal)` |
| Total do cenário | `gX + metaNx`, arredondado à dezena |
| Mix | `round(g ÷ (g + m) × 100)` |
| Share social da config | `900 ÷ 3.400 = 26,47%` |
| CPC de captura | `gasto_ytd_pesquisa ÷ cliques_ytd_pesquisa` |
| Custo/conversão YTD | `gasto_ytd ÷ conversões_ytd` |
| CPM | `gasto ÷ impressões × 1000` |
| Taxa c→v | `visitas ÷ contatos × 100` (só com ≥ 40 contatos no grupo) |
| Termômetro v→m | `novas ÷ visitas × 100` (**não é conversão**) |
| Decomposição de IS | `100 = IS_obtido + perda_orçamento + perda_classificação` |

---

## 23. Como auditar / reproduzir qualquer número

1. **Cenários de investimento** — são função pura de (config oficial × multiplicador) + (frequência
   medida na janela de 7 dias). Reproduzível com uma calculadora a partir das constantes da
   seção 22 e do último fetch da API de anúncios.
2. **Classificação da limitação da busca** — rodar `node scripts/analise-limitacao-google.mjs`.
   Saída determinística: mesma entrada → mesmo JSON. O JSON versionado é a evidência.
3. **Taxas do funil** — recomputáveis a partir da planilha lida (cache de 1 hora) com as regras de
   saneamento de data e o alinhamento por safra declarada.
4. **Matrículas novas** — recomputáveis a partir do JSON versionado do sistema acadêmico, com a
   regra N contra N−1.
5. **Métricas de mídia social** — vêm do JSON versionado do último fetch, com carimbo de data
   exibido em toda a interface e sinalizador de fetch degradado.

### Disciplina de atualização — risco operacional declarado

A página depende da disciplina de atualização das fontes: **fetch semanal da API de anúncios,
exports periódicos da busca paga, XLS do sistema acadêmico**. Dado velho gera semáforo velho — e o
semáforo não sabe que está velho. Por isso todo painel exibe a data do fetch.

### Pendências metodológicas abertas

- [ ] Disciplina de registro no funil (todo contato, com origem) — destrava o campo "como conheceu"
      (~93% vazio) e melhora o termômetro v→m.
- [ ] Verificar no painel a segmentação real da campanha Performance Max antes de decidir sobre ela.
- [ ] Reconferir o impression share quando o mês parcial fechar e 1–2 semanas após qualquer ajuste
      de verba (a virada jun/jul ainda não está confirmada).
- [ ] Fase de persistência: snapshots (seguidores, frequência, gasto) para séries temporais —
      pré-requisito do veredito da campanha de seguidores e de qualquer evolução da Camada 3.
- [ ] Reavaliar os cenários quando houver o primeiro mês fechado no patamar da config aprovada.

---

## Referências internas

| ADR | Assunto |
|---|---|
| 0005 / 0006 | Sistema acadêmico como fonte única de matrícula · classificação N vs N−1 |
| 0010 | Saneamento de datas do funil |
| 0011 | Funil em planilha, somente leitura |
| 0013 | Integração com a API de anúncios (4 janelas) |
| **0016** | **Estratégia de mídia ancorada em dados e motor de 3 camadas** |
| **0020** | **Magnitude da limitação por orçamento: leitura temporal por impression share** |
| 0022 | Mídia paga read-only |
| 0023 | Exceção estreita de escrita restrita em anúncios |

---

*Fim do documento.*
