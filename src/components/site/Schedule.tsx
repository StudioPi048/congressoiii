import { Reveal } from "./Reveal";

const days = [
  {
    date: "06 · 11",
    weekday: "Sexta-feira",
    title: "Abertura do Congresso",
    time: "Início às 14h",
    desc: "Aberto ao público geral e psicogenealogistas.",
    exclusive: false,
  },
  {
    date: "07 · 11",
    weekday: "Sábado",
    title: "Programação Completa",
    time: "Dia integral",
    desc: "Aberto ao público geral e psicogenealogistas.",
    exclusive: false,
  },
  {
    date: "08 · 11",
    weekday: "Domingo",
    title: "Encerramento",
    time: "Até as 13h",
    desc: "Exclusivo para psicogenealogistas certificados.",
    exclusive: true,
  },
];

export function Schedule() {
  return (
    <section id="programacao" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <p className="label-cinzel text-xs text-gold mb-4">Programação</p>
            <h2 className="font-display italic text-5xl md:text-6xl">
              Três dias. <span className="text-gradient-gold">Uma travessia.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {days.map((d, i) => (
            <Reveal key={d.date} delay={i * 0.12}>
              <div
                className={`glass-card p-8 md:p-10 h-full relative ${
                  d.exclusive ? "!border-gold/50 ring-1 ring-gold/20" : ""
                }`}
              >
                {d.exclusive && (
                  <span className="absolute -top-3 left-8 label-cinzel text-[0.6rem] px-3 py-1 bg-gradient-to-r from-gold to-gold-light text-background rounded-sm">
                    Exclusivo
                  </span>
                )}
                <p className="label-cinzel text-[0.65rem] text-gold mb-2">
                  {d.weekday}
                </p>
                <p className="font-display text-5xl md:text-6xl text-offwhite mb-6">
                  {d.date}
                </p>
                <div className="w-10 h-px bg-gold/40 mb-6" />
                <h3 className="font-display italic text-2xl text-offwhite mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{d.time}</p>
                <p className="text-offwhite/70 leading-relaxed">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
