"use client";
import {
  Container,
  Box,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signInAdmin } from "../../utils/authentication";

async function authUser(username: string, password: string) {
  const user = await signInAdmin(username, password);
  return user;
}

export default async function Auth() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const onUserSignIn = async (e) => {
    e.preventDefault();
    const user = await authUser(username, password);

    if (user) {
      router.push("/");
    } else {
      setErrorMessage("Unable to find user");
    }
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
          <FormControl
            display="flex"
            flexDir="column"
            gap={3}
          >
            {errMessage && <FormErrorMessage>{errMessage}</FormErrorMessage>}
            <Input
              type="email"
              onChange={(e) => {
                e.preventDefault();
                setUsername(e.target.value);
              }}
              placeholder="Email"
            />
            <Input
              type="password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <Button onClick={onUserSignIn}>Sign In</Button>
          </FormControl>
      </Box>
    </Container>
  );
}
