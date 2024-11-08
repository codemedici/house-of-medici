// src/app/_components/common/Navbar/client/MobileNavbarButton.tsx

"use client";
import { useState } from "react";

const MobileNavbarButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const mobileNavbar = document.getElementById("mobile-navbar");
    if (mobileNavbar) {
      mobileNavbar.style.left = isOpen ? "-100%" : "0";
    }
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleClick} className="md:hidden">
      <img
        src={isOpen ? "/svg/close.svg" : "/svg/menu.svg"}
        alt="menu"
        className="h-6 w-6"
      />
    </button>
  );
};

export default MobileNavbarButton;
