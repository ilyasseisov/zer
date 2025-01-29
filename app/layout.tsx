// FC
import { FC } from "react";
// fonts
import { stolzlFont } from "@/lib/fonts";
// styles
import "../css/style.css";
// schema
import schema from "../schema/organization-schema.json";
// metadata
import { metadata } from "../schema/metadata";
////

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${stolzlFont.variable} bg-dark`}>{children}</body>
    </html>
  );
};

export { metadata };
export default RootLayout;
