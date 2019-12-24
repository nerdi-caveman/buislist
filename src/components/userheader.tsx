import React from "react";

const UserHeader: React.FC<any> = () => {
  return (
    <header id="usr-header">
      <nav>
        <div className="hdr-left">
          <div id="logo"></div>
        </div>
        <ul id="main-nav">
          <li>Be a store owner</li>
          <li>Store</li>
          <li>Messages</li>
          <li>
            <i className="fa fa-">h</i>
            <ul id = "usr-account"></ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default UserHeader;
