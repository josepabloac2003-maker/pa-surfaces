import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-white">
            PA <span className="text-blue-500">Surfaces</span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("madera")}
            className="font-mono text-xs uppercase tracking-widest text-white/80 hover:text-blue-400 transition-colors"
          >
            Pisos de Madera
          </button>
          <button
            onClick={() => scrollTo("pasto")}
            className="font-mono text-xs uppercase tracking-widest text-white/80 hover:text-green-400 transition-colors"
          >
            Pasto Sintético
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="font-mono text-xs uppercase tracking-widest px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-neutral-950 transition-all"
          >
            Contacto
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-t border-white/5">
          <div className="flex flex-col px-6 py-6 gap-4">
            <button
              onClick={() => scrollTo("madera")}
              className="font-mono text-xs uppercase tracking-widest text-white/70 text-left py-2 hover:text-blue-400"
            >
              Pisos de Madera
            </button>
            <button
              onClick={() => scrollTo("pasto")}
              className="font-mono text-xs uppercase tracking-widest text-white/70 text-left py-2 hover:text-green-400"
            >
              Pasto Sintético
            </button>
            <button
              onClick={() => scrollTo("contacto")}
              className="font-mono text-xs uppercase tracking-widest text-white border border-white/20 rounded-full px-5 py-2.5 text-center hover:bg-white hover:text-neutral-950 transition-all"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
```
eof
