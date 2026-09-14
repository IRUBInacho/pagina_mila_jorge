/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FormalCardSection from "./components/FormalCardSection";
import ItinerarySection from "./components/ItinerarySection";
import LocationSection from "./components/LocationSection";
import DresscodeSection from "./components/DresscodeSection";
import GiftRegistrySection from "./components/GiftRegistrySection";
import RsvpSection from "./components/RsvpSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  const isPartyOnly = import.meta.env.VITE_TIPO_INVITACION === 'party';

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] font-sans antialiased selection:bg-[#E3D9CB] selection:text-[#1A1816]">
      {/* Floating navigation header */}
      <Navigation />

      <main>
        {/* 1. Hero Section with countdown and romantic welcome */}
        <HeroSection />

        {/* 2. Parents' formal invitation card based on reference document */}
        <FormalCardSection />

        {/* 3. Schedule & Itinerary */}
        <ItinerarySection />

        {/* 4. Venue & Map Location */}
        <LocationSection />

        {/* 5. Dresscode */}
        <DresscodeSection />

        {/* 6. Gift Registry (Novios Paris 21062421) */}
        <GiftRegistrySection />

        {/* 7. RSVP (Confirmación de asistencia) */}
        <RsvpSection />
      </main>

      {/* 8. Footer */}
      <FooterSection />
    </div>
  );
}

