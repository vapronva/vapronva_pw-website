import InfoCard from "~/components/info-card";

interface LanguagesProps {
  glass?: boolean;
}

export default function Languages({ glass = false }: LanguagesProps) {
  return (
    <InfoCard
      title="Languages"
      backgroundImage="/images/idminebg/el-82f7-7.jpeg"
      shadowColor="shadow-el_82f7.7/10"
      glass={glass}
      className="mt-3 sm:mt-6"
      content={
        <p>
          <span className="font-medium">Russian</span> (native),{" "}
          <span className="font-medium">English</span> (C1; fluent),{" "}
          <span className="font-medium">German</span> (A2).
        </p>
      }
    />
  );
}
