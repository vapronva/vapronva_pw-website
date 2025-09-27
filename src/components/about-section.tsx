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

interface AboutSectionProps {
  glass?: boolean;
}

export default function AboutSection({ glass = false }: AboutSectionProps) {
  const [supportsHDR, setSupportsHDR] = useState(false);
  useEffect(() => {
    setSupportsHDR(doesTheDisplaySupportHDR());
  }, []);
  return (
    <div
      className={`shadow-ba_b16c_1/10 max-w-5xl rounded-3xl px-5 py-5 shadow-2xl transition-all duration-500 ease-out sm:mx-auto sm:px-7 sm:py-7 ${
        glass
          ? "border border-white/10 bg-white/[0.03] ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-cover bg-local bg-center bg-no-repeat ring-1 ring-gray-900/5"
      }`}
      style={
        glass
          ? {
              backgroundImage:
                "linear-gradient(135deg, rgba(13, 14, 21, 0.08) 0%, rgba(13, 14, 21, 0.14) 50%, rgba(13, 14, 21, 0.20) 100%)",
            }
          : {
              backgroundImage:
                "linear-gradient(rgba(37, 37, 39, 0.90), rgba(37, 37, 39, 0.90)), url(/images/idminebg/ba-b16c-1.jpeg)",
            }
      }
    >
      <h3
        className={`mb-1 text-xs font-semibold ${glass ? "text-white/95" : "text-white"}`}
      >
        Greetings! I am…
      </h3>
      <div className="flex">
        <p
          className={`text-base leading-tight ${glass ? "text-white/95" : "text-white"}`}
        >
          {supportsHDR ? (
            <video
              muted
              autoPlay
              playsInline
              className="float-right mb-1 ml-3 h-20 w-20 rounded-full sm:h-24 sm:w-24"
            >
              <source src="/videos/pfp-2022-hdred.mp4" type="video/mp4" />
            </video>
          ) : (
            <img
              src="/images/pfp/new-2022-hkc-out.jpeg"
              alt="vapronva's profile picture (2022)"
              className="float-right mb-1 ml-3 h-20 w-20 rounded-full sm:h-24 sm:w-24"
            />
          )}
          My name is <span className="font-medium">Vladimir</span>{" "}
          <span className="font-extralight">
            (or online &quot;
            <span className="font-medium">vapronva</span>&quot;)
          </span>
          , a 22-year-old nerdy guy from Russia with a passion for engineering.
          I do many things: software development; system admin/reliability,
          DevSecGitNetMLOps <span className="text-xd">(🤡)</span>, networking,
          homelabbing; video editing + colo<s>u</s>r grading… Oh, and I like
          rhythm games; love listening to anything from electronic to J-Pop
          music; tried music production. Amused by live production and tech
          theatre. Average Linux enjoyer (and Mac user with 13+ YoE). Big 152-ФЗ
          and 63-ФЗ РФ fan. ML and NLP enthusiast. Self-hosting maniac. VR
          fanboy. Previously an AS.
        </p>
      </div>
    </div>
  );
}
