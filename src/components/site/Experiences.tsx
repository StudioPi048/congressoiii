import { Reveal } from "./Reveal";

const items = [
  {
    title: "Psicogenealogia",
    desc: "Compreensão profunda das programações transgeracionais que moldam sua história.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 6v36M24 14c-4 0-7 2-7 6M24 14c4 0 7 2 7 6M17 20c-3 0-5 2-5 5M31 20c3 0 5 2 5 5M24 24c-5 0-9 3-9 7M24 24c5 0 9 3 9 7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cabalá",
    desc: "Espiritualidade e expansão da consciência pela sabedoria ancestral.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 6l15 26H9L24 6z M24 42L9 16h30L24 42z" />
      </svg>
    ),
  },
  {
    title: "Vivências",
    desc: "Experiências práticas e transformadoras que movem o que as palavras não alcançam.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 28c6-8 12-8 20 0s14 8 20 0M4 18c6-8 12-8 20 0s14 8 20 0M4 38c6-8 12-8 20 0s14 8 20 0" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Networking",
    desc: "Conexão genuína com pessoas que compartilham a mesma jornada.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="14" cy="18" r="5" />
        <circle cx="34" cy="18" r="5" />
        <circle cx="24" cy="36" r="5" />
        <path d="M18 21l4 11M30 21l-4 11M19 18h10" />
      </svg>
    ),
  },
  {
    title: "Expansão Pessoal",
    desc: "Transformar a dor herdada em potência e propósito de vida.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 6c-3 6-9 9-9 17a9 9 0 0018 0c0-8-6-11-9-17z" strokeLinejoin="round" />
        <path d="M24 22c-2 3-4 4-4 8a4 4 0 008 0c0-4-2-5-4-8z" />
      </svg>
    ),
  },
];

export function Experiences() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="label-cinzel text-xs text-gold mb-4">Experiências</p>
            <h2 className="font-display italic text-5xl md:text-6xl">
              O que você vai viver <br />
              <span className="text-gradient-gold">nesses três dias.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass-card p-8 md:p-10 h-full group">
                <div className="w-14 h-14 mb-6 text-gold transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(232,201,122,0.6)]">
                  {item.icon}
                </div>
                <h3 className="font-display italic text-2xl text-offwhite mb-3">
                  {item.title}
                </h3>
                <p className="text-offwhite/70 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
