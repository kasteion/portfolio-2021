import React from "react";
import Layout from "../components/Layout";
import {
  Title,
  Article,
  HorizontalRule,
} from "../components/ComponentsForPages";
import Card from "../components/Card";

const ProjectsPage = () => {
  return (
    <Layout>
      <Title>My Projects</Title>
      <Article>Here i will put some sick projects</Article>
      <HorizontalRule />
      <Article>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Article>
    </Layout>
  );
};

export default ProjectsPage;
