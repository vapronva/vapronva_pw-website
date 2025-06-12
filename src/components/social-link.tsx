import React from "react";
import { type LucideIcon } from "lucide-react";
import { type IconType } from "@icons-pack/react-simple-icons";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon | IconType;
  name: string;
  rel?: string;
  isDisabled?: boolean;
}

export default function SocialLink({
  href,
  icon,
  name,
  rel = "nofollow noopener",
  isDisabled = false,
}: SocialLinkProps) {
  return (
    <div className="text-center">
      <a
        rel={rel}
        target="_blank"
        href={href}
        className={`${
          isDisabled
            ? "cursor-not-allowed text-gray-400"
            : "hover:drop-shadow-glow_sm_4 transition duration-200 ease-in-out hover:text-blue-300/80"
        }`}
      >
        {React.createElement(icon, {
          className: `${
            isDisabled ? "text-gray-400/80" : "text-blue-100/80"
          } w-5 h-5 mx-auto mb-1`,
          "aria-hidden": "true",
        })}
        <p
          className={`text-base leading-tight ${isDisabled ? "text-gray-400" : "text-white"}`}
        >
          {name}
        </p>
      </a>
    </div>
  );
}
