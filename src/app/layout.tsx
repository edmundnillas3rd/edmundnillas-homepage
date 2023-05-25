"use client";

import { Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            bg="brand.300"
            color="brand.100"
          >
            <Navbar />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
