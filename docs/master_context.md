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

Desde **27/08/2026**, o repositório inclui uma aplicação acadêmica própria em **Next.js +
TypeScript**, independente e baseada em dados sintéticos. A disponibilização é incremental: a
Fase 1 contém Captação e Matrículas; fases posteriores permanecem bloqueadas por feature gate.
O ambiente acadêmico sanitizado da Fase 1 está funcional e publicado na Vercel; a publicação
disponibiliza somente esses dois módulos e não implica ativação das fases posteriores.
Uma arquitetura externa pode ser referência apenas conceitual e estrutural; a aplicação acadêmica
não depende dela em runtime nem recebe seus dados, arquivos, integrações ou credenciais. Ver
`docs/decisions.md` (ADR-006) e `docs/migracao-modelo/arquitetura/ADR-A001-espelhamento-dados-sinteticos-rollout.md`.

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

O escopo substantivo do PI continua **pendente** de validação com a comunidade externa. Como
baseline técnico, a aplicação acadêmica demonstra somente Captação e Matrículas por meio de
visualizações e relatórios de dados sintéticos; sua finalidade é demonstrativa e analítica, não
operacional. O scaffolding científico existente permanece preservado.

## Fora de Escopo

Confirmado para o estado atual do projeto:

* Implementar funcionalidades, arquitetura ou código fora do rollout autorizado e versionado.
* Reorganizar o scaffolding existente ou criar uma nova arquitetura documental.
* Definir prematuramente decisões de projeto ou preencher lacunas por inferência.
* Criar ADRs para informações ainda preliminares.
* Executar agora a geração da versão sanitizada do sistema de referência.
* Fabricar entrevistas, respostas, avaliações ou evidências.
* Expor dados sensíveis da instituição parceira (ver Restrições e Guardrails).

Confirmado para a aplicação acadêmica — a Fase 1 não usa, e as fases futuras **não deverão usar**,
conexões reais com:

* APIs de anúncios;
* Google Sheets;
* CRM;
* sistemas acadêmicos;
* bancos de dados da instituição;
* contas de publicidade.

## Entradas

Já estão disponíveis no repositório:

* documentos oficiais da UNIVESP e orientações da disciplina, como fontes normativas;
* Plano de Ação;
* decisões do grupo e planejamento;
* governança da arquitetura acadêmica e estratégia de sanitização;
* baseline funcional da Fase 1 com dados sintéticos.

Continuam pendentes de produção ou confirmação: definição final do problema e dos objetivos,
registros adicionais das interações com stakeholders e evidências de aplicação e validação.

Dados da aplicação acadêmica: a Fase 1 usa JSONs locais inteiramente sintéticos. Fases futuras
deverão manter a mesma política, com fixtures, mocks ou dados fictícios coerentes com os cenários
demonstrados, sem derivação de valores operacionais.

## Saídas Esperadas

O formato dos relatórios e o fluxo de geração dos artefatos acadêmicos seguem os documentos oficiais
da UNIVESP e a ADR-001. O conteúdo definitivo das entregas permanece condicionado às decisões do
grupo e às atividades efetivamente realizadas.

Saída técnica existente desde 27/08/2026: ambiente acadêmico sanitizado e independente, com a Fase
1 funcional. A definição dos demais entregáveis acadêmicos permanece pendente.

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
* Confirmado pelo grupo em 26 ago. 2026 e atualizado pela baseline de 27 ago. 2026: código, dados
  autorizados, treinamento, testes e relatório técnico detalhado de aprendizagem de máquina
  permanecerão fora do ambiente acadêmico. Este repositório mantém a documentação e uma interface
  web acadêmica independente, cuja Fase 1 demonstra Captação e Matrículas com dados sintéticos. Não
  serão copiados para cá dados reais, artefatos de modelo, credenciais nem código operacional.
* Confirmado pelo grupo em 26 ago. 2026: o núcleo analítico terá três camadas distintas. A
  primeira produzirá indicadores por algoritmos determinísticos, com parâmetros e resultados
  conferíveis. A segunda preparará dados históricos e treinará e avaliará ao menos um modelo
  supervisionado de aprendizagem de máquina para estimar uma variável de desempenho de campanhas.
  A terceira será uma IA agêntica acionada via CLI, que poderá apoiar a organização, a execução e a
  interpretação de cenários de simulação, mas não substituirá o cálculo determinístico, o modelo
  de aprendizagem de máquina, a revisão humana, a evidência empírica nem a validação junto à
  comunidade externa. Somente dados fictícios ou sanitizados poderão ser enviados aos ambientes de
  IA agêntica. A engenharia de memória/contexto reunirá apenas documentos versionados, fórmulas,
  resultados calculados ou estimados e referências verificadas. Toda interpretação assistida deverá
  apontar sua base factual e calculável; respostas que não possam ser rastreadas até esses elementos
  não devem ser utilizadas. No processo de produção documental, os agentes poderão apoiar consulta,
  organização e revisão sob contexto controlado; seleção de conteúdo, validação de fontes e
  aprovação de versões permanecem sob responsabilidade do grupo.
* A UNIVESP utiliza metodologia própria para condução do PI, com indicação de uso de Design
  Thinking. Os materiais oficiais presentes no repositório têm precedência sobre interpretações
  preliminares.
* O planejamento de etapas, entregáveis, cronograma e relatório está documentado. Entrevistas,
  aplicações, feedbacks e validações só podem ser registrados como resultados depois de ocorrerem.

Processo permanente para qualquer adaptação acadêmica adicional; a Fase 1 já disponível não
autoriza a abertura automática das etapas seguintes:

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

O projeto preserva o scaffolding científico e, desde 27/08/2026, possui uma baseline técnica de
aplicação acadêmica independente. A Fase 1 disponibiliza Captação e Matrículas com dados
sintéticos; módulos posteriores podem estar preparados no código, mas não estão disponíveis até
liberação humana explícita e versionada.

## Próxima Instrução para o Agente

Aguardar e analisar materiais normativos e evidências da comunidade externa antes de fechar tema,
problema, objetivo, metodologia, etapas, entregáveis ou cronograma. Não inferir decisões pendentes,
não abrir fases automaticamente, não introduzir dados reais e apresentar toda alteração para revisão
humana antes de commit.
