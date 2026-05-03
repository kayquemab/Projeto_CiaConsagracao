import { useState, useEffect } from "react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#elenco", label: "Elenco" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);

    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-6"
        }`}
    >
      <div className="section-padding section-container flex items-center justify-between">
        <button
          onClick={() => handleClick("#inicio")}
          className="font-display text-xl md:text-2xl tracking-wider gold-text hover:opacity-80 transition-opacity"
        >
          Cia.
          <span className="ml-2 font-light text-foreground/80">
            Consagração
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden relative flex h-10 w-10 items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "top-1/2 rotate-45" : ""
                }`}
            />

            <span
              className={`absolute left-0 top-1/2 h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />

            <span
              className={`absolute left-0 bottom-0 h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "bottom-auto top-1/2 -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="section-padding pb-6 flex flex-col gap-4 pt-4 bg-background/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}