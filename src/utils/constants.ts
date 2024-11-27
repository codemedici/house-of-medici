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
