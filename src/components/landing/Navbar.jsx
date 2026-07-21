import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold tracking-wider text-white">
              PA <span className="text-amber-500">SURFACES</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#wood"
                className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm font-medium"
              >
                Pisos de Madera
              </a>
              <a
                href="#turf"
                className="text-gray-300 hover:text-emerald-500 transition-colors duration-200 text-sm font-medium"
              >
                Pasto Sintético
              </a>
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
              >
                Cotizar
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#wood"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-amber-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Pisos de Madera
          </a>
          <a
            href="#turf"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium"
          >
            Pasto Sintético
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-amber-500 text-neutral-950 block px-3 py-2 rounded-md text-base font-semibold text-center mt-2"
          >
            Cotizar
          </a>
        </div>
      )}
    </nav>
  );
}
