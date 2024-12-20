import React from "react";

const ArtworksGrid = ({ artworks, subdomain }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-background">
      {artworks.map((artwork, index) => (
        <a
          key={index}
          href={`https://${subdomain}/art/${artwork.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block bg-black overflow-hidden rounded-lg"
        >
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition flex flex-col justify-center items-center text-white p-4">
            <h2 className="text-xl font-bold mb-2">{artwork.title}</h2>
            <p className="text-sm opacity-80">{artwork.artist}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ArtworksGrid;
