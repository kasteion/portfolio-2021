import React from "react";
import styled from "@emotion/styled";
import { colors } from "../utils/colors";

const CardContainer = styled.div`
  border: 3px solid ${colors.yellow};
  border-radius: 10px;
  height: 250px;
  width: 250px;
  margin: 20px;
  box-shadow: 2px 2px 2px 0px ${colors.pink};
`;
const Card = () => {
  return <CardContainer></CardContainer>;
};

export default Card;
