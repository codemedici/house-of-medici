import React from "react";
import EditorialSection from "./sections/EditorialSection";
import CollectionsSection from "./sections/CollectionsSection";
import CurationSection from "./sections/CurationSection";
import LearnMoreSection from "./sections/LearnMoreSection";

const Home = () => {
  const curation = {
    banner: "images/medici-coat-of-arms-low-res.jpeg",
    title: "La Collezione Medici",
    description: "Esplora l'arte contemporanea e classica in un viaggio senza tempo.",
    link: "https://medici.art/commission-work",
  };

  return (
    <div className="flex flex-col gap-32 md:gap-40">
      <CurationSection curation={curation} />
      <CollectionsSection />
      <EditorialSection />
      <LearnMoreSection />
    </div>
  );
};

export default Home;
