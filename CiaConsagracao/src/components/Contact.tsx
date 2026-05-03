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
      <div className="section-container">
        <div ref={ref} className={`mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Contato</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance">
            Fale conosco
          </h2>
          <div className="gold-line mt-6" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs tracking-widest uppercase text-foreground/50 mb-2 block">Nome</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-foreground/20"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-foreground/50 mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors placeholder:text-foreground/20"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-foreground/50 mb-2 block">Mensagem</label>
              <textarea
                required
                rows={5}
                className="w-full bg-transparent border-b border-border/50 pb-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-foreground/20"
                placeholder="Sua mensagem..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
            >
              {submitted ? "Mensagem enviada ✓" : "Enviar mensagem"}
            </button>
          </form>

          {/* Info */}
          <div className="md:col-span-2 space-y-8">
            {[
              { icon: Mail, label: "Email", value: "escolamudat@gmail.com" },
              { icon: Phone, label: "Telefone", value: "+55 (11) 94900=4071" },
              { icon: MapPin, label: "Endereço", value: "Alameda Tutóia, 446 - Guarulhos" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-foreground/40 mb-1">{item.label}</p>
                  <p className="text-foreground/80">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
