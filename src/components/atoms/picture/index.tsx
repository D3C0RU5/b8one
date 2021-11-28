import React from "react";

interface PictureProps {
  imageSrc: string;
  alt: string;
  maxWidth?: string;
  width?: string;
}

const Picture: React.FC<PictureProps> = ({
  imageSrc,
  maxWidth,
  width,
  alt,
}) => {
  return (
    <img
      src={imageSrc}
      alt={alt}
      style={{ width: width, maxWidth: maxWidth }}
    />
  );
};

Picture.defaultProps = {
  width: "100%",
};

export default Picture;
