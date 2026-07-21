import React from "react";

export default function HeroSplit() {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Especialistas en <span className="text-amber-500">Superficies</span> y <span className="text-emerald-500">Mantenimiento</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400">
            Transformamos y mantenemos tus espacios con soluciones de alta calidad para pisos de madera y pasto sintético.
          </p>
        </div>

        {/* Tarjetas de acceso rápido */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Opción Madera */}
          <a
            href="#wood"
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 p-8 hover:border-amber-500/50 transition-all duration-300"
          >
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">
                  Residencial & Comercial
                </span>
                <h2 className="text-2xl font-bold text-white mt-2 group-hover:text-amber-400 transition-colors">
                  Pisos de Madera
                </h2>
                <p className="text-neutral-400 mt-2 text-sm">
                  Restauración, pulido, barnizado e instalación de pisos de madera natural e ingeniería.
                </p>
              </div>
              <div className="mt-6 flex items-center text-amber-500 text-sm font-semibold">
                Ver servicios <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>

          {/* Opción Pasto */}
          <a
            href="#turf"
            className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 p-8 hover:border-emerald-500/50 transition-all duration-300"
          >
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">
                  Deportivo & Paisajismo
                </span>
                <h2 className="text-2xl font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors">
                  Pasto Sintético
                </h2>
                <p className="text-neutral-400 mt-2 text-sm">
                  Instalación y mantenimiento especializado para canchas deportivas, jardines y áreas recreativas.
                </p>
              </div>
              <div className="mt-6 flex items-center text-emerald-500 text-sm font-semibold">
                Ver servicios <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
