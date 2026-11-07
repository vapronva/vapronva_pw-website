import "~/styles/globals.css";

import { type Metadata } from "next";

import { inter, interItalic } from "~/app/fonts/inter";

export const metadata: Metadata = {
  title: "@vapronva — personal website",
  description:
    "hi, there! so… here you can discover a bit about me, how to get in touch, what i'm up to, and more.",
  openGraph: {
    title: "@vapronva — personal website",
    description:
      "hi there! hope you're doing well… you've stumbled upon my little corner of the web where you can discover a bit about me, how to get in touch, what i'm up to, and more. enjoy!",
    url: "https://vapronva.pw/",
    siteName: "vapronva.pw",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} ${interItalic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
