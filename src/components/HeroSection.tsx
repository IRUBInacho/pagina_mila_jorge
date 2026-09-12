import { motion } from "motion/react";
import { Calendar, MapPin, Sparkles, ArrowDown } from "lucide-react";
import BotanicalCrest from "./BotanicalCrest";
import CountdownTimer from "./CountdownTimer";

export default function HeroSection() {
  const isPartyOnly = import.meta.env.VITE_TIPO_INVITACION === 'fiesta';

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden paper-texture"
    >
      {/* Subtle architectural background watermark matching the historic casona from PDF */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `radial-gradient(circle at center, #8C8070 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Botanical Crest */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-4"
        >
          <BotanicalCrest className="w-16 h-16 sm:w-20 sm:h-20 text-[#8C8070]" />
        </motion.div>

        {/* Subtitle / Header Monogram */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[11px] sm:text-xs tracking-[0.35em] text-[#7A7165] uppercase mb-4"
        >
          {isPartyOnly ? "NUESTRA FIESTA · CASONA EL CRUCERAL" : "NUESTRA BODA · CASONA EL CRUCERAL"}
        </motion.p>

        {/* Big Wedding Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="my-3 sm:my-5"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] text-[#24211E] font-normal leading-tight sm:leading-none uppercase">
            Jorge <span className="font-serif italic font-light lowercase text-3xl sm:text-5xl md:text-6xl text-[#9E8C73]">&</span> Mila
          </h1>
        </motion.div>

        {/* Elegant Date Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mt-3 mb-6 text-[#4A453F]"
        >
          <div className="flex items-center gap-2 font-display text-xs sm:text-sm tracking-[0.22em] uppercase">
            <Calendar className="w-3.5 h-3.5 text-[#9E8C73]" />
            <span>Sábado 07 de Noviembre, 2026</span>
          </div>
          <span className="hidden sm:inline-block text-[#C8C0B2]">·</span>
          <div className="flex items-center gap-2 font-display text-xs sm:text-sm tracking-[0.22em] uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#9E8C73]" />
            <span>Pirque, Chile</span>
          </div>
        </motion.div>

        {/* Romantic Welcome Quote & Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="max-w-xl mx-auto px-4 my-2"
        >
          <p className="font-serif italic text-lg sm:text-xl text-[#524C44] leading-relaxed font-light">
            {isPartyOnly
              ? "“Con mucho cariño te invitamos a celebrar nuestra fiesta de matrimonio. Estamos muy felices de que puedas compartir con nosotros esta gran noche.”"
              : "“Con mucho cariño te enviamos la invitación para nuestro matrimonio. Estamos muy felices de que puedas compartir con nosotros este día tan especial.”"
            }
          </p>
          <p className="font-sans text-xs tracking-wide text-[#7C7469] mt-3 font-normal">
            ¡Estamos contando los días para celebrar juntos y darlo todo en la pista de baile! 🥂✨
          </p>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-lg mt-4"
        >
          <CountdownTimer />
        </motion.div>

        {/* Actions / Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 w-full max-w-md"
        >
          <a
            id="hero-rsvp-cta"
            href="#rsvp"
            className="w-full sm:w-auto font-display text-xs tracking-[0.25em] uppercase px-8 py-3.5 rounded border border-[#8C8070] bg-[#292623] text-[#FAF8F5] hover:bg-[#3D3833] transition-all duration-300 shadow-sm text-center"
          >
            Confirmar Asistencia
          </a>

          {!isPartyOnly && (
            <a
              id="hero-invitation-cta"
              href="#invitacion"
              className="w-full sm:w-auto font-display text-xs tracking-[0.25em] uppercase px-8 py-3.5 rounded border border-[#D5CEC2] bg-white/80 hover:bg-white text-[#3D3834] transition-all duration-300 shadow-xs text-center"
            >
              Ver Invitación Formal
            </a>
          )}
        </motion.div>

        {/* Smooth scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 sm:mt-16"
        >
          <a
            href={isPartyOnly ? "#itinerario" : "#invitacion"}
            className="flex flex-col items-center gap-1.5 text-[#9E8C73] hover:text-[#524C44] transition-colors"
            aria-label="Desplazarse hacia abajo"
          >
            <span className="font-display text-[9px] tracking-[0.3em] uppercase">Deslizar</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
