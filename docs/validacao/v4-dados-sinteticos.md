# V4 — fontes e regras sintéticas

## Reels orgânicos — Fase 3

Fonte: `src/lib/v4/organico.ts`. O gerador usa a semente fixa `pij410-v4-organico-1`,
sem relógio, rede ou aleatoriedade não controlada. Produz doze publicações fictícias de Reels,
duas por mês entre janeiro e junho de 2022. Cada registro contém ID fictício, mês, alcance e
interações. Não contém pessoas, conta, mídia, impressões ou visualizações. O período é uma
cronologia fictícia, não data de coleta pela instituição.

O alcance é uma contagem sintética por publicação; interações derivam do alcance multiplicado
por uma taxa sintética declarada no gerador. Um registro tem interações ausentes (`null`) para
exercitar indisponibilidade e outro tem zero interações observadas. O gerador assegura
`0 ≤ interações ≤ alcance` quando a medição existe. Não há agregação deduplicada de pessoas.

Taxa de interação = interações ÷ alcance × 100. Denominador ausente ou zero e interações
ausentes tornam taxa e score indisponíveis (`—`), nunca zero. Zero interações com alcance
positivo é uma observação válida.

O score demonstrativo de 0 a 100 é:

`100 × [0,70 × min(1, (interações ÷ alcance) ÷ 0,10) + 0,30 × min(1, alcance ÷ 3000)]`.

Os pesos 70/30 e as referências de 10% e 3.000 são premissas acadêmicas da V4,
declaradas em `ORGANICO_CENARIO`; não foram estimadas nem validadas pela instituição.
Publicações sem score ficam fora das posições do ranking. Ordenação total: score decrescente,
alcance decrescente, período decrescente e ID crescente. O filtro por mês usa a mesma unidade
temporal dos registros. Não há ligação causal ou chave comum com Ads, Captação ou Matrículas.

## Objetivo da Gestão — Fase 4

Fonte: `src/lib/v4/gestao.ts`, versão `pij410-v4-gestao-1`. É um plano fictício de quatro turmas,
uma por etapa, para 2026, com vagas hipotéticas e taxas alvo escolhidas apenas para demonstrar
premissas externas separadas de dados apurados. Vagas alvo por linha = arredondamento de
vagas hipotéticas × taxa alvo; totais são a soma das linhas. Não há valor observado,
ausência preenchida, previsão de matrículas ou comparação com a base do módulo Matrículas.
O plano não foi recebido nem aprovado pela parceira e não representa ocupação institucional.

## Granularidade Ads da segunda iteração técnica — TEC-006 e TEC-007

Fonte: `src/lib/v4/ads.ts`, cenário fixo `pij410-v4-ads-granular-1`. As linhas originais de
`ads-sintetico.json` não têm anúncio/post nem palavra-chave. A V4 reparte cada linha mensal
**fechada** em registros fictícios; não consulta plataformas, relógio nem sorteio. Campos Meta:
ID estável, criativo fictício, campanha, mês, investimento, conversas e CPR. Campos Google:
ID estável, palavra fictícia, campanha, mês, custo, cliques, conversões registradas e CPR.
Não há impressões por anúncio, alcance por anúncio, leads por anúncio ou tipo de correspondência.

Meta: só a linha `indicador=conversa` é repartida em cinco criativos. As parcelas do investimento
são 30%, 25%, 20%, 15%, 10%; as das conversas são 24%, 28%, 18%, 20%, 10%. Linhas de
`interacao` continuam no painel herdado, mas não entram no ranking nem no CPR por conversa.
Google: cada linha de campanha de Pesquisa é repartida em duas palavras. Custo e cliques usam
60%/40%; conversões registradas usam 55%/45%. Esses pesos são premissas didáticas da V4,
sem estimativa ou validação externa. As palavras são rótulos inventados e não representam termos
de busca observados. Conversões mantêm as duas casas decimais da base original; não representam
pessoas, leads únicos nem matrículas.

Cada partição converte o total em unidades inteiras (centavos para dinheiro e conversões Google,
unidades para cliques e conversas), toma as partes inteiras e distribui o resto pelas maiores
frações, com desempate pelo índice fixo. A soma das partes reconstrói exatamente o total na
unidade de origem. Total ausente produz partes ausentes; zero observado produz partes zero.
Não há realocação entre meses, campanhas ou indicadores.

CPR por anúncio Meta = investimento do anúncio ÷ conversas do anúncio. CPR por palavra Google =
custo da palavra ÷ conversões registradas da palavra. Denominador ausente ou zero torna CPR
indisponível (`—`), nunca zero ou infinito. Rankings mensais: CPR válido crescente; depois mais
conversas ou conversões, menor investimento ou custo, ID crescente. Registros sem CPR válido
ficam após os válidos. Exibem-se até cinco linhas. Não se usa o score orgânico. Um CPR menor
no cenário inventado não comprova eficiência real e não recomenda redistribuição de verba.

## CPR temporal da Estratégia — TEC-008

A série histórica de 2022 usa as linhas mensais fechadas do mesmo recorte temporal V3.
CPR Google = soma dos investimentos Google ÷ soma das conversões registradas Google no mês,
conforme `metricasGoogle`. CPR Meta = investimento **apenas das linhas de conversa** ÷ conversas
dessas linhas no mês, conforme a restrição de indicador de `metricasMeta`. Investimento da linha
de interação Meta não entra nesse numerador. Ausência, mês sem linha ou denominador zero deixam
o ponto indisponível. As duas séries aparecem em gráfico complementar de R$, com rótulos dos
denominadores. Não se calcula CPR agregado Google+Meta, pois conversão Google e conversa Meta
não são o mesmo resultado. As séries descrevem o cenário, não são previsão experimental de CPR,
matrícula, lead único nem atribuição causal. O seletor mensal do resumo identifica o mês no
gráfico, que mantém os doze meses para leitura temporal.

## Limites comuns

A V4 é local e acadêmica. Não há API, credencial, PII, integração operacional, inferência
causal entre módulos nem mudança no experimento de CPR. V1–V3 continuam históricas. A V4
ainda não foi avaliada por participantes da comunidade.
