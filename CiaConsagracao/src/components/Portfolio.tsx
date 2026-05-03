import { useScrollReveal } from "@/hooks/useScrollReveal";

const works = [
  {
    title: "O Calice",
    year: "2024",
    category: "Drama Contemporâneo",
    desc: "Peça que retrata um momento de entrega e decisão, abordando fé, obediência e propósito.",
  },
  {
    title: "Retratos",
    year: "2023",
    category: "Performance",
    desc: "Espetáculo que apresenta diferentes histórias e realidades, refletindo sobre identidade e transformação.",
  },
  {
    title: "Cartas",
    year: "2022",
    category: "Teatro Experimental",
    desc: "Narrativa construída a partir de mensagens e relatos, trazendo reflexões sobre sentimentos e escolhas.",
  },
  {
    title: "Solitário",
    year: "2021",
    category: "Releitura Clássica",
    desc: "Peça que aborda a solidão e os conflitos internos, destacando a importância de direção e propósito.",
  },
  {
    title: "O Tempo",
    year: "2020",
    category: "Teatro Documental",
    desc: "Espetáculo que reflete sobre o tempo e suas fases, mostrando mudanças, aprendizados e recomeços.",
  },
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
