import React from "react";

import "./Lang.scss";

import Globe from "assets/img/icons/globe.svg";
import Arrow from "assets/img/icons/dropdown_arrow.svg";

interface ILangSelector {}

const Lang = (props: ILangSelector) => {
  return (
    <div className="customLang">
      <div className="langField">
        <div className="content">
          <div className="globe">
            <img src={Globe} alt="" />
          </div>
          <span>English</span>
        </div>
        <div className="arrow">
          <img src={Arrow} alt="" />
        </div>
      </div>

      <div className="langItems"></div>
    </div>
  );
};

export default Lang;
