import React from "react";

type SectionProps = {
  section: {
    title: string;
    description: string;
    artist: string;
    mainImage: string;
    contextImage?: string;
    artworkLink: string;
  };
  isReversed: boolean;
};

const Section = ({ section, isReversed }: SectionProps) => {
  const { title, description, artist, mainImage, contextImage, artworkLink } = section;

  return (
    <div
      className={`snap-section h-screen flex ${
        isReversed ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center bg-black">
        <img
          src={mainImage}
          alt={title}
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center p-6 md:p-12 bg-white">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <p className="text-sm font-light text-gray-600 mb-6">By {artist}</p>
        {contextImage && (
          <img
            src={contextImage}
            alt={title}
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
        <a
          href={artworkLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white text-sm font-semibold px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Visit Artwork's Web Page
        </a>
      </div>
    </div>
  );
};

export default Section;
