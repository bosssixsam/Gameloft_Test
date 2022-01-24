import React from "react";

import "./Dropdown.scss";

import { ReactComponent as Arrow } from "assets/img/icons/dropdown_arrow.svg";

interface IDropdown {
  value?: string;
  placeHolder?: string;
}

const Dropdown = ({ value, placeHolder = "dropdown" }: IDropdown) => {
  return (
    <div className="customDropdown">
      <div className="dropdownfield">
        <p className="dropdownfield__content">{value ? value : placeHolder}</p>
        <div className="dropdownfield__icon">
          <Arrow />
        </div>
      </div>
      <div className="items"></div>
    </div>
  );
};

export default Dropdown;
