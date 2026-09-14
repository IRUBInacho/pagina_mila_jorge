import { motion } from "motion/react";
import { MapPin, Navigation as NavIcon, CalendarPlus, Car, ExternalLink, Compass } from "lucide-react";

export default function LocationSection() {
  const mapUrl = "https://maps.app.goo.gl/L1zdR68e1ZM4q6N97?g_st=ic";
  const wazeUrl = "https://waze.com/ul?q=Casona+El+Cruceral+Pirque&navigate=yes";

  // Google Calendar event URL generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Matrimonio Mila & Jorge");
    const details = encodeURIComponent(
      "Matrimonio Mila & Jorge en Casona El Cruceral, Pirque. Ceremonia a las 16:30 hrs en punto. ¡Te esperamos!"
    );
    const location = encodeURIComponent("Casona El Cruceral, Av. Virginia Subercaseaux 2405, Pirque, Región Metropolitana, Chile");
    // Start: 2026-11-07 16:30 UTC-3 = 19:30 UTC
    // End: 2026-11-08 05:00 UTC-3 = 08:00 UTC
    const dates = "20261107T193000Z/20261108T080000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // iCal download (.ics file for Apple Calendar / Outlook)
  const downloadIcs = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Mila y Jorge//Matrimonio//ES",
      "BEGIN:VEVENT",
      "UID:matrimonio-mila-jorge-20261107@elcruceral.cl",
      "DTSTAMP:20260911T000000Z",
      "DTSTART:20261107T193000Z",
      "DTEND:20261108T080000Z",
      "SUMMARY:Matrimonio Mila & Jorge",
      "DESCRIPTION:Ceremonia religiosa a las 16:30 hrs en punto en Casona El Cruceral, Pirque. Misa a las 17:00 hrs y posterior recepción y fiesta.",
      "LOCATION:Casona El Cruceral, Av. Virginia Subercaseaux 2405, Pirque",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Matrimonio-Mila-y-Jorge-2026.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section
      id="ubicacion"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F1E8]/70 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#8C8070] uppercase">
            LUGAR DEL EVENTO
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#282522] mt-2 font-light">
            Casona El Cruceral
          </h2>
          <p className="font-sans text-xs sm:text-sm tracking-wider text-[#696155] mt-3 font-normal uppercase">
            Av. Virginia Subercaseaux 2405, Pirque
          </p>
          <div className="w-12 h-[1px] bg-[#C8C0B2] mx-auto mt-4" />
        </div>

        {/* Main Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FCFAF7] border border-[#DDD6C8] rounded-xl p-6 sm:p-10 md:p-12 shadow-md paper-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Venue description & details */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EFE9DC] text-[#7A6C56] font-display text-[10px] tracking-[0.2em] uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>Pirque · Valle del Maipo</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#2C2926] font-normal leading-snug">
                Un entorno patrimonial para celebrar nuestro amor
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#665F55] leading-relaxed font-light">
                Tanto la ceremonia religiosa como la misa, el cóctel, la comida y la fiesta se llevarán a cabo en las mismas dependencias de <strong>Casona El Cruceral</strong>. No será necesario trasladarse durante la jornada.
              </p>

              <div className="space-y-2.5 pt-2 text-[#4A453F] font-sans text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8C8070] shrink-0 mt-0.5" />
                  <span><strong>Dirección:</strong> Av. Virginia Subercaseaux 2405, Pirque, Región Metropolitana.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#8C8070] shrink-0 mt-0.5" />
                  <span><strong>Estacionamiento:</strong> El recinto cuenta con estacionamiento privado y vigilado para todos los invitados.</span>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-[10px] tracking-[0.2em] uppercase px-5 py-3 rounded border border-[#8C8070] bg-[#2C2825] text-[#FAF8F5] hover:bg-[#403B35] transition-all shadow-xs"
                >
                  <NavIcon className="w-3.5 h-3.5 text-[#B5A58A]" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-[10px] tracking-[0.2em] uppercase px-5 py-3 rounded border border-[#D5CEC0] bg-white hover:bg-[#FAF8F5] text-[#3E3A36] transition-all shadow-2xs"
                >
                  <Car className="w-3.5 h-3.5 text-[#8C8070]" />
                  <span>Abrir en Waze</span>
                </a>
              </div>
            </div>

            {/* Right: Architectural framing & Calendar integration */}
            <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-lg border border-[#E5E0D4] bg-[#F7F4EC]/60 text-center">
              <div className="w-12 h-12 rounded-full border border-[#D5CEC0] flex items-center justify-center mb-4 bg-white text-[#8C7A63]">
                <CalendarPlus className="w-6 h-6" />
              </div>

              <h4 className="font-display text-sm tracking-[0.2em] text-[#2D2A26] uppercase font-medium">
                Agendar en mi Calendario
              </h4>

              <p className="font-sans text-xs text-[#6E675D] mt-2 mb-6 font-light max-w-xs leading-relaxed">
                Guarda la fecha y hora exacta en tu agenda digital para no perderte ningún momento.
              </p>

              <div className="flex flex-col w-full max-w-xs gap-2.5">
                <a
                  href={createGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full font-display text-[10px] tracking-[0.2em] uppercase py-2.5 px-4 rounded border border-[#C8C0B2] bg-white hover:bg-[#FAF8F5] text-[#332F2B] transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Añadir a Google Calendar</span>
                  <ExternalLink className="w-3 h-3 text-[#8C8070]" />
                </a>

                <button
                  onClick={downloadIcs}
                  className="w-full font-display text-[10px] tracking-[0.2em] uppercase py-2.5 px-4 rounded border border-[#DCD6CA] bg-white/70 hover:bg-white text-[#524D46] transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Descargar Apple / Outlook (.ics)</span>
                </button>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E8E2D6] w-full text-center">
                <span className="font-serif italic text-xs text-[#8A7D6B]">
                  Sábado 7 de Noviembre 2026 · 16:30 hrs puntual
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
