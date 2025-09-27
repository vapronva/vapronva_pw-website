import InfoCard from "~/components/info-card";

interface ProgrammingLanguagesProps {
  glass?: boolean;
}

export default function ProgrammingLanguages({
  glass = false,
}: ProgrammingLanguagesProps) {
  return (
    <InfoCard
      title="Stack + Ops"
      backgroundImage="/images/idminebg/el-82f7-9.jpeg"
      shadowColor="shadow-el_82f7.9/10"
      glass={glass}
      content={
        <p>
          Primarily code in <span className="font-medium">Python</span> and{" "}
          <span className="font-medium">Go</span>; sometimes{" "}
          <span className="font-medium">TypeScript</span>;{" "}
          <span className="font-medium">Bash</span> glue for the seams;
          occasional <span className="font-medium">Swift</span> and{" "}
          <span className="font-medium">Java</span>; messed with{" "}
          <span className="font-medium">Rust</span> and{" "}
          <span className="font-medium">C</span>.{" "}
          <span className="font-medium">Kubernetes</span> with{" "}
          <span className="font-medium">Cilium</span> on{" "}
          <span className="font-medium">containerd</span>.{" "}
          <span className="font-medium">GitLab CI/CD</span> and{" "}
          <span className="font-medium">IaC</span> with{" "}
          <span className="font-medium">Ansible</span> and{" "}
          <span className="font-medium">Terraform</span>.{" "}
          <span className="font-medium">PostgreSQL</span> and{" "}
          <span className="font-medium">ClickHouse</span>;{" "}
          <span className="font-medium">SQL</span> raw dogger. Love{" "}
          <span className="font-medium">Convex</span>.{" "}
          <span className="font-medium">Tailscale</span> fanatic.{" "}
          <span className="font-medium">RHEL</span>-leaning; lots of{" "}
          <span className="font-medium">Ubuntu</span> in the fleet.{" "}
          <span className="font-medium">MikroTik</span> roots;{" "}
          <span className="font-medium">pfSense</span>/
          <span className="font-medium">Ubiquiti</span> these days. Spoke{" "}
          <span className="font-medium">BGP</span>.
          <span className="mt-2 block leading-[0.80]">
            <span className="text-xd leading-[0.80] font-thin">
              Jack of all trades, master of none? <br />
              This list is not exhaustive; am flexible and always exploring new
              thingies.
            </span>
          </span>
        </p>
      }
    />
  );
}
