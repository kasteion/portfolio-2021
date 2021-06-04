import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { colors } from "../utils/colors";

const Title = styled.h1`
  color: ${colors.yellow};
  text-shadow: -2px 2px 0px ${colors.dark};
`;

const ContactPage = () => {
  return (
    <Layout>
      <Title>Contact</Title>
      {/* <h1>
        Contact{" "}
        <span role="img" aria-label="Rock'n Roll">
          🤘
        </span>
      </h1> */}
    </Layout>
  );
};

export default ContactPage;
