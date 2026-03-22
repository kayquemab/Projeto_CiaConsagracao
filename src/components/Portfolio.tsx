import { useScrollReveal } from "@/hooks/useScrollReveal";

const works = [
  { title: "O Silêncio das Marés", year: "2024", category: "Drama Contemporâneo", desc: "Uma investigação sobre memória e pertencimento através de três gerações de mulheres à beira-mar." },
  { title: "Corpo em Trânsito", year: "2023", category: "Performance", desc: "Espetáculo de teatro físico que explora os limites entre dança e narrativa no espaço urbano." },
  { title: "A Última Carta", year: "2022", category: "Teatro Experimental", desc: "Montagem imersiva baseada em correspondências reais encontradas em um antiquário de Lisboa." },
  { title: "Ecos de Hamlet", year: "2021", category: "Releitura Clássica", desc: "Releitura contemporânea do clássico shakespeariano ambientada em uma metrópole distópica." },
  { title: "Fragmentos do Agora", year: "2020", category: "Teatro Documental", desc: "Peça construída a partir de depoimentos reais coletados durante o isolamento social." },
  { title: "Raízes Aéreas", year: "2019", category: "Circo-Teatro", desc: "Espetáculo que mescla técnicas circenses com narrativa poética sobre migração e identidade." },
];

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="trabalhos" className="py-24 md:py-32 section-padding">
      <div className="section-container">
        <div ref={ref} className={`mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Portfólio</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance">
            Nossos trabalhos
          </h2>
          <div className="gold-line mt-6" />
        </div>

        <div ref={gridRef} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ${gridVisible ? "animate-fade-up" : "opacity-0"}`}>
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: typeof works[number] }) {
  return (
    <div
      className="group bg-card border border-border/50 p-6 flex flex-col transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-primary/50 text-sm font-mono tabular-nums">{work.year}</span>
        <span className="text-[10px] tracking-widest uppercase text-foreground/40 border border-border/50 px-2 py-0.5">
          {work.category}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {work.title}
      </h3>
      <p className="text-foreground/50 text-sm leading-relaxed flex-1">{work.desc}</p>
    </div>
  );
}
