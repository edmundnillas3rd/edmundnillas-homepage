import { Container, Flex, Heading, Text } from "@chakra-ui/react";

const Section = ({ title, id, children }) => (
  <>
    <Container id={id} mt={20}></Container>
    <Container size="md" mb={20}>
      <Flex direction="column" gap={10}>
        <Heading size="md">{title}</Heading>
        {children}
      </Flex>
    </Container>
  </>
);

export default Section;
