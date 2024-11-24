import PageTitle from "../../common/PageTitle";
import { getArticles } from "~/server/gql";
// import moment from "moment";
import Link from "next/link";
import { createArtLink } from "~/utils/pureFunctions";
import moment from "moment";
import { Fragment } from "react";
import Separator from "../../common/Separators/Separator";

const Contents = async () => {
  const articles = await getArticles();
  return (
    <div className="w-full flex flex-col gap-24 p-2 md:p-0">
      <PageTitle title="Discover articles and interviews" />
      <div className="flex flex-col gap-20 px-8">
        {articles.map((article, i) => (
          <Fragment key={i}>
            <div className="flex flex-col md:flex-row gap-12 md:h-[400px]">
              <div className="w-full md:w-1/2 pb-8 md:py-8 flex flex-col gap-4">
                <div className="capitalize text-xs px-4 py-1 w-fit border border-white rounded-xl opacity-50">
                  <p>{article.type}</p>
                </div>
                <p className="font-light text-xs">
                  {moment
                    .unix(parseInt(article.createdAt) / 1000)
                    .format("MMM Do yyyy")}
                </p>
                <Link
                  href={`/${article.type}/${createArtLink(article.title.replace(",", ""), article.id.toString())}`}
                  target="_blank"
                >
                  <p className="text-xl">{article.title}</p>
                </Link>
                <p className="font-thin">by {article.author}</p>
                {article.artist ? (
                  <Link
                    className="flex gap-2 items-center text-xs font-thin"
                    href={`/user/@${article.artist.username}`}
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
                href={`/${article.type}/${createArtLink(article.title.replace(",", ""), article.id.toString())}`}
              >
                {article.image1 ? (
                  <img
                    src={article.image1}
                    alt="1"
                    className={`w-full aspect-video md:aspect-auto ${article.image2 ? "md:w-1/2" : ""} object-cover`}
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
            {i !== articles.length - 1 ? <Separator /> : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Contents;
