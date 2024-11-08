import React from "react";
import { links, socials } from "./utils";
import Separator from "../Separators/Separator"; // Assuming a Separator component exists as in Ninfa
import moment from "moment";

const Footer = () => {
  const currentYear = moment().format("YYYY");
  const copyright = `© ${currentYear} House of Medici - All rights reserved`;

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 flex flex-col gap-8 md:gap-4 bg-background">
      <Separator />

      <div className="grid grid-cols-2 gap-4 md:gap-0 lg:grid-cols-[2fr_1fr_auto]">
        <div className="flex flex-col gap-4 md:justify-between text-xs font-light">
          {links.map((link, i) => (
            <a href={link.href} target="_blank" key={i} className="font-thin">
              <p>{link.text}</p>
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            {socials.map((social, i) => (
              <a
                href={social.href}
                target="_blank"
                key={i}
                className="flex gap-2 items-center"
              >
                <img src={social.logo} alt={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between text-xs font-thin">
        <p>
          Contact us:&nbsp;
          <a href="mailto:info@houseofmedici.com" target="_blank" rel="noreferrer">
            info@houseofmedici.com
          </a>
        </p>
        <p>{copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
