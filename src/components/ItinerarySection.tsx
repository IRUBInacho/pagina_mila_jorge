import { motion } from "motion/react";
import { Church, Bell, GlassWater, Utensils, Disc3, Sparkles, Clock } from "lucide-react";

export default function ItinerarySection() {
  const isPartyOnly = import.meta.env.VITE_TIPO_INVITACION === 'party';

  const fullSchedule = [
    {
      time: "16:30 HRS",
      subtime: "En punto",
      title: "Llegada & Ceremonia Religiosa",
      description:
        "Recepción de los invitados en la capilla y pérgola de Casona El Cruceral para dar inicio a la ceremonia.",
      icon: Church,
      highlight: true,
    },
    {
      time: "17:00 HRS",
      subtime: "Misa Solemne",
      title: "Santa Misa de Matrimonio",
      description:
        "Bendición de nuestras alianzas e inicio de este nuevo camino juntos acompañados por nuestras familias y amigos.",
      icon: Bell,
      highlight: false,
    },
    {
      time: "18:30 HRS",
      subtime: "Atardecer en Pirque",
      title: "Cóctel de Bienvenida",
      description:
        "Brindis con espumante, selección de aperitivos y música en vivo en los parques y jardines centenarios de la casona.",
      icon: GlassWater,
      highlight: false,
    },
    {
      time: "20:30 HRS",
      subtime: "Banquete",
      title: "Cena & Recepción",
      description:
        "Cena de gala en el salón principal, discursos, momentos memorables y corte de la torta de novios.",
      icon: Utensils,
      highlight: false,
    },
    {
      time: "22:00 HRS",
      subtime: "Hasta tarde",
      title: "¡Gran Fiesta & Baile!",
      description:
        "¡Momento de darlo todo en la pista de baile! Barra abierta, DJ, sorpresas y cotillón para celebrar hasta el amanecer.",
      icon: Disc3,
      highlight: true,
    },
  ];

  const schedule = isPartyOnly
    ? fullSchedule.filter((item) => item.time === "22:00 HRS")
    : fullSchedule;

  return (
    <section
      id="itinerario"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF8F5] relative paper-texture"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#8C8070] uppercase">
            CRONOGRAMA DEL DÍA
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#282522] mt-2 font-light">
            El Itinerario de Nuestra Boda
          </h2>
          <p className="font-sans text-xs sm:text-sm tracking-wide text-[#756E63] mt-3 font-normal">
            Sábado 07 de Noviembre, 2026 · Casona El Cruceral, Pirque
          </p>
          <div className="w-12 h-[1px] bg-[#C8C0B2] mx-auto mt-4" />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical central hairline line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[1px] bg-[#E0D9CC]" />

          <div className="space-y-8 sm:space-y-12">
            {schedule.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    <div
                      className={`p-6 sm:p-7 rounded-xl border transition-all duration-300 ${
                        item.highlight
                          ? "bg-[#FCFAF7] border-[#C8BEAD] shadow-sm"
                          : "bg-white/70 border-[#E8E2D6] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-serif text-xl sm:text-2xl text-[#2F2B26] font-normal tracking-tight flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#8C8070]" />
                          {item.time}
                        </span>
                        <span className="font-display text-[9px] tracking-[0.2em] text-[#8C7A63] uppercase px-2 py-0.5 rounded bg-[#F4EFE6]">
                          {item.subtime}
                        </span>
                      </div>

                      <h3 className="font-display text-sm sm:text-base tracking-[0.12em] text-[#292622] uppercase mt-1 mb-2 font-medium">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-[#665F55] leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full border border-[#D5CEC0] bg-[#FAF8F5] text-[#736858] shadow-xs shrink-0">
                    <IconComponent className="w-5 h-5 text-[#8C7A63]" />
                  </div>

                  {/* Empty counterpart space for desktop symmetry */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Friendly party note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 p-5 rounded-xl border border-dashed border-[#C8BEAD] bg-[#FCFAF7] text-center max-w-xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-[#8C7A63] mb-1">
            <Sparkles className="w-4 h-4" />
            <span className="font-display text-[10px] tracking-[0.25em] uppercase">Pista de Baile</span>
          </div>
          <p className="font-serif italic text-base text-[#4F4941]">
            “¡Estamos contando los días para celebrar juntos y darlo todo en la pista de baile!” 🕺💃🥂
          </p>
        </motion.div>
      </div>
    </section>
  );
}
