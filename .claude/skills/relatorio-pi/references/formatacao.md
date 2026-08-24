# Formatação do relatório — especificação

Extraída dos modelos oficiais em `/docs/univesp/`. As regras em prosa vêm do texto dos modelos; os valores em `w:pStyle`/`sectPr` foram lidos direto do XML e conferem com o que o texto declara.

## Página

| Propriedade | Valor | Verificado em |
|---|---|---|
| Tamanho | A4 (21,0 × 29,7 cm) | `sectPr/pgSz` |
| Margem superior | 3 cm | `sectPr/pgMar` |
| Margem esquerda | 3 cm | `sectPr/pgMar` |
| Margem inferior | 2 cm | `sectPr/pgMar` |
| Margem direita | 2 cm | `sectPr/pgMar` |
| Fonte base | Times New Roman 12 pt, preta | `docDefaults` |
| Paginação | canto superior direito, arábicos, contagem inicia na Introdução | texto do modelo |

## Estilos nomeados

Os modelos trazem um conjunto próprio de estilos. **Aplique o estilo; não replique a formatação à mão.** Cada norma abaixo já está codificada no estilo.

| styleId | Nome no Word | O que aplica |
|---|---|---|
| `1ttulonivel1` | 1) título nivel 1 | negrito, MAIÚSCULAS, quebra de página antes |
| `2ttulonivel2` | 2) título nivel 2 | negrito, quebra de página antes |
| `atexto-base` | a) texto-base | Times New Roman, justificado, entrelinha 1,5, 18 pt de espaço depois |
| `btextocombullets` | b) texto com bullets | lista com marcadores |
| `ccitao` | c) citação | 10 pt, entrelinha simples, recuo esquerdo 4 cm |
| `dcapa` | d) capa | 14 pt, centralizado |
| `ecapadescrio` | e) capa descrição | 12 pt, recuo esquerdo 8 cm |
| `fResumoReferncias` | f) Resumo/Referências | entrelinha simples |

### Três armadilhas

1. **O styleId do Resumo/Referências difere entre os arquivos.** No modelo parcial é `fResumoReferncias`; no final é `fResumoReferncia`, sem o "s". Copiar código de um para o outro falha em silêncio — o parágrafo perde o estilo e herda o padrão.
2. **Não insira parágrafo vazio entre parágrafos.** A norma "separar parágrafos por uma linha em branco" já está no estilo `atexto-base` (`after=360`, ou 18 pt). Um parágrafo vazio de verdade duplica o espaço.
3. **Títulos e subtítulos quebram página.** Tanto `1ttulonivel1` quanto `2ttulonivel2` têm `pageBreakBefore`. Cada subseção começa em página nova — é o que o modelo determina, ainda que pareça excessivo. Não remova achando que é defeito.

## Regras de texto

| Elemento | Fonte | Espaçamento |
|---|---|---|
| Corpo do texto | 12 | 1,5 |
| Citação com mais de 3 linhas | 10 | simples, recuo 4 cm |
| Notas de rodapé | 10 | simples |
| Referências | 12 | simples |
| Legendas de ilustrações e tabelas | — | simples |
| Resumo | 12 | simples, parágrafo único, até 250 palavras |

Títulos e subtítulos alinhados à esquerda. Títulos de capítulo em negrito e maiúsculas.

## Estrutura pré-textual

Na ordem, em ambos os relatórios:

1. **Capa** — UNIVERSIDADE VIRTUAL DO ESTADO DE SÃO PAULO; nome dos integrantes; título do trabalho; cidade – SP; ano. **No relatório final, também o link do vídeo do YouTube.**
2. **Folha de rosto** — universidade; título; nota de apresentação ("Relatório Técnico-Científico apresentado na disciplina de Projeto Integrador para o curso de …"); cidade; ano.
3. **Ficha catalográfica** — `SOBRENOME, Prenomes; … Título do trabalho. 00f. Relatório Técnico-Científico. Nome do curso – Universidade Virtual do Estado de São Paulo. Tutor: (Nome). Polo…(nome), ano.`
4. **Resumo** — até 250 palavras, parágrafo único, contendo introdução, objetivos, metodologia, resultados e considerações finais.
5. **Palavras-chave** — 5, separadas por ponto e vírgula.
6. **Lista de ilustrações** (opcional) e **Lista de tabelas** (opcional).
7. **Sumário** — Arial ou Times 12; títulos em negrito, subtítulos sem negrito.

A paginação em algarismos arábicos começa na Introdução.

## Checklist antes de entregar

- [ ] Todo parágrafo usa um styleId do modelo — nenhuma formatação direta
- [ ] Sem parágrafos vazios usados como espaçador
- [ ] Sumário reflete a paginação real do PDF final
- [ ] Numeração de páginas começa na Introdução, canto superior direito
- [ ] Citações longas no estilo `ccitao`, não com recuo manual
- [ ] Referências em ordem alfabética, espaçamento simples
- [ ] Toda obra na lista foi citada no texto, e vice-versa
- [ ] Resumo dentro de 250 palavras, 5 palavras-chave
- [ ] No final: link do vídeo na capa
- [ ] Renderizado em PDF e conferido visualmente página a página
- [ ] Postado no AVA em PDF
