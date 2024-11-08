import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./_components/common/Navbar/Navbar";
import Footer from "./_components/common/Footer/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="w-full max-w-[2560px]">
          <Navbar />
          <main className="mt-20 mb-40 px-2 sm:px-4 md:px-8 lg:px-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}