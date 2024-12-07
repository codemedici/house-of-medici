import React from "react";

type CollectionProps = {
  collection: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
};

const CollectionCard = ({ collection }: CollectionProps) => {
  return (
    <div className="flex flex-col h-[300px] md:h-[340px] bg-bumpyBackground rounded-md overflow-hidden">
      <div className="relative h-2/3 w-full">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-semibold line-clamp-2">{collection.name}</h3>
        <p className="text-sm font-light line-clamp-3">{collection.description}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
