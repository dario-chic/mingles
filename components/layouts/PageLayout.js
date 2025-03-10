import Head from "next/head";
import Script from "next/script";
import React from "react";
import Header from "../Header";
import Footer from "./Footer";
import Nav from "./Nav";
import NavHome from "./NavHome";
import NavSchool from "./NavSchool";

const PageLayout = ({ children, title, description, header, nav = "" }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.ico" type="image/ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#151b25" />
        <title>{title || "Mingles - Aprende inglés fácilmente"}</title>
        <meta
          name="description"
          content={
            description ||
            "Aprende inglés fácil y rápido en Mingles, una comunidad gratuita para prácticar, mejorar tu inglés y divertirte junto con otros hablantes."
          }
        />

        <meta name="author" content="Dario Chic" />
        <meta
          name="keywords"
          content="aprender ingles, comunidad en ingles, aprender ingles gratis, mingles, mingle, como aprender ingles, hablar ingles con otros"
        />
        <meta name="robots" content="index" />
        <meta name="image" content="portada.webp" />
        <link rel="canonical" href="https://www.mingles.com/" />

        <meta
          property="og:title"
          content="Mingles - Aprende inglés fácilmente"
        />
        <meta
          property="og:description"
          content={
            description ||
            "Aprende inglés fácil y rápido en Mingles, una comunidad gratuita para prácticar, mejorar tu inglés y divertirte junto con otros hablantes."
          }
        />
        <meta property="og:image" content="portada.webp" />
        <meta property="og:url" content="https://www.mingles.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@mingles" />
        <meta
          name="twitter:title"
          content="Mingles - Aprende inglés fácilmente"
        />
        <meta
          name="twitter:description"
          content={
            description ||
            "Aprende inglés fácil y rápido en Mingles, una comunidad gratuita para prácticar, mejorar tu inglés y divertirte junto con otros hablantes."
          }
        />
        <meta name="twitter:image" content="portada.webp" />
      </Head>
      {nav === "" && <Nav />}
      {nav === "home" && <NavHome />}
      {nav === "school" && <NavSchool />}
      {header && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
