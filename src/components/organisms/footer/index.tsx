import React, { useEffect, useState } from "react";

import { BsFillHeartFill } from "react-icons/bs";

import api from "../../../services/api";
import { Picture } from "../../atoms";
import { FooterInfos, Footer } from "./styles";

interface User {
  login?: string;
  avatar_url?: string;
}

const ProductCard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api
      .get("users/D3C0RU5")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => "Erro ao carregar usuário: " + error);
  }, []);

  return (
    <Footer>
      <div className="container p-3">
        <div className="col">
          <FooterInfos>
            <Picture
              imageSrc={user?.avatar_url}
              alt={user?.login}
              maxWidth="60px"
              style={{ borderRadius: "100%" }}
            />
            <span>
              Made with <BsFillHeartFill color="#da4b4f" /> by{" "}
              <strong>
                Carlos Henrique (
                <a
                  href="https://github.com/D3C0RU5"
                  rel="noreferrer"
                  target="_blank"
                >
                  {user?.login}
                </a>
                )
              </strong>
            </span>
          </FooterInfos>
        </div>
      </div>
    </Footer>
  );
};

export default ProductCard;
