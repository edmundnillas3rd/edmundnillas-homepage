import { Button, Box, Flex, Spacer, Heading, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

const ProjectCard = ({ src = "", title, children, demoUrl = "", codeUrl }) => (
  <Flex gap={5}>
    {src.length !== 0 && (
      <Box>
        <Image src={src} alt="project-img" />
      </Box>
    )}
    <Spacer />
    <Flex direction="column" gap={5}>
      <Heading size="md">{title}</Heading>
      {children}
      <Flex gap={5}>
        <Button
          isDisabled={demoUrl.length === 0}
          as={NextLink}
          href={demoUrl}
          leftIcon={<ChevronRightIcon />}
          color="brand.200"
          variant="link"
        >
          View Demo
        </Button>
        <Spacer />
        <Button
          as={NextLink}
          href={codeUrl}
          leftIcon={<ChevronRightIcon />}
          color="brand.200"
          variant="link"
        >
          View Source
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export default ProjectCard;
