import { HandoffLink } from "~/components/handoff";

export const CV_URL = "https://vapronva.ru/en";

export default function Banner() {
  return (
    <p className="bg-linear-to-r from-regal-blue to-cyan-900 p-2 text-center text-xn leading-tightie font-extralight text-white/90 sm:p-1.5 [&_a]:drop-shadow-glow_lg [&_a]:transition [&_a]:hover:drop-shadow-glow_lg_2">
      Pssst… My somewhat professional website is at{" "}
      <HandoffLink href={CV_URL}>vapronva.ru</HandoffLink>. Also, I self-host
      tons of stuff at <a href="https://docker.house">docker.house</a> and many
      others with my <a href="https://cmld.network">cmld.network</a>. And yes, I
      have 70+ domains.
    </p>
  );
}
