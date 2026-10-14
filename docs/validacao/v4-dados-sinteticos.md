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

## Limites comuns

A V4 é local e acadêmica. Não há API, credencial, PII, integração operacional, inferência
causal entre módulos nem mudança no experimento de CPR. V1–V3 continuam históricas. A V4
ainda não foi avaliada por participantes da comunidade.
