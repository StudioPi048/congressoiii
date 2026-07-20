import { motion } from "framer-motion";
import heroImg from "@/assets/hero-roots.jpg";
import tempusLogo from "@/assets/tempus-logo.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Raízes ancestrais sob neblina dourada"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(5,7,6,0.7) 80%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/60"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              boxShadow: "0 0 8px rgba(232, 201, 122, 0.8)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.img
          src={tempusLogo}
          alt="Tempus — Ciclos Invisíveis das Gerações"
          className="w-full max-w-4xl h-auto mx-auto mb-9 mix-blend-screen"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="label-cinzel text-xs text-gold mb-6"
        >
          06 · 07 · 08 NOVEMBRO 2026 · FLORIANÓPOLIS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display italic font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] mb-8"
        >
          O tempo que herdamos. <br />
          <span className="text-gradient-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl not-italic font-normal tracking-wide">
            A consciência que transforma o legado.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-offwhite/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          Um encontro para investigar as heranças invisíveis que atravessam famílias, corpos,
          vínculos e destinos — e abrir novos ciclos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="gold-divider"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="label-cinzel text-[0.7rem] text-offwhite/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12"
        >
          <span>Florianópolis · SC</span>
          <span className="text-gold">◆</span>
          <span>06, 07 e 08 de Novembro · 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#investimento" className="btn-gold">
            Quero viver este ciclo
          </a>
          <a href="#programacao" className="btn-ghost">
            Ver programação ↓
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
