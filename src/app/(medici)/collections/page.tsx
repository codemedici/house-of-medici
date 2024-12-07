// src/app/(medici)/collections/page.tsx

import React from "react";
import CollectionsSection from "~/app/_components/pages/Home/sections/CollectionsSection";

export const metadata = {
  title: "Collections - Medici Art",
  description: "Explore a wide range of curated art collections.",
};

const CollectionsPage = () => {
  return (
    <div className="container mx-auto">
      <CollectionsSection />
    </div>
  );
};

export default CollectionsPage;
