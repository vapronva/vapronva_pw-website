import {
  type IconType,
  SiGithub,
  SiGitlab,
  SiNpm,
} from "@icons-pack/react-simple-icons";
import { Globe, type LucideIcon } from "lucide-react";

import ProjectItem from "~/components/project-item";

const leftProjects: Array<{
  title: string;
  description: string;
  links: Array<{ href: string; icon: LucideIcon | IconType }>;
  isRedacted?: boolean;
}> = [
  {
    title: "CKIC (Caddy Kubernetes Ingress Controller)",
    description:
      'Homelab‑friendly Caddy "ingress" for K8s — auto‑updates configs, provisions/reloads instances; built after ingress-nginx felt too rigid.',
    links: [{ href: "https://gl.vprw.ru/vapronva/ckic", icon: SiGitlab }],
  },
  {
    title: "That's a Nice Argument Unfortunately Com",
    description:
      'Troll meme site that displays "private" info inferred from your IP — fake "doxxing" by a caterpillar. Parody of the popular meme.',
    links: [
      {
        href: "https://thats-a-nice-argument-unfortunately.com",
        icon: Globe,
      },
      {
        href: "https://gl.vprw.ru/tnaudc/thats_a_nice_argument_unfortunately_dot_com-website",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/thats_a_nice_argument_unfortunately_dot_com-website",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "BeatMirror",
    description:
      "Mirrors BeatSaver maps and BeatLeader scores into Convex for an always‑fresh, searchable local index.",
    links: [
      { href: "https://gl.vprw.ru/vapronva/beatmirror", icon: SiGitlab },
      { href: "https://beatmirror.docker.house", icon: Globe },
    ],
  },
  {
    title: "[REDACTED REDACTED]",
    description:
      "[REDA] app centralizing client IDs and jump‑links ([REDA], [REDACTED ], internal tools) [REDACTED]; actively used [REDACTED].",
    links: [],
    isRedacted: true,
  },
  {
    title: "Linx Server",
    description:
      "Maintained Linx fork: temporary file/media sharing via curl or drag-n-drop with syntax highlighting and previews; no accounts.",
    links: [
      { href: "https://gl.vprw.ru/vapronva/linx-server", icon: SiGitlab },
    ],
  },
  {
    title: "Sosanie Ebla Bot Premium",
    description:
      "Telegram text-to-speech bot for funny, high-quality voice messages using Tinkoff/Yandex/Mail.ru/Sberbank voices.",
    links: [
      {
        href: "https://gl.vprw.ru/sosanie-ebla-bot/sseblopremiumbot",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/sosanie_ebla_bot_premium-tg_bot",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "isu2cal",
    description:
      "Auth layer for ITMO’s APIs plus schedule to iCal conversion. Sends change alerts and keeps any calendar app auto-updated.",
    links: [
      {
        href: "https://gl.vprw.ru/itmo-university/isu2cal",
        icon: SiGitlab,
      },
      { href: "https://github.com/vapronva/isu2cal", icon: SiGithub },
    ],
  },
  {
    title: "[REDACTED REDACTED R]",
    description:
      'Generates hundreds of "unique" variants per image via upscaling, rotation, gamma/metadata tweaks, etc. Built to evade reverse-image search and marketplace restrictions.',
    links: [],
    isRedacted: true,
  },
  {
    title: "Low Quality Bot",
    description:
      "Applies AV degradations to make media look like it was shot on a Nokia 7650. Overengineered and overcomplicated, but it works.",
    links: [{ href: "https://gl.vprw.ru/low-quality-bot", icon: SiGitlab }],
  },
  {
    title: "PeerTube Custom Transcoding Profile",
    description:
      "PeerTube transcoding profile with configurable CRF, preset, tune, profile, and audio params for that ffmpeg under the hood.",
    links: [
      {
        href: "https://www.npmjs.com/package/peertube-plugin-custom-transcoding-profile",
        icon: SiNpm,
      },
      {
        href: "https://gl.vprw.ru/vapronva/peertube-custom-transcoding-profile",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/peertube-custom-transcoding-profile",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Kriper2004 Minecraft LP (E1) — Analytics",
    description:
      'Word-perfect transcription of a 96-hour Kriper2004\'s Minecraft "Let’s Play". Uses OpenAI Whisper and fine-tuned ASR models.',
    links: [
      {
        href: "https://gl.vprw.ru/vapronva/kriper2004-minecraft-lets-play-episode-1-analytics",
        icon: SiGitlab,
      },
    ],
  },
];

const rightProjects: Array<{
  title: string;
  description: string;
  links: Array<{ href: string; icon: LucideIcon }>;
  isRedacted?: boolean;
}> = [
  {
    title: "Cumlord DNS",
    description:
      "Self-managed DNS provider on PowerDNS with robust DNSSEC and ultra-fast propagation times with additional scripting support baked-in.",
    links: [],
  },
  {
    title: "DNS Filtering Rulesets",
    description:
      "Curated domain/host filtering rules used for my DNS recursive resolver. Personal blocklists and exceptions tailored for RU and then some.",
    links: [
      {
        href: "https://gl.vprw.ru/vapronva/dns-filtering-rulesets",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/hosts_dgrd-config_files",
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
        href: "https://gl.vprw.ru/vapronva/nebula_tv_downloader-media_api",
        icon: SiGitlab,
      },
      {
        href: "https://github.com/vapronva/nebula_tv_downloader-media_api",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Container Images for OSS Projects",
    description:
      "Builds of open-source projects into container images with light patches where needed or bleeding-edge experience.",
    links: [{ href: "https://gl.vprw.ru/oss-images", icon: SiGitlab }],
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
  {
    title: "Computer Elements",
    description:
      "iOS app on SwiftUI for a friend's school project to help build PCs — step-by-step guides and component info.",
    links: [
      {
        href: "https://github.com/vapronva/computer_elements-app",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Vocal Balls",
    description:
      'Telegram speech-to-text bot for voice messages (RU/EN) using Vosk and ReCasePunc and AppWrite for the early "AI" times.',
    links: [
      {
        href: "https://github.com/vapronva/vocal_balls_bot-tg_bot",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "[REDACTED REDAC]",
    description:
      "Analyzes [REDACTED] articles — news search, keyword extraction, custom sentiment, and summarization. Uses LLMs to rank articles and compute an [REDA] score.",
    links: [],
    isRedacted: true,
  },
  {
    title: "Simple Streaming",
    description:
      "iOS app that streams low-latency microphone audio using HaishinKit.",
    links: [
      {
        href: "https://gl.vprw.ru/vapronva/simple_streaming-app",
        icon: SiGitlab,
      },
    ],
  },
  {
    title: "GitLab CI/CD Components Catalog",
    description:
      "Reusable GitLab CI components for build/test/security/deploy/release — consistent pipelines, minimal YAML.",
    links: [{ href: "https://gl.vprw.ru/ci", icon: SiGitlab }],
  },
  {
    title: "IP Geo Balls",
    description:
      "Speaking ipgeobase.ru’s XML API while aggregating MaxMind, IPinfo, and ProxyCheck; single fast endpoint with SQLite cache.",
    links: [{ href: "https://gl.vprw.ru/vapronva/ipgeoballs", icon: SiGitlab }],
  },
];

interface ProjectsSectionProps {
  glass?: boolean;
}

export default function ProjectsSection({
  glass = false,
}: ProjectsSectionProps) {
  return (
    <div
      className={`shadow-el_82f7.4/10 mt-3 max-w-5xl rounded-3xl px-5 py-5 shadow-2xl transition-all duration-500 ease-out sm:mx-auto sm:mt-6 sm:px-7 sm:py-7 ${
        glass
          ? "border border-white/10 bg-white/[0.03] ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-cover bg-local bg-center bg-no-repeat ring-1 ring-gray-900/5"
      }`}
      style={
        glass
          ? {
              backgroundImage:
                "linear-gradient(135deg, rgba(13, 14, 21, 0.08) 0%, rgba(13, 14, 21, 0.14) 50%, rgba(13, 14, 21, 0.20) 100%)",
            }
          : {
              backgroundImage:
                "linear-gradient(rgba(37, 37, 39, 0.95), rgba(37, 37, 39, 0.9)), url(/images/idminebg/el-82f7-4.jpeg)",
            }
      }
    >
      <h3 className="mb-1 text-xs font-semibold text-white">Projects</h3>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <div className="w-full divide-y divide-gray-500/40 sm:w-1/2">
          {leftProjects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              links={project.links}
              isRedacted={project.isRedacted}
            />
          ))}
        </div>
        <div className="w-full divide-y divide-gray-500/40 sm:w-1/2">
          {rightProjects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              links={project.links}
              isRedacted={project.isRedacted}
            />
          ))}
        </div>
      </div>
      <p className="text-xa leading-tighter mt-1 text-white sm:mt-2">
        <i>
          And plenty more! For everything else (small tools, experiments, other
          big projects, etc) see{" "}
          <a
            href="https://gl.vprw.ru/vapronva"
            rel="noreferrer noopener"
            target="_blank"
            className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
          >
            my GitLab instance
          </a>
          .
        </i>
      </p>
    </div>
  );
}
