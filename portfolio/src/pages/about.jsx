import React from "react";
import Layout from "../components/Layout";
import {
  Title,
  SubTitle,
  Span,
  Article,
  HorizontalRule,
  Button,
} from "../components/ComponentsForPages";

const AboutPage = () => {
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
        <section>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, at.
          Officia hic similique recusandae assumenda dolores a error
          consequatur, iure provident laudantium possimus, rem quidem, quod
          facere quibusdam fugiat doloribus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Numquam, harum nulla vero similique eum
          fugiat animi voluptatibus, architecto illum laudantium incidunt
          temporibus itaque modi veritatis nam? Cumque error corporis impedit!
        </section>
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
