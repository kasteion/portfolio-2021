import React from "react";
import Layout from "../components/Layout";
import {
  Title,
  Article,
  CardContainer,
  HorizontalRule,
} from "../components/ComponentsForPages";
import Card from "../components/Card";

const ProjectsPage = () => {
  return (
    <Layout>
      <Title>My Projects</Title>
      <Article>
        This is a work in progress so i dont have any projects to showcase
        yet... i will have some shortly.
      </Article>
      <HorizontalRule />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Layout>
  );
};

export default ProjectsPage;
