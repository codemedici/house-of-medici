import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Image */}
      <img
        src="/images/medici-coat-of-arms-low-res.jpeg" // Replace with your 4999x4999px image path
        alt="La Collezione Medici"
        className="absolute max-w-none w-auto h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      {/* Overlay Content */}
      <div className="z-10 p-8 bg-black bg-opacity-40 rounded-md">
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
