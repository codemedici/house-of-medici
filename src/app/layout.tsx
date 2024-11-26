import type { Metadata, Viewport } from "next";
// import Web3ModalProvider from "./context"; // Ensure this exists or replace with a placeholder
import "./globals.css";
// import { GoogleAnalytics } from "@next/third-parties/google"; // Uncomment if needed in the future
import Navbar from "./_components/common/Navbar/Navbar";
import Footer from "./_components/common/Footer/Footer";

// Define metadata for the site
export const metadata: Metadata = {
  title: "Medici Art",
  description:
    "Medici Art is a platform dedicated to showcasing exceptional art collections. Explore classical and contemporary art in a digital space.",
  openGraph: {
    images: ["/images/placeholderMetadataImage.jpg"], // Adjust with a valid placeholder image path
  },
  twitter: {
    card: "summary_large_image",
    title: "Medici Art",
    description:
      "Medici Art is a platform dedicated to showcasing exceptional art collections. Explore classical and contemporary art in a digital space.",
    siteId: "1467726470533754880", // Replace or remove if not using Twitter analytics
    creator: "@mediciart", // Update with your handle if applicable
    creatorId: "1467726470533754880", // Replace with your creator ID
    images: ["/images/placeholderMetadataImage.jpg"], // Update with a valid image
  },
};

// Optional viewport settings
export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Uncomment Google Analytics if needed */}
      {/* {build === "production" ? <GoogleAnalytics gaId="G-H58L9SX8WH" /> : null} */}
      <body className="w-screen overflow-x-hidden flex justify-center">
        {/*<Web3ModalProvider>*/}
          <div className="w-full max-w-[2560px]">
            <Navbar />
            <main className="mt-20 mb-40 px-2 sm:px-4 md:px-8 lg:px-16">
              {children}
            </main>
            <Footer />
          </div>
        {/*</Web3ModalProvider>*/}
      </body>
    </html>
  );
}
