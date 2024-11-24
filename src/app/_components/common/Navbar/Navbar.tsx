import React from "react";
import Link from "next/link";
import { navbarLinks } from "./utils";

type Props = {
  isCollection?: boolean;
};

const Navbar = (props: Props) => {
  const { isCollection = false } = props;

  return (
    <div
      className="sticky top-0 left-0 right-0 z-50 bg-background"
      style={{
        boxShadow: `0px 2px 10px 1px black`,
      }}
    >
      <div className="flex items-center justify-between py-4 px-8 relative">
        <div className="hidden md:flex items-center gap-8 w-1/3">
          {navbarLinks.map((link, i) => (
            <Link href={link.href} key={i} className="text-xs font-light">
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center w-1/3">
          <Link href="/">
            <img
              src="/images/ninfaLogo.png"
              alt="Logo Placeholder"
              className="h-8 w-8 object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8 w-1/3 justify-end">
          {/* Placeholder for buttons */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
