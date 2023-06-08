"use client";

import { Container, List, ListItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NextLink from "next/link";

import { type DocumentData } from "firebase/firestore";

import Section from "../../components/Section";
import { getPosts } from "../../utils/database";

const Blogs = () => {

  const [posts, setPosts] = useState<DocumentData>();
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <Container size="container.lg" py={5}>
      <Section title="Blogs">
          <List
            spacing={3}
            display="flex"
            flexDir="column"
          >
            {posts &&
              posts.map((post, index) => (
                <ListItem
                  as={NextLink}
                  key={index}
                  href={`blogs/${post.id}`}
                >
                  {post.data.title}
                </ListItem>
              ))}
          </List>
        </Section>
    </Container>
  );
};

export default Blogs;
