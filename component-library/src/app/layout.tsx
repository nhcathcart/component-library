import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NHC-COMPONENTs",
  description: "A place to build components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
