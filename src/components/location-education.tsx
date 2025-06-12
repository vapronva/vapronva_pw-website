import InfoCard from "~/components/info-card";

export default function LocationEducation() {
  return (
    <InfoCard
      title="Location & Education & Job"
      backgroundImage="/images/idminebg/od-4ba7-12.jpeg"
      shadowColor="shadow-od_4ba7.12/10"
      content={
        <>
          <p>
            Was born in the beautiful city of Omsk, and now I call Saint
            Petersburg my home. <br />I studied in SWE at ITMO University before
            pivoting to ICT. <br />
            During school years took part in student exchange programs in the
            United Kingdom and Germany. <br />
            Today, I happily put my skills to work as an SRE at Selectel.
          </p>
        </>
      }
    />
  );
}
