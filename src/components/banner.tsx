export default function Banner() {
  return (
    <div className="from-regal-blue bg-blue-500 bg-linear-to-r to-cyan-900 p-2 sm:p-1.5">
      <div className="leading-tightie flex items-center justify-center text-center">
        <p className="text-xn font-extralight text-white/90">
          Pssst… My somewhat professional website is at{" "}
          <a
            className="drop-shadow-glow_lg hover:drop-shadow-glow_lg_2 transition duration-200 ease-in-out"
            href="https://vapronva.ru"
          >
            vapronva.ru
          </a>{" "}
          — feel free to check it out{" "}
          <span className="font-thin">
            (unfortunately, I haven&apos;t built it yet)!
          </span>{" "}
          Also, I self-host tons of stuff at{" "}
          <a
            className="drop-shadow-glow_lg hover:drop-shadow-glow_lg_2 transition duration-200 ease-in-out"
            href="https://docker.house"
          >
            docker.house
          </a>{" "}
          and{" "}
          <a
            className="drop-shadow-glow_lg hover:drop-shadow-glow_lg_2 transition duration-200 ease-in-out"
            href="https://cmld.network"
          >
            cmld.network
          </a>
          . And yes, I have 30+ domains.
        </p>
      </div>
    </div>
  );
}
