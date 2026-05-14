import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const TARGET = new Date("2026-11-06T14:00:00-03:00").getTime();

function diff() {
  const d = TARGET - Date.now();
  const clamp = Math.max(0, d);
  return {
    dias: Math.floor(clamp / 86400000),
    horas: Math.floor((clamp / 3600000) % 24),
    min: Math.floor((clamp / 60000) % 60),
    seg: Math.floor((clamp / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Dias", value: t?.dias ?? 0 },
    { label: "Horas", value: t?.horas ?? 0 },
    { label: "Min", value: t?.min ?? 0 },
    { label: "Seg", value: t?.seg ?? 0 },
  ];

  return (
    <section className="section-pad relative">
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="label-cinzel text-xs text-gold mb-4">Contagem regressiva</p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-12">
            O encontro está <span className="text-gradient-gold">se aproximando.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
            {items.map((i) => (
              <div key={i.label} className="glass-card !hover:transform-none p-4 md:p-8">
                <p className="font-display text-4xl md:text-7xl text-offwhite tabular-nums">
                  {String(i.value).padStart(2, "0")}
                </p>
                <p className="label-cinzel text-[0.6rem] md:text-xs text-gold mt-2">
                  {i.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-muted-foreground italic">
            Cada dia que passa é uma vaga a menos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
