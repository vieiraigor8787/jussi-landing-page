import React, { useState } from "react";
import * as s from "./styles";

import logo from "../../img/logoJussi.svg";
import search from "../../assets/icon/search.svg";
import cart from "../../assets/icon/shopping-cart.svg";

import apiService from "../../apiservice";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const searchBtn = async () => {
    setLoading(true);
    try {
      const { data } = await apiService.get(`/${inputValue}`);
      setLoading(false);
      console.log(data);
      alert("olá");
      setInputValue("");
    } catch (e) {
      setLoading(false);
      setInputValue("");
      alert("usuário não encontrado");
    }
  };

  return (
    <s.Header>
      <s.BarraTopo>
        <s.AlignLeft>
          <s.Logo>
            <img src={logo} alt="logo Jussi" />
          </s.Logo>
          <s.Menu>
            <a href="#NossasSolucoes">
              <p>Nossas soluções</p>
            </a>
            <a href="#SobreNos">
              <p>Conheça a Jussi</p>
            </a>
          </s.Menu>
        </s.AlignLeft>
        <s.AlignRight>
          <s.SearchBar>
            <form>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar"
                value={loading ? "" : inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                onClick={inputValue ? searchBtn : () => alert("sd")}
              >
                <img src={search} alt="buscar" />
              </button>
            </form>
          </s.SearchBar>
          <a href="">Login</a>
          <a href="">
            <img src={cart} alt="meu carrinho" />
          </a>
        </s.AlignRight>
      </s.BarraTopo>
    </s.Header>
  );
};

export default Header;
