"use client";
import {
  Container,
  Box,
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
  DiGithubBadge,
} from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";
import { SiExpress, SiFirebase } from "react-icons/si";
import { useEffect, useState } from "react";
import NextLink from "next/link";
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

export default function App() {
  useEffect(() => {
  }, []);

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
          <Text color="brand.200" textAlign="center">
            Hi I'm{" "}
            <Text as="span" color="brand.100">
              Edmund
            </Text>
            , a full stack web developer.
          </Text>

          <Box display="flex" p={10} gap={2}>
            <NextLink href="https://github.com/edmundnillas3rd" legacyBehavior>
              <a target="_blank">
                <DiGithubBadge size={32} />
              </a>
            </NextLink>
            <NextLink
              href="https://linkedin.com/in/edmund-nillas-iii-178a361b6"
              legacyBehavior
            >
              <a target="_blank">
                <CiLinkedin size={32} />
              </a>
            </NextLink>
          </Box>
        </Flex>
      </Container>
      <Flex direction="column" gap={5}>
        <Section title="About" id="about">
          <Text color="brand.200">
            &emsp;At the onset of the pandemic, I have been honing my skills in
            web development, constantly building side projects, either for my
            amusement or for a purpose. I am eager and enthusiastic to learn more
            about tech related subjects.
          </Text>
        </Section>
        <Section title="Technologies Used" id="technologies">
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
        <Section title="Projects" id="projects">
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
            title="CCIS Scheduler"
            demoUrl="https://ccis-scheduler.onrender.com/"
            codeUrl="https://github.com/edmundnillas3rd/CCIS-Scheduler"
          >
            <Text color="brand.200">
              A project whose primary feature was for a student to set a
              scheduled meeting with the faculty staff of my school for varied
              reasons. This particular project aims to resolve the conflicting
              issues of schedules of teachers and students in my school.
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
        </Section>
      </Flex>
    </>
  );
}
