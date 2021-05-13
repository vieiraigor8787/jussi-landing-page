import React from "react";
import * as s from "./styles";

import logo from "../../img/logoJussi.svg";
import search from "../../assets/icon/search.svg"
import cart from "../../assets/icon/shopping-cart.svg"

const Header = () => {
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
                type="search"
                name="search"
                id="search"
                placeholder="Buscar"
              />
              <button type="submit">
                  <img src={search} alt="procurar"/>
              </button>
            </form>
          </s.SearchBar>
          <a href>Login</a>
          <img src={cart} alt="meu carrinho"/>
        </s.AlignRight>
      </s.BarraTopo>
    </s.Header>
  );
};

export default Header;
