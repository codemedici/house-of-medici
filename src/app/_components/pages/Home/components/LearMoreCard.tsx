import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  title: string;
  link: string;
  href: string;
};

const LearMoreCard = (props: Props) => {
  const { image, title, link, href } = props;
  return (
    <div className="flex flex-col md:flex-row items-center md:py-12">
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 h-auto object-cover"
      />
      <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center gap-8 p-6 text-center">
        <p className="text-2xl">{title}</p>
        <Link
          href={href}
          className="cursor-pointer rounded-full px-4 py-2 bg-bumpyBackground shadow-bumpy hover:bg-groovyBackground hover:shadow-groovy duration-200"
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default LearMoreCard;
