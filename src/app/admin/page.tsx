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
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

import { type Post, addPost } from "../../utils/database";
import { uploadPost } from "../../utils/storage";

const Admin = () => {
  const [files, setFiles] = useState<File[]>([]);
  const onFileSubmit = (e) => {
    e.preventDefault();

    const post: Post = {
      author: "edmund",
      path: files[0].name,
      timestamp: new Date().toJSON(),
    };

    uploadPost(post, files[0])
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
        {/* <Button leftIcon={<AddIcon />} colorScheme="brand.200">
          Add Blog Post
        </Button> */}

        <form
          onSubmit={onFileSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <FormControl>
            <FormLabel>Add Blog Post</FormLabel>
            <Input
              type="file"
              onChange={(e) => setFiles(Array.from(e.target.files) ?? [])}
            />
            <FormHelperText>Valid files (i.e. '.md')</FormHelperText>
            <Input type="submit" />
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default Admin;
