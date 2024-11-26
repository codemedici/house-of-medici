import React from "react";
import ScrollToNewsletterButton from "../components/ScrollToNewsletterButton";

const AdvisorySection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4 p-6 text-center">
        <h2 className="text-2xl font-semibold">Stay in the loop</h2>
        <p className="text-sm font-light">
          Get the latest updates on digital art, curated collections, and exclusive content.
        </p>
        <ScrollToNewsletterButton />
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="/images/advisory.png"
          alt="Advisory Section"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default AdvisorySection;
