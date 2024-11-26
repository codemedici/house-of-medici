import React from "react";
import CollectionCard from "~/app/_components/common/Cards/CollectionCard";

const mockCollections = [
  { id: 1, name: "Renaissance Art", image: "/images/collection1.jpg" },
  { id: 2, name: "Modern Art", image: "/images/collection2.jpg" },
];

const CollectionsSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Discover Latest Collections</h2>
        <a href="/collections" className="text-sm font-light hover:underline">
          Explore all collections
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCollections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export default CollectionsSection;
