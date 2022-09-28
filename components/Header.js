import React from "react";
import DiscordButton from "./DiscordButton";
import ScrollIndicator from "./ScrollIndicator";
import Chat from "./svg/Chat";
import Discord from "./svg/Discord";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header__info">
        <div className="header__text">
          {" "}
          <h1
            className="header__title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            We give you the place.{" "}
            <span className="header__title-span">Mingle.</span>
          </h1>
          <p
            className="header__description"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="700"
          >
            Te ayudamos a mejorar tus hábilidades con el Inglés para que
            expandas tus oportunidades en la vida.
          </p>
          <DiscordButton
            modifier="big"
            href="https://discord.gg/P2aGSpg8cr"
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1000"
          />
        </div>
        <div
          className="header__animation"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="1300"
        >
          <Chat id="header__chat" />
        </div>
      </div>
      <ScrollIndicator />
    </header>
  );
};

export default Header;
