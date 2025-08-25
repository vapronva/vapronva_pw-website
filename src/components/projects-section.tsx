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
    title: "That's a Nice Argument Unfortunately Dot Com",
    description:
      'Troll website, based on a popular meme, displays "private" information inferred from the user\'s IP address (fake "doxxing" by caterpillar).',
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
    title: "Sosanie Ebla Bot Premium",
    description:
      "Text-to-speech bot that aims to provide users with a new level of comfort in creating incredible and funny voice messages. It utilizes high-quality TTS voices from major providers like Tinkoff and Yandex.",
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
      "Attempt to build an authentication system for ITMO's APIs and parse their schedule API into iCal format for alerts about changes and automatic updates in any calendar software.",
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
      'Produces hundreds of "unique" images per one image by applying various transformations such as upscaling, rotation, gamma adjustments, metadata changes, and more. Its purpose is to bypass image search engines and restrictions on marketplaces.',
    links: [],
    isRedacted: true,
  },
  {
    title: "[REDACTED REDAC]",
    description:
      "Provides a comprehensive analysis of [REDACTED ] articles: news search, keyword extraction, custom sentiment analysis, and summarization techniques, leveraging general-purpose language models to rank articles and calculate an educated score.",
    links: [],
    isRedacted: true,
  },
  {
    title: "Low Quality Bot",
    description:
      "Applies various modifications to AV media to make everything look like it was shot on a Nokia 7650. Overengineered and overcomplicated, but it works.",
    links: [{ href: "https://gl.vprw.ru/low-quality-bot", icon: SiGitlab }],
  },
  {
    title: "PeerTube Custom Transcoding Profile",
    description:
      "Introduces a transcoding profile with configurable settings for CRF, preset, tune, profile, and custom audio parameters; all the configurations and settings revolve around ffmpeg.",
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
      "Word-perfect transcription of a 96-hour episode of Kriper2004's Minecraft Lets Play series; utilizes OpenAI's Whisper, and fine-tuning ASR models.",
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
      "Self-managed DNS provider that focuses on robust DNSSEC support and extremely fast propagation times, built on top of PowerDNS.",
    links: [{ href: "https://dns.cmld.ru", icon: Globe }],
  },
  {
    title: "DNS Filtering Rulesets",
    description:
      "Personal curated list of custom filtering rules for domains and hosts used in my DNS server.",
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
      "Proof-of-concept; aims to archive videos from Nebula.tv by scraping and downloading content, by reverse-engineering the API.",
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
    title: "OSS — Docker Images",
    description:
      "Compiling open-source projects into container images, with a few modifications made here and there.",
    links: [{ href: "https://gl.vprw.ru/oss-images", icon: SiGitlab }],
  },
  {
    title: "Cheatsheet Worldclock",
    description:
      "Simple app designed for Apple Watch that initially displays time and reveals additional information upon interaction. It was primarily created for cheating during school tests.",
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
      "Application developed as part of a friend's school project. It assists users in building their PCs, providing step-by-step guides and in-depth information.",
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
      "Speech-to-text processing bot for voice messages on Telegram, supporting both Russian and English languages; utilizes open-source solutions such as Vosk and ReCasePunc.",
    links: [
      {
        href: "https://github.com/vapronva/vocal_balls_bot-tg_bot",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Simple Streaming",
    description:
      "Application that streams low-latency microphone audio from iOS devices; developed using HaishinKit.",
    links: [
      {
        href: "https://gl.vprw.ru/vapronva/simple_streaming-app",
        icon: SiGitlab,
      },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <div
      className="shadow-el_82f7.4/10 mt-3 max-w-5xl rounded-3xl bg-cover bg-local bg-center bg-no-repeat px-5 py-5 shadow-2xl ring-1 ring-gray-900/5 sm:mx-auto sm:mt-6 sm:px-7 sm:py-7"
      style={{
        backgroundImage:
          "linear-gradient(rgba(37, 37, 39, 0.95), rgba(37, 37, 39, 0.9)), url(/images/idminebg/el-82f7-4.jpeg)",
      }}
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
          And much more! I have numerous other smaller projects that may not
          have garnered the same attention, but have contributed significantly
          to my growth and learning as a developer nevertheless. For a
          comprehensive view of my projects, including many others not listed
          here, I invite you to explore{" "}
          <a
            href="https://gl.vprw.ru/vapronva"
            rel="noreferrer noopener"
            target="_blank"
            className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
          >
            my GitLab instance
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/vapronva"
            rel="noreferrer noopener"
            target="_blank"
            className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
          >
            my GitHub profile
          </a>
          .
        </i>
      </p>
    </div>
  );
}
