import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSplit from "../components/landing/HeroSplit";
import WoodSection from "../components/landing/WoodSection";
import TurfSection from "../components/landing/TurfSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans antialiased selection:bg-amber-500 selection:text-neutral-950">
      <Navbar />
      <main>
        <HeroSplit />
        <WoodSection />
        <TurfSection />
      </main>
      <Footer />
    </div>
  );
}
