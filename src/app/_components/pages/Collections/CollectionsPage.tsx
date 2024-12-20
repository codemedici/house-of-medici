import React from "react";
import HeroSection from "~/app/_components/pages/Collections/components/HeroSection";
import ArtworksGrid from "~/app/_components/pages/Collections/components/ArtworksGrid";
import { collections } from "~/utils/constants";

const CollectionsPage = () => {
  return (
    <div className="snap-container">
      {collections.map((collection, index) => (
        <div key={index} className="snap-start h-screen flex flex-col">
          {/* Hero Section */}
          <HeroSection collection={collection} />
          {/* Artworks Grid */}
          <ArtworksGrid
            artworks={collection.artworks}
            subdomain={collection.subdomain}
          />
        </div>
      ))}
    </div>
  );
};

export default CollectionsPage;
