import React from "react";

export default function WoodSection() {
  const services = [
    {
      title: "Pulido y Barnizado",
      desc: "Restauración profunda de pisos de madera dañados, devolviéndoles su brillo y protección original.",
    },
    {
      title: "Mantenimiento Preventivo",
      desc: "Aplicación de selladores y aceites especiales para alargar la vida útil del material.",
    },
    {
      title: "Instalación Profesional",
      desc: "Colocación de duela, parquet y piso de ingeniería con acabados de primera calidad.",
    },
  ];

  return (
    <section id="wood" className="py-24 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-wider text-sm">
              Mantenimiento & Cuidado
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Pisos de Madera
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md mt-4 md:mt-0 text-sm">
            Especialistas en la conservación y renovación de todo tipo de superficies de madera para residencias y comercios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition-colors"
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
