import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import DiscordButton from "../DiscordButton";
import BurguerBar from "../svg/BurguerBar";
// import logo from "../assets/logo.png";

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
      <Link href="/#inicio">
        <picture className="nav__logo">
          <img src="/logo.png" alt="aguacandy-logo" />
        </picture>
      </Link>
      <span className="nav__bar" onClick={handleNav}>
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
          <Link className="nav__link" href="/#about-us">
            <a className="nav__link">About us</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <Link className="nav__link" href="/#school">
            <a className="nav__link">School</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <Link href="/#meetings">
            <a className="nav__link">Meetings</a>
          </Link>
        </li>
        <li className="nav__item" onClick={handleNav}>
          <Link className="nav__link" href="/#questions">
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
