import React from "react";
import Layout from "../components/Layout";
import {
  Title,
  Article,
  HorizontalRule,
} from "../components/ComponentsForPages";

const BlogPage = () => {
  return (
    <Layout>
      <Title>My Blog</Title>
      <Article>
        This is a work in progress so i dont have any blogs yet... i will be
        blogging here.
      </Article>
      <HorizontalRule />
    </Layout>
  );
};

export default BlogPage;
