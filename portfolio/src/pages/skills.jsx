import React from "react";
import Layout from "../components/Layout";
import {
  Title,
  Article,
  HorizontalRule,
} from "../components/ComponentsForPages";
import Card from "../components/Card";

const SkillsPage = () => {
  return (
    <Layout>
      <Title>My Skills</Title>
      <Article>
        <section>
          These are some of my sick skills, take a look at my ninja arts.
        </section>
      </Article>
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

export default SkillsPage;
