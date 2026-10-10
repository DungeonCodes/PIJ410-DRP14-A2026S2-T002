# Auditoria final documental e científica — V3

Data do registro: 2026-10-10. Auditoria de fechamento de conteúdo anterior à composição DOCX/PDF.
Não substitui a conferência visual da composição.

## Escopo

Pergunta auditada: o Relatório Final e o repositório estão científica, metodológica e
documentalmente coerentes entre si após a implementação da V3?

Critério: só foram corrigidos erro factual, contradição, overclaim, ausência documental relevante,
informação obsoleta apresentada como atual ou inconsistência V1/V2/V3. Preferências estilísticas,
paginação e ciência já fechada não foram reabertas. Código, datasets, V1, V2, resultados
experimentais, respostas de P1, figuras, modelo oficial e `parcial.md` não foram alterados.

## Fontes examinadas

- `docs/relatorio/final.md` (integral); `parcial.md` apenas como histórico.
- `docs/decisions.md`, `docs/run_log.md`, `docs/master_context.md`, `docs/referencias.md`.
- `docs/validacao/**`: instrumentos V1, V2 (18 perguntas, não aplicado) e V2→V3 (16 questões);
  respostas `v1-p1.md`, `v2-p1-reavaliacao.md`, `v2-p1-para-v3.md`; `feedback-v2-v3.md`;
  `versoes-interface.md`; `protocolo_evidencias.md`; `auditoria-rastreabilidade-v2-v3.md`;
  `v3-dados-sinteticos.md`; `README.md`.
- `docs/relatorio/auditoria-*.md` (evidências, H07, IA agêntica, referências).
- `package.json`; `src/lib/v3/calculos.ts`; `src/ui/v3/previsao.tsx`; `src/data/google-cpr-experimento.json`;
  `src/data/google-cpr-sazonal.json`; `scripts/test-*.mjs`.
- O modelo oficial e os documentos da UNIVESP foram tomados pela estrutura já conferida nas
  auditorias anteriores; a estrutura de `final.md` segue 1 Introdução, 2 Desenvolvimento (2.1 a
  2.5), 3 Resultados, 4 Considerações finais, Referências e Apêndices.

## Problema e objetivos

O problema central permanece: organizar dados históricos de investimentos em mídia digital para
apoio à decisão em contexto educacional. O texto não promete atribuição causal, integração
operacional nem sistema produtivo institucional (2.2, 3.3, 3.9). O objetivo geral coincide
literalmente com a formulação histórica.

| Objetivo específico | Evidência | Grau de atendimento |
|---|---|---|
| Consolidar dados de fontes distintas | Cenários sintéticos por módulo; sem consolidação de fontes institucionais (2.1, cap. 3) | PARCIALMENTE ATENDIDO |
| Identificar e organizar indicadores comparativos | Módulos Captação, Matrículas, Ads e Estratégia; 2.5.9; 3.4 | ATENDIDO |
| Rotinas determinísticas conferíveis | `src/lib/**`; `test:fases`, `test:determinismo`, `test:v3-feedback` | ATENDIDO |
| Avaliar regressão supervisionada de CPR com baseline, métricas, leakage e limites | 2.5.11; 3.4.4; artefatos e verificadores CPR | ATENDIDO (experimental; desempenho limitado) |
| IA agêntica via CLI para cenários de simulação | Uso assistivo registrado (2.5.12); sem simulação agêntica específica | PARCIALMENTE ATENDIDO |
| Interface web compreensível para a gestão | V1, V2, V3 implementadas e testadas | ATENDIDO |
| Avaliar com profissionais e registrar contribuições | Uma participante, três aplicações sucessivas; V3 não reavaliada | PARCIALMENTE ATENDIDO |

## Fundamentação teórica

2.3.1–2.3.6 mantêm três camadas (determinística, ML, IA agêntica) e não fazem afirmações causais.
2.3.7 apoia-se em fontes revisadas por pares (ver Referências) e declara que *spec-driven
development* e *context engineering* não são metodologia científica autônoma. *Scaffolding* e
*verification workflow* não aparecem no texto; *human-in-the-loop* aparece apenas como conceito
de supervisão humana, sem o rótulo.

## Metodologia

Design Thinking é tratado como abordagem orientadora (2.5.1), não como disciplina. A sequência
levantamento inicial → três aplicações sucessivas da mesma P1 está correta em 2.5.5. Seção 2.4:
oito disciplinas esperadas, em nível coletivo, com PJI410 como componente integrador, sem
atribuição individual (H07).

## Fases e versões

Fase 1 funcional; Fase 2 funcional no ambiente acadêmico local; Fases 3 e 4 bloqueadas
(2.2, Tabela 3, Tabela 5, cap. 3, `test:fases` 61/61). FASE ≠ VERSÃO explicitado em 2.5.4 e
`versoes-interface.md`. V1 = Fase 1 com gráficos separados, preservada (17 arquivos protegidos em
`test:interface`); V2 = Fases 1 e 2 + FB-V1-P1-001, versão avaliada; V3 = sete feedbacks, não
reavaliada.

## Validação externa

P1, Gerente de Marketing, anonimizada; levantamento inicial como antecedente; três aplicações
sucessivas (V1; reavaliação focal V2; avaliação ampliada V2 com 16 questões). O relatório não
trata as aplicações como amostras independentes. Q15 = C conferido na resposta primária.
“Qualidade dos leads” e “Matrículas como desfecho” aparecem como percepção individual (3.5,
`feedback-v2-v3.md`). Data, modalidade e TCLE específicos da terceira aplicação seguem marcados
como a confirmar em todos os documentos, sem inferência; o tratamento dos TCLEs segue H11.

## V3

Sete feedbacks FB-V2-P1-001 a 007: ACEITO → IMPLEMENTADO → VERIFICADO, com arquivos e testes
listados em `feedback-v2-v3.md` e conferidos no código (`src/lib/v3/*`, `src/ui/v3/*`).
Nenhuma passagem afirma que P1 validou a V3.

## Dados sintéticos

Datasets: `captacao-sintetico.json`, `matriculas-sintetico.json`, `ads-sintetico.json` (seed
`pij410-ads-cenario-independente-1`), artefatos CPR. Extensão V3 `pij410-v3-extensao-1`:
Google leads = round(0,07 × cliques); Meta leads = round(0,55 × conversas); Meta alcance =
round(7 × investimento + 3 × resultados) — idênticos em `v3-dados-sinteticos.md` e
`src/lib/v3/calculos.ts`. Achado: o relatório não explicitava essas regras nem a fórmula da
efetivação; corrigido em 2.5.9 com declaração de que não são estimativas empíricas, taxas
institucionais, causalidade ou dados observados.

## Indicadores

CTR = cliques/impressões; CPC = investimento/cliques; CPM = investimento/impressões × 1000;
CPR = investimento/conversões registradas (Google), indefinido sem denominador; efetivação =
matrículas/visitas × 100, indisponível com visita zero (código: `efetivacaoMensal`). CPR não é
confundido com custo por matrícula ou lead único (2.5.11, 3.4.3, 3.4.4).

## Aprendizado de máquina

Desenho conferido com artefatos: dados sintéticos, maturação de 14 dias, t−2 e t−12, OLS com
intercepto, sem embaralhamento, padronização no treino, holdout temporal de 12 meses (2022),
treino 44 amostras com dez/2021 purgado, rolling origin complementar, reajuste em 57 amostras para
fev/2023–jan/2024, sem intervalos de confiança.

| Holdout sazonal | MAE | RMSE | R² |
|---|---:|---:|---:|
| Persistência t−2 | 6,563180 | 13,132417 | −0,082082 |
| Sazonal t−12 | 9,200559 | 15,375354 | −0,483273 |
| Regressão | 7,575144 | 14,257769 | −0,275481 |

Rolling (t−2 7,332367/12,576527/0,007587; t−12 8,321915/12,633565/−0,001435; regressão
6,335071/12,541304/0,013138), experimento inicial (198/71 amostras; métricas da Tabela 6),
reduções 17,67%/7,27%, índice sazonal e as 12 projeções da Tabela 9 conferem com os JSON.
Interpretação correta: supera t−12, não supera t−2 no holdout, R² negativos, não operacional.
Achado: três trechos afirmavam que o artefato sazonal era exclusivo da V2, mas
`src/ui/v3/previsao.tsx` o exibe na V3; corrigidos.

## IA agêntica

2.3.7 e 2.5.12 separam IA agêntica (apoio a desenvolvimento, auditoria, testes e verificação sob
revisão humana) do ML de CPR. Não há afirmação de que a IA desenvolveu o sistema, validou o modelo
ou tomou decisões metodológicas. Termos conforme `auditoria-ia-agentica-fontes.md`.

## Resultados

O capítulo 3 informa o que foi construído, testado, avaliado por P1, alterado e o que permaneceu
limitado. A tabela de rastreabilidade V2→V3 não tinha número; recebeu Tabela 14 (antiga 14 → 15).

## Limitações

3.9 cobre dados sintéticos, uma participante, aplicações sucessivas, ausência de atribuição causal,
Fases 3/4, ML limitado, previsões experimentais, métricas sintéticas V3 e ausência de integração.

## Considerações finais

Respondem aos objetivos, mostram V1→V2→V3, reconhecem P1 e limitações e não introduzem
resultados novos. Resumo: 225 palavras, um parágrafo, cinco palavras-chave, coerente com V3.

## Referências

Recontagem: 25 referências; todas citadas; nenhuma citação sem referência; nenhuma duplicata (as
duas entradas UNIVESP são obras distintas, 2020 e [s. d.]). As seis fontes de IA (Amershi CHI
2019; Han ACL 2024; Kamoi TACL 2024; Liu TACL 2024; Wang Frontiers of CS 2024; Yang NeurIPS
2024) e Yao ICLR 2023 são revisadas por pares; nenhum blog comercial sustenta afirmação científica.
A ADR-009 menciona 19 referências como estado de 09/10/2026; o estado atual (25) está em
`auditoria-referencias-final.md`. NBR 10520:2023 e NBR 6023:2025 mantidas.

## Privacidade

Varreduras por e-mail, telefone, CPF, RG, tokens e chaves em `final.md`, `docs/validacao`,
decisões, run log e contexto: nenhuma PII de participante ou segredo. Nomes e RAs na capa são dos
autores, exigidos pelo modelo. P1 permanece anonimizada. `test:nao-vazamento`: 38/38.

## Inconsistências encontradas

| Severidade | Arquivo | Problema |
|---|---|---|
| MAIOR | `final.md` 2.1 | Afirmava que a avaliação não cobriu Ads ou ML, contradizendo a terceira aplicação |
| MENOR | `final.md` 2.5.11 e 3.4.4 | Artefato sazonal descrito como exclusivo da V2; a V3 também o exibe |
| MENOR | `final.md` 2.5.9 | Fórmula da efetivação e regras `pij410-v3-extensao-1` ausentes do relatório |
| MENOR | `final.md` 3.7 | Tabela de rastreabilidade V2→V3 sem identificação numérica |
| MENOR | `final.md` 2.4 | Linha de IHC omitia o ciclo V2→V3 |
| MENOR | `master_context.md` | Guardrail de interface sem registro da V3 |

## Correções realizadas

1. 2.1: avaliação descrita como uma participante em três aplicações, terceira com Ads, Estratégia
   e apresentação do CPR, sem validação matemática; V3 não reavaliada.
2. 2.5.11: artefato sazonal apresentado em Google Ads na V2 e na V3, não na V1.
3. 3.4.4: título “extensão técnica introduzida na V2 e mantida na V3” e frase sobre exibição na
   V3 sem alteração de valores ou algoritmo.
4. 2.5.9: parágrafo com efetivação e regras sintéticas V3 e seus limites.
5. 3.7/3.8 e Lista de tabelas: nova Tabela 14; antiga Tabela 14 renumerada para 15.
6. 2.4, Tabela 2 (IHC): acrescida a avaliação ampliada da V2 e a incorporação na V3.
7. `master_context.md`: atualização datada sobre a V3.

## Pendências exclusivamente editoriais

URL do vídeo; total de folhas; paginação de sumário e listas; seleção das capturas finais V3 após
revisão visual humana; inserção manual dos TCLEs na versão institucional; travessões ausentes na
questão 9 do Apêndice B.3, herdados do instrumento.

## Gate final

Conteúdo científico aprovado após as correções; documentação coerente e rastreável, com a pendência
externa de metadados (data/modalidade) da terceira aplicação explicitamente declarada. Relatório
apto para composição.

## Adendo de 10 out. 2026 — práticas de IA agêntica

As observações de “Fundamentação teórica” e “Referências” acima descrevem o estado anterior. Após
revisão autorizada, 2.3.7 assume *scaffolding* (Zelikman *et al.*, 2024), desenvolvimento orientado
por especificações (Han *et al.*, 2024; Feng *et al.*, 2026) e organização estruturada do contexto
(Liu *et al.*, 2024; Mei *et al.*, 2025, preprint com ressalva) como práticas de engenharia
efetivamente utilizadas, sem classificá-las como metodologias científicas autônomas, e explicita
*human-in-the-loop*. 2.5.12 descreve o fluxo especificação → contexto e restrições →
*scaffolding*/decomposição → execução assistida → inspeção → testes e verificações → decisão
humana. *Verification workflow* não é usado como nome próprio. Referências: 28, todas citadas;
nenhuma citação sem referência; nenhuma duplicata. Detalhes em `auditoria-ia-agentica-fontes.md`.
