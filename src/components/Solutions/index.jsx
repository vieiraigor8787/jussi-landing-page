import React from "react";
import * as s from "./styles";

const dataJSON = [
  {
    image: "P1",
    name: "Nome do Produto #1",
    description: "Descrição do produto #1",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
    id: Math.random(),
  },
  {
    image: "P2",
    name: "Nome do Produto #2",
    description: "Descrição do produto #2",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
    id: Math.random(),
  },
  {
    image: "P3",
    name: "Nome do Produto #3",
    description: "Descrição do produto #3",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
    id: Math.random(),
  },
  {
    image: "P4",
    name: "Nome do Produto #4",
    description: "Descrição do produto #4",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    link: "#",
    id: Math.random(),
  },
];

const Solutions = () => {
  return (
    <s.Content>
      <s.Block>
        <s.TitleBlock>
          <h2>
            <span>//</span>NOSSAS SOLUÇÕES
          </h2>
        </s.TitleBlock>
        <s.ContentBlock>
          {dataJSON &&
            dataJSON.length > 0 &&
            dataJSON.map((solution) => (
              <s.CardsBlock key={solution.id}>
                <div className="solution-image">
                  <span>{solution.image}</span>
                </div>
                <h3>{solution.name}</h3>
                <h4>{solution.description}</h4>
                <ul>
                  {solution.features &&
                    solution.features.length > 0 &&
                    solution.features.map((item) => (
                      <li key={item}>{`🞄 ${item}`}</li>
                    ))}
                </ul>
                <a href={solution.urlPath} target="_blank" rel="noreferrer">
                  <button>Ver Solução</button>
                </a>
              </s.CardsBlock>
            ))}
        </s.ContentBlock>
      </s.Block>
    </s.Content>
  );
};

export default Solutions;
