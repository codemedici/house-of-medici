const HeroSection = () => {
  return (
    <div className="relative w-full h-[60vh] bg-black">
      <img
        src="/images/florence-by-samantha.png"
        alt="Featured Collection"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Fine Art Collections</h1>
        <p className="text-lg font-light mb-6">
          Discover timeless themes, curated by art enthusiasts and experts.
        </p>
        <a
          href="#collections"
          className="bg-white text-black px-6 py-2 text-sm font-semibold rounded hover:bg-gray-300 transition"
        >
          Explore Collections
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
