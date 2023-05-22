import NextLink from "next/link";
import { Flex, Link, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => (
  <Flex p={20}>
    <Text>Edmund Nillas III</Text>
    <Spacer />
    <Flex gap={10}>
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
  </Flex>
);

export default Navbar;
