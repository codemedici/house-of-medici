import React from "react";

const BlurSection = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <h1 className="relative z-10 text-white text-5xl font-bold">Collect Onchain Digital Art</h1>
    </div>
  );
};

export default BlurSection;
