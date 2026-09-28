import Card from "~/components/card";

export default function AboutSection() {
  return (
    <Card className="max-w-5xl shadow-ba_b16c_1/10 [--card-photo:url(/images/idminebg/ba-b16c-1.jpeg)] sm:mx-auto sm:p-7">
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
        I'm <span className="font-medium">Vladimir</span>{" "}
        <span className="font-extralight">
          (&quot;
          <span className="font-medium">vapronva</span>&quot; online)
        </span>
        , a 23-year-old nerdy guy from Russia. I do the whole DevSecGitNetMLOps{" "}
        <span className="text-xd">(🤡)</span> thing, plus networking,
        homelabbing, video editing and colo<s>u</s>r grading… Oh, and I'm a Beat
        Saber addict, listen to anything from electronic to J-Pop, tried music
        production and SynthV tuning. Fascinated by live production and tech
        theatre. Average Linux enjoyer and Mac user with 14+ YoE. Big 152-ФЗ and
        63-ФЗ РФ fan. NLP enthusiast. Self-hosting maniac. VR fanboy. Previously
        an AS. Snowboarder. Aspiring commercial pilot.
      </p>
    </Card>
  );
}
