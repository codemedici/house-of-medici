import React from "react";

type Props = {
  icon: string;
  href: string;
};

const RoundedIconAnchor = (props: Props) => {
  const { icon, href } = props;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full w-8 h-8 p-2 shadow-bumpy bg-bumpyBackground hover:shadow-groovy flex items-center justify-center"
    >
      <img src={icon} alt="icon" className="w-6 h-6" />
    </a>
  );
};

export default RoundedIconAnchor;
