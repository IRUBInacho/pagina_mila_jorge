import { motion } from "motion/react";
import { Sparkles, Footprints, Moon } from "lucide-react";

export default function DresscodeSection() {
  return (
    <section
      id="dresscode"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-[#FAF8F5] relative paper-texture"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#8C8070] uppercase">
            CÓDIGO DE VESTIMENTA
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#282522] mt-2 font-light">
            Dresscode: Formal
          </h2>
          <div className="w-12 h-[1px] bg-[#C8C0B2] mx-auto mt-4" />
        </div>

        {/* Content cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Ellos */}
          <div className="bg-[#FCFAF7] border border-[#DDD6C8] rounded-xl p-7 text-center paper-card flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#D5CEC0] flex items-center justify-center mb-4 text-[#8C7A63]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xs sm:text-sm tracking-[0.2em] text-[#2C2926] uppercase font-medium mb-3">
              Para Ellos
            </h3>
            <p className="font-sans text-xs text-[#635C52] leading-relaxed font-light">
              Traje formal o terno completo con camisa de cuello y corbata o corbatín. Colores oscuros o sobrios acordes a una ceremonia de tarde y noche.
            </p>
          </div>

          {/* Ellas */}
          <div className="bg-[#FCFAF7] border border-[#DDD6C8] rounded-xl p-7 text-center paper-card flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#D5CEC0] flex items-center justify-center mb-4 text-[#8C7A63]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xs sm:text-sm tracking-[0.2em] text-[#2C2926] uppercase font-medium mb-3">
              Para Ellas
            </h3>
            <p className="font-sans text-xs text-[#635C52] leading-relaxed font-light">
              Vestido largo o midi formal de fiesta. Sugerimos reservar los tonos blancos y marfil para la novia.
            </p>
          </div>

          {/* Tips de Calzado & Clima */}
          <div className="bg-[#FCFAF7] border border-[#DDD6C8] rounded-xl p-7 text-center paper-card flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-[#D5CEC0] flex items-center justify-center mb-4 text-[#8C7A63]">
              <Footprints className="w-4 h-4" />
            </div>
            <h3 className="font-display text-xs sm:text-sm tracking-[0.2em] text-[#2C2926] uppercase font-medium mb-3">
              Tip Casona & Calzado
            </h3>
            <p className="font-sans text-xs text-[#635C52] leading-relaxed font-light">
              La casona cuenta con amplios jardines y áreas de pasto natural. Recomendamos considerar taco ancho, cuña o protectores de tacón para mayor comodidad.
            </p>
          </div>
        </motion.div>

        {/* Note on Pirque evening climate */}
        <div className="mt-8 text-center">
          <p className="inline-flex items-center gap-2 font-serif italic text-xs sm:text-sm text-[#736A5E]">
            <Moon className="w-3.5 h-3.5 text-[#9E8C73]" />
            En noviembre las tardes en Pirque son muy agradables, pero al anochecer suele refrescar levemente. Sugerimos traer una chaqueta o chal formal para la noche.
          </p>
        </div>
      </div>
    </section>
  );
}
