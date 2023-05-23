import { Container, Flex, Heading, Text } from "@chakra-ui/react";

const Section = ({ title, children }) => (
  <Container size="md">
    <Flex direction="column" gap={10}>
      <Heading size="md">{title}</Heading>
      {children}
    </Flex>
  </Container>
);

export default Section;