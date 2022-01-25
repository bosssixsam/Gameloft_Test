import React from "react";

import "./Button.scss";

interface IButton {
  children?: any;
}

const Button = ({ children }: IButton) => {
  return <button className="customButton">{children}</button>;
};

export default Button;
