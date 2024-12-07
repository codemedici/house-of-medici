// src/app/(medici)/editorial/page.tsx

import { Metadata } from "next";
import React from "react";
import Editorial from "~/app/_components/pages/Editorial/Editorial";

export const metadata: Metadata = {
  title: "Medici Editorial - Discover Features, Editorials, and Interviews",
  description: "Explore features, editorials, and interviews curated by Medici.",
};

const EditorialPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Editorial />
    </div>
  );
};

export default EditorialPage;
