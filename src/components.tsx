import { Image, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { getImage } from "./utils/storage";

export const components = {
  h1: "h3",
  h2: "h3",
  h4: "h3",
  h5: "h3",
  h6: "h3",
  h3({ children, ...props }) {
    return (
      <Heading as="h3" size="md" mb={3}>
        {children}
      </Heading>
    );
  },

  img({ ...props }) {
    const [src, setSrc] = useState("");

    getImage(props.src).then(value => {
      setSrc(value);
    }).catch(error => {
      switch(error.code) {
        case 'storage/object-not-found':
          setSrc(props.src)
          break;
      }
    })

    return (
      <VStack as="div" justify="center" align="center" spacing={3} my={5}>
        <Image boxSize="lg" src={src}  alt={props.alt} />
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
