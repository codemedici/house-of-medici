import React from "react";

const NewsletterSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 px-8 py-16 bg-background">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="mt-4 text-lg">
          Subscribe to our newsletter for updates on exhibitions, insights, and
          exclusive content from Medici.art.
        </p>
      </div>
      <img
        src="/images/newsletter.png"
        alt="Newsletter"
        className="flex-1 rounded-md"
      />
    </div>
  );
};

export default NewsletterSection;
