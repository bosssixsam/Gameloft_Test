import React from "react";

import "./Checkbox.scss";

interface ICheckbox {
  content?: string;
}

function Checkbox({ content }: ICheckbox) {
  return (
    <label className="customCheckbox">
      <input type="checkbox" />
      <span className="checkmark"></span>
      <p className="checkbox-content">{content}</p>
    </label>
  );
}

export default Checkbox;
