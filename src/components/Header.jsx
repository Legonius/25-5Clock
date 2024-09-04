import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="flex items-center gap-4">
      <FontAwesomeIcon icon={faCoffee} className="text-2xl" />
      <p>
        {"25+"}
        <span className="text-red-600">{"5"}</span>
        {"Clock"}
      </p>

      <FontAwesomeIcon icon={faCoffee} className="text-2xl" />
    </header>
  );
};

export default Header;
