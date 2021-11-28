import React, { useState } from "react";
import { VscHeart } from "react-icons/vsc";
import { RiHeartFill } from "react-icons/ri";

import { Container } from "./styles";

const FavoriteButton: React.FC = () => {
  const [isWished, setIsWished] = useState(false);

  const handleToggleWish = () => {
    setIsWished((p) => !p);
  };

  return (
    <Container className={isWished ? "wished" : ""} onClick={handleToggleWish}>
      {isWished ? <RiHeartFill /> : <VscHeart />}
    </Container>
  );
};

export default FavoriteButton;
