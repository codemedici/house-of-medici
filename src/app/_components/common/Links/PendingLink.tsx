import Link, { type LinkProps } from "next/link";
import React from "react";

type Props = {
  className?: string;
  pending?: boolean;
} & LinkProps<{}> &
  React.PropsWithChildren<{}>;

const PendingLink = (props: Props) => {
  const { pending = false, ...rest } = props;
  return (
    <Link
      {...rest}
      className={
        rest.className
          ? rest.className
          : "flex justify-center px-2 py-1 rounded-xl text-xl font-light bg-black text-white border border-white hover:opacity-50 duration-200 ease-in-out"
      }
      style={{ opacity: pending ? 0.5 : 1, position: "relative" }}
    >
      {pending ? (
        <div className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <img
            src="/svg/pending.svg"
            className="w-6 h-6 animate-spin-slow"
            alt="pending"
          />
        </div>
      ) : null}
      {rest.children}
    </Link>
  );
};

export default PendingLink;
