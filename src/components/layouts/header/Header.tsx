import React from "react";

import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="container-fluid">
        <div className="header-wrapper">
          <div className="logo">
            <a href="#">
              <img src="./gameloft_logo.svg" alt="" />
            </a>
          </div>
          <div className="hamburger">
            <img src="./hamburger.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
