/**
 * Cena de fundo "arquivo vivo do tempo" — nasce da logo Tempus.
 * Camadas: base preta + luz dourada, sombra de mostrador de relógio,
 * linhas genealógicas/constelação, raízes douradas e engrenagem quase invisível.
 * Puro SVG/CSS, sem foto — zero roxo, totalmente na paleta.
 */
export function AncestralBackdrop({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "cta";
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Base profunda */}
      <div className="absolute inset-0 bg-background" />

      {/* Luz dourada difusa (canto superior esquerdo, como na logo) + brilho de petróleo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "hero"
              ? "radial-gradient(120% 90% at 18% 8%, rgba(200,149,31,0.20) 0%, transparent 46%), radial-gradient(90% 80% at 82% 88%, rgba(28,119,117,0.16) 0%, transparent 55%)"
              : "radial-gradient(100% 100% at 50% 50%, rgba(28,119,117,0.20) 0%, transparent 62%), radial-gradient(80% 80% at 20% 10%, rgba(200,149,31,0.14) 0%, transparent 50%)",
        }}
      />

      {/* Mostrador de relógio + engrenagens quase invisíveis */}
      <svg
        className="absolute -right-[14%] top-1/2 h-[135%] w-auto -translate-y-1/2 opacity-[0.16] md:-right-[6%]"
        viewBox="0 0 600 600"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="ab-fade" cx="50%" cy="50%" r="50%">
            <stop offset="55%" stopColor="#c8951f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c8951f" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="url(#ab-fade)" strokeWidth="1">
          <circle cx="300" cy="300" r="278" />
          <circle cx="300" cy="300" r="250" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="190" strokeWidth="0.5" />
          {/* Marcações do mostrador (60 ticks) */}
          {Array.from({ length: 60 }).map((_, i) => {
            const a = (i * Math.PI) / 30;
            const major = i % 5 === 0;
            const r1 = major ? 250 : 262;
            const r2 = 278;
            return (
              <line
                key={i}
                x1={300 + r1 * Math.sin(a)}
                y1={300 - r1 * Math.cos(a)}
                x2={300 + r2 * Math.sin(a)}
                y2={300 - r2 * Math.cos(a)}
                strokeWidth={major ? 1.6 : 0.6}
              />
            );
          })}
        </g>
        {/* Ponteiros */}
        <g stroke="#c8951f" strokeWidth="2" strokeLinecap="round" opacity="0.7">
          <line x1="300" y1="300" x2="300" y2="140" />
          <line x1="300" y1="300" x2="404" y2="356" strokeWidth="1.4" />
        </g>
        <circle cx="300" cy="300" r="6" fill="#c8951f" opacity="0.7" />
      </svg>

      {/* Linhas genealógicas — parentesco descendo em ramos */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[62%] w-full opacity-[0.14]"
        viewBox="0 0 1200 500"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <g stroke="#c8951f" strokeWidth="1" strokeLinecap="round">
          <path d="M600 500 L600 300" />
          <path d="M600 300 C600 250 420 250 420 200 M600 300 C600 250 780 250 780 200" />
          <path d="M420 200 C420 160 320 160 320 120 M420 200 C420 160 520 160 520 120" />
          <path d="M780 200 C780 160 680 160 680 120 M780 200 C780 160 880 160 880 120" />
          <path d="M320 120 C320 92 268 92 268 66 M320 120 C320 92 372 92 372 66" opacity="0.7" />
          <path d="M880 120 C880 92 828 92 828 66 M880 120 C880 92 932 92 932 66" opacity="0.7" />
        </g>
        {/* Nós de parentesco */}
        <g fill="#f0c85a">
          {[
            [600, 300],
            [420, 200],
            [780, 200],
            [320, 120],
            [520, 120],
            [680, 120],
            [880, 120],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.6" opacity="0.85" />
          ))}
        </g>
      </svg>

      {/* Raízes douradas subindo do rodapé */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[36%] w-full opacity-[0.20]"
        viewBox="0 0 1200 320"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
      >
        <g stroke="#8a5a12" strokeWidth="1.4" strokeLinecap="round">
          <path d="M600 320 C600 250 470 240 430 180 C400 135 360 120 300 90" />
          <path d="M600 320 C600 250 730 240 770 180 C800 135 840 120 900 90" />
          <path d="M600 320 C590 260 560 250 520 210 M600 320 C610 260 640 250 680 210" />
          <path d="M430 180 C420 150 380 150 350 130 M770 180 C780 150 820 150 850 130" />
        </g>
      </svg>

      {/* Fusão com o fundo nas bordas */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
    </div>
  );
}
