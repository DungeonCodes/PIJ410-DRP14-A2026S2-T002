# Protocolo de evidências e anonimização

## Antes da sessão

- Confirmar que a demonstração utiliza apenas o ambiente acadêmico e dados sintéticos.
- Primeira sessão: apresentar somente V1; conferir o identificador visual e não alternar para V2.
- Registrar versão, dataset/seed, período, filtros e módulos; manter os mesmos controles em comparações futuras.
- Obter o TCLE antes da demonstração/coleta; não iniciar sem consentimento.
- Versão da interface: V1. Cenário: dados sintéticos; valores não representam operação real,
  não há Google Ads/Meta reais e orçamento é premissa acadêmica.
- Escopo: tarefas A–K das Fases 1 e 2; Fases 3 e 4 bloqueadas, V2 não apresentada.
- Informar que a participação é voluntária e pode ser interrompida a qualquer momento.
- Explicar que somente dados pertinentes ao estudo serão utilizados e que respostas serão consolidadas e anonimizadas no relatório.

## Evidências que podem ser registradas

- data da sessão;
- perfil genérico do participante;
- modalidade da sessão;
- módulos apresentados;
- versão da interface utilizada, cenário/seed e recortes, sem dados pessoais;
- tarefas A–K realizadas ou não realizadas, conclusão sem ajuda, ajuda necessária e dificuldades;
- filtros/período antes e depois da alteração;
- resposta espontânea CPR (5) antes do esclarecimento e avaliação posterior (6);
- interpretação espontânea das capacidades/limitações ML (10), antes de explicar;
- tipo/momento da ajuda, distinguindo fala do participante e intervenção do aplicador;
- respostas consolidadas;
- comentários anonimizados;
- observações do pesquisador;
- captura de tela da interface sem identificação pessoal;
- indicação `TCLE obtido: SIM`.

## Materiais que não devem ser versionados no Git

Não incluir no repositório:

- CPF, RG, telefone ou endereço;
- assinatura ou imagem de assinatura;
- nome completo de participante;
- foto pessoal sem necessidade e autorização;
- TCLE preenchido com dados pessoais;
- gravação bruta que identifique participantes;
- dados reais de CRM, Google Ads, Meta Ads, sistemas acadêmicos ou outras bases operacionais.

Se o TCLE preenchido precisar ser preservado, mantê-lo fora do Git, em armazenamento restrito. No repositório, registrar somente a condição de obtenção do consentimento, sem elementos identificadores.

## Separação entre evidência e interpretação

### Evidência direta

Registrar o que o participante efetivamente disse ou fez durante a sessão, sem alterar o sentido. Caso uma fala seja citada futuramente, usar somente trecho breve e anonimizado.

### Interpretação do grupo

Registrar em campo separado a análise posterior da equipe sobre os dados coletados. Essa interpretação não deve ser apresentada como fala ou conclusão do participante.

## Matriz para análise posterior: antes e depois

Os recortes técnicos detalham necessidades iniciais, não novas falas atribuídas à comunidade.
Preencher agora somente as duas primeiras colunas; não propor melhorias por análise do agente.

| Necessidade inicial | V1 apresentada | Evidência de uso | Avaliação P1/P2 | Alteração proposta | V2 |
|---|---|---|---|---|---|
| Acompanhamento de indicadores | Captação, Matrículas e indicadores Ads | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Comparação de resultados | Filtros/visualizações Fase 1 e Google Ads | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Compreensão dos investimentos | Visão Geral de Ads | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Comparação entre canais | Distribuição Google/Social com resultados distintos | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Interpretação do Google Ads | Investimento, conversões e filtros Google | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Interpretação do CPR | CPR e sua explicação na interface | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Custos por tipo de resultado | Conversas/interações Meta separadas | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Orçamento e gasto | Premissa sintética, gasto e saldo em Estratégia | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Apoio à tomada de decisão | Módulos das Fases 1 e 2 e Estratégia determinística | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |
| Clareza das informações | Interface e apresentação das limitações CPR/ML | [PENDENTE] | [PENDENTE] | [PENDENTE] | [PENDENTE] |

P1/P2 são identificadores reservados para sessões reais, não respostas existentes.
Compreensão após esclarecimento não substitui evidência anterior; ajuda e tarefas omitidas
são limitações. Opinião de utilidade não comprova impacto, causalidade ou eficácia real.
A matriz de perguntas/tarefas está em `instrumento_validacao.md`.
V2 e changelog permanecem sem alterações de feedback até coleta/análise real e decisão.
