import Link from "next/link";
import React from "react";

type CurationProps = {
  curation: {
    banner: string | null;
    title: string;
    description: string;
    link: string;
  };
};

const CurationSection = (props: CurationProps) => {
  const { curation } = props;

  if (!curation) return null;

  return (
    <div className="flex flex-col gap-8">
      <Link
        className="w-full h-[calc(100vh_-_150px)] md:h-[calc(100vh_-_100px)] relative"
        href={curation.link}
        target="_blank"
      >
        <img
          src={curation.banner || "/images/placeholder.jpg"}
          alt={curation.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 p-4 md:p-12 flex flex-col justify-between h-full">
          <div className="rounded-xl backdrop-blur-xl px-4 py-2">
            <p className="text-xl md:text-2xl">Latest curated collection</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl backdrop-blur-xl px-4 py-2">
            <p className="text-lg md:text-lg">{curation.title}</p>
            <p className="md:text-lg font-light">{curation.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CurationSection;
