import React from "react";
import styled from "@emotion/styled";
import { colors } from "../utils/colors";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

const Nav = styled.nav`
  background-color: ${colors.dark};
  color: ${colors.white};
  height: 100vh;
  grid-column: 1/2;
  grid-row: 1 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  border: 5px solid ${colors.yellow};
  box-shadow: 0px 0px 0px 5px ${colors.pink};
  overflow: hidden;
  width: 10pc;
  height: 10pc;

  img {
    position: absolute;
    top: -15px;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  li {
    margin-bottom: 10px;
    text-align: center;

    a {
      text-decoration: none;
      color: ${colors.white};
    }
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.3em;
  color: ${colors.pink};
  span {
    color: ${colors.yellow};
    position: absolute;
    left: 44px;
  }
`;

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "Avatar" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 200
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
  const name = data.allFile.edges[0].node.name;
  return (
    <Nav>
      <Avatar>
        <GatsbyImage image={image} alt={name} />
      </Avatar>
      <Name>
        Fredy Castellón <span>Fredy Castellón</span>
      </Name>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projets</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </List>
    </Nav>
  );
};

export default NavBar;
