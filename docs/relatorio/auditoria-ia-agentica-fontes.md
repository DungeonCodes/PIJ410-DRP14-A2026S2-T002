# Auditoria bibliográfica — IA agêntica

Data original: 9 out. 2026. Revisão: 10 out. 2026. Escopo: fundamentação de 2.3.7 e descrição do uso em 2.5.12 do Relatório Final do PIJ410. A pesquisa não reavalia os resultados do experimento de CPR nem transforma saída de agente em evidência científica.

## Objetivo

Selecionar fontes primárias para explicar agentes baseados em modelos de linguagem, planejamento, ferramentas, requisitos, contexto, verificação e supervisão humana, distinguindo conceitos científicos de rótulos recentes da prática profissional.

Na revisão de 10 out. 2026, o objetivo passou a ser também **assumir explicitamente** as práticas de engenharia efetivamente usadas no projeto — *scaffolding*, desenvolvimento orientado por especificações, organização estruturada do contexto, decomposição, verificação iterativa e supervisão humana — sem classificá-las como metodologias científicas autônomas quando a literatura não sustenta isso.

## Estratégia de busca

Busca web em páginas originais de ACL Anthology, ICLR, NeurIPS, COLM, ACM/CHI, ACM/FSE, periódicos e repositórios dos autores. Conferência de título, autoria, ano, veículo, páginas e DOI nas páginas dos editores, no Crossref e nos PDFs publicados. arXiv foi usado para versões finais de ReAct (ICLR 2023) e STOP (COLM 2024), cujos anais não emitem DOI, e para um preprint citado apenas como registro terminológico. Páginas de fornecedores foram examinadas apenas para classificar vocabulário operacional.

## Termos pesquisados

9 out. 2026: `LLM agents human in the loop`; `large language model agents human oversight`; `LLM agent task decomposition`; `LLM agent planning tool use`; `LLM agent scaffolding`; `scaffolding large language models`; `agentic software engineering`; `LLM software engineering agents`; `specification driven development LLM`; `specification guided code generation`; `requirements driven code generation LLM`; `context engineering LLM agents`; `context management language model agents`; `LLM output verification`; `LLM agent evaluation reliability`; `LLM agents testing software`; `human AI collaboration software engineering`; `agentes LLM supervisão humana`; `desenvolvimento orientado por especificações IA`.

10 out. 2026: `scaffolding program language model`; `agent scaffold definition peer-reviewed`; `spec-driven development LLM coding agents`; `structured spec-driven engineering`; `survey of context engineering for large language models`; `Wood Bruner Ross 1976 scaffolding`.

## Fontes consultadas

“Usar” significa uso restrito ao conceito indicado, nunca atribuição do método ou do resultado de outro trabalho ao PI. Qualidade A: pesquisa revisada por pares; B: documento técnico oficial ou preprint para contexto; C: inadequada à fundamentação principal.

| Fonte original | Tipo | Conceito sustentado | Qualidade | Usar no relatório? |
|---|---|---|---|---|
| [Wang *et al.* (2024)](https://doi.org/10.1007/s11704-024-40231-1) | Survey em periódico | Componentes e desafios de agentes LLM | A | Sim; já constava |
| [Yao *et al.* (2023), ReAct](https://arxiv.org/abs/2210.03629) | Conferência ICLR; versão final dos autores | Planejamento intercalado com ações e fontes externas | A | Sim |
| [Yang *et al.* (2024), SWE-agent](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5a7c947568c1b1328ccc5230172e1e7c-Abstract-Conference.html) | Conferência NeurIPS | Navegação, edição e teste em repositórios | A | Sim |
| [Han *et al.* (2024), ArchCode](https://aclanthology.org/2024.acl-long.730/) | Conferência ACL | Requisitos explícitos e casos de teste na geração | A | Sim |
| [Liu *et al.* (2024), Lost in the Middle](https://aclanthology.org/2024.tacl-1.9/) | Artigo TACL | Limites no uso de contexto longo | A | Sim |
| [Kamoi *et al.* (2024)](https://aclanthology.org/2024.tacl-1.78/) | Survey crítico TACL | Limites da autocorreção; feedback externo | A | Sim |
| [Amershi *et al.* (2019)](https://doi.org/10.1145/3290605.3300233) | Conferência CHI/ACM | Avaliação, correção e controle na interação humano–IA | A | Sim |
| [Zelikman *et al.* (2024), STOP](https://arxiv.org/abs/2310.02304) | Conferência COLM; versão publicada | Definição de *scaffolding* em LLMs: programa, em geral escrito por pessoas, que estrutura chamadas sucessivas ao modelo | A | **Sim (10 out.)** |
| [Feng *et al.* (2026)](https://doi.org/10.1145/3803437.3805567) | ACM FSE Companion '26, p. 1257-1261 | *Spec-driven engineering*: especificações estruturadas orientam a geração e tornam a saída mais verificável; estudo piloto | A (artigo curto) | **Sim (10 out.)** |
| [Mei *et al.* (2025)](https://doi.org/10.48550/arXiv.2507.13334) | Preprint arXiv | Terminologia *context engineering*: recuperação, processamento e gerenciamento do contexto | B | **Sim, só terminologia, com ressalva (10 out.)** |
| [Wood, Bruner e Ross (1976)](https://doi.org/10.1111/j.1469-7610.1976.tb00381.x) | Periódico (J. Child Psychol. Psychiatry) | Origem pedagógica de *scaffolding* | A | Não; texto integral não consultado nesta revisão e a origem pedagógica não é necessária ao argumento |
| [Piskala (2026)](https://arxiv.org/abs/2602.00180) | Preprint submetido a AIWare 2026 | Guia de *spec-driven development* para praticantes | B | Não; Feng cobre o termo em veículo revisado |
| [Lin *et al.* (2025), scaffolded LMs](https://arxiv.org/abs/2410.16392) | Preprint (survey) | LMs integrados a processos multietapas com ferramentas | B | Não; Zelikman cobre a definição com publicação final |
| [Jimenez *et al.* (2024), SWE-bench](https://proceedings.iclr.cc/paper_files/paper/2024/hash/edac78c3e300629acfe6cbe9ca88fb84-Abstract-Conference.html) | Conferência ICLR | Avaliação de tarefas em repositórios reais | A | Não; Yang cobre o recorte necessário |
| [AgentBench (2024)](https://proceedings.iclr.cc/paper_files/paper/2024/hash/e9df36b21ff4ee211a8b71ee8b7e9f57-Abstract-Conference.html) | Conferência ICLR | Limitações de avaliação de agentes | A | Não; Wang e Yang bastam |
| [Park *et al.* (2023)](https://doi.org/10.1145/3586183.3606763) | Conferência ACM UIST | Memória e planejamento em simulação social | A | Não; domínio distinto |
| [RaDA (2024)](https://aclanthology.org/2024.findings-acl.802/) | Conferência ACL Findings | Planejamento com recuperação de informação | A | Não; recorte específico de agente web |
| [GOAT (2026)](https://aclanthology.org/2026.findings-acl.1150/) | Conferência ACL Findings | Decomposição e chamadas de API | A | Não; Yao e Zelikman cobrem o recorte |
| [GitHub Spec Kit](https://github.com/github/spec-kit/blob/main/docs/index.md) | Documentação oficial de ferramenta | Vocabulário *spec-driven development* | B | Não; comprova uso industrial do termo, não teoria |
| [Anthropic, Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Documentação técnica de fornecedor | Vocabulário *context engineering* | B | Não; material de fornecedor, não sustenta eficácia |

Não foram utilizadas páginas de busca, agregadores ou publicidade como fonte científica. A seleção emprega paráfrases próprias, sem citação direta.

## Classificação dos termos (revisão de 10 out. 2026)

| Termo | Uso no projeto | Status acadêmico/profissional | Forma permitida no relatório |
|---|---|---|---|
| *LLM agents* | Agentes apoiaram leitura do repositório, programação, testes, auditoria e revisão | BEM SUSTENTADO (campo em evolução) | “agentes de inteligência artificial baseados em modelos de linguagem”, com definição operacional (Wang; Yao; Yang) |
| *Human-in-the-loop* | Pessoas inspecionaram, aceitaram, ajustaram ou rejeitaram cada saída e decidiram arquitetura, método e conclusões | CONSOLIDADO (interação humano–IA) | “supervisão humana no ciclo (*human-in-the-loop*)” (Amershi; Kamoi) |
| *Scaffolding* | Tarefas estruturadas em etapas, com contexto, restrições, suportes intermediários e pontos de verificação | BEM SUSTENTADO como termo em LLMs (Zelikman, COLM); polissêmico na literatura de agentes | Prática de engenharia; definição atribuída à fonte e extensão ao PI declarada como do grupo; nem toda decomposição é *scaffolding* |
| *Spec-driven development* | Requisitos, decisões, critérios de aceitação, regras operacionais e especificações de feedback guiaram e verificaram o trabalho | PROFISSIONAL/INDUSTRIAL com entrada acadêmica EMERGENTE (Feng, FSE Companion 2026; Han para requisitos e testes) | “desenvolvimento orientado por especificações”, prática “denominada *spec-driven development* em contextos recentes”; não metodologia científica |
| *Context engineering* | Seleção deliberada de documentos canônicos, restrições, histórico relevante e exclusão de dados reais/pessoais | EMERGENTE (preprint Mei; uso industrial) | “organização estruturada do contexto”, prática “descrita como *context engineering*”; efeito do contexto apoiado em Liu |
| *Task decomposition* | Tarefas extensas divididas em etapas verificáveis | BEM SUSTENTADO como componente de planejamento de agentes (Wang; Yao) | “decomposição de tarefas” em linguagem comum |
| *Verification workflow* | Inspeção, testes automatizados, verificadores de reprodução e auditorias, com correção iterativa | Prática BEM SUSTENTADA (feedback externo: Kamoi; testes: Han; Yang); nome próprio INSUFICIENTE | Descrição do fluxo; sem nome como *verification-driven development* |

## Conceitos

### Agentes baseados em LLM

Wang *et al.* organizam componentes como planejamento, memória e ação. ReAct ilustra a interação entre etapas de raciocínio e ações em fontes externas. Trata-se de uma classe de sistemas com arquiteturas diversas; o PI não declara ter implementado ReAct ou qualquer arquitetura publicada.

### Planejamento e uso de ferramentas

Yao *et al.* sustentam a articulação de planejamento e ação. Yang *et al.* mostram operações de navegação, edição e teste em repositórios. O relatório usa essas obras para explicar capacidades da classe de ferramentas, sem transferir resultados de benchmark ao projeto.

### Human-in-the-loop

A literatura de interação humano–IA, especialmente Amershi *et al.*, sustenta mecanismos de avaliação e correção. No PI, responsabilidade humana por arquitetura, método, escolha de modelos, decisões sobre feedbacks, aceitação de alterações e conclusões é evidência interna do processo, não resultado experimental provado por Amershi. Desde 10 out. 2026 o relatório usa o rótulo *human-in-the-loop* explicitamente.

### Scaffolding

Zelikman *et al.* (COLM 2024) chamam de *scaffolding* o programa, em geral escrito por pessoas, que estrutura múltiplas chamadas a um modelo de linguagem para obter melhores saídas; citam raciocínio por etapas, acesso a interpretador/ferramentas e o próprio ReAct como exemplos, e avaliam soluções por função de utilidade. O relatório usa essa definição e declara como extensão do grupo a aplicação ao fluxo do PI: estruturação de tarefa complexa em etapas, com contexto, restrições, suportes intermediários e pontos de verificação. A redação ressalva que dividir uma tarefa não basta para caracterizar *scaffolding*. A revisão de 9 out. evitava o termo por polissemia; a fonte publicada localizada em 10 out. permite assumi-lo com delimitação.

### Desenvolvimento orientado por especificações

Han *et al.* fornecem suporte acadêmico à conexão entre requisitos explícitos, geração de código e testes. Feng *et al.* (FSE Companion 2026) registram *spec-driven engineering* em veículo revisado de engenharia de software — especificações estruturadas orientando a geração e tornando a saída verificável — e atribuem a origem do rótulo a material de divulgação industrial. O estudo é piloto, com resultados variáveis e intervenção humana ainda necessária. O relatório assume a prática e o nome como prática de engenharia, sem alegar eficácia nem metodologia científica padronizada. O PI não afirma usar Spec Kit, SSDE ou ArchCode.

### Organização de contexto

Liu *et al.* observam perda de desempenho em tarefas determinadas quando informação relevante aparece no meio de entradas longas. Isso justifica a seleção deliberada do contexto, sem provar que a organização adotada pelo PI melhorou quantitativamente o agente. Mei *et al.* propõem sistematizar *context engineering* (recuperação, processamento e gerenciamento do contexto), mas em preprint não revisado; o relatório usa a obra apenas para o termo e explicita essa condição.

### Verificação e confiabilidade

Kamoi *et al.* distinguem autocorreção baseada só em resposta do LLM de correção apoiada por feedback externo confiável. Han *et al.* exemplificam testes associados a requisitos. Inspeção de diffs, testes, verificadores e revisão humana do PI são procedimentos internos; sua existência não implica ausência de erro. O fluxo não recebe o nome formal de *verification-driven development*.

### Agentes em engenharia de software

Yang *et al.* e o benchmark SWE-bench contextualizam operações e avaliação em repositórios. O resultado do SWE-agent não mede qualidade, eficácia ou autonomia dos agentes usados no PI.

## Relação com o PI

| Prática do projeto | Conceito relacionado | Fonte externa | Evidência interna | Limite da associação |
|---|---|---|---|---|
| Especificação da tarefa (objetivo, escopo, entradas, saídas, restrições, critério de sucesso) | Desenvolvimento orientado por especificações | Han; Feng | `docs/agent_rules.md`, `docs/decisions.md`, `docs/validacao/feedback-v2-v3.md`, `docs/validacao/v3-dados-sinteticos.md` | Não se adotou ArchCode, SSDE nem Spec Kit |
| Seleção de documentos canônicos, restrições e exclusão de dados reais/pessoais | Organização estruturada do contexto | Liu; Mei (termo) | `docs/master_context.md`, `docs/agent_rules.md`, `docs/run_log.md` | Não houve experimento isolando o efeito do contexto |
| Etapas, suportes intermediários e pontos de verificação | *Scaffolding* e decomposição | Zelikman; Wang; Yao | Registros de execução por etapa em `docs/run_log.md` | Extensão do termo ao PI é do grupo; arquitetura interna dos agentes não verificada |
| Leitura, edição e testes no repositório | Agentes em engenharia de software | Yang | Scripts em `scripts/`, `npm test` | Benchmark externo não valida o PI |
| Inspeção, testes, verificadores de reprodução e auditorias, com correção iterativa | Feedback externo | Kamoi; Han | `ml:google-cpr:verificar`, `ml:google-cpr:sazonal:verificar`, `test:nao-vazamento`, auditorias em `docs/relatorio/` | Verificação não garante correção integral |
| Aceitar, ajustar ou rejeitar saídas | *Human-in-the-loop* | Amershi | Decisões em `docs/decisions.md` | Diretrizes gerais, não avaliação do grupo |
| Regressão linear e baselines para CPR | Aprendizado supervisionado distinto de agente | Documentação experimental do projeto | 2.5.11 e 3.4.4 | Nenhuma previsão foi atribuída ao LLM; agente não validou matematicamente o modelo |

Saída de agente não foi tratada como evidência empírica independente. Nomes comerciais das ferramentas (Antigravity; agentes baseados em Codex/GPT-6.1 Sol) ficam em `docs/run_log.md`, fora do corpo científico.

## Limites

- Os nomes *scaffolding*, *spec-driven development* e *context engineering* descrevem práticas efetivamente usadas; não designam metodologia científica autônoma, padronizada ou validada pelo PI.
- Nenhum resultado quantitativo das fontes (STOP, SSDE, Lost in the Middle, SWE-agent) é transferido ao projeto.
- Mei *et al.* é preprint: sustenta apenas a existência e o sentido do termo.
- Feng *et al.* é estudo piloto em artigo curto: sustenta o termo em veículo revisado, não a superioridade de especificações estruturadas.
- Agentes não tomaram decisões finais, não produziram previsões de CPR e não validaram cientificamente o experimento de aprendizagem de máquina.

## Fontes selecionadas

9 out. 2026: Amershi *et al.* (2019), Han *et al.* (2024), Kamoi *et al.* (2024), Liu *et al.* (2024), Yang *et al.* (2024) e Yao *et al.* (2023); Wang *et al.* (2024) já constava. 19 + 6 = 25.

10 out. 2026: Zelikman *et al.* (2024), Feng *et al.* (2026) e Mei *et al.* (2025). 25 + 3 = **28**, todas citadas no relatório. Metadados de Feng (páginas, DOI, evento) e Wood/Bruner/Ross conferidos no Crossref; STOP conferido no PDF publicado (cabeçalho “Published as a conference paper at COLM 2024”). Metadados completos em `docs/relatorio/final.md` e `docs/referencias.md`; recortes em `docs/fichamentos_bibliograficos.md` e sínteses em `docs/resumos_obras_bibliograficas.md`. Nenhum DOI, página de citação direta, dado de desempenho ou fonte original foi inferido sem documentação.
