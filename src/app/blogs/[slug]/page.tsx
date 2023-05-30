"use client";

import { Container, Text } from "@chakra-ui/react";

const Post = ({ params }) => {
  return (
    <Container>
      <Text>{params.slug}</Text>
    </Container>
  );
};

export default Post;
