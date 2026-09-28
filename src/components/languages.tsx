import Card from "~/components/card";

export default function Languages() {
  return (
    <Card
      title="Languages"
      className="mt-3 shadow-el_82f7_7/10 [--card-photo:url(/images/idminebg/el-82f7-7.jpeg)] sm:mt-6 sm:p-6"
    >
      <p>
        <span className="font-medium">Russian</span> (native),{" "}
        <span className="font-medium">English</span> (C1),{" "}
        <span className="font-medium">German</span> (A2).
      </p>
    </Card>
  );
}
