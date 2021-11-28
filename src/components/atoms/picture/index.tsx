import React from "react";

interface PictureProps {
  imageSrc: string | undefined;
  alt: string | undefined;
  maxWidth?: string | undefined;
  width?: string | undefined;
  style?: object;
}

const Picture: React.FC<PictureProps> = ({
  imageSrc,
  maxWidth,
  width,
  alt,
  style,
}) => {
  return (
    <img
      src={imageSrc}
      alt={alt}
      style={{ ...style, width: width, maxWidth: maxWidth }}
    />
  );
};

Picture.defaultProps = {
  width: "100%",
};

export default Picture;
