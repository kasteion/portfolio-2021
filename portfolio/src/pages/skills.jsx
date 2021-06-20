import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import {
  Title,
  Article,
  CardContainer,
  HorizontalRule,
} from "../components/ComponentsForPages";
import Card from "../components/Card";
import SkillsData from "../content/skills.json";

const SkillsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: { in: ["react", "nodejs", "mongodb", "csharp", "mssql"] }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 250
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Title>My Skills</Title>
      <Article>These are some of my ninja arts.</Article>
      <HorizontalRule />
      <CardContainer>
        {SkillsData.skills.map(
          ({ id, title, description, imageName, imagePosition }) => {
            const imageIndex = data.allFile.edges.findIndex(
              ({ node }) => node.name === imageName
            );
            const image = getImage(data.allFile.edges[imageIndex].node);
            return (
              <Card
                key={id}
                title={title}
                description={description}
                cardImage={image}
                imagePosition={imagePosition}
              />
            );
          }
        )}
      </CardContainer>
    </Layout>
  );
};

export default SkillsPage;
