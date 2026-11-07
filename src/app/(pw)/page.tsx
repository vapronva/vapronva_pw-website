import AboutSection from "~/components/about-section";
import AdditionalInfo from "~/components/additional-info";
import Banner from "~/components/banner";
import ContactSection from "~/components/contact-section";
import Cv from "~/components/cv";
import Footer from "~/components/footer";
import Handoff from "~/components/handoff";
import Languages from "~/components/languages";
import LocationEducation from "~/components/location-education";
import Magic from "~/components/magic";
import ProgrammingLanguages from "~/components/programming-languages";
import ProjectsSection from "~/components/projects-section";
import Scene from "~/components/scene";

export default function Home() {
  return (
    <Handoff to={<Cv lang="en" />}>
      <Banner />
      <Scene>
        <main>
          <h1 className="sr-only">vapronva</h1>
          <Magic name="about">
            <AboutSection />
          </Magic>
          <div className="mt-3 max-w-5xl sm:mx-auto sm:mt-6">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
              <div className="w-full sm:w-1/2">
                <Magic name="education">
                  <LocationEducation />
                </Magic>
                <Magic name="languages">
                  <Languages />
                </Magic>
              </div>
              <div className="w-full sm:w-1/2">
                <Magic name="stack">
                  <ProgrammingLanguages />
                </Magic>
              </div>
            </div>
          </div>
          <AdditionalInfo />
          <Magic name="contacts">
            <ContactSection />
          </Magic>
          <ProjectsSection />
        </main>
        <Footer />
      </Scene>
    </Handoff>
  );
}
