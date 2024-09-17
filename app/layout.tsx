// FC
import { FC } from "react";
// meta
import type { Metadata } from "next";
// head
import Head from "next/head";
// fonts
import { stolzlFont } from "@/lib/fonts";
// styles
import "../css/style.css";
////
export const metadata: Metadata = {
  title: "ZER Design",
  description: "Creative and marketing agency",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${stolzlFont.variable} bg-dark`}>{children}</body>
    </html>
  );
};

export default RootLayout;
