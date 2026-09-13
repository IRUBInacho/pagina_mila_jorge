import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, ExternalLink, Printer } from "lucide-react";
import BotanicalCrest from "./BotanicalCrest";

export default function FormalCardSection() {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("21062421");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="invitacion"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F4F0E8]/60 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section title & introductory context */}
        <div className="text-center mb-10">
          <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#8C8070] uppercase">
            PARTE OFICIAL DE MATRIMONIO
          </p>
          <h2 className="font-serif italic text-2xl sm:text-3xl text-[#2F2B27] mt-1 font-light">
            La Invitación de Nuestras Familias
          </h2>
          <div className="w-12 h-[1px] bg-[#C8C0B2] mx-auto mt-4" />
        </div>

        {/* The Formal Stationery Card Replica (Honoring the reference document) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative bg-[#FCFAF7] border border-[#DDD6C8] rounded-xl p-4 sm:p-8 md:p-12 shadow-xl shadow-[#3D3833]/5 text-[#2C2926] paper-card overflow-hidden"
        >
          {/* Subtle architectural background sketch watermark of Casona El Cruceral */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
            <svg viewBox="0 0 600 300" className="w-full h-full max-w-2xl" fill="none" stroke="currentColor">
              {/* Elegant historic colonial casona outlines */}
              <path d="M50 220 H550 V110 H50 Z" strokeWidth="1" />
              <path d="M20 110 L300 40 L580 110" strokeWidth="1.5" />
              <rect x="250" y="140" width="100" height="80" strokeWidth="1" />
              <path d="M300 140 V220" strokeWidth="0.8" />
              <rect x="90" y="135" width="40" height="55" strokeWidth="1" />
              <rect x="160" y="135" width="40" height="55" strokeWidth="1" />
              <rect x="400" y="135" width="40" height="55" strokeWidth="1" />
              <rect x="470" y="135" width="40" height="55" strokeWidth="1" />
              {/* Colonnade & arches */}
              <circle cx="300" cy="100" r="16" strokeWidth="0.8" />
            </svg>
          </div>

          {/* Double framed border just like the physical invitation */}
          <div className="relative border border-[#D5CEC0] rounded-lg p-5 sm:p-9 md:p-14">
            {/* Inner secondary hairline border with soft rounded corners */}
            <div className="absolute inset-2 sm:inset-3 border border-[#E8E2D6] rounded pointer-events-none" />

            {/* Corner flourishes */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#8C8070]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#8C8070]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#8C8070]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#8C8070]" />

            {/* Top row: Parents of the Bride & Groom */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4 text-center sm:text-left mb-6 sm:mb-10">
              {/* Bride's Parents (Left) */}
              <div className="space-y-1 sm:text-left">
                <p className="font-display text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#3A3632]">
                  Jaime Antonio Harcha Cassis
                </p>
                <p className="font-display text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#3A3632]">
                  Ana Victoria Medina Miranda
                </p>
              </div>

              {/* Center Botanical Branch (Top Crest) */}
              <div className="order-first sm:order-none flex justify-center">
                <BotanicalCrest className="w-12 h-12 sm:w-14 sm:h-14 text-[#8C8070]" />
              </div>

              {/* Groom's Parents (Right) */}
              <div className="space-y-1 sm:text-right">
                <p className="font-display text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#3A3632]">
                  Juan Pablo Buc Calderón
                </p>
                <p className="font-display text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#3A3632]">
                  Joeli Andrea Ramírez Peréz
                </p>
              </div>
            </div>

            {/* Formal Announcement Statement */}
            <div className="text-center my-6 sm:my-10">
              <p className="font-display text-[11px] sm:text-[13px] tracking-[0.24em] text-[#554F47] uppercase">
                Participan a usted al matrimonio de sus hijos
              </p>

              {/* Main Headline: JORGE & MILA */}
              <div className="my-6 sm:my-9">
                <h3 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.15em] text-[#24211E] uppercase font-normal">
                  Jorge <span className="font-serif italic font-light lowercase text-2xl sm:text-4xl text-[#9E8C73]">&</span> Mila
                </h3>
              </div>

              {/* Invitation body details */}
              <div className="max-w-xl mx-auto space-y-4 text-center">
                <p className="font-display text-[11px] sm:text-[13px] tracking-[0.18em] text-[#403B35] leading-relaxed uppercase">
                  Y tienen el agrado de invitarle a una ceremonia religiosa que se realizará en{" "}
                  <span className="font-medium border-b border-[#C8C0B2] pb-[1px]">
                    Casona El Cruceral (Av. Virginia Subercaseaux 2405, Pirque)
                  </span>{" "}
                  el día{" "}
                  <span className="font-medium text-[#1A1816]">
                    sábado 7 de noviembre a las 16:30 hrs en punto
                  </span>
                </p>

                <p className="font-display text-[11px] sm:text-[13px] tracking-[0.22em] text-[#4A443D] uppercase font-normal pt-2">
                  Y a una recepción en el mismo lugar.
                </p>
              </div>
            </div>

            {/* Divider line */}
            <div className="w-24 h-[1px] bg-[#DDD6C8] mx-auto my-8" />

            {/* Bottom row: RSVP & Santiago + Address & Novios Paris */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-center sm:text-left text-[#4A453F]">
              {/* Bottom Left */}
              <div className="space-y-2">
                <a
                  href="#rsvp"
                  className="inline-flex items-center gap-1.5 font-display text-[11px] sm:text-xs tracking-[0.18em] text-[#2F2B27] uppercase font-medium hover:text-[#7A6D5A] transition-colors underline underline-offset-4 decoration-[#C8C0B2]"
                >
                  <span>R.S.V.P Confirmar Asistencia Aquí</span>
                  <ExternalLink className="w-3 h-3 text-[#8C8070]" />
                </a>
                <p className="font-display text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#736B60]">
                  Santiago, Noviembre 2026
                </p>
              </div>

              {/* Bottom Right */}
              <div className="space-y-1 sm:text-right">
                <p className="font-display text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#47413A]">
                  Martín de Zamora 5375,
                </p>
                <p className="font-display text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#47413A]">
                  Torre B, Depto 11, Las Condes.
                </p>
                <div className="flex items-center justify-center sm:justify-end gap-2 pt-1.5">
                  <p className="font-display text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#2B2724]">
                    Código Novios Paris: <span className="font-semibold text-[#8C7654]">21062421</span>
                  </p>
                  <button
                    onClick={handleCopyCode}
                    className="p-1 text-[#8C8070] hover:text-[#2B2724] transition-colors"
                    title="Copiar código novios"
                    aria-label="Copiar código"
                  >
                    {copiedCode ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action utility bar below the card */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 font-display text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 rounded border border-[#D5CEC0] bg-white/70 hover:bg-white text-[#554F47] transition-all shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5 text-[#8C8070]" />
            <span>Imprimir o Guardar Tarjeta</span>
          </button>

          <a
            href="#rsvp"
            className="font-display text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 rounded border border-[#8C8070] bg-[#2F2B27] text-[#FAF8F5] hover:bg-[#453F39] transition-all shadow-xs"
          >
            Confirmar en Formulario
          </a>
        </div>
      </div>
    </section>
  );
}
