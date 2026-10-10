# Dados e métricas exclusivos da V3

A V3 usa os JSONs sintéticos existentes sem editá-los. A extensão é calculada em tempo de apresentação por funções determinísticas de `src/lib/v3/calculos.ts` e `src/lib/v3/metricas.ts`. Não há conexão com Google Ads, Meta Ads, CRM, sistema acadêmico ou planilha operacional.

| Elemento | Fonte / regra | Unidade e limite |
|---|---|---|
| Efetivação mensal | Matrículas do funil ÷ visitas do mesmo mês × 100 | Percentual; indisponível com visita zero ou dado ausente. Não usa o total do módulo Matrículas. |
| Matrículas por série | `turmas` em `matriculas-sintetico.json` | Série/turma já existente. Safra 2022 tem composição nova/rematrícula indeterminada e é excluída desse gráfico. |
| Google: conversões | `conversoes` em `ads-sintetico.json` | Resultado da plataforma; não equivale a lead único. Pode ser fracionário no cenário original. |
| Google: leads simulados | Arredondar `0,07 × cliques` do recorte mensal | Contagem fictícia; não é lead real nem atribuição de matrícula. |
| Meta: conversas e interações | `resultados`, separados por `indicador` | Dois tipos distintos; não se somam como um único resultado. |
| Meta: leads simulados | Arredondar `0,55 × conversas` do mês | Contagem fictícia; interações não geram leads por esta regra. |
| Meta: alcance simulado | Arredondar `7 × investimento + 3 × resultados` por mês | Estimativa fictícia de pessoas alcançadas; não é impressão nem medição de indivíduos. |
| Estratégia: matrículas | Soma mensal de `matriculas-sintetico.json` em 2022 | Histórico sintético independente de Ads, sem atribuição por plataforma. |

**Identificador/seed da regra:** `pij410-v3-extensao-1`. A extensão não usa sorteio: entradas idênticas geram saídas idênticas. Período exibido nos painéis Ads/Google/Meta/Estratégia: janeiro a dezembro de 2022, interseção dos meses fechados de Google e Meta e do histórico de Matrículas. O experimento de CPR conserva separadamente sua cronologia fictícia de 2017 a 2023.

Valores ausentes permanecem ausentes. A Visão Geral soma leads simulados por canal apenas como total descritivo; não há deduplicação de pessoas. Investimento, leads e matrículas em Estratégia compartilham somente o eixo de meses fictícios. As bases foram geradas como cenários independentes, sem chave de ligação, atribuição ou inferência causal. O protótipo não mede qualidade de lead.
