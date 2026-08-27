# Migração de arquitetura — espelhamento estrutural e rollout acadêmico

Esta subpasta reúne a governança técnica do **espelhamento estrutural** entre uma arquitetura
de referência preexistente e a aplicação acadêmica do PIJ410.

> **Não confundir com o resto de `docs/migracao-modelo/`.** As pastas `referencias/`,
> `modelo-novo/` e `trabalho/` tratam da migração do **relatório** para o modelo novo da
> UNIVESP, com fluxo próprio descrito no [README da pasta-mãe](../README.md). Aquele fluxo
> não é alterado por nada aqui.

## Por que esta subpasta existe

A iniciativa de espelhamento precisa registrar decisões, plano de fases, classificação de
arquivos e o desenho da sincronização futura. Nada disso cabe no scaffolding científico:
`docs/decisions.md`, `docs/run_log.md`, `docs/master_context.md`, `docs/relatorio/` e
`docs/univesp/` são **zona protegida** e não foram tocados nesta rodada.

## Conteúdo

| Arquivo | O que registra |
|---|---|
| [`ADR-A001-espelhamento-dados-sinteticos-rollout.md`](ADR-A001-espelhamento-dados-sinteticos-rollout.md) | A decisão: espelhar estrutura, reconstruir dados, liberar por fases. |
| [`plano-de-fases.md`](plano-de-fases.md) | Fases 0 a 5, com o que entra em cada uma. |
| [`matriz-classificacao.md`](matriz-classificacao.md) | Como classificar cada arquivo do original: `COPY_AS_STRUCTURE`, `SANITIZE`, `SYNTHETIC_REBUILD`, `BLOCK`. |
| [`manifesto-sincronizacao.md`](manifesto-sincronizacao.md) | Desenho da sincronização futura `ORIGINAL → ACADÊMICO`. **Planejada, não implementada.** |

## Numeração

As ADRs desta subpasta usam o prefixo **`ADR-A`** (de *arquitetura*), começando em `ADR-A001`.
A numeração é local e deliberadamente separada da sequência `ADR-001…ADR-005` de
`docs/decisions.md`, que pertence ao grupo e à documentação científica. Duas sequências
independentes evitam que uma decisão técnica de espelhamento pareça ter sido registrada no
documento acadêmico — e evitam colisão quando o grupo criar a próxima ADR lá.

## Regra que atravessa tudo

```text
datas                       = cronologia simulada do cenário acadêmico
valores                     = dados sintéticos, gerados por semente
início do projeto acadêmico = 27/08/2026
```

Preservar as datas históricas do cenário **é permitido e desejável** — dá realismo à
demonstração. O que não se pode fazer é deixar implícito que o grupo coletava dados em 2022.
A formulação factual, repetida na interface e nos documentos, é:

> Em 27/08/2026 iniciou-se a adaptação acadêmica de uma arquitetura de referência previamente
> existente, utilizando dados inteiramente sintéticos.
