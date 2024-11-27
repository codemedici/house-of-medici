"use client";

import React from "react";

type CollectionProps = {
  collection: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
};

const CollectionCard = (props: CollectionProps) => {
  const { collection } = props;

  return (
    <a
      href={`/collections/${collection.id}`}
      className="group block relative rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-[430px] object-cover rounded-lg"
        />
        {/* Title and description */}
        <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md text-white p-4">
          <h3 className="text-lg font-semibold">{collection.name}</h3>
          <p className="text-sm font-light mt-2">{collection.description}</p>
        </div>
      </div>
    </a>
  );
};

export default CollectionCard;
