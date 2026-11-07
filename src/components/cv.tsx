import Image from "next/image";

import { copy, type Lang } from "~/components/cv-copy";
import Magic from "~/components/magic";
import ThemeToggle from "~/components/theme-toggle";

const contacts = [
  "mailto:me@vprw.ru",
  "https://t.me/vapron_va",
  "https://github.com/vapronva",
  "https://git.horse/vapronva",
];

const stack = (
  <>
    <b>Python</b>, <b>Go</b>, <b>TypeScript</b>, <b>Bash</b>. <b>Kubernetes</b>,{" "}
    <b>Cilium</b>, <b>GitLab CI/CD</b>, <b>Ansible</b>, <b>Terraform</b>.{" "}
    <b>PostgreSQL</b>, <b>ClickHouse</b>. <b>Prometheus</b>, <b>Grafana</b>.{" "}
    <b>BGP</b>, <b>WireGuard</b>.
  </>
);

export default function Cv({ lang }: { lang: Lang }) {
  const content = copy[lang];
  const otherLang = lang === "en" ? "ru" : "en";
  return (
    <div className="flex min-h-dvh flex-col bg-cv-bg font-features-['cv11','ss03'] text-cv-ink scheme-light-dark theme-light:scheme-light theme-dark:scheme-dark">
      <header className="bg-cv-surface">
        <div className="mx-auto flex max-w-360 items-center gap-4.5 px-5 py-5 sm:px-12">
          <Magic name="avatar">
            <Image
              src="https://cdn.engineering/vapronva-pw/images/pfp/new-2022-hkc-out.jpeg"
              alt=""
              width={56}
              height={56}
              loading="eager"
              unoptimized
              className="size-14 shrink-0 rounded-[14px] object-cover"
            />
          </Magic>
          <div className="flex min-w-0 flex-1 flex-col gap-0.75">
            <h1 className="text-2xl/[1.1] font-semibold tracking-tight">
              {content.name}
            </h1>
            <p className="text-sm/[1.3] font-[450] text-cv-accent">
              {content.role}
              <span className="font-[350] text-cv-muted">, Selectel</span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle label={content.theme} />
            <a
              href={`/${otherLang}`}
              hrefLang={otherLang}
              className="rounded-lg bg-cv-chip px-2.5 py-1.75 text-xs/[normal] font-[550] text-cv-accent hover:opacity-75"
            >
              {otherLang.toUpperCase()}
            </a>
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-360 flex-1 flex-col gap-6 px-5 py-6 text-[14.5px]/[1.55] text-pretty text-cv-text sm:px-12 [&_a]:font-medium [&_a]:text-cv-accent [&_a:hover]:opacity-75 [&_b]:font-[550] [&_b]:text-cv-ink">
        <Magic name="about">
          <p className="max-w-240 text-base/[1.55]">{content.intro}</p>
        </Magic>
        <div className="grid items-start gap-x-14 gap-y-6.5 md:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]">
          <div className="flex flex-col gap-3">{content.experience}</div>
          <div className="flex flex-col gap-6.5">
            <Magic name="stack">
              <p>{stack}</p>
            </Magic>
            <Magic name="education">
              <div className="flex flex-col gap-2.5">
                <p>{content.education}</p>
                <Magic name="languages">
                  <p className="text-cv-muted">{content.languages}</p>
                </Magic>
              </div>
            </Magic>
            <Magic name="contacts">
              <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                {contacts.map((href) => (
                  <a key={href} href={href}>
                    {href.replace(/^[a-z]+:(\/\/)?/, "")}
                  </a>
                ))}
              </div>
            </Magic>
          </div>
        </div>
      </main>
    </div>
  );
}
