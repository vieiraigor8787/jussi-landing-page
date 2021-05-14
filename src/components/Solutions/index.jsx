import React from "react";
import * as s from "./styles";

const dataJSON = [
  {
    img: "P1",
    name: "Nome do Produto #1",
    description: "Descrição do produto #1",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
  },
  {
    img: "P2",
    name: "Nome do Produto #2",
    description: "Descrição do produto #2",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
  },
  {
    img: "P3",
    name: "Nome do Produto #3",
    description: "Descrição do produto #3",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
  },
  {
    img: "P4",
    name: "Nome do Produto #4",
    description: "Descrição do produto #4",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
  },
];

const Solutions = () => {
  return (
    <s.Content>
      <s.Block>
        <s.TitleBlock>
          <h2>
            <span>//&nbsp;</span>NOSSAS SOLUÇÕES
          </h2>
        </s.TitleBlock>
        <s.ContentBlock>
          {dataJSON &&
            dataJSON.length > 0 &&
            dataJSON.map((data) => (
              <s.CardsBlock key={data.id}>
                <s.CardsImg>
                  <span>{data.img}</span>
                </s.CardsImg>
                <h3>{data.name}</h3>
                <h4>{data.description}</h4>
                <ul>
                  {data.features &&
                    data.features.length > 0 &&
                    data.features.map((feature) => (
                      <li key={feature}>{`🞄 ${feature}`}</li>
                    ))}
                </ul>
                <a href={data.link} target="_blank" rel="noreferrer">
                 Ver Solução
                </a>
              </s.CardsBlock>
            ))}
        </s.ContentBlock>
      </s.Block>
    </s.Content>
  );
};

export default Solutions;
