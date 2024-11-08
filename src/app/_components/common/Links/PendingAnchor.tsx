import React from "react";

type Props = {
  pending?: boolean;
  variant?: "white" | "black";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const PendingAnchor = (props: Props) => {
  const { pending = false, variant = "black", ...rest } = props;
  return (
    <a
      {...rest}
      className={
        rest.className
          ? rest.className
          : variant === "white"
            ? "px-2 rounded-lg font-light bg-whiteBumpyBackground text-black shadow-whiteBumpy hover:shadow-whiteGroovy duration-200 ease-in-out"
            : "px-2 rounded-lg font-light bg-bumpyBackground text-white shadow-bumpy hover:shadow-groovy duration-200 ease-in-out"
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
    </a>
  );
};

export default PendingAnchor;
