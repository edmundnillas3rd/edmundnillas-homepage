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
import { uploadPost } from "../../utils/storage";

const Admin = () => {
  const [file, setFiles] = useState<File>();
  const [title, setTitle] = useState<string>("");

  const isError = file?.type !== "text/markdown";

  const onFileChange = (e) => {
    e.preventDefault();

    if (e.target.files.length > 1) return;

    setFiles(e.target.files[0]);
  };

  const onFileSubmit = (e) => {
    e.preventDefault();

    if (isError) return;

    const post: Post = {
      author: "edmund",
      title: title,
      path: file.name,
      timestamp: new Date().toJSON(),
    };

    uploadPost(post, file)
      .then((result) => console.log(result))
      .catch((reason) => console.error(reason));

    addPost(post)
      .then((result) => console.log(result))
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
