import React from "react";
import ImageHoverEffect from "../../_components/pages/About/ImageHoverEffect";

const AboutPage = () => {
  return (
    <div className="w-full h-screen bg-white">
      {/* Hover Effect Section */}
      <div className="flex justify-center items-center h-full">
        <ImageHoverEffect
          topImage="/images/medici-coat-of-arms-oil-on-wood.jpeg" /* Replace with actual image path */
          bottomImage="/images/medici-coat-of-arms-low-res.jpeg" /* Replace with actual image path */
          altText="Medici About Us Hover Effect"
        />
      </div>
    </div>
  );
};

export default AboutPage;
