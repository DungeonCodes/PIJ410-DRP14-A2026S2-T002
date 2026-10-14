# Controle de Alterações — Relatório Final

## Baseline

Arquivo:
docs/relatorio/Relatorio_Final_V1.md

Estado:
CONGELADO

Data de congelamento:
14/10/2026

Origem da baseline: cópia byte a byte de `docs/relatorio/final.md` no momento do congelamento.

| Arquivo | Bytes | Linhas | SHA-256 |
|---|---:|---:|---|
| `docs/relatorio/final.md` | 142914 | 1997 | `3af4147e3deb97ad00d55d44b79ab53fcfa4e0fe0b837fb01f2a820213f1276c` |
| `docs/relatorio/Relatorio_Final_V1.md` | 142914 | 1997 | `3af4147e3deb97ad00d55d44b79ab53fcfa4e0fe0b837fb01f2a820213f1276c` |

Conteúdo congelado: V1, V2, V3 e V4; quatro fases implementadas dentro do escopo especificado;
quarta aplicação com P1 sobre a V4 (14/10/2026; Q1–Q8 = 5; opção A; nenhuma alteração relevante
solicitada); V4 mantida; V5 inexistente; 18 figuras; 14 tabelas; 28 referências; Resumo com
239 palavras; cinco palavras-chave.

## Regra de alteração

Toda alteração posterior à baseline deve registrar:

(SAI: "conteúdo anterior" | ENTRA: "conteúdo novo")

Para adição:

(SAI: ∅ | ENTRA: "...")

Para remoção:

(SAI: "..." | ENTRA: ∅)

Formatos específicos:

- Título: (SAI: "3.1.8 V4 e conclusão das fases restantes" | ENTRA: "3.1.8 Consolidação funcional da V4")
- Número ou dado: (SAI: "18 figuras" | ENTRA: "19 figuras")
- Tabela: (TABELA n | LINHA: "..." | COLUNA: "..." | SAI: "..." | ENTRA: "...")
- Legenda de figura: (FIGURA n | SAI: "título anterior" | ENTRA: "título novo")
- Arquivo de figura: (FIGURA n | SAI: "arquivo-anterior.png" | ENTRA: "arquivo-novo.png")
- Referência: (REFERÊNCIA: <identificação> | SAI: "referência anterior completa" | ENTRA: "referência nova completa")

Não são aceitas descrições genéricas ("melhorar o parágrafo", "ajustar a redação", "corrigir o
trecho", "atualizar a metodologia"): o trecho concreto anterior e o proposto são obrigatórios.

### Fluxo obrigatório

1. Identificar a necessidade.
2. Registrar a proposta com ID e par SAI/ENTRA (status PROPOSTA).
3. Aguardar decisão humana (APROVADA ou REJEITADA).
4. Somente depois aplicar (APLICADA).

Exceção: ordem explícita do responsável pelo projeto para aplicar diretamente; mesmo assim o par
SAI/ENTRA é registrado.

### Relação entre `final.md` e a baseline

- `Relatorio_Final_V1.md` é a baseline fechada e não recebe edição silenciosa.
- `final.md` deixa de ser rascunho livre; alteração científica/textual nele segue este controle.
- Os dois arquivos só divergem mediante alteração registrada aqui; preferencialmente são
  sincronizados após cada alteração aprovada.
- `Relatorio_Final_V2.md` somente será criado quando um conjunto de alterações aprovadas justificar
  nova baseline, por decisão humana.

### Composição (DOCX/PDF)

O congelamento é textual. Paginação, sumário e listas com páginas definitivas, estilos Word,
margens, espaçamento, cabeçalho/rodapé, líder pontilhado, tamanho visual de figura e
posicionamento de tabela são de composição e não alteram o conteúdo científico. Se um ajuste de
composição exigir mudança textual, volta a valer o registro SAI/ENTRA.

### Identificador e campos

IDs sequenciais `ALT-001`, `ALT-002`, `ALT-003`…; IDs nunca são reutilizados.

Status possíveis: PROPOSTA, APROVADA, REJEITADA, APLICADA.

Origens possíveis: ORIENTAÇÃO DA PROFESSORA; CORREÇÃO FACTUAL; AJUSTE EDITORIAL; ADEQUAÇÃO AO
MODELO UNIVESP; COMPOSIÇÃO DOCX; REVISÃO HUMANA; NOVA EVIDÊNCIA; OUTRA — especificar. Não atribuir
alteração à professora, a P1 ou a outra pessoa sem evidência.

Modelo:

```
### ALT-001

Data:
Seção:
Motivo:
Origem:
Status:

(SAI: "..." | ENTRA: "...")
```

## Histórico

Nenhuma alteração posterior à baseline V1 registrada.
