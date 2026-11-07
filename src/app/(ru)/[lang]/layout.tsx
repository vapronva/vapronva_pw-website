import "~/styles/globals.css";

import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { inter } from "~/app/fonts/inter";
import { copy, isLang } from "~/components/cv-copy";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(copy).map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { name, role, description } = copy[lang];
  return { title: `${name}, ${role}`, description };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.className} scheme-light-dark theme-light:scheme-light theme-dark:scheme-dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var t=localStorage.theme;if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}',
          }}
        />
      </head>
      <body className="bg-cv-bg">{children}</body>
    </html>
  );
}
