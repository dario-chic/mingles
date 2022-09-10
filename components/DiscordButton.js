import React from "react";
import Button from "./Button";
import Discord from "./svg/Discord";

const DiscordButton = () => {
  return (
    <Button className="btn btn__discord">
      <Discord id="discord-svg" />
      Discord
    </Button>
  );
};

export default DiscordButton;
