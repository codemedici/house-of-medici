const HeroSection = ({ collection }) => {
  const { featuredArtwork, title, description, subdomain } = collection;

  return (
    <div className="relative w-full h-[60vh] bg-black">
      <img
        src={featuredArtwork.image}
        alt={featuredArtwork.title}
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg font-light mb-6">{description}</p>
        <a
          href={`https://${subdomain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 text-sm font-semibold rounded hover:bg-gray-300 transition"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
