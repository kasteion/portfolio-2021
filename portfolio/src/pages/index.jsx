import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { colors } from "../utils/colors";

const Title = styled.h1`
  text-align: center;
  color: ${colors.dark};
`;

const Name = styled.span`
  color: ${colors.yellow};
  text-shadow: -2px 2px 0px ${colors.dark};
`;

const Profession = styled.span`
  color: ${colors.yellow};
  text-shadow: -2px 2px 0 ${colors.dark};
`;

const IndexPage = () => {
  return (
    <Layout>
      {/* <svg style={{ height: "200px", width: "200px" }}>
        <path
          fill="#fff"
          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
        ></path>
      </svg>
      <svg style={{ height: "200px", width: "200px" }}>
        <path
          fill="#faf"
          d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
        ></path>
      </svg> */}
      <Title>
        Hi,
        <span role="img" aria-label="Hand Wave">
          👋
        </span>
        <br />
        my name is <Name>Fredy Castellón</Name>
        <br />
        and i'm a <Profession>Software Developer</Profession>
      </Title>
    </Layout>
  );
};

export default IndexPage;
