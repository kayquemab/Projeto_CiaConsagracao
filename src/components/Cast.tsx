import { useScrollReveal } from "@/hooks/useScrollReveal";

const cast = [
  { name: "Mariana Torres", role: "Atriz & Diretora", specialty: "Teatro físico, dramaturgia contemporânea", initials: "MT" },
  { name: "Rafael Mendes", role: "Ator", specialty: "Atuação dramática, teatro de rua", initials: "RM" },
  { name: "Camila Duarte", role: "Atriz & Bailarina", specialty: "Dança contemporânea, performance", initials: "CD" },
  { name: "Lucas Ferreira", role: "Ator & Músico", specialty: "Canto lírico, teatro musical", initials: "LF" },
  { name: "Isabela Rocha", role: "Atriz", specialty: "Improvisação, clown, commedia dell'arte", initials: "IR" },
  { name: "Thiago Alves", role: "Ator & Cenógrafo", specialty: "Cenografia imersiva, teatro experimental", initials: "TA" },
];

export default function Cast() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="elenco" className="py-24 md:py-32 section-padding bg-muted/30">
      <div className="section-container">
        <div ref={ref} className={`mb-16 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Nosso elenco</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance">
            Os artistas por trás da cena
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cast.map((actor, i) => (
            <CastCard key={actor.name} actor={actor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CastCard({ actor, index }: { actor: typeof cast[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group bg-card border border-border/50 p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
        <span className="font-display text-lg font-semibold text-primary">{actor.initials}</span>
      </div>
      <h3 className="font-display text-xl font-semibold mb-1">{actor.name}</h3>
      <p className="text-primary text-sm font-medium mb-3">{actor.role}</p>
      <p className="text-foreground/50 text-sm leading-relaxed">{actor.specialty}</p>
    </div>
  );
}
