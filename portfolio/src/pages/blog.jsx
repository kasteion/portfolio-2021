import React from "react";
import Layout from "../components/Layout";
import {
  Title,
  Article,
  CardContainer,
  HorizontalRule,
} from "../components/ComponentsForPages";
import Card from "../components/Card";

const BlogPage = () => {
  return (
    <Layout>
      <Title>My Blog</Title>
      <Article>
        This is a work in progress so i dont have any blog posts yet... i will
        be blogging here.
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

export default BlogPage;
