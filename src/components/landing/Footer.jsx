import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-900 border-t border-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              PA <span className="text-amber-500">SURFACES</span>
            </h3>
            <p className="text-neutral-400 text-sm max-w-sm">
              Mantenimiento profesional, restauración e instalación de pisos de madera y pasto sintético.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-neutral-300 text-sm font-semibold mb-2">¿Tienes un proyecto en mente?</span>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-6 text-center md:text-left text-xs text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} PA Surfaces. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#wood" className="hover:text-neutral-400 transition-colors">Madera</a>
            <a href="#turf" className="hover:text-neutral-400 transition-colors">Pasto Sintético</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
