import React from "react";
import CollectionCard from "~/app/_components/common/Cards/CollectionCard"; // Ensure this path is correct

const mockCollections = [
  {
    id: 1,
    name: "Medici Archives",
    image: "/images/medici-archives.jpg",
    description: "A journey through history and artistry.",
  },
  {
    id: 2,
    name: "Digital Renaissance",
    image: "/images/florence-by-samantha.png",
    description: "Modern art inspired by the Renaissance period.",
  },
];

const CollectionsSection = () => {
  return (
    <div className="flex flex-col gap-8 mt-8 mb-8">
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
