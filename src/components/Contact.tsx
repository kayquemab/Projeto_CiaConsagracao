import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="py-24 md:py-32 section-padding">
      <div className="section-container max-w-3xl">
        <div ref={ref} className={`mb-12 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Contato</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance">
            Fale conosco
          </h2>
          <div className="gold-line mx-auto mt-6 mb-8" />
          <div className="flex flex-wrap items-center justify-center gap-6 text-foreground/50 text-sm">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> contato@cenaviva.art.br</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +55 (11) 3842-7190</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> São Paulo, SP</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              required
              placeholder="Seu nome"
              className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-foreground/20 text-sm"
            />
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-foreground/20 text-sm"
            />
          </div>
          <textarea
            required
            rows={4}
            placeholder="Sua mensagem..."
            className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-foreground/20 text-sm"
          />
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
            >
              {submitted ? "Enviado ✓" : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
