"use client";

import { Container, Text } from "@chakra-ui/react";

const Blogs = ({ params }) => {
  return (
    <Container size="container.lg">
      <Text>Coming Soon...</Text>
    </Container>
  );
};

export async function generateStaticParams() {
  // TODO (Edmund): URL to be added for the fetch API function
  const posts = await fetch("").then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default Blogs;
