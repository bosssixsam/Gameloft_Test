import React from "react";

import "./Input.scss";

interface IInput {
  type?: string;
  placeHolder?: string;
}

const Input = ({ type, placeHolder }: IInput) => {
  return (
    <div className="customInput">
      <input type={type || "text"} placeholder={placeHolder} />
    </div>
  );
};

export default Input;
