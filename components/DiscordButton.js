import React from "react";
import Button from "./Button";
import Discord from "./svg/Discord";

const DiscordButton = (props) => {
  return (
    <Button
      className={`btn btn__discord ${props.modifier || ""}`}
      href="https://discord.gg/P2aGSpg8cr"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <Discord id="discord-svg" {...props} />
      Discord
    </Button>
  );
};

export default DiscordButton;
