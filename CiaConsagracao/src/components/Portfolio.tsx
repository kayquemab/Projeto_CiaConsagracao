import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    <section id="trabalhos" className="section-padding py-20 md:py-32">
      <div className="section-container">
        <div
          ref={ref}
          className={`mb-12 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"
            }`}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Portfólio
          </p>

          <h2 className="mb-4 text-balance font-display text-3xl font-bold md:text-5xl">
            Nossos trabalhos
          </h2>

          <div className="gold-line mt-6" />
        </div>

        {/* Mobile: Carousel | Desktop: Grid */}
        <div className="sm:hidden">
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {works.map((work) => (
                <CarouselItem
                  key={work.title}
                  className="basis-[86%] pl-3"
                >
                  <WorkCard work={work} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 h-9 w-9 border-primary/20 bg-background/80" />
            <CarouselNext className="right-2 h-9 w-9 border-primary/20 bg-background/80" />
          </Carousel>
        </div>

        <div
          ref={gridRef}
          className={`hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 ${gridVisible ? "animate-fade-up" : "opacity-0"
            }`}
        >
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: (typeof works)[number] }) {
  return (
    <div className="group flex min-h-[260px] flex-col border border-border/50 bg-card p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:min-h-[280px] sm:p-6 md:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="font-mono text-sm tabular-nums text-primary/60">
          {work.year}
        </span>

        <span className="border border-border/50 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/40">
          {work.category}
        </span>
      </div>

      <h3 className="mb-4 font-display text-2xl font-semibold transition-colors duration-300 group-hover:text-primary md:text-3xl">
        {work.title}
      </h3>

      <p className="flex-1 text-sm leading-relaxed text-foreground/55 sm:text-base">
        {work.desc}
      </p>
    </div>
  );
}