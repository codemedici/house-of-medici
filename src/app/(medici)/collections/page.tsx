import React from "react";
import HeroSection from "~/app/_components/pages/Collections/components/HeroSection";
import CollectionsGrid from "~/app/_components/pages/Collections/components/CollectionsGrid";
import FooterCTA from "~/app/_components/pages/Collections/components/FooterCTA";

const CollectionsPage = () => {
  return (
    <div>
      <HeroSection />
      <CollectionsGrid />
      <FooterCTA />
    </div>
  );
};

export default CollectionsPage;
