import { useState, useEffect } from "react";

function doesTheDisplaySupportHDR(): boolean {
  if (typeof window !== "undefined") {
    if (window.matchMedia("(dynamic-range: high)").matches) {
      return true;
    }
    if (
      screen.colorDepth > 24 &&
      window.matchMedia("(color-gamut: p3)").matches
    ) {
      return true;
    }
  }
  return false;
}

export default function AboutSection() {
  const [supportsHDR, setSupportsHDR] = useState(false);
  useEffect(() => {
    setSupportsHDR(doesTheDisplaySupportHDR());
  }, []);
  return (
    <div
      className="shadow-ba_b16c_1/10 max-w-5xl rounded-3xl bg-cover bg-local bg-center bg-no-repeat px-5 py-5 shadow-2xl ring-1 ring-gray-900/5 sm:mx-auto sm:px-7 sm:py-7"
      style={{
        backgroundImage:
          "linear-gradient(rgba(37, 37, 39, 0.90), rgba(37, 37, 39, 0.90)), url(/images/idminebg/ba-b16c-1.jpeg)",
      }}
    >
      <h3 className="mb-1 text-xs font-semibold text-white">
        Greetings! I am…
      </h3>
      <div className="flex">
        <p className="text-base leading-tight text-white">
          My name is <span className="font-medium">Vladimir</span>{" "}
          <span className="font-extralight">
            (online, you may know me by &quot;
            <span className="font-light">vapronva</span>&quot;)
          </span>
          , a 22-year-old nerdy guy from Russia with an insatiable passion for
          engineering. I do many things: software development; system
          admin/reliability, DevSecGitNetMLOps{" "}
          <span className="text-xd">(🤡)</span>, networking, homelabbing{" "}
          <span className="font-thin">(almost at r/HomeDataCenter level)</span>;
          video editing + colo<s>u</s>r grading… Oh, and I like rhythm games;
          love listening to anything from electronic to J-Pop music. Average
          Linux enjoyer (and Mac user with 13+ YoE). Big 152-ФЗ and 63-ФЗ РФ
          fan. ML and NLP enthusiast. Self-hosting maniac. VR fanboy. Previously
          an AS.
        </p>
        {supportsHDR ? (
          <video
            muted
            autoPlay
            playsInline
            className="mx-auto inline-flex h-25 w-25 rounded-full"
          >
            <source src="/videos/pfp-2022-hdred.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/images/pfp/new-2022-hkc-out.jpeg"
            alt="vapronva's profile picture (2022)"
            className="mx-auto inline-flex h-25 w-25 rounded-full"
          />
        )}
      </div>
    </div>
  );
}
