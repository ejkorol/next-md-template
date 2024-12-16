import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { geistSans, geistMono } from "@/utils/fonts";
import { Providers } from "@/app/providers/providers";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
