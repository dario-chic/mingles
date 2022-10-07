import React from "react";
import Discord from "../svg/Discord";
import Linkedin from "../svg/Linkedin";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copy">
        ©2022 Mingles Community - All rights reserved.
      </p>
      <img
        width="auto"
        height="auto"
        src="/mingles-full-logo.png"
        alt="Logo de mingles"
      />
      <div className="footer__social">
        <a
          href="https://discord.gg/P2aGSpg8cr"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin id="footer__linkedin" />
        </a>
        <a
          href="https://discord.gg/P2aGSpg8cr"
          target="_blank"
          rel="noreferrer"
        >
          <Discord id="footer__discord" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
