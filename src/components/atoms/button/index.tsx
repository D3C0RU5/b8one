import React, { ReactNode, useState } from "react";

import { Component } from "./styles";

interface propsButton {
  iconOnConfirmed?: ReactNode;
  bgColor?: string;
  bgColorHover?: string;
  bgColorActive?: string;
  foreColor?: string;
  foreColorHover?: string;
  foreColorActive?: string;
  textOnActive?: string;
  children?: ReactNode;
}

const Button: React.FC<propsButton> = ({
  iconOnConfirmed,
  bgColor,
  bgColorHover,
  bgColorActive,
  foreColor,
  foreColorHover,
  foreColorActive,
  textOnActive,
  children,
}) => {
  const [active, setActive] = useState(false);

  const showIcon = () => {
    if (active && iconOnConfirmed) return iconOnConfirmed;
  };

  const toggleActive = () => {
    setActive((p) => !p);
  };

  return (
    <Component
      onClick={toggleActive}
      bgColor={bgColor}
      bgColorHover={bgColorHover}
      bgColorActive={bgColorActive}
      foreColor={foreColor}
      foreColorHover={foreColorHover}
      foreColorActive={foreColorActive}
      className={active ? "active" : ""}
    >
      {showIcon()}
      {active ? textOnActive : children}
    </Component>
  );
};

export default Button;
