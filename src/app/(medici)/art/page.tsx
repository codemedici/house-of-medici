// src/app/(medici)/art/page.tsx

import { Metadata } from "next";
import React from "react";
import Art from "~/app/_components/pages/Art/Art";

export const metadata: Metadata = {
  title: "Medici Art - Explore Digital Art Collections",
  description:
    "Discover Medici's curated digital art collections, featuring masterpieces from modern and renaissance-inspired artists.",
};

const ArtPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Art />
    </div>
  );
};

export default ArtPage;
