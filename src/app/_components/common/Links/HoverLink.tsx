import Link, { LinkProps } from "next/link";
import React from "react";

type Props = {
  className?: string;
} & LinkProps<{}> &
  React.PropsWithChildren<{}>;

const HoverLink = (props: Props) => {
  return (
    <Link
      {...props}
      className={`group flex items-center justify-center gap-2  relative ${props.className}`}
    >
      <p className="absolute left-0 top-0 bottom-0 opacity-0 group-hover:opacity-100 duration-200 ease-in-out">
        {">"}
      </p>
      <div className="group-hover:translate-x-[10px] duration-200 ease-in-out">
        {props.children}
      </div>
    </Link>
  );
};

export default HoverLink;
