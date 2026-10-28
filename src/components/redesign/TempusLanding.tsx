import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Check,
  ArrowUpRight,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { speakers, type Speaker } from "../site/Convidados";
import { Sobre } from "../site/Sobre";
import { AncestralBackdrop } from "../site/AncestralBackdrop";
import { agenda } from "./agenda";
const logo = "/event-assets/tempus-logo.webp";
const isPreview = import.meta.env.VITE_TEMPUS_PREVIEW === "true";

import hotel from "@/assets/hotel.jpg";
import "./tempus-redesign.css";
import "./tempus-atmosphere.css";

const HOTMART =
  "https://hotmart.com/pt-br/marketplace/produtos/iii-congresso-psigogenealogia-liz/Q106809712U";
const whatsapp = (
  message = "Olá! Tenho interesse no Congresso Tempus. Pode me ajudar com a inscrição?",
) => `https://wa.me/554491318081?text=${encodeURIComponent(message)}`;
const photo = (path: string) =>
  path.startsWith("/__l5e/")
    ? `/event-assets/${path
        .split("/")
        .pop()!
        .replace(/\.[^.]+$/, ".webp")}`
    : path;
const orderedSpeakers = [...speakers].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

function SpeakerProfile({ speaker }: { speaker: Speaker }) {
  const name = speaker.name;
  return (
    <article className="t-speaker">
      <div className="t-speaker-portrait">
        <img
          src={photo(speaker.photo)}
          data-portrait-crop={speaker.photoCrop}
          alt={speaker.name}
          loading="lazy"
          width="640"
          height="720"
        />
        {speaker.modality === "online" && <span className="t-online">Participação online</span>}
      </div>
      <div className="t-speaker-status">
        {speaker.specialPresence && <span>Presença especial · Criadora do evento</span>}
      </div>
      <h4>{name}</h4>
      <p>{speaker.role}</p>
      <details className="t-bio">
        <summary aria-label={`Conhecer trajetória de ${name}`}>
          Conhecer trajetória <Plus size={16} aria-hidden="true" />
        </summary>
        <div>
          {speaker.bio
            .split("\n")
            .filter(Boolean)
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </div>
      </details>
    </article>
  );
}

function Program() {
  return (
    <div className="t-agenda t-agenda-without-times">
      <p className="t-agenda-note">A programação está em atualização. Os dias e horários serão divulgados após a revisão do cronograma.</p>
      {agenda.map((group) => (
        <section key={group.id} aria-labelledby={`program-${group.id}`}>
          <div className="t-agenda-meta">
            <h3 id={`program-${group.id}`}>{group.audience}</h3>
          </div>
          <ul className="t-sessions">
            {group.items.map(([title, name]) => (
              <li key={`${title}-${name}`}>
                <div>
                  {title && <h4>{title}</h4>}
                  <p>{name}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

const faqs = [
  [
    "Preciso ser profissional para participar?",
    "Os dias 06 e 07 de novembro são abertos ao público em geral. Segundo as regras atuais, o domingo, 08/11, é reservado a psicogenealogistas certificados. Nossa equipe pode orientar a escolha do ingresso adequado.",
  ],
  [
    "O ingresso inclui hospedagem?",
    "A hospedagem é contratada separadamente. Você pode falar diretamente com o Hotel Torres da Cachoeira e mencionar o Congresso Tempus ao reservar.",
  ],
  [
    "O que está incluído no ingresso?",
    "A modalidade completa anunciada inclui a programação dos dias contratados, material do evento e o almoço de sábado. Os ingressos diários anunciados não incluem almoço. Confirme com a equipe a cobertura da sua modalidade e a elegibilidade para domingo antes de concluir a compra.",
  ],
  [
    "Como funciona o pagamento?",
    "A oferta geral está anunciada na Hotmart por R$ 1.200, em 3x de R$ 400. Confira o valor total e as condições exibidas pela plataforma antes de pagar. Para condições da comunidade LIZ e ingressos diários, fale com a equipe.",
  ],
  [
    "Há certificado de participação?",
    "O site atual informa certificado digital de participação. Consulte a equipe sobre a emissão correspondente aos dias contratados.",
  ],
  [
    "Posso receber ajuda para me inscrever?",
    "Sim. Fale com a equipe LIZ pelo WhatsApp +55 44 9131-8081 para esclarecer condições, dias de participação e o caminho de inscrição.",
  ],
];

export function TempusLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  return (
    <div className="tempus-redesign">
      {/* THESIS: Encontro Tempus com decisão simples, seis blocos e profundidade opcional.
        OWN-WORLD: preto profundo original, ouro metálico, logo completo e arquivo vivo do tempo.
        STORY: entender o convite, reconhecer seu lugar, consultar agenda, escolher ingresso.
        FIRST VIEWPORT: logo oficial central, manifesto original, datas e ação; textura ancestral.
        FORM: arquitetura de seis blocos aprovada por Pietro em 19/10; tempus-identity-restored-v2-20261019.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
      {isPreview && (
        <div className="t-reviewbar">
          <span>Prévia para revisão · ainda não publicada</span>
          <button
            aria-expanded={reviewOpen}
            aria-controls="t-review-notes"
            onClick={() => setReviewOpen(!reviewOpen)}
          >
            {reviewOpen ? "Fechar notas" : "Ver 3 pontos a confirmar"}
            <Plus size={14} aria-hidden="true" />
          </button>
        </div>
      )}
      {isPreview && reviewOpen && (
        <aside id="t-review-notes" className="t-review-notes">
          <strong>Antes de publicar</strong>
          <ol>
            <li>
              Conciliar diários (R$ 75 / R$ 150 / R$ 75) e pacote (R$ 1.200), suas inclusões e links
              de compra.
            </li>
            <li>
              Confirmar acesso ao domingo e condição LIZ de R$ 900. A prévia mantém a restrição
              atualmente informada e direciona essas consultas à equipe.
            </li>
            <li>
              Atualizar o cronograma quando a equipe confirmar os dias e horários e validar os links de checkout.
              Nenhuma compra foi testada.
            </li>
          </ol>
        </aside>
      )}
      <a className="t-skip" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="t-header">
        <div className="t-container t-header-inner">
          <a href="#hero" className="t-logo" aria-label="Tempus — início">
            <img src={logo} alt="Tempus — Congresso III" width="180" height="75" />
          </a>
          <nav
            className={`t-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegação principal"
            onKeyDown={(e) => {
              if (e.key === "Escape") setMenuOpen(false);
            }}
          >
            {[
              ["Programação", "programacao"],
              ["Convidados", "convidados"],
              ["Local", "local"],
            ].map(([label, anchor]) => (
              <a key={anchor} href={`#${anchor}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="t-button t-button-small"
              href="#investimento"
              onClick={() => setMenuOpen(false)}
            >
              Ver ingressos <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
          <button
            className="t-menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="conteudo">
        <section className="t-hero" id="hero" aria-labelledby="t-title">
          <AncestralBackdrop
            variant="hero"
            className="t-original-backdrop"
            textureSrc="/event-assets/tempus-texture.webp"
            atmosphere="immersive"
          />
          <div className="t-container t-hero-content">
            <h1 id="t-title" className="t-hero-logo">
              <span className="sr-only">
                Tempus — Ciclos Invisíveis das Gerações · III Congresso de Psicogenealogia
              </span>
              <img
                src={logo}
                alt="Tempus — Ciclos Invisíveis das Gerações"
                width="800"
                height="340"
                fetchPriority="high"
              />
            </h1>
            <p className="t-hero-date">
              06 · 07 · 08 novembro 2026 <span>Florianópolis</span>
            </p>
            <p className="t-hero-manifesto">
              O tempo que herdamos.
              <br className="t-mobile-break" /> <em>A consciência que transforma o legado.</em>
            </p>
            <div className="tempus-divider" aria-hidden="true">
              <span className="tempus-divider__mark" />
            </div>
            <p className="t-hero-description">
              Um congresso para investigar as heranças invisíveis que atravessam famílias, corpos,
              vínculos e destinos — e abrir novos ciclos de consciência.
            </p>
            <p className="t-hero-place">Evento presencial · Hotel Torres da Cachoeira</p>
            <div className="t-hero-actions">
              <a href="#investimento" className="t-button">
                Quero participar <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#programacao" className="t-button t-button-outline">
                Ver programação <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <a href={whatsapp()} className="t-help-link" target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> Preciso de ajuda para me inscrever
            </a>
            <p className="t-hero-footnote">
              Sexta e sábado abertos ao público. Domingo para psicogenealogistas certificados.
            </p>
          </div>
        </section>

        <section className="t-section t-origins" id="sobre" aria-labelledby="t-about-title">
          <div className="t-container">
            <div className="t-about-grid">
              <h2 id="t-about-title">
                A Psicogenealogia e o encontro entre <em>saberes que transformam vidas.</em>
              </h2>
              <div className="t-about-copy">
                <p>
                  Para quem deseja conhecer a Psicogenealogia, aprofundar sua prática ou encontrar
                  pessoas que compartilham o interesse pelas histórias familiares.
                </p>
                <p>
                  Três dias de palestras, diálogos e vivências em torno de ancestralidade,
                  consciência e vínculos entre gerações.
                </p>
              </div>
            </div>
            <div className="t-benefits">
              <article>
                <h3>Psicogenealogia</h3>
                <p>
                  Conheça perspectivas sobre as histórias e os vínculos que atravessam gerações.
                </p>
              </article>
              <article>
                <h3>Ciência e espiritualidade</h3>
                <p>
                  Encontre diferentes olhares sobre Psicogenealogia, saúde integral e
                  espiritualidade.
                </p>
              </article>
              <article>
                <h3>Encontros e vivências</h3>
                <p>Participe de conversas, palestras e vivências junto à comunidade LIZ.</p>
              </article>
            </div>
            <details className="t-about-details">
              <summary>
                Conheça a proposta completa do congresso <Plus size={18} aria-hidden="true" />
              </summary>
              <div className="t-original-essay">
                <Sobre id="proposta-completa" />
              </div>
            </details>
            <div className="t-early-offer">
              <div>
                <strong>Já quer organizar sua participação?</strong>
                <span>Consulte modalidades, condições e o que está incluído.</span>
              </div>
              <a href="#investimento">
                Ver ingressos <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="t-section t-program" id="programacao" aria-labelledby="t-program-title">
          <div className="t-container">
            <div className="t-section-heading">
              <div>
                <h2 id="t-program-title">
                  Três dias. <em>Uma travessia.</em>
                </h2>
              </div>
              <p>
                Conheça os temas e os palestrantes da programação. Os dias e horários estão em revisão.
              </p>
            </div>
            <Program />
            <div id="convidados" className="t-speakers-block">
              <div className="t-subheading">
                <h3>Palestrantes desta edição</h3>
                <p>Conheça os palestrantes e suas trajetórias.</p>
              </div>
              <div className="t-speaker-grid">
                {orderedSpeakers.map((speaker) => (
                  <SpeakerProfile key={speaker.name} speaker={speaker} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="t-section t-meeting" id="memorias" aria-labelledby="t-meeting-title">
          <div className="t-container">
            <div className="t-section-heading">
              <h2 id="t-meeting-title">
                Memórias que <em>permaneceram na alma.</em>
              </h2>
              <p>
                Uma família que trabalha para famílias. Registros reais de quem já viveu os
                encontros da LIZ.
              </p>
            </div>
            <div className="t-memory-grid">
              <figure>
                <img
                  src="/event-assets/edicao-domo-interno.webp"
                  alt="Palestra em um dos encontros anteriores da LIZ"
                  loading="lazy"
                  width="1400"
                  height="900"
                />
                <figcaption>Encontros das edições anteriores</figcaption>
              </figure>
              <figure>
                <img
                  src="/event-assets/edicao-ritual.webp"
                  alt="Participantes em uma vivência ao ar livre de edição anterior"
                  loading="lazy"
                  width="1400"
                  height="900"
                />
                <figcaption>Vivências ao ar livre</figcaption>
              </figure>
              <figure>
                <img
                  src="/event-assets/memoria-edicao-05.webp"
                  alt="Foto coletiva dos participantes de edição anterior"
                  loading="lazy"
                  width="1400"
                  height="900"
                />
                <figcaption>Participantes dos encontros</figcaption>
              </figure>
            </div>
            <details className="t-video-details">
              <summary>
                Assistir ao registro de uma edição anterior{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </summary>
              <div className="t-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/ngi3sUSRkug"
                  title="Registro em vídeo de encontro anterior da LIZ"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </details>
            <div className="t-venue" id="local">
              <div className="t-venue-photo">
                <img
                  src={hotel}
                  alt="Hotel Torres da Cachoeira em Florianópolis"
                  loading="lazy"
                  width="1000"
                  height="800"
                />
              </div>
              <div className="t-venue-copy">
                <h3>
                  Hotel Torres da Cachoeira.
                  <br />
                  <em>Florianópolis, SC.</em>
                </h3>
                <p>
                  <strong>Hotel Torres da Cachoeira</strong>
                  <br />
                  Av. Luiz Boiteux Piazza, 3991
                  <br />
                  Cachoeira do Bom Jesus · Florianópolis, SC
                </p>
                <p>
                  O congresso é presencial. A hospedagem é contratada separadamente, diretamente com
                  o hotel.
                </p>
                <div className="t-venue-links">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hotel+Torres+da+Cachoeira+Florianopolis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver localização <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                  <a
                    href="https://wa.me/5548991232043?text=Ol%C3%A1!%20Quero%20reservar%20hospedagem%20para%20o%20III%20Congresso%20de%20Psicogenealogia."
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar com o hotel <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="t-section t-tickets"
          id="investimento"
          aria-labelledby="t-tickets-title"
        >
          <div className="t-container">
            <div className="t-section-heading">
              <h2 id="t-tickets-title">
                Seu lugar <em>nessa experiência.</em>
              </h2>
              <p>
                Escolha como participar. Nossa equipe ajuda a encontrar a modalidade adequada para
                você.
              </p>
            </div>
            <div className="t-offers">
              <article className="t-main-offer">
                <div className="t-offer-intro">
                  <h3>Ingresso completo</h3>
                  <p>Oferta geral anunciada na Hotmart</p>
                </div>
                <div className="t-price">
                  <span>
                    R$ <strong>1.200</strong>
                  </span>
                  <p>ou 3x de R$ 400</p>
                </div>
                <ul>
                  {[
                    "Programação dos dias contratados",
                    "Almoço de sábado, 07/11",
                    "Material do evento",
                  ].map((s) => (
                    <li key={s}>
                      <Check size={18} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="t-offer-note">
                  Domingo reservado a psicogenealogistas certificados. Hospedagem contratada à
                  parte.
                </p>
                <a href={HOTMART} target="_blank" rel="noreferrer" className="t-button">
                  Ver oferta na Hotmart <ArrowUpRight size={20} aria-hidden="true" />
                </a>
                <p className="t-payment">
                  <ShieldCheck size={16} aria-hidden="true" />
                  Confira as condições finais na plataforma.
                </p>
              </article>
              <div className="t-other-offers">
                <article>
                  <h3>Você faz parte da LIZ?</h3>
                  <p>
                    Alunos e psicogenealogistas LIZ têm uma condição específica. Confirme com nossa
                    equipe o valor e o ingresso correspondente.
                  </p>
                  <a
                    href={whatsapp(
                      "Olá! Faço parte da comunidade LIZ e quero consultar minha condição para o Congresso Tempus.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar condição LIZ <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </article>
                <article>
                  <h3>Prefere participar por dia?</h3>
                  <p>
                    Consulte os ingressos diários, a disponibilidade e o que está incluído em cada
                    data. O almoço não está incluído nos diários anunciados.
                  </p>
                  <a
                    href={whatsapp(
                      "Olá! Quero consultar os ingressos por dia do Congresso Tempus e saber em quais dias posso participar.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar ingressos por dia <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </article>
                <div className="t-ticket-help">
                  <MessageCircle size={24} aria-hidden="true" />
                  <p>
                    Quer conversar antes?
                    <br />
                    <a href={whatsapp()} target="_blank" rel="noreferrer">
                      A equipe LIZ ajuda você a se inscrever.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="t-section t-faq-section" id="faq" aria-labelledby="t-faq-title">
          <div className="t-container">
            <div className="t-faq-grid">
              <div>
                <h2 id="t-faq-title">
                  Tudo o que você <em>precisa saber.</em>
                </h2>
                <p>
                  Reunimos as informações para você organizar sua participação com tranquilidade.
                </p>
                <a href={whatsapp()} className="t-text-link" target="_blank" rel="noreferrer">
                  Falar com a equipe <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="t-faq-list">
                {faqs.map(([q, a]) => (
                  <details key={q}>
                    <summary>
                      {q}
                      <Plus size={20} aria-hidden="true" />
                    </summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="t-close">
              <div>
                <h3>
                  O que você herdou
                  <br />
                  <em>pode se transformar.</em>
                </h3>
                <p>06 a 08 de novembro de 2026 · Florianópolis</p>
              </div>
              <a href="#investimento" className="t-button">
                Quero participar <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="t-footer">
        <div className="t-container t-footer-top">
          <div>
            <img src={logo} alt="Tempus — Congresso III" width="180" height="75" />
            <p>
              Ciclos Invisíveis das Gerações
              <br />
              Uma realização Instituto LIZ.
            </p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/psicogenealogia.liz/"
              target="_blank"
              rel="noreferrer"
            >
              @psicogenealogia.liz <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href="mailto:contato@institutoliz.com">contato@institutoliz.com</a>
            <a href={whatsapp()} target="_blank" rel="noreferrer">
              WhatsApp · +55 44 9131-8081
            </a>
          </div>
        </div>
        <div className="t-container t-footer-bottom">
          <span>© 2026 Instituto LIZ</span>
          <div>
            <a href="/privacidade">Privacidade</a>
            <a href="/termos">Termos de uso</a>
          </div>
        </div>
      </footer>
      <nav className="t-mobile-actions" aria-label="Inscrição e atendimento">
        <a href={whatsapp()} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden="true" />
          Tirar dúvidas
        </a>
        <a className="t-button" href="#investimento">
          Ver ingressos <ArrowRight size={18} aria-hidden="true" />
        </a>
      </nav>
    </div>
  );
}
