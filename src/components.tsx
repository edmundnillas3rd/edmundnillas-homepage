import { Image, Heading, Text, VStack } from "@chakra-ui/react";

export const components = {
  h1: "h3",
  h2: "h3",
  h4: "h3",
  h5: "h3",
  h6: "h3",
  h3({ children, ...props }) {
    return (
      <Heading as="h3" size="md" mb={3} {...props}>
        {children}
      </Heading>
    );
  },

  img({ ...props }) {
    return (
      <VStack justify="center" align="center" spacing={3} my={5}>
        <Image boxSize="lg" {...props} />
      </VStack>
    );
  },

  p({ node, inline, className, children, ...props }) {
    return (
      <Text color="brand.200" {...props}>
        {children}
      </Text>
    );
  },
};
