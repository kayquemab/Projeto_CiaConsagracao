export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/cia_consagracao/",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@imwgru",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ministerioconsagracao3",
    },
  ];

  return (
    <footer className="border-t border-border/30 py-12 section-padding">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="font-display text-lg tracking-wider gold-text">
            Cia.{" "}
            <span className="font-light text-foreground/80">
              Consagração
            </span>
          </span>
          <span className="text-foreground/30 text-sm">
            © {currentYear}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-foreground/40 hover:text-primary transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}