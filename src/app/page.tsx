"use client";

import { useState } from "react";

import Banner from "~/components/banner";
import AboutSection from "~/components/about-section";
import LocationEducation from "~/components/location-education";
import Languages from "~/components/languages";
import ProgrammingLanguages from "~/components/programming-languages";
import AdditionalInfo from "~/components/additional-info";
import ContactSection from "~/components/contact-section";
import ProjectsSection from "~/components/projects-section";
import Footer from "~/components/footer";
import Neko from "~/neko/neko";
import Starfield from "~/components/starfield";

export default function Home() {
  const [nekoSpeed, setNekoSpeed] = useState<number>(1);
  const [showStarfield, setShowStarfield] = useState<boolean>(true);
  return (
    <>
      <Neko speed={nekoSpeed} />
      <Banner />
      <div
        className="from-deep-slate via-deep-regal-blue to-deep-gray relative flex flex-col justify-center overflow-hidden bg-linear-to-r px-3 py-3 sm:px-0 sm:py-6"
        id="about"
      >
        {showStarfield && <Starfield />}
        <div className="relative z-10">
          <AboutSection glass={showStarfield} />
          <div className="mt-3 max-w-5xl sm:mx-auto sm:mt-6">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="w-full sm:w-1/2">
                <LocationEducation glass={showStarfield} />
                <Languages glass={showStarfield} />
              </div>
              <div className="w-full sm:w-1/2">
                <ProgrammingLanguages glass={showStarfield} />
              </div>
            </div>
          </div>
          <div className="mt-3 max-w-5xl sm:mx-auto sm:mt-6">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
              <AdditionalInfo glass={showStarfield} />
            </div>
          </div>
          <ContactSection glass={showStarfield} />
          <ProjectsSection glass={showStarfield} />
          <Footer
            nekoSpeed={nekoSpeed}
            setNekoSpeed={setNekoSpeed}
            showStarfield={showStarfield}
            setShowStarfield={setShowStarfield}
          />
        </div>
      </div>
    </>
  );
}
