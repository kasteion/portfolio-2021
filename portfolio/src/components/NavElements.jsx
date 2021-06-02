import React from "react";
import styled from "@emotion/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { colors } from "../utils/colors";

const Logo = styled.div`
  margin: 10px 0 50px 0;
  display: flex;
  justify-content: center;
  width: 15pc;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 50px;
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  border: 5px solid ${colors.yellow};
  box-shadow: 0px 0px 0px 5px ${colors.pink};
  overflow: hidden;
  width: 10pc;
  height: 10pc;
  flex-shrink: 0;

  @media (max-height: 414px) {
    display: none;
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

// const Name = styled.p`
//   font-weight: bold;
//   font-size: 1.3em;
//   color: ${colors.pink};
//   span {
//     color: ${colors.yellow};
//     position: absolute;
//     left: 44px;
//   }
// `;

const NamePink = styled.p`
  font-weight: bold;
  font-size: 1.3em;
  color: ${colors.pink};

  @media (max-height: 300px) {
    display: none;
  }
`;

const NameYellow = styled.p`
  font-weight: bold;
  font-size: 1.3em;
  color: ${colors.yellow};
  position: relative;
  margin: 0;
  padding: 0;
  height: 1px;
  top: -45px;
  left: 2px;
  @media (max-height: 300px) {
    display: none;
  }
`;

const NavElements = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { in: ["Avatar", "icon"] } }) {
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

  const indexAvatar = data.allFile.edges.findIndex(
    ({ node }) => node.name === "Avatar"
  );
  const indexLogo = data.allFile.edges.findIndex(
    ({ node }) => node.name === "icon"
  );

  const logo = getImage(data.allFile.edges[indexLogo].node);
  const image = getImage(data.allFile.edges[indexAvatar].node);
  const name = data.allFile.edges[indexAvatar].node.name;
  return (
    <>
      <Logo>
        <GatsbyImage image={logo} alt="Logo" />
      </Logo>
      <Avatar>
        <GatsbyImage image={image} alt={name} />
      </Avatar>
      <NamePink>Fredy Castellón</NamePink>
      <NameYellow>Fredy Castellón</NameYellow>
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
    </>
  );
};

export default NavElements;
