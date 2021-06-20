import React from "react";
import styled from "@emotion/styled";
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from "../utils/colors";
import { SubTitle, Span, Article } from "../components/ComponentsForPages";

const CardContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 200px;
  z-index: -1;
`;

const DescriptionContainer = styled.div`
  // border: 3px solid ${colors.yellow};
  // box-shadow: 2px 2px 2px 0px ${colors.pink};
  // border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  width: 30vw;
  h2 {
    padding: 0px;
  }

  article {
    padding: 0px;
    text-align: center;
  }
`;

const Card = ({ title, description, cardImage, imagePosition }) => {
  if (imagePosition === "right") {
    return (
      <CardContainer>
        <DescriptionContainer>
          <SubTitle>
            <Span>{title}</Span>
          </SubTitle>
          <Article>{description}</Article>
        </DescriptionContainer>
        <ImageContainer>
          <GatsbyImage image={cardImage} alt="skill" />
        </ImageContainer>
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <ImageContainer>
        <GatsbyImage image={cardImage} alt="skill" />
      </ImageContainer>
      <DescriptionContainer>
        <SubTitle>
          <Span>{title}</Span>
        </SubTitle>
        <Article>{description}</Article>
      </DescriptionContainer>
    </CardContainer>
  );
};

export default Card;
