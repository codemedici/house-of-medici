// src/app/_components/common/Navbar/Navbar.tsx
import React from "react";
import Link from "next/link";
// components
import HoverLink from "../Links/HoverLink";
// utils
import { navbarLinks } from "./utils";
import MobileNavbarButton from "./client/MobileNavbarButton";
import Separator from "../Separators/Separator";
import MobileNavbarLink from "./client/MobileNavbarLink";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-background"
      style={{
        boxShadow: `0px 2px 10px 1px black`,
      }}
    >
      <div className="flex items-center justify-between py-4 px-8 relative">
        <div className="hidden md:flex items-center gap-8 w-1/3">
          {navbarLinks.map((link, i) => (
            <HoverLink href={link.href} key={i} className="text-xs font-light">
              <p>{link.name}</p>
            </HoverLink>
          ))}
        </div>
        <div className="flex md:hidden w-1/3">
          <MobileNavbarButton />
        </div>
        <div className="flex justify-center w-1/3">
          <Link href="/">
            <img
              src="/images/ninfaLogo.png"
              alt="House of Medici"
              className="h-8 w-8 object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8 w-1/3 justify-end">
          {/* No Connect Wallet Button or SearchBar */}
        </div>
      </div>
      <div
        className="fixed w-full h-full bg-background -left-full md:hidden flex flex-col gap-8 duration-200 ease-in-out p-8"
        id="mobile-navbar"
      >
        <div>
          {navbarLinks.map((link, i) => (
            <MobileNavbarLink href={link.href} key={i}>
              <p>{link.name}</p>
            </MobileNavbarLink>
          ))}
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default Navbar;
