import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import castMariana from "@/assets/cast-mariana.jpg";
import castRafael from "@/assets/cast-rafael.jpg";
import castCamila from "@/assets/cast-camila.jpg";
import castLucas from "@/assets/cast-lucas.jpg";
import castIsabela from "@/assets/cast-isabela.jpg";
import castThiago from "@/assets/cast-thiago.jpg";

const cast = [
  {
    name: "Camila Santos",
    role: "Atriz",
    specialty: "Interpretação dramática e teatro evangelístico",
    photo: castCamila,
  },
  {
    name: "Herbert Barros Moraes",
    role: "Ator",
    specialty: "Teatro de rua e abordagem criativa",
    photo: castRafael,
  },
  {
    name: "Filipe Gonçalves",
    role: "Ator",
    specialty: "Expressão corporal e teatro físico",
    photo: castLucas,
  },
  {
    name: "Débora Mendes",
    role: "Atriz",
    specialty: "Canto e teatro musical cristão",
    photo: castMariana,
  },
  {
    name: "Lívia Souza",
    role: "Atriz",
    specialty: "Improvisação e teatro espontâneo",
    photo: castIsabela,
  },
  {
    name: "Andrew Araujo",
    role: "Ator",
    specialty: "Personagens bíblicos e encenações históricas",
    photo: castThiago,
  },
  {
    name: "Julia Terribile",
    role: "Atriz",
    specialty: "Dança e expressão artística no teatro",
    photo: castCamila,
  },
  {
    name: "Danilo Barboza",
    role: "Ator",
    specialty: "Atuação dramática e direção de cena",
    photo: castRafael,
  },
  {
    name: "Natália Capozzi",
    role: "Atriz",
    specialty: "Interpretação emocional e teatro ministerial",
    photo: castMariana,
  },
  {
    name: "Camily Maciel",
    role: "Atriz",
    specialty: "Expressão corporal e coreografia",
    photo: castIsabela,
  },
  {
    name: "Sarah Lorrayne",
    role: "Atriz",
    specialty: "Teatro evangelístico e impacto social",
    photo: castCamila,
  },
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

        {/* Mobile: Carousel | Desktop: Grid */}
        <div className="md:hidden">
          <Carousel 
            opts={{ loop: true, align: "start" }} 
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cast.map((actor) => (
                <CarouselItem key={actor.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
                  <CastCard actor={actor} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div ref={gridRef} className={`hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ${gridVisible ? "animate-fade-up" : "opacity-0"}`}>
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
      <div className="p-3 sm:p-4 md:p-5">
        <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold mb-0.5">{actor.name}</h3>
        <p className="text-primary text-xs font-medium mb-2">{actor.role}</p>
        <p className="text-foreground/50 text-[10px] sm:text-xs leading-relaxed">{actor.specialty}</p>
      </div>
    </div>
  );
}
