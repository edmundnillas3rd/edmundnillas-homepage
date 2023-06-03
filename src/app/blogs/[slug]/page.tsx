"use client";

import { Container, Text, VStack } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { type Post, getPost, getPosts } from "../../../utils/database";
import { getMarkdownPost } from "../../../utils/storage";
import { components } from "../../../components";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPosts();

  const results = posts.map((post) => ({ slug: post.id }));

  return results;
}

export default async function Page({ params }: Params) {
  const post = await getPost(params.slug);
  const markdown = await getMarkdownPost(post as Post);

  // const [post, setPost] = useState<Post>();
  // const [markdown, setMarkdown] = useState<string>("");

  // useEffect(() => {
  //   (async function () {
  //     const p = await getPost(params.slug);
  //     const m = await getMarkdownPost(p as Post);
  //     setPost(p as Post);
  //     setMarkdown(m);
  //   })();
  // }, []);

  return (
    <Container maxW="container.lg" py={5}>
      <VStack mb={5}>
        <Text as="div" align="center" fontSize="2xl">
          {post?.title}
        </Text>
        <Text as="div" color="brand.200" align="center" fontSize="md">
          Posted: {post?.timestamp.slice(0, 10)}
        </Text>
      </VStack>
      <ReactMarkdown
        children={markdown}
        components={components}
        remarkPlugins={[remarkGfm]}
      />
    </Container>
  );
}
