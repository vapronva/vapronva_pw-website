import { type IconType } from "@icons-pack/react-simple-icons";
import { type LucideIcon } from "lucide-react";

interface ProjectItemProps {
  title: string;
  description: string;
  links?: { href: string; icon: LucideIcon | IconType }[];
  isRedacted?: boolean;
}

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
  isRedacted = false,
}: ProjectItemProps) {
  const heading = (
    <h4 className="text-base leading-tighter font-medium">{title}</h4>
  );
  return (
    <div className="flex flex-col py-1">
      <div className="-mt-0.5 flex flex-row flex-wrap items-center">
        {isRedacted ? (
          <div className="relative">
            {heading}
            <div className="absolute inset-0 bg-black" />
          </div>
        ) : (
          heading
        )}
        {links.length > 0 ? (
          <div className="-mt-0.5 ml-2 flex flex-row flex-wrap items-center gap-1">
            {links.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                aria-label={`${title} on ${new URL(href).hostname}`}
              >
                <Icon
                  className="inline-block size-4 text-blue-100/80 transition duration-200 ease-in-out hover:text-blue-300/80 hover:drop-shadow-glow_sm_2"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <p className="mt-0.5 text-xa leading-tighter">
        {isRedacted ? redactBrackets(description) : description}
      </p>
    </div>
  );
}
