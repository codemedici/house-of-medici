import React from "react";
import Link, { type LinkProps } from "next/link";

type Props = {
  icon: string;
} & LinkProps;

const RoundedIconLink = (props: Props) => {
  const { icon, ...rest } = props;
  return (
    <Link
      {...rest}
      className="rounded-full w-8 h-8 p-2 shadow-bumpy bg-bumpyBackground hover:shadow-groovy flex items-center justify-center"
    >
      <img src={icon} alt="icon" className="w-6 h-6" />
    </Link>
  );
};

export default RoundedIconLink;
