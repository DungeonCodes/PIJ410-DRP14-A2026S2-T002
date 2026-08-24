# Referências e citações — ABNT

Norma adotada no projeto: **NBR 6023:2018** (referências) e **NBR 10520:2023** (citações).

O modelo da UNIVESP cita "ABNT 6023, de 2002" para citações. São duas imprecisões do modelo: a 6023 trata de *referências*, não de citações, e a versão vigente é a de 2018. O grupo optou pela norma atual; ver `/docs/decisions.md`.

---

## Citações no texto (NBR 10520)

### Indireta — paráfrase

Forma preferida no PI, porque a rubrica premia a síntese das teorias.

```
A captação de alunos passou a depender de canais digitais mensuráveis (SILVA, 2021).

Silva (2021) demonstra que a captação de alunos passou a depender de canais digitais mensuráveis.
```

Dentro dos parênteses o sobrenome vai em MAIÚSCULAS; fora deles, apenas a inicial.

### Direta curta — até 3 linhas

Entre aspas duplas, no corpo do parágrafo, com página.

```
Segundo Silva (2021, p. 45), "o investimento em mídia paga sem mensuração
equivale a decidir no escuro".
```

### Direta longa — mais de 3 linhas

Parágrafo próprio, **sem aspas**, recuo de 4 cm, fonte 10, espaçamento simples. No `.docx` isso é o estilo `ccitao` — não aplique o recuo à mão.

```
O investimento em mídia paga sem mensuração equivale a decidir no escuro,
porque o gestor perde a capacidade de distinguir o canal que gerou matrícula
daquele que apenas consumiu orçamento, comprometendo toda a alocação
seguinte. (SILVA, 2021, p. 45).
```

O ponto final vem **antes** do parêntese na citação longa, e **depois** na curta.

### Casos especiais

| Situação | Forma |
|---|---|
| Dois autores | `(SILVA; COSTA, 2021)` |
| Três autores | `(SILVA; COSTA; LIMA, 2021)` |
| Mais de três | `(SILVA et al., 2021)` |
| Sem autor | primeira palavra do título em maiúsculas: `(ESTRATÉGIAS..., 2024)` |
| Sem data | `(SILVA, [s. d.])` |
| Mesmo autor e ano | `(SILVA, 2021a)`, `(SILVA, 2021b)` |
| Citação de citação | `(BRUYNE, 1977 apud SILVA, 2021, p. 45)` — evite; busque o original |
| Entidade | `(ABNT, 2018)`, `(UNIVESP, 2023)` |

---

## Referências (NBR 6023)

Lista ao final, **ordem alfabética**, alinhada à esquerda, espaçamento simples entre linhas e uma linha em branco entre entradas. No `.docx`, estilo `fResumoReferncias` (parcial) / `fResumoReferncia` (final).

Autoria: até três autores, liste todos separados por `;`. Mais de três, primeiro autor + `et al.`

O título da obra ou do periódico vai em **negrito** — é o elemento que se destaca, e apenas ele.

### Artigo de periódico

```
SOBRENOME, Prenome; SOBRENOME, Prenome. Título do artigo. **Nome do Periódico**,
v. 15, n. 2, p. 87-108, 2024. DOI: 10.0000/xxxx. Disponível em: https://doi.org/10.0000/xxxx.
Acesso em: 24 ago. 2026.
```

### Livro

```
SOBRENOME, Prenome. **Título do livro**: subtítulo. 3. ed. São Paulo: Editora, 2020.
```

Subtítulo não entra em negrito — só o título.

### Capítulo de livro

```
SOBRENOME, Prenome. Título do capítulo. In: SOBRENOME, Prenome (org.).
**Título do livro**. São Paulo: Editora, 2020. p. 45-67.
```

### Dissertação ou tese

```
SOBRENOME, Prenome. **Título do trabalho**. 2021. Dissertação (Mestrado em Administração)
– Faculdade de Economia, Universidade de São Paulo, São Paulo, 2021.
```

Troque por `Tese (Doutorado em ...)` ou `Trabalho de Conclusão de Curso (Graduação em ...)` conforme o caso.

### Documento em meio eletrônico

```
INSTITUIÇÃO. **Título do documento**. Local, 2023. Disponível em: https://exemplo.br/doc.
Acesso em: 24 ago. 2026.
```

`Acesso em:` é obrigatório para material online. Meses abreviados em português com ponto, exceto `maio`: `jan. fev. mar. abr. maio jun. jul. ago. set. out. nov. dez.`

### Norma técnica

```
ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6023**: informação e documentação:
referências: elaboração. Rio de Janeiro: ABNT, 2018.
```

---

## Erros que aparecem na correção

- Referência na lista sem citação correspondente no texto, ou o inverso. Toda obra listada precisa ter sido citada.
- Lista fora de ordem alfabética.
- Negrito no subtítulo, ou no título inteiro quando só o título principal leva destaque.
- `Acesso em:` faltando em fonte online.
- Citação direta sem número de página.
- Recuo de citação longa feito com espaços ou tabulação em vez do estilo `ccitao`.
- URL encurtada ou de agregador em vez do DOI oficial.
