import Card from "~/components/card";

export default function AboutSection() {
  return (
    <Card
      title="Greetings! I am…"
      className="max-w-5xl shadow-ba_b16c_1/10 [--card-photo:url(/images/idminebg/ba-b16c-1.jpeg)] sm:mx-auto sm:p-7"
    >
      <p>
        <video
          muted
          autoPlay
          playsInline
          poster="/images/pfp/new-2022-hkc-out.jpeg"
          aria-label="vapronva's avatar (2022)"
          className="float-right mb-1 ml-3 size-20 rounded-full sm:size-24"
        >
          <source
            src="/videos/pfp-2022-hdred.mp4"
            type="video/mp4"
            media="(dynamic-range: high)"
          />
        </video>
        My name is <span className="font-medium">Vladimir</span>{" "}
        <span className="font-extralight">
          (or online &quot;
          <span className="font-medium">vapronva</span>&quot;)
        </span>
        , a 22-year-old nerdy guy from Russia with a passion for engineering. I
        do many things: software development; system admin/reliability,
        DevSecGitNetMLOps <span className="text-xd">(🤡)</span>, networking,
        homelabbing; video editing + colo<s>u</s>r grading… Oh, and I like
        rhythm games; love listening to anything from electronic to J-Pop music;
        tried music production. Amused by live production and tech theatre.
        Average Linux enjoyer (and Mac user with 13+ YoE). Big 152-ФЗ and 63-ФЗ
        РФ fan. ML and NLP enthusiast. Self-hosting maniac. VR fanboy.
        Previously an AS.
      </p>
    </Card>
  );
}
