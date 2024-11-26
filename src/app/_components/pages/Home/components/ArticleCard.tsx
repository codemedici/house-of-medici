import Link from "next/link";
import React from "react";
import { baseUrl } from "~/utils/constants";
import { createArtLink } from "~/utils/pureFunctions";

type Props = {
  article: {
    title: string;
    id: number;
    image1?: string | null;
    type: string;
    excerpt: string;
  };
};

const ArticleCard = (props: Props) => {
  const { article } = props;

  const safeCreateArtLink = createArtLink || ((title: string, id: string) => {
    return `${title.replace(/\s+/g, "-").toLowerCase()}-${id}`;
  });

  return (
    <Link
      href={`${baseUrl}/${article.type}/${safeCreateArtLink(article.title.replace(",", ""), article.id.toString())}`}
      target="_blank"
    >
      <div className="w-full h-fit rounded-xl overflow-hidden relative">
        <div className="w-full h-full absolute top-0 left-0">
          <img
            src={article.image1 || "/images/placeholderPattern.jpg"}
            alt="article"
            className="w-full h-1/2 object-cover"
          />
          <img
            src={article.image1 || "/images/placeholderPattern.jpg"}
            alt="article"
            className="w-full h-1/2 object-cover"
          />
        </div>
        <div className="p-2 backdrop-blur-xl rounded-md absolute top-6 left-6 capitalize font-thin text-sm">
          <p>{article.type === "article" ? "editorial" : article.type}</p>
        </div>
        <div className="p-6 backdrop-blur-xl w-full h-fit flex flex-col gap-3 opacity-0 pointer-events-none">
          <p className="line-clamp-2 h-12">{article.title}</p>
          <p className="text-xs font-light line-clamp-6">{article.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
