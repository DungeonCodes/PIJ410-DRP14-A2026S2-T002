# Referência conceitual de arquitetura e análise de mídia

> Revisão de sanitização: 06/10/2026. Este arquivo substitui a descrição operacional
> legada por uma síntese metodológica. Não conserva valores financeiros, metas,
> limiares, multiplicadores, calendários, identificadores ou diagnósticos da operação
> de origem. Não deve ser utilizado para reconstruir ou configurar essa operação.
>
> A referência preserva conceitos, não uma especificação de produção. No PIJ410,
> a instituição demonstrativa é a Instituição Educacional Alfa, os dados são
> integralmente sintéticos e não existem conexões com sistemas operacionais.
> Somente a Fase 1 está funcional na interface; as Fases 2 a 4 continuam bloqueadas.
> O experimento de CPR é separado, executado localmente via CLI.

## Sumário

- Parte I — Arquitetura conceitual: seções 1 a 10.
- Parte II — Métodos analíticos e limites: seções 11 a 23.

# PARTE I — ARQUITETURA CONCEITUAL

## 1. Identidade técnica

A arquitetura de referência separa interface web, contratos de dados, preparação
das fontes, cálculos e documentação. O ambiente acadêmico utiliza Next.js,
TypeScript e artefatos sintéticos locais. A existência de código preparatório
não implica disponibilidade de uma funcionalidade na interface.

## 2. Organização de diretórios

A separação entre páginas, componentes, bibliotecas, dados e scripts permite
rastrear uma visualização até a regra que produziu seus valores. Os contratos e
as funções analíticas devem ser independentes da apresentação. Não são
reproduzidos diretórios de campanhas, períodos ou arquivos operacionais.

## 3. Proteção de acesso e disponibilidade

Controle de autenticação e controle de disponibilidade são conceitos distintos.
O protótipo acadêmico usa feature gates para impedir acesso a fases ainda não
liberadas; isso não equivale a autenticação de produção. Não se transferem
credenciais, provedores de identidade ou configurações do ambiente de origem.

## 4. Organização de páginas e módulos

A Fase 1 reúne Captação e Matrículas. A Fase 2 reúne visão geral de Ads, Google Ads,
Meta Ads e Estratégia. A Fase 3 corresponde ao conteúdo orgânico. A Fase 4 reúne
Objetivo da Gestão e Arquitetura & Algoritmos. Os dois últimos componentes
pertencem à mesma fase. Páginas preparadas atrás de gates permanecem bloqueadas.

## 5. Aquisição e contratos de dados

A separação aquisição → contrato → consumo permite substituir uma fonte sem
reescrever a análise. Essa arquitetura pode ser explicada pedagogicamente, mas
o acadêmico não possui integração com contas de anúncios, planilhas, CRM,
sistemas acadêmicos ou serviços operacionais. Entradas demonstrativas são locais.

## 6. Camada de dados

Cada registro deve declarar fonte fictícia, unidade, período, cobertura e
significado das métricas. Indicadores calculados usam contratos explícitos.
Ausência, zero, período provisório e incompatibilidade de unidade são estados
distintos, e não devem ser convertidos silenciosamente um no outro.

## 7. Componentes de interface

Filtros, indicadores, séries temporais e tabelas compartilham o contexto do
recorte. A interface deve indicar a unidade de análise e as limitações relevantes.
Componentes demonstrativos não incorporam nomes, imagens ou configurações
identificáveis do ambiente operacional.

## 8. Scripts e pipelines

Os scripts acadêmicos geram cenários determinísticos, executam transformações e
verificam integridade. A seed e o procedimento de geração são documentados.
Não importam exports operacionais, não acessam rede e não dependem do relógio
de execução para construir os dados do experimento.

## 9. Governança de mídia

Leitura analítica não constitui autorização para alterar campanhas. O PI não
executa mudanças de orçamento, lances ou segmentação. Cenários e interpretações
são exercícios demonstrativos, sujeitos à análise humana, sem decisão autônoma.

## 10. Pontos de atenção técnicos

Conferir denominadores, granularidade, maturação, cobertura, compatibilidade
entre fontes e disponibilidade temporal antes de comparar métricas. Metadados
não podem ser usados para ocultar dados ausentes nem para dar aparência de
funcionalidade concluída a páginas bloqueadas.

# PARTE II — MÉTODOS ANALÍTICOS E LIMITES

## 11. Arquitetura analítica de três camadas

1. Indicadores e regras determinísticas comparados a critérios declarados.
2. Leitura agregada de etapas do funil quando houver bases comparáveis.
3. Declaração dos limites de atribuição individual.

Essas camadas não são três fases do protótipo nem três modelos de aprendizagem.
Uma associação agregada não identifica o anúncio responsável por uma matrícula.

## 12. Captura e geração de demanda

Busca paga e exposição em mídia social podem cumprir objetivos diferentes.
A análise deve preservar essa diferença, sem assumir uma proporção universal
entre canais ou reproduzir percentuais e segmentações de uma instituição.
Relevância do canal depende do problema, das métricas e do recorte declarado.

## 13. Fontes, recortes e agregações

Períodos e unidades devem ser comparáveis. Alcance não é automaticamente aditivo
entre janelas ou campanhas. Frequência de uma janela não deve ser convertida
para outra apenas por divisão aritmética. Razões agregadas são recalculadas a
partir de numeradores e denominadores compatíveis, não pela média das razões.

Datas, calendários e diagnósticos operacionais foram excluídos desta referência.
A cronologia fictícia do experimento acadêmico é documentada separadamente e
não foi calibrada ao calendário da operação de origem.

## 14. Frequência na mídia social

Na mesma janela, frequência = impressões / alcance, quando o alcance é positivo.
Comparar uma frequência observada a um alvo só é válido se o alvo tiver origem,
unidade e hipótese explicitadas. Não há meta institucional preservada aqui.

Uma hipótese linear de custo para atingir um alvo pode ser escrita simbolicamente
como custo observado × frequência-alvo / frequência observada, na mesma janela.
Ela supõe alcance e custo de exposição constantes; não é previsão validada,
garantia de entrega ou recomendação de orçamento. Conversões entre janelas
exigem hipótese adicional explícita e não devem ser aplicadas automaticamente.

## 15. Participação e perda de impressões na busca

Quando os campos forem compatíveis, participação obtida e perdas por orçamento
e por classificação descrevem aspectos distintos da oportunidade de exposição.
Um aviso de orçamento não mede sozinho a magnitude da perda.

Classificações exigem limiares documentados e análise de sensibilidade.
Nenhum limiar, margem de dominância, regime histórico ou diagnóstico da conta
original foi mantido. Sem critério acadêmico previamente definido e dados
adequados, o estado deve ser não classificável, não uma conclusão operacional.

## 16. Sazonalidade e capacidade

Sazonalidade pode ser descrita por variáveis de calendário e comparações entre
períodos compatíveis. Capacidade de atendimento é uma restrição externa que
precisa de evidência própria. Não se preservam mapas institucionais de meses,
ciclos comerciais, datas de campanha, capacidade ou pisos de série histórica.

## 17. Cenários determinísticos de investimento

Um cenário pedagógico pode relacionar um parâmetro sintético de referência B
e um fator hipotético k por B × k. Os valores devem ser inventados de forma
independente, explicitamente rotulados e nunca derivados de valores operacionais.

Rótulos como mínimo, intermediário ou expandido descrevem hipóteses, não
orçamentos recomendados. Totais e participação por canal só podem combinar
grandezas comparáveis. Conflitos entre hipóteses devem permanecer visíveis.
Não se deduzem matrículas, retorno financeiro ou orçamento ideal desses cenários.

## 18. Regras e conformidade

Regras acadêmicas precisam indicar sua origem sintética, finalidade, unidade e
limitação. Um resultado pode ser compatível, incompatível ou não verificável
conforme a evidência disponível. Não se preservam regras de negócio proprietárias,
mix de canais, raio geográfico, metas ou limites de ajuste da operação original.

## 19. Leitura agregada do funil

Contatos, visitas e matrículas representam etapas distintas. Taxas só são
interpretáveis se numerador, denominador, janela e população forem compatíveis.
Resultados impossíveis ou inconsistentes devem provocar investigação dos
contratos, não normalização silenciosa.

Participação de rematrículas na safra atual não é retenção de coorte. Uma taxa
de retenção requer população elegível anterior e acompanhamento compatível.
Nenhuma taxa observada no ambiente operacional foi preservada.

## 20. Limites de atribuição

Conversão de plataforma, contato, lead único, visita e matrícula não são
sinônimos. Sem ligação individual verificável, não há atribuição causal de
matrícula a campanha. Origem declarada e associação temporal são evidências
limitadas. Não são conservadas estatísticas de completude ou lacunas reais.

## 21. Interpretação por objetivo

Uma análise pode descrever entrega, interação, conversões registradas e custos
conforme o objetivo declarado de cada campanha fictícia. Não reproduz vereditos
de manter, reforçar, pausar ou redistribuir investimento da operação de origem.
Também não emite recomendação automática sobre contas reais.

## 22. Fórmulas conceituais e parâmetros

| Indicador ou relação | Definição no mesmo recorte |
|---|---|
| CTR | cliques / impressões × 100, com denominador positivo |
| CPC | investimento / cliques, com denominador positivo |
| CPM | investimento / impressões × 1.000, com denominador positivo |
| Frequência | impressões / alcance, com denominador positivo |
| CPR no Google Ads | investimento / conversões registradas, com denominador positivo |
| CPR agregado | soma dos investimentos / soma das conversões compatíveis |
| Participação de rematrículas | rematrículas / matrículas da safra atual × 100 |
| Cenário hipotético | referência sintética B × fator hipotético k |

Sem denominador ou com denominador zero, a razão fica indefinida. O CPR não
representa custo por matrícula ou por lead único e não estabelece causalidade.
Os únicos números fixos das fórmulas acima são conversões matemáticas de unidade;
não são parâmetros de uma instituição. Não há tabela de constantes operacionais.

## 23. Auditoria e reprodução acadêmica

Conferir contratos, seed, recortes, fórmulas, disponibilidade e tratamento de
ausência. Confrontar artefatos gerados com nova execução e verificar não vazamento.
Resultados sintéticos não comprovam desempenho institucional nem avaliação da
comunidade.

O único experimento de aprendizagem de máquina do PI está restrito ao CPR do
Google Ads. Captação, Matrículas, Meta Ads, conteúdo orgânico e gestão permanecem
no campo descritivo/determinístico. O experimento não integra a interface ativa.

## Referências acadêmicas internas

- [Auditoria da referência e critérios de adaptação](../arquitetura/auditoria-referencia-2026-10-06.md).
- [Experimento sintético de CPR](../arquitetura/experimento-google-cpr.md).
- [Decisões documentais e técnicas do PI](../../decisions.md), em especial ADR-007.

Esta sanitização abrange o conteúdo atual do arquivo. Ela não reescreve versões
anteriormente registradas no histórico Git; a publicação desse histórico exige
avaliação específica de exposição.
