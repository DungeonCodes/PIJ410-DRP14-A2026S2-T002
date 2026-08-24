# Redação científica — PI UNIVESP

Como escrever o texto, uma vez que a estrutura (`SKILL.md`) e as fontes
(`pesquisa-bibliografica`) já estão resolvidas.

## Registro

**Impessoalidade.** Nada de "nós fizemos", "eu percebi", "achamos que". Use terceira pessoa ou
voz passiva sintética.

| Evite | Prefira |
|---|---|
| Nós entrevistamos a diretora | Foram realizadas entrevistas com a direção |
| Eu acho que o problema é | Os dados coletados indicam que |
| A gente percebeu que | Observou-se que |
| Vamos mostrar neste trabalho | Este trabalho apresenta |

Exceção: a rubrica e o modelo usam "o grupo" com frequência ("o grupo descreveu", "o grupo
demonstrou"). Escrever "o grupo realizou" é aceitável e às vezes preferível, porque a avaliação
colaborativa pede que a autoria coletiva apareça.

**Tempo verbal.** Presente para o que é fato estabelecido e para descrever o texto ("este
trabalho apresenta"). Pretérito para o que foi feito ("foram aplicados questionários"). No
relatório parcial, futuro para o que ainda será feito ("serão realizadas entrevistas").

**Tom.** Afirmação sem evidência é achismo, e a rubrica pune. Para este PI, toda afirmação sobre
o mundo, dados, métodos ou efeitos deve trazer uma referência verificável. Use fonte acadêmica
para conhecimento geral; para fatos da instituição parceira ou decisões já documentadas pelo
grupo, cite o Plano de Ação ou outro registro do próprio projeto. A única exceção são a proposta
do grupo e o relato de como a solução foi construída: nesses casos, deixe explícito que se trata
da escolha ou da ação do grupo, sem apresentá-la como fato geral.

## Parágrafo

Um parágrafo, uma ideia. Estrutura que funciona:

1. **Frase-tópico** — anuncia a ideia do parágrafo.
2. **Desenvolvimento** — dado, citação ou raciocínio que sustenta.
3. **Fechamento** — consequência, ou ponte para o parágrafo seguinte.

Parágrafo de uma frase só costuma ser ideia solta; parágrafo de meia página costuma ser duas
ideias mal separadas. Entre quatro e oito linhas é a faixa confortável.

Não abra parágrafo com "Segundo o autor" nem com uma citação: a voz do texto é do grupo, e a
citação entra para sustentar o argumento, não para abri-lo.

## Integrar citação ao argumento

A rubrica dá nota máxima quando o grupo **sintetiza** as teorias, e nota parcial quando apenas
as enfileira. A diferença aparece na frase.

Enfileiramento (nota parcial):

> Silva (2021) afirma que o marketing digital é importante. Costa (2020) diz que as métricas
> são essenciais. Lima (2022) mostra que dashboards ajudam.

Síntese (nota máxima):

> A literatura converge ao apontar que o investimento em mídia digital só se torna gerenciável
> quando associado a métricas de acompanhamento (SILVA, 2021; COSTA, 2020). Essa associação,
> contudo, depende de uma camada de apresentação que traduza os dados em informação acionável —
> lacuna que Lima (2022) identifica na maior parte das instituições estudadas.

O segundo parágrafo tem três marcas ausentes do primeiro: agrupa autores que concordam, usa
conectivo de contraste para avançar o raciocínio, e termina apontando a lacuna que o trabalho
vai ocupar.

Prefira citação indireta. Citação direta só quando a formulação exata do autor importa.

## Erros que aparecem na correção

* **Primeira pessoa** em texto que deveria ser impessoal.
* **Afirmação categórica sem fonte** — "é sabido que", "todos concordam que", "é evidente que".
* **Citação solta**, colada no parágrafo sem ligação com o argumento.
* **Autor citado no texto que não está nas Referências**, e vice-versa.
* **Objetivo com verbo fora do infinitivo** — a norma do modelo é explícita: conhecer,
  identificar, levantar, descobrir (exploratórios); caracterizar, descrever, traçar, determinar
  (descritivos); analisar, avaliar, verificar, explicar (explicativos).
* **Confundir objetivo com atividade.** "Fazer reuniões semanais" é atividade, não objetivo.
* **Problema de pesquisa formulado como afirmação.** O modelo pede uma **pergunta** que norteie
  a pesquisa.
* **Copiar trecho de fonte sem citar.** Reprovação automática por plágio (Regulamento, Art. 18º).

## Antes de dar uma seção por pronta

- [ ] Toda afirmação forte tem fonte, dado ou raciocínio explícito
- [ ] Nenhuma primeira pessoa do singular; primeira do plural só como "o grupo"
- [ ] Cada parágrafo tem uma ideia identificável
- [ ] As citações sustentam o argumento, não o substituem
- [ ] Todo autor citado está em `/docs/referencias.md`
- [ ] Os itens da rubrica daquela seção estão todos contemplados (ver `references/rubricas.md`)
- [ ] Nenhum marcador `«PENDENTE: …»` sobrou no texto

## Marcadores de pendência

Enquanto o grupo não decide, o texto usa marcadores explícitos em vez de invenção:

```
«PENDENTE: nome do curso»
«PENDENTE: confirmar tema norteador do semestre»
«CITAR: obra do eixo E2 após leitura»
```

São greppáveis (`grep -n "«" docs/relatorio/*.md`) e impedem que uma suposição vire texto
entregue. Nenhum documento vai para conversão em `.docx` com marcador pendente.
