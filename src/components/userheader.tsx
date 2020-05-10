import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/header.scss";

const UserHeader: React.FC<any> = () => {
  return (
    <header id="usr-header">
      <nav>
        <Link to="" id="logo"></Link>
        <ul id="main-nav">
          <li>Stores</li>
          <li>Messages</li>
          <li>Favourites</li>
          <li>
            <div id="usr-icon">
              <div id="usr-img"></div>
            </div>
            <ul id="usr-account"></ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default UserHeader;
