import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import {
  Title,
  SubTitle,
  Span,
  Article,
  HorizontalRule,
  Button,
  Avatar,
} from "../components/ComponentsForPages";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { in: ["Avatar"] } }) {
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
  const avatarImage = getImage(data.allFile.edges[0].node);

  return (
    <Layout>
      <Title>About Me</Title>
      <SubTitle>
        I'm <Span>Fredy Castellón</Span>, a <Span>Software Developer</Span>
      </SubTitle>
      <Article>
        <section>
          I am a software engineer based in Guatemala and have worked in IT for
          about ten years, and I must say I love it. I have practical experience
          in software development and systems administration. I am currently
          looking for opportunities to challenge myself and grow, working on
          great projects and helping people and companies achieve their goals
          and bring their ideas to life. Take a look at the things I can do and
          let's see if we can work together on your new project.
        </section>
        <GatsbyImage image={avatarImage} alt="Avatar" />
      </Article>
      <HorizontalRule />
      <Article>
        <Button>Download Resume</Button>
        <Button>My Work</Button>
      </Article>
    </Layout>
  );
};

export default AboutPage;
