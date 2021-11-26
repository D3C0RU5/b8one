import React from "react";

interface PictureProps {
  imageSrc: string;
  maxWidth?: string;
}

const Picture: React.FC<PictureProps> = (props) => {
  const { imageSrc, maxWidth } = props;
  return <img src={imageSrc} style={{ maxWidth: maxWidth }} />;
};

export default Picture;
