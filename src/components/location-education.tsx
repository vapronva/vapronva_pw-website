import InfoCard from "~/components/info-card";

interface LocationEducationProps {
  glass?: boolean;
}

export default function LocationEducation({
  glass = false,
}: LocationEducationProps) {
  return (
    <InfoCard
      title="Place / Studies / Work"
      backgroundImage="/images/idminebg/od-4ba7-12.jpeg"
      shadowColor="shadow-od_4ba7.12/10"
      glass={glass}
      content={
        <>
          <p>
            Omsk-born, now based in Saint Petersburg. UK and Germany exchange
            alumni. SWE to ICT + Telecom Engineering{" "}
            <span className="font-thin">(incomplete)</span>. SRE at Selectel.
          </p>
        </>
      }
    />
  );
}
