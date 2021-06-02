import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { colors } from "../utils/colors";
import NavBar from "./NavBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15pc auto;
  grid-template-rows: 1pc auto 1pc;
  overflow-y: hidden;
  font-family: -apple-system, Roboto, sans-serif, serif;
  background-color: ${colors.white};
`;

const Header = styled.header`
  grid-column: 2/3;
  grid-row: 1/2;
`;

const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;
`;

const Footer = styled.footer`
  grid-column: 2/3;
  grid-row: 3/4;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <NavBar></NavBar>
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
