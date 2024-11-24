import Link from "next/link";
import React from "react";
import {
  areEqual,
  createArtLink,
  formatUsdPrice,
  getAnimationUrl,
  getImageUrl,
} from "~/utils/pureFunctions";
import { networkLogos, listingTypeToText } from "~/utils/constants";
import Username from "../Username";
import Separator from "../Separators/Separator";

type Props = {
  title: string;
  nftId: number;
  assetType: string;
  imageUrl: string;
  isCompressed: boolean;
  width: number;
  network: number;
  price: number;
  listingType: string;
  platform: string;
  ownerAddress: string;
  ownerUsername?: string;
  numberOfOwners: number;
  creatorAddress: string;
  creatorUsername: string;
  standard: string;
  exchangeRate: number;
  currency: string;
  showCollector?: boolean;
};

const BaseNftCard = (props: Props) => {
  const {
    title,
    nftId,
    assetType,
    imageUrl,
    isCompressed,
    width,
    network,
    price,
    listingType,
    platform,
    ownerAddress,
    ownerUsername,
    creatorAddress,
    creatorUsername,
    numberOfOwners,
    standard,
    exchangeRate,
    currency,
    showCollector = false,
  } = props;
  return (
    <Link
      className="w-full aspect-square rounded-md overflow-hidden relative group text-xs"
      href={`/nft/${createArtLink(title, nftId.toString())}`}
      target="_blank"
    >
      {assetType === "video" || (assetType === "gif" && isCompressed) ? (
        <video
          src={getAnimationUrl(imageUrl, isCompressed)}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : assetType === "image" || assetType === "gif" ? (
        <img
          src={
            assetType === "gif"
              ? getAnimationUrl(imageUrl, isCompressed)
              : getImageUrl(imageUrl, isCompressed, width)
          }
          alt="nft"
          className="w-full h-full object-cover"
        />
      ) : assetType === "html" ? (
        <iframe src={imageUrl} className="w-full h-full" />
      ) : null}
      <div className="p-6 absolute top-0 left-0 right-0 w-full h-full opacity-0 md:group-hover:opacity-100 bg-black bg-opacity-30 group-hover:backdrop-filter group-hover:backdrop-blur-md duration-150 ease-in-out flex flex-col justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 p-2 bg-black bg-opacity-50 rounded-full flex justify-center items-center">
            <img
              src={networkLogos[network]}
              alt="network"
              className="w-6 h-6 m-2 object-contain"
            />
          </div>
          {standard === "1155" ? (
            <p
              style={{ opacity: numberOfOwners > 0 ? 1 : 0 }}
              className="truncate text-ellipsis"
            >
              <span className="font-thin">owned by</span> {numberOfOwners}{" "}
              collectors
            </p>
          ) : (
            <>
              {areEqual(ownerAddress, creatorAddress) ? null : (
                <p
                  style={{ opacity: numberOfOwners > 0 ? 1 : 0 }}
                  className="truncate text-ellipsis"
                >
                  {showCollector ? (
                    <>
                      <span className="font-thin">owned by</span>{" "}
                      <Username
                        username={ownerUsername}
                        address={ownerAddress}
                      />
                    </>
                  ) : (
                    <>
                      <span className="font-thin">created by</span>{" "}
                      <Username
                        username={creatorUsername}
                        address={creatorAddress}
                      />
                    </>
                  )}
                </p>
              )}
            </>
          )}
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2 max-w-[80%]">
            <p className="truncate text-ellipsis">{title}</p>
            <div className="flex gap-1 items-center font-thin">
              <img
                src={
                  standard === "1155"
                    ? "/svg/edition.svg"
                    : "/svg/uniqueItem.svg"
                }
                alt="symbol"
                className="w-3 h-3 object-contain"
              />
              <p className="truncate text-ellipsis">
                {standard === "1155" ? "multiple edition" : "1/1"}
              </p>
            </div>
            <Separator />
            {price > 0 ? (
              <div>
                <p className="font-light">
                  {
                    listingTypeToText[
                      listingType as keyof typeof listingTypeToText
                    ]
                  }
                </p>
                <div className="flex items-center gap-2">
                  {listingType === "auctionStarted" ||
                  listingType === "auctionEnded" ? (
                    <img
                      src="/svg/auctionSimbol.svg"
                      className={
                        listingType === "auctionEnded"
                          ? "w-4 h-4 opacity-50"
                          : "animate-pulse w-4 h-4"
                      }
                      alt="pulse"
                    />
                  ) : null}
                  <p
                    style={{
                      opacity: price > 0 ? 1 : 0,
                      pointerEvents: price > 0 ? "all" : "none",
                    }}
                  >
                    {price} {currency}{" "}
                    <span className="font-thin">
                      {formatUsdPrice(price * exchangeRate)}
                    </span>
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          <img
            src={`/images/${platform}Logo.png`}
            alt={platform}
            className="h-6 w-6 rounded-full object-contain bg-black filter invert p-1"
          />
        </div>
      </div>
    </Link>
  );
};

export default BaseNftCard;
