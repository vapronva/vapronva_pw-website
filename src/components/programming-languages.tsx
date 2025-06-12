import InfoCard from "~/components/info-card";

export default function ProgrammingLanguages() {
  return (
    <InfoCard
      title="Programming Languages"
      backgroundImage="/images/idminebg/el-82f7-9.jpeg"
      shadowColor="shadow-el_82f7.9/10"
      className="mt-3 sm:mt-6"
      content={
        <p>
          I primarily code in <span className="font-medium">Python</span> and{" "}
          <span className="font-medium">Go</span> with{" "}
          <span className="font-medium">Bash</span> scripts holding it all
          together; can occasionally use{" "}
          <span className="font-medium">Swift</span> or{" "}
          <span className="font-medium">TypeScript</span>, sometimes even{" "}
          <span className="font-medium">Java</span>; tried{" "}
          <span className="font-medium">Rust</span> a few times, looked at{" "}
          <span className="font-medium">C</span> here and there.{" "}
          <span className="text-xd font-thin">
            Jack of all trades, master of none? And does the language choice
            even matter?
          </span>
        </p>
      }
    />
  );
}
