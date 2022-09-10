import React from "react";
import DiscordButton from "./DiscordButton";
import ScrollIndicator from "./ScrollIndicator";
import Chat from "./svg/Chat";
import Discord from "./svg/Discord";

const Header = () => {
  return (
    <header className="header">
      <div className="header__info">
        <div className="header__text">
          {" "}
          <h1 className="header__title">
            We give you the place.{" "}
            <span className="header__title-span">Mingle.</span>
          </h1>
          <p className="header__description">
            Te ayudamos a mejorar tus hábilidades con el Inglés para expandir
            tus oportunidades en la vida.
          </p>
          <DiscordButton
            modifier="big"
            href="https://discord.gg/P2aGSpg8cr"
            target="_blank"
            rel="noreferrer"
          />
        </div>
        <div className="header__animation">
          <Chat id="header__chat" />
        </div>
      </div>
      <ScrollIndicator />
    </header>
  );
};

export default Header;
