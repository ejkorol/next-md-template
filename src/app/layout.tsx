import type { Metadata } from "next";
import { geistSans, geistMono } from "@/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Documentation",
  description: "Generated Typedoc files",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
