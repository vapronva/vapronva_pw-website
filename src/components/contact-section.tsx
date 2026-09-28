import {
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

import Card from "~/components/card";
import SocialLink from "~/components/social-link";

const socialLinks = [
  { icon: SiMatrix, name: "Matrix" },
  { href: "https://t.me/vapron_va", icon: SiTelegram, name: "Telegram" },
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
    rel: "me",
  },
  {
    href: "https://peertube.vapronva.pw/@vprw",
    icon: SiPeertube,
    name: "Peertube",
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
    href: "https://git.horse/vapronva",
    icon: SiGitlab,
    name: "GitLab",
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

export default function ContactSection() {
  return (
    <Card
      id="contact"
      className="mt-3 max-w-5xl shadow-mc_2f7c_4/10 [--card-photo:url(/images/idminebg/mc-2f7c-4.jpeg)] sm:mx-auto sm:mt-6 sm:p-7"
    >
      <div className="grid grid-cols-4 place-items-center gap-x-12 gap-y-2 sm:grid-cols-12 sm:gap-y-6">
        {socialLinks.map((link) => (
          <SocialLink key={link.name} {...link} />
        ))}
      </div>
    </Card>
  );
}
