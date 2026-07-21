import React from "react";

export default function TurfSection() {
  const services = [
    {
      title: "Instalación Deportiva y Residencial",
      desc: "Colocación profesional para jardines, canchas de fútbol, pádel y áreas recreativas con drenaje de alta eficiencia.",
    },
    {
      title: "Mantenimiento y Cepillado",
      desc: "Descompactado, cepillado y redistribución de arena de sílice o caucho para mantener las fibras erguidas.",
    },
    {
      title: "Limpieza y Sanitización",
      desc: "Tratamientos especializados para eliminar impurezas, bacterias y olores en áreas de alto tráfico o con mascotas.",
    },
  ];

  return (
    <section id="turf" className="py-24 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-500 font-bold uppercase tracking-wider text-sm">
              Paisajismo & Deportivo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Pasto Sintético
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md mt-4 md:mt-0 text-sm">
            Soluciones duraderas y de bajo mantenimiento para áreas verdes que se mantienen impecables todo el año.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-emerald-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
