---
name: relatorio-pi
description: Escrita, estruturação e edição dos relatórios parcial e final do PIJ410 (Projeto Integrador, UNIVESP), preservando os estilos do modelo oficial .docx. Use quando a tarefa envolver escrever ou revisar qualquer seção do relatório (introdução, objetivos, justificativa, fundamentação teórica, metodologia, resultados, considerações finais), montar capa/resumo/sumário, editar os arquivos .docx de entrega, conferir formatação ABNT/UNIVESP, ou verificar se o texto atende às rubricas de avaliação.
---

# Relatório do Projeto Integrador — PIJ410

## Antes de escrever

Leia `/docs/master_context.md`. Grande parte do projeto ainda está marcada como **Pendente** — objetivo, problema, escopo, tecnologia. `/docs/agent_rules.md` proíbe preencher pendência por inferência: se uma seção depende de decisão que o grupo não tomou, escreva o que está definido e **registre a lacuna**, não invente.

O mesmo vale para evidências. Entrevistas, visitas e feedbacks citados no relatório devem ter acontecido de fato.

## As duas entregas não são a mesma coisa

O relatório final **não** é o parcial expandido: ele renumera seções e promove Resultados a capítulo.

| Seção | Parcial | Final |
|---|:--:|:--:|
| 1 Introdução | 1 | 1 |
| 2 Desenvolvimento | 2 | 2 |
| 2.1 Objetivos | 2.1 | 2.1 |
| 2.2 Justificativa e delimitação do problema | 2.2 | 2.2 |
| 2.3 Fundamentação teórica | 2.3 | 2.3 |
| 2.4 Aplicação das disciplinas estudadas | — | 2.4 |
| Metodologia | **2.4** | **2.5** |
| Resultados | **2.5** (preliminares: solução inicial) | **3** (solução final) |
| 4 Considerações finais | — | 4 |
| Referências, Anexos, Apêndices | ✓ | ✓ |

Pré-textuais em ambos: capa, folha de rosto, ficha, resumo (até 250 palavras, parágrafo único), palavras-chave (5), lista de ilustrações e de tabelas (opcionais), sumário.

**Só no final:** link do vídeo do YouTube na capa. A correção do relatório final está condicionada à entrega do vídeo e da ficha de prototipagem — sem elas, não é corrigido. E se o protótipo e sua aplicação não forem descritos, a nota do relatório final é **zero**.

## Onde estão os pontos

Peso das entregas na nota final: Plano de Ação 15% · Relatório Parcial 25% · Relatório Final 35% · Ficha + Vídeo 10% · Avaliação Colaborativa 15%.

Rubricas item a item em `references/rubricas.md` — consulte antes de escrever cada seção e de dar por pronta.

Três exigências atravessam quase todos os itens e derrubam a nota a zero quando ausentes:

1. **Relação com o tema norteador da UNIVESP** — objetivos, problema e tema precisam amarrar explicitamente nele.
2. **Design Thinking: ouvir → criar → implementar** — a metodologia precisa demonstrar os três passos, não mencioná-los. Vale 2,0 no final.
3. **Comunidade externa** — o problema precisa vir de contexto real, e a solução precisa ter sido levada de volta a ela com feedback coletado.

## Formatação

Especificação completa em `references/formatacao.md`.

**A regra que resume tudo:** o modelo oficial já traz um conjunto de estilos nomeados que codifica cada norma. Aplique o estilo e não toque em fonte, tamanho, espaçamento ou recuo.

| Conteúdo | styleId |
|---|---|
| Título de capítulo (1, 2, 3, 4) | `1ttulonivel1` |
| Subtítulo (2.1, 2.2, …) | `2ttulonivel2` |
| Parágrafo comum | `atexto-base` |
| Lista com marcadores | `btextocombullets` |
| Citação longa (mais de 3 linhas) | `ccitao` |
| Capa | `dcapa` |
| Descrição da folha de rosto | `ecapadescrio` |
| Resumo e Referências | `fResumoReferncias` (parcial) / `fResumoReferncia` (final) |

Aplicar formatação direta em vez do estilo é o erro que quebra o modelo — e é invisível até a impressão.

## Como escrever

Registro impessoal, um parágrafo por ideia, citação integrada ao argumento em vez de enfileirada.
Detalhes, exemplos de reescrita e checklist em `references/redacao.md` — consulte antes de redigir
qualquer seção.

Enquanto uma decisão do grupo não existir, marque com `«PENDENTE: …»` em vez de inventar. Nenhum
documento vai para conversão com marcador pendente.

## Fluxo de trabalho (ADR-001)

O texto é escrito em **Markdown**, em `/docs/relatorio/`, versionado no git. O `.docx` é
**gerado** a partir do Markdown aprovado e fica em `/outputs/`, que não é versionado.

```text
docs/relatorio/*.md   →   outputs/*.docx   →   outputs/*.pdf
   (fonte, no git)        (gerado)            (entrega no AVA)
```

Nunca edite o `.docx` como fonte: o diff é ilegível e a formatação se perde. Ver `/docs/decisions.md`.

## Editar os `.docx`

Os modelos em `/docs/univesp/` são **referência normativa e não devem ser alterados**. A geração
parte de uma cópia do modelo em `/outputs/`, preservando `styles.xml` e `numbering.xml`.

A mecânica de edição preservando formatação é da skill `docx` (plugin `document-skills`): descompactar, editar `word/document.xml`, recompactar, validar. Invoque-a para isso. Particularidades deste ambiente Windows, que a skill `docx` não cobre:

```bash
PY="/c/Users/tisap/AppData/Local/Programs/Python/Python313/python.exe"   # o python do PATH é venv incompleto
SK=~/.claude/plugins/cache/anthropic-agent-skills/document-skills/*/skills/docx

# ler o conteúdo
"/c/Users/tisap/AppData/Local/Pandoc/pandoc.exe" -t markdown --wrap=none arquivo.docx

# preparar para edição (une runs fragmentados, senão o texto não é localizável no XML)
unzip -q arquivo.docx -d unpacked/
PYTHONUTF8=1 "$PY" $SK/scripts/merge_runs.py unpacked/

# recompactar preservando a ordem original das entradas
PYTHONUTF8=1 "$PY" -c "
import zipfile,os
src=zipfile.ZipFile('arquivo.docx')
with zipfile.ZipFile('saida.docx','w',zipfile.ZIP_DEFLATED) as z:
    for n in src.namelist(): z.write(os.path.join('unpacked',n.replace('/',os.sep)),n)"

# validar contra o esquema
PYTHONUTF8=1 "$PY" $SK/scripts/office/validate.py saida.docx --original arquivo.docx

# conferir visualmente (o soffice.py da skill docx é Unix-only e falha aqui)
"/c/Program Files/LibreOffice/program/soffice.exe" --headless --norestore --convert-to pdf --outdir . saida.docx
PYTHONUTF8=1 "$PY" -c "
import pypdfium2 as p
d=p.PdfDocument('saida.pdf')
[d[i].render(scale=110/72).to_pil().convert('RGB').save(f'page-{i+1:02d}.jpg',quality=85) for i in range(len(d))]"
```

`PYTHONUTF8=1` é obrigatório: o console está em cp1252 e o `validate.py` imprime `→`, quebrando sem isso.

Depois de editar, **olhe as páginas renderizadas**. Validação de esquema não detecta estilo errado.

## Entregar

O arquivo postado no AVA é **PDF**, não `.docx`. Converta com LibreOffice e confira o PDF antes de postar — a numeração de páginas começa na Introdução e o sumário precisa refletir a paginação real.

Registre a entrega em `/docs/run_log.md`.
