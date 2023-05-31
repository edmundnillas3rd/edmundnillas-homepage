"use client";

import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getPost, type Post } from "../../../utils/database";
import { getMarkdownPost } from "../../../utils/storage";

const Post = ({ params }) => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    (async function () {
      const p = await getPost(params.slug);
      const m = await getMarkdownPost(p as Post);
      setMarkdown(m);
    })();
  }, []);

  return (
    <Container maxW="container.lg">
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </Container>
  );
};

export default Post;
