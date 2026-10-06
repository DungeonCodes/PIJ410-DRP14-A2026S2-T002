# Experimento acadêmico: CPR no Google Ads

Data: 2026-10-06. Decisão de escopo: ADR-007 em `docs/decisions.md`.

## Definição operacional verificada

No código da referência, `scripts/process-ads-data.mjs` atribui o campo CSV de custo/conversão tanto a `cost_per_conversion_brl` quanto a `cost_per_result_brl`. A consolidação mensal recalcula ambos como `spend_brl / conversions`. `src/lib/ads-data.ts` recalcula a mesma razão para os totais por campanha. No contrato diário, `src/lib/google-ads/acquisition.ts` define `cpa_brl = (cost_micros / 1_000_000) / conversions`, quando `conversions > 0`. O adapter mensal também conserva a equivalência entre custo por conversão e custo por resultado.

Portanto, o **CPR acadêmico significa Custo por Resultado**, sendo **resultado = conversões registradas pelo Google Ads** neste recorte. No código da referência também aparece como CPA/custo por conversão. Não é custo por lead único, responsável, aluno ou matrícula. Na Meta, resultado depende do indicador; os denominadores dos dois canais não são intercambiáveis.

Granularidades verificadas: campanha × dia no contrato de aquisição; campanha × mês e total mensal no pipeline/dashboard; totais por campanha no período. O experimento utiliza **campanha × mês-calendário**. Agregar CPR significa dividir a soma dos custos pela soma das conversões, e não fazer média dos CPRs.

As conversões podem ser fracionárias e não equivalem a pessoas únicas. Denominador zero ou ausente produz `null`, nunca zero artificial ou infinito. A documentação oficial distingue conversões por data de interação e por data de conversão; o contrato acadêmico mantém um único significado declarado. Ver [Google — Conversion reporting](https://developers.google.com/google-ads/api/docs/conversions/reporting).

## Pergunta experimental

Em um cenário inteiramente sintético, indicadores históricos já disponíveis de uma campanha de Pesquisa permitem estimar o CPR de seu próximo mês de análise melhor que a persistência do último CPR elegível?

Experimento supervisionado, exploratório e demonstrativo. Não recomenda orçamento, prevê matrículas, promete retorno, identifica causalidade ou mede eficácia institucional.

## Auditoria de leakage

| Feature candidata | Relação com CPR | Risco de leakage | Usar? |
|---|---|---|---|
| Investimento de t | Numerador do target | Alto: observado durante/depois de t; combinado com resultados reconstrói a fórmula | Não |
| Conversões/resultados de t | Denominador do target | Alto: só conhecidos após t e sujeitos a crédito tardio | Não |
| CPR/CPA/custo por conversão de t | Próprio target ou alias | Direto | Não |
| Cliques/impressões/CTR de t | Desempenho contemporâneo | Indisponíveis na emissão no início de t | Não |
| CPC/CPM de t | Derivam do gasto de t | Pós-resultado; CPC combinado à taxa de conversão pode reconstruir CPR | Não |
| Taxa de conversão de t | Deriva do denominador do target | Alto: junto com CPC reapresenta a fórmula | Não |
| Orçamento, lance, status atuais repetidos no histórico | Configuração atual, não snapshot histórico | Temporal: revela decisões posteriores à observação | Não |
| Status de maturação ou cobertura de t | Diagnóstico posterior do target | Não é informação preditiva disponível no início de t | Não como feature; somente filtro de avaliação |
| Identificador/nome da campanha | Chave de agrupamento | Pode estimular memorização e reidentificar o ambiente real | Não como feature; somente código fictício de agrupamento |
| Frequência | Métrica não disponível no contrato Google selecionado | Sem sustentação neste recorte | Não |
| Investimento/conversões de t−2 | Reconstruiriam CPR histórico, não o target futuro | Baixo somente com disponibilidade comprovada; redundância com CPR histórico | Não neste modelo mínimo |
| CPR de t−2 | Resultado histórico | Condicional à maturação anterior à emissão | Sim; também baseline de persistência |
| CTR de t−2 | Razão histórica cliques/impressões | Condicional à disponibilidade histórica | Sim |
| CPC de t−2 | Razão histórica custo/cliques | Condicional à disponibilidade histórica; não usa gasto de t | Sim |
| Log(1 + cliques de t−2) | Volume histórico | Condicional à disponibilidade histórica | Sim |
| Seno/cosseno do mês de t | Calendário conhecido antes de t | Não depende do outcome | Sim |
| Normalização calculada sobre todos os períodos | Estatísticas do teste | Vazamento de distribuição futura | Não; médias/desvios aprendidos exclusivamente no treino |

O desenho segue a regra de aprender o pré-processamento somente no treino descrita em [scikit-learn — Common pitfalls](https://scikit-learn.org/stable/common_pitfalls.html). O código usa implementação local em TypeScript, e não a biblioteca scikit-learn.

## Dataset e hipótese de disponibilidade

- Gerador: `src/lib/sintetico/gerar-ads.ts`.
- Seed: `pij410-ads-cenario-independente-1`.
- Cenário: `ads-academico-1`; schema 1.
- Quatro campanhas fictícias de Pesquisa, com significado homogêneo de conversão.
- 73 meses por campanha, na cronologia fictícia 2017–2023: 72 meses encerrados e um provisório.
- Parâmetros e valores inventados do zero; sem calibragem a volumes, datas de campanha ou valores operacionais.
- Custo deriva de cliques × custo do clique; conversões derivam de cliques × propensão sintética, que varia no tempo com sazonalidade e inovação aleatória determinística. CPR é calculado posteriormente pela fórmula, não usado diretamente para gerar as features de t.
- Exemplos explícitos de ausência de cobertura, zero conversões e período provisório.
- Hipótese de maturação: dados do mês disponíveis **14 dias após seu encerramento**. É uma política do cenário sintético, não uma janela comprovada da plataforma ou da conta real.

A previsão é emitida no dia 1 de t. O mês t−1 ainda não está elegível sob essa hipótese; usa-se **t−2**, com `featureDisponivelEm <= emissao`. Período ausente não é preenchido com zero nem substituído pelo período seguinte. Sem histórico elegível ou sem target definido, a amostra é excluída.

A estrutura temporal é sustentada pelos contratos diários/mensais e pelo tratamento de maturação na referência. Isso não demonstra a disponibilidade histórica das métricas reais. Sem snapshots e janelas verificadas, o mesmo experimento não pode ser aplicado ao sistema operacional.

## Protocolo reproduzível

1. Gerar o cenário sem rede e sem relógio de execução.
2. Formar as seis features históricas/calendáricas e calcular o target CPR de t.
3. Excluir cobertura ausente/provisória, denominador zero e histórico inelegível.
4. Fixar o corte em `2021-07-01` da cronologia fictícia.
5. Treinar somente com períodos anteriores ao corte cujo target já estava disponível antes do corte. Junho de 2021 é purgado, pois seu target amadurece depois do corte.
6. Testar emissões a partir do corte, com targets disponíveis até `2023-04-01`, referência fixa da avaliação.
7. Ajustar scaler e regressão somente no treino.
8. Comparar persistência t−2 com regressão linear OLS, com intercepto.
9. Calcular MAE e RMSE em reais fictícios e R² adimensional; registrar previsões sem ocultar erros ou recortar métricas desfavoráveis.

O modelo é fixado no corte. A avaliação faz previsões sucessivas de um mês, usando históricos que já amadureceram em cada emissão, inclusive os provenientes de meses do período de teste. Isso é uma avaliação temporal sequencial; **não** é previsão simultânea de todo o horizonte de teste no dia do corte.

Não há split aleatório, seleção de features guiada pelo teste, busca de hiperparâmetros ou segundo modelo complexo. O princípio de preservar a ordem temporal está documentado em [scikit-learn — TimeSeriesSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html); o split local é feito por período e disponibilidade do target, mantendo campanhas de uma mesma competência do mesmo lado do corte.

Solver: QR com Gram–Schmidt modificado e reortogonalização. Matriz dependente é rejeitada. O artefato registra médias, desvios e coeficientes na ordem `features`; sua interpretação usa `y = intercepto + Σ coef_j × (x_j − media_j) / desvio_j`. Não foi adicionada dependência de Python ou de serviços externos.

## Execução e resultados observados nesta rodada

```text
npm run ml:google-cpr             # gera somente os dois artefatos acadêmicos próprios
npm run ml:google-cpr:verificar   # verifica reprodução byte a byte, sem gravar
npm run test:google-cpr
```

Artefatos: `src/data/ads-sintetico.json` e `src/data/google-cpr-experimento.json`. O último contém metadados, features, corte, contagens, coeficientes, métricas e previsões de teste. Números são serializados com até 12 casas decimais; o ajuste usa precisão de ponto flutuante sem arredondamento intermediário.

Treino: 198 amostras. Teste: 71. Excluídas na preparação: 19 (histórico inicial, ausência, zero conversões ou provisório). Purgadas pelo corte de disponibilidade: 4. Previsões lineares negativas: 0.

| Modelo | MAE (R$ fictícios) | RMSE (R$ fictícios) | R² |
|---|---:|---:|---:|
| Persistência do CPR t−2 | 6,615678 | 8,363078 | −0,071903 |
| Regressão linear | 5,853007 | 7,673297 | 0,097625 |

A regressão apresentou redução modesta de erro frente à persistência nesta seed, com poder explicativo baixo. Não há base para afirmar eficácia operacional. Métricas foram obtidas pela execução real do código sobre dados sintéticos; não representam participantes, feedback ou validação da comunidade.

## Limitações e alternativas

- O resultado depende de um processo gerador inventado, com autocorrelação e sazonalidade declaradas; não há generalização demonstrada.
- A janela de 14 dias é uma hipótese. Crédito tardio, ajustes e mudanças de atribuição reais exigem tratamento próprio.
- A regressão só avalia meses com CPR definido; não modela ocorrência de zero conversões ou ausência de medição.
- Existe um único holdout temporal; não foi realizado tuning ou validação cruzada. Uma futura avaliação com janelas progressivas deve ser definida antes de novo ajuste.
- Coeficientes são associações sintéticas, não efeitos causais. Não foram calculados intervalos de confiança ou de previsão.
- Previsões negativas são possíveis em regressão linear; o código as registra, sem truncamento silencioso.
- Se snapshots históricos confiáveis não sustentarem lag elegível no ambiente real, manter indicadores descritivos ou análise histórica do CPR; não forçar ML nem substituir dados indisponíveis por informação futura.
- Persistência permanece como alternativa simples. Modelos adicionais só seriam justificáveis por hipótese e protocolo novo, não por aparência de sofisticação.

## Relação com a aplicação e o relatório

O experimento é executável localmente via CLI. Após a ativação acadêmica local de 06/10/2026, Google Ads na Fase 2 exibe o artefato de resultados, sem treinamento no navegador, sem depender dos filtros e sem recomendação de investimento. Meta, Captação, Matrículas, conteúdo orgânico e gestão não recebem ML. Não há API ou inferência operacional em runtime. Fases 3 e 4 continuam bloqueadas; não houve deploy.

Na migração inicial, o Relatório Final e o Parcial foram preservados. No gate técnico-documental de 06/10/2026, o método e os resultados sintéticos foram incorporados pontualmente ao Final, distinguindo experimento técnico executado, funcionalidades disponíveis e validação comunitária ainda pendente. O Parcial e suas versões históricas permanecem intactos.
