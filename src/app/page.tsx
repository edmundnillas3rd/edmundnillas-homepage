"use client";
import {
  Container,
  Text,
  Flex,
  Spacer,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  DiJavascript,
  DiReact,
  DiMongodb,
  DiSass,
  DiMysql,
} from "react-icons/di";
import { SiExpress, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

const SkillItem = ({ icon, color, children }) => {
  const item = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <ListItem
      as={motion.li}
      variants={item}
      initial="hidden"
      whileInView="visible"
      color="brand.200"
    >
      <ListIcon as={icon} color={color} />
      {children}
    </ListItem>
  );
};

const App = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };
  return (
    <>
      <Container h="100vh">
        <Flex direction="column" justify="center" align="center" h="100%">
          <Text color="brand.200">
            Hi I'm{" "}
            <Text as="span" color="brand.100">
              Edmund,
            </Text>{" "}
            a full stack web developer.
          </Text>
        </Flex>
      </Container>
      <Flex direction="column" gap={5}>
        <Section title="About">
          <Text color="brand.200">
            &emsp;At the onset of the pandemic, I have been honing my skills in
            web development, constantly building side projects, either for my
            amusement or for a purpose. I'm eager and enthusiastic to learn more
            about tech related subjects.
          </Text>
        </Section>
        <Section title="Technologies Used">
          <Flex>
            <List as={motion.ul} animate="visible" variants={list} spacing={3}>
              <SkillItem icon={AiFillHtml5} color="orange.500">
                HTML
              </SkillItem>
              <SkillItem icon={IoLogoCss3} color="blue.500">
                CSS
              </SkillItem>
              <SkillItem icon={DiJavascript} color="yellow.500">
                Javascript
              </SkillItem>
              <SkillItem icon={DiReact} color="blue.500">
                React.js
              </SkillItem>
              <SkillItem icon={IoLogoNodejs} color="green.500">
                Node.js
              </SkillItem>
            </List>
            <Spacer />
            <List as={motion.ul} animate="hidden" variants={list} spacing={3}>
              <SkillItem icon={SiExpress} color="white.500">
                Express.js
              </SkillItem>
              <SkillItem icon={DiMongodb} color="green.500">
                MongoDB
              </SkillItem>
              <SkillItem icon={SiFirebase} color="yellow.300">
                Firebase
              </SkillItem>
              <SkillItem icon={DiSass} color="pink.500">
                Sass
              </SkillItem>
              <SkillItem icon={DiMysql} color="blue.500">
                MySQL
              </SkillItem>
            </List>
          </Flex>
        </Section>
        <Section title="Projects">
          <ProjectCard
            title="Plaza"
            demoUrl="https://plaza-g5bz.onrender.com/"
            codeUrl="https://github.com/edmundnillas3rd/Plaza"
          >
            <Text color="brand.200">
              An ecommerce website made with React.js, Express.js, MongoDB, and
              Firebase.
            </Text>
          </ProjectCard>
          <ProjectCard
            title="Simulacra"
            codeUrl="https://github.com/edmundnillas3rd/Simulacra"
          >
            <Text color="brand.200">
              A rendering engine made in C++ and OpenGL. Design for visualizing
              data and algorithms, as well for game development.
            </Text>
          </ProjectCard>
          <ProjectCard
            title="AnathemOS"
            codeUrl="https://github.com/edmundnillas3rd/AnathemOS"
          >
            <Text color="brand.200">
              A homebrew operating system, made for the sake of challenging
              myself into making a personalize system that fits my needs.
            </Text>
          </ProjectCard>
        </Section>
        <Section title="Blogs">Coming Soon...</Section>
      </Flex>
    </>
  );
};

export default App;
