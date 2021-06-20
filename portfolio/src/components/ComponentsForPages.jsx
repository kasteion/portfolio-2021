import styled from "@emotion/styled";
import { colors } from "../utils/colors";

export const Title = styled.h1`
  color: ${colors.yellow};
  text-shadow: -2px 2px 0px ${colors.dark};
  text-align: center;
`;

export const SubTitle = styled.h2`
  color: ${colors.dark};
  text-align: center;
  padding: 20px;
`;

export const Span = styled.span`
  color: ${colors.pink};
  text-shadow: -2px 0px 0px ${colors.dark};
`;

export const Article = styled.article`
  padding: 20px;
  color: ${colors.dark};
  display: flex;
  justify-content: space-around;
  section {
    padding: 20px;
  }

  button {
    margin: 20px;
  }
`;

export const CardContainer = styled.div`
  padding: 20px;
  color: ${colors.dark};
`;
export const HorizontalRule = styled.hr`
  width: 30%;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background: ${colors.yellow};
  color: ${colors.dark};
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${colors.pink};
    color: ${colors.yellow};
  }

  &:active {
    background: ${colors.yellow};
    color: ${colors.dark};
  }
`;

export const CenteredContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
