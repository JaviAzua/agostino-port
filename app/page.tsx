import About from "@/components/About";
import ReelPage from "@/components/ReelPage";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="z-0">
      <section id="reel" className="min-h-[70vh] md:min-h-screen">
        <div className="absolute z-40 inset-0 bg-gradient-to-b from-black via-transparent to-blackB md:h-[130vh] lg:h-[120vh]" />
        <div className="z-0 absolute pt-[56.25%] inset-x-0 top-0 min-h-[70vh]">
          {/* Reel */}
          <ReelPage />
        </div>
      </section>

      <section id="about" className=" min-h-screen">
        <div className="pt-20 md:pt-48">
          <About />
        </div>
      </section>

      {/* Projects */}
      {/* Contact */}
    </main>
  );
}
