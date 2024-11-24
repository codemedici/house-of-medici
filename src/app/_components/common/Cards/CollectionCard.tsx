import React from "react";
import { GetCollectionsQuery } from "~/gql/graphql";
import { baseUrl } from "~/utils/constants";
import { getAnimationUrl, getImageUrl } from "~/utils/pureFunctions";

type Props = {
  collection: GetCollectionsQuery["collections"][number];
};

const CollectionCard = (props: Props) => {
  const { collection } = props;
  if (collection.subdomain === "test") return null;
  if (collection.nfts.length === 0) return null;
  const nft = collection.nfts[0];
  return (
    <a
      href={baseUrl.replace(/\/\//, `//${collection.subdomain}.`)}
      className="aspect-[2.5] md:aspect-square relative flex flex-col gap-2 justify-between items-center  rounded-xl overflow-hidden duration-300 ease-in-out text-center "
      target="_blank"
    >
      {nft.assetType === "video" ||
      (nft.assetType === "gif" && nft.isCompressed) ? (
        <video
          src={getAnimationUrl(nft.imageUrl, nft.isCompressed)}
          className="w-full h-full object-cover absolute top-0 left-0"
          muted
          autoPlay
          loop
          playsInline
        />
      ) : nft.assetType === "image" || nft.assetType === "gif" ? (
        <img
          src={
            nft.assetType === "gif"
              ? getAnimationUrl(nft.imageUrl, nft.isCompressed)
              : getImageUrl(nft.imageUrl, nft.isCompressed, nft.width)
          }
          className="w-full h-full object-cover absolute top-0 left-0"
          alt={collection.title}
        />
      ) : nft.assetType === "html" ? (
        <iframe
          src={nft.imageUrl}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      ) : null}
      <div className="absolute w-full h-full rounded-xl flex flex-col md:gap-2 justify-center md:justify-between shadow-glassImage items-center p-4 bg-black bg-opacity-50">
        <div className="hidden md:block opacity-0 pointer-events-none">
          <p className="text-xs">placeholder</p>
        </div>
        <div>
          <p className="text-sm md:text-xl">{collection.title}</p>
        </div>
        <div>
          <p className="text-sm font-thin md:font-normal md:text-xs">
            {collection.owner.username}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CollectionCard;
