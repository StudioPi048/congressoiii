import { Reveal } from "./Reveal";

const days = [
  { date: "06", weekday: "Sexta-feira", badge: "Abertura" },
  { date: "07", weekday: "Sábado", badge: "Dia Integral" },
  { date: "08", weekday: "Domingo", badge: "Encerramento" },
];

export function Schedule() {
  return (
    <section id="programacao" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(200,149,31,0.10) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(28,119,117,0.16) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <span className="eyebrow eyebrow--center">Programação</span>
            </div>
            <h2 className="mb-6 font-display text-5xl italic leading-[1.05] md:text-6xl">
              Três dias. <span className="text-gradient-gold">Uma travessia.</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A programação completa — painéis, horários e a ordem dos encontros — está sendo
              selada com cuidado. Em breve, revelaremos cada capítulo desta travessia.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {days.map((d, i) => (
            <Reveal key={d.date} delay={i * 0.1}>
              <div className="glass-card group relative flex flex-col items-center overflow-hidden px-6 py-12 text-center">
                <p className="label-cinzel mb-6 text-[0.6rem] text-gold">{d.badge}</p>
                <p className="font-display text-7xl leading-none text-offwhite">{d.date}</p>
                <p className="label-cinzel mt-3 text-[0.6rem] text-muted-foreground">
                  Novembro · {d.weekday}
                </p>

                <div className="my-8 h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

                {/* Selo de mistério — relógio parado, a ser revelado */}
                <div className="mb-4 text-gold/70 transition-transform duration-700 group-hover:rotate-[30deg]">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="label-cinzel text-[0.6rem] tracking-[0.3em] text-gold/80">
                  A ser revelado
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-2xl border-t border-gold/15 pt-12 text-center">
            <p className="font-display text-2xl italic leading-snug text-offwhite/90 md:text-3xl">
              Enquanto o tempo não se revela,{" "}
              <span className="text-gradient-gold">conheça quem conduzirá a travessia.</span>
            </p>
            <a href="#convidados" className="btn-ghost mt-8 inline-flex">
              Ver palestrantes confirmados ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
