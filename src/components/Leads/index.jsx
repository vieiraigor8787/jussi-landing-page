import React from "react";
import * as s from "./style";

const Leads = () => {
  return (
    <s.Content>
      <s.Block>
        <s.Text>
          <h2>
            <span>//&nbsp;&nbsp;&nbsp;&nbsp;</span> Receba novidades da nossa
            área de produtos digitais.
          </h2>

          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
            <button type="submit">CADASTRAR</button>
          </form>
        </s.Text>
      </s.Block>
    </s.Content>
  );
};

export default Leads;
