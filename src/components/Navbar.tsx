import NextLink from "next/link";
import { Flex, Link, Spacer, Text, Container } from "@chakra-ui/react";

const Navbar = () => (
  <Container maxW="container.lg" py={5}>
    <Flex>
      <Text>Edmund Nillas III</Text>
      <Spacer />
      <Flex>
        <Flex gap={10} display={{ base: "none", md: "flex", lg: "flex" }}>
          <Link as={NextLink} href="/">
            Home
          </Link>
          <Link as={NextLink} href="/blogs">
            Blogs
          </Link>
          <Link as={NextLink} href="/about">
            About
          </Link>
        </Flex>
        <Text display={{ base: "block", sm: "block", md: "none" }}>Menu</Text>
      </Flex>
    </Flex>
  </Container>
);

export default Navbar;
