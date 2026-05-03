import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref: r1, isVisible: v1 } = useScrollReveal();
  const { ref: r2, isVisible: v2 } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 md:py-32 section-padding">
      <div className="section-container">
        <div
          ref={r1}
          className={`mb-16 max-w-3xl ${
            v1 ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Sobre nós
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-balance leading-tight">
            Uma história marcada pela consagração
          </h2>

          <div className="gold-line mt-6" />
        </div>

        <div
          ref={r2}
          className={`grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 ${
            v2 ? "animate-fade-up animation-delay-0.15s" : "opacity-0"
          }`}
        >
          <div className="space-y-6 text-foreground/70 text-pretty leading-relaxed">
            <p>
              Fundada com o propósito de servir a Deus através da arte, a{" "}
              <strong className="text-foreground">Cia Consagração</strong>{" "}
              nasceu da união de jovens que decidiram usar o teatro como
              instrumento de transformação, levando mensagens de fé, esperança e
              arrependimento.
            </p>

            <p>
              Ao longo de sua trajetória, o grupo tem impactado vidas por meio
              de apresentações que vão além do palco, alcançando corações e
              despertando pessoas para um relacionamento verdadeiro com Deus.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Missão",
                text: "Levar a Palavra de Deus através do teatro, impactando vidas e despertando corações para viverem uma vida de consagração.",
              },
              {
                title: "Visão",
                text: "Ser um ministério reconhecido por transformar vidas por meio da arte, levando o evangelho com verdade, excelência e unção.",
              },
              {
                title: "Valores",
                text: "Consagração, obediência a Deus, unidade, compromisso com a Palavra e amor pelas vidas.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l border-primary/30 pl-6 md:pl-8">
                <h3 className="font-display text-sm sm:text-base md:text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}