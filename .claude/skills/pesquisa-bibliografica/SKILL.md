---
name: pesquisa-bibliografica
description: Busca, triagem e citação de fontes acadêmicas para o PIJ410 (UNIVESP), com referências em ABNT NBR 6023:2018 e citações em NBR 10520:2023. Use quando a tarefa envolver fundamentação teórica, levantamento bibliográfico, procurar artigos/teses/dissertações, avaliar se uma fonte é confiável, formatar referências ou citações, montar a seção Referências, ou quando alguém pedir "achar artigos sobre X", "referências para Y", "citar Z", "revisão de literatura".
---

# Pesquisa bibliográfica para o PI

## Por que isso vale nota

A rubrica da UNIVESP dá **2,0 pontos** à Fundamentação teórica no relatório parcial. Ela zera o item em três situações — cada uma é um erro evitável:

1. fontes não confiáveis ("sites gerais sem referência científica");
2. referências acadêmicas corretas, mas **sem relação com o problema de pesquisa**;
3. escrita idêntica a outro texto **sem a devida referência** (plágio).

Nota máxima exige, além de fonte confiável, que o grupo **sintetize** as teorias — citação indireta, não colagem de citações diretas em sequência.

Mais 2,0 pontos (parcial) e 1,0 (final) vêm de "Linguagem e Referências", que cobra citações e referências adequadas à ABNT.

## Regra inegociável

**Nunca invente uma referência.** Não gere autor, ano, título, periódico, DOI ou página que não tenham vindo de uma busca real. Se não achou fonte para uma afirmação, diga que não achou — não preencha a lacuna.

Isso vale também para números de página em citação direta: só cite `p. XX` se a página foi realmente verificada no texto.

## Buscar

O script consulta Crossref, OpenAlex e Semantic Scholar, deduplica por DOI e já devolve a referência em ABNT.

```bash
python .claude/skills/pesquisa-bibliografica/scripts/buscar.py "termo de busca"
python .claude/skills/pesquisa-bibliografica/scripts/buscar.py "evasão escolar ensino médio" --desde 2019 --limite 15
python .claude/skills/pesquisa-bibliografica/scripts/buscar.py "learning analytics" --formato abnt
```

Opções: `--bases crossref,openalex,s2` · `--desde ANO` · `--limite N` · `--formato texto|json|abnt`

Neste ambiente Windows, use o interpretador completo — o `python` do PATH é um venv incompleto:

```bash
PYTHONUTF8=1 "/c/Users/tisap/AppData/Local/Programs/Python/Python313/python.exe" .claude/skills/pesquisa-bibliografica/scripts/buscar.py "..."
```

Como escolher a base:

| Base | Melhor para | Observação |
|---|---|---|
| Crossref | periódicos brasileiros, busca em português | cobertura mais ampla de revistas nacionais |
| OpenAlex | metadados completos, contagem de citações | bom para ordenar por relevância real |
| Semantic Scholar | revisões sistemáticas, literatura em inglês | limita requisições (HTTP 429) — o script avisa e segue |

Busque **nos dois idiomas**. O tema tem literatura em português (contexto brasileiro, mais aplicável) e em inglês (base teórica, mais citada).

## Triagem

Antes de citar, verifique cada candidato:

- **Confiável?** Artigo em periódico com revisão por pares, livro, dissertação, tese, TCC, ou publicação de instituição pública normativa. Blog, portal de notícias e site institucional de empresa **não** contam como fundamentação — no máximo como dado de contexto, e ainda assim referenciados.
- **Relacionado?** A fonte precisa sustentar uma afirmação específica do trabalho. Artigo bom sobre assunto vizinho zera o item.
- **Atual?** A rubrica pede fundamentos "relevantes e atuais". Priorize os últimos 5–10 anos, salvo obra seminal ou metodológica.
- **Acessível?** Se não dá para ler o texto, não dá para citar com honestidade. Verifique se há versão aberta.

Fontes com DOI resolvem via `https://doi.org/<doi>`. Para ler o conteúdo antes de citar, use WebFetch nesse endereço.

Bases adicionais quando as três não bastarem: SciELO (`articlemeta.scielo.org` funciona; `search.scielo.org` bloqueia acesso automatizado), Portal de Periódicos CAPES, Google Acadêmico (manual), repositórios institucionais.

## Citar

Formatos completos em `references/abnt.md`. O essencial:

| Situação | Forma |
|---|---|
| Citação indireta (paráfrase) | `(SOBRENOME, ano)` ou `Sobrenome (ano)` |
| Citação direta curta (até 3 linhas) | entre aspas + `(SOBRENOME, ano, p. XX)` |
| Citação direta longa (mais de 3 linhas) | sem aspas, parágrafo próprio, estilo `ccitao` |

O modelo da UNIVESP pede "ABNT 6023, de 2002". Esta skill segue a **ABNT vigente** — NBR 6023:2018 para referências e NBR 10520:2023 para citações — por decisão do grupo. As diferenças práticas são pequenas e o resultado continua compatível com o modelo. Se o tutor pedir a versão de 2002, o ajuste é pontual.

**Prefira citação indireta.** A rubrica premia explicitamente a síntese das teorias; uma sequência de citações diretas sinaliza o oposto.

## Registrar

Toda busca que gerar fontes usadas no relatório deve deixar rastro em `/docs/run_log.md`: termo buscado, bases, data e quais obras foram selecionadas. Isso reconstrói o levantamento bibliográfico quando o tutor perguntar como as fontes foram escolhidas — e é exigência do próprio `/docs/agent_rules.md`.

Decisões sobre recorte teórico (adotar um autor como base conceitual, descartar uma linha de literatura) vão para `/docs/decisions.md`.
