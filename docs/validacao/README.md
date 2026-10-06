# Validação com a comunidade externa

## Objetivo

Esta pasta reúne os instrumentos para a validação real do protótipo do PIJ410 com participantes da comunidade externa. A etapa busca verificar, com base no uso dos módulos atualmente funcionais, a compreensão, a utilidade percebida, a navegação e os ajustes necessários à solução.

A validação retoma as necessidades identificadas no contato inicial: acompanhamento de indicadores, compreensão dos investimentos, comparação de resultados, clareza das informações e apoio à tomada de decisão. Ela permitirá registrar posteriormente o contraste entre expectativa inicial, solução apresentada, percepção após o uso e ajustes necessários.

## Relação com o Design Thinking e o Relatório Final

No Design Thinking, esta documentação dá suporte às etapas de teste, validação e identificação de ajustes. As evidências reais coletadas poderão subsidiar, após análise, as seções 3.5 a 3.9 e as considerações finais de `docs/relatorio/final.md`. Nenhum resultado deve ser lançado no Relatório Final antes da realização e da análise das sessões.

## Participantes esperados

Os convites devem considerar perfis, e não nomes no repositório:

- profissional relacionado ao marketing da instituição;
- representante da direção ou da gestão/mantenedora.

Nos registros versionados, utilizar somente identificadores como `P1` e `P2` e descrições genéricas de perfil.

## Escopo da sessão atual

**Primeira aplicação: versão apresentada V1.** Acessar `/v1` e não mostrar V2 como alternativa.
Registrar versão da interface, dataset, período e filtros usados. Ver `versoes-interface.md`.

A validação prática abrange os módulos ativos das Fases 1 e 2 na V1:

- página inicial;
- Captação;
- Matrículas;
- Ads: Visão Geral, Google Ads, Meta Ads e Estratégia;
- comunicação do experimento acadêmico de CPR, sem avaliar a qualidade científica do modelo.

Conteúdo orgânico (Fase 3), Objetivo da Gestão e Arquitetura & Algoritmos (Fase 4) continuam bloqueados.
São 18 perguntas e tarefas A–K em 30 a 40 minutos, com perguntas distribuídas durante o uso.
Não avaliar módulos bloqueados como funcionais. Informar antes da demonstração que os valores
são sintéticos, não representam operação real, não há Google Ads/Meta reais e orçamento é
premissa acadêmica. Não explicar CPR antes da resposta espontânea na tarefa G.

## Documentos desta pasta

- `roteiro_validacao.md`: condução da sessão de aproximadamente 30 a 40 minutos;
- `instrumento_validacao.md`: perguntas breves e matriz de rastreabilidade;
- `protocolo_evidencias.md`: regras para coleta, anonimização e guarda de evidências;
- `modelo_registro_respostas.md`: modelo vazio para registrar cada sessão após sua realização.
- `versoes-interface.md`: baseline V1, base equivalente V2, controles de comparação e changelog vazio.

## Fluxo de aplicação

1. Confirmar que o ambiente acadêmico utiliza apenas dados sintéticos.
2. Obter o TCLE antes da demonstração/coleta; não iniciar sem consentimento.
3. Conduzir a contextualização e a apresentação previstas no roteiro.
4. Solicitar as tarefas de uso nos módulos ativos.
5. Aplicar perguntas 1–10 durante as tarefas e 11–18 no encerramento, sem repetição ou indução.
6. Registrar evidências diretas e observações de forma anonimizada.
7. Armazenar o TCLE preenchido e materiais identificáveis fora do Git, em local restrito.
8. Consolidar as respostas reais antes de atualizar, em etapa posterior, o Relatório Final.

Os instrumentos permanecem sem respostas preenchidas até a realização das sessões.
