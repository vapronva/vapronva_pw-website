import InfoCard from "~/components/info-card";

interface AdditionalInfoProps {
  glass?: boolean;
}

export default function AdditionalInfo({ glass = false }: AdditionalInfoProps) {
  return (
    <InfoCard
      title="Additional Information"
      backgroundImage="/images/idminebg/sh-a792-3.jpeg"
      shadowColor="shadow-sh_a792.3/10"
      glass={glass}
      content={
        <div>
          <p>
            <a
              className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
              href="https://en.pronouns.page/@vapronva"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Pronouns.page
            </a>
            .{" "}
            <a
              className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
              href="https://beatleader.com/u/76561199227681806"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              BeatLeader
            </a>
            . I am right-handed. I hear Laurel, not Yanny. My{" "}
            <a
              className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
              href="/images/pfp/original/new-2022-hkc-out.png"
              rel="noopener"
              target="_blank"
            >
              profile pic{" "}
            </a>{" "}
            was <i>enhanced</i> by{" "}
            <a
              className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
              href="https://kc.is.being.pet"
              rel="nofollow noopener"
              target="_blank"
            >
              kc
            </a>
            . I am a{" "}
            <a
              className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
              href="https://www.youtube.com/watch?v=_594mPXoHMI&t=58s"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              quiche eater
            </a>
            . I did &quot;AI&quot; before it was cool. I love{" "}
            <a
              className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
              href="https://en.wikipedia.org/wiki/Dash#Em_dash"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              em dash
            </a>{" "}
            so much. White chocolate —{" "}
            <a
              className="drop-shadow-glow_sm hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
              href="https://www.youtube.com/watch?v=-FrpuPLYnvY"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              so good
            </a>
            .
          </p>
          <div className="mt-0.5 text-sm leading-none font-light tracking-tight">
            <p>
              Favourite song quotes:{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=dCWCo4S1-to&t=13s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;Komm mir nich mit AGBs, die haben keine Gültigkeit, weil
                ich die gar nicht les&apos;&quot;
              </a>{" "}
              /{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=Lq9eqHDKJPE&t=80s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;Sparks light the flame, so don&apos;t wait start a fire
                today!&quot;
              </a>{" "}
              /{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=a51VH9BYzZA&t=145s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;Can tomorrow never come, can it please stay away?&quot;
              </a>{" "}
              /{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=oA0CpI0vCK4&t=162s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;I&apos;m here, I am nameless&quot;
              </a>{" "}
              /{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=btoWzeEk5bc&t=129s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;Someday, like a blooming flower&quot;
              </a>{" "}
              /{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=IsraVV__oG8&t=58s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;It seems simple on the surface, just to go and find a
                purpose&quot;
              </a>{" "}
              /{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=JNsYaefCe-Y&t=206s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;All of me doesn&apos;t wanna cross that line&quot;
              </a>{" "}
              /{" "}
              <a
                className="hover:drop-shadow-glow_sm_2 transition duration-200 ease-in-out"
                href="https://www.youtube.com/watch?v=DeWUMKgwRig&t=68s"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                &quot;Is it a scandal if you try and screw it up sometimes&quot;
              </a>{" "}
              and many more.
            </p>
          </div>
        </div>
      }
    />
  );
}
