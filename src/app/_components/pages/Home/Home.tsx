import React from "react";
import AdvisorySection from "./sections/AdvisorySection";
import ArticlesSection from "./sections/ArticlesSection";
import BlurSection from "./sections/BlurSection";
import CollectionsSection from "./sections/CollectionsSection";
import CurationSection from "./sections/CurationSection";
import LearnMoreSection from "./sections/LearnMoreSection";

const Home = () => {

  const curation = {
    banner: 'images/medici-coat-of-arms-low-res.jpeg',
    title: 'La Collezione Medici',
    description: 'Esplora l\'arte contemporanea e classica in un viaggio senza tempo.',
    link: 'https://medici.art/commission-work',
  }

  return (
    <div>
      <BlurSection />
      <CurationSection curation={curation} />
      <CollectionsSection />
      <ArticlesSection />
      <LearnMoreSection />
      <AdvisorySection />
    </div>
  );
};

export default Home;
