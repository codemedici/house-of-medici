const collections = [
  {
    title: "Renaissance Revival",
    description: "A tribute to the masters of the Renaissance.",
    thumbnail: "/images/renaissance.jpg",
    subdomain: "renaissance.medici.art",
  },
  {
    title: "Modern Minimalism",
    description: "Exploring the art of simplicity.",
    thumbnail: "/images/minimalism.jpg",
    subdomain: "minimalism.medici.art",
  },
  {
    title: "Abstract Visions",
    description: "An eclectic collection of abstract art.",
    thumbnail: "/images/abstract.jpg",
    subdomain: "abstract.medici.art",
  },
];

const CollectionsGrid = () => {
  return (
    <div id="collections" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {collections.map((collection, index) => (
        <a
          key={index}
          href={`https://${collection.subdomain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block bg-black overflow-hidden rounded-lg"
        >
          <img
            src={collection.thumbnail}
            alt={collection.title}
            className="w-full h-[300px] object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition flex flex-col justify-center items-center text-white p-4">
            <h2 className="text-xl font-bold mb-2">{collection.title}</h2>
            <p className="text-sm opacity-80">{collection.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CollectionsGrid;
