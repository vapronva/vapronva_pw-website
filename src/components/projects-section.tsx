import { SiGithub, SiGitlab, SiNpm } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";

import Card from "~/components/card";
import ProjectItem from "~/components/project-item";

const leftProjects = [
  {
    title: "Concave",
    description:
      "Self-hostable and tweakable fork of the Convex backend suited for production. Hosts my stuff and (maybe) something more.",
    links: [
      { href: "https://git.horse/vapronva/concave", icon: SiGitlab },
      {
        href: "https://github.com/vapronva/concave",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "shitposting.rocks",
    description:
      "Meme and anime-art archive with LLM descriptions, semantic search, auto source-finding, and Telegram integration.",
    links: [
      { href: "https://git.horse/shiss/shitpostingrocks", icon: SiGitlab },
    ],
  },
  {
    title: "CKIC (Caddy Kubernetes Ingress Controller)",
    description:
      'Custom "ingress" controller that generates configs, provisions and reloads instances since ingress-nginx felt too rigid.',
    links: [
      { href: "https://git.horse/vapronva/ckic", icon: SiGitlab },
      { href: "https://github.com/vapronva/ckic", icon: SiGithub },
    ],
  },
  {
    title: "BeatMirror",
    description:
      "Mirrors BeatSaver maps and BeatLeader scores into Convex for an always-fresh and searchable local index.",
    links: [
      { href: "https://beatmirror.docker.house", icon: Globe },
      { href: "https://git.horse/vapronva/beatmirror", icon: SiGitlab },
    ],
  },
  {
    title: "[REDACTED REDACTE]",
    description:
      "[REDACTED REDACTED REDACTED REDA] routing gateway [REDACTED REDACTED REDACTED].",
    isRedacted: true,
  },
  {
    title: "otkat",
    description:
      "Firmware release control plane for ESP32 devices with canaries, telemetry, and rollback quarantine",
    links: [{ href: "https://git.horse/vapronva/otkat", icon: SiGitlab }],
  },
  {
    title: "Linx Server",
    description:
      "Maintained Linx fork (temporary file/media sharing via curl or drag-n-drop with syntax highlighting and previews, no accounts).",
    links: [{ href: "https://git.horse/vapronva/linx-server", icon: SiGitlab }],
  },
  {
    title: "Low Quality Bot",
    description:
      "Applies AV degradations to make media look like it was shot on a Nokia 7650. Overengineered and overcomplicated, but it works.",
    links: [{ href: "https://git.horse/low-quality-bot", icon: SiGitlab }],
  },
  {
    title: "[REDACTED REDACTED]",
    description:
      "[REDA] app centralizing client IDs and jump‑links ([REDA], [REDACTED ], internal tools) [REDACTED]; actively used [REDACTED].",
    isRedacted: true,
  },
  {
    title: "Cheatsheet Worldclock",
    description:
      "Apple Watch world clock that reveals extra notes on tap. Originally made for cheating on school tests.",
    links: [
      {
        href: "https://github.com/vapronva/cheatsheet_worldclock-wo_app",
        icon: SiGithub,
      },
    ],
  },
];

const rightProjects = [
  {
    title: "Cumlord DNS",
    description:
      "Authoritative DNS on PowerDNS. DNSSEC, near-instant propagation, scripting support baked in.",
  },
  {
    title: "dyzurka",
    description:
      "On-call alerting tool with group chat monitoring and incident/maintenance knowledge base with an LLM in the loop.",
    links: [{ href: "https://git.horse/vapronva/dyzurka", icon: SiGitlab }],
  },
  {
    title: "Container Images for OSS Projects",
    description:
      "Builds of open-source projects into container images with light patches where needed or bleeding-edge experience.",
    links: [{ href: "https://git.horse/oss-images", icon: SiGitlab }],
  },
  {
    title: "GitLab CI/CD Components Catalog",
    description:
      "Reusable GitLab CI components for build/test/security/deploy/release and consistent pipelines with minimal YAML.",
    links: [{ href: "https://git.horse/ci", icon: SiGitlab }],
  },
  {
    title: "PeerTube Custom Transcoding Profile",
    description:
      "PeerTube plugin exposing ffmpeg's CRF, preset, tune, profile and audio params in the transcoding profile.",
    links: [
      {
        href: "https://www.npmjs.com/package/peertube-plugin-custom-transcoding-profile",
        icon: SiNpm,
      },
      {
        href: "https://git.horse/vapronva/peertube-custom-transcoding-profile",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/peertube-custom-transcoding-profile",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "[REDACTED REDAC]",
    description:
      "News search, keyword extraction, custom sentiment, and summarization. Rerank articles and compute an [REDA] score.",
    isRedacted: true,
  },
  {
    title: "That's a Nice Argument Unfortunately Com",
    description:
      'Troll meme site that displays "private" info inferred from your IP: fake "doxxing" by a caterpillar. Parody of the popular meme.',
    links: [
      {
        href: "https://thats-a-nice-argument-unfortunately.com",
        icon: Globe,
      },
      {
        href: "https://git.horse/tnaudc/thats_a_nice_argument_unfortunately_dot_com-website",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/thats_a_nice_argument_unfortunately_dot_com-website",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Sosanie Ebla Bot Premium",
    description:
      "Telegram text-to-speech bot for funny, high-quality voice messages using Tinkoff/Yandex/Mail.ru/Sberbank voices.",
    links: [
      {
        href: "https://git.horse/sosanie-ebla-bot/sseblopremiumbot",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/sosanie_ebla_bot_premium-tg_bot",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Nebula.tv Video Archiver",
    description:
      "Proof-of-concept archiver for Nebula.tv by reverse-engineering and scraping the API. Downloads and preserves videos.",
    links: [
      {
        href: "https://git.horse/vapronva/nebula_tv_downloader-media_api",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/nebula_tv_downloader-media_api",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "[REDACTED REDACTED R]",
    description:
      'Generates hundreds of "unique" variants per image via many tweaks. Built to evade reverse-image search and marketplace restrictions.',
    isRedacted: true,
  },
];

export default function ProjectsSection() {
  return (
    <Card className="mt-3 max-w-5xl shadow-el_82f7.4/10 [--card-photo:url(/images/idminebg/el-82f7-4.jpeg)] sm:mx-auto sm:mt-6 sm:p-7">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <div className="w-full divide-y divide-gray-500/40 sm:w-1/2">
          {leftProjects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
        <div className="w-full divide-y divide-gray-500/40 sm:w-1/2">
          {rightProjects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
      <p className="mt-1 text-xa leading-tighter sm:mt-2">
        <i>
          And plenty more! For everything else (small tools, experiments, other
          big projects, etc) see{" "}
          <a
            href="https://git.horse/vapronva"
            target="_blank"
            className="drop-shadow-glow_sm transition duration-200 ease-in-out hover:drop-shadow-glow_sm_2"
          >
            my GitLab instance
          </a>{" "}
          (or{" "}
          <a
            href="https://github.com/vapronva"
            target="_blank"
            className="drop-shadow-glow_sm transition duration-200 ease-in-out hover:drop-shadow-glow_sm_2"
          >
            my GitHub
          </a>{" "}
          for older stuff).
        </i>
      </p>
    </Card>
  );
}
