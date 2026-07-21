import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSplit from "../components/landing/HeroSplit";
import WoodSection from "../components/landing/WoodSection";
import TurfSection from "../components/landing/TurfSection";
import Footer from "../components/landing/Footer";
import WhatsAppFloat from "../components/landing/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      {}
      <Navbar />
      <div id="hero">
        <HeroSplit />
      </div>
      
      {}
      <WoodSection />
      <TurfSection />
      
      {}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
```
eof
