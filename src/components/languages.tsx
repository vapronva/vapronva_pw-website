import InfoCard from "~/components/info-card";

export default function Languages() {
  return (
    <InfoCard
      title="Languages"
      backgroundImage="/images/idminebg/el-82f7-7.jpeg"
      shadowColor="shadow-el_82f7.7/10"
      content={
        <p>
          My native tongue is <span className="font-medium">Russian</span>, with{" "}
          <span className="font-medium">English</span> as my second language (C1
          level){" "}
          <span className="font-extralight">
            (completely fluent, would guess)
          </span>
          , and <span className="font-medium">German</span> as my third language
          (A2 level).
        </p>
      }
    />
  );
}
