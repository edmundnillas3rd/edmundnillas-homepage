"use client";
import {
  Button,
  Container,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";

import { type Post, addPost } from "../../utils/database";
import { uploadImages, uploadPost } from "../../utils/storage";

const Admin = () => {
  const [imageFiles, setImageFiles] = useState<File[]>();
  const [markdownFile, setMarkdownFile] = useState<File>();
  const [title, setTitle] = useState<string>("");

  const isError = markdownFile?.type !== "text/markdown";

  const onImageFileChange = (e) => {
    e.preventDefault();
    setImageFiles(Array.from(e.target.files));
  };

  const onFileChange = (e) => {
    e.preventDefault();

    setMarkdownFile(e.target.files[0]);
  };

  const onFileSubmit = (e) => {
    e.preventDefault();

    if (isError) return;

    let images = imageFiles?.map((image) => {
      return `blog_posts_images/${markdownFile.name}/${image.name}`;
    }) as string[];

    const post: Post = {
      author: "edmund",
      title: title,
      path: markdownFile.name,
      timestamp: new Date().toJSON(),
      images
    };

    uploadPost(post, markdownFile)
      .catch((reason) => console.error(reason));

    uploadImages(post.images, imageFiles as File[])
      .catch((reason) => console.error(reason));

    addPost(post)
      .catch((reason) => console.error(reason));
  };

  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      maxW="md"
      h="100vh"
    >
      <Box p={10} border="1px" borderColor="brand.200" borderRadius="5px">
        <form
          onSubmit={onFileSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <FormControl>
            <Input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Blog Title"
            />
            <FormLabel mt={3}>Add Blog Post</FormLabel>
            <Input
              type="file"
              accept=".md"
              onChange={onFileChange}
              display="flex"
              alignItems="center"
              p={1}
            />
            <Input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={onImageFileChange}
              display="flex"
              alignItems="center"
              p={1}
            />
            <FormHelperText>Valid files (i.e. '.md')</FormHelperText>
            {isError && (
              <FormErrorMessage>Only Markdown file is allowed</FormErrorMessage>
            )}
            <Input type="submit" mt={3} />
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default Admin;
