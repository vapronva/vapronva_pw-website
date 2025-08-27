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
            Omsk-born, based in Saint Petersburg. UK and Germany exchange alum.
            ITMO: SWE to ICT <span className="font-thin">(incomplete)</span>;
            now ETU: Telecom Engineering. SRE at Selectel.
          </p>
        </>
      }
    />
  );
}
