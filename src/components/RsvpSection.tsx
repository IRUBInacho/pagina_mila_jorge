import { motion } from "motion/react";
import { MailCheck, ExternalLink, AlertCircle, HeartHandshake, Sparkles } from "lucide-react";
import BotanicalCrest from "./BotanicalCrest";

export default function RsvpSection() {
  const formUrl = "https://forms.gle/vxtH1rv21Qf4QxrQ6";

  return (
    <section
      id="rsvp"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] relative paper-texture"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <BotanicalCrest className="w-12 h-12 text-[#8C8070]" />
          </div>
          <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#8C8070] uppercase">
            CONFIRMACIÓN DE ASISTENCIA
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#282522] mt-2 font-light">
            Confirma tu Asistencia (R.S.V.P)
          </h2>
          <div className="w-12 h-[1px] bg-[#C8C0B2] mx-auto mt-4" />
        </div>

        {/* RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FCFAF7] border-2 border-[#D5CEC0] rounded-2xl p-6 sm:p-10 md:p-12 text-center paper-card shadow-lg relative overflow-hidden"
        >
          {/* Top subtle golden badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F4EFE6] border border-[#E0D8CA] text-[#7A6C56] font-display text-[10px] tracking-[0.25em] uppercase mb-6">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Esperamos Contar Contigo</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#262320] font-normal leading-tight mb-4">
            ¿Nos acompañas en este gran día?
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#615B52] max-w-lg mx-auto leading-relaxed font-light mb-6">
            Para nosotros es fundamental contar con tu confirmación a la brevedad para afinar todos los preparativos y recepción con el centro de eventos.
          </p>

          {/* Mandatory Note highlighted as requested */}
          <div className="bg-[#FAF5EC] border border-[#DFCBB5] rounded-xl p-4 sm:p-5 max-w-xl mx-auto mb-8 text-left sm:text-center flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#EADCCB]/60 flex items-center justify-center shrink-0 text-[#8C7154]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-serif italic text-sm sm:text-base text-[#4D3F31] font-medium leading-snug">
                “Te pedimos, por favor confirmes tu asistencia completando un formulario por persona, aún cuando no puedas asistir 💌”
              </p>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col items-center gap-4">
            <a
              id="rsvp-form-main-button"
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-display text-xs sm:text-sm tracking-[0.25em] uppercase px-10 py-4 rounded-xl border border-[#7D7060] bg-[#292623] text-[#FAF8F5] hover:bg-[#3D3833] hover:scale-[1.01] transition-all duration-300 shadow-md group"
            >
              <MailCheck className="w-4 h-4 text-[#B5A58A] group-hover:scale-110 transition-transform" />
              <span>Completar Formulario de Confirmación</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <span className="font-sans text-[11px] tracking-wider text-[#8A8175] uppercase">
              Enlace directo a Google Forms
            </span>
          </div>

          {/* Extra friendly reminder */}
          <div className="mt-10 pt-6 border-t border-[#E8E2D6] flex flex-wrap items-center justify-center gap-2 text-xs text-[#7A7266]">
            <Sparkles className="w-3.5 h-3.5 text-[#9E8C73]" />
            <span>Si tienes alguna restricción alimentaria o alergia, podrás indicarlo en el formulario.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
