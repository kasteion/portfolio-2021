import React, { useState } from "react";
import styled from "@emotion/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { colors } from "../utils/colors";
import NavElements from "./NavElements";

const Nav = styled.nav`
  background-color: ${colors.dark};
  color: ${colors.white};
  grid-column: 1/2;
  grid-row: 1/4;
  height: 100%;
  overflow: auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ResponsiveNav = styled.nav`
  background-color: ${colors.dark};
  color: ${colors.white};
  align-items: center;
  display: none;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    left: 0px;
  }
`;

const ResponsiveNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px;
  width: 90%;
`;

const ResponsiveNavElementContainer = styled.div`
  height: 100vh;
`;

const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;

  &:hover {
    div {
      background-color: ${colors.yellow};
    }
  }

  &:active {
    div {
      background-color: ${colors.pink};
    }
  }

  div {
    width: 35px;
    height: 3px;
    margin-top: 4px;
    background-color: ${colors.white};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBar = () => {
  const [show, setShow] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "icon" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 50
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  const image = getImage(data.allFile.edges[0].node);

  const toogleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Nav>
        <NavElements />
      </Nav>
      <ResponsiveNav>
        <ResponsiveNavDiv>
          <Link to="/">
            <GatsbyImage image={image} alt="Logo" />
          </Link>
          <HamburgerButton onClick={toogleShow}>
            <div></div>
            <div></div>
            <div></div>
          </HamburgerButton>
        </ResponsiveNavDiv>
        {show ? (
          <ResponsiveNavElementContainer>
            <NavElements />
          </ResponsiveNavElementContainer>
        ) : (
          ""
        )}
      </ResponsiveNav>
    </>
  );
};

export default NavBar;
