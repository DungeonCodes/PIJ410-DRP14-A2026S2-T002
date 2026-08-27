# Matriz de classificação de arquivos

Todo arquivo da arquitetura de referência recebe **uma** destas quatro classificações antes de
influenciar qualquer coisa no repositório acadêmico.

**Na dúvida: `BLOCK`.** A classificação é uma decisão de risco, e o custo de reconstruir um
arquivo é sempre menor que o de vazar um.

---

## As quatro categorias

### `COPY_AS_STRUCTURE`

Estrutura reaproveitável **depois de revisada linha a linha**. Nunca é cópia cega: o arquivo é
lido, adaptado à identidade acadêmica e purgado de qualquer referência ao ambiente real.

| Aplica-se a | Exemplos |
|---|---|
| Organização de rotas e hierarquia de navegação | árvore `(app)/`, agrupamento de menu |
| Composição de página e tipos de gráfico | cabeçalho + filtros + cards + séries |
| Padrões de apresentação honesta | `—` para ausência, taxa recalculada, linha interrompida |
| Configuração de build sem segredo | `tsconfig`, `postcss`, `eslint` |

**Nunca traz junto:** valor, identificador, nome de campanha, nome de conta, ativo de marca,
variável de ambiente.

### `SANITIZE`

Conteúdo aproveitável cujo texto precisa ser reescrito para remover identidade, número real ou
referência a sistema. O resultado é um arquivo novo que apenas *se inspira* no original.

| Aplica-se a | Tratamento |
|---|---|
| Rótulos e textos explicativos | trocar identidade por neutra; remover número real |
| Nomes de categoria e enumerações | manter a função, inventar o rótulo |
| Comentários que citam o ambiente real | reescrever em termos genéricos |

### `SYNTHETIC_REBUILD`

Só a **forma** é aproveitada; o conteúdo é gerado do zero pelo pipeline determinístico.

| Aplica-se a | Reconstrução |
|---|---|
| Qualquer dataset analítico | gerador com semente em `src/lib/sintetico/` |
| Séries temporais | sazonalidade declarada no cenário |
| Distribuições por categoria | pesos declarados no cenário |

**Proibido derivar do real** por `+10%`, `−15%`, ruído, troca de rótulos ou embaralhamento —
qualquer transformação assim produz um dataset reversível ou aproximadamente equivalente, que
continua sendo o dado da instituição.

### `BLOCK`

Não entra no repositório acadêmico sob nenhuma forma — nem como amostra, nem como exemplo, nem
comentado, nem no histórico do git.

| Aplica-se a |
|---|
| `.env`, `.env.*` e qualquer credencial |
| Tokens, chaves, service accounts, JWT |
| `data/**`, `05-dados/**`, `raw/**` e datasets processados com dado real |
| Exports: CSV, XLSX, XLS, JSONL |
| Registros de CRM ou de sistema acadêmico |
| Planilhas e integrações de planilha |
| IDs de conta de anúncios, de campanha, de anúncio, de perfil, de planilha |
| PII: nome, responsável, e-mail, telefone, documento, data de nascimento, endereço |
| Ativos de marca: logotipo, paleta institucional, criativos publicitários |
| Módulos de escrita em plataforma externa |
| Caminhos locais da máquina de origem |

---

## Fluxograma de decisão

```text
o arquivo contém dado, identificador ou segredo?
├── sim ────────────────────────────────────► BLOCK
└── não
     │
     é um dataset (mesmo que só de exemplo)?
     ├── sim ───────────────────────────────► SYNTHETIC_REBUILD
     └── não
          │
          o texto cita identidade, sistema ou número do ambiente real?
          ├── sim ──────────────────────────► SANITIZE
          └── não ──────────────────────────► COPY_AS_STRUCTURE
                                               (ainda assim: revisar linha a linha)
```

---

## Aplicação na Fase 1

| Origem (referência) | Classificação | Resultado no repositório acadêmico |
|---|---|---|
| Árvore de rotas `(app)/` e agrupamento de navegação | `COPY_AS_STRUCTURE` | `src/app/(app)/`, `src/lib/fases.ts` |
| Configuração de build (Next, TS, ESLint, PostCSS) | `COPY_AS_STRUCTURE` | raiz do repositório |
| Padrões de apresentação honesta | `COPY_AS_STRUCTURE` | `src/components/graficos.tsx`, `metric-card.tsx` |
| Filtros por URL (multisseleção, mínimo de um) | `COPY_AS_STRUCTURE` | `src/components/filtros.tsx` |
| Tema visual com variáveis de marca | `SANITIZE` | `src/app/globals.css` — paleta neutra, sem variável de marca |
| Rótulos de ciclo, turma, canal e situação | `SANITIZE` | `src/lib/sintetico/cenario.ts` |
| Dataset de funil de captação | `SYNTHETIC_REBUILD` | `src/data/captacao-sintetico.json` |
| Dataset de matrículas | `SYNTHETIC_REBUILD` | `src/data/matriculas-sintetico.json` |
| Cliente de planilha, cliente de API, autenticação | `BLOCK` | não existe equivalente acadêmico |
| Módulo de escrita em plataforma de anúncios | `BLOCK` | idem |
| Exports CSV/XLSX e datasets processados | `BLOCK` | idem |
| Credenciais e variáveis de ambiente | `BLOCK` | a aplicação não lê nenhuma |

---

## Verificação automática

A classificação é uma decisão humana; a **conformidade** é verificada por script.

`npm run test:nao-vazamento` varre `src/`, `scripts/` e as configurações atrás de indícios das
categorias `BLOCK`: identidade institucional real, IDs operacionais, PII, segredos, chamadas a
plataformas, caminhos da máquina de origem e formatos de arquivo proibidos.

A varredura **não imprime segredo**: reporta arquivo e nome da regra violada, nunca prefixo,
sufixo, tamanho ou hash. Falha fechada — qualquer achado derruba a verificação.
