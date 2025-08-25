import React from "react";
import { type LucideIcon } from "lucide-react";
import { type IconType } from "@icons-pack/react-simple-icons";

interface ProjectLink {
  href: string;
  icon: LucideIcon | IconType;
  rel?: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  links: ProjectLink[];
  isRedacted?: boolean;
}

export default function ProjectItem({
  title,
  description,
  links = [],
  isRedacted = false,
}: ProjectItemProps) {
  const renderRedactedDescription = (text: string) => {
    if (!isRedacted) {
      return text;
    }
    const regex = /(\[[^\]]+\])/g;
    const parts = text.split(regex);
    return parts.map((part, index) => {
      if (part.startsWith("[") && part.endsWith("]")) {
        return (
          <span key={index} className="relative inline-block">
            <span className="text-white">{part}</span>
            <span className="bg-opacity-100 absolute inset-[-0.3] bg-black"></span>
          </span>
        );
      }
      return part;
    });
  };
  return (
    <div className="flex flex-col pt-1 pb-1">
      <div className="-mt-0.5 flex flex-row flex-wrap items-center">
        {isRedacted ? (
          <div className="relative">
            <h4 className="leading-tighter text-base font-medium text-white">
              {title}
            </h4>
            <div className="bg-opacity-100 absolute inset-[-0.3] bg-black"></div>
          </div>
        ) : (
          <>
            <h4 className="leading-tighter text-base font-medium text-white">
              {title}
            </h4>
            {links.length > 0 && (
              <div className="-mt-0.5 ml-2 flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                {links.map((link, index) => (
                  <a
                    key={index}
                    rel={link.rel ?? "noopener"}
                    target="_blank"
                    href={link.href}
                  >
                    {React.createElement(link.icon, {
                      className:
                        "text-blue-100/80 hover:text-blue-300/80 hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out h-4 w-4 inline-block",
                      "aria-hidden": "true",
                    })}
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <p className="text-xa leading-tighter mt-0.5 text-white">
        {renderRedactedDescription(description)}
      </p>
    </div>
  );
}
