import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref: r1, isVisible: v1 } = useScrollReveal();
  const { ref: r2, isVisible: v2 } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 md:py-32 section-padding">
      <div className="section-container">
        <div ref={r1} className={`mb-16 max-w-3xl ${v1 ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Sobre nós</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance leading-tight">
            Uma história escrita no palco
          </h2>
          <div className="gold-line mt-6" />
        </div>

        <div ref={r2} className={`grid md:grid-cols-2 gap-12 md:gap-20 ${v2 ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          <div className="space-y-6 text-foreground/70 text-pretty leading-relaxed">
            <p>
              Fundada em 2012, a <strong className="text-foreground">CenaViva</strong> nasceu do encontro de artistas que compartilham a crença no poder transformador do teatro. Com raízes no teatro contemporâneo e experimental, nossa companhia busca investigar as fronteiras entre corpo, palavra e espaço cênico.
            </p>
            <p>
              Ao longo de mais de uma década, levamos nossas produções a festivais nacionais e internacionais, construindo uma trajetória marcada pela ousadia criativa e pelo compromisso com a excelência artística.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { title: "Missão", text: "Provocar reflexão e empatia através de experiências cênicas que dialogam com o mundo contemporâneo." },
              { title: "Visão", text: "Ser referência em teatro experimental na América Latina, reconhecida pela originalidade e profundidade de nossas criações." },
              { title: "Valores", text: "Colaboração, ousadia, diversidade, rigor artístico e acessibilidade cultural." },
            ].map((item) => (
              <div key={item.title} className="border-l border-primary/30 pl-6">
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
