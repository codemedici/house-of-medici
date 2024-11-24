import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white">
      <div
        className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-40"
        style={{ backgroundImage: `url('/images/homeSlogan01.jpg')` }}
      />
      <div className="z-10 p-8">
        <h1 className="text-4xl md:text-6xl font-bold">La Collezione Medici</h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          Esplora l'arte contemporanea e classica in un viaggio senza tempo.
        </p>
        <a
          href="#about"
          className="mt-6 px-6 py-3 bg-gold text-black rounded-md shadow hover:bg-dark-gold transition"
        >
          Scopri di più
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
