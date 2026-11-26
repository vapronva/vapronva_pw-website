import AboutSection from "~/components/about-section";
import AdditionalInfo from "~/components/additional-info";
import Banner, { CV_URL } from "~/components/banner";
import ContactSection from "~/components/contact-section";
import Cv from "~/components/cv";
import Footer from "~/components/footer";
import Handoff from "~/components/handoff";
import Languages from "~/components/languages";
import LocationEducation from "~/components/location-education";
import Magic from "~/components/magic";
import ProgrammingLanguages from "~/components/programming-languages";
import ProjectsSection from "~/components/projects-section";
import Scene, { SceneProvider } from "~/components/scene";

export default function Home() {
  return (
    <SceneProvider>
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            prefetch: [{ urls: [CV_URL], eagerness: "moderate" }],
          }),
        }}
      />
      <Handoff to={<Cv lang="en" />}>
        <Banner />
        <Scene>
          <main className="max-w-5xl sm:mx-auto">
            <h1 className="sr-only">vapronva</h1>
            <Magic name="about">
              <AboutSection />
            </Magic>
            <div className="mt-3 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:gap-6">
              <div className="sm:w-1/2">
                <Magic name="education">
                  <LocationEducation />
                </Magic>
                <Magic name="languages">
                  <Languages />
                </Magic>
              </div>
              <div className="sm:w-1/2">
                <Magic name="stack">
                  <ProgrammingLanguages />
                </Magic>
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
    </SceneProvider>
  );
}
