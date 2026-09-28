import IncidentBadge from "~/components/incident-badge";
import SceneControls from "~/components/scene-controls";

export default function Footer() {
  return (
    <div className="mt-3 max-w-2xl sm:mx-auto sm:mt-6">
      <IncidentBadge />
      <p className="text-center text-xs font-light text-white/40">
        Inspired by{" "}
        <a
          href="https://kc.is.being.pet"
          target="_blank"
          className="drop-shadow-glow_sm transition duration-200 ease-in-out hover:drop-shadow-glow_lg_2"
        >
          kc&apos;s
        </a>{" "}
        and{" "}
        <a
          href="https://rferee.dev"
          target="_blank"
          className="drop-shadow-glow_sm transition duration-200 ease-in-out hover:drop-shadow-glow_lg_2"
        >
          rferee&apos;s
        </a>{" "}
        personal websites. Thanks for being awesome! <SceneControls />
      </p>
      <p className="mt-1.5 text-center text-xn font-light text-white/30">
        The{" "}
        <a href="https://gl.vprw.ru/vapronva/vapronva-pw" target="_blank">
          website was built
        </a>{" "}
        using{" "}
        <a href="https://tailwindcss.com" target="_blank">
          Tailwind CSS
        </a>{" "}
        on{" "}
        <a href="https://react.dev" target="_blank">
          React
        </a>{" "}
        with{" "}
        <a href="https://nextjs.org" target="_blank">
          Next.js
        </a>{" "}
        (with elements from{" "}
        <a href="https://lucide.dev" target="_blank">
          Lucide Icons
        </a>
        {", "}
        <a href="https://simpleicons.org/" target="_blank">
          Simple Icons
        </a>
        , and{" "}
        <a href="https://github.com/rsms/inter" target="_blank">
          Inter
        </a>
        ), served by{" "}
        <a href="https://nodejs.org" target="_blank">
          Node.js
        </a>{" "}
        through{" "}
        <a href="https://www.caddyserver.com" target="_blank">
          Caddy
        </a>
        , tracked by{" "}
        <a href="https://sentry.io" target="_blank">
          Sentry
        </a>
        , deployed in{" "}
        <a href="https://kubernetes.io" target="_blank">
          Kubernetes
        </a>{" "}
        on{" "}
        <a href="https://containerd.io" target="_blank">
          containerd
        </a>{" "}
        using{" "}
        <a
          href="https://about.gitlab.com/features/continuous-integration/"
          target="_blank"
        >
          GitLab CI
        </a>{" "}
        in{" "}
        <a href="https://arcane-eden.cmld.network" target="_blank">
          my homelab
        </a>
        , connected through{" "}
        <a href="https://tailscale.com" target="_blank">
          Tailscale
        </a>{" "}
        and{" "}
        <a href="https://www.wireguard.com" target="_blank">
          WireGuard
        </a>
        , protected by{" "}
        <a href="https://coraza.io" target="_blank">
          Coraza
        </a>
        ,{" "}
        <a href="https://suricata.io" target="_blank">
          Suricata
        </a>
        , and{" "}
        <a href="https://www.ui.com/download/unifi" target="_blank">
          UniFi Network
        </a>
        , monitored by{" "}
        <a href="https://www.datadoghq.com" target="_blank">
          Datadog
        </a>
        .
      </p>
    </div>
  );
}
