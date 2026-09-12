import { Heart, MapPin } from "lucide-react";
import BotanicalCrest from "./BotanicalCrest";

export default function FooterSection() {
  return (
    <footer className="bg-[#24211E] text-[#E8E2D7] py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8C8070] to-transparent opacity-40" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Botanical Crest in muted champagne */}
        <div className="mb-4 opacity-70">
          <BotanicalCrest className="w-12 h-12 text-[#B5A58A]" />
        </div>

        {/* Big Signature */}
        <p className="font-serif italic text-2xl sm:text-3xl text-[#FAF7F2] font-light mb-2">
          Con mucho cariño,
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.18em] text-[#FAF7F2] uppercase font-normal mb-8">
          Mila <span className="font-serif italic text-2xl sm:text-3xl lowercase text-[#B5A58A]">&</span> Jorge
        </h2>

        {/* Address as in the invitation */}
        <div className="max-w-md mx-auto space-y-1 text-[#BFB6A8] text-xs sm:text-sm font-sans font-light mb-6">
          <div className="flex items-center justify-center gap-1.5 text-[#D4C9BA]">
            <MapPin className="w-3.5 h-3.5 text-[#B5A58A]" />
            <span className="font-medium tracking-wide">Dirección de los Novios:</span>
          </div>
          <p className="tracking-wide">Martín de Zamora 5375,</p>
          <p className="tracking-wide">Torre B, Depto 11, Las Condes.</p>
        </div>

        <div className="w-16 h-[1px] bg-[#595247] my-4" />

        <p className="font-display text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#998F81] mb-2">
          Santiago, Noviembre 2026
        </p>

        <p className="font-serif italic text-xs text-[#7A7266] mt-4 flex items-center justify-center gap-1.5">
          <span>07 · 11 · 2026 · Casona El Cruceral, Pirque</span>
        </p>
      </div>
    </footer>
  );
}
