import React from "react";

interface PictureProps {
  imageSrc: string;
  maxWidth?: string;
  width?: string;
}

const Picture: React.FC<PictureProps> = (props) => {
  const { imageSrc, maxWidth, width } = props;
  return <img src={imageSrc} style={{ width: width, maxWidth: maxWidth }} />;
};

Picture.defaultProps = {
  width: "100%",
};

export default Picture;
