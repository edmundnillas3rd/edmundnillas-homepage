import { Metadata } from "next";

import { Providers } from "./providers";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Edmund Nilllas III - Homepage",
  description: "Edmund Nillas III's Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
