import React from "react";
import * as s from "./style";

import JussyAgency from "../../img/image-jussi.png";

const About = () => {
  return (
    <s.Content id="Quem-somos">
      <s.Block>
        <s.Text>
          <h2>Olá, somos A Jüssi</h2>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <a href="/"> Conheça a Jüssi </a>
        </s.Text>
        <s.ContentImage>
            <s.Image>
            <img src={JussyAgency} alt="" />
            </s.Image>
        </s.ContentImage>
      </s.Block>
    </s.Content>
  );
};

export default About;