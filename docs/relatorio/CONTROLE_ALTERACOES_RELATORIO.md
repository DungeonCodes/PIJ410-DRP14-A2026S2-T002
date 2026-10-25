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


## Revisão candidata V2 — 25/10/2026

O histórico vazio acima descreve o congelamento de 14/10/2026. O primeiro identificador disponível nesta execução era ALT-001; referências anteriores a ALT-001/002/003 eram exemplos do modelo, não registros. Esta execução aloca ALT-001–ALT-028. Próximo ID disponível: **ALT-029**.

Autorização: ordem explícita do responsável nesta tarefa para criar e aplicar a revisão candidata, conforme exceção de ADR-012. A autorização não promove a V2 a baseline oficial. V1 e `final.md` permanecem intocados.

Registros em ordem de ocorrência na V1, seguidos pelos artefatos e registro da execução. Deslocamentos aparecem na retirada e no recebimento, com IDs relacionados; nenhum conteúdo é resumido nos pares literais. Os pares são reproduzidos integralmente no documento de revisão. Documentos de auditoria e controle são metadados da revisão, não conteúdo inserido no relatório.

### ALT-001

Data: 25/10/2026

Seção: Resumo

Comentário motivador:

> AAACJEIh0dc: Sugiro que revejam o texto como um todo. O resumo deve apresentar uma ou duas frases para cada tópico, a versão atual contém um texto muito fragmentado e com etapas sem delimitação.
> Segue a sequência dos tópicos: Breve introdução, objetivos, metodologia adotada, resultados obtidos e considerações finais.
> Segue um exemplo de resumo:

Motivo: Explicitar sequência acadêmica sem modificar resultados.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 74; V2 linha 74.

````text
(SAI: "Este relatório apresenta uma plataforma acadêmica para organizar informações sobre investimentos em mídia digital e apoiar decisões de marketing em uma instituição de ensino. A necessidade de reunir registros dispersos foi identificada em conversas com profissionais da instituição. O grupo desenvolveu uma aplicação web com indicadores, filtros e gráficos, usando dados sintéticos, sem integrar registros operacionais. A V1 reuniu Captação e Matrículas. Após a primeira avaliação de uma gerente de Marketing, identificada como P1, a V2 incorporou um gráfico temporal consolidado; uma segunda aplicação confirmou sua utilidade percebida. Na terceira aplicação, ampliada à V2, P1 apresentou contribuições, das quais sete feedbacks foram aceitos e incorporados à V3. Sem nova avaliação comunitária entre versões, o grupo desenvolveu a V4 por evolução técnica e acadêmica: ela reúne o escopo especificado das quatro fases, incluindo Conteúdo Orgânico, Gestão e Arquitetura & Algoritmos, além de rankings sintéticos em Ads e séries temporais de custo por resultado (CPR). Depois da implementação, P1 avaliou a V4 online, em 14/10/2026. Atribuiu 5/5 às oito questões fechadas, escolheu a opção A e não solicitou alteração relevante; a V4 foi mantida. Em experimento separado, a aprendizagem de máquina estimou o CPR Google, definido como investimento dividido pelas conversões registradas. O modelo sazonal apresentou desempenho preditivo limitado, insuficiente para orientar investimentos reais. Testes e registros versionados sustentam a execução técnica. Dados fictícios, ausência de integração operacional e avaliação por uma única participante impedem generalização ou comprovação de impacto institucional.

" | ENTRA: "A dispersão de registros de mídia digital dificulta sua comparação no contexto educacional. O objetivo foi desenvolver uma solução analítica para organizar esses dados e apoiar a discussão da distribuição do orçamento de marketing em uma instituição de ensino. A metodologia combinou escuta de profissionais, prototipação incremental com dados sintéticos, cálculos determinísticos, testes e quatro avaliações sucessivas com uma gerente de Marketing, identificada como P1. Em experimento separado e reproduzível, regressões lineares estimaram o custo por resultado (CPR) Google, definido como investimento dividido pelas conversões registradas. Como resultados, a V1 apresentou Captação e Matrículas; a primeira avaliação motivou o gráfico consolidado da V2, confirmado na segunda, e sete feedbacks da terceira aplicação ampliada à V2 foram incorporados à V3. A V4 resultou de evolução técnica e acadêmica sem questionário intermediário, reunindo o escopo especificado das quatro fases, rankings sintéticos e séries de CPR; em avaliação posterior online, em 14/10/2026, P1 atribuiu oito notas 5/5, escolheu a classificação A e não solicitou alteração relevante, mantendo-se a V4. Os testes sustentam a execução técnica, mas o experimento sazonal apresentou desempenho preditivo limitado, insuficiente para orientar investimentos reais. A contribuição demonstrada consiste na organização rastreável dos indicadores e na apresentação ajustada à participante; dados sintéticos, ausência de integração operacional e uma única avaliadora impedem generalização e comprovação de impacto institucional.

")
````

### ALT-002

Data: 25/10/2026

Seção: Lista de ilustrações

Comentário motivador:

> AAACJEC-ROA: é um fluxograma? Se sim, podem montar com balões clicando em:
>
> "Inserir"-> "Desenho" -> "Novo"

Motivo: Acrescentar Fluxograma 1 à lista, sem renumerar figuras históricas.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 82; V2 linha 82.

````text
(SAI: "- Figura 1 – Indicadores e filtros da Captação na V1
- Figura 2 – Indicadores e composição por safra em Matrículas na V1
- Figura 3 – Visão geral acadêmica de Ads na V2
- Figura 4 – Histórico sintético e previsão sazonal experimental de CPR na V2
- Figura 5 – Gráficos temporais separados de Captação na V1
- Figura 6 – Evolução temporal consolidada de Captação na V2
- Figura 7 – V3: efetivação visita–matrícula em Captação
- Figura 8 – V3: matrículas e rematrículas por série
- Figura 9 – V3: resumo mensal da Visão Geral de Ads
- Figura 10 – V3: investimento e leads simulados no Google Ads
- Figura 11 – V3: alcance, investimento e resultados no Meta Ads
- Figura 12 – V3: comparação temporal no módulo Estratégia
- Figura 13 – V3: comunicação dos limites da previsão experimental de CPR
- Figura 14 – V4: ranking sintético de Reels orgânicos
- Figura 15 – V4: plano fictício de vagas e ocupação em Gestão
- Figura 16 – V4: ranking sintético de anúncios no Meta Ads
- Figura 17 – V4: ranking sintético de palavras-chave no Google Ads
- Figura 18 – V4: séries temporais separadas de CPR em Estratégia

" | ENTRA: "- Figura 1 – Indicadores e filtros da Captação na V1
- Figura 2 – Indicadores e composição por safra em Matrículas na V1
- Figura 3 – Visão geral acadêmica de Ads na V2
- Figura 4 – Histórico sintético e previsão sazonal experimental de CPR na V2
- Figura 5 – Gráficos temporais separados de Captação na V1
- Figura 6 – Evolução temporal consolidada de Captação na V2
- Figura 7 – V3: efetivação visita–matrícula em Captação
- Figura 8 – V3: matrículas e rematrículas por série
- Figura 9 – V3: resumo mensal da Visão Geral de Ads
- Figura 10 – V3: investimento e leads simulados no Google Ads
- Figura 11 – V3: alcance, investimento e resultados no Meta Ads
- Figura 12 – V3: comparação temporal no módulo Estratégia
- Figura 13 – V3: comunicação dos limites da previsão experimental de CPR
- Figura 14 – V4: ranking sintético de Reels orgânicos
- Figura 15 – V4: plano fictício de vagas e ocupação em Gestão
- Figura 16 – V4: ranking sintético de anúncios no Meta Ads
- Figura 17 – V4: ranking sintético de palavras-chave no Google Ads
- Figura 18 – V4: séries temporais separadas de CPR em Estratégia
- Fluxograma 1 – Arquitetura analítica do protótipo acadêmico

")
````

### ALT-003

Data: 25/10/2026

Seção: Sumário

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

> AAACJIctnyU: é um tópico? parece que sim. Se for msm, adicionem o número de identificação

> AAACJIctnyY: A figura 14 se chama "V4: ranking sintético de Reels orgânicos", se realmente estiverem se referindo a ela, ela precisaria aparecer aqui. É possível retomar algo que já foi apresentado, mas referenciar algo que está páginas adiante não é recomendado.

Motivo: Sincronizar Sumário com a metodologia renumerada, 3.1.6.1 e 3.2.6.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 124; V2 linha 125.

````text
(SAI: "- 1 Introdução
- 2 Desenvolvimento
  - 2.1 Objetivos
    - 2.1.1 Objetivo geral
    - 2.1.2 Objetivos específicos
  - 2.2 Justificativa e delimitação do problema
  - 2.3 Fundamentação teórica
    - 2.3.1 Marketing digital e decisão orientada por dados
    - 2.3.2 Tráfego pago e campanhas de anúncios
    - 2.3.3 Indicadores e tomada de decisão
    - 2.3.4 Análise de dados em escala e apoio à tomada de decisão
    - 2.3.5 Aprendizagem de máquina aplicada ao marketing digital
    - 2.3.6 Visualização de dados e dashboards para apoio à gestão educacional
    - 2.3.7 Uso controlado de IA agêntica e supervisão humana
  - 2.4 Aplicação das disciplinas estudadas no Projeto Integrador
  - 2.5 Metodologia
    - 2.5.1 Delineamento aplicado e Design Thinking
    - 2.5.2 Ouvir e interpretar o contexto
    - 2.5.3 Definir o problema e os requisitos
    - 2.5.4 Fontes de dados, recortes temporais e confidencialidade
    - 2.5.5 Preparação, governança e rastreabilidade dos dados
    - 2.5.6 Níveis de interpretação analítica
    - 2.5.7 Indicadores, regras de negócio e cenários determinísticos
    - 2.5.8 Auditoria, reprodutibilidade e limites de atribuição
    - 2.5.9 Criar e prototipar
    - 2.5.10 Protocolo experimental de aprendizagem de máquina
    - 2.5.11 Uso assistivo de IA agêntica e verificação humana
    - 2.5.12 Implementar, testar, validar e ajustar
- 3 Resultados: solução final
  - 3.1 Desenvolvimento e resultados técnicos
    - 3.1.1 Estado real das fases do protótipo
    - 3.1.2 Estratégia incremental e arquitetura da solução
    - 3.1.3 Módulo de Captação
    - 3.1.4 Módulo de Matrículas
    - 3.1.5 Módulos de Ads
    - 3.1.6 Experimento de aprendizagem de máquina para CPR
    - 3.1.7 Uso assistivo de IA agêntica
    - 3.1.8 V4 e conclusão do escopo especificado das quatro fases
  - 3.2 Avaliação com a comunidade e alterações decorrentes
    - 3.2.1 Contato inicial e necessidades identificadas
    - 3.2.2 Avaliação da solução pela participante
    - 3.2.3 Comparação entre necessidades iniciais e avaliação do ciclo V1–V2
    - 3.2.4 Rastreabilidade entre necessidade, solução e avaliação externa
    - 3.2.5 Feedback, decisões e alterações implementadas
  - 3.3 Verificação técnica da solução e limitações
    - 3.3.1 Testes e verificação técnica
    - 3.3.2 Limitações
- 4 Considerações finais
- Referências
- Apêndices
  - Apêndice A – Instrumento de levantamento inicial
  - Apêndice B – Instrumentos de validação aplicados à V1, à V2 e à V4

" | ENTRA: "- 1 Introdução
- 2 Desenvolvimento
  - 2.1 Objetivos
    - 2.1.1 Objetivo geral
    - 2.1.2 Objetivos específicos
  - 2.2 Justificativa e delimitação do problema
  - 2.3 Fundamentação teórica
    - 2.3.1 Marketing digital e decisão orientada por dados
    - 2.3.2 Tráfego pago e campanhas de anúncios
    - 2.3.3 Indicadores e tomada de decisão
    - 2.3.4 Análise de dados em escala e apoio à tomada de decisão
    - 2.3.5 Aprendizagem de máquina aplicada ao marketing digital
    - 2.3.6 Visualização de dados e dashboards para apoio à gestão educacional
    - 2.3.7 Uso controlado de IA agêntica e supervisão humana
  - 2.4 Aplicação das disciplinas estudadas no Projeto Integrador
  - 2.5 Metodologia
    - 2.5.1 Delineamento aplicado e Design Thinking
    - 2.5.2 Ouvir e interpretar o contexto
    - 2.5.3 Definir o problema e os requisitos
    - 2.5.4 Fontes de dados, recortes temporais e confidencialidade
    - 2.5.5 Preparação, governança e rastreabilidade dos dados
    - 2.5.6 Níveis de interpretação analítica
    - 2.5.7 Indicadores, regras de negócio e cenários determinísticos
    - 2.5.8 Criar e prototipar
    - 2.5.9 Protocolo experimental de aprendizagem de máquina
    - 2.5.10 Uso assistivo de IA agêntica e verificação humana
    - 2.5.11 Implementar, testar, validar e ajustar
- 3 Resultados: solução final
  - 3.1 Desenvolvimento e resultados técnicos
    - 3.1.1 Estado real das fases do protótipo
    - 3.1.2 Estratégia incremental e arquitetura da solução
    - 3.1.3 Módulo de Captação
    - 3.1.4 Módulo de Matrículas
    - 3.1.5 Módulos de Ads
    - 3.1.6 Experimento de aprendizagem de máquina para CPR
      - 3.1.6.1 Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4
    - 3.1.7 Uso assistivo de IA agêntica
    - 3.1.8 V4 e conclusão do escopo especificado das quatro fases
  - 3.2 Avaliação com a comunidade e alterações decorrentes
    - 3.2.1 Contato inicial e necessidades identificadas
    - 3.2.2 Avaliação da solução pela participante
    - 3.2.3 Comparação entre necessidades iniciais e avaliação do ciclo V1–V2
    - 3.2.4 Rastreabilidade entre necessidade, solução e avaliação externa
    - 3.2.5 Feedback, decisões e alterações implementadas
    - 3.2.6 Evidências da evolução técnica da V4
  - 3.3 Verificação técnica da solução e limitações
    - 3.3.1 Testes e verificação técnica
    - 3.3.2 Limitações
- 4 Considerações finais
- Referências
- Apêndices
  - Apêndice A – Instrumento de levantamento inicial
  - Apêndice B – Instrumentos de validação aplicados à V1, à V2 e à V4

")
````

### ALT-004

Data: 25/10/2026

Seção: 2.3 Fundamentação teórica

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Atualizar chamada 2.5.10 → 2.5.9 na fundamentação.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 308; V2 linha 310.

````text
(SAI: "Essa distinção é particularmente necessária no marketing digital: a revisão de De Mauro, Sestino e
Bacconi (2022) posiciona a aprendizagem de máquina como subárea da IA e identifica aplicações em
marketing ligadas a apoio à decisão e impacto financeiro. Assim, a contribuição técnica prevista
não é apenas uma interface nem uma explicação gerada por IA. O recorte de aprendizagem de máquina
adotado é uma regressão supervisionada para CPR no Google Ads, com dados sintéticos. O modelo,
a variável-alvo, as entradas, o particionamento e as métricas do experimento executado são
documentados nas subseções 2.5.10 e 3.1.6.

" | ENTRA: "Essa distinção é particularmente necessária no marketing digital: a revisão de De Mauro, Sestino e
Bacconi (2022) posiciona a aprendizagem de máquina como subárea da IA e identifica aplicações em
marketing ligadas a apoio à decisão e impacto financeiro. Assim, a contribuição técnica prevista
não é apenas uma interface nem uma explicação gerada por IA. O recorte de aprendizagem de máquina
adotado é uma regressão supervisionada para CPR no Google Ads, com dados sintéticos. O modelo,
a variável-alvo, as entradas, o particionamento e as métricas do experimento executado são
documentados nas subseções 2.5.9 e 3.1.6.

")
````

### ALT-005

Data: 25/10/2026

Seção: 2.5.5 Preparação, governança e rastreabilidade dos dados

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Receber integralmente os dois parágrafos de 2.5.8 em 2.5.5, após governança e ausências.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 657; V2 linha 659.

````text
(SAI:  | ENTRA: "Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de
transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite
conferir resultados computacionais e suas condições de produção (Peng, 2011).

Impressão, clique, conversão de plataforma, conversa, contato, visita e matrícula não são tratados
como sinônimos. Quando houver apenas dados agregados, a análise poderá descrever associação entre
etapas do funil, mas não atribuir uma matrícula a uma campanha ou canal específico (Li *et al.*,
2016).

")
````

### ALT-006

Data: 25/10/2026

Seção: 2.5.6 Níveis de interpretação analítica

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Atualizar chamadas do experimento e da IA agêntica em 2.5.6.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 666; V2 linha 677.

````text
(SAI: "Esses níveis descrevem a leitura dos indicadores; o experimento de aprendizagem de máquina e o
apoio de IA são procedimentos separados, descritos em 2.5.10 e 2.5.11. Essa separação impede que um
resultado de regra seja apresentado como causalidade ou que uma correlação agregada seja tratada
como atribuição por canal. Quando uma informação necessária não
estiver disponível, o resultado será sinalizado como não verificável (Saura, 2021; Li *et al.*,
2016).

" | ENTRA: "Esses níveis descrevem a leitura dos indicadores; o experimento de aprendizagem de máquina e o
apoio de IA são procedimentos separados, descritos em 2.5.9 e 2.5.10. Essa separação impede que um
resultado de regra seja apresentado como causalidade ou que uma correlação agregada seja tratada
como atribuição por canal. Quando uma informação necessária não
estiver disponível, o resultado será sinalizado como não verificável (Saura, 2021; Li *et al.*,
2016).

")
````

### ALT-007

Data: 25/10/2026

Seção: 2.5.8 Auditoria, reprodutibilidade e limites de atribuição

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Suprimir título 2.5.8 e retirar seus parágrafos apenas da origem; conteúdo recebido em ALT-005; Criar e prototipar passa a 2.5.8.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 703; V2 linha 714.

````text
(SAI: "### 2.5.8 Auditoria, reprodutibilidade e limites de atribuição

Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de
transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite
conferir resultados computacionais e suas condições de produção (Peng, 2011).

Impressão, clique, conversão de plataforma, conversa, contato, visita e matrícula não são tratados
como sinônimos. Quando houver apenas dados agregados, a análise poderá descrever associação entre
etapas do funil, mas não atribuir uma matrícula a uma campanha ou canal específico (Li *et al.*,
2016).

### 2.5.9 Criar e prototipar

" | ENTRA: "### 2.5.8 Criar e prototipar

")
````

### ALT-008

Data: 25/10/2026

Seção: 2.5.10 Protocolo experimental de aprendizagem de máquina

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Renumerar protocolo experimental: 2.5.10 → 2.5.9.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 768; V2 linha 768.

````text
(SAI: "### 2.5.10 Protocolo experimental de aprendizagem de máquina

" | ENTRA: "### 2.5.9 Protocolo experimental de aprendizagem de máquina

")
````

### ALT-009

Data: 25/10/2026

Seção: 2.5.11 Uso assistivo de IA agêntica e verificação humana

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Renumerar IA agêntica: 2.5.11 → 2.5.10.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 865; V2 linha 865.

````text
(SAI: "### 2.5.11 Uso assistivo de IA agêntica e verificação humana

" | ENTRA: "### 2.5.10 Uso assistivo de IA agêntica e verificação humana

")
````

### ALT-010

Data: 25/10/2026

Seção: 2.5.11 Uso assistivo de IA agêntica e verificação humana

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Corrigir referência ao protocolo e renumerar Implementar, testar, validar e ajustar: 2.5.12 → 2.5.11.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 885; V2 linha 885.

````text
(SAI: "Arquitetura, metodologia, escolha dos modelos, interpretação dos resultados, aprovação das
alterações, decisões sobre feedbacks, validação comunitária e conclusões permaneceram sob
responsabilidade humana. Os agentes não produziram as estimativas de CPR nem validaram
matematicamente o experimento: as estimativas resultaram da regressão linear e dos baselines
documentados em 2.5.10. Não há registro de experimento específico de simulação agêntica na
solução analítica. As ferramentas não geraram respostas de P1 nem substituíram entrevistas; os
registros originais das quatro aplicações com P1 foram preservados.

### 2.5.12 Implementar, testar, validar e ajustar

" | ENTRA: "Arquitetura, metodologia, escolha dos modelos, interpretação dos resultados, aprovação das
alterações, decisões sobre feedbacks, validação comunitária e conclusões permaneceram sob
responsabilidade humana. Os agentes não produziram as estimativas de CPR nem validaram
matematicamente o experimento: as estimativas resultaram da regressão linear e dos baselines
documentados em 2.5.9. Não há registro de experimento específico de simulação agêntica na
solução analítica. As ferramentas não geraram respostas de P1 nem substituíram entrevistas; os
registros originais das quatro aplicações com P1 foram preservados.

### 2.5.11 Implementar, testar, validar e ajustar

")
````

### ALT-011

Data: 25/10/2026

Seção: 3.1.2 Estratégia incremental e arquitetura da solução

Comentário motivador:

> AAACJEC-ROA: é um fluxograma? Se sim, podem montar com balões clicando em:
>
> "Inserir"-> "Desenho" -> "Novo"

Motivo: Substituir ASCII completo pelo Fluxograma 1 e atualizar arquitetura para V4 conforme código.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 968; V2 linha 968.

````text
(SAI: "O projeto implementa uma aplicação web acadêmica independente do ambiente operacional. A
aplicação lê dados sintéticos armazenados em arquivos, verifica sua estrutura e calcula os
indicadores por regras fixas. A interface foi construída com Next.js/TypeScript. Um controle
central de acesso aos módulos (*feature gate*) mantém V1 restrita à Fase 1 e libera as Fases 1 e
2 em V2/V3. Os experimentos de CPR são executados separadamente pela CLI; seus arquivos de
resultados são apresentados em Google Ads na V2 e na V3, sem treinamento no navegador. Não há
integração operacional com contas de anúncios, CRM, sistema acadêmico ou base real da instituição.

```text
dados fictícios controlados, armazenados em arquivos
        ↓
verificação da estrutura e cálculo dos indicadores
        ↓
controle de acesso aos módulos (feature gate)
        ↓
interface: V1 (Fase 1) | V2 (Fases 1 e 2) | V3 (Fases 1 e 2, com feedbacks)

experimento separado de CPR → arquivo de resultados reproduzível
                                 ↓
                  apresentação em Google Ads na V2 e V3
```

" | ENTRA: "O protótipo implementado lê arquivos sintéticos locais e apresenta indicadores determinísticos em uma interface Next.js/TypeScript. Os controles de habilitação (*feature gates*) restringem a V1 à Fase 1 e V2/V3 às Fases 1 e 2; a V4 reúne as quatro fases especificadas. Os artefatos reproduzíveis de CPR, produzidos separadamente pela CLI, são apresentados em Google Ads nas composições V2–V4, sem treinamento no navegador. O Fluxograma 1 distingue esse experimento do fluxo comum de indicadores. A solução não se conecta a contas reais de anúncios, CRM, sistema acadêmico ou base operacional da instituição.

Fluxograma 1 – Arquitetura analítica do protótipo acadêmico

![Fluxo determinístico com dados sintéticos locais, verificação, indicadores, gates e interfaces V1–V4; experimento separado de CPR pela CLI, com artefatos apresentados em Google Ads V2–V4.](figuras/fluxograma-arquitetura-v2.svg)

Fonte: Elaborado pelo grupo (2026), com base nos contratos locais de dados, nas rotinas de indicadores, nos controles de habilitação por versão e nos artefatos dos experimentos de CPR.

")
````

### ALT-012

Data: 25/10/2026

Seção: 3.1.3 Módulo de Captação

Comentário motivador:

> AAACJIctnyI: Notas devem ser inseridas no pé da página, separadas do texto por uma linha de 5 cm. Pesquisar na internet como fazer

Motivo: Associar a nota de rodapé à Figura 1.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1004; V2 linha 990.

````text
(SAI: "Figura 1 – Indicadores e filtros da Captação na V1

" | ENTRA: "Figura 1 – Indicadores e filtros da Captação na V1[^nota-v1]

")
````

### ALT-013

Data: 25/10/2026

Seção: 3.1.3 Módulo de Captação

Comentário motivador:

> AAACJIctnyI: Notas devem ser inseridas no pé da página, separadas do texto por uma linha de 5 cm. Pesquisar na internet como fazer

Motivo: Converter integralmente a informação do rótulo legado para definição de nota Markdown.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1010; V2 linha 996.

````text
(SAI: "Nota: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo
legado “PIJ410 — Projeto Integrador em Computação III”. O componente correto deste trabalho é
PJI410 — Projeto Integrador em Computação IV.

" | ENTRA: "[^nota-v1]: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo legado “PIJ410 — Projeto Integrador em Computação III”. O componente correto deste trabalho é PJI410 — Projeto Integrador em Computação IV.

")
````

### ALT-014

Data: 25/10/2026

Seção: 3.1.5 Módulos de Ads

Comentário motivador:

> AAACJIctnyQ: A variável é uma equação? se sim, sinalizar em itálico

Motivo: Representar CPR como expressão matemática, com nomes descritivos e denominador preservados.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1034; V2 linha 1018.

````text
(SAI: "A V2 disponibiliza localmente Visão Geral Ads, Google Ads, Meta Ads e Estratégia, todos com dados
sintéticos. Não há integração com Google Ads API, Meta API ou CRM. Google Ads apresenta
investimento, impressões, cliques, conversões registradas, CTR, CPC, CPM e CPR, com filtros de
ano-calendário fictício e campanha e série mensal de CPR. CPR = investimento / conversões
registradas; não significa custo por matrícula ou lead único e não demonstra atribuição causal.
A granularidade é mensal, sem filtros diários artificiais.

" | ENTRA: "A V2 disponibiliza localmente Visão Geral Ads, Google Ads, Meta Ads e Estratégia, todos com dados
sintéticos. Não há integração com Google Ads API, Meta API ou CRM. Google Ads apresenta
investimento, impressões, cliques, conversões registradas, CTR, CPC, CPM e CPR, com filtros de
ano-calendário fictício e campanha e série mensal de CPR. $\mathit{CPR} = \frac{\text{investimento}}{\text{conversões registradas}}$; não significa custo por matrícula ou lead único e não demonstra atribuição causal.
A granularidade é mensal, sem filtros diários artificiais.

")
````

### ALT-015

Data: 25/10/2026

Seção: 3.1.6 Experimento de aprendizagem de máquina para CPR

Comentário motivador:

> TAREFA §12 — instrução explícita do responsável; não atribuída como nova fala de Letícia.

> AAACJIctnyQ: A variável é uma equação? se sim, sinalizar em itálico

Motivo: Priorizar disponibilidade dos artefatos e resultado previsto; remeter execução e fórmula às seções próprias; corrigir 2.5.9.

Origem: AJUSTE EDITORIAL — instrução explícita da tarefa e comentário da professora

Status: APLICADA

Localizador literal: V1 linha 1057; V2 linha 1040.

````text
(SAI: "Os dois experimentos de CPR descritos em 2.5.10 foram executados e seus resultados puderam ser
reproduzidos. No experimento inicial, a regressão teve erros menores que a regra simples. No
teste principal da extensão sazonal, porém, não superou a melhor regra de referência. Assim, o
conjunto dos resultados não sustenta o uso do modelo para orientar investimentos reais.

O treinamento ocorre por linha de comando, separado da interface. Google Ads apresenta os
arquivos de resultados, independentemente dos filtros de consulta. A variável prevista é
CPR = investimento / conversões registradas, não custo por matrícula ou lead único. A aplicação
não treina o modelo no navegador nem utiliza dados operacionais ou APIs reais.

" | ENTRA: "Os dois experimentos de CPR descritos em 2.5.9 foram executados e seus resultados puderam ser
reproduzidos. No experimento inicial, a regressão teve erros menores que a regra simples. No
teste principal da extensão sazonal, porém, não superou a melhor regra de referência. Assim, o
conjunto dos resultados não sustenta o uso do modelo para orientar investimentos reais.

Os artefatos do experimento estão disponíveis na interface Google Ads, independentemente dos filtros de consulta. O resultado previsto é o CPR, definido em 3.1.5; seu significado permanece distinto de custo por matrícula ou lead único. O protocolo de execução separado da interface está em 2.5.9.

")
````

### ALT-016

Data: 25/10/2026

Seção: Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3

Comentário motivador:

> AAACJIctnyU: é um tópico? parece que sim. Se for msm, adicionem o número de identificação

> TAREFA §12 — instrução explícita do responsável; não atribuída como nova fala de Letícia.

Motivo: Numerar 3.1.6.1, incluir V4 no título e reduzir repetição do protocolo, preservado em 2.5.9.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1080; V2 linha 1060.

````text
(SAI: "#### Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3

O experimento sazonal separado foi executado e reproduzido sobre o conjunto de dados sintéticos
de janeiro/2017 a janeiro/2023. O CPR mensal é calculado como soma
do investimento dividida pela soma das conversões registradas, quando a cobertura mensal é válida;
71 dos 73 meses do calendário têm CPR consolidado válido. O modelo OLS usa seno e cosseno do mês,
índice temporal e CPR de t−2 e t−12 como entradas. Pela hipótese sintética de maturação de 14
dias, t−1 não estava disponível. O teste principal reservou os 12 meses de 2022 e produziu:

" | ENTRA: "#### 3.1.6.1 Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4

A execução sazonal reproduziu os resultados do cenário de janeiro/2017 a janeiro/2023: 71 dos 73 meses têm CPR consolidado válido. No teste principal, reservado aos 12 meses de 2022 segundo o protocolo de 2.5.9, foram obtidos os seguintes resultados:

")
````

### ALT-017

Data: 25/10/2026

Seção: Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3

Comentário motivador:

> AAACJIctnyU: é um tópico? parece que sim. Se for msm, adicionem o número de identificação

Motivo: Explicitar reutilização do artefato na V4, conferida no componente GoogleV4 que compõe GoogleV3.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1120; V2 linha 1095.

````text
(SAI: "A V2 apresenta histórico sintético e projeção experimental recursiva de fevereiro/2023 a
janeiro/2024, além do índice sazonal e da comparação dos métodos. A V3 exibe o mesmo artefato,
sem alterar valores ou algoritmo, acrescido da explicitação dos limites (FB-V2-P1-007). As maiores
projeções são para
dezembro/2023 e fevereiro/2023; as menores, para maio e julho/2023. Os valores são estimativas do
cenário, não resultados futuros observados. Valores extremos e lags previstos podem se propagar
pela recursão. Essa extensão teve origem técnica/acadêmica, não comunitária; a alteração comunitária
FB-V1-P1-001 refere-se somente ao gráfico consolidado de Captação.

" | ENTRA: "A V2 apresenta histórico sintético e projeção experimental recursiva de fevereiro/2023 a
janeiro/2024, além do índice sazonal e da comparação dos métodos. A V3 exibe o mesmo artefato,
sem alterar valores ou algoritmo, acrescido da explicitação dos limites (FB-V2-P1-007); a V4 reutiliza essa apresentação. As maiores
projeções são para
dezembro/2023 e fevereiro/2023; as menores, para maio e julho/2023. Os valores são estimativas do
cenário, não resultados futuros observados. Valores extremos e lags previstos podem se propagar
pela recursão. Essa extensão teve origem técnica/acadêmica, não comunitária; a alteração comunitária
FB-V1-P1-001 refere-se somente ao gráfico consolidado de Captação.

")
````

### ALT-018

Data: 25/10/2026

Seção: 3.1.7 Uso assistivo de IA agêntica

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Atualizar referência da IA agêntica para 2.5.10.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1153; V2 linha 1128.

````text
(SAI: "Em paralelo ao desenvolvimento da interface e aos experimentos de CPR, o grupo utilizou agentes
como apoio à programação, auditoria do repositório, revisão documental,
análise de consistência e verificação de testes e artefatos de CPR. O procedimento e os registros
de execução estão em 2.5.11 e `docs/run_log.md`. As saídas passaram por inspeção e decisão
humana; não houve avaliação independente da eficácia dos agentes nem simulação agêntica
específica documentada na solução analítica.

" | ENTRA: "Em paralelo ao desenvolvimento da interface e aos experimentos de CPR, o grupo utilizou agentes
como apoio à programação, auditoria do repositório, revisão documental,
análise de consistência e verificação de testes e artefatos de CPR. O procedimento e os registros
de execução estão em 2.5.10 e `docs/run_log.md`. As saídas passaram por inspeção e decisão
humana; não houve avaliação independente da eficácia dos agentes nem simulação agêntica
específica documentada na solução analítica.

")
````

### ALT-019

Data: 25/10/2026

Seção: 3.1.8 V4 e conclusão do escopo especificado das quatro fases

Comentário motivador:

> AAACJIctnyY: A figura 14 se chama "V4: ranking sintético de Reels orgânicos", se realmente estiverem se referindo a ela, ela precisaria aparecer aqui. É possível retomar algo que já foi apresentado, mas referenciar algo que está páginas adiante não é recomendado.

Motivo: Retirar explicações detalhadas de 3.1.8 e remetê-las à seção 3.2.6 junto às capturas; destino integral em ALT-021–025.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1168; V2 linha 1143.

````text
(SAI: "Em Conteúdo Orgânico, doze Reels fictícios têm mês, alcance e interações. A taxa de interação
divide interações por alcance. O score demonstrativo combina 70% da taxa normalizada e 30% do
alcance normalizado, segundo referências acadêmicas declaradas, e produz ranking com desempate
determinístico. Ausência de medição impede a classificação, enquanto zero interações observado
permanece um valor válido. A Figura 14 mostra a apresentação desse cenário; seu score não é
utilizado para ordenar anúncios pagos.

Em Objetivo da Gestão, o plano fictício calcula vagas alvo a partir de vagas hipotéticas e
taxas alvo por turma. Ele demonstra uma premissa de ocupação e não representa matrícula
observada, previsão institucional ou plano aprovado pela parceira (Figura 15). A página
Arquitetura & Algoritmos documenta na interface as fontes locais, as regras de cálculo,
as verificações e os limites de interpretação da solução.

Na segunda iteração técnica da V4, o Meta Ads passou a mostrar os cinco criativos fictícios
do mês associados ao indicador **conversa**, ordenados pelo menor CPR válido. Para cada
anúncio, CPR Meta = investimento ÷ conversas; sem conversas, o valor fica indisponível.
Interações são outro indicador e não entram nesse denominador. O ranking de anúncios pagos
da Figura 16 não utiliza o score de Reels orgânicos.

No Google Ads, o ranking mensal compara palavras-chave fictícias por custo, cliques,
conversões registradas e CPR (Figura 17). CPR Google = custo ÷ conversões registradas no
Google Ads; conversão zero ou ausente torna o CPR indisponível. Essas conversões não equivalem
a matrículas, leads únicos ou pessoas identificadas. Os registros granulares de ambos os
rankings são partições determinísticas das linhas mensais fechadas da base sintética;
preservam os totais de origem quando aplicável, sem acesso a APIs ou dados operacionais.

Em Estratégia, um gráfico complementar apresenta as séries mensais descritivas de CPR Google
por conversão registrada e CPR Meta por conversa (Figura 18). Os denominadores têm sentidos
diferentes: não há CPR agregado Google+Meta, atribuição causal de matrículas aos canais nem
mistura com a previsão experimental de CPR Google. O protótipo não contém dados pessoais,
integração com plataformas reais ou dados institucionais operacionais. As Figuras 14 a 18,
apresentadas após a rastreabilidade da seção 3.2, documentam essas funcionalidades técnicas;
não representam resultados produzidos pela avaliação de P1.

" | ENTRA: "As entregas incluem Reels orgânicos, plano fictício de vagas, documentação da arquitetura, rankings de anúncios e palavras-chave e séries descritivas de CPR por canal. A seção 3.2.6 reúne a descrição e as capturas dessas funcionalidades após as evidências históricas V1–V3, preservando sua origem técnica e distinguindo-as dos ajustes solicitados por P1.

")
````

### ALT-020

Data: 25/10/2026

Seção: Terceiro momento — avaliação ampliada da V2

Comentário motivador:

> AAACJIctg2k: o tópico está muito curto, remover esse título e incluir o texto em outro tópico conectando com outra etapa

Motivo: Atualizar referência metodológica 2.5.12 → 2.5.11 após evidências V3.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1358; V2 linha 1301.

````text
(SAI: "**Efeito no desenvolvimento:** os sete feedbacks da terceira avaliação foram analisados pelo
grupo e incorporados à V3. A implementação passou por verificação técnica, descrita em 3.3;
P1 não avaliou a V3. A aplicação seguinte ocorreu depois da evolução técnica que produziu a
V4. As falas anteriores citadas constam dos registros primários
`docs/validacao/respostas/v1-p1.md`, `docs/validacao/respostas/v2-p1-reavaliacao.md` e
`docs/validacao/respostas/v2-p1-para-v3.md`; o instrumento e a análise dos feedbacks estão
identificados na seção 2.5.12.

" | ENTRA: "**Efeito no desenvolvimento:** os sete feedbacks da terceira avaliação foram analisados pelo
grupo e incorporados à V3. A implementação passou por verificação técnica, descrita em 3.3;
P1 não avaliou a V3. A aplicação seguinte ocorreu depois da evolução técnica que produziu a
V4. As falas anteriores citadas constam dos registros primários
`docs/validacao/respostas/v1-p1.md`, `docs/validacao/respostas/v2-p1-reavaliacao.md` e
`docs/validacao/respostas/v2-p1-para-v3.md`; o instrumento e a análise dos feedbacks estão
identificados na seção 2.5.11.

")
````

### ALT-021

Data: 25/10/2026

Seção: 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)

Comentário motivador:

> AAACJIctnyY: A figura 14 se chama "V4: ranking sintético de Reels orgânicos", se realmente estiverem se referindo a ela, ela precisaria aparecer aqui. É possível retomar algo que já foi apresentado, mas referenciar algo que está páginas adiante não é recomendado.

Motivo: Criar 3.2.6 e receber parágrafo de Conteúdo Orgânico imediatamente antes da Figura 14.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1501; V2 linha 1444.

````text
(SAI: "As cinco capturas seguintes registram a interface técnica da V4 já implementada. Sua posição
após a tabela mantém a sequência das figuras históricas; as imagens não são evidência de
desempenho institucional nem resultado produzido pela avaliação de P1.

" | ENTRA: "### 3.2.6 Evidências da evolução técnica da V4

As funcionalidades a seguir resultaram da evolução técnica e acadêmica do grupo, sem questionário entre V3 e V4. As capturas registram a V4 já implementada; não são resultados produzidos pela quarta avaliação nem evidência de desempenho institucional.

Em Conteúdo Orgânico, doze Reels fictícios têm mês, alcance e interações. A taxa de interação
divide interações por alcance. O score demonstrativo combina 70% da taxa normalizada e 30% do
alcance normalizado, segundo referências acadêmicas declaradas, e produz ranking com desempate
determinístico. Ausência de medição impede a classificação, enquanto zero interações observado
permanece um valor válido. A Figura 14 mostra a apresentação desse cenário; seu score não é
utilizado para ordenar anúncios pagos.

")
````

### ALT-022

Data: 25/10/2026

Seção: 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)

Comentário motivador:

> AAACJIctnyY: A figura 14 se chama "V4: ranking sintético de Reels orgânicos", se realmente estiverem se referindo a ela, ela precisaria aparecer aqui. É possível retomar algo que já foi apresentado, mas referenciar algo que está páginas adiante não é recomendado.

Motivo: Receber parágrafo integral de Gestão imediatamente antes da Figura 15.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1511; V2 linha 1461.

````text
(SAI:  | ENTRA: "Em Objetivo da Gestão, o plano fictício calcula vagas alvo a partir de vagas hipotéticas e
taxas alvo por turma. Ele demonstra uma premissa de ocupação e não representa matrícula
observada, previsão institucional ou plano aprovado pela parceira (Figura 15). A página
Arquitetura & Algoritmos documenta na interface as fontes locais, as regras de cálculo,
as verificações e os limites de interpretação da solução.

")
````

### ALT-023

Data: 25/10/2026

Seção: 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)

Comentário motivador:

> AAACJIctnyY: A figura 14 se chama "V4: ranking sintético de Reels orgânicos", se realmente estiverem se referindo a ela, ela precisaria aparecer aqui. É possível retomar algo que já foi apresentado, mas referenciar algo que está páginas adiante não é recomendado.

> AAACJIctnyQ: A variável é uma equação? se sim, sinalizar em itálico

Motivo: Receber descrição Meta junto à Figura 16 e padronizar fórmula sem alterar denominador.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1517; V2 linha 1473.

````text
(SAI:  | ENTRA: "Na segunda iteração técnica da V4, o Meta Ads passou a mostrar os cinco criativos fictícios
do mês associados ao indicador **conversa**, ordenados pelo menor CPR válido. Para cada
anúncio, $\mathit{CPR}_{\mathrm{Meta}} = \frac{\text{investimento}}{\text{conversas}}$; sem conversas, o valor fica indisponível.
Interações são outro indicador e não entram nesse denominador. O ranking de anúncios pagos
da Figura 16 não utiliza o score de Reels orgânicos.

")
````

### ALT-024

Data: 25/10/2026

Seção: 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)

Comentário motivador:

> AAACJIctnyY: A figura 14 se chama "V4: ranking sintético de Reels orgânicos", se realmente estiverem se referindo a ela, ela precisaria aparecer aqui. É possível retomar algo que já foi apresentado, mas referenciar algo que está páginas adiante não é recomendado.

> AAACJIctnyQ: A variável é uma equação? se sim, sinalizar em itálico

Motivo: Receber descrição Google junto à Figura 17 e padronizar fórmula sem alterar denominador.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1523; V2 linha 1485.

````text
(SAI:  | ENTRA: "No Google Ads, o ranking mensal compara palavras-chave fictícias por custo, cliques,
conversões registradas e CPR (Figura 17). $\mathit{CPR}_{\mathrm{Google}} = \frac{\text{custo}}{\text{conversões registradas no Google Ads}}$; conversão zero ou ausente torna o CPR indisponível. Essas conversões não equivalem
a matrículas, leads únicos ou pessoas identificadas. Os registros granulares de ambos os
rankings são partições determinísticas das linhas mensais fechadas da base sintética;
preservam os totais de origem quando aplicável, sem acesso a APIs ou dados operacionais.

")
````

### ALT-025

Data: 25/10/2026

Seção: 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)

Comentário motivador:

> AAACJIctnyY: A figura 14 se chama "V4: ranking sintético de Reels orgânicos", se realmente estiverem se referindo a ela, ela precisaria aparecer aqui. É possível retomar algo que já foi apresentado, mas referenciar algo que está páginas adiante não é recomendado.

Motivo: Receber descrição Estratégia junto à Figura 18 e remover indicação de que as figuras estavam adiante.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1529; V2 linha 1497.

````text
(SAI:  | ENTRA: "Em Estratégia, um gráfico complementar apresenta as séries mensais descritivas de CPR Google
por conversão registrada e CPR Meta por conversa (Figura 18). Os denominadores têm sentidos
diferentes: não há CPR agregado Google+Meta, atribuição causal de matrículas aos canais nem
mistura com a previsão experimental de CPR Google. O protótipo não contém dados pessoais,
integração com plataformas reais ou dados institucionais operacionais. As Figuras 14 a 18 documentam essas funcionalidades técnicas;
não representam resultados produzidos pela avaliação de P1.

")
````

### ALT-026

Data: 25/10/2026

Seção: 4 CONSIDERAÇÕES FINAIS

Comentário motivador:

> AAACJHT_vaw: Apresentar as contribuições do trabalho a partir dos resultados. 
> Releiam ao que vocês escreveram sobre as contribuições sociais, acadêmicas, e principalmente, sobre as contribuições da interface para os usuários e retomem essas informações pensando que, antes vocês tinham uma expectativa de como ficaria e do impacto que iria provocar, agora vocês apresentam os resultados.
> Então, a conclusão precisa incluir as seguintes reflexões: as expectativas de realização da solução foram atendidas? o trabalho teve alguma limitação, algo que poderia ser melhor ou algo que impediu que vocês atingissem o resultado esperado? O trabalho realmente foi aplicável como esperavam ou as validações e execução trouxeram outras perspectivas? 
>
> Além de abordar essa finalização no texto, é importante que falem sobre isso no final do vídeo.

Motivo: Conservar achados e limites da conclusão, tornando explícitas expectativas, atendimento dos seis objetivos e contribuições acadêmica, comunitária e da interface.

Origem: ORIENTAÇÃO DA PROFESSORA

Status: APLICADA

Localizador literal: V1 linha 1614; V2 linha 1589.

````text
(SAI: "O projeto demonstrou, no protótipo acadêmico, que é possível organizar os conjuntos de dados
definidos para o estudo, calcular indicadores rastreáveis e apresentar recortes temporais e
comparações para apoiar a interpretação de investimentos em mídia digital. Isso responde à
pergunta central quanto à organização e à apresentação das informações. Os indicadores oferecem
elementos para análise, sem substituir a decisão dos responsáveis.

A V1 apresentou Captação e Matrículas com cálculos determinísticos. P1, gerente de Marketing,
avaliou-a presencialmente em 07/10/2026, com TCLE obtido, e apontou a dispersão dos gráficos
temporais. O grupo aprovou FB-V1-P1-001 e reuniu as séries na V2. Na reavaliação presencial da
mesma data, ela relatou comparação facilitada, sem nova dificuldade ou pedido de alteração naquele
momento. Esse retorno encerrou o primeiro ciclo com P1 e manteve a V2. A versão também acrescentou
Visão Geral de Ads, Google Ads, Meta Ads, Estratégia e a apresentação acadêmica do CPR por
evolução técnica independente desse feedback.

Na terceira aplicação, P1 avaliou a V2 de forma ampliada, solicitou sete grupos de ajustes e
classificou a versão como necessitando alterações importantes. O grupo analisou os feedbacks,
decidiu incorporá-los e implementou a V3: apresentação mensal, composição de matrículas por
série, efetivação de visitas, comparações temporais e comunicação mais clara dos limites da
previsão. P1 não avaliou a V3. Em seguida, por evolução técnica/acadêmica **sem nova aplicação
comunitária entre as versões**, o grupo implementou a V4 com o escopo especificado das quatro
fases, rankings sintéticos de Ads e CPR temporal por canal. A quarta avaliação ocorreu depois
dessa implementação: P1 atribuiu 5/5 às oito questões fechadas, escolheu A e não solicitou
alteração relevante. A V4 foi mantida, sem abertura de V5. Os quatro momentos atendem ao
objetivo de avaliar o protótipo com uma profissional e incorporar contribuições viáveis, dentro
do limite de uma única participante; não equivalem a validação externa ampla.

Os experimentos de CPR delimitam o alcance da solução. No experimento inicial, a
regressão apresentou erros menores que a persistência t−2. No período de teste principal do
experimento sazonal, superou a referência t−12, mas não a persistência t−2, e obteve R²
negativo. Esse resultado é um achado válido: o experimento foi executado e reproduzido com
controle da informação disponível no momento da previsão, mas não demonstrou desempenho
preditivo suficiente para uso operacional ou recomendação automática de investimento. Testes
automatizados, verificações de não vazamento e reprodução dos arquivos de resultados sustentam
o funcionamento técnico descrito. As práticas de IA agêntica apoiaram construção, análise e
verificação sob revisão humana; não houve avaliação de sua eficácia nem simulação agêntica
específica via linha de comando.

A contribuição do estudo inclui a distinção entre ausência de dado e valor zero, a separação
entre indicadores calculados e previsões experimentais e a rastreabilidade das alterações.
Dados sintéticos independentes, uma única participante, séries agregadas sem rastreamento
individual ou inferência causal, ausência de integrações operacionais e desempenho preditivo
limitado impedem generalizar as percepções de P1 ou afirmar melhoria real de decisões de
orçamento, redução de custos, aumento de matrículas ou impacto institucional. A fala de Q12
sobre comparação anual permanece relato da participante, sem verificação institucional ou
inferência causal. As quatro fases foram implementadas na V4 dentro do escopo documental;
nenhum uso operacional real foi demonstrado.

Avaliações futuras com outros profissionais poderão ampliar a compreensão de uso da V4, sem
pressupor uma nova versão. O exame de dados reais dependerá de autorização e anonimização;
integrações operacionais exigirão requisitos próprios de segurança. Séries mais amplas e
outros modelos dependerão de dados suficientes e de qualidade. O CPR experimental permanece
limitado e separado dos indicadores descritivos da V4.

" | ENTRA: "O projeto alcançou a solução acadêmica pretendida para organizar e apresentar informações de mídia digital: a V4 reúne o escopo especificado das quatro fases, com indicadores rastreáveis, filtros e comparações temporais. A expectativa de apoiar a interpretação foi atendida no protótipo e na percepção de P1; a expectativa de subsidiar a distribuição real do orçamento permanece apenas parcialmente atendida, pois não houve integração operacional nem demonstração de decisões reais de investimento.

Os três primeiros objetivos específicos foram concretizados pela organização de dados sintéticos de Captação, Matrículas e Ads, pelos indicadores comparáveis nos recortes compatíveis e pela interface web V1–V4. Isso demonstra a estrutura analítica e sua apresentação, sem equivaler à consolidação dos registros institucionais dispersos. A contribuição acadêmica inclui distinguir ausência de dado de valor zero, preservar fórmulas e denominadores e separar indicadores descritivos de previsões experimentais.

O quarto objetivo foi atendido pela execução e reprodução dos experimentos de CPR, mesmo com desempenho limitado. A regressão inicial teve erros menores que a persistência t−2; no teste principal sazonal, superou t−12, mas não t−2, e apresentou R² negativo. O resultado não sustenta recomendação de investimento. Testes automatizados, verificações de não vazamento e reprodução dos artefatos sustentam a execução técnica. Quanto ao quinto objetivo, as práticas de IA agêntica apoiaram construção, análise e verificação sob supervisão humana; não houve avaliação independente de sua eficácia nem simulação agêntica específica via linha de comando.

O sexto objetivo foi atendido pelas quatro aplicações com a mesma profissional e pela incorporação de contribuições viáveis. A primeira avaliação da V1 motivou a consolidação temporal na V2, cuja utilidade percebida foi confirmada na segunda; Ads e CPR entraram por evolução técnica independente. A terceira aplicação ampliada à V2 indicou necessidade de alterações importantes e originou sete feedbacks incorporados à V3. P1 não avaliou a V3. A evolução técnica/acadêmica seguinte produziu a V4 sem questionário intermediário; somente depois P1 atribuiu oito notas 5/5, escolheu A e não solicitou alteração relevante, mantendo-se a V4 sem abertura de V5.

As avaliações trouxeram uma perspectiva concreta de uso: reunir séries relacionadas, apresentar resumos mensais e explicitar os limites da previsão foi mais relevante para P1 do que apenas ampliar indicadores. A contribuição da interface para essa usuária está na comparação facilitada relatada após o ajuste temporal e na utilidade percebida na quarta aplicação. Para a comunidade participante, o trabalho ofereceu um protótipo discutido a partir de suas necessidades e permitiu que sugestões orientassem mudanças rastreáveis; não demonstrou benefício institucional mensurável.

A aplicabilidade demonstrada ficou restrita à exploração acadêmica com dados fictícios. A ausência de integração e de registros operacionais no escopo impediu verificar redução de custos, aumento de matrículas ou melhoria de decisões reais. Uma participante não permite generalização estatística; as quatro aplicações não são amostras independentes nem comparação controlada. Séries sintéticas agregadas não rastreiam pessoas nem estabelecem atribuição causal, e o desempenho limitado do CPR impede tratá-lo como previsão operacional. A fala de P1 sobre melhora comparativa anual permanece relato profissional, sem verificação ou atribuição à plataforma.

O aprendizado central foi que organização, clareza e limites explícitos precisam acompanhar a expansão funcional. Avaliações futuras com outros profissionais poderão examinar a V4 sem pressupor nova versão. O uso de dados reais dependerá de autorização e anonimização; integrações exigirão requisitos próprios de segurança, e novos modelos dependerão de séries suficientes e de qualidade. O CPR experimental permanece separado dos indicadores descritivos.

")
````

### ALT-027

Data: 25/10/2026

Seção: 3.1.2 — arquivos do Fluxograma 1

Comentário motivador:

> AAACJEC-ROA: é um fluxograma? Se sim, podem montar com balões clicando em:
>
> "Inserir"-> "Desenho" -> "Novo"

Motivo: Criar imagem técnica vetorial e PNG renderizado a partir do próprio SVG; sem editar capturas históricas.

Origem: ORIENTAÇÃO DA PROFESSORA; desenho vetorial autorizado pela tarefa

Status: APLICADA

````text
(SAI:  | ENTRA: "docs/relatorio/figuras/fluxograma-arquitetura-v2.svg
docs/relatorio/figuras/fluxograma-arquitetura-v2.png")
````

### ALT-028

Data: 25/10/2026

Seção: Registro da execução — docs/run_log.md

Comentário motivador:

> TAREFA §25 — instrução explícita do responsável; não atribuída como nova fala de Letícia.

Motivo: Registrar execução relevante conforme padrão do projeto, sem alterar decisões nem promover baseline.

Origem: AJUSTE EDITORIAL — registro de execução autorizado

Status: APLICADA

````text
(SAI:  | ENTRA: "

## 2026-10-25 — Revisão editorial controlada V1 → V2 do Relatório Final

Por solicitação explícita do responsável, criada `docs/relatorio/Relatorio_Final_V2.md` como candidata, sem promoção a baseline. Consulta autenticada aos comentários do documento `Relatorio_Final`: 14 tópicos de Letícia, respostas e três tópicos de outro integrante, sem token de continuação. Fonte científica exclusiva: V1 congelada (ADR-012). Registros literais ALT-001–ALT-028 no controle e em `REVISAO_V1_PARA_V2.md`; checklist de composição separado. Resumo 239 → 217 palavras; conteúdo de 2.5.8 integrado em 2.5.5; renumeração e referências sincronizadas; Fluxograma 1 em SVG/PNG; explicações V4 junto às Figuras 14–18 em 3.2.6; conclusão vinculada aos seis objetivos. Verificadores dos dois experimentos CPR reproduziram os artefatos sem gravação; 38 verificações de não vazamento aprovadas. V1 e `final.md` preservados com SHA-256 `3af4147e3deb97ad00d55d44b79ab53fcfa4e0fe0b837fb01f2a820213f1276c`; 18 capturas históricas, 14 tabelas numeradas, quadro metodológico não numerado, 28 referências, dados, respostas e código preservados. Sem edição do Google Docs, commit, push ou deploy. Revisão humana e composição institucional permanecem necessárias; ver pendências documentadas na revisão.
")
````


### ALT-029

Data: 25/10/2026

Seção: Camada editorial de rastreabilidade da V2 e registros associados.

Motivo: Visualizar no GitHub as alterações existentes sem modificar o conteúdo científico.

Origem: AJUSTE EDITORIAL — ordem explícita do responsável para aplicação direta.

Status: APLICADA

Pares de adição literais abaixo; localizadores relativos ao texto anterior à camada visual.

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 163 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO MAPA -->
## Mapa de alterações V1 → V2

> Camada editorial para leitura no GitHub (ALT-029). V2 permanece candidata à revisão humana, sem promoção a baseline.

| Seção V2 | Título | IDs relacionados | Tipo da alteração |
|---|---|---|---|
| — (pré-textual) | Resumo | [ALT-001](CONTROLE_ALTERACOES_RELATORIO.md#alt-001) | resumo; redação |
| — (pré-textual) | Lista de ilustrações | [ALT-002](CONTROLE_ALTERACOES_RELATORIO.md#alt-002) | estrutura; lista |
| — (pré-textual) | Sumário | [ALT-003](CONTROLE_ALTERACOES_RELATORIO.md#alt-003) | estrutura; sumário |
| 2.3 | Fundamentação teórica | [ALT-004](CONTROLE_ALTERACOES_RELATORIO.md#alt-004) | referência interna |
| 2.5.5 | Preparação, governança e rastreabilidade dos dados | [ALT-005](CONTROLE_ALTERACOES_RELATORIO.md#alt-005) | metodologia; deslocamento |
| 2.5.6 | Níveis de interpretação analítica | [ALT-006](CONTROLE_ALTERACOES_RELATORIO.md#alt-006) | referência interna |
| 2.5.8 | Criar e prototipar | [ALT-007](CONTROLE_ALTERACOES_RELATORIO.md#alt-007) | metodologia; estrutura |
| 2.5.9 | Protocolo experimental de aprendizagem de máquina | [ALT-008](CONTROLE_ALTERACOES_RELATORIO.md#alt-008) | metodologia; numeração |
| 2.5.10 | Uso assistivo de IA agêntica e verificação humana | [ALT-009](CONTROLE_ALTERACOES_RELATORIO.md#alt-009), [ALT-010](CONTROLE_ALTERACOES_RELATORIO.md#alt-010) | metodologia; numeração; metodologia; referência interna e numeração |
| 2.5.11 | Implementar, testar, validar e ajustar | [ALT-010](CONTROLE_ALTERACOES_RELATORIO.md#alt-010) | metodologia; numeração |
| 3.1.2 | Estratégia incremental e arquitetura da solução | [ALT-011](CONTROLE_ALTERACOES_RELATORIO.md#alt-011), [ALT-027](CONTROLE_ALTERACOES_RELATORIO.md#alt-027) | estrutura; fluxograma; arquivo do fluxograma |
| 3.1.3 | Módulo de Captação | [ALT-012](CONTROLE_ALTERACOES_RELATORIO.md#alt-012), [ALT-013](CONTROLE_ALTERACOES_RELATORIO.md#alt-013) | figura; nota; estrutura; nota |
| 3.1.5 | Módulos de Ads | [ALT-014](CONTROLE_ALTERACOES_RELATORIO.md#alt-014) | notação de fórmula |
| 3.1.6 | Experimento de aprendizagem de máquina para CPR | [ALT-015](CONTROLE_ALTERACOES_RELATORIO.md#alt-015) | resultados; redação |
| 3.1.6.1 | Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4 | [ALT-016](CONTROLE_ALTERACOES_RELATORIO.md#alt-016), [ALT-017](CONTROLE_ALTERACOES_RELATORIO.md#alt-017) | estrutura; numeração e redação; resultados; redação |
| 3.1.7 | Uso assistivo de IA agêntica | [ALT-018](CONTROLE_ALTERACOES_RELATORIO.md#alt-018) | referência interna |
| 3.1.8 | V4 e conclusão do escopo especificado das quatro fases | [ALT-019](CONTROLE_ALTERACOES_RELATORIO.md#alt-019) | resultados; deslocamento |
| 3.2.2 | Avaliação da solução pela participante — terceiro momento | [ALT-020](CONTROLE_ALTERACOES_RELATORIO.md#alt-020) | referência interna |
| 3.2.6 | Evidências da evolução técnica da V4 | [ALT-021](CONTROLE_ALTERACOES_RELATORIO.md#alt-021), [ALT-022](CONTROLE_ALTERACOES_RELATORIO.md#alt-022), [ALT-023](CONTROLE_ALTERACOES_RELATORIO.md#alt-023), [ALT-024](CONTROLE_ALTERACOES_RELATORIO.md#alt-024), [ALT-025](CONTROLE_ALTERACOES_RELATORIO.md#alt-025) | resultados; estrutura e deslocamento; resultados; deslocamento; resultados; deslocamento e notação; resultados; deslocamento e redação |
| 4 | CONSIDERAÇÕES FINAIS | [ALT-026](CONTROLE_ALTERACOES_RELATORIO.md#alt-026) | conclusão; redação |

A antiga 2.5.8 foi integrada em 2.5.5 (ALT-005/ALT-007); 2.5.9–2.5.12 passaram a 2.5.8–2.5.11. Os detalhes da V4 saíram de 3.1.8 e entraram em 3.2.6 (ALT-019/ALT-021–ALT-025). ALT-028 registra a execução fora do relatório.

**Legenda visual — SAI / ENTRA**

```diff
- SAI: texto anterior removido ou substituído
+ ENTRA: texto inserido na V2
```

Abra os blocos **SAI / ENTRA** junto aos trechos alterados. Os recortes são literais e podem começar ou terminar no meio de uma frase; os links levam aos pares integrais. ∅ indica ausência no local; em deslocamentos, consulte também o ID da origem. Os sinais identificam a mudança independentemente da cor do tema. Tabelas científicas não tiveram alteração registrada.

[Revisão completa](REVISAO_V1_PARA_V2.md) · [Controle SAI/ENTRA](CONTROLE_ALTERACOES_RELATORIO.md)

<!-- RASTREABILIDADE-VISUAL:FIM MAPA -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 2379 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-001 -->
<details>
<summary>ALT-001 — SAI / ENTRA (recortes literais)</summary>

```diff
- Este relatório apresenta uma plataforma acadêmica para organizar informações sobre investimentos em mídia digital e apoiar de
+ A dispersão de registros de mídia digital dificulta sua comparação no contexto educacional. O objetivo foi desenvolver uma so
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-001).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-001 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 4227 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-002 -->
<details>
<summary>ALT-002 — SAI / ENTRA (recortes literais)</summary>

```diff
- – V4: séries temporais separadas de CPR em Estratégia
+ – V4: séries temporais separadas de CPR em Estratégia - Fluxograma 1 – Arquitetura analítica do protótipo acadêmico
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-002).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-002 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 6450 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-003 -->
<details>
<summary>ALT-003 — SAI / ENTRA (recortes literais)</summary>

```diff
- gras de negócio e cenários determinísticos     - 2.5.8 Auditoria, reprodutibilidade e limites de atribuição     - 2.5.9 Criar e prototipar     - 2.5.10 Protocolo experimental de ap
+ gras de negócio e cenários determinísticos     - 2.5.8 Criar e prototipar     - 2.5.9 Protocolo experimental de aprendizagem de máquina     - 2.5.10 Uso assistivo de IA agêntica e
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-003).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-003 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 18357 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-004 -->
<details>
<summary>ALT-004 — SAI / ENTRA (recortes literais)</summary>

```diff
- perimento executado são documentados nas subseções 2.5.10 e 3.1.6.
+ perimento executado são documentados nas subseções 2.5.9 e 3.1.6.
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-004).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-004 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 44025 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-005 -->
<details>
<summary>ALT-005 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite conferir resultados computacionais e suas co
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-005).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-005 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 45146 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-006 -->
<details>
<summary>ALT-006 — SAI / ENTRA (recortes literais)</summary>

```diff
- io de IA são procedimentos separados, descritos em 2.5.10 e 2.5.11. Essa separação impede que um resultado de regra seja apresentado como causalidade ou que uma correlação agregada
+ io de IA são procedimentos separados, descritos em 2.5.9 e 2.5.10. Essa separação impede que um resultado de regra seja apresentado como causalidade ou que uma correlação agregada
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-006).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-006 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 47852 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-007 -->
<details>
<summary>ALT-007 — SAI / ENTRA (recortes literais)</summary>

```diff
- ### 2.5.8 Auditoria, reprodutibilidade e limites de atribuição  Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de transformação e fórmula. A reprodutibilidade é parte do procedimento anal
+ ### 2.5.8 Criar e prototipar
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-007).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-007 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 51888 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-008 -->
<details>
<summary>ALT-008 — SAI / ENTRA (recortes literais)</summary>

```diff
- ### 2.5.10 Protocolo experimental de aprendizagem de máquina
+ ### 2.5.9 Protocolo experimental de aprendizagem de máquina
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-008).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-008 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 58822 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-009 -->
<details>
<summary>ALT-009 — SAI / ENTRA (recortes literais)</summary>

```diff
- ### 2.5.11 Uso assistivo de IA agêntica e verificação humana
+ ### 2.5.10 Uso assistivo de IA agêntica e verificação humana
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-009).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-009 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 60810 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-010 -->
<details>
<summary>ALT-010 — SAI / ENTRA (recortes literais)</summary>

```diff
- a regressão linear e dos baselines documentados em 2.5.10. Não há registro de experimento específico de simulação agêntica na solução analítica. As ferramentas não geraram resposta
+ a regressão linear e dos baselines documentados em 2.5.9. Não há registro de experimento específico de simulação agêntica na solução analítica. As ferramentas não geraram respostas
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-010).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-010 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 65655 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-011 -->
<details>
<summary>ALT-011 — SAI / ENTRA (recortes literais)</summary>

```diff
- O projeto implementa uma aplicação web acadêmica independente do ambiente operacional. A aplicação lê dados sintéticos armazenados
+ O protótipo implementado lê arquivos sintéticos locais e apresenta indicadores determinísticos em uma interface Next.js/TypeScript
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-011).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-011 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 67629 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-012 -->
<details>
<summary>ALT-012 — SAI / ENTRA (recortes literais)</summary>

```diff
- Figura 1 – Indicadores e filtros da Captação na V1
+ Figura 1 – Indicadores e filtros da Captação na V1[^nota-v1]
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-012).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-012 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 67892 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-013 -->
<details>
<summary>ALT-013 — SAI / ENTRA (recortes literais)</summary>

```diff
- Nota: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo legado “PIJ410 — Projeto Integ
+ [^nota-v1]: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo legado “PIJ410 — Projeto
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-013).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-013 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 69189 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-014 -->
<details>
<summary>ALT-014 — SAI / ENTRA (recortes literais)</summary>

```diff
- -calendário fictício e campanha e série mensal de CPR. CPR = investimento / conversões registradas; não significa custo por matrícula ou lead único e não demonstra atribuição causa
+ -calendário fictício e campanha e série mensal de CPR. $\mathit{CPR} = \frac{\text{investimento}}{\text{conversões registradas}}$; não significa custo por matrícula ou lead único e
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-014).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-014 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 70722 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-015 -->
<details>
<summary>ALT-015 — SAI / ENTRA (recortes literais)</summary>

```diff
- Os dois experimentos de CPR descritos em 2.5.10 foram executados e seus resultados puderam ser reproduzidos. No experimento inicial, a regressão teve erros menores que a
+ Os dois experimentos de CPR descritos em 2.5.9 foram executados e seus resultados puderam ser reproduzidos. No experimento inicial, a regressão teve erros menores que a r
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-015).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-015 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 72070 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-016 -->
<details>
<summary>ALT-016 — SAI / ENTRA (recortes literais)</summary>

```diff
- #### Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3  O experimento sazonal separado foi executado e
+ #### 3.1.6.1 Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4  A execução sazonal reproduziu
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-016).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-016 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 73748 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-017 -->
<details>
<summary>ALT-017 — SAI / ENTRA (recortes literais)</summary>

```diff
- o, acrescido da explicitação dos limites (FB-V2-P1-007). As maiores projeções são para dezembro/2023 e fevereiro/2023; as menores, para maio e julho/2023. Os valores são estimativa
+ o, acrescido da explicitação dos limites (FB-V2-P1-007); a V4 reutiliza essa apresentação. As maiores projeções são para dezembro/2023 e fevereiro/2023; as menores, para maio e jul
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-017).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-017 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 75439 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-018 -->
<details>
<summary>ALT-018 — SAI / ENTRA (recortes literais)</summary>

```diff
- procedimento e os registros de execução estão em 2.5.11 e `docs/run_log.md`. As saídas passaram por inspeção e decisão humana; não houve avaliação independente da eficácia dos age
+ procedimento e os registros de execução estão em 2.5.10 e `docs/run_log.md`. As saídas passaram por inspeção e decisão humana; não houve avaliação independente da eficácia dos age
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-018).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-018 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 76438 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-019 -->
<details>
<summary>ALT-019 — SAI / ENTRA (recortes literais)</summary>

```diff
- Em Conteúdo Orgânico, doze Reels fictícios têm mês, alcance e interações. A taxa de interação divide interações por alcance.
+ As entregas incluem Reels orgânicos, plano fictício de vagas, documentação da arquitetura, rankings de anúncios e palavras-ch
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-019).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-019 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 86853 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-020 -->
<details>
<summary>ALT-020 — SAI / ENTRA (recortes literais)</summary>

```diff
- nálise dos feedbacks estão identificados na seção 2.5.12.
+ nálise dos feedbacks estão identificados na seção 2.5.11.
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-020).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-020 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 99501 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-021 -->
<details>
<summary>ALT-021 — SAI / ENTRA (recortes literais)</summary>

```diff
- As cinco capturas seguintes registram a interface técnica da V4 já implementada. Sua posição após a tabela mantém a sequência
+ ### 3.2.6 Evidências da evolução técnica da V4  As funcionalidades a seguir resultaram da evolução técnica e acadêmica do gru
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-021).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-021 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 100546 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-022 -->
<details>
<summary>ALT-022 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Em Objetivo da Gestão, o plano fictício calcula vagas alvo a partir de vagas hipotéticas e taxas alvo por turma. Ele demonstra uma premissa de ocupação e não representa matrícula observada, previsão institucional ou plano aprovado
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-022).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-022 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 101250 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-023 -->
<details>
<summary>ALT-023 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Na segunda iteração técnica da V4, o Meta Ads passou a mostrar os cinco criativos fictícios do mês associados ao indicador **conversa**, ordenados pelo menor CPR válido. Para cada anúncio, $\mathit{CPR}_{\mathrm{Meta}} = \frac{\te
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-023).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-023 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 102002 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-024 -->
<details>
<summary>ALT-024 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ No Google Ads, o ranking mensal compara palavras-chave fictícias por custo, cliques, conversões registradas e CPR (Figura 17). $\mathit{CPR}_{\mathrm{Google}} = \frac{\text{custo}}{\text{conversões registradas no Google Ads}}$; co
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-024).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-024 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 102887 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-025 -->
<details>
<summary>ALT-025 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Em Estratégia, um gráfico complementar apresenta as séries mensais descritivas de CPR Google por conversão registrada e CPR Meta por conversa (Figura 18). Os denominadores têm sentidos diferentes: não há CPR agregado Google+Meta,
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-025).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-025 -->

")
````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; antes do caractere 109241 (índice iniciado em zero).

````text
(SAI: ∅ | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-026 -->
<details>
<summary>ALT-026 — SAI / ENTRA (recortes literais)</summary>

```diff
- O projeto demonstrou, no protótipo acadêmico, que é possível organizar os conjuntos de dados definidos para o estudo, calcular indicado
+ O projeto alcançou a solução acadêmica pretendida para organizar e apresentar informações de mídia digital: a V4 reúne o escopo especif
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-026).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-026 -->

")
````

Arquivo: `docs/relatorio/REVISAO_V1_PARA_V2.md`; adição ao final.

````text
(SAI: ∅ | ENTRA: "

## Rastreabilidade visual no GitHub — 25/10/2026

ALT-029 acrescenta à V2 um mapa e blocos recolhíveis com recortes literais SAI/ENTRA de ALT-001–ALT-026. ALT-027 está associado ao fluxograma em 3.1.2; ALT-028 permanece como registro de execução. Os pares integrais históricos foram preservados. As linhas da tabela de figuras na seção 5 são localizadores históricos anteriores à camada visual; para navegação atual, use os títulos e IDs. Remover exclusivamente os blocos delimitados RASTREABILIDADE-VISUAL restitui integralmente o texto anterior da V2.
")
````

Arquivo: `docs/run_log.md`; adição ao final.

````text
(SAI: ∅ | ENTRA: "

## 2026-10-25 — Rastreabilidade visual da V2 no GitHub

Adicionados mapa de seções alteradas, legenda diff e 26 blocos recolhíveis SAI/ENTRA com recortes literais vinculados aos pares integrais. Aplicação direta autorizada pelo responsável, registrada em ALT-029. Atualizados somente Relatorio_Final_V2.md, REVISAO_V1_PARA_V2.md, CONTROLE_ALTERACOES_RELATORIO.md e este log. Verificação por remoção dos blocos editoriais: texto anterior da V2 recuperado integralmente; pares ALT-001–ALT-028 preservados. V2 permanece candidata à revisão humana.
")
````


### ALT-030

Data: 25/10/2026

Seção: Camada editorial de rastreabilidade da V2 e registros associados.

Motivo: Substituir recortes recolhíveis por comparações integrais abertas, com navegação interna e isolamento para composição acadêmica futura.

Origem: AJUSTE EDITORIAL — aplicação direta expressamente solicitada pelo responsável.

Status: APLICADA

Os pares abaixo transcrevem literalmente cada segmento editorial anterior e novo; ALT-001–ALT-029 permanecem intactos. As cinco crases externas isolam as cercas internas dos trechos transcritos.

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `MAPA`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO MAPA -->
## Mapa de alterações V1 → V2

> Camada editorial para leitura no GitHub (ALT-029). V2 permanece candidata à revisão humana, sem promoção a baseline.

| Seção V2 | Título | IDs relacionados | Tipo da alteração |
|---|---|---|---|
| — (pré-textual) | Resumo | [ALT-001](CONTROLE_ALTERACOES_RELATORIO.md#alt-001) | resumo; redação |
| — (pré-textual) | Lista de ilustrações | [ALT-002](CONTROLE_ALTERACOES_RELATORIO.md#alt-002) | estrutura; lista |
| — (pré-textual) | Sumário | [ALT-003](CONTROLE_ALTERACOES_RELATORIO.md#alt-003) | estrutura; sumário |
| 2.3 | Fundamentação teórica | [ALT-004](CONTROLE_ALTERACOES_RELATORIO.md#alt-004) | referência interna |
| 2.5.5 | Preparação, governança e rastreabilidade dos dados | [ALT-005](CONTROLE_ALTERACOES_RELATORIO.md#alt-005) | metodologia; deslocamento |
| 2.5.6 | Níveis de interpretação analítica | [ALT-006](CONTROLE_ALTERACOES_RELATORIO.md#alt-006) | referência interna |
| 2.5.8 | Criar e prototipar | [ALT-007](CONTROLE_ALTERACOES_RELATORIO.md#alt-007) | metodologia; estrutura |
| 2.5.9 | Protocolo experimental de aprendizagem de máquina | [ALT-008](CONTROLE_ALTERACOES_RELATORIO.md#alt-008) | metodologia; numeração |
| 2.5.10 | Uso assistivo de IA agêntica e verificação humana | [ALT-009](CONTROLE_ALTERACOES_RELATORIO.md#alt-009), [ALT-010](CONTROLE_ALTERACOES_RELATORIO.md#alt-010) | metodologia; numeração; metodologia; referência interna e numeração |
| 2.5.11 | Implementar, testar, validar e ajustar | [ALT-010](CONTROLE_ALTERACOES_RELATORIO.md#alt-010) | metodologia; numeração |
| 3.1.2 | Estratégia incremental e arquitetura da solução | [ALT-011](CONTROLE_ALTERACOES_RELATORIO.md#alt-011), [ALT-027](CONTROLE_ALTERACOES_RELATORIO.md#alt-027) | estrutura; fluxograma; arquivo do fluxograma |
| 3.1.3 | Módulo de Captação | [ALT-012](CONTROLE_ALTERACOES_RELATORIO.md#alt-012), [ALT-013](CONTROLE_ALTERACOES_RELATORIO.md#alt-013) | figura; nota; estrutura; nota |
| 3.1.5 | Módulos de Ads | [ALT-014](CONTROLE_ALTERACOES_RELATORIO.md#alt-014) | notação de fórmula |
| 3.1.6 | Experimento de aprendizagem de máquina para CPR | [ALT-015](CONTROLE_ALTERACOES_RELATORIO.md#alt-015) | resultados; redação |
| 3.1.6.1 | Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4 | [ALT-016](CONTROLE_ALTERACOES_RELATORIO.md#alt-016), [ALT-017](CONTROLE_ALTERACOES_RELATORIO.md#alt-017) | estrutura; numeração e redação; resultados; redação |
| 3.1.7 | Uso assistivo de IA agêntica | [ALT-018](CONTROLE_ALTERACOES_RELATORIO.md#alt-018) | referência interna |
| 3.1.8 | V4 e conclusão do escopo especificado das quatro fases | [ALT-019](CONTROLE_ALTERACOES_RELATORIO.md#alt-019) | resultados; deslocamento |
| 3.2.2 | Avaliação da solução pela participante — terceiro momento | [ALT-020](CONTROLE_ALTERACOES_RELATORIO.md#alt-020) | referência interna |
| 3.2.6 | Evidências da evolução técnica da V4 | [ALT-021](CONTROLE_ALTERACOES_RELATORIO.md#alt-021), [ALT-022](CONTROLE_ALTERACOES_RELATORIO.md#alt-022), [ALT-023](CONTROLE_ALTERACOES_RELATORIO.md#alt-023), [ALT-024](CONTROLE_ALTERACOES_RELATORIO.md#alt-024), [ALT-025](CONTROLE_ALTERACOES_RELATORIO.md#alt-025) | resultados; estrutura e deslocamento; resultados; deslocamento; resultados; deslocamento e notação; resultados; deslocamento e redação |
| 4 | CONSIDERAÇÕES FINAIS | [ALT-026](CONTROLE_ALTERACOES_RELATORIO.md#alt-026) | conclusão; redação |

A antiga 2.5.8 foi integrada em 2.5.5 (ALT-005/ALT-007); 2.5.9–2.5.12 passaram a 2.5.8–2.5.11. Os detalhes da V4 saíram de 3.1.8 e entraram em 3.2.6 (ALT-019/ALT-021–ALT-025). ALT-028 registra a execução fora do relatório.

**Legenda visual — SAI / ENTRA**

```diff
- SAI: texto anterior removido ou substituído
+ ENTRA: texto inserido na V2
```

Abra os blocos **SAI / ENTRA** junto aos trechos alterados. Os recortes são literais e podem começar ou terminar no meio de uma frase; os links levam aos pares integrais. ∅ indica ausência no local; em deslocamentos, consulte também o ID da origem. Os sinais identificam a mudança independentemente da cor do tema. Tabelas científicas não tiveram alteração registrada.

[Revisão completa](REVISAO_V1_PARA_V2.md) · [Controle SAI/ENTRA](CONTROLE_ALTERACOES_RELATORIO.md)

<!-- RASTREABILIDADE-VISUAL:FIM MAPA -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO MAPA -->
## Mapa de alterações V1 → V2

> Versão anotada para revisão no GitHub. Camada editorial atual: ALT-030. O corpo científico da V2 permanece preservado fora dos blocos; V2 continua candidata à revisão humana.

| Seção V2 | Título | IDs relacionados | Tipo da alteração |
|---|---|---|---|
| — (pré-textual) | Resumo | [ALT-001](#comparacao-alt-001) | resumo; redação |
| — (pré-textual) | Lista de ilustrações | [ALT-002](#comparacao-alt-002) | estrutura; lista |
| — (pré-textual) | Sumário | [ALT-003](#comparacao-alt-003) | estrutura; sumário |
| 2.3 | Fundamentação teórica | [ALT-004](#comparacao-alt-004) | referência interna |
| 2.5.5 | Preparação, governança e rastreabilidade dos dados | [ALT-005](#comparacao-alt-005) | metodologia; deslocamento |
| 2.5.6 | Níveis de interpretação analítica | [ALT-006](#comparacao-alt-006) | referência interna |
| 2.5.8 | Criar e prototipar | [ALT-007](#comparacao-alt-007) | metodologia; estrutura |
| 2.5.9 | Protocolo experimental de aprendizagem de máquina | [ALT-008](#comparacao-alt-008) | metodologia; numeração |
| 2.5.10 | Uso assistivo de IA agêntica e verificação humana | [ALT-009](#comparacao-alt-009), [ALT-010](#comparacao-alt-010) | metodologia; numeração; metodologia; referência interna e numeração |
| 2.5.11 | Implementar, testar, validar e ajustar | [ALT-010](#comparacao-alt-010) | metodologia; numeração |
| 3.1.2 | Estratégia incremental e arquitetura da solução | [ALT-011](#comparacao-alt-011), [ALT-027](#registro-alt-027) | estrutura; fluxograma; arquivo do fluxograma |
| 3.1.3 | Módulo de Captação | [ALT-012](#comparacao-alt-012), [ALT-013](#comparacao-alt-013) | figura; nota; estrutura; nota |
| 3.1.5 | Módulos de Ads | [ALT-014](#comparacao-alt-014) | notação de fórmula |
| 3.1.6 | Experimento de aprendizagem de máquina para CPR | [ALT-015](#comparacao-alt-015) | resultados; redação |
| 3.1.6.1 | Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4 | [ALT-016](#comparacao-alt-016), [ALT-017](#comparacao-alt-017) | estrutura; numeração e redação; resultados; redação |
| 3.1.7 | Uso assistivo de IA agêntica | [ALT-018](#comparacao-alt-018) | referência interna |
| 3.1.8 | V4 e conclusão do escopo especificado das quatro fases | [ALT-019](#comparacao-alt-019) | resultados; deslocamento |
| 3.2.2 | Avaliação da solução pela participante — terceiro momento | [ALT-020](#comparacao-alt-020) | referência interna |
| 3.2.6 | Evidências da evolução técnica da V4 | [ALT-021](#comparacao-alt-021), [ALT-022](#comparacao-alt-022), [ALT-023](#comparacao-alt-023), [ALT-024](#comparacao-alt-024), [ALT-025](#comparacao-alt-025) | resultados; estrutura e deslocamento; resultados; deslocamento; resultados; deslocamento e notação; resultados; deslocamento e redação |
| 4 | CONSIDERAÇÕES FINAIS | [ALT-026](#comparacao-alt-026) | conclusão; redação |

**Legenda visual:** `- ` em bloco `diff` = **SAI** (vermelho); `+ ` = **ENTRA** (verde), conforme a renderização e o tema do GitHub. As comparações ficam abertas e reproduzem os textos completos, com as quebras de linha originais. Acréscimos contêm somente linhas `+ `; não se inserem marcadores fictícios de ausência.

A antiga 2.5.8 foi integrada em 2.5.5 (ALT-005/ALT-007); 2.5.9–2.5.12 passaram a 2.5.8–2.5.11. Os detalhes da V4 saíram de 3.1.8 e entraram em 3.2.6 (ALT-019/ALT-021–ALT-025). Nenhuma tabela científica foi substituída ou teve células alteradas nesses registros.

**Cobertura dos registros ALT-001–ALT-029**

- ALT-001–ALT-026: alterações textuais e estruturais, com 26 comparações integrais distribuídas junto aos trechos correspondentes.
- [ALT-027](#registro-alt-027): novos arquivos SVG/PNG do fluxograma, documentados junto a ALT-011; não corresponde a substituição de texto binário.
- <a id="registro-alt-028"></a> **ALT-028:** registro da execução em `docs/run_log.md`; não corresponde a substituição científica na V2.
- <a id="registro-alt-029"></a> **ALT-029:** camada editorial anterior, com 26 blocos recolhíveis e recortes; substituída por ALT-030. Os registros históricos permanecem intactos.

**Composição acadêmica futura:** remover exclusivamente os segmentos entre `RASTREABILIDADE-VISUAL:INICIO` e `RASTREABILIDADE-VISUAL:FIM`, incluindo o mapa. Preservar integralmente todo o texto científico fora desses segmentos; o ENTRA dos diffs é uma cópia de revisão.

<!-- RASTREABILIDADE-VISUAL:FIM MAPA -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-001`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-001 -->
<details>
<summary>ALT-001 — SAI / ENTRA (recortes literais)</summary>

```diff
- Este relatório apresenta uma plataforma acadêmica para organizar informações sobre investimentos em mídia digital e apoiar de
+ A dispersão de registros de mídia digital dificulta sua comparação no contexto educacional. O objetivo foi desenvolver uma so
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-001).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-001 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-001 -->
<a id="comparacao-alt-001"></a>

**ALT-001 — Resumo**

```diff
- Este relatório apresenta uma plataforma acadêmica para organizar informações sobre investimentos em mídia digital e apoiar decisões de marketing em uma instituição de ensino. A necessidade de reunir registros dispersos foi identificada em conversas com profissionais da instituição. O grupo desenvolveu uma aplicação web com indicadores, filtros e gráficos, usando dados sintéticos, sem integrar registros operacionais. A V1 reuniu Captação e Matrículas. Após a primeira avaliação de uma gerente de Marketing, identificada como P1, a V2 incorporou um gráfico temporal consolidado; uma segunda aplicação confirmou sua utilidade percebida. Na terceira aplicação, ampliada à V2, P1 apresentou contribuições, das quais sete feedbacks foram aceitos e incorporados à V3. Sem nova avaliação comunitária entre versões, o grupo desenvolveu a V4 por evolução técnica e acadêmica: ela reúne o escopo especificado das quatro fases, incluindo Conteúdo Orgânico, Gestão e Arquitetura & Algoritmos, além de rankings sintéticos em Ads e séries temporais de custo por resultado (CPR). Depois da implementação, P1 avaliou a V4 online, em 14/10/2026. Atribuiu 5/5 às oito questões fechadas, escolheu a opção A e não solicitou alteração relevante; a V4 foi mantida. Em experimento separado, a aprendizagem de máquina estimou o CPR Google, definido como investimento dividido pelas conversões registradas. O modelo sazonal apresentou desempenho preditivo limitado, insuficiente para orientar investimentos reais. Testes e registros versionados sustentam a execução técnica. Dados fictícios, ausência de integração operacional e avaliação por uma única participante impedem generalização ou comprovação de impacto institucional.

+ A dispersão de registros de mídia digital dificulta sua comparação no contexto educacional. O objetivo foi desenvolver uma solução analítica para organizar esses dados e apoiar a discussão da distribuição do orçamento de marketing em uma instituição de ensino. A metodologia combinou escuta de profissionais, prototipação incremental com dados sintéticos, cálculos determinísticos, testes e quatro avaliações sucessivas com uma gerente de Marketing, identificada como P1. Em experimento separado e reproduzível, regressões lineares estimaram o custo por resultado (CPR) Google, definido como investimento dividido pelas conversões registradas. Como resultados, a V1 apresentou Captação e Matrículas; a primeira avaliação motivou o gráfico consolidado da V2, confirmado na segunda, e sete feedbacks da terceira aplicação ampliada à V2 foram incorporados à V3. A V4 resultou de evolução técnica e acadêmica sem questionário intermediário, reunindo o escopo especificado das quatro fases, rankings sintéticos e séries de CPR; em avaliação posterior online, em 14/10/2026, P1 atribuiu oito notas 5/5, escolheu a classificação A e não solicitou alteração relevante, mantendo-se a V4. Os testes sustentam a execução técnica, mas o experimento sazonal apresentou desempenho preditivo limitado, insuficiente para orientar investimentos reais. A contribuição demonstrada consiste na organização rastreável dos indicadores e na apresentação ajustada à participante; dados sintéticos, ausência de integração operacional e uma única avaliadora impedem generalização e comprovação de impacto institucional.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-001 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-002`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-002 -->
<details>
<summary>ALT-002 — SAI / ENTRA (recortes literais)</summary>

```diff
- – V4: séries temporais separadas de CPR em Estratégia
+ – V4: séries temporais separadas de CPR em Estratégia - Fluxograma 1 – Arquitetura analítica do protótipo acadêmico
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-002).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-002 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-002 -->
<a id="comparacao-alt-002"></a>

**ALT-002 — Lista de ilustrações**

```diff
- - Figura 1 – Indicadores e filtros da Captação na V1
- - Figura 2 – Indicadores e composição por safra em Matrículas na V1
- - Figura 3 – Visão geral acadêmica de Ads na V2
- - Figura 4 – Histórico sintético e previsão sazonal experimental de CPR na V2
- - Figura 5 – Gráficos temporais separados de Captação na V1
- - Figura 6 – Evolução temporal consolidada de Captação na V2
- - Figura 7 – V3: efetivação visita–matrícula em Captação
- - Figura 8 – V3: matrículas e rematrículas por série
- - Figura 9 – V3: resumo mensal da Visão Geral de Ads
- - Figura 10 – V3: investimento e leads simulados no Google Ads
- - Figura 11 – V3: alcance, investimento e resultados no Meta Ads
- - Figura 12 – V3: comparação temporal no módulo Estratégia
- - Figura 13 – V3: comunicação dos limites da previsão experimental de CPR
- - Figura 14 – V4: ranking sintético de Reels orgânicos
- - Figura 15 – V4: plano fictício de vagas e ocupação em Gestão
- - Figura 16 – V4: ranking sintético de anúncios no Meta Ads
- - Figura 17 – V4: ranking sintético de palavras-chave no Google Ads
- - Figura 18 – V4: séries temporais separadas de CPR em Estratégia

+ - Figura 1 – Indicadores e filtros da Captação na V1
+ - Figura 2 – Indicadores e composição por safra em Matrículas na V1
+ - Figura 3 – Visão geral acadêmica de Ads na V2
+ - Figura 4 – Histórico sintético e previsão sazonal experimental de CPR na V2
+ - Figura 5 – Gráficos temporais separados de Captação na V1
+ - Figura 6 – Evolução temporal consolidada de Captação na V2
+ - Figura 7 – V3: efetivação visita–matrícula em Captação
+ - Figura 8 – V3: matrículas e rematrículas por série
+ - Figura 9 – V3: resumo mensal da Visão Geral de Ads
+ - Figura 10 – V3: investimento e leads simulados no Google Ads
+ - Figura 11 – V3: alcance, investimento e resultados no Meta Ads
+ - Figura 12 – V3: comparação temporal no módulo Estratégia
+ - Figura 13 – V3: comunicação dos limites da previsão experimental de CPR
+ - Figura 14 – V4: ranking sintético de Reels orgânicos
+ - Figura 15 – V4: plano fictício de vagas e ocupação em Gestão
+ - Figura 16 – V4: ranking sintético de anúncios no Meta Ads
+ - Figura 17 – V4: ranking sintético de palavras-chave no Google Ads
+ - Figura 18 – V4: séries temporais separadas de CPR em Estratégia
+ - Fluxograma 1 – Arquitetura analítica do protótipo acadêmico

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-002 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-003`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-003 -->
<details>
<summary>ALT-003 — SAI / ENTRA (recortes literais)</summary>

```diff
- gras de negócio e cenários determinísticos     - 2.5.8 Auditoria, reprodutibilidade e limites de atribuição     - 2.5.9 Criar e prototipar     - 2.5.10 Protocolo experimental de ap
+ gras de negócio e cenários determinísticos     - 2.5.8 Criar e prototipar     - 2.5.9 Protocolo experimental de aprendizagem de máquina     - 2.5.10 Uso assistivo de IA agêntica e
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-003).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-003 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-003 -->
<a id="comparacao-alt-003"></a>

**ALT-003 — Sumário**

```diff
- - 1 Introdução
- - 2 Desenvolvimento
-   - 2.1 Objetivos
-     - 2.1.1 Objetivo geral
-     - 2.1.2 Objetivos específicos
-   - 2.2 Justificativa e delimitação do problema
-   - 2.3 Fundamentação teórica
-     - 2.3.1 Marketing digital e decisão orientada por dados
-     - 2.3.2 Tráfego pago e campanhas de anúncios
-     - 2.3.3 Indicadores e tomada de decisão
-     - 2.3.4 Análise de dados em escala e apoio à tomada de decisão
-     - 2.3.5 Aprendizagem de máquina aplicada ao marketing digital
-     - 2.3.6 Visualização de dados e dashboards para apoio à gestão educacional
-     - 2.3.7 Uso controlado de IA agêntica e supervisão humana
-   - 2.4 Aplicação das disciplinas estudadas no Projeto Integrador
-   - 2.5 Metodologia
-     - 2.5.1 Delineamento aplicado e Design Thinking
-     - 2.5.2 Ouvir e interpretar o contexto
-     - 2.5.3 Definir o problema e os requisitos
-     - 2.5.4 Fontes de dados, recortes temporais e confidencialidade
-     - 2.5.5 Preparação, governança e rastreabilidade dos dados
-     - 2.5.6 Níveis de interpretação analítica
-     - 2.5.7 Indicadores, regras de negócio e cenários determinísticos
-     - 2.5.8 Auditoria, reprodutibilidade e limites de atribuição
-     - 2.5.9 Criar e prototipar
-     - 2.5.10 Protocolo experimental de aprendizagem de máquina
-     - 2.5.11 Uso assistivo de IA agêntica e verificação humana
-     - 2.5.12 Implementar, testar, validar e ajustar
- - 3 Resultados: solução final
-   - 3.1 Desenvolvimento e resultados técnicos
-     - 3.1.1 Estado real das fases do protótipo
-     - 3.1.2 Estratégia incremental e arquitetura da solução
-     - 3.1.3 Módulo de Captação
-     - 3.1.4 Módulo de Matrículas
-     - 3.1.5 Módulos de Ads
-     - 3.1.6 Experimento de aprendizagem de máquina para CPR
-     - 3.1.7 Uso assistivo de IA agêntica
-     - 3.1.8 V4 e conclusão do escopo especificado das quatro fases
-   - 3.2 Avaliação com a comunidade e alterações decorrentes
-     - 3.2.1 Contato inicial e necessidades identificadas
-     - 3.2.2 Avaliação da solução pela participante
-     - 3.2.3 Comparação entre necessidades iniciais e avaliação do ciclo V1–V2
-     - 3.2.4 Rastreabilidade entre necessidade, solução e avaliação externa
-     - 3.2.5 Feedback, decisões e alterações implementadas
-   - 3.3 Verificação técnica da solução e limitações
-     - 3.3.1 Testes e verificação técnica
-     - 3.3.2 Limitações
- - 4 Considerações finais
- - Referências
- - Apêndices
-   - Apêndice A – Instrumento de levantamento inicial
-   - Apêndice B – Instrumentos de validação aplicados à V1, à V2 e à V4

+ - 1 Introdução
+ - 2 Desenvolvimento
+   - 2.1 Objetivos
+     - 2.1.1 Objetivo geral
+     - 2.1.2 Objetivos específicos
+   - 2.2 Justificativa e delimitação do problema
+   - 2.3 Fundamentação teórica
+     - 2.3.1 Marketing digital e decisão orientada por dados
+     - 2.3.2 Tráfego pago e campanhas de anúncios
+     - 2.3.3 Indicadores e tomada de decisão
+     - 2.3.4 Análise de dados em escala e apoio à tomada de decisão
+     - 2.3.5 Aprendizagem de máquina aplicada ao marketing digital
+     - 2.3.6 Visualização de dados e dashboards para apoio à gestão educacional
+     - 2.3.7 Uso controlado de IA agêntica e supervisão humana
+   - 2.4 Aplicação das disciplinas estudadas no Projeto Integrador
+   - 2.5 Metodologia
+     - 2.5.1 Delineamento aplicado e Design Thinking
+     - 2.5.2 Ouvir e interpretar o contexto
+     - 2.5.3 Definir o problema e os requisitos
+     - 2.5.4 Fontes de dados, recortes temporais e confidencialidade
+     - 2.5.5 Preparação, governança e rastreabilidade dos dados
+     - 2.5.6 Níveis de interpretação analítica
+     - 2.5.7 Indicadores, regras de negócio e cenários determinísticos
+     - 2.5.8 Criar e prototipar
+     - 2.5.9 Protocolo experimental de aprendizagem de máquina
+     - 2.5.10 Uso assistivo de IA agêntica e verificação humana
+     - 2.5.11 Implementar, testar, validar e ajustar
+ - 3 Resultados: solução final
+   - 3.1 Desenvolvimento e resultados técnicos
+     - 3.1.1 Estado real das fases do protótipo
+     - 3.1.2 Estratégia incremental e arquitetura da solução
+     - 3.1.3 Módulo de Captação
+     - 3.1.4 Módulo de Matrículas
+     - 3.1.5 Módulos de Ads
+     - 3.1.6 Experimento de aprendizagem de máquina para CPR
+       - 3.1.6.1 Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4
+     - 3.1.7 Uso assistivo de IA agêntica
+     - 3.1.8 V4 e conclusão do escopo especificado das quatro fases
+   - 3.2 Avaliação com a comunidade e alterações decorrentes
+     - 3.2.1 Contato inicial e necessidades identificadas
+     - 3.2.2 Avaliação da solução pela participante
+     - 3.2.3 Comparação entre necessidades iniciais e avaliação do ciclo V1–V2
+     - 3.2.4 Rastreabilidade entre necessidade, solução e avaliação externa
+     - 3.2.5 Feedback, decisões e alterações implementadas
+     - 3.2.6 Evidências da evolução técnica da V4
+   - 3.3 Verificação técnica da solução e limitações
+     - 3.3.1 Testes e verificação técnica
+     - 3.3.2 Limitações
+ - 4 Considerações finais
+ - Referências
+ - Apêndices
+   - Apêndice A – Instrumento de levantamento inicial
+   - Apêndice B – Instrumentos de validação aplicados à V1, à V2 e à V4

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-003 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-004`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-004 -->
<details>
<summary>ALT-004 — SAI / ENTRA (recortes literais)</summary>

```diff
- perimento executado são documentados nas subseções 2.5.10 e 3.1.6.
+ perimento executado são documentados nas subseções 2.5.9 e 3.1.6.
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-004).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-004 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-004 -->
<a id="comparacao-alt-004"></a>

**ALT-004 — 2.3 Fundamentação teórica**

```diff
- Essa distinção é particularmente necessária no marketing digital: a revisão de De Mauro, Sestino e
- Bacconi (2022) posiciona a aprendizagem de máquina como subárea da IA e identifica aplicações em
- marketing ligadas a apoio à decisão e impacto financeiro. Assim, a contribuição técnica prevista
- não é apenas uma interface nem uma explicação gerada por IA. O recorte de aprendizagem de máquina
- adotado é uma regressão supervisionada para CPR no Google Ads, com dados sintéticos. O modelo,
- a variável-alvo, as entradas, o particionamento e as métricas do experimento executado são
- documentados nas subseções 2.5.10 e 3.1.6.

+ Essa distinção é particularmente necessária no marketing digital: a revisão de De Mauro, Sestino e
+ Bacconi (2022) posiciona a aprendizagem de máquina como subárea da IA e identifica aplicações em
+ marketing ligadas a apoio à decisão e impacto financeiro. Assim, a contribuição técnica prevista
+ não é apenas uma interface nem uma explicação gerada por IA. O recorte de aprendizagem de máquina
+ adotado é uma regressão supervisionada para CPR no Google Ads, com dados sintéticos. O modelo,
+ a variável-alvo, as entradas, o particionamento e as métricas do experimento executado são
+ documentados nas subseções 2.5.9 e 3.1.6.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-004 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-005`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-005 -->
<details>
<summary>ALT-005 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite conferir resultados computacionais e suas co
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-005).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-005 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-005 -->
<a id="comparacao-alt-005"></a>

**ALT-005 — 2.5.5 Preparação, governança e rastreabilidade dos dados**

Deslocamento: os dois parágrafos de 2.5.8 da V1 entram em 2.5.5 da V2; a retirada da origem está em ALT-007.

```diff
+ Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de
+ transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite
+ conferir resultados computacionais e suas condições de produção (Peng, 2011).

+ Impressão, clique, conversão de plataforma, conversa, contato, visita e matrícula não são tratados
+ como sinônimos. Quando houver apenas dados agregados, a análise poderá descrever associação entre
+ etapas do funil, mas não atribuir uma matrícula a uma campanha ou canal específico (Li *et al.*,
+ 2016).

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-005 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-006`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-006 -->
<details>
<summary>ALT-006 — SAI / ENTRA (recortes literais)</summary>

```diff
- io de IA são procedimentos separados, descritos em 2.5.10 e 2.5.11. Essa separação impede que um resultado de regra seja apresentado como causalidade ou que uma correlação agregada
+ io de IA são procedimentos separados, descritos em 2.5.9 e 2.5.10. Essa separação impede que um resultado de regra seja apresentado como causalidade ou que uma correlação agregada
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-006).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-006 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-006 -->
<a id="comparacao-alt-006"></a>

**ALT-006 — 2.5.6 Níveis de interpretação analítica**

```diff
- Esses níveis descrevem a leitura dos indicadores; o experimento de aprendizagem de máquina e o
- apoio de IA são procedimentos separados, descritos em 2.5.10 e 2.5.11. Essa separação impede que um
- resultado de regra seja apresentado como causalidade ou que uma correlação agregada seja tratada
- como atribuição por canal. Quando uma informação necessária não
- estiver disponível, o resultado será sinalizado como não verificável (Saura, 2021; Li *et al.*,
- 2016).

+ Esses níveis descrevem a leitura dos indicadores; o experimento de aprendizagem de máquina e o
+ apoio de IA são procedimentos separados, descritos em 2.5.9 e 2.5.10. Essa separação impede que um
+ resultado de regra seja apresentado como causalidade ou que uma correlação agregada seja tratada
+ como atribuição por canal. Quando uma informação necessária não
+ estiver disponível, o resultado será sinalizado como não verificável (Saura, 2021; Li *et al.*,
+ 2016).

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-006 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-007`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-007 -->
<details>
<summary>ALT-007 — SAI / ENTRA (recortes literais)</summary>

```diff
- ### 2.5.8 Auditoria, reprodutibilidade e limites de atribuição  Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de transformação e fórmula. A reprodutibilidade é parte do procedimento anal
+ ### 2.5.8 Criar e prototipar
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-007).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-007 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-007 -->
<a id="comparacao-alt-007"></a>

**ALT-007 — 2.5.8 Auditoria, reprodutibilidade e limites de atribuição**

Deslocamento: o conteúdo da antiga 2.5.8 foi recebido em 2.5.5 (ALT-005); Criar e prototipar passou de 2.5.9 para 2.5.8.

```diff
- ### 2.5.8 Auditoria, reprodutibilidade e limites de atribuição

- Cada resultado exibido deve poder ser reconstituído a partir de sua fonte, período, regra de
- transformação e fórmula. A reprodutibilidade é parte do procedimento analítico, pois permite
- conferir resultados computacionais e suas condições de produção (Peng, 2011).

- Impressão, clique, conversão de plataforma, conversa, contato, visita e matrícula não são tratados
- como sinônimos. Quando houver apenas dados agregados, a análise poderá descrever associação entre
- etapas do funil, mas não atribuir uma matrícula a uma campanha ou canal específico (Li *et al.*,
- 2016).

- ### 2.5.9 Criar e prototipar

+ ### 2.5.8 Criar e prototipar

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-007 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-008`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-008 -->
<details>
<summary>ALT-008 — SAI / ENTRA (recortes literais)</summary>

```diff
- ### 2.5.10 Protocolo experimental de aprendizagem de máquina
+ ### 2.5.9 Protocolo experimental de aprendizagem de máquina
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-008).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-008 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-008 -->
<a id="comparacao-alt-008"></a>

**ALT-008 — 2.5.10 Protocolo experimental de aprendizagem de máquina**

```diff
- ### 2.5.10 Protocolo experimental de aprendizagem de máquina

+ ### 2.5.9 Protocolo experimental de aprendizagem de máquina

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-008 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-009`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-009 -->
<details>
<summary>ALT-009 — SAI / ENTRA (recortes literais)</summary>

```diff
- ### 2.5.11 Uso assistivo de IA agêntica e verificação humana
+ ### 2.5.10 Uso assistivo de IA agêntica e verificação humana
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-009).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-009 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-009 -->
<a id="comparacao-alt-009"></a>

**ALT-009 — 2.5.11 Uso assistivo de IA agêntica e verificação humana**

```diff
- ### 2.5.11 Uso assistivo de IA agêntica e verificação humana

+ ### 2.5.10 Uso assistivo de IA agêntica e verificação humana

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-009 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-010`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-010 -->
<details>
<summary>ALT-010 — SAI / ENTRA (recortes literais)</summary>

```diff
- a regressão linear e dos baselines documentados em 2.5.10. Não há registro de experimento específico de simulação agêntica na solução analítica. As ferramentas não geraram resposta
+ a regressão linear e dos baselines documentados em 2.5.9. Não há registro de experimento específico de simulação agêntica na solução analítica. As ferramentas não geraram respostas
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-010).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-010 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-010 -->
<a id="comparacao-alt-010"></a>

**ALT-010 — 2.5.11 Uso assistivo de IA agêntica e verificação humana**

```diff
- Arquitetura, metodologia, escolha dos modelos, interpretação dos resultados, aprovação das
- alterações, decisões sobre feedbacks, validação comunitária e conclusões permaneceram sob
- responsabilidade humana. Os agentes não produziram as estimativas de CPR nem validaram
- matematicamente o experimento: as estimativas resultaram da regressão linear e dos baselines
- documentados em 2.5.10. Não há registro de experimento específico de simulação agêntica na
- solução analítica. As ferramentas não geraram respostas de P1 nem substituíram entrevistas; os
- registros originais das quatro aplicações com P1 foram preservados.

- ### 2.5.12 Implementar, testar, validar e ajustar

+ Arquitetura, metodologia, escolha dos modelos, interpretação dos resultados, aprovação das
+ alterações, decisões sobre feedbacks, validação comunitária e conclusões permaneceram sob
+ responsabilidade humana. Os agentes não produziram as estimativas de CPR nem validaram
+ matematicamente o experimento: as estimativas resultaram da regressão linear e dos baselines
+ documentados em 2.5.9. Não há registro de experimento específico de simulação agêntica na
+ solução analítica. As ferramentas não geraram respostas de P1 nem substituíram entrevistas; os
+ registros originais das quatro aplicações com P1 foram preservados.

+ ### 2.5.11 Implementar, testar, validar e ajustar

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-010 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-011`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-011 -->
<details>
<summary>ALT-011 — SAI / ENTRA (recortes literais)</summary>

```diff
- O projeto implementa uma aplicação web acadêmica independente do ambiente operacional. A aplicação lê dados sintéticos armazenados
+ O protótipo implementado lê arquivos sintéticos locais e apresenta indicadores determinísticos em uma interface Next.js/TypeScript
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-011).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-011 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-011 -->
<a id="comparacao-alt-011"></a>

**ALT-011 — 3.1.2 Estratégia incremental e arquitetura da solução**

```diff
- O projeto implementa uma aplicação web acadêmica independente do ambiente operacional. A
- aplicação lê dados sintéticos armazenados em arquivos, verifica sua estrutura e calcula os
- indicadores por regras fixas. A interface foi construída com Next.js/TypeScript. Um controle
- central de acesso aos módulos (*feature gate*) mantém V1 restrita à Fase 1 e libera as Fases 1 e
- 2 em V2/V3. Os experimentos de CPR são executados separadamente pela CLI; seus arquivos de
- resultados são apresentados em Google Ads na V2 e na V3, sem treinamento no navegador. Não há
- integração operacional com contas de anúncios, CRM, sistema acadêmico ou base real da instituição.

- ```text
- dados fictícios controlados, armazenados em arquivos
-         ↓
- verificação da estrutura e cálculo dos indicadores
-         ↓
- controle de acesso aos módulos (feature gate)
-         ↓
- interface: V1 (Fase 1) | V2 (Fases 1 e 2) | V3 (Fases 1 e 2, com feedbacks)

- experimento separado de CPR → arquivo de resultados reproduzível
-                                  ↓
-                   apresentação em Google Ads na V2 e V3
- ```

+ O protótipo implementado lê arquivos sintéticos locais e apresenta indicadores determinísticos em uma interface Next.js/TypeScript. Os controles de habilitação (*feature gates*) restringem a V1 à Fase 1 e V2/V3 às Fases 1 e 2; a V4 reúne as quatro fases especificadas. Os artefatos reproduzíveis de CPR, produzidos separadamente pela CLI, são apresentados em Google Ads nas composições V2–V4, sem treinamento no navegador. O Fluxograma 1 distingue esse experimento do fluxo comum de indicadores. A solução não se conecta a contas reais de anúncios, CRM, sistema acadêmico ou base operacional da instituição.

+ Fluxograma 1 – Arquitetura analítica do protótipo acadêmico

+ ![Fluxo determinístico com dados sintéticos locais, verificação, indicadores, gates e interfaces V1–V4; experimento separado de CPR pela CLI, com artefatos apresentados em Google Ads V2–V4.](figuras/fluxograma-arquitetura-v2.svg)

+ Fonte: Elaborado pelo grupo (2026), com base nos contratos locais de dados, nas rotinas de indicadores, nos controles de habilitação por versão e nos artefatos dos experimentos de CPR.

```

<a id="registro-alt-027"></a>

**ALT-027 — Novos arquivos do fluxograma.** Criados `docs/relatorio/figuras/fluxograma-arquitetura-v2.svg` e `docs/relatorio/figuras/fluxograma-arquitetura-v2.png`. A referência Markdown e a legenda novas estão integralmente no diff de ALT-011; o diagrama ASCII anterior também. Não havia caminho de imagem anterior para esse diagrama. Nenhum conteúdo binário é transcrito.

<!-- RASTREABILIDADE-VISUAL:FIM ALT-011 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-012`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-012 -->
<details>
<summary>ALT-012 — SAI / ENTRA (recortes literais)</summary>

```diff
- Figura 1 – Indicadores e filtros da Captação na V1
+ Figura 1 – Indicadores e filtros da Captação na V1[^nota-v1]
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-012).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-012 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-012 -->
<a id="comparacao-alt-012"></a>

**ALT-012 — 3.1.3 Módulo de Captação**

```diff
- Figura 1 – Indicadores e filtros da Captação na V1

- ![Interface de Captação da V1 com filtros, indicadores e funil sintético.](figuras/fig-v1-captacao.png)

+ Figura 1 – Indicadores e filtros da Captação na V1[^nota-v1]

+ ![Interface de Captação da V1 com filtros, indicadores e funil sintético.](figuras/fig-v1-captacao.png)

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-012 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-013`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-013 -->
<details>
<summary>ALT-013 — SAI / ENTRA (recortes literais)</summary>

```diff
- Nota: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo legado “PIJ410 — Projeto Integ
+ [^nota-v1]: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo legado “PIJ410 — Projeto
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-013).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-013 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-013 -->
<a id="comparacao-alt-013"></a>

**ALT-013 — 3.1.3 Módulo de Captação**

```diff
- Nota: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo
- legado “PIJ410 — Projeto Integrador em Computação III”. O componente correto deste trabalho é
- PJI410 — Projeto Integrador em Computação IV.

+ [^nota-v1]: as figuras da V1 preservam as capturas da interface apresentada a P1, inclusive o rótulo legado “PIJ410 — Projeto Integrador em Computação III”. O componente correto deste trabalho é PJI410 — Projeto Integrador em Computação IV.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-013 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-014`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-014 -->
<details>
<summary>ALT-014 — SAI / ENTRA (recortes literais)</summary>

```diff
- -calendário fictício e campanha e série mensal de CPR. CPR = investimento / conversões registradas; não significa custo por matrícula ou lead único e não demonstra atribuição causa
+ -calendário fictício e campanha e série mensal de CPR. $\mathit{CPR} = \frac{\text{investimento}}{\text{conversões registradas}}$; não significa custo por matrícula ou lead único e
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-014).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-014 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-014 -->
<a id="comparacao-alt-014"></a>

**ALT-014 — 3.1.5 Módulos de Ads**

```diff
- A V2 disponibiliza localmente Visão Geral Ads, Google Ads, Meta Ads e Estratégia, todos com dados
- sintéticos. Não há integração com Google Ads API, Meta API ou CRM. Google Ads apresenta
- investimento, impressões, cliques, conversões registradas, CTR, CPC, CPM e CPR, com filtros de
- ano-calendário fictício e campanha e série mensal de CPR. CPR = investimento / conversões
- registradas; não significa custo por matrícula ou lead único e não demonstra atribuição causal.
- A granularidade é mensal, sem filtros diários artificiais.

+ A V2 disponibiliza localmente Visão Geral Ads, Google Ads, Meta Ads e Estratégia, todos com dados
+ sintéticos. Não há integração com Google Ads API, Meta API ou CRM. Google Ads apresenta
+ investimento, impressões, cliques, conversões registradas, CTR, CPC, CPM e CPR, com filtros de
+ ano-calendário fictício e campanha e série mensal de CPR. $\mathit{CPR} = \frac{\text{investimento}}{\text{conversões registradas}}$; não significa custo por matrícula ou lead único e não demonstra atribuição causal.
+ A granularidade é mensal, sem filtros diários artificiais.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-014 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-015`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-015 -->
<details>
<summary>ALT-015 — SAI / ENTRA (recortes literais)</summary>

```diff
- Os dois experimentos de CPR descritos em 2.5.10 foram executados e seus resultados puderam ser reproduzidos. No experimento inicial, a regressão teve erros menores que a
+ Os dois experimentos de CPR descritos em 2.5.9 foram executados e seus resultados puderam ser reproduzidos. No experimento inicial, a regressão teve erros menores que a r
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-015).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-015 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-015 -->
<a id="comparacao-alt-015"></a>

**ALT-015 — 3.1.6 Experimento de aprendizagem de máquina para CPR**

```diff
- Os dois experimentos de CPR descritos em 2.5.10 foram executados e seus resultados puderam ser
- reproduzidos. No experimento inicial, a regressão teve erros menores que a regra simples. No
- teste principal da extensão sazonal, porém, não superou a melhor regra de referência. Assim, o
- conjunto dos resultados não sustenta o uso do modelo para orientar investimentos reais.

- O treinamento ocorre por linha de comando, separado da interface. Google Ads apresenta os
- arquivos de resultados, independentemente dos filtros de consulta. A variável prevista é
- CPR = investimento / conversões registradas, não custo por matrícula ou lead único. A aplicação
- não treina o modelo no navegador nem utiliza dados operacionais ou APIs reais.

+ Os dois experimentos de CPR descritos em 2.5.9 foram executados e seus resultados puderam ser
+ reproduzidos. No experimento inicial, a regressão teve erros menores que a regra simples. No
+ teste principal da extensão sazonal, porém, não superou a melhor regra de referência. Assim, o
+ conjunto dos resultados não sustenta o uso do modelo para orientar investimentos reais.

+ Os artefatos do experimento estão disponíveis na interface Google Ads, independentemente dos filtros de consulta. O resultado previsto é o CPR, definido em 3.1.5; seu significado permanece distinto de custo por matrícula ou lead único. O protocolo de execução separado da interface está em 2.5.9.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-015 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-016`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-016 -->
<details>
<summary>ALT-016 — SAI / ENTRA (recortes literais)</summary>

```diff
- #### Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3  O experimento sazonal separado foi executado e
+ #### 3.1.6.1 Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4  A execução sazonal reproduziu
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-016).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-016 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-016 -->
<a id="comparacao-alt-016"></a>

**ALT-016 — Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3**

```diff
- #### Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3

- O experimento sazonal separado foi executado e reproduzido sobre o conjunto de dados sintéticos
- de janeiro/2017 a janeiro/2023. O CPR mensal é calculado como soma
- do investimento dividida pela soma das conversões registradas, quando a cobertura mensal é válida;
- 71 dos 73 meses do calendário têm CPR consolidado válido. O modelo OLS usa seno e cosseno do mês,
- índice temporal e CPR de t−2 e t−12 como entradas. Pela hipótese sintética de maturação de 14
- dias, t−1 não estava disponível. O teste principal reservou os 12 meses de 2022 e produziu:

+ #### 3.1.6.1 Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3 e na V4

+ A execução sazonal reproduziu os resultados do cenário de janeiro/2017 a janeiro/2023: 71 dos 73 meses têm CPR consolidado válido. No teste principal, reservado aos 12 meses de 2022 segundo o protocolo de 2.5.9, foram obtidos os seguintes resultados:

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-016 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-017`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-017 -->
<details>
<summary>ALT-017 — SAI / ENTRA (recortes literais)</summary>

```diff
- o, acrescido da explicitação dos limites (FB-V2-P1-007). As maiores projeções são para dezembro/2023 e fevereiro/2023; as menores, para maio e julho/2023. Os valores são estimativa
+ o, acrescido da explicitação dos limites (FB-V2-P1-007); a V4 reutiliza essa apresentação. As maiores projeções são para dezembro/2023 e fevereiro/2023; as menores, para maio e jul
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-017).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-017 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-017 -->
<a id="comparacao-alt-017"></a>

**ALT-017 — Previsão sazonal mensal — extensão técnica introduzida na V2 e mantida na V3**

```diff
- A V2 apresenta histórico sintético e projeção experimental recursiva de fevereiro/2023 a
- janeiro/2024, além do índice sazonal e da comparação dos métodos. A V3 exibe o mesmo artefato,
- sem alterar valores ou algoritmo, acrescido da explicitação dos limites (FB-V2-P1-007). As maiores
- projeções são para
- dezembro/2023 e fevereiro/2023; as menores, para maio e julho/2023. Os valores são estimativas do
- cenário, não resultados futuros observados. Valores extremos e lags previstos podem se propagar
- pela recursão. Essa extensão teve origem técnica/acadêmica, não comunitária; a alteração comunitária
- FB-V1-P1-001 refere-se somente ao gráfico consolidado de Captação.

+ A V2 apresenta histórico sintético e projeção experimental recursiva de fevereiro/2023 a
+ janeiro/2024, além do índice sazonal e da comparação dos métodos. A V3 exibe o mesmo artefato,
+ sem alterar valores ou algoritmo, acrescido da explicitação dos limites (FB-V2-P1-007); a V4 reutiliza essa apresentação. As maiores
+ projeções são para
+ dezembro/2023 e fevereiro/2023; as menores, para maio e julho/2023. Os valores são estimativas do
+ cenário, não resultados futuros observados. Valores extremos e lags previstos podem se propagar
+ pela recursão. Essa extensão teve origem técnica/acadêmica, não comunitária; a alteração comunitária
+ FB-V1-P1-001 refere-se somente ao gráfico consolidado de Captação.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-017 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-018`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-018 -->
<details>
<summary>ALT-018 — SAI / ENTRA (recortes literais)</summary>

```diff
- procedimento e os registros de execução estão em 2.5.11 e `docs/run_log.md`. As saídas passaram por inspeção e decisão humana; não houve avaliação independente da eficácia dos age
+ procedimento e os registros de execução estão em 2.5.10 e `docs/run_log.md`. As saídas passaram por inspeção e decisão humana; não houve avaliação independente da eficácia dos age
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-018).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-018 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-018 -->
<a id="comparacao-alt-018"></a>

**ALT-018 — 3.1.7 Uso assistivo de IA agêntica**

```diff
- Em paralelo ao desenvolvimento da interface e aos experimentos de CPR, o grupo utilizou agentes
- como apoio à programação, auditoria do repositório, revisão documental,
- análise de consistência e verificação de testes e artefatos de CPR. O procedimento e os registros
- de execução estão em 2.5.11 e `docs/run_log.md`. As saídas passaram por inspeção e decisão
- humana; não houve avaliação independente da eficácia dos agentes nem simulação agêntica
- específica documentada na solução analítica.

+ Em paralelo ao desenvolvimento da interface e aos experimentos de CPR, o grupo utilizou agentes
+ como apoio à programação, auditoria do repositório, revisão documental,
+ análise de consistência e verificação de testes e artefatos de CPR. O procedimento e os registros
+ de execução estão em 2.5.10 e `docs/run_log.md`. As saídas passaram por inspeção e decisão
+ humana; não houve avaliação independente da eficácia dos agentes nem simulação agêntica
+ específica documentada na solução analítica.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-018 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-019`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-019 -->
<details>
<summary>ALT-019 — SAI / ENTRA (recortes literais)</summary>

```diff
- Em Conteúdo Orgânico, doze Reels fictícios têm mês, alcance e interações. A taxa de interação divide interações por alcance.
+ As entregas incluem Reels orgânicos, plano fictício de vagas, documentação da arquitetura, rankings de anúncios e palavras-ch
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-019).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-019 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-019 -->
<a id="comparacao-alt-019"></a>

**ALT-019 — 3.1.8 V4 e conclusão do escopo especificado das quatro fases**

Deslocamento: os cinco parágrafos detalhados saem de 3.1.8 e são recebidos em 3.2.6 (ALT-021–ALT-025), junto às Figuras 14–18.

```diff
- Em Conteúdo Orgânico, doze Reels fictícios têm mês, alcance e interações. A taxa de interação
- divide interações por alcance. O score demonstrativo combina 70% da taxa normalizada e 30% do
- alcance normalizado, segundo referências acadêmicas declaradas, e produz ranking com desempate
- determinístico. Ausência de medição impede a classificação, enquanto zero interações observado
- permanece um valor válido. A Figura 14 mostra a apresentação desse cenário; seu score não é
- utilizado para ordenar anúncios pagos.

- Em Objetivo da Gestão, o plano fictício calcula vagas alvo a partir de vagas hipotéticas e
- taxas alvo por turma. Ele demonstra uma premissa de ocupação e não representa matrícula
- observada, previsão institucional ou plano aprovado pela parceira (Figura 15). A página
- Arquitetura & Algoritmos documenta na interface as fontes locais, as regras de cálculo,
- as verificações e os limites de interpretação da solução.

- Na segunda iteração técnica da V4, o Meta Ads passou a mostrar os cinco criativos fictícios
- do mês associados ao indicador **conversa**, ordenados pelo menor CPR válido. Para cada
- anúncio, CPR Meta = investimento ÷ conversas; sem conversas, o valor fica indisponível.
- Interações são outro indicador e não entram nesse denominador. O ranking de anúncios pagos
- da Figura 16 não utiliza o score de Reels orgânicos.

- No Google Ads, o ranking mensal compara palavras-chave fictícias por custo, cliques,
- conversões registradas e CPR (Figura 17). CPR Google = custo ÷ conversões registradas no
- Google Ads; conversão zero ou ausente torna o CPR indisponível. Essas conversões não equivalem
- a matrículas, leads únicos ou pessoas identificadas. Os registros granulares de ambos os
- rankings são partições determinísticas das linhas mensais fechadas da base sintética;
- preservam os totais de origem quando aplicável, sem acesso a APIs ou dados operacionais.

- Em Estratégia, um gráfico complementar apresenta as séries mensais descritivas de CPR Google
- por conversão registrada e CPR Meta por conversa (Figura 18). Os denominadores têm sentidos
- diferentes: não há CPR agregado Google+Meta, atribuição causal de matrículas aos canais nem
- mistura com a previsão experimental de CPR Google. O protótipo não contém dados pessoais,
- integração com plataformas reais ou dados institucionais operacionais. As Figuras 14 a 18,
- apresentadas após a rastreabilidade da seção 3.2, documentam essas funcionalidades técnicas;
- não representam resultados produzidos pela avaliação de P1.

+ As entregas incluem Reels orgânicos, plano fictício de vagas, documentação da arquitetura, rankings de anúncios e palavras-chave e séries descritivas de CPR por canal. A seção 3.2.6 reúne a descrição e as capturas dessas funcionalidades após as evidências históricas V1–V3, preservando sua origem técnica e distinguindo-as dos ajustes solicitados por P1.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-019 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-020`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-020 -->
<details>
<summary>ALT-020 — SAI / ENTRA (recortes literais)</summary>

```diff
- nálise dos feedbacks estão identificados na seção 2.5.12.
+ nálise dos feedbacks estão identificados na seção 2.5.11.
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-020).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-020 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-020 -->
<a id="comparacao-alt-020"></a>

**ALT-020 — Terceiro momento — avaliação ampliada da V2**

```diff
- **Efeito no desenvolvimento:** os sete feedbacks da terceira avaliação foram analisados pelo
- grupo e incorporados à V3. A implementação passou por verificação técnica, descrita em 3.3;
- P1 não avaliou a V3. A aplicação seguinte ocorreu depois da evolução técnica que produziu a
- V4. As falas anteriores citadas constam dos registros primários
- `docs/validacao/respostas/v1-p1.md`, `docs/validacao/respostas/v2-p1-reavaliacao.md` e
- `docs/validacao/respostas/v2-p1-para-v3.md`; o instrumento e a análise dos feedbacks estão
- identificados na seção 2.5.12.

+ **Efeito no desenvolvimento:** os sete feedbacks da terceira avaliação foram analisados pelo
+ grupo e incorporados à V3. A implementação passou por verificação técnica, descrita em 3.3;
+ P1 não avaliou a V3. A aplicação seguinte ocorreu depois da evolução técnica que produziu a
+ V4. As falas anteriores citadas constam dos registros primários
+ `docs/validacao/respostas/v1-p1.md`, `docs/validacao/respostas/v2-p1-reavaliacao.md` e
+ `docs/validacao/respostas/v2-p1-para-v3.md`; o instrumento e a análise dos feedbacks estão
+ identificados na seção 2.5.11.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-020 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-021`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-021 -->
<details>
<summary>ALT-021 — SAI / ENTRA (recortes literais)</summary>

```diff
- As cinco capturas seguintes registram a interface técnica da V4 já implementada. Sua posição após a tabela mantém a sequência
+ ### 3.2.6 Evidências da evolução técnica da V4  As funcionalidades a seguir resultaram da evolução técnica e acadêmica do gru
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-021).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-021 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-021 -->
<a id="comparacao-alt-021"></a>

**ALT-021 — 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)**

Deslocamento: conteúdo recebido em 3.2.6, proveniente de 3.1.8 da V1 (retirada integral em ALT-019).

```diff
- As cinco capturas seguintes registram a interface técnica da V4 já implementada. Sua posição
- após a tabela mantém a sequência das figuras históricas; as imagens não são evidência de
- desempenho institucional nem resultado produzido pela avaliação de P1.

+ ### 3.2.6 Evidências da evolução técnica da V4

+ As funcionalidades a seguir resultaram da evolução técnica e acadêmica do grupo, sem questionário entre V3 e V4. As capturas registram a V4 já implementada; não são resultados produzidos pela quarta avaliação nem evidência de desempenho institucional.

+ Em Conteúdo Orgânico, doze Reels fictícios têm mês, alcance e interações. A taxa de interação
+ divide interações por alcance. O score demonstrativo combina 70% da taxa normalizada e 30% do
+ alcance normalizado, segundo referências acadêmicas declaradas, e produz ranking com desempate
+ determinístico. Ausência de medição impede a classificação, enquanto zero interações observado
+ permanece um valor válido. A Figura 14 mostra a apresentação desse cenário; seu score não é
+ utilizado para ordenar anúncios pagos.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-021 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-022`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-022 -->
<details>
<summary>ALT-022 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Em Objetivo da Gestão, o plano fictício calcula vagas alvo a partir de vagas hipotéticas e taxas alvo por turma. Ele demonstra uma premissa de ocupação e não representa matrícula observada, previsão institucional ou plano aprovado
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-022).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-022 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-022 -->
<a id="comparacao-alt-022"></a>

**ALT-022 — 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)**

Deslocamento: conteúdo recebido em 3.2.6, proveniente de 3.1.8 da V1 (retirada integral em ALT-019).

```diff
+ Em Objetivo da Gestão, o plano fictício calcula vagas alvo a partir de vagas hipotéticas e
+ taxas alvo por turma. Ele demonstra uma premissa de ocupação e não representa matrícula
+ observada, previsão institucional ou plano aprovado pela parceira (Figura 15). A página
+ Arquitetura & Algoritmos documenta na interface as fontes locais, as regras de cálculo,
+ as verificações e os limites de interpretação da solução.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-022 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-023`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-023 -->
<details>
<summary>ALT-023 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Na segunda iteração técnica da V4, o Meta Ads passou a mostrar os cinco criativos fictícios do mês associados ao indicador **conversa**, ordenados pelo menor CPR válido. Para cada anúncio, $\mathit{CPR}_{\mathrm{Meta}} = \frac{\te
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-023).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-023 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-023 -->
<a id="comparacao-alt-023"></a>

**ALT-023 — 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)**

Deslocamento: conteúdo recebido em 3.2.6, proveniente de 3.1.8 da V1 (retirada integral em ALT-019).

```diff
+ Na segunda iteração técnica da V4, o Meta Ads passou a mostrar os cinco criativos fictícios
+ do mês associados ao indicador **conversa**, ordenados pelo menor CPR válido. Para cada
+ anúncio, $\mathit{CPR}_{\mathrm{Meta}} = \frac{\text{investimento}}{\text{conversas}}$; sem conversas, o valor fica indisponível.
+ Interações são outro indicador e não entram nesse denominador. O ranking de anúncios pagos
+ da Figura 16 não utiliza o score de Reels orgânicos.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-023 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-024`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-024 -->
<details>
<summary>ALT-024 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ No Google Ads, o ranking mensal compara palavras-chave fictícias por custo, cliques, conversões registradas e CPR (Figura 17). $\mathit{CPR}_{\mathrm{Google}} = \frac{\text{custo}}{\text{conversões registradas no Google Ads}}$; co
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-024).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-024 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-024 -->
<a id="comparacao-alt-024"></a>

**ALT-024 — 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)**

Deslocamento: conteúdo recebido em 3.2.6, proveniente de 3.1.8 da V1 (retirada integral em ALT-019).

```diff
+ No Google Ads, o ranking mensal compara palavras-chave fictícias por custo, cliques,
+ conversões registradas e CPR (Figura 17). $\mathit{CPR}_{\mathrm{Google}} = \frac{\text{custo}}{\text{conversões registradas no Google Ads}}$; conversão zero ou ausente torna o CPR indisponível. Essas conversões não equivalem
+ a matrículas, leads únicos ou pessoas identificadas. Os registros granulares de ambos os
+ rankings são partições determinísticas das linhas mensais fechadas da base sintética;
+ preservam os totais de origem quando aplicável, sem acesso a APIs ou dados operacionais.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-024 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-025`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-025 -->
<details>
<summary>ALT-025 — SAI / ENTRA (recortes literais)</summary>

```diff
- ∅
+ Em Estratégia, um gráfico complementar apresenta as séries mensais descritivas de CPR Google por conversão registrada e CPR Meta por conversa (Figura 18). Os denominadores têm sentidos diferentes: não há CPR agregado Google+Meta,
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-025).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-025 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-025 -->
<a id="comparacao-alt-025"></a>

**ALT-025 — 3.2.6 Evidências da evolução técnica da V4 (origem: 3.1.8)**

Deslocamento: conteúdo recebido em 3.2.6, proveniente de 3.1.8 da V1 (retirada integral em ALT-019).

```diff
+ Em Estratégia, um gráfico complementar apresenta as séries mensais descritivas de CPR Google
+ por conversão registrada e CPR Meta por conversa (Figura 18). Os denominadores têm sentidos
+ diferentes: não há CPR agregado Google+Meta, atribuição causal de matrículas aos canais nem
+ mistura com a previsão experimental de CPR Google. O protótipo não contém dados pessoais,
+ integração com plataformas reais ou dados institucionais operacionais. As Figuras 14 a 18 documentam essas funcionalidades técnicas;
+ não representam resultados produzidos pela avaliação de P1.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-025 -->

")
`````

Arquivo: `docs/relatorio/Relatorio_Final_V2.md`; segmento `ALT-026`.

`````text
(SAI: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-026 -->
<details>
<summary>ALT-026 — SAI / ENTRA (recortes literais)</summary>

```diff
- O projeto demonstrou, no protótipo acadêmico, que é possível organizar os conjuntos de dados definidos para o estudo, calcular indicado
+ O projeto alcançou a solução acadêmica pretendida para organizar e apresentar informações de mídia digital: a V4 reúne o escopo especif
```

Recortes de contexto; ∅ indica ausência no local. [Par SAI/ENTRA integral](CONTROLE_ALTERACOES_RELATORIO.md#alt-026).

</details>
<!-- RASTREABILIDADE-VISUAL:FIM ALT-026 -->

" | ENTRA: "<!-- RASTREABILIDADE-VISUAL:INICIO ALT-026 -->
<a id="comparacao-alt-026"></a>

**ALT-026 — 4 CONSIDERAÇÕES FINAIS**

```diff
- O projeto demonstrou, no protótipo acadêmico, que é possível organizar os conjuntos de dados
- definidos para o estudo, calcular indicadores rastreáveis e apresentar recortes temporais e
- comparações para apoiar a interpretação de investimentos em mídia digital. Isso responde à
- pergunta central quanto à organização e à apresentação das informações. Os indicadores oferecem
- elementos para análise, sem substituir a decisão dos responsáveis.

- A V1 apresentou Captação e Matrículas com cálculos determinísticos. P1, gerente de Marketing,
- avaliou-a presencialmente em 07/10/2026, com TCLE obtido, e apontou a dispersão dos gráficos
- temporais. O grupo aprovou FB-V1-P1-001 e reuniu as séries na V2. Na reavaliação presencial da
- mesma data, ela relatou comparação facilitada, sem nova dificuldade ou pedido de alteração naquele
- momento. Esse retorno encerrou o primeiro ciclo com P1 e manteve a V2. A versão também acrescentou
- Visão Geral de Ads, Google Ads, Meta Ads, Estratégia e a apresentação acadêmica do CPR por
- evolução técnica independente desse feedback.

- Na terceira aplicação, P1 avaliou a V2 de forma ampliada, solicitou sete grupos de ajustes e
- classificou a versão como necessitando alterações importantes. O grupo analisou os feedbacks,
- decidiu incorporá-los e implementou a V3: apresentação mensal, composição de matrículas por
- série, efetivação de visitas, comparações temporais e comunicação mais clara dos limites da
- previsão. P1 não avaliou a V3. Em seguida, por evolução técnica/acadêmica **sem nova aplicação
- comunitária entre as versões**, o grupo implementou a V4 com o escopo especificado das quatro
- fases, rankings sintéticos de Ads e CPR temporal por canal. A quarta avaliação ocorreu depois
- dessa implementação: P1 atribuiu 5/5 às oito questões fechadas, escolheu A e não solicitou
- alteração relevante. A V4 foi mantida, sem abertura de V5. Os quatro momentos atendem ao
- objetivo de avaliar o protótipo com uma profissional e incorporar contribuições viáveis, dentro
- do limite de uma única participante; não equivalem a validação externa ampla.

- Os experimentos de CPR delimitam o alcance da solução. No experimento inicial, a
- regressão apresentou erros menores que a persistência t−2. No período de teste principal do
- experimento sazonal, superou a referência t−12, mas não a persistência t−2, e obteve R²
- negativo. Esse resultado é um achado válido: o experimento foi executado e reproduzido com
- controle da informação disponível no momento da previsão, mas não demonstrou desempenho
- preditivo suficiente para uso operacional ou recomendação automática de investimento. Testes
- automatizados, verificações de não vazamento e reprodução dos arquivos de resultados sustentam
- o funcionamento técnico descrito. As práticas de IA agêntica apoiaram construção, análise e
- verificação sob revisão humana; não houve avaliação de sua eficácia nem simulação agêntica
- específica via linha de comando.

- A contribuição do estudo inclui a distinção entre ausência de dado e valor zero, a separação
- entre indicadores calculados e previsões experimentais e a rastreabilidade das alterações.
- Dados sintéticos independentes, uma única participante, séries agregadas sem rastreamento
- individual ou inferência causal, ausência de integrações operacionais e desempenho preditivo
- limitado impedem generalizar as percepções de P1 ou afirmar melhoria real de decisões de
- orçamento, redução de custos, aumento de matrículas ou impacto institucional. A fala de Q12
- sobre comparação anual permanece relato da participante, sem verificação institucional ou
- inferência causal. As quatro fases foram implementadas na V4 dentro do escopo documental;
- nenhum uso operacional real foi demonstrado.

- Avaliações futuras com outros profissionais poderão ampliar a compreensão de uso da V4, sem
- pressupor uma nova versão. O exame de dados reais dependerá de autorização e anonimização;
- integrações operacionais exigirão requisitos próprios de segurança. Séries mais amplas e
- outros modelos dependerão de dados suficientes e de qualidade. O CPR experimental permanece
- limitado e separado dos indicadores descritivos da V4.

+ O projeto alcançou a solução acadêmica pretendida para organizar e apresentar informações de mídia digital: a V4 reúne o escopo especificado das quatro fases, com indicadores rastreáveis, filtros e comparações temporais. A expectativa de apoiar a interpretação foi atendida no protótipo e na percepção de P1; a expectativa de subsidiar a distribuição real do orçamento permanece apenas parcialmente atendida, pois não houve integração operacional nem demonstração de decisões reais de investimento.

+ Os três primeiros objetivos específicos foram concretizados pela organização de dados sintéticos de Captação, Matrículas e Ads, pelos indicadores comparáveis nos recortes compatíveis e pela interface web V1–V4. Isso demonstra a estrutura analítica e sua apresentação, sem equivaler à consolidação dos registros institucionais dispersos. A contribuição acadêmica inclui distinguir ausência de dado de valor zero, preservar fórmulas e denominadores e separar indicadores descritivos de previsões experimentais.

+ O quarto objetivo foi atendido pela execução e reprodução dos experimentos de CPR, mesmo com desempenho limitado. A regressão inicial teve erros menores que a persistência t−2; no teste principal sazonal, superou t−12, mas não t−2, e apresentou R² negativo. O resultado não sustenta recomendação de investimento. Testes automatizados, verificações de não vazamento e reprodução dos artefatos sustentam a execução técnica. Quanto ao quinto objetivo, as práticas de IA agêntica apoiaram construção, análise e verificação sob supervisão humana; não houve avaliação independente de sua eficácia nem simulação agêntica específica via linha de comando.

+ O sexto objetivo foi atendido pelas quatro aplicações com a mesma profissional e pela incorporação de contribuições viáveis. A primeira avaliação da V1 motivou a consolidação temporal na V2, cuja utilidade percebida foi confirmada na segunda; Ads e CPR entraram por evolução técnica independente. A terceira aplicação ampliada à V2 indicou necessidade de alterações importantes e originou sete feedbacks incorporados à V3. P1 não avaliou a V3. A evolução técnica/acadêmica seguinte produziu a V4 sem questionário intermediário; somente depois P1 atribuiu oito notas 5/5, escolheu A e não solicitou alteração relevante, mantendo-se a V4 sem abertura de V5.

+ As avaliações trouxeram uma perspectiva concreta de uso: reunir séries relacionadas, apresentar resumos mensais e explicitar os limites da previsão foi mais relevante para P1 do que apenas ampliar indicadores. A contribuição da interface para essa usuária está na comparação facilitada relatada após o ajuste temporal e na utilidade percebida na quarta aplicação. Para a comunidade participante, o trabalho ofereceu um protótipo discutido a partir de suas necessidades e permitiu que sugestões orientassem mudanças rastreáveis; não demonstrou benefício institucional mensurável.

+ A aplicabilidade demonstrada ficou restrita à exploração acadêmica com dados fictícios. A ausência de integração e de registros operacionais no escopo impediu verificar redução de custos, aumento de matrículas ou melhoria de decisões reais. Uma participante não permite generalização estatística; as quatro aplicações não são amostras independentes nem comparação controlada. Séries sintéticas agregadas não rastreiam pessoas nem estabelecem atribuição causal, e o desempenho limitado do CPR impede tratá-lo como previsão operacional. A fala de P1 sobre melhora comparativa anual permanece relato profissional, sem verificação ou atribuição à plataforma.

+ O aprendizado central foi que organização, clareza e limites explícitos precisam acompanhar a expansão funcional. Avaliações futuras com outros profissionais poderão examinar a V4 sem pressupor nova versão. O uso de dados reais dependerá de autorização e anonimização; integrações exigirão requisitos próprios de segurança, e novos modelos dependerão de séries suficientes e de qualidade. O CPR experimental permanece separado dos indicadores descritivos.

```

<!-- RASTREABILIDADE-VISUAL:FIM ALT-026 -->

")
`````

Arquivo: `docs/relatorio/REVISAO_V1_PARA_V2.md`; adição ao final.

`````text
(SAI: ∅ | ENTRA: "

## Comparações integrais e abertas — ALT-030 — 25/10/2026

Substituída a camada ALT-029: 26 blocos recolhíveis removidos e 26 comparações diff integrais visíveis, junto aos trechos correspondentes. Mapa mantido com 20 seções e destinos internos explícitos. ALT-001–ALT-026 conferidos literalmente com V1 e V2 limpa; ALT-012 inclui também o caminho real da Figura 1, sem mudança desse caminho. ALT-027 é criação de arquivos; ALT-028 é execução; ALT-029 é a camada editorial anterior. Não foram criadas substituições científicas fictícias para esses registros.

Verificação automatizada: retirar somente a camada visual antes e depois produz texto científico idêntico, inclusive quebras de linha. Cada lado de cada diff foi reconstituído e comparado integralmente com sua fonte. Hash SHA-256 da V1 antes e depois: `3af4147e3deb97ad00d55d44b79ab53fcfa4e0fe0b837fb01f2a820213f1276c`. Links internos e cercas Markdown conferidos; cores não inspecionadas em Preview renderizado. Para Word/Google Docs, remover somente os segmentos editoriais delimitados, incluindo o mapa, preservando todo o corpo científico externo aos marcadores.
")
`````

Arquivo: `docs/run_log.md`; adição ao final.

`````text
(SAI: ∅ | ENTRA: "

## 2026-10-25 — ALT-030: comparações integrais da V2

Por ordem explícita do responsável, substituída a camada visual ALT-029 por 26 comparações diff abertas com textos integrais SAI/ENTRA, preservando 20 seções no mapa e removendo 26 blocos recolhíveis. Conferidos ALT-001–ALT-029; registros históricos preservados. Verificação automatizada confirmou identidade exata do conteúdo científico antes/depois da remoção exclusiva da camada visual, pares integrais contra as fontes, destinos internos existentes e V1 com SHA-256 `3af4147e3deb97ad00d55d44b79ab53fcfa4e0fe0b837fb01f2a820213f1276c` antes/depois. Sintaxe diff verificada; cores não inspecionadas em Preview renderizado. Somente os quatro arquivos documentais autorizados foram atualizados. Sem commit ou push.
")
`````
