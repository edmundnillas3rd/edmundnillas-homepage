"use client";
import NextLink from "next/link";
import { Button, Flex, Container, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Admin = () => (
  <Container
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    maxW="md"
    h="100vh"
  >
    <Box p={10} border="1px" borderColor="brand.200" borderRadius="5px">
      <Button
        as={NextLink}
        href="/create-blog"
        leftIcon={<AddIcon />}
        colorScheme="brand.200"
      >
        Add Blog Post
      </Button>
    </Box>
  </Container>
);

export default Admin;
