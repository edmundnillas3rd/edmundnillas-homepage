"use client";
import {
  Container,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { signInAdmin, isUserSignedIn } from "../../utils/authentication";

export default function Auth() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  const router = useRouter();

  const onUserSignIn = (e) => {
    signInAdmin(username, password)
      .then((user) => {
        if (!!user) {
          router.push("/admin");
        }
      })
      .catch((err) => {
        setErrMessage("Unable to sign in, invalid admin email");
      });
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
        <form method="POST" onSubmit={onUserSignIn}>
          <FormControl display="flex" flexDir="column" gap={3} isInvalid={!!errMessage}>
            {errMessage && <FormErrorMessage>{errMessage}</FormErrorMessage>}
            <Input
              type="email"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Email"
            />
            <Input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <Button onClick={onUserSignIn}>Sign In</Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}
