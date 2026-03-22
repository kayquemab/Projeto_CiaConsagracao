import { useScrollReveal } from "@/hooks/useScrollReveal";
import castMariana from "@/assets/cast-mariana.jpg";
import castRafael from "@/assets/cast-rafael.jpg";
import castCamila from "@/assets/cast-camila.jpg";
import castLucas from "@/assets/cast-lucas.jpg";
import castIsabela from "@/assets/cast-isabela.jpg";
import castThiago from "@/assets/cast-thiago.jpg";

const cast = [
  { name: "Mariana Torres", role: "Atriz & Diretora", specialty: "Teatro físico, dramaturgia contemporânea", photo: castMariana },
  { name: "Rafael Mendes", role: "Ator", specialty: "Atuação dramática, teatro de rua", photo: castRafael },
  { name: "Camila Duarte", role: "Atriz & Bailarina", specialty: "Dança contemporânea, performance", photo: castCamila },
  { name: "Lucas Ferreira", role: "Ator & Músico", specialty: "Canto lírico, teatro musical", photo: castLucas },
  { name: "Isabela Rocha", role: "Atriz", specialty: "Improvisação, clown, commedia dell'arte", photo: castIsabela },
  { name: "Thiago Alves", role: "Ator & Cenógrafo", specialty: "Cenografia imersiva, teatro experimental", photo: castThiago },
];

export default function Cast() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

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

        <div ref={gridRef} className={`grid grid-cols-2 md:grid-cols-4 gap-5 ${gridVisible ? "animate-fade-up" : "opacity-0"}`}>
          {cast.map((actor) => (
            <CastCard key={actor.name} actor={actor} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CastCard({ actor }: { actor: typeof cast[number] }) {
  return (
    <div
      className="group overflow-hidden bg-card border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={actor.photo}
          alt={actor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-base md:text-lg font-semibold mb-0.5">{actor.name}</h3>
        <p className="text-primary text-xs font-medium mb-2">{actor.role}</p>
        <p className="text-foreground/50 text-xs leading-relaxed">{actor.specialty}</p>
      </div>
    </div>
  );
}
