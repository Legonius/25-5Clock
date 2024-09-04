import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faCoffee} /> {" 25 + 5 Clock "}
      <FontAwesomeIcon icon={faCoffee} />
    </header>
  );
};

export default Header;
