import {
  SiGithub,
  SiGitlab,
  SiNpm,
  type IconType,
} from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";

const hostIcons = new Map<string, IconType>([
  ["git.horse", SiGitlab],
  ["github.com", SiGithub],
  ["www.npmjs.com", SiNpm],
]);

function redactBrackets(text: string) {
  return text.split(/(\[[^\]]+\])/).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="relative inline-block">
        {part}
        <span className="absolute inset-0 bg-black" />
      </span>
    ) : (
      part
    ),
  );
}

export default function ProjectItem({
  title,
  description,
  links = [],
}: {
  title: string;
  description: string;
  links?: string[];
}) {
  return (
    <div className="py-1">
      <div className="-mt-0.5 flex flex-wrap items-center gap-x-2">
        <h2 className="text-base leading-tighter font-medium">
          {redactBrackets(title)}
        </h2>
        {links.length > 0 ? (
          <div className="-mt-0.5 flex flex-wrap items-center gap-2">
            {links.map((href) => {
              const { hostname } = new URL(href);
              const Icon = hostIcons.get(hostname) ?? Globe;
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  aria-label={`${title} on ${hostname}`}
                >
                  <Icon
                    className="inline-block size-4 text-blue-100/80 transition hover:text-blue-300/80 hover:drop-shadow-glow_sm_2"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
      <p className="mt-0.5 text-xa leading-tighter">
        {redactBrackets(description)}
      </p>
    </div>
  );
}
