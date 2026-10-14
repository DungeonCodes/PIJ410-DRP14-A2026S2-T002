import { PageHeader } from '@/components/metric-card';

const secoes = [
  ['Stack e acesso', 'Next.js, React e TypeScript apresentam módulos em rotas versionadas. A navegação e os gates usam um catálogo central. V1, V2 e V3 conservam suas composições históricas; Fases 3 e 4 são acessíveis apenas em V4. Nenhuma rota consulta API institucional.'],
  ['Fontes e separação', 'Captação, Matrículas e Ads usam bases sintéticas locais. Reels orgânicos são gerados por semente declarada; Objetivo da Gestão usa premissas fictícias independentes. O experimento de CPR lê artefatos locais já produzidos pela linha de comando. Não existe chave que permita atribuir matrículas a anúncios ou publicações.'],
  ['Cálculos determinísticos', 'As taxas são calculadas a partir de numerador e denominador do mesmo recorte. Divisão por zero ou ausência de medição produz indisponibilidade, enquanto zero observado permanece zero. O ranking orgânico usa pesos declarados, referências fictícias e desempate total. O plano de ocupação multiplica vagas hipotéticas por taxa alvo e soma resultados por linha.'],
  ['Experimento separado', 'O CPR experimental não treina modelos no navegador. Os resultados existentes permanecem limitados e não autorizam investimento automático. A apresentação de V4 herda esse artefato sem alterar modelo, previsão ou métricas.'],
  ['Verificação e limites', 'Testes offline cobrem regras, determinismo, gates, bloqueios históricos e reprodução dos artefatos. Os dados são fictícios, não há integração operacional e a V4 ainda não foi avaliada pela comunidade. Esta página descreve a solução acadêmica, não uma arquitetura implantada na instituição.'],
] as const;

export default function ArquiteturaV4() {
  return <div className="space-y-6">
    <PageHeader kicker="V4 · Fase 4 · documentação da solução" titulo="Arquitetura & Algoritmos" descricao="Como as fontes, os cálculos e os controles da aplicação acadêmica se relacionam. Esta descrição completa a documentação funcional planejada para a Fase 4." />
    {secoes.map(([titulo, descricao]) => <section key={titulo} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"><h2 className="text-lg font-semibold">{titulo}</h2><p className="mt-2 max-w-4xl text-sm leading-6 text-[var(--text-muted)]">{descricao}</p></section>)}
  </div>;
}
