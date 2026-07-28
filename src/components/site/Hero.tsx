import { motion } from "framer-motion";
import tempusLogo from "@/assets/tempus-logo.png";
import { AncestralBackdrop } from "./AncestralBackdrop";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AncestralBackdrop variant="hero" />

      {/* Poeira do tempo — partículas douradas lentas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/50"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: i % 4 === 0 ? 2 : 1,
              height: i % 4 === 0 ? 2 : 1,
              boxShadow: "0 0 8px rgba(240,200,90,0.7)",
            }}
            animate={{ y: [0, -34, 0], opacity: [0.15, 0.85, 0.15] }}
            transition={{
              duration: 9 + (i % 6),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Logo protagonista, integrada por luz dourada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-10 w-full max-w-3xl"
        >
          <div
            className="absolute inset-0 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(200,149,31,0.22) 0%, rgba(28,119,117,0.12) 45%, transparent 70%)",
            }}
          />
          <h1 className="m-0">
            <span className="sr-only">
              Tempus — Ciclos Invisíveis das Gerações · III Congresso de Psicogenealogia
            </span>
            <img
              src={tempusLogo}
              alt="Tempus — Ciclos Invisíveis das Gerações"
              className="mx-auto h-auto w-full drop-shadow-[0_18px_60px_rgba(0,0,0,0.6)]"
            />
          </h1>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="mb-8 flex items-center justify-center"
        >
          <span className="eyebrow eyebrow--center text-gold">
            06 · 07 · 08 Novembro 2026 · Florianópolis
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mx-auto max-w-2xl font-display text-2xl italic leading-snug text-ivory/90 md:text-3xl"
        >
          O tempo que herdamos.{" "}
          <span className="text-gradient-gold not-italic">A consciência que transforma o legado.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="tempus-divider"
        >
          <span className="tempus-divider__mark" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-offwhite/75 md:text-xl"
        >
          Um congresso para investigar as heranças invisíveis que atravessam famílias, corpos,
          vínculos e destinos — e abrir novos ciclos de consciência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#investimento" className="btn-gold">
            Quero participar
          </a>
          <a href="#programacao" className="btn-ghost">
            Ver programação ↓
          </a>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
