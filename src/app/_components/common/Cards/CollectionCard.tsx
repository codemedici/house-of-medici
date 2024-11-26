"use client";

import React from "react";

type CollectionProps = {
  collection: {
    nfts?: Array<any>;
    subdomain: string;
  };
};

const CollectionCard = (props: CollectionProps) => {
  const { collection } = props;
  console.log("Collection data:", collection);

  if (collection.subdomain === "test") return null;
  if (!collection.nfts || collection.nfts.length === 0) return null;

  const nft = collection.nfts[0];
  return (
    <a href={`/collection/${collection.subdomain}`}>
      <div>{nft.title}</div>
    </a>
  );
};

export default CollectionCard;
