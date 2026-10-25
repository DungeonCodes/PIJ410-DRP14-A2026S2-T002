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
