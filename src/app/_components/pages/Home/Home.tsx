import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedCollections from "./components/FeaturedCollections";
import NewsletterSection from "./components/NewsletterSection";

const Home = () => {
  const articles = []; // Replace with actual data
  const collections = []; // Replace with actual data

  return (
    <main>
      <HeroSection />
      <FeaturedArticles articles={articles} />
      <FeaturedCollections collections={collections} />
      <NewsletterSection />
    </main>
  );
};

export default Home;
