import { useState } from "react";
import { motion } from "motion/react";
import { Gift, Copy, Check, ExternalLink, Heart } from "lucide-react";

export default function GiftRegistrySection() {
  const [copied, setCopied] = useState(false);
  const code = "21062421";
  const parisCatalogUrl = "https://www.noviosparis.cl/home/couple-catalog/21062421";

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="regalos"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F4EFE6]/70 relative"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-display text-[10px] sm:text-xs tracking-[0.35em] text-[#8C8070] uppercase">
            MUESTRAS DE CARIÑO
          </p>
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#282522] mt-2 font-light">
            Lista de Regalos
          </h2>
          <div className="w-12 h-[1px] bg-[#C8C0B2] mx-auto mt-4" />
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FCFAF7] border border-[#DDD6C8] rounded-xl p-6 sm:p-10 md:p-12 text-center paper-card shadow-sm"
        >
          <div className="w-14 h-14 rounded-full border border-[#D5CEC0] bg-[#FAF8F5] flex items-center justify-center mx-auto mb-6 text-[#8C7A63]">
            <Gift className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2824] font-normal mb-3">
            El mejor regalo es tu compañía
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#665F55] max-w-md mx-auto leading-relaxed font-light mb-8">
            Lo más importante para nosotros es que estés presente en este día tan especial. Si deseas hacernos un presente para nuestro nuevo hogar, puedes encontrar nuestra lista en <strong>Novios Paris</strong>.
          </p>

          {/* Novios Paris Highlight Box */}
          <div className="p-6 rounded-lg border border-[#E0D8CA] bg-[#F7F4EC]/80 max-w-md mx-auto mb-8">
            <p className="font-display text-[10px] sm:text-[11px] tracking-[0.25em] text-[#786E60] uppercase mb-2">
              LISTA DE NOVIOS PARIS
            </p>
            
            <div className="flex items-center justify-center gap-3 my-2">
              <span className="font-serif text-3xl sm:text-4xl tracking-widest text-[#24201D] font-normal">
                {code}
              </span>
              <button
                id="copy-paris-code-button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-display tracking-wider uppercase px-3 py-1.5 rounded border border-[#C5BDAF] bg-white hover:bg-[#FAF8F5] text-[#423D37] transition-all shadow-2xs active:scale-95"
                title="Copiar código"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8C7A63]" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            <p className="font-sans text-[11px] text-[#7E7569] mt-2 font-light">
              Mila & Jorge · Código de lista oficial
            </p>
          </div>

          {/* Direct link button to the Paris catalog */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="paris-catalog-button"
              href={parisCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-display text-xs tracking-[0.22em] uppercase px-8 py-3.5 rounded border border-[#8C8070] bg-[#292623] text-[#FAF8F5] hover:bg-[#3D3833] transition-all shadow-xs"
            >
              <span>Ir al Catálogo de Novios Paris</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#B5A58A]" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EAE3D6] flex items-center justify-center gap-1.5 text-[#8A8174]">
            <Heart className="w-3.5 h-3.5 text-[#A39274]" />
            <span className="font-serif italic text-xs">¡Muchísimas gracias por tu cariño y generosidad!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
