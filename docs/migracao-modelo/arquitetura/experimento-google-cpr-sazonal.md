# Experimento acadêmico: previsão sazonal mensal do CPR

Data: 06/10/2026. Origem: **DEMANDA TÉCNICA/ACADÊMICA DE DEMONSTRAÇÃO DE ML**.
Autorização explícita desta rodada, separada de feedback comunitário. Não substitui o experimento
por campanha da ADR-007; comandos, dataset e artefato anteriores permanecem reproduzíveis.

## Pergunta e não objetivos

Uma regressão temporal com calendário cíclico, tendência e CPR histórico supera reutilizar o
CPR do mesmo mês do ano anterior na previsão recursiva de 12 meses de um cenário sintético?
O target é CPR, não crescimento obrigatório, orçamento ideal, investimento, matrícula, lead
único, ROI, receita ou eficácia institucional. Não há atribuição causal ou decisão automática.

## Auditoria do dataset acadêmico existente

Fonte única: `src/data/ads-sintetico.json`, campo `google`. Não foi acessado repositório
operacional, internet ou API. Não foram gerados novos valores de origem.

| Campo | Resultado |
|---|---|
| Linhas Google | 292 |
| Período | 2017-01-01 a 2023-01-01 |
| Anos automaticamente detectados | 2017, 2018, 2019, 2020, 2021, 2022, 2023 |
| Granularidade de origem | Campanha × mês-calendário |
| Campanhas | Cenario-A, Cenario-B, Cenario-C, Cenario-D |
| Categoria | Pesquisa |
| CPR individual fechado e definido | 284 observações |
| Meses no calendário | 73 |
| CPR mensal consolidado válido | 71 |
| Meses totalmente ausentes / duplicidades campanha-mês | 0 / 0 |
| Cobertura ausente | Cenario-D em novembro/2018 |
| Provisório | As quatro campanhas em janeiro/2023 |
| Zero conversões individual | Cenario-C em outubro/2017, maio/2020 e dezembro/2022 |
| Seed existente | pij410-ads-cenario-independente-1 |

## Agregação e ausência

CPR mensal = soma(investimento) / soma(conversões registradas no Google Ads).
Não se calcula média simples dos CPRs por campanha. Os gastos de campanha com zero conversões
**continuam no numerador**; o total é válido se cobertura integral e denominador agregado positivo.
Assim, dezembro/2022 é válido e possui CPR elevado, apesar do zero numa campanha.

Cobertura incompleta, mês provisório, campanha ausente ou denominador agregado inválido
produzem `null`, não zero. Novembro/2018 e janeiro/2023 não entram como CPR observado.
O calendário mensal é conservado, de modo que ausência não desloca lags.
O código rejeita duplicidades e ordena campanhas antes das somas.

## Sazonalidade descritiva — não é ML

Todos os anos são examinados; apenas meses encerrados com cobertura completa participam.
Para cada mês: média dos CPRs mensais consolidados, mediana, anos observados, mínimo/máximo
e desvio padrão populacional. Não é o CPR agregado de todas as campanhas/anos: é uma média de
razões **mensais já corretamente consolidadas**, atribuindo peso igual a cada mês válido.

Índice sazonal = média histórica do mês / média global dos 71 CPRs mensais válidos.
Exige ao menos dois anos por mês. Índice 1 = média; >1 = acima e <1 = abaixo da média histórica.
Esse diagnóstico retrospectivo usa todo o histórico **apenas para descrição**; não entra nas
features, scaler, seleção ou ajuste do holdout.

| Mês | CPR médio | Mediana | Desvio padrão | Índice | Anos |
|---|---:|---:|---:|---:|---:|
| Janeiro | 35,84 | 34,59 | 5,56 | 1,025 | 6 |
| Fevereiro | 34,71 | 33,43 | 3,54 | 0,993 | 6 |
| Março | 33,08 | 33,67 | 4,10 | 0,946 | 6 |
| Abril | 33,08 | 32,78 | 4,25 | 0,946 | 6 |
| Maio | 33,06 | 33,32 | 3,75 | 0,946 | 6 |
| Junho | 31,21 | 32,40 | 2,49 | 0,893 | 6 |
| Julho | 33,14 | 34,31 | 3,21 | 0,948 | 6 |
| Agosto | 32,95 | 34,19 | 2,61 | 0,943 | 6 |
| Setembro | 34,02 | 34,89 | 3,33 | 0,973 | 6 |
| Outubro | 39,53 | 36,79 | 9,41 | 1,131 | 6 |
| Novembro | 36,71 | 37,36 | 1,53 | 1,050 | 5 |
| Dezembro | 42,43 | 33,88 | 18,06 | 1,214 | 6 |

Dezembro e outubro têm as maiores médias; junho a menor. Média de dezembro 42,43,
mediana 33,88 e desvio 18,06 mostram sensibilidade ao valor extremo de dezembro/2022 (81,67).
Isso não demonstra sazonalidade estável, causalidade ou significância estatística.

## Features, amostra e leakage

Modelo: **LinearRegression**, regressão OLS com intercepto, implementada localmente reutilizando
o solver QR e a padronização do experimento anterior. Não foi instalada biblioteca ou dependência.
A implementação não usa scikit-learn; o nome descreve a classe de modelo.
Nenhum treinamento ou inferência científica é executado no navegador.

| Feature candidata | Usar? | Justificativa |
|---|---|---|
| sin(2π × mês/12), cos(2π × mês/12) | Sim | Calendário conhecido, natureza cíclica |
| Índice temporal 0, 1, 2… desde o primeiro mês | Sim | Tendência pode subir/descer; não se força sinal |
| CPR t−1 | Não | 0 amostras elegíveis no início de t sob maturação sintética |
| CPR t−2 | Sim | Histórico disponível; 68 pares elegíveis isoladamente |
| CPR t−12 | Sim | Mesmo mês anterior; 58 pares elegíveis isoladamente |
| CPR t−24 | Não | 47 pares isolados; reduziria ainda mais a pequena amostra |
| Investimento, conversões, CPR e métricas contemporâneas/futuras | Não | Fórmula do target e/ou informação posterior |

Há 57 amostras com os dois lags conjuntamente elegíveis. O treino inicial contém 44.
Foi pré-especificado somente OLS; não há segundo modelo complexo, seleção de features por
desempenho do teste ou busca de hiperparâmetros. O holdout não é usado para escolher complexidade.
Scalers são ajustados somente no respectivo treino; não há imputação de target/feature no treino.
A hipótese de 14 dias após encerramento é a mesma do cenário anterior, não regra operacional.

## Split e baselines

Detecta-se automaticamente o último ano com 12 competências no calendário: 2022.
Target e lags devem estar disponíveis no corte. O holdout tem 12 CPRs mensais válidos.

- Origem fixa: 01/01/2022.
- Treino: janeiro/2018 a novembro/2021, 44 amostras.
- Dados de 2017 fornecem os lags; dezembro/2021 é purgado porque só estaria disponível em 14/01/2022.
- Teste: janeiro a dezembro/2022, 12 meses.
- **Persistência t−2** e **sazonal t−12**, com recursão quando o lag não está observado na origem.
- OLS e os dois baselines são avaliados nos mesmos targets e mesma origem.
- Nenhum CPR real do teste é incorporado como lag na previsão principal de 12 meses.

Dezembro/2021 indisponível na origem é uma ponte estimada separada por cada método, registrada
em `testBridges`. O baseline sazonal usa dezembro/2020 nessa ponte; sua previsão de dezembro/2022
não acessa dezembro/2021 imaturo. Essa adaptação preserva comparabilidade de disponibilidade.

Avaliação complementar: rolling origin mensal com reestimação; em cada emissão entram somente
targets já maduros. Não confundir suas métricas de 1 passo com o holdout simultâneo de 12 passos.
Não há split aleatório, mistura de targets futuros ou ajuste do scaler no teste.

## Resultados efetivamente executados

### Holdout recursivo — avaliação principal

| Método | MAE | RMSE | R² |
|---|---:|---:|---:|
| Persistência t−2 | 6,563180 | 13,132417 | -0,082082 |
| Sazonal t−12 | 9,200559 | 15,375354 | -0,483273 |
| Regressão linear | 7,575144 | 14,257769 | -0,275481 |

MAE/RMSE em reais fictícios; R² adimensional. OLS supera t−12: MAE menor em
1,625415 (17,67%) e RMSE menor em
1,117586 (7,27%).
**Não supera persistência t−2 no holdout.** R² negativo não sustenta bom poder explicativo.
Produzir previsão não constitui eficácia. Não há MAPE; reduções percentuais de erro são
comparações de MAE/RMSE com baseline positivo, não erro percentual por observação.

### Rolling origin — complementar, um passo por emissão

| Método | MAE | RMSE | R² |
|---|---:|---:|---:|
| Persistência t−2 | 7,332367 | 12,576527 | 0,007587 |
| Sazonal t−12 | 8,321915 | 12,633565 | -0,001435 |
| Regressão linear | 6,335071 | 12,541304 | 0,013138 |

Não selecionar o protocolo de melhor resultado retrospectivamente; ambos são publicados.

## Ajuste final e previsão futura

Após avaliação, OLS pré-especificado é reajustado em todas as 57 amostras elegíveis até
dezembro/2022, origem 01/02/2023. Mantém-se OLS como **demonstração experimental**, não como
vencedor geral: persistência foi melhor no holdout. O baseline sazonal futuro também está no JSON.

O último período do dataset é janeiro/2023, provisório. Por solicitação, o horizonte começa
**depois desse último período**, em fevereiro/2023, e termina em janeiro/2024.
Janeiro/2023 não vira observação: estima-se uma ponte/nowcast em 01/02/2023 (46,264904),
somente para lags futuros, registrada em `forecastBridges`. Não é previsão emitida retroativamente
em 01/01/2023. Modelo final pode usar dezembro/2022 já maduro na origem de fevereiro.

CPR t−2 e t−12 futuros usam previsões anteriores quando não há observação disponível.
As fontes de cada lag constam em cada previsão. Não há valores futuros reais escondidos.
A estimativa de ponte não é inserida na série histórica ou no treino.
Não há truncamento silencioso de previsões negativas; contagem registrada (0 nesta execução).
Não há intervalo de confiança calculado.

| Período | CPR previsto | Δ vs previsão anterior | Índice histórico associado |
|---|---:|---:|---:|
| 2023-02 | 73,75 | — (anterior provisório) | 0,993 |
| 2023-03 | 48,87 | -24,88 | 0,946 |
| 2023-04 | 67,15 | 18,29 | 0,946 |
| 2023-05 | 47,64 | -19,51 | 0,946 |
| 2023-06 | 59,42 | 11,77 | 0,893 |
| 2023-07 | 47,87 | -11,54 | 0,948 |
| 2023-08 | 56,62 | 8,75 | 0,943 |
| 2023-09 | 51,36 | -5,27 | 0,973 |
| 2023-10 | 59,08 | 7,72 | 1,131 |
| 2023-11 | 54,74 | -4,34 | 1,050 |
| 2023-12 | 75,43 | 20,69 | 1,214 |
| 2024-01 | 60,01 | -15,42 | 1,025 |

A previsão não cresce continuamente. Os maiores valores são dezembro/2023 e fevereiro/2023;
os menores, maio e julho/2023. A influência do valor extremo em dezembro/2022 se propaga pela
recursão, inclusive ao horizonte inicial. O padrão projetado não equivale ao índice descritivo
isolado nem constitui recomendação de investimento.

## Artefato e reprodução

- Fonte: `src/data/ads-sintetico.json`, preservada byte a byte.
- Novo artefato: `src/data/google-cpr-sazonal.json`, derivado, não novo dataset operacional.
- `generatedAt` usa a data fixa de referência sintética 31/01/2023; não relógio da máquina.
- JSON registra hash da fonte, audit, features, períodos, coeficientes/scalers, métricas,
  índices, histórico, previsões de teste/futuras, pontes e origem observada/estimada dos lags.
- Cada CLI executa o pipeline duas vezes e exige JSON byte a byte igual. Verificador também
  compara ao artefato versionável, incluindo floats serializados em até 12 casas.

```text
npm run ml:google-cpr:sazonal
npm run ml:google-cpr:sazonal:verificar
npm run test:google-cpr:sazonal
```

Os comandos antigos continuam inalterados. Sem APIs, rede, repositório real ou dados novos.

## V2, V1 e limites de validação

Somente `/v2/ads/google` acrescenta gráfico histórico/previsão distinguido, início do
horizonte, barras de índice sazonal, métricas dos três métodos, interpretação derivada do JSON,
tabelas e avisos. O painel original continua composto por reutilização de GoogleV1.
A seção integral do experimento não depende dos filtros do painel; isso é avisado visivelmente.

V1 e 17 hashes protegidos permanecem intactos; canônicas continuam V1. Fases 3 e 4 bloqueadas.
A primeira sessão com comunidade permanece exclusivamente V1. A evolução técnica não é feedback,
melhoria comprovada de compreensão, aplicação comunitária ou comparação V1/V2 realizada.
Uma futura comparação deve reconhecer que V2 possui **novo conteúdo científico**, além da UI,
e não atribuir diferenças exclusivamente à apresentação sem controlar essa diferença.

Limites: série pequena, 12 targets de teste, apenas uma seed, extremos e zeros por campanha,
ponte provisória, amplificação recursiva, baixo poder explicativo, sem intervalos, sem
generalização real ou causalidade. Datas históricas são fictícias. Não há deploy nesta rodada.
