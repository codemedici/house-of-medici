import React from "react";
import ArticleCard from "../components/ArticleCard";

const mockArticles = [
  {
    id: 1,
    title: "Exploring Renaissance Art",
    image: "/images/article1.jpg",
    excerpt: "Dive into the wonders of the Renaissance era.",
  },
  {
    id: 2,
    title: "Modern Art Trends",
    image: "/images/article2.jpg",
    excerpt: "Discover the latest trends in modern art.",
  },
];

const ArticlesSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Editorial Focus</h2>
        <a href="/insights" className="text-sm font-light hover:underline">
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

export default ArticlesSection;
