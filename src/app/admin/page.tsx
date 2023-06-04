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

import { addPost } from "../../utils/database";
import { uploadImages, uploadPost } from "../../utils/storage";

export default function Admin() {
  const [imageFiles, setImageFiles] = useState<File[]>();
  const [markdownFile, setMarkdownFile] = useState<File>();
  const [title, setTitle] = useState<string>("");

  let isError = false;

  const onImageFileChange = (e) => {
    e.preventDefault();
    setImageFiles(Array.from(e.target.files));
  };

  const onFileChange = (e) => {
    isError = markdownFile?.type !== "text/markdown";
    e.preventDefault();

    setMarkdownFile(e.target.files[0]);
  };

  const onFileSubmit = async (e) => {
    e.preventDefault();

    if (isError) return;

    let images = imageFiles?.map((image) => {
      return `blog_posts_images/${markdownFile?.name}/${image.name}`;
    }) as string[];

    const post: Post = {
      author: "edmund",
      title,
      path: markdownFile?.name as string,
      timestamp: new Date().toJSON(),
      images,
    };

    const id = await addPost(post);

    await uploadPost(id, markdownFile as File);
    await uploadImages(post.images, imageFiles as File[]);
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
            <FormHelperText>Valid files (i.e. '.md')</FormHelperText>
            <Input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={onImageFileChange}
              display="flex"
              alignItems="center"
              p={1}
            />
            <FormHelperText>
              Valid files (i.e. '.png, .jpg, jpeg')
            </FormHelperText>
            {isError && (
              <FormErrorMessage>Only Markdown file is allowed</FormErrorMessage>
            )}
            <Input type="submit" mt={3} />
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}
