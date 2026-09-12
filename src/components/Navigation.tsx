import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "INICIO", href: "#hero" },
    { name: "INVITACIÓN", href: "#invitacion" },
    { name: "ITINERARIO", href: "#itinerario" },
    { name: "UBICACIÓN", href: "#ubicacion" },
    { name: "DRESSCODE", href: "#dresscode" },
    { name: "REGALOS", href: "#regalos" },
    { name: "RSVP", href: "#rsvp" },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D7] py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2 font-display text-sm md:text-base tracking-[0.25em] text-[#2D2A26] uppercase transition-opacity hover:opacity-80"
        >
          <span>Jorge</span>
          <span className="font-serif italic text-xs text-[#9E8C73] lowercase">&</span>
          <span>Mila</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-[11px] tracking-[0.22em] text-[#55504A] hover:text-[#1A1918] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#9E8C73] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#rsvp"
            className="font-display text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 rounded border border-[#8C8070] bg-[#2C2825] text-[#FAF8F5] hover:bg-[#3D3834] transition-all duration-200 shadow-xs"
          >
            Confirmar RSVP
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#4A453F] hover:text-[#1A1918] focus:outline-hidden"
          aria-label="Menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D7] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-xs tracking-[0.25em] text-[#423E39] hover:text-[#1A1918] py-2 w-full border-b border-[#F0EBE1] last:border-none"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 w-full font-display text-xs tracking-[0.25em] uppercase py-3 rounded border border-[#8C8070] bg-[#2C2825] text-[#FAF8F5] text-center"
            >
              Confirmar Asistencia (RSVP)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
