import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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

        <div className="space-y-0 border-t border-border/50">
          {works.map((work, i) => (
            <WorkRow key={work.title} work={work} index={i} isHovered={hoveredIdx === i} onHover={() => setHoveredIdx(i)} onLeave={() => setHoveredIdx(null)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkRow({ work, index, isHovered, onHover, onLeave }: {
  work: typeof works[number]; index: number; isHovered: boolean; onHover: () => void; onLeave: () => void;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`border-b border-border/50 py-6 md:py-8 cursor-pointer group transition-all duration-500 ${
        isHovered ? "bg-muted/30 px-6 -mx-6" : ""
      } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
        <span className="text-primary/50 text-sm font-mono tabular-nums w-12 shrink-0">{work.year}</span>
        <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors duration-300 flex-1">
          {work.title}
        </h3>
        <span className="text-xs tracking-widest uppercase text-foreground/40 border border-border/50 px-3 py-1 w-fit">
          {work.category}
        </span>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ${isHovered ? "max-h-24 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
        <p className="text-foreground/50 text-sm leading-relaxed max-w-2xl md:ml-20">{work.desc}</p>
      </div>
    </div>
  );
}
