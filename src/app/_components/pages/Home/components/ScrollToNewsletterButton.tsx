"use client";
import React from "react";

const ScrollToNewsletterButton = () => {
  return (
    <button
      onClick={() => {
        scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }}
      className="cursor-pointer rounded-full px-4 py-2 bg-bumpyBackground shadow-bumpy hover:bg-groovyBackground hover:shadow-groovy duration-200"
    >
      subscribe to our newsletter
    </button>
  );
};

export default ScrollToNewsletterButton;
