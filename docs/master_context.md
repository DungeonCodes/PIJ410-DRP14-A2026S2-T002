# Master Context

> Status do documento: contextualização inicial.
> Apenas fatos confirmados no handoff de 2026-08-23 estão registrados aqui.
> Itens marcados como **Pendente** ainda não foram decididos e não devem ser inferidos.

## Objetivo Central

**Pendente.** O objetivo definitivo será definido pelo grupo após as orientações da UNIVESP, o contato com a instituição parceira, as entrevistas e a validação das hipóteses.

Intenção preliminar (hipótese, não decisão): investigar como informações sobre investimentos em mídia paga podem ser organizadas e apresentadas de forma mais útil para apoiar a tomada de decisão da gestão de uma instituição de ensino.

## Tipo de Projeto

Projeto acadêmico: **PIJ410 — Projeto Integrador em Computação III — UNIVESP — 2º semestre de 2026**, desenvolvido pelo grupo do Projeto Integrador.

O trabalho usa como contexto uma necessidade real observada em uma instituição de ensino e segue as orientações metodológicas e acadêmicas da UNIVESP.

Tipo de entrega, tecnologia e arquitetura: **Pendente.**

## Público, Usuários ou Stakeholders

Confirmado:

* Grupo do Projeto Integrador (autores).
* UNIVESP (instituição responsável pela disciplina; fonte normativa).
* Instituição de ensino parceira, como contexto real de aplicação — podendo participar por entrevistas, levantamento de necessidades, contato com a direção, contato com profissionais de marketing, avaliação do protótipo, feedback e validação da solução.

Mapeamento formal de stakeholders, perfis e personas: **Pendente** (depende das entrevistas e do levantamento de necessidades).

## Problema a Resolver

**Pendente — não considerar fechado.**

Ponto de partida previsto: a instituição parceira utiliza diferentes fontes de informação relacionadas à gestão, captação de alunos, matrículas e investimentos em marketing digital. A necessidade inicial observada refere-se à análise dos investimentos realizados em mídia paga, principalmente dados provenientes de plataformas de anúncios digitais.

Problema, objetivo, título, requisitos e escopo definitivos serão refinados pelo grupo a partir das orientações da UNIVESP, da metodologia exigida no PI, do contato com a instituição parceira, das entrevistas, do levantamento de necessidades e da validação das hipóteses.

## Escopo Inicial

**Pendente.**

Nesta fase, o escopo se limita ao registro progressivo do contexto acadêmico no repositório. Nenhuma funcionalidade deve ser implementada e o scaffolding existente deve ser preservado.

## Fora de Escopo

Confirmado para o estado atual do projeto:

* Implementar funcionalidades, arquitetura ou código.
* Reorganizar o scaffolding existente ou criar uma nova arquitetura documental.
* Definir prematuramente decisões de projeto ou preencher lacunas por inferência.
* Criar ADRs para informações ainda preliminares.
* Executar agora a geração da versão sanitizada do sistema de referência.
* Fabricar entrevistas, respostas, avaliações ou evidências.
* Expor dados sensíveis da instituição parceira (ver Restrições e Guardrails).

Confirmado para o protótipo acadêmico futuro — o protótipo **não** deverá usar conexões reais com:

* APIs de anúncios;
* Google Sheets;
* CRM;
* sistemas acadêmicos;
* bancos de dados da instituição;
* contas de publicidade.

## Entradas

Serão adicionadas ao repositório progressivamente e ainda **não estão disponíveis**:

* documentos oficiais da UNIVESP e orientações da disciplina (fonte normativa quando forem analisados);
* Plano de Ação;
* definição do tema, problema e objetivo;
* entrevistas e informações dos stakeholders;
* decisões do grupo e planejamento;
* materiais do sistema de referência;
* estratégia de sanitização;
* evidências de validação.

Dados do protótipo (quando a etapa for autorizada): JSONs locais, fixtures, mocks, dados sintéticos ou dados fictícios coerentes com os cenários demonstrados.

## Saídas Esperadas

**Pendente.** Entregáveis, formato do relatório e artefatos acadêmicos serão definidos após a análise dos documentos oficiais da UNIVESP.

Intenção registrada (não executar agora): uma versão sanitizada do sistema de referência, destinada exclusivamente ao PI e independente do ambiente operacional.

## Restrições e Guardrails

Confidencialidade — o contexto é real e o repositório acadêmico não deve expor:

* dados pessoais de alunos;
* dados de responsáveis;
* telefones;
* e-mails;
* credenciais;
* tokens;
* chaves;
* IDs privados;
* informações comerciais confidenciais;
* bases operacionais da instituição;
* qualquer outra informação sensível desnecessária ao trabalho acadêmico.

A identidade da instituição poderá ser anonimizada nos artefatos em que isso for necessário. A participação de uma instituição real no processo metodológico deve ser preservada, sem exposição indevida de seus dados.

Integridade acadêmica: as interações com a instituição parceira devem acontecer de fato. A organização cronológica do desenvolvimento poderá seguir o planejamento do PI, mas as evidências apresentadas devem corresponder a atividades efetivamente realizadas.

Orientação para agentes (Claude, Codex ou outros) que trabalhem neste repositório:

1. utilizar o contexto registrado no próprio repositório;
2. evitar inferências quando uma decisão ainda estiver pendente;
3. distinguir fatos confirmados de hipóteses ou propostas;
4. preservar o scaffolding existente;
5. evitar criar documentação desnecessária;
6. aguardar instrução explícita antes de alterar arquitetura ou código;
7. nunca introduzir informações sensíveis provenientes do ambiente real;
8. não realizar commit ou push automaticamente;
9. apresentar alterações para revisão humana.

Regras complementares de trabalho estão em `/docs/agent_rules.md`.

## Premissas e Dependências

* Existe um sistema real que servirá como principal referência técnica para a construção do ambiente acadêmico, com funcionalidades relacionadas a: indicadores gerenciais, investimentos em mídia digital, Google Ads, Meta Ads, captação, matrículas, retenção/evasão, conteúdo orgânico e análise estratégica.
* O PI poderá aproveitar conceitos, arquitetura, componentes, regras de apresentação e experiências obtidas nesse sistema, mas o repositório acadêmico será **independente do ambiente operacional**.
* Confirmado pelo grupo em 25 ago. 2026: o núcleo analítico previsto produzirá indicadores e
  inferências por algoritmos determinísticos, com parâmetros e resultados conferíveis. IA agêntica
  acionada via CLI poderá apoiar a organização, a execução e a interpretação de cenários de
  simulação, mas não substituirá o cálculo determinístico, a revisão humana, a evidência empírica
  nem a validação junto à comunidade externa. Os modelos inicialmente previstos são Claude Fable 5
  e GPT-5.6 Sol com esforço de raciocínio `xhigh`, quando disponíveis nos ambientes licenciados.
  Somente dados fictícios ou sanitizados poderão ser enviados a esses ambientes. No processo de
  produção documental, os agentes poderão apoiar consulta, organização e revisão sob contexto
  controlado; seleção de conteúdo, validação de fontes e aprovação de versões permanecem sob
  responsabilidade do grupo.
* A UNIVESP utiliza metodologia própria para condução do PI, com indicação de uso de Design Thinking. Nenhuma interpretação definitiva dessa metodologia deve ser adotada agora; os materiais oficiais serão adicionados depois e terão precedência sobre interpretações preliminares.
* Etapas, entregáveis, entrevistas, documentação, cronograma, validações e relatório só serão estruturados formalmente após a análise da documentação oficial.

Processo planejado para o ambiente acadêmico (registro de intenção — **não executar agora**):

```text
SISTEMA DE REFERÊNCIA
        ↓
seleção dos componentes necessários
        ↓
cópia controlada para ambiente separado
        ↓
sanitização
        ↓
remoção de integrações reais
        ↓
remoção de dados e identificadores sensíveis
        ↓
substituição das fontes por dados fictícios
        ↓
revisão da sanitização
        ↓
ambiente acadêmico independente
```

Quando a etapa de sanitização for explicitamente solicitada, o agente poderá trabalhar a partir do repositório original e de uma pasta/repositório separado destinado ao PI, devendo:

1. identificar somente as partes necessárias do sistema de referência;
2. gerar ou adaptar a arquitetura Next.js dentro do ambiente sanitizado;
3. eliminar integrações com ambientes reais;
4. substituir fontes externas por dados locais fictícios;
5. remover informações específicas do cliente;
6. revisar código, assets, histórico documental e configurações em busca de vazamentos;
7. validar que o projeto acadêmico funciona de maneira independente.

A sanitização deve ser revisada antes de qualquer material ser utilizado academicamente.

O objetivo do protótipo é reproduzir a experiência analítica da solução sem reproduzir o ambiente de dados real.

## Critérios de Sucesso e Aceitação

**Pendente.** Dependem dos critérios oficiais da disciplina e das definições do grupo.

## Ponto de Partida

O projeto encontra-se em fase inicial de contextualização acadêmica. O repositório contém o scaffolding padrão da equipe e este registro de contexto.

Nada além de documentação de contexto foi produzido até aqui.

## Próxima Instrução para o Agente

Aguardar o envio dos documentos oficiais da UNIVESP e das orientações da disciplina. Analisá-los como fonte normativa antes de estruturar tema, problema, objetivo, metodologia, etapas, entregáveis ou cronograma.

Até lá: não implementar, não inferir decisões pendentes, não commitar e apresentar qualquer alteração para revisão humana.
