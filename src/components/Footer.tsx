export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-12 section-padding">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="font-display text-lg tracking-wider gold-text">
            CENA<span className="font-light text-foreground/80">VIVA</span>
          </span>
          <span className="text-foreground/30 text-sm">© {currentYear}</span>
        </div>

        <div className="flex items-center gap-6">
          {["Instagram", "YouTube", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs tracking-widest uppercase text-foreground/40 hover:text-primary transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
