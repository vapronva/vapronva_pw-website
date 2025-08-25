import InfoCard from "~/components/info-card";

export default function ProgrammingLanguages() {
  return (
    <InfoCard
      title="Stack + Ops"
      backgroundImage="/images/idminebg/el-82f7-9.jpeg"
      shadowColor="shadow-el_82f7.9/10"
      content={
        <p>
          Primarily code in <span className="font-medium">Python</span> and{" "}
          <span className="font-medium">Go</span>; sometimes{" "}
          <span className="font-medium">TypeScript</span>;{" "}
          <span className="font-medium">Bash</span> glue for the seams;
          occasional <span className="font-medium">Swift</span>/
          <span className="font-medium">Java</span>; dabbled in{" "}
          <span className="font-medium">Rust</span>/
          <span className="font-medium">C</span>. Building services, tooling;
          setting up infra, wiring up networks.{" "}
          <span className="font-medium">Kubernetes</span> with{" "}
          <span className="font-medium">Cilium</span> on{" "}
          <span className="font-medium">containerd</span>.{" "}
          <span className="font-medium">CI/CD</span> and{" "}
          <span className="font-medium">IaC</span> in{" "}
          <span className="font-medium">GitLab</span>.{" "}
          <span className="font-medium">PostgreSQL</span> and{" "}
          <span className="font-medium">ClickHouse</span>;{" "}
          <span className="font-medium">SQL</span> raw dogger.{" "}
          <span className="font-medium">Tailscale</span> fanatic.{" "}
          <span className="font-medium">RHEL</span>-leaning; lots of{" "}
          <span className="font-medium">Ubuntu</span> in the fleet.{" "}
          <span className="font-medium">MikroTik</span> roots;{" "}
          <span className="font-medium">pfSense</span>/
          <span className="font-medium">Ubiquiti</span> these days. Spoke{" "}
          <span className="font-medium">BGP</span>. <br />
          <div className="leading-[1]">
            <span className="text-xd font-thin">
              Jack of all trades, master of none? <br />
              List not exhaustive; am flexible and always exploring.
            </span>
          </div>
        </p>
      }
    />
  );
}
