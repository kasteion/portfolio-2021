import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import { colors } from "../utils/colors";

const Title = styled.h1`
  color: ${colors.yellow};
  text-shadow: -2px 2px 0px ${colors.dark};
`;

const SubTitle = styled.h2`
  color: ${colors.dark};
`;

const Span = styled.span`
  color: ${colors.pink};
  text-shadow: -2px 0px 0px ${colors.dark};
`;

const Paragraph = styled.p`
  padding: 20px;
  color: ${colors.dark};
`;

const AboutPage = () => {
  return (
    <Layout>
      <Title>About Me</Title>
      <SubTitle>
        I'm <Span>Fredy Castellón</Span>, a <Span>Software Developer</Span>
      </SubTitle>
      <Paragraph>
        I am a software engineer from Guatemala with more than ten years of
        experience working in technology and software development. I have
        practical experience in all areas of software development and systems
        administration. I am currently looking for opportunities to challenge
        myself and grow working with a team of talented people on software
        projects at a fast pace and in an agile environment, helping users and
        companies achieve their goals and bring their ideas to life. Take a look
        at the projects i have been working on and lets see if we can work
        together on your new project.
      </Paragraph>
      <hr style={{ width: "60vw" }} />
      <button>Download Resume</button>
      <button>My Work</button>
      {/* <h1>
        About Me{" "}
        <span role="img" aria-label="Rock'n Roll">
          🤘
        </span>
      </h1> */}
    </Layout>
  );
};

export default AboutPage;
