# ADR-A001 — Espelhamento estrutural, dados sintéticos e rollout acadêmico por fases

**Data:** 2026-08-27
**Status:** Aceita
**Escopo:** aplicação acadêmica (`src/`, `scripts/`, `package.json`). Não altera o scaffolding
científico.
**Sequência:** local desta subpasta (`ADR-A`), independente de `docs/decisions.md`.

## Contexto

O PI precisa demonstrar uma experiência analítica de gestão educacional. Existe uma
arquitetura de referência já construída — funcional, com módulos de captação, matrículas,
mídia paga e conteúdo orgânico — cuja **estrutura** é exatamente o que o trabalho quer
estudar e reproduzir. Os **dados** dessa arquitetura, porém, são operacionais e de uma
instituição real: não podem entrar no repositório acadêmico, que é público quando o trabalho
é aprovado (Regulamento do PI, Art. 20º).

`docs/master_context.md` já previa esta etapa e registrava o processo pretendido
(seleção → cópia controlada → sanitização → remoção de integrações → substituição das fontes
→ revisão → ambiente independente), condicionando-a a uma solicitação explícita. Esta ADR é a
execução dessa etapa e fixa suas regras.

Três problemas precisavam de decisão simultânea:

1. **O que copiar.** Copiar o repositório inteiro traria dados, segredos e integrações junto.
   Não copiar nada obrigaria a reinventar a arquitetura, perdendo o objeto de estudo.
2. **Como demonstrar sem expor.** Um painel sem dados não demonstra nada; com dados reais,
   expõe a instituição.
3. **Quando liberar.** Publicar sete módulos em 27/08/2026 sugeriria um sistema pronto antes
   da data de início, o que é falso.

## Decisão

### 1. Espelhar ESTRUTURA, reconstruir DADOS

A aplicação acadêmica reproduz da referência: organização de rotas, hierarquia de navegação,
composição de página, tipos de gráfico, filtros por URL, e as **regras de apresentação** que
dão honestidade ao painel (ausência de medição exibida como `—` e não como zero; taxa sempre
recalculada do numerador e denominador; série mensal interrompida onde não há observação).

Não reproduz: nenhum valor, nenhum identificador, nenhuma integração, nenhum ativo de marca.

### 2. Dados sintéticos independentes, não dados reais maquiados

Proibido derivar o dataset acadêmico dos valores reais por qualquer transformação — `+10%`,
`−15%`, ruído aditivo, troca de rótulos, embaralhamento. Uma transformação é reversível ou
aproximadamente reversível; um dataset assim continua sendo o dado da instituição.

O cenário é **inventado do zero** em `src/lib/sintetico/cenario.ts`: volumes-base, pesos por
ciclo, taxas-alvo de funil e curvas de sazonalidade foram escolhidos para compor uma história
plausível de captação escolar, e são declarados como parâmetros do cenário — não como
observações.

### 3. Geração determinística e versionada

`schema_version` + `scenario_version` + `seed` + configuração ⇒ **mesmo dataset**, sempre.
`Math.random()` e leitura de relógio são proibidos no pipeline. Os artefatos são gravados em
`src/data/` e versionados, então cada regeração vira um diff auditável.

Isso não é preciosismo: sem reprodutibilidade, nenhum número apresentado no relatório pode ser
conferido por um terceiro — e a rubrica cobra exatamente essa verificabilidade.

### 4. Coerência matemática obrigatória

Nenhum indicador é sorteado de forma independente de seus componentes. Contatos são o único
volume sorteado; visitas derivam de contatos pela taxa-alvo; matrículas derivam de visitas.
Rematrículas saem da taxa de retenção e novas são o complemento exato.

```text
CTR = cliques / impressões          taxas  = numerador / denominador
CPC = custo / cliques               totais = soma das partes
CPA = custo / conversões
```

Vale também para os módulos futuros: quando Ads entrar, custo, cliques, impressões e
conversões terão de fechar entre si, e o cenário deverá preservar as **relações analíticas**
que tornam uma recomendação plausível (por exemplo: demanda disponível + perda relevante por
orçamento + verba insuficiente ⇒ cenário coerente para recomendar aumento de investimento).

### 5. Rollout por fases, com feature gate central

O plano completo existe desde 27/08/2026; a disponibilização é incremental.

| Fase | Módulos | Situação em 27/08/2026 |
|---|---|---|
| 1 | Captação, Matrículas | **ativa** |
| 2 | Ads (visão geral, Google, Meta, estratégia) | planejada |
| 3 | Reels orgânicos | planejada |
| 4 | Objetivo da Gestão, Arquitetura & Algoritmos | planejada |

`src/lib/fases.ts` é a **fonte única**. Um módulo bloqueado some da sidebar, do menu mobile e
dos cards de navegação — porque as três superfícies derivam da mesma lista — e sua rota
responde `notFound()`.

**404, não redirect.** Um redirect silencioso faria uma decisão de rollout parecer erro de
navegação e ainda revelaria que a rota existe. E **fail closed**: chave desconhecida devolve
`false`; nada é liberado por omissão.

**Abrir uma fase é um commit humano**, não uma passagem de tempo. `PROJETO_INICIADO_EM` é um
fato datado, não um gatilho — nenhuma fase se abre sozinha quando uma data chega.

### 6. Estrutura futura pode ser preparada

```text
PREPARADO NO CÓDIGO  ≠  DISPONÍVEL AO USUÁRIO
```

As rotas das fases 2–4 existem, compilam e passam pelo gate. Não leem dado, não consomem API e
não têm conteúdo. Existem para que o espelhamento seja incremental e revisável.

### 7. Identidade

O produto tem nome próprio acadêmico (*Painel Analítico Acadêmico*). A instituição retratada
nos dados é uma **entidade fictícia do cenário** — *Instituição Educacional Alfa*.

Relação com a **ADR-003** (`docs/decisions.md`, protegida e não alterada): aquela decisão veda
dar nome ou codinome à **instituição parceira real**, que no relatório é referida por descrição
genérica. Nomear uma entidade fictícia de um cenário sintético é outra coisa — não identifica a
parceira, não é codinome dela, e existe apenas para que a interface tenha cabeçalho coerente. A
ADR-003 continua valendo integralmente na documentação científica, que esta iniciativa não
toca. **Ver "Ponto para revisão do grupo", ao fim.**

Toda tela exibe, em desktop e mobile, o selo `Ambiente acadêmico · dados sintéticos`.
Formulações ambíguas — "dados de exemplo", "amostra" — e, sobretudo, "dados reais" são vedadas.

## Alternativas consideradas

* **Copiar o repositório de referência e limpar depois.** Descartada. A limpeza depende de
  lembrar de tudo, e o histórico do git preservaria o que fosse removido. Um segredo apagado
  em `HEAD` continua acessível em qualquer commit anterior.
* **Anonimizar os dados reais (k-anonimato, pseudonimização).** Descartada para este caso. O
  dataset seria pequeno e o contexto, único — o risco de reidentificação por cruzamento
  permanece, e o trabalho de garantir o contrário excede o do PI. Sem contar que continuaria
  sendo dado da instituição, o que a ADR-003 quer evitar.
* **Publicar tudo em 27/08/2026 e desativar depois.** Descartada: sugeriria maturidade
  anterior à data de início e criaria pressão para preencher sete módulos de uma vez.
* **Controlar o rollout por data (`if (hoje >= '2026-10-01')`).** Descartada: a fase abriria
  sozinha, sem revisão, possivelmente com o módulo incompleto. O gate por booleano exige um
  commit e, com ele, uma decisão.
* **Um booleano por página.** Descartada: três superfícies de navegação divergem da rota na
  primeira distração, e booleanos espalhados não são enumeráveis por teste.

## Consequências

**Ganhos.** O repositório acadêmico é independente: roda sem variável de ambiente, sem token e
sem rede. Qualquer número exibido é reproduzível a partir da semente. O rollout é honesto sobre
o que existe e o que não existe. E a estrutura preparada permite acompanhar a arquitetura de
referência de forma incremental.

**Custos.** É preciso manter dois cenários mentais — o real e o sintético — e reescrever o
gerador sempre que um módulo novo entrar. O painel acadêmico nunca mostrará um insight
descoberto no ambiente real: só a *forma* de descobri-lo.

**Risco declarado.** Um cenário sintético pode ser mais bem-comportado que a realidade e
sugerir que o método funciona melhor do que funciona. O relatório deve tratar as telas como
demonstração de **capacidade analítica**, nunca como evidência empírica.

## Ponto para revisão do grupo

O nome *Instituição Educacional Alfa* foi introduzido apenas na camada de demonstração, pelo
raciocínio da seção 7. A ADR-003, porém, descartou explicitamente a alternativa "codinome fixo
(*Instituição Alfa*)" ao tratar da instituição parceira. A distinção adotada aqui —
entidade fictícia do cenário ≠ codinome da parceira — parece sustentável, mas é uma leitura, e
quem decide é o grupo. Se a leitura for rejeitada, a correção é local: trocar o valor de
`INSTITUICAO_FICTICIA.nome` em `src/lib/identidade.ts`. Nenhum dado, cálculo ou teste depende
dele.
