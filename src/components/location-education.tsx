import Card from "~/components/card";

export default function LocationEducation() {
  return (
    <Card className="shadow-od_4ba7.12/10 [--card-photo:url(https://cdn.engineering/vapronva-pw/images/idminebg/od-4ba7-12.jpeg)] sm:p-6">
      <p>
        Born in Omsk, live in Saint Petersburg. Did exchanges in the UK and
        Germany. Studied SWE, then ICT, then telecom engineering{" "}
        <span className="font-thin">(all incomplete)</span>. Currently an SRE at
        Selectel.
      </p>
    </Card>
  );
}
