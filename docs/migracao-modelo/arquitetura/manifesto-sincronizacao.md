# Manifesto de sincronização estrutural

**Situação: PLANEJADO. Nada disto foi implementado nesta rodada — e por decisão.**

Um sincronizador construído antes da governança é um canal de transporte sem filtro: exatamente
o risco que o resto do plano existe para evitar. A ordem é governança → estrutura → feature gate
→ Fase 1 → **só então** o sincronizador.

## O problema que ele resolverá

A arquitetura de referência continua evoluindo. Quando um módulo ganha uma seção, um filtro ou
uma regra de apresentação nova, o projeto acadêmico deveria poder acompanhar essa evolução —
sem que alguém tenha de reler os dois repositórios lado a lado e reproduzir a diferença à mão.

## Direção

```text
ORIGINAL  ─────────►  ACADÊMICO
          unidirecional
```

**Nunca o contrário.** O repositório acadêmico não é fonte para o operacional: uma correção
feita aqui, se for relevante lá, é reimplementada lá — não empurrada de volta. Um caminho de
volta transformaria o repositório público em vetor de mudança do ambiente real.

## Pipeline pretendido

```text
ORIGINAL
   ↓
diff estrutural            o que mudou desde a última sincronização
   ↓
classificação              cada arquivo recebe COPY_AS_STRUCTURE | SANITIZE
                           | SYNTHETIC_REBUILD | BLOCK  (matriz-classificacao.md)
   ↓
filtro                     só COPY_AS_STRUCTURE e SANITIZE seguem adiante
   ↓
adaptação acadêmica        identidade neutra, remoção de integrações,
                           remoção de referências ao ambiente real
   ↓
dados sintéticos           o que era dataset vira geração determinística
   ↓
testes                     fases · determinismo · não vazamento · integridade docs
   ↓
REVISÃO HUMANA             obrigatória, sempre, antes de qualquer commit
   ↓
ACADÊMICO
```

## As quatro dimensões que ele terá de distinguir

Um sincronizador que trate tudo como "arquivo" é inútil e perigoso. Ele precisa separar:

| Dimensão | Tratamento na sincronização |
|---|---|
| **Estrutura** | é o que se sincroniza: rotas, composição, componentes, regras de apresentação |
| **Dados** | nunca atravessa. Mudança de *esquema* vira tarefa de regerar o cenário sintético |
| **Configuração** | atravessa só quando estrutural (build, lint). Configuração de ambiente, nunca |
| **Segredos** | jamais tocados, jamais lidos, jamais listados |
| **Documentação** | a científica é intocável; a de migração é atualizada por decisão humana |

## Restrições inegociáveis do futuro sincronizador

1. **Sem `--apply` automático.** A saída máxima é um relatório de diferenças com classificação
   proposta. Aplicar é ato humano.
2. **Sem cópia recursiva.** Nada de `cp -r src/`. Cada arquivo é decidido individualmente.
3. **Incapaz de transportar dataset ou segredo.** Não por convenção: por construção. As
   extensões e os caminhos da categoria `BLOCK` não devem sequer ser legíveis pelo processo.
4. **Escrita apenas no repositório acadêmico.** O processo não pode ter caminho de escrita para
   o original — nem para editar, nem para criar, nem para commitar.
5. **Falha fechada.** Arquivo que não se classifica com segurança é `BLOCK` e entra no relatório
   como pendência humana.
6. **Toda execução deixa rastro** do que foi comparado, classificado e proposto.

## Pré-condições para começar a construí-lo

- [ ] Fases 1 a 4 entregues — sem elas não há estrutura estável o suficiente para valer a pena
- [ ] Matriz de classificação exercitada em campo, não só no papel
- [ ] Varredura de não vazamento cobrindo os módulos das fases 2 a 4
- [ ] Decisão do grupo sobre a cadência de sincronização
- [ ] ADR própria (`ADR-A00x`) registrando o desenho final antes da primeira linha de código
