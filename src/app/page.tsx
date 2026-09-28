import AboutSection from "~/components/about-section";
import AdditionalInfo from "~/components/additional-info";
import Banner from "~/components/banner";
import ContactSection from "~/components/contact-section";
import Footer from "~/components/footer";
import Languages from "~/components/languages";
import LocationEducation from "~/components/location-education";
import ProgrammingLanguages from "~/components/programming-languages";
import ProjectsSection from "~/components/projects-section";
import Scene from "~/components/scene";

export default function Home() {
  return (
    <>
      <Banner />
      <Scene>
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
        <AdditionalInfo />
        <ContactSection />
        <ProjectsSection />
        <Footer />
      </Scene>
    </>
  );
}
