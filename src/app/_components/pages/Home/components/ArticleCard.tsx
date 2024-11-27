import Link from "next/link";

type Props = {
  article: {
    id: number;
    title: string;
    type: string;
    image?: string | null;
    excerpt: string;
  };
};

const ArticleCard = (props: Props) => {
  const { article } = props;

  return (
    <Link href={`/articles/${article.id}`} target="_blank">
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
        <img
          src={article.image || "/images/placeholderPattern.jpg"}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-between">
          <p className="text-white text-sm capitalize">
            {article.type || "Article"}
          </p>
          <h3 className="text-white text-lg font-semibold">{article.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
