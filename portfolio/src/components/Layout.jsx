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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

// const Header = styled.header`
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// const Footer = styled.footer`
//   grid-column: 2/3;
//   grid-row: 3/4;
//   @media (max-width: 768px) {
//     grid-column: 1;
//     grid-row: 4/5;
//   }
// `;

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
      <Main>{children}</Main>
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
