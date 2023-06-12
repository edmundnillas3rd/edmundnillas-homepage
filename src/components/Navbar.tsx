"use client";
import NextLink from "next/link";
import {
  Flex,
  Link,
  Spacer,
  Text,
  Container,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Container
        maxW="container.lg"
        position="sticky"
        bg="brand.300"
        top={0}
        left={0}
        py={3}
        opacity="80%"
      >
        <Flex align="center">
          <Text>Edmund Nillas III</Text>
          <Spacer />
          <Flex>
            <Flex gap={10} display={{ base: "none", md: "flex", lg: "flex" }}>
              <Link as={NextLink} href="#about">
                About
              </Link>
              {/* <Link as={NextLink} href="/blogs">
                Blogs
              </Link> */}
              <Link as={NextLink} href="#technologies">
                Technologies Used
              </Link>
              <Link as={NextLink} href="#projects">
                Projects
              </Link>
            </Flex>
            <IconButton
              aria-label="menu"
              ref={btnRef}
              onClick={onOpen}
              display={{ base: "block", sm: "block", md: "none" }}
              icon={<HamburgerIcon />}
            />
          </Flex>
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.300" color="brand.100">
          <DrawerCloseButton />
          <DrawerBody p={10}>
            <Flex gap={10} direction="column" align="center">
              <Link as={NextLink} href="/">
                Home
              </Link>
              <Link as={NextLink} href="/blogs">
                Blogs
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
