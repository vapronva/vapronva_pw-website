import Card from "~/components/card";
import ProjectItem from "~/components/project-item";

const leftProjects = [
  {
    title: "Concave",
    description:
      "Self-hostable and tweakable fork of the Convex backend suited for production. Hosts my stuff and (maybe) something more.",
    links: [
      "https://git.horse/vapronva/concave",
      "https://github.com/vapronva/concave",
    ],
  },
  {
    title: "shitposting.rocks",
    description:
      "Meme and anime-art archive with LLM descriptions, semantic search, auto source-finding, and Telegram integration.",
    links: ["https://git.horse/shiss/shitpostingrocks"],
  },
  {
    title: "CKIC (Caddy Kubernetes Ingress Controller)",
    description:
      'Custom "ingress" controller that generates configs, provisions and reloads instances since ingress-nginx felt too rigid.',
    links: [
      "https://git.horse/vapronva/ckic",
      "https://github.com/vapronva/ckic",
    ],
  },
  {
    title: "BeatMirror",
    description:
      "Mirrors BeatSaver maps and BeatLeader scores into Convex for an always-fresh and searchable local index.",
    links: [
      "https://beatmirror.docker.house",
      "https://git.horse/vapronva/beatmirror",
    ],
  },
  {
    title: "[REDACTED REDACTE]",
    description:
      "[REDACTED REDACTED REDACTED REDA] routing gateway [REDACTED REDACTED REDACTED].",
  },
  {
    title: "otkat",
    description:
      "Firmware release control plane for ESP32 devices with canaries, telemetry, and rollback quarantine.",
    links: ["https://git.horse/vapronva/otkat"],
  },
  {
    title: "Linx Server",
    description:
      "Maintained Linx fork (temporary file/media sharing via curl or drag-n-drop with syntax highlighting and previews, no accounts).",
    links: ["https://git.horse/vapronva/linx-server"],
  },
  {
    title: "Low Quality Bot",
    description:
      "Applies AV degradations to make media look like it was shot on a Nokia 7650. Overengineered and overcomplicated, but it works.",
    links: ["https://git.horse/low-quality-bot"],
  },
  {
    title: "[REDACTED REDACTED]",
    description:
      "[REDA] app centralizing client IDs and jump‑links ([REDA], [REDACTED ], internal tools) [REDACTED]; actively used [REDACTED].",
  },
  {
    title: "Cheatsheet Worldclock",
    description:
      "Apple Watch world clock that reveals extra notes on tap. Originally made for cheating on school tests.",
    links: ["https://github.com/vapronva/cheatsheet_worldclock-wo_app"],
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
    links: ["https://git.horse/vapronva/dyzurka"],
  },
  {
    title: "Container Images for OSS Projects",
    description:
      "Builds of open-source projects into container images with light patches where needed or bleeding-edge experience.",
    links: ["https://git.horse/oss-images"],
  },
  {
    title: "GitLab CI/CD Components Catalog",
    description:
      "Reusable GitLab CI components for build/test/security/deploy/release and consistent pipelines with minimal YAML.",
    links: ["https://git.horse/ci"],
  },
  {
    title: "PeerTube Custom Transcoding Profile",
    description:
      "PeerTube plugin exposing ffmpeg's CRF, preset, tune, profile and audio params in the transcoding profile.",
    links: [
      "https://www.npmjs.com/package/peertube-plugin-custom-transcoding-profile",
      "https://git.horse/vapronva/peertube-custom-transcoding-profile",
      "https://github.com/vapronva/peertube-custom-transcoding-profile",
    ],
  },
  {
    title: "[REDACTED REDAC]",
    description:
      "News search, keyword extraction, custom sentiment, and summarization. Rerank articles and compute an [REDA] score.",
  },
  {
    title: "That's a Nice Argument Unfortunately Com",
    description:
      'Troll meme site that displays "private" info inferred from your IP: fake "doxxing" by a caterpillar. Parody of the popular meme.',
    links: [
      "https://thats-a-nice-argument-unfortunately.com",
      "https://git.horse/tnaudc/thats_a_nice_argument_unfortunately_dot_com-website",
      "https://github.com/vapronva/thats_a_nice_argument_unfortunately_dot_com-website",
    ],
  },
  {
    title: "Sosanie Ebla Bot Premium",
    description:
      "Telegram text-to-speech bot for funny, high-quality voice messages using Tinkoff/Yandex/Mail.ru/Sberbank voices.",
    links: [
      "https://git.horse/sosanie-ebla-bot/sseblopremiumbot",
      "https://github.com/vapronva/sosanie_ebla_bot_premium-tg_bot",
    ],
  },
  {
    title: "Nebula.tv Video Archiver",
    description:
      "Proof-of-concept archiver for Nebula.tv by reverse-engineering and scraping the API. Downloads and preserves videos.",
    links: [
      "https://git.horse/vapronva/nebula_tv_downloader-media_api",
      "https://github.com/vapronva/nebula_tv_downloader-media_api",
    ],
  },
  {
    title: "[REDACTED REDACTED R]",
    description:
      'Generates hundreds of "unique" variants per image via many tweaks. Built to evade reverse-image search and marketplace restrictions.',
  },
];

export default function ProjectsSection() {
  return (
    <Card className="mt-3 shadow-el_82f7_4/10 [--card-photo:url(https://cdn.engineering/vapronva-pw/images/idminebg/el-82f7-4.jpeg)] sm:mt-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:gap-4">
        <div className="divide-y divide-gray-500/40 sm:w-1/2">
          {leftProjects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
        <div className="divide-y divide-gray-500/40 max-sm:border-t max-sm:border-gray-500/40 sm:w-1/2">
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
            className="drop-shadow-glow_sm transition hover:drop-shadow-glow_sm_2"
          >
            my GitLab instance
          </a>{" "}
          (or{" "}
          <a
            href="https://github.com/vapronva"
            target="_blank"
            className="drop-shadow-glow_sm transition hover:drop-shadow-glow_sm_2"
          >
            my GitHub
          </a>{" "}
          for older stuff).
        </i>
      </p>
    </Card>
  );
}
