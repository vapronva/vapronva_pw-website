import {
  type IconType,
  SiBluesky,
  SiDiscord,
  SiGithub,
  SiGitlab,
  SiLastdotfm,
  SiMastodon,
  SiMatrix,
  SiPeertube,
  SiReddit,
  SiSteam,
  SiTelegram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { type LucideIcon } from "lucide-react";

import SocialLink from "~/components/social-link";

const socialLinks: Array<{
  href: string;
  icon: LucideIcon | IconType;
  name: string;
  rel?: string;
  isDisabled?: boolean;
}> = [
  {
    href: "https://matrix.to/#/@vapronva:matrix.vapronva.pw",
    icon: SiMatrix,
    name: "Matrix",
    rel: "noopener",
    isDisabled: true,
  },
  { href: "https://vapron_va.t.me", icon: SiTelegram, name: "Telegram" },
  {
    href: "https://discord.com/users/483991031306780683",
    icon: SiDiscord,
    name: "Discord",
  },
  {
    href: "https://www.reddit.com/user/vapronva",
    icon: SiReddit,
    name: "Reddit",
  },
  {
    href: "https://www.youtube.com/channel/UCGL6LPNhwyoZYl-59uI5HSQ",
    icon: SiYoutube,
    name: "YouTube",
  },
  {
    href: "https://mastodon.vapronva.pw/@vapronva",
    icon: SiMastodon,
    name: "Mastodon",
    rel: "noopener me",
  },
  {
    href: "https://peertube.vapronva.pw/@vprw",
    icon: SiPeertube,
    name: "Peertube",
    rel: "noopener",
  },
  {
    href: "https://steamcommunity.com/profiles/76561199227681806/",
    icon: SiSteam,
    name: "Steam",
  },
  {
    href: "https://github.com/vapronva",
    icon: SiGithub,
    name: "GitHub",
  },
  {
    href: "https://gl.vprw.ru/vapronva",
    icon: SiGitlab,
    name: "GitLab",
    rel: "noopener",
  },
  {
    href: "https://last.fm/user/vprw",
    icon: SiLastdotfm,
    name: "Last.fm",
  },
  {
    href: "https://bsky.app/profile/vapronva.ru",
    icon: SiBluesky,
    name: "Bluesky",
  },
];

interface ContactSectionProps {
  glass?: boolean;
}

export default function ContactSection({ glass = false }: ContactSectionProps) {
  return (
    <div
      className={`shadow-mc_2f7c_4/10 mt-3 max-w-5xl rounded-3xl px-5 py-5 shadow-2xl transition-all duration-500 ease-out sm:mx-auto sm:mt-6 sm:px-7 sm:py-7 ${
        glass
          ? "border border-white/10 bg-white/[0.03] ring-1 ring-white/10 backdrop-blur-xl"
          : "bg-cover bg-local bg-center bg-no-repeat ring-1 ring-gray-900/5"
      }`}
      style={
        glass
          ? {
              backgroundImage:
                "linear-gradient(rgba(13, 14, 21, 0.4), rgba(13, 14, 21, 0.4))",
            }
          : {
              backgroundImage:
                "linear-gradient(rgba(37, 37, 39, 0.95), rgba(37, 37, 39, 0.9)), url(/images/idminebg/mc-2f7c-4.jpeg)",
            }
      }
      id="contact"
    >
      <div className="grid grid-cols-4 place-items-center gap-x-12 gap-y-2 sm:grid-cols-12 sm:gap-y-6">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            href={link.href}
            icon={link.icon}
            name={link.name}
            rel={link.rel}
            isDisabled={link.isDisabled}
          />
        ))}
      </div>
    </div>
  );
}
