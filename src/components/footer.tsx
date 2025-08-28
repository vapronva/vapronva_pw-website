import IncidentBadge from "~/components/incident-badge";

interface FooterProps {
  nekoSpeed: number;
  setNekoSpeed: (speed: number) => void;
  showStarfield: boolean;
  setShowStarfield: (show: boolean) => void;
}

function makeNekoSuperFast(footerProps: FooterProps) {
  footerProps.setNekoSpeed(footerProps.nekoSpeed + 7.5);
}

export default function Footer({
  nekoSpeed,
  setNekoSpeed,
  showStarfield,
  setShowStarfield,
}: FooterProps) {
  return (
    <div className="mt-3 max-w-2xl sm:mx-auto sm:mt-6">
      <IncidentBadge />
      <p className="text-center text-xs font-light text-white/40">
        Inspired by{" "}
        <a
          href="https://kc.is.being.pet"
          rel="noreferrer noopener nofollow"
          target="_blank"
          className="drop-shadow-glow_sm hover:drop-shadow-glow_lg_2 transition duration-200 ease-in-out"
        >
          kc&apos;s
        </a>{" "}
        and{" "}
        <a
          href="https://rferee.dev"
          rel="noreferrer noopener nofollow"
          target="_blank"
          className="drop-shadow-glow_sm hover:drop-shadow-glow_lg_2 transition duration-200 ease-in-out"
        >
          rferee&apos;s
        </a>{" "}
        personal webistes. Thanks for being awesome!{" "}
        <button
          className="drop-shadow-glow_sm hover:drop-shadow-glow_lg_2 transition duration-200 ease-in-out focus:outline-hidden"
          onClick={() =>
            makeNekoSuperFast({
              nekoSpeed,
              setNekoSpeed,
              showStarfield,
              setShowStarfield,
            })
          }
        >
          Meow :)
        </button>{" "}
        <button
          className="drop-shadow-glow_sm hover:drop-shadow-glow_lg_2 transition duration-200 ease-in-out focus:outline-hidden"
          onClick={() => setShowStarfield(!showStarfield)}
        >
          {showStarfield ? "Sparks!" : "Stars!"}
        </button>
      </p>
      <p className="text-xn mt-1.5 text-center font-light text-white/30">
        The{" "}
        <a
          href="https://gl.vprw.ru/vapronva/personal-website"
          rel="noreferrer noopener"
          target="_blank"
        >
          website was built
        </a>{" "}
        using{" "}
        <a
          href="https://tailwindcss.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Tailwind CSS
        </a>{" "}
        on{" "}
        <a
          href="https://react.dev"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          React
        </a>{" "}
        with{" "}
        <a
          href="https://nextjs.org"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Next.js
        </a>{" "}
        (with elements from{" "}
        <a
          href="https://lucide.dev"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Lucide Icons
        </a>
        {", "}
        <a
          href="https://simpleicons.org/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Simple Icons
        </a>
        , and{" "}
        <a
          href="https://github.com/rsms/inter"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Inter
        </a>
        ), served by{" "}
        <a
          href="https://www.caddyserver.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Node.js
        </a>{" "}
        through{" "}
        <a
          href="https://www.caddyserver.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Caddy
        </a>
        , tracked by{" "}
        <a
          href="https://sentry.io"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Sentry
        </a>
        , deployed in{" "}
        <a
          href="https://kubernetes.io"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Kubernetes
        </a>{" "}
        on{" "}
        <a
          href="https://containerd.io"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          containerd
        </a>{" "}
        using{" "}
        <a
          href="https://about.gitlab.com/features/continuous-integration/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          GitLab CI
        </a>{" "}
        in{" "}
        <a
          href="https://arcane-eden.cmld.network"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          my homelab
        </a>
        , connected through{" "}
        <a
          href="https://tailscale.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Tailscale
        </a>{" "}
        and{" "}
        <a
          href="https://www.wireguard.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          WireGuard
        </a>
        , protected by{" "}
        <a
          href="https://coraza.io"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Coraza
        </a>
        ,{" "}
        <a
          href="https://suricata.io"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Suricata
        </a>
        , and{" "}
        <a
          href="https://www.ui.com/download/unifi"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          UniFi Network
        </a>
        , monitored by{" "}
        <a
          href="https://www.datadoghq.com"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Datadog
        </a>
        .
      </p>
    </div>
  );
}
