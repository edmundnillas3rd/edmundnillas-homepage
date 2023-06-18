import { Container, Flex, Heading } from "@chakra-ui/react";

const Section = ({ title, id, children }) => (
    <Container id={id} size="md" pt={20} mt={-20} mb={40}>
      <Flex direction="column" gap={10}>
        <Heading size="md">{title}</Heading>
        {children}
      </Flex>
    </Container>
);

export default Section;
