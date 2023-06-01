"use client";

import { Container, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { type Post, getPost } from "../../../utils/database";
import { getMarkdownPost } from "../../../utils/storage";
import { components } from "../../../components";

const Post = ({ params }) => {
  const [post, setPost] = useState<Post>();
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    (async function () {
      const p = await getPost(params.slug);
      const m = await getMarkdownPost(p as Post);
      setPost(p as Post);
      setMarkdown(m);
    })();
  }, []);

  return (
    <Container maxW="container.lg" py={5}>
      <VStack mb={5}>
        <Text as="div" align="center" fontSize="2xl">{post?.title}</Text>
        <Text as="div"color="brand.200" align="center" fontSize="md">Posted: {post?.timestamp}</Text>
      </VStack>
      <ReactMarkdown
        children={markdown}
        components={components}
        remarkPlugins={[remarkGfm]}
      />
    </Container>
  );
};

export default Post;
