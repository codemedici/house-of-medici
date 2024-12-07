import React, { Fragment } from "react";
import Link from "next/link";
import moment from "moment";
import PageTitle from "../../common/PageTitle";
import Separator from "../../common/Separators/Separator";

// Mock Articles Data
const mockArticles = [
  {
    id: 1,
    type: "editorial",
    title: "Exploring Renaissance Art",
    author: "John Doe",
    createdAt: "1693939200000",
    image1: "/images/homeSlogan01.jpg",
    image2: null,
    artist: {
      username: "artist_renaissance",
      profileImage: "/images/profilePlaceholder.jpg",
    },
    link: "https://ninfa.io/article/Exploring-Renaissance-Art-1",
  },
  {
    id: 2,
    type: "editorial",
    title: "Modern Art Trends",
    author: "Jane Smith",
    createdAt: "1694520000000",
    image1: "/images/homeSlogan02.jpg",
    image2: "/images/homeSlogan03.jpg",
    artist: null,
    link: "https://ninfa.io/article/Modern-Art-Trends-2",
  },
  {
    id: 3,
    type: "editorial",
    title: "The Future of NFTs",
    author: "Alice Johnson",
    createdAt: "1695100800000",
    image1: "/images/homeSlogan03.jpg",
    image2: null,
    artist: null,
    link: "https://ninfa.io/article/The-Future-of-NFTs-3",
  },
];

const Editorial = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-24 px-2 md:p-0">
      <PageTitle title="Discover Features, Editorials, and Interviews" />
      <div className="flex flex-col gap-8 md:gap-20 md:px-8">
        {mockArticles.map((article, i) => (
          <Fragment key={i}>
            <div className="flex flex-col md:flex-row gap-2 md:gap-12 md:h-[400px]">
              <div className="w-full md:w-1/2 md:pb-8 md:py-8 flex flex-col gap-2 md:gap-4">
                <div className="capitalize text-[8px] md:text-xs px-2 py-[2px] md:px-4 md:py-1 w-fit border border-white rounded-xl opacity-30">
                  <p>
                    {article.type === "article" ? "editorial" : article.type}
                  </p>
                </div>
                <Link href={article.link} target="_blank">
                  <p className="text-sm md:text-xl">{article.title}</p>
                </Link>
                <div className="flex gap-1 items-center">
                  <p className="text-xs md:text-base font-thin">
                    by {article.author}
                  </p>
                  <p className="opacity-30">•</p>
                  <p className="font-light text-[10px] md:text-xs opacity-30">
                    {moment
                      .unix(parseInt(article.createdAt) / 1000)
                      .format("MMM Do yyyy")}
                  </p>
                </div>
                {article.artist ? (
                  <Link
                    className="flex gap-2 items-center text-xs font-thin py-4 md:p-0"
                    href={`https://ninfa.io/user/@${article.artist.username}`}
                    target="_blank"
                  >
                    <img
                      src={
                        article.artist.profileImage ||
                        "/images/profilePlaceholder.jpg"
                      }
                      alt={article.artist.username}
                      className="w-8 h-8 rounded-full"
                    />
                    <p>@{article.artist.username}</p>
                  </Link>
                ) : null}
              </div>
              <Link
                className="flex flex-col md:flex-row w-full gap-2 md:w-1/2 overflow-hidden"
                target="_blank"
                href={article.link}
              >
                {article.image1 ? (
                  <img
                    src={article.image1}
                    alt="1"
                    className={`w-full aspect-video md:aspect-auto ${
                      article.image2 ? "md:w-1/2" : ""
                    } object-cover`}
                  />
                ) : null}
                {article.image2 ? (
                  <img
                    src={article.image2}
                    alt="2"
                    className="hidden md:block w-1/2 object-cover"
                  />
                ) : null}
              </Link>
            </div>
            {i !== mockArticles.length - 1 ? <Separator /> : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Editorial;
