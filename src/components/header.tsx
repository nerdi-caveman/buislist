import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC<any> = () => {
  return (
    <header>
      <nav>
        <Link to = "" id="logo"></Link>
          <ul id="main-nav">
            <li>Be a store owner</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
      </nav>
    </header>
  );
};
export default Header;
