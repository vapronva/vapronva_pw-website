import { Fragment } from "react";

import Card from "~/components/card";

const songQuotes = [
  {
    href: "https://www.youtube.com/watch?v=dCWCo4S1-to&t=13s",
    quote: "Komm mir nich mit AGBs",
  },
  {
    href: "https://www.youtube.com/watch?v=Lq9eqHDKJPE&t=80s",
    quote: "Sparks light the flame, so don't wait start a fire today!",
  },
  {
    href: "https://www.youtube.com/watch?v=a51VH9BYzZA&t=145s",
    quote: "Can tomorrow never come, can it please stay away?",
  },
  {
    href: "https://www.youtube.com/watch?v=oA0CpI0vCK4&t=162s",
    quote: "I'm here, I am nameless",
  },
  {
    href: "https://www.youtube.com/watch?v=btoWzeEk5bc&t=129s",
    quote: "Someday, like a blooming flower",
  },
  {
    href: "https://www.youtube.com/watch?v=IsraVV__oG8&t=58s",
    quote: "It seems simple on the surface, just to go and find a purpose",
  },
  {
    href: "https://www.youtube.com/watch?v=JNsYaefCe-Y&t=206s",
    quote: "All of me doesn't wanna cross that line",
  },
  {
    href: "https://www.youtube.com/watch?v=DeWUMKgwRig&t=68s",
    quote: "Is it a scandal if you try and screw it up sometimes",
  },
  {
    href: "https://www.youtube.com/watch?v=IFPKIbEZJUU&t=39s",
    quote: "There's something within your shadow",
  },
  {
    href: "https://www.youtube.com/watch?v=9KAQaKydqA0&t=71s",
    quote: "When we should be daydreamers",
  },
  {
    href: "https://www.youtube.com/watch?v=Kybi1q3rjdk&t=31s",
    quote: "Since a fake must work to keep on improving",
  },
  {
    href: "https://www.youtube.com/watch?v=MQtjNI-Nkd0&t=262s",
    quote:
      "Life's too short to waste it on being withdrawn; life's too short to waste it at all",
  },
];

export default function AdditionalInfo() {
  return (
    <Card className="mt-3 shadow-sh_a792_3/10 [--card-photo:url(https://cdn.engineering/vapronva-pw/images/idminebg/sh-a792-3.jpeg)] sm:mt-6 sm:p-6 [&_a]:transition [&_a]:hover:drop-shadow-glow_sm_2">
      <p className="[&_a]:drop-shadow-glow_sm">
        <a href="https://en.pronouns.page/@vapronva" target="_blank">
          Pronouns.page
        </a>
        .{" "}
        <a href="https://beatleader.com/u/76561199227681806" target="_blank">
          BeatLeader
        </a>
        . I am right-handed. I hear Laurel, not Yanny. My{" "}
        <a
          href="https://cdn.engineering/vapronva-pw/images/pfp/original/new-2022-hkc-out.png"
          target="_blank"
        >
          profile pic
        </a>{" "}
        was <i>enhanced</i> by{" "}
        <a href="https://kc.is.being.pet" target="_blank">
          kc
        </a>
        . I am a{" "}
        <a
          href="https://www.youtube.com/watch?v=_594mPXoHMI&t=58s"
          target="_blank"
        >
          quiche eater
        </a>
        . I miss "ML"… I love{" "}
        <a href="https://en.wikipedia.org/wiki/Dash#Em_dash" target="_blank">
          em dashes
        </a>{" "}
        so much. White chocolate —{" "}
        <a href="https://www.youtube.com/watch?v=-FrpuPLYnvY" target="_blank">
          so good
        </a>
        . I like water and have taste-tested multiple dozens of brands.
      </p>
      <p className="mt-2 text-sm leading-none font-light tracking-tight">
        Favourite song quotes:{" "}
        {songQuotes.map(({ href, quote }, index) => (
          <Fragment key={href}>
            {index > 0 ? " / " : null}
            <a href={href} target="_blank">
              "{quote}"
            </a>
          </Fragment>
        ))}{" "}
        and many more.
      </p>
    </Card>
  );
}
