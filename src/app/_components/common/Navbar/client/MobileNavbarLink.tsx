// src/app/_components/common/Navbar/client/MobileNavbarLink.tsx

"use client";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
};

const MobileNavbarLink = (props: Props) => {
  const { href, children } = props;

  const handleClick = () => {
    const mobileNavbar = document.getElementById("mobile-navbar");
    if (mobileNavbar) {
      mobileNavbar.style.left = "-100%";
    }
  };

  return (
    <Link href={href} className="font-light" onClick={handleClick}>
      {children}
    </Link>
  );
};

export default MobileNavbarLink;
