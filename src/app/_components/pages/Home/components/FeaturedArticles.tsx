import React from "react";
import ArticleCard from "./ArticleCard";

const FeaturedArticles = ({ articles }: { articles: any[] }) => {
  return (
    <div className="flex flex-col gap-12 px-8 py-16 bg-background">
      <h2 className="text-3xl font-bold">Editorials & Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
