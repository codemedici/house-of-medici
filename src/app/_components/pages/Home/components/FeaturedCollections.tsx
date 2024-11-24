import React from "react";
import CollectionCard from "~/app/_components/common/Cards/CollectionCard";

const FeaturedCollections = ({ collections }: { collections: any[] }) => {
  return (
    <div className="flex flex-col gap-12 px-8 py-16 bg-background">
      <h2 className="text-3xl font-bold">Featured Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((collection, i) => (
          <CollectionCard key={i} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollections;
