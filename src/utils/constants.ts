export const baseUrl = process.env.BASE_URL || "https://medici.art";

export const ipfsBaseUrl = "https://ipfs.io/ipfs";

export const placeholderMetadataImage = "/images/placeholder.jpg";

export const placeholderMetadata = {
  title: "Medici.art: Explore Timeless Art",
  description: "Discover curated collections and exclusive insights into classic and contemporary art.",
  openGraph: {
    images: [placeholderMetadataImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medici.art: Explore Timeless Art",
    description: "Discover curated collections and exclusive insights into classic and contemporary art.",
    images: [placeholderMetadataImage],
  },
};
export const collections = [
  {
    title: "Renaissance Revival",
    description: "A tribute to the masters of the Renaissance.",
    subdomain: "renaissance.medici.art",
    featuredArtwork: {
      title: "Florence by Samantha",
      image: "/images/florence-by-samantha.png",
    },
    artworks: [
      {
        title: "The Last Supper",
        artist: "Leonardo da Vinci",
        image: "/images/genres/1.jpg",
        slug: "the-last-supper",
      },
      {
        title: "The Mona Lisa",
        artist: "Leonardo da Vinci",
        image: "/images/genres/2.jpg",
        slug: "mona-lisa",
      },
      {
        title: "David",
        artist: "Michelangelo",
        image: "/images/genres/3.jpg",
        slug: "david",
      },
    ],
  },
  {
    title: "Modern Minimalism",
    description: "Exploring the art of simplicity.",
    subdomain: "minimalism.medici.art",
    featuredArtwork: {
      title: "White on White",
      image: "/images/homeSlogan02.jpg",
    },
    artworks: [
      {
        title: "Black Square",
        artist: "Kazimir Malevich",
        image: "/images/genres/4.jpg",
        slug: "black-square",
      },
      {
        title: "Composition VIII",
        artist: "Wassily Kandinsky",
        image: "/images/genres/5.jpg",
        slug: "composition-viii",
      },
    ],
  },
];
