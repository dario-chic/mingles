import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import DiscordButton from "../DiscordButton";
import BurguerBar from "../svg/BurguerBar";

const Nav = () => {
  const [scroll, setScroll] = useState("inicio");
  const [navIsActive, setNavIsActive] = useState(false);
  const nav = useRef();
  const list = useRef();

  const handleNav = () => {
    if (navIsActive) {
      setNavIsActive(false);
      document.body.classList.remove("navIsActive");
    }
  };

  const handleBar = () => {
    if (navIsActive) {
      setNavIsActive(false);
      document.body.classList.remove("navIsActive");
    }
    if (!navIsActive) {
      setNavIsActive(true);

      document.body.classList.add("navIsActive");
    }
  };

  useEffect(() => {
    var lastScrollTop = 0;

    window.addEventListener(
      "scroll",
      function () {
        var actualScroll =
          window.pageYOffset || document.documentElement.scrollTop;

        if (actualScroll > lastScrollTop) {
          setScroll(false);
        } else {
          setScroll(true);
        }

        lastScrollTop = actualScroll <= 0 ? 0 : actualScroll; // For Mobile or negative scrolling
        if (actualScroll === 0) setScroll("inicio");
      },
      false
    );
  }, []);

  return (
    <nav
      className={`nav ${
        scroll === "inicio" ? "start" : scroll ? "up" : "down"
      } ${navIsActive ? "active" : "inactive"}`}
      ref={nav}
    >
      <Link href="/">
        <picture className="nav__logo">
          <img src="/mingles-04.svg" alt="mingles-logo" />
        </picture>
      </Link>
      <span className="nav__bar" onClick={handleBar}>
        <BurguerBar id="nav__bar" />
      </span>
      <div
        className={`nav__transparent ${navIsActive ? "active" : "inactive"}`}
        onClick={handleNav}
      ></div>
      <ul
        className={`nav__list ${navIsActive ? "active" : "inactive"}`}
        ref={list}
      >
        <li className="nav__item" onClick={handleNav}>
          <Link className="nav__link" href="#about">
            <a className="nav__link">About us</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <Link className="nav__link" href="#our-school">
            <a className="nav__link">School</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <Link href="#meetings">
            <a className="nav__link">Meetings</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <Link href="#team">
            <a className="nav__link">Team</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <Link className="nav__link" href="#faq">
            <a className="nav__link">Questions</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <DiscordButton />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
