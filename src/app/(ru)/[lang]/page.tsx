import { notFound } from "next/navigation";

import Cv from "~/components/cv";
import { isLang } from "~/components/cv-copy";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <Cv lang={lang} />;
}
