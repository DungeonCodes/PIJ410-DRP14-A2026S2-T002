# Roteiro de validação com a comunidade — V1

**Duração estimada: 30 a 40 minutos. Versão da interface: V1. Cenário: dados sintéticos.**
Planejamento: 5 minutos de contextualização/TCLE, 10 de Fase 1, 15 de Fase 2 e 5 a 10
de encerramento (35–40 minutos previstos). Para 30 minutos, abreviar orientação inicial e
tarefas A–E, sem omitir a interpretação espontânea de CPR. Não exigir tempo igual em cada tela.

Usar somente `/v1/**`, não apresentar V2 nem alternar versões. Registrar data, perfil genérico,
cenário/seed, período e filtros utilizados. Fases 1 e 2 ativas; Fases 3 e 4 bloqueadas.

## Etapa 1 — Contextualização e TCLE (5 minutos)

Obter TCLE antes da demonstração e coleta; não iniciar sem consentimento. Participação voluntária,
interrompível a qualquer momento; somente dados pertinentes serão consolidados e anonimizados.
Guardar TCLE preenchido fora do Git em local restrito. Registrar `TCLE obtido: SIM` somente
após obtenção efetiva, sem identificadores pessoais.

Antes da demonstração, informar:

- finalidade acadêmica; avalia-se a interface, não o desempenho do participante;
- todos os dados são sintéticos; valores não representam operação real;
- não há integração com Google Ads/Meta reais, CRM ou sistemas acadêmicos;
- orçamento é premissa acadêmica, não orçamento real, ideal ou recomendação automática.

Apresentar brevemente a navegação em `/v1`, sem ensinar a interpretar os indicadores.
Não explicar CPR antes de registrar a resposta espontânea em G. A leitura das explicações
existentes na tela é parte da avaliação e não deve ser impedida.

## Etapa 2 — Fase 1: tarefas A–E (10 minutos)

| ID | Rota | Solicitação |
|---|---|---|
| A | /v1/captacao | Localize e interprete os principais indicadores de Captação. |
| B | /v1/captacao | Altere um filtro disponível de safra ou ciclo e observe as visualizações. |
| C | /v1/captacao | Compare períodos ou grupos apresentados. |
| D | /v1/matriculas | Identifique os principais indicadores de Matrículas. |
| E | /v1/captacao ou /v1/matriculas | Interprete uma visualização complementar disponível. |

Aplicar perguntas 1–3 ao concluir A–E. Abreviar condução, não demonstrar a resposta.

## Etapa 3 — Fase 2: tarefas F–K (15 minutos)

### Tarefa F — Visão Geral de Ads
Rota: `/v1/ads`.
“Observe esta página e explique o que você entende sobre os investimentos apresentados.”
Observar indicadores que chamam atenção, localização de investimento/resultados, comparação
de canais e dificuldades; não sugerir a interpretação correta. Aplicar pergunta 4.
Não tratar resultados com denominadores distintos como equivalentes.

### Tarefa G — Google Ads e CPR
Rota: `/v1/ads/google`.
Pedir que localize investimento, conversões registradas e CPR. Aplicar pergunta 5:
“Com suas próprias palavras, o que você entende que CPR representa?”
Registrar a resposta **antes de esclarecer**; anotar se leu a explicação da tela ou recebeu ajuda.
Não corrigir enquanto responde.

Após o registro, esclarecer: CPR = investimento / conversões registradas no Google Ads.
Não é custo por matrícula, não é custo por lead único e não estabelece atribuição causal
de matrícula ao anúncio. Aplicar pergunta 6 **após esclarecimento**, sem substituir a resposta 5.

### Tarefa H — Filtros e comparação
Ainda em `/v1/ads/google`, solicitar alteração de um filtro existente: ano-calendário fictício
ou campanha sintética. Aplicar pergunta 7: “O que mudou na análise depois da alteração do filtro?”
Observar facilidade, percepção e interpretação. Registrar período/filtro antes e depois;
não criar granularidade diária ou filtros inexistentes.

### Tarefa I — Meta Ads
Rota: `/v1/ads/meta`.
“Observe os resultados apresentados e explique como você interpreta os diferentes tipos
de resultado e seus respectivos custos.”
Observar se distingue conversas e interações e seus denominadores; não antecipar a distinção.
Aplicar pergunta 8. Não perguntar sobre ML nesta página.

### Tarefa J — Estratégia
Rota: `/v1/ads/estrategia`.
“Com base nesta tela, explique como você interpreta orçamento, gasto e saldo.”
Depois: “Que tipo de decisão essa informação poderia ajudar você a analisar?”
Aplicar pergunta 9. Reiterar a natureza sintética do orçamento se necessário, registrando a
intervenção; nunca apresentar a premissa como orçamento real, ideal ou recomendação automática.

### Tarefa K — Comunicação do experimento CPR
Voltar à seção do experimento acadêmico em `/v1/ads/google`.
Aplicar pergunta 10: “Pelo que esta seção apresenta, o que você entende que esse experimento
consegue fazer e o que ele não consegue fazer?”
Registrar interpretação espontânea antes de explicar limitações. Não avaliar conhecimento
de MAE, RMSE, R² ou regressão linear; avalia-se a comunicação, não a qualidade científica.

Para análise posterior, observar atribuições indevidas: definir orçamento, prever matrículas,
otimizar automaticamente campanhas, garantir redução de custo ou eficácia real.
**Não ler essa lista como alternativas ao participante.** Depois do registro, se necessário
esclarecer caráter experimental/sintético, baixo poder explicativo e ausência de decisão
automática; registrar ajuda sem reclassificá-la como compreensão espontânea.

## Etapa 4 — Perguntas abertas e encerramento (5 a 10 minutos)

Aplicar perguntas 11–18, sem repetir as respondidas durante o uso. Permitir resposta negativa,
neutra, “não sei”, “não se aplica” ou recusa. Agradecer, reiterar anonimização e não prometer
ajustes antes da análise. Registrar tarefas/perguntas não realizadas; nunca preencher por inferência.

## Conduta de registro

Para A–K, registrar conclusão sem ajuda, ajuda necessária, dificuldade e evidência direta,
incluindo tipo/momento da ajuda. Distinguir opinião de facilidade de execução observada.
Em K, concluir significa examinar a seção e expressar compreensão, não dominar matemática.
Separar fala/ação da interpretação posterior do grupo. Citações futuras apenas breves e
anonimizadas. Nenhuma resposta é preenchida nesta preparação.
