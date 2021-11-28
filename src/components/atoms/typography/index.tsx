import React from "react";

interface TypographyProps {
  color?: string;
  style?: object;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { children, style } = props;

  return <span style={{ ...style }}>{children}</span>;
};

export default Typography;
