import { Image, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const components = {
  h3({ children, ...props }) {
    return (
      <Heading as="h3" size="md" mb={3}>
        {children}
      </Heading>
    );
  },

  img({ ...props }) {
    const [src, setSrc] = useState("");

    return (
      <VStack as="div" justify="center" align="center" spacing={3} my={5}>
        <Image boxSize="lg" src={src} alt={props.alt} />
      </VStack>
    );
  },

  p({ children, ...props }) {
    return (
      <Text as="div" color="brand.200">
        {children}
      </Text>
    );
  },
};
