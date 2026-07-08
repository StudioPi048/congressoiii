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

type Panel = {
  title: string;
  desc: string;
  eixos: Eixo[];
  highlight?: boolean;
};

type Day = {
  date: string;
  weekday: string;
  badge: string;
  title: string;
  summary: string;
  exclusive?: boolean;
  panels: Panel[];
};

const days: Day[] = [
  {
    date: "06 · 11",
    weekday: "Sexta-feira",
    badge: "Abertura",
    title: "Odontologia Integrativa, Psicogenealogia e Decodificação Dental",
    summary:
      "Aberto ao público geral e psicogenealogistas.",
    panels: [
      {
        title:
          "Painel de Abertura · Odontologia Integrativa, Psicogenealogia e Decodificação Dental",
        desc: "Como a odontologia contemporânea dialoga com a Psicogenealogia, a Decodificação Dental e os saberes simbólicos da Cabalá, ampliando o olhar sobre os processos de saúde integral. Um espaço de diálogo, reflexão e aprendizagem onde ciência, experiência clínica e saberes complementares se encontram — um aprofundamento da compreensão da odontologia como porta de acesso à história, à memória familiar e à consciência humana.",
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
      "Painéis distribuídos ao longo do dia, aberto ao público geral e psicogenealogistas.",
    panels: [
      {
        title:
          "Painel · Ciência, Saúde e Espiritualidade — Construindo Pontes para o Futuro",
        desc: "Encontro reunindo referências de diferentes áreas do conhecimento — entre elas Dr. Leandro Barreto e Dra. Sol Ayala — para discutir a integração entre ciência, saúde, espiritualidade e desenvolvimento humano.",
        eixos: [
          "Ciência",
          "Saúde Integral",
          "Espiritualidade",
          "Consciência e Desenvolvimento Humano",
        ],
        highlight: true,
      },
      {
        title:
          "Painel · Psicogenealogia, Saúde Mental e o Mundo Corporativo",
        desc: "A Psicogenealogia como ferramenta de saúde mental nas empresas, alinhada às novas demandas da NR-1, à gestão consciente e ao desenvolvimento humano nas organizações.",
        eixos: ["Psicogenealogia", "Saúde Mental", "Consciência e Desenvolvimento Humano"],
      },
      {
        title: "Painel · O Corpo como Guardião da História",
        desc: "Reflexões sobre memórias corporais, raízes ocultas do sintoma e as heranças transgeracionais que atravessam gerações — do sintoma físico à leitura sistêmica.",
        eixos: ["Saúde Integral", "Psicogenealogia"],
      },
      {
        title:
          "Painel · Decodificação Dental, Constelações e Sistemas Familiares",
        desc: "Como acessar e ressignificar emoções e vínculos familiares a partir da leitura simbólica dos dentes, integrando odontologia, emoções e constelações.",
        eixos: ["Odontologia Integrativa", "Psicogenealogia"],
      },
      {
        title:
          "Painel · Consciência, Ancestralidade e Reconexão com a Essência",
        desc: "Diálogos sobre autoconhecimento, ancestralidade, espiritualidade e os caminhos de retorno à essência — corpo, consciência e presença como territórios de transformação.",
        eixos: ["Espiritualidade", "Consciência e Desenvolvimento Humano"],
      },
      {
        title: "Experiências de Integração — Jantar Temático e Apresentação Musical",
        desc: "Momento de convivência entre participantes e palestrantes, encerrando o dia com uma experiência sensorial em torno do tema Raízes da Alma.",
        eixos: ["Espiritualidade"],
      },
    ],
  },
  {
    date: "08 · 11",
    weekday: "Domingo",
    badge: "Encerramento",
    title: "Encerramento — Exclusivo Psicogenealogistas",
    summary: "Manhã reservada exclusivamente para psicogenealogistas certificados.",
    exclusive: true,
    panels: [
      {
        title: "Imersão Final Exclusiva",
        desc: "Encontro reservado para psicogenealogistas certificados, com aprofundamento clínico, integração dos aprendizados e encerramento ritualístico do congresso.",
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
              Painéis de integração entre ciência, clínica e espiritualidade,
              organizados por eixos temáticos. A programação detalhada será
              anunciada mais próximo da data do evento.
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
                    <p className="text-sm text-muted-foreground max-w-xs">
                      {d.summary}
                    </p>
                  </div>
                </header>

                <ol className="divide-y divide-gold/10">
                  {d.panels.map((p, i) => (
                    <li
                      key={i}
                      className={`p-6 md:p-8 ${
                        p.highlight ? "bg-gold/[0.04]" : ""
                      }`}
                    >
                      {p.highlight && (
                        <p className="label-cinzel text-[0.55rem] text-gold tracking-[0.3em] mb-3">
                          Painel destaque
                        </p>
                      )}
                      <h4 className="font-display italic text-xl md:text-2xl text-offwhite leading-snug mb-3">
                        {p.title}
                      </h4>
                      <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                      {p.eixos.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {p.eixos.map((e) => (
                            <span
                              key={e}
                              className={`label-cinzel text-[0.55rem] tracking-[0.25em] px-2.5 py-1 rounded-full border ${eixoColor[e]}`}
                            >
                              {e}
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-center text-xs text-muted-foreground/80 mt-10 italic">
            * A programação detalhada por painéis e horários será divulgada mais
            próximo da data do evento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
