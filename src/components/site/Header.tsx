import { useEffect, useState } from "react";
import logo from "@/assets/tempus-logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programacao", label: "Programação" },
  { href: "#local", label: "Local" },
  { href: "#investimento", label: "Investimento" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt="Tempus — Congresso III de Psicogenealogia"
            className="h-11 w-auto max-w-[210px] object-contain object-left"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-offwhite/80 hover:text-gold transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#investimento"
          className="btn-gold hidden md:inline-flex !py-3 !px-6 !text-[0.7rem]"
        >
          Participar
        </a>

        <button
          className="lg:hidden text-offwhite"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-deep/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col p-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="label-cinzel text-xs text-offwhite/80 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a href="#investimento" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Inscrever-se
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
