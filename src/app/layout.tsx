"use client";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>This is the header section</header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
