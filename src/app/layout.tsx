import "~/styles/globals.css";

import { type Metadata } from "next";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "fonts/inter/variable/4.1/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "fonts/inter/variable/4.1/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
