import { Reveal } from "./Reveal";

type Eixo =
  | "Ciência"
  | "Saúde Integral"
  | "Psicogenealogia"
  | "Espiritualidade"
  | "Saúde Mental"
  | "Odontologia Integrativa"
  | "Consciência e Desenvolvimento Humano";

const eixoColor: Record<Eixo, string> = {
  "Ciência": "border-sky-400/40 text-sky-200/90",
  "Saúde Integral": "border-emerald-400/40 text-emerald-200/90",
  "Psicogenealogia": "border-gold/50 text-gold",
  "Espiritualidade": "border-violet-400/40 text-violet-200/90",
  "Saúde Mental": "border-rose-300/40 text-rose-200/90",
  "Odontologia Integrativa": "border-amber-300/40 text-amber-200/90",
  "Consciência e Desenvolvimento Humano": "border-indigo-300/40 text-indigo-200/90",
};

type Slot = {
  time: string;
  title: string;
  speaker?: string;
  desc?: string;
  eixos?: Eixo[];
  highlight?: boolean;
  type?: "palestra" | "pausa" | "experiencia";
};

type Day = {
  date: string;
  weekday: string;
  badge: string;
  title: string;
  summary: string;
  preliminary?: boolean;
  exclusive?: boolean;
  slots: Slot[];
};

const days: Day[] = [
  {
    date: "06 · 11",
    weekday: "Sexta-feira",
    badge: "Abertura",
    title: "Painel de Odontologia Integrativa, Psicogenealogia e Decodificação Dental",
    summary:
      "Aberto ao público geral e psicogenealogistas. Início às 14h.",
    slots: [
      {
        time: "14h00",
        title:
          "Painel de Odontologia Integrativa, Psicogenealogia e Decodificação Dental",
        speaker:
          "Dr. Fabián Brotos e dentistas formadores e difusores da técnica integrativa",
        desc: "Como a odontologia contemporânea pode dialogar com a Psicogenealogia, a Decodificação Dental e os saberes simbólicos da Cabalá, ampliando o olhar sobre os processos de saúde integral. Um espaço de diálogo, reflexão e aprendizagem onde ciência, experiência clínica e saberes complementares se encontram — um aprofundamento da compreensão da odontologia como porta de acesso à história, à memória familiar e à consciência humana.",
        eixos: ["Odontologia Integrativa", "Psicogenealogia", "Espiritualidade"],
        highlight: true,
      },
    ],
  },
  {
    date: "07 · 11",
    weekday: "Sábado",
    badge: "Dia Integral",
    title: "Raízes da Alma — Ciência, Consciência e Espiritualidade em Diálogo",
    summary:
      "Programação preliminar — sujeita a alterações. Aberto ao público geral e psicogenealogistas.",
    preliminary: true,
    slots: [
      {
        time: "08h30 — 10h00",
        title:
          "Painel de Abertura · Ciência, Saúde e Espiritualidade: Construindo Pontes para o Futuro",
        speaker: "Palestrantes convidados de destaque",
        desc: "Encontro especial reunindo convidados de diferentes áreas do conhecimento para discutir a integração entre ciência, saúde, espiritualidade e desenvolvimento humano.",
        eixos: [
          "Ciência",
          "Saúde Integral",
          "Espiritualidade",
          "Consciência e Desenvolvimento Humano",
        ],
        highlight: true,
      },
      {
        time: "10h00 — 10h30",
        title: "Coffee Break & Networking",
        desc: "Momento de integração entre participantes, palestrantes e expositores.",
        type: "pausa",
      },
      {
        time: "10h30 — 12h30",
        title:
          "Psicogenealogia como Ferramenta de Saúde Mental nas Empresas: Adequação do Método à NR-1",
        speaker: "Letícia Kuchockowolec Baccin",
        desc: "Aplicação da Psicogenealogia no contexto empresarial, alinhada às novas demandas de saúde mental, gestão de pessoas e desenvolvimento humano.",
        eixos: ["Psicogenealogia", "Saúde Mental"],
      },
      {
        time: "12h30 — 14h00",
        title: "Intervalo para almoço",
        type: "pausa",
      },
      {
        time: "14h00 — 15h30",
        title:
          "O Corpo Não Esquece: Raízes Ocultas do Sintoma · Entre Gerações: o Corpo como Guardião da História",
        speaker: "Danila Gabriel Martins de Campos",
        desc: "Reflexão sobre memórias corporais, sintomas e heranças transgeracionais.",
        eixos: ["Saúde Integral", "Psicogenealogia"],
      },
      {
        time: "15h30 — 16h00",
        title: "Coffee Break",
        type: "pausa",
      },
      {
        time: "16h00 — 17h30",
        title: "Decodificação Dental Aplicada às Constelações",
        speaker: "Daniella Barreto Ruocco",
        desc: "Como acessar e ressignificar emoções através dos dentes, integrando odontologia, emoções e sistemas familiares.",
        eixos: ["Odontologia Integrativa", "Psicogenealogia"],
      },
      {
        time: "18h00 — 19h30",
        title: "Saúde Mental nas Empresas: Unindo Gestão e Espiritualidade",
        speaker: "Inês Dressler",
        desc: "Abordagem sobre saúde mental corporativa integrando gestão, desenvolvimento humano e espiritualidade.",
        eixos: ["Saúde Mental", "Espiritualidade", "Consciência e Desenvolvimento Humano"],
      },
      {
        time: "20h00 — 21h00",
        title: "Jantar Temático — Raízes da Alma",
        desc: "Experiência de convivência e integração entre participantes e palestrantes.",
        type: "experiencia",
      },
      {
        time: "21h00",
        title: "Espetáculo Musical Especial",
        desc: "Apresentação musical de encerramento do dia.",
        type: "experiencia",
      },
    ],
  },
  {
    date: "08 · 11",
    weekday: "Domingo",
    badge: "Encerramento",
    title: "Encerramento — Exclusivo Psicogenealogistas",
    summary: "Até as 13h. Exclusivo para psicogenealogistas certificados.",
    exclusive: true,
    slots: [
      {
        time: "Manhã",
        title: "Imersão final exclusiva",
        desc: "Encontro reservado para psicogenealogistas certificados, com aprofundamento clínico e encerramento ritualístico do congresso.",
        eixos: ["Psicogenealogia", "Consciência e Desenvolvimento Humano"],
      },
    ],
  },
];

const allEixos: Eixo[] = [
  "Ciência",
  "Saúde Integral",
  "Psicogenealogia",
  "Espiritualidade",
  "Saúde Mental",
  "Odontologia Integrativa",
  "Consciência e Desenvolvimento Humano",
];

export function Schedule() {
  return (
    <section id="programacao" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="label-cinzel text-xs text-gold mb-4 tracking-[0.3em]">
              Programação
            </p>
            <h2 className="font-display italic text-5xl md:text-6xl mb-6">
              Três dias.{" "}
              <span className="text-gradient-gold">Uma travessia.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Painéis de integração entre ciência e espiritualidade,
              experiências clínicas e simbólicas — distribuídos ao longo de
              eixos temáticos que estruturam o congresso.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {allEixos.map((e) => (
              <span
                key={e}
                className={`label-cinzel text-[0.55rem] tracking-[0.25em] px-3 py-1.5 rounded-full border bg-background/40 ${eixoColor[e]}`}
              >
                {e}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="space-y-16">
          {days.map((d, di) => (
            <Reveal key={d.date} delay={di * 0.05}>
              <div
                className={`glass-card overflow-hidden ${
                  d.exclusive ? "!border-gold/50 ring-1 ring-gold/20" : ""
                }`}
              >
                <header className="relative p-8 md:p-10 border-b border-gold/15 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <p className="label-cinzel text-[0.65rem] text-gold mb-2 tracking-[0.3em]">
                      {d.weekday} · {d.badge}
                    </p>
                    <p className="font-display text-6xl md:text-7xl text-offwhite leading-none mb-4">
                      {d.date}
                    </p>
                    <h3 className="font-display italic text-2xl md:text-3xl text-offwhite max-w-2xl leading-snug">
                      {d.title}
                    </h3>
                  </div>
                  <div className="md:text-right flex flex-col gap-2 md:items-end">
                    {d.exclusive && (
                      <span className="label-cinzel text-[0.6rem] px-3 py-1 bg-gradient-to-r from-gold to-gold-light text-background rounded-sm w-fit">
                        Exclusivo
                      </span>
                    )}
                    {d.preliminary && (
                      <span className="label-cinzel text-[0.6rem] px-3 py-1 border border-gold/40 text-gold/90 rounded-sm w-fit">
                        Programação preliminar
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground max-w-xs">
                      {d.summary}
                    </p>
                  </div>
                </header>

                <ol className="divide-y divide-gold/10">
                  {d.slots.map((s, i) => (
                    <li
                      key={i}
                      className={`grid md:grid-cols-[160px_1fr] gap-4 md:gap-8 p-6 md:p-8 ${
                        s.highlight ? "bg-gold/[0.04]" : ""
                      } ${s.type === "pausa" ? "opacity-70" : ""}`}
                    >
                      <div className="md:text-right">
                        <p className="font-display italic text-xl text-gold whitespace-nowrap">
                          {s.time}
                        </p>
                        {s.type === "pausa" && (
                          <p className="label-cinzel text-[0.55rem] text-muted-foreground tracking-[0.25em] mt-1">
                            Intervalo
                          </p>
                        )}
                        {s.type === "experiencia" && (
                          <p className="label-cinzel text-[0.55rem] text-gold/80 tracking-[0.25em] mt-1">
                            Experiência
                          </p>
                        )}
                        {s.highlight && (
                          <p className="label-cinzel text-[0.55rem] text-gold tracking-[0.25em] mt-1">
                            Painel destaque
                          </p>
                        )}
                      </div>
                      <div>
                        <h4 className="font-display italic text-xl md:text-2xl text-offwhite leading-snug mb-1">
                          {s.title}
                        </h4>
                        {s.speaker && (
                          <p className="text-sm text-gold/90 mb-3 tracking-wide">
                            {s.speaker}
                          </p>
                        )}
                        {s.desc && (
                          <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                            {s.desc}
                          </p>
                        )}
                        {s.eixos && s.eixos.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {s.eixos.map((e) => (
                              <span
                                key={e}
                                className={`label-cinzel text-[0.55rem] tracking-[0.25em] px-2.5 py-1 rounded-full border ${eixoColor[e]}`}
                              >
                                {e}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-center text-xs text-muted-foreground/80 mt-10 italic">
            * A programação do Dia 07 é preliminar e poderá sofrer alterações.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
