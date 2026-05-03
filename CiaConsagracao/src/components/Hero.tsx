import heroImg from "@/assets/hero-theater.jpg";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Palco teatral iluminado" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <div className="gold-line mx-auto mb-8 opacity-0 animate-fade-in animation-delay-0.2s" />
        <p className="text-sm md:text-base tracking-[0.4em] uppercase text-primary/80 mb-6 opacity-0 animate-fade-up animation-delay-0.3s">
          Companhia de Artes Cênicas
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] mb-6 opacity-0 animate-fade-up animation-delay-0.5s">
          Cia.<span className="text-primary">Consagração</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 font-light max-w-xl mx-auto mb-12 opacity-0 animate-fade-up text-pretty animation-delay-0.7s">
          Levando a Palavra através do Teatro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-0.9s">
          <button
            onClick={() => scrollTo("#sobre")}
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
          >
            Conheça a Companhia
          </button>
          <button
            onClick={() => scrollTo("#trabalhos")}
            className="px-8 py-3 border border-foreground/20 text-foreground/80 font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-[0.97]"
          >
            Ver Trabalhos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1.4s">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
