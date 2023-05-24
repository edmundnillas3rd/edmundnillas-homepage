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
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

const App = () => (
  <>
    <Container h="100vh">
      <Flex direction="column" justify="center" align="center" h="100%">
        <Text color="brand.200">
          Hi I'm{" "}
          <Text as="span" color="brand.100">
            Edmund
          </Text>{" "}
          a full stack web developer
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
          <List spacing={3}>
            <ListItem color="brand.200">
              <ListIcon as={AiFillHtml5} color="orange.500" />
              HTML
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={IoLogoCss3} color="blue.500" />
              CSS
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={DiJavascript} color="yellow.500" />
              Javascript
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={DiReact} color="blue.500" />
              React.js
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={IoLogoNodejs} color="green.500" />
              Node.js
            </ListItem>
          </List>
          <Spacer />
          <List spacing={3}>
            <ListItem color="brand.200">
              <ListIcon as={SiExpress} color="white.500" />
              Express.js
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={DiMongodb} color="green.500" />
              MongoDB
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={SiFirebase} color="yellow.300" />
              Firebase
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={DiSass} color="pink.500" />
              Sass
            </ListItem>
            <ListItem color="brand.200">
              <ListIcon as={DiMysql} color="blue.500" />
              MySQL
            </ListItem>
          </List>
        </Flex>
      </Section>
      <Section title="Projects">
        <ProjectCard
          src="/images/plaza.jpg"
          title="Plaza"
          demoUrl="https://plaza-g5bz.onrender.com/"
          codeUrl="https://github.com/edmundnillas3rd/Plaza"
        >
          <Text color="brand.200">
            An ecommerce website made with React.js, Express.js, MongoDB, and
            Firebase.
          </Text>
        </ProjectCard>
      </Section>
      <Section title="Blogs">
       Coming Soon...
      </Section>
    </Flex>
  </>
);

export default App;
