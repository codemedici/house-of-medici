import React from "react";
import ArticleCard from "../components/ArticleCard";

const mockArticles = [
  {
    id: 1,
    title: "Exploring Renaissance Art",
    type: "editorial",
    image: "/images/homeSlogan01.jpg",
    excerpt: "Dive into the wonders of the Renaissance era.",
  },
  {
    id: 2,
    title: "Modern Art Trends",
    type: "article",
    image: "/images/homeSlogan02.jpg",
    excerpt: "Discover the latest trends in modern art.",
  },
  {
    id: 3,
    title: "The Future of NFTs",
    type: "editorial",
    image: "/images/homeSlogan03.jpg",
    excerpt: "Uncover the potential of NFTs in the art world.",
  },
];

const EditorialSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Editorial Focus</h2>
        <a href="/editorial" className="text-sm font-light hover:underline">
          Read more content
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default EditorialSection;
