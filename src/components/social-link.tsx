import { type IconType } from "@icons-pack/react-simple-icons";

export default function SocialLink({
  href,
  icon: Icon,
  name,
  rel,
}: {
  href?: string;
  icon: IconType;
  name: string;
  rel?: string;
}) {
  if (!href) {
    return (
      <div className="cursor-not-allowed text-center text-gray-400">
        <Icon
          className="mx-auto mb-1 size-5 text-gray-400/80"
          aria-hidden="true"
        />
        <p>{name}</p>
      </div>
    );
  }
  return (
    <a
      href={href}
      rel={rel}
      target="_blank"
      className="text-center transition hover:drop-shadow-glow_sm_4"
    >
      <Icon
        className="mx-auto mb-1 size-5 text-blue-100/80"
        aria-hidden="true"
      />
      <p>{name}</p>
    </a>
  );
}
