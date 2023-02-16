import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import ReelPage from "@/components/ReelPage";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="z-0">
      <section
        id="reel"
        className="min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh]"
      >
        <div className="hidden lg:block absolute z-[2] inset-0 bg-gradient-to-b from-black/5 to-blackB min-h-[50vh] lg:min-h-[115vh]" />
        <div className="absolute inset-0">
          <div className="relative pt-[56.25%] min-h-[70vh]">
            {/* Reel */}
            <ReelPage />
          </div>
        </div>
      </section>

      <section id="about" className=" min-h-screen">
        <div className="pt-20 md:pt-5 lg:pt-48">
          <About />
        </div>
      </section>

      <section
        id="projects"
        className="flex justify-center items-center min-h-screen"
      >
        <div className="pt-10 w-full">
          <ProjectsGrid />
        </div>
      </section>

      {/* Contact */}
    </main>
  );
}
