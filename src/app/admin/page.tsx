"use client";
import NextLink from "next/link";
import { Button, Flex, Container } from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const Admin = () => (
  <Container maxW="md">
    <Flex direction="column" gap={3}>
      <Button
        as={NextLink}
        href="/create-blog"
        leftIcon={<AddIcon />}
        colorScheme="green"
      >
        Add Blog Post
      </Button>
      <Button as={NextLink} href="/" leftIcon={<CloseIcon />} colorScheme="red">
        Exit
      </Button>
    </Flex>
  </Container>
);

export default Admin;
