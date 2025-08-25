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

export default function Home() {
  const [nekoSpeed, setNekoSpeed] = useState<number>(1);
  return (
    <>
      <Neko speed={nekoSpeed} />
      <Banner />
      <div
        className="from-deep-slate via-deep-regal-blue to-deep-gray flex flex-col justify-center overflow-hidden bg-linear-to-r px-3 py-3 sm:px-0 sm:py-6"
        id="about"
      >
        <AboutSection />
        <div className="mt-3 max-w-5xl sm:mx-auto sm:mt-6">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
            <div className="w-full sm:w-1/2">
              <LocationEducation />
              <Languages />
            </div>
            <div className="w-full sm:w-1/2">
              <ProgrammingLanguages />
            </div>
          </div>
        </div>
        <div className="mt-3 max-w-5xl sm:mx-auto sm:mt-6">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
            <AdditionalInfo />
          </div>
        </div>
        <ContactSection />
        <ProjectsSection />
        <Footer nekoSpeed={nekoSpeed} setNekoSpeed={setNekoSpeed} />
      </div>
    </>
  );
}
