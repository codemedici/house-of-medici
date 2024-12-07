import React from "react";
import Link from "next/link";

const LearnMoreSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-32 md:gap-16 mt-28 md:mt-40">
      {/* Left Section: Stay in the Loop */}
      <div className="flex flex-col h-[400px] justify-end p-8 bg-bumpyBackground">
        <div className="w-full text-center relative flex justify-end">
          <div className="w-full sm:w-[calc(100%_-_230px)] md:w-2/3 lg:w-[calc(100%_-_230px)] xl:w-1/2 absolute left-0 bottom-full sm:bottom-0 md:bottom-full lg:bottom-0 flex justify-center sm:justify-end md:justify-start lg:justify-end">
            <img
              src="/images/newsHome.png"
              alt="newsletter"
              className="w-1/2 sm:w-[70%] md:w-2/3 lg:w-[70%] object-contain"
            />
          </div>
          <div className="sm:w-[230px] flex flex-col gap-10 text-center mt-8">
            <p className="text-2xl">Stay in the loop</p>
            <p className="text-sm font-light">
              Get the latest updates on digital art, curated collections, and exclusive content.
            </p>
            <form className="flex flex-col gap-4 mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded border border-gray-400 text-black"
              />
              <button
                type="submit"
                className="text-sm cursor-pointer rounded-lg px-5 py-2 bg-bumpyBackground shadow-bumpy hover:bg-groovyBackground hover:shadow-groovy duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right Section: Learn More About Medici */}
      <div className="flex flex-col h-[400px] justify-end p-8 bg-bumpyBackground">
        <div className="w-full h-auto text-center relative">
          <div className="w-full absolute m-auto bottom-full pb-8 flex justify-center">
            <img
              src="/images/learnMore.png"
              alt="learn more"
              className="w-full xl:w-[80%] object-contain object-top"
            />
          </div>
          <div className="md:w-[240px] flex flex-col gap-6 mt-4">
            <p className="text-2xl">Want to learn more about Medici?</p>
            <div>
              <a
                href="https://medici.example.com/faq"
                target="_blank"
                rel="noreferrer"
                className="text-sm cursor-pointer rounded-lg px-5 py-2 bg-bumpyBackground shadow-bumpy hover:bg-groovyBackground hover:shadow-groovy duration-200"
              >
                Learn about us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreSection;
