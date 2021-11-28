import React from "react";
import { IoMdCheckmark } from "react-icons/io";

import { Wish, Button, Picture, Typography } from "../../atoms";

import { formatNumberToMonetary } from "../../../utils/format";
import { Product } from "../../../types";
import {
  Card,
  Header,
  FloatButton,
  Title,
  OldPrice,
  Price,
  Parcels,
} from "./styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <Header>
        <Picture imageSrc={product.imageSrc} alt={product.imageAlt} />
        <FloatButton>
          <Wish />
        </FloatButton>
      </Header>

      <Title>
        <Typography>{product.title}</Typography>
      </Title>

      <OldPrice>
        <Typography>
          {formatNumberToMonetary(product.priceWithoutDiscount, "pt-BR", "BRL")}
        </Typography>
      </OldPrice>

      <Price>
        <Typography>
          {formatNumberToMonetary(product.price, "pt-BR", "BRL")}
        </Typography>
      </Price>

      <Parcels>
        <Typography>
          em até{" "}
          <strong>
            {product.parcel.times}x de{" "}
            {formatNumberToMonetary(product.parcel.value, "pt-BR", "BRL")}
          </strong>{" "}
          sem juros
        </Typography>
      </Parcels>

      <Button
        iconOnConfirmed={<IoMdCheckmark />}
        bgColor="#40B25C"
        bgColorHover="#1C6C3E"
        bgColorActive="#A3F9B9"
        foreColor="#FFFFFF"
        foreColorActive="#1C1C1C"
        textOnActive="Adicionado"
      >
        Adicionar
      </Button>
    </Card>
  );
};

export default ProductCard;
