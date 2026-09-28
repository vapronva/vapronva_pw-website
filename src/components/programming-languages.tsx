import Card from "~/components/card";

export default function ProgrammingLanguages() {
  return (
    <Card
      title="Stack + Ops"
      className="shadow-el_82f7_9/10 [--card-photo:url(/images/idminebg/el-82f7-9.jpeg)] sm:p-6"
    >
      <p>
        Primarily code in <span className="font-medium">Python</span> and{" "}
        <span className="font-medium">Go</span>; sometimes{" "}
        <span className="font-medium">TypeScript</span>;{" "}
        <span className="font-medium">Bash</span> glue for the seams; occasional{" "}
        <span className="font-medium">Swift</span> and{" "}
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
        <span className="mt-2 block leading-[0.8]">
          <span className="text-xd font-thin">
            Jack of all trades, master of none? <br />
            This list is not exhaustive; am flexible and always exploring new
            thingies.
          </span>
        </span>
      </p>
    </Card>
  );
}
