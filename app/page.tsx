import About from "@/components/About";
import AboutBottom from "@/components/AboutBottom";
import ProjectsGrid from "@/components/ProjectsGrid";
import ReelPage from "@/components/ReelPage";

export default function Home() {
  return (
    <>
      <div>
        <div className="hidden lg:block absolute z-40 inset-0 bg-gradient-to-b from-black/5 to-blackB min-h-[50vh] lg:min-h-[120vh]" />

        {/* Reel */}

        <section
          id="reel"
          className="min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh]"
        >
          <div className="absolute inset-0">
            <div className="relative pt-[56.25%] min-h-[65vh] select-none">
              <ReelPage />
            </div>
          </div>
        </section>

        <section id="about" className=" min-h-screen">
          <div className="pt-20 md:pt-5 lg:pt-48">
            <About />
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="flex justify-center items-center min-h-screen"
        >
          <div className="pt-10 w-full max-w-[98  %]">
            <ProjectsGrid />
          </div>
        </section>
        <section>
          {/* ContactB */}
          <section
            id="contactB"
            className="min-h-[100vh] grid place-content-center max-w-[60%] mx-auto"
          >
            <div className="">
              <AboutBottom />
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
