// meta
import type { Metadata } from "next";

export const metadata: Metadata = {
  // basic
  metadataBase: new URL("https://zer.design"),
  title: "ZER Design",
  description:
    "Creative and marketing agency. We help turn your ideas into reality.",
  //
  // robots
  //
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  //
  // opengraph
  //
  openGraph: {
    title: "ZER Design",
    description:
      "Creative and marketing agency. We help turn your ideas into reality.",
    url: "https://zer.design",
    siteName: "ZER Design",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },
  //
  // twitter
  //
  twitter: {
    card: "summary_large_image",
    title: "ZER Design",
    site: "https://zer.design",
    description:
      "Creative and marketing agency. We help turn your ideas into reality.",
    images: ["/og.png"],
  },
  //
  // canonical
  //
  alternates: {
    canonical: "https://zer.design",
  },
};
