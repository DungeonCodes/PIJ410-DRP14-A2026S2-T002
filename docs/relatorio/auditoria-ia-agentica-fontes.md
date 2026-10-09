# Auditoria bibliográfica — IA agêntica

Data: 9 out. 2026. Escopo: fundamentação de 2.3.7 e descrição do uso em 2.5.12 do Relatório Final do PIJ410. A pesquisa não reavalia os resultados do experimento de CPR nem transforma saída de agente em evidência científica.

## Objetivo

Selecionar fontes primárias para explicar agentes baseados em modelos de linguagem, planejamento, ferramentas, requisitos, contexto, verificação e supervisão humana, distinguindo conceitos científicos de rótulos recentes da prática profissional.

## Estratégia de busca

Busca web em páginas originais de ACL Anthology, ICLR, NeurIPS, ACM/CHI, periódicos e repositórios dos autores. Conferência de título, autoria, ano, veículo, páginas e DOI nas páginas dos editores e nos PDFs publicados. arXiv foi usado para a versão final de ReAct identificada como artigo de ICLR 2023. Páginas de fornecedores foram examinadas apenas para classificar vocabulário operacional. Foram triadas aproximadamente 20 fontes distintas; a seleção incorporou seis fontes ao Relatório Final, além de Wang *et al.* (2024), já citado. Liu *et al.* (2024) já integrava o catálogo do projeto como candidata, mas passou a integrar o relatório nesta revisão.

## Termos pesquisados

`LLM agents human in the loop`; `large language model agents human oversight`; `LLM agent task decomposition`; `LLM agent planning tool use`; `LLM agent scaffolding`; `scaffolding large language models`; `agentic software engineering`; `LLM software engineering agents`; `specification driven development LLM`; `specification guided code generation`; `requirements driven code generation LLM`; `context engineering LLM agents`; `context management language model agents`; `LLM output verification`; `LLM agent evaluation reliability`; `LLM agents testing software`; `human AI collaboration software engineering`; `agentes LLM supervisão humana`; `desenvolvimento orientado por especificações IA`.

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
| [Amershi *et al.* (2019)](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/) | Conferência CHI/ACM | Avaliação, correção e controle na interação humano–IA | A | Sim |
| [Jimenez *et al.* (2024), SWE-bench](https://proceedings.iclr.cc/paper_files/paper/2024/hash/edac78c3e300629acfe6cbe9ca88fb84-Abstract-Conference.html) | Conferência ICLR | Avaliação de tarefas em repositórios reais | A | Não; Yang cobre o recorte necessário |
| [AgentBench (2024)](https://proceedings.iclr.cc/paper_files/paper/2024/hash/e9df36b21ff4ee211a8b71ee8b7e9f57-Abstract-Conference.html) | Conferência ICLR | Limitações de avaliação de agentes | A | Não; Wang e Yang bastam |
| [Park *et al.* (2023)](https://doi.org/10.1145/3586183.3606763) | Conferência ACM UIST | Memória e planejamento em simulação social | A | Não; domínio distinto |
| [RaDA (2024)](https://aclanthology.org/2024.findings-acl.802/) | Conferência ACL Findings | Planejamento com recuperação de informação | A | Não; recorte específico de agente web |
| [GOAT (2026)](https://aclanthology.org/2026.findings-acl.1150/) | Conferência ACL Findings | Decomposição e chamadas de API | A | Não; Yao cobre o recorte sem ampliar bibliografia |
| [GitHub Spec Kit](https://github.com/github/spec-kit/blob/main/docs/index.md) | Documentação oficial de ferramenta | Vocabulário *spec-driven development* | B | Não; comprova uso do termo na indústria, não teoria |
| [Anthropic, Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Documentação técnica de fornecedor | Vocabulário *context engineering* | B | Não; não comprova eficácia científica |
| [Don't Blame the Large Language Model (2026)](https://arxiv.org/abs/2607.03691) | Preprint | Uso recente de *agentic scaffolding* | B | Não; termo ainda variável |

Não foram utilizadas páginas de busca, agregadores ou publicidade como fonte científica. A seleção emprega paráfrases próprias, sem citação direta.

## Conceitos

### Agentes baseados em LLM

Wang *et al.* organizam componentes como planejamento, memória e ação. ReAct ilustra a interação entre etapas de raciocínio e ações em fontes externas. Trata-se de uma classe de sistemas com arquiteturas diversas; o PI não declara ter implementado ReAct ou qualquer arquitetura publicada.

### Planejamento e uso de ferramentas

Yao *et al.* sustentam a articulação de planejamento e ação. Yang *et al.* mostram operações de navegação, edição e teste em repositórios. O relatório usa essas obras para explicar capacidades da classe de ferramentas, sem transferir resultados de benchmark ao projeto.

### Human-in-the-loop

A literatura de interação humano–IA, especialmente Amershi *et al.*, sustenta mecanismos de avaliação e correção. No PI, responsabilidade humana por arquitetura, método, escolha de modelos, aceitação de alterações e conclusões é evidência interna do processo, não resultado experimental provado por Amershi.

### Scaffolding

O termo aparece com sentidos distintos: apoio pedagógico, estrutura de agente, instruções, ferramentas, gerenciamento de estado/contexto e feedback. Um preprint recente usa *agentic scaffolding* para a camada que cerca o modelo; isso não estabelece equivalência com o fluxo específico do PI. A redação final prefere “decomposição de tarefas”, “requisitos” e “organização do contexto”.

### Desenvolvimento orientado por especificações

Han *et al.* fornecem suporte acadêmico à conexão entre requisitos explícitos, geração de código e testes. *Spec-driven development* aparece de modo destacado na documentação de ferramentas recentes, como Spec Kit; não foi tratado como método científico autônomo e o PI não afirma usar esse produto. O relatório descreve a prática verificável de trabalhar com requisitos e critérios registrados.

### Organização de contexto

Liu *et al.* observam perda de desempenho em tarefas determinadas quando informação relevante aparece no meio de entradas longas. Isso justifica cautela com seleção e posição do contexto, sem provar que a organização adotada pelo PI melhorou quantitativamente o agente. *Context engineering* é terminologia profissional e acadêmica emergente, não eixo teórico autônomo no relatório.

### Verificação e confiabilidade

Kamoi *et al.* distinguem autocorreção baseada só em resposta do LLM de correção apoiada por feedback externo confiável. Han *et al.* exemplificam testes associados a requisitos. Inspeção de diffs, testes, verificadores e revisão humana do PI são procedimentos internos; sua existência não implica ausência de erro. O fluxo não recebe o nome formal de *verification-driven development*.

### Agentes em engenharia de software

Yang *et al.* e o benchmark SWE-bench contextualizam operações e avaliação em repositórios. O resultado do SWE-agent não mede qualidade, eficácia ou autonomia dos agentes usados no PI. O relatório cita Yang e preserva apenas a descrição das tarefas efetivamente documentadas internamente.

## Termos não suficientemente consolidados

| Expressão | Classificação nesta auditoria | Tratamento editorial |
|---|---|---|
| *LLM agents* | Bem sustentado; campo ainda em evolução | Usar com definição operacional |
| *Human-in-the-loop* | Consolidado em interação humano–IA | Usar como supervisão e decisão humana, sem prometer infalibilidade |
| *Scaffolding* de agentes | Emergente e polissêmico | Não usar como nome do método do PI |
| *Spec-driven development* | Predominantemente industrial como rótulo atual | Descrever requisitos e critérios; não declarar metodologia científica formal |
| *Context engineering* | Emergente, com difusão industrial | Descrever seleção e organização de contexto |
| *Verification-driven development* | Insuficiente como denominação formal para este fluxo | Descrever inspeção, testes e revisão em linguagem comum |

## Relação com o PI

| Prática do projeto | Conceito relacionado | Fonte externa | Limite da associação |
|---|---|---|---|
| Divisão de tarefas e interação com ferramentas | Planejamento e ação | Yao; Wang | Não se confirmou arquitetura ReAct específica |
| Leitura, edição e testes no repositório | Agentes em engenharia de software | Yang | Benchmark externo não valida o PI |
| Requisitos, decisões e critérios registrados | Desenvolvimento orientado por requisitos | Han | Não se adotou ArchCode nem Spec Kit |
| Seleção de arquivos e restrições para cada tarefa | Organização do contexto | Liu | Não houve experimento isolando efeito do contexto |
| Inspeção, verificadores e testes | Feedback externo | Kamoi; Han | Verificação não garante correção integral |
| Aceitar, ajustar ou rejeitar saídas | Supervisão humana | Amershi | Diretrizes gerais, não avaliação do grupo |
| Regressão linear e baselines para CPR | Aprendizado supervisionado distinto de agente | Documentação experimental do projeto | Nenhuma previsão foi atribuída ao LLM |

Evidências internas: `docs/run_log.md`, `docs/decisions.md`, `docs/relatorio/final.md` (2.5.11, 2.5.12), scripts de verificação do CPR e registros versionados de testes. Saída de agente não foi tratada como evidência empírica independente.

## Fontes selecionadas

Novas na lista final: Amershi *et al.* (2019), Han *et al.* (2024), Kamoi *et al.* (2024), Liu *et al.* (2024), Yang *et al.* (2024) e Yao *et al.* (2023). Wang *et al.* (2024) permanece como fonte previamente aprovada. Metadados completos estão em `docs/relatorio/final.md` e `docs/referencias.md`; os recortes estão em `docs/fichamentos_bibliograficos.md`.

**Controle:** 19 referências anteriores + 6 incorporadas = 25; todas citadas no relatório. Nenhum DOI, página de citação direta, dado de desempenho ou fonte original foi inferido sem documentação.
