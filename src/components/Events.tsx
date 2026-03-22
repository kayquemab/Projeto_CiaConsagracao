import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  { title: "O Silêncio das Marés", date: "12 Abr 2026", location: "Teatro Municipal de São Paulo", highlight: true },
  { title: "Corpo em Trânsito", date: "28 Abr 2026", location: "SESC Pompeia", highlight: false },
  { title: "A Última Carta", date: "15 Mai 2026", location: "Centro Cultural Banco do Brasil, RJ", highlight: false },
  { title: "Festival de Teatro Contemporâneo", date: "02 Jun 2026", location: "Itaú Cultural", highlight: false },
];

export default function Events() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="agenda" className="py-24 md:py-32 section-padding bg-muted/30">
      <div className="section-container">
        <div ref={ref} className={`mb-16 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Agenda</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-balance">
            Próximas apresentações
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {events.map((event, i) => (
            <EventCard key={event.title + event.date} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: typeof events[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`flex flex-col sm:flex-row sm:items-center gap-4 p-6 border transition-all duration-500 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 active:scale-[0.99] ${
        event.highlight ? "border-primary/40 bg-primary/5" : "border-border/50 bg-card"
      } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {event.highlight && (
        <span className="text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-2 py-0.5 w-fit font-semibold sm:hidden">
          Destaque
        </span>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-display text-lg font-semibold">{event.title}</h3>
          {event.highlight && (
            <span className="hidden sm:inline text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-2 py-0.5 font-semibold">
              Destaque
            </span>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-foreground/50 text-sm">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {event.location}
          </span>
        </div>
      </div>
    </div>
  );
}
