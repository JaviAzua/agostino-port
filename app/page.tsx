import ReelPage from "@/components/ReelPage";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="snap-mandatory snap-y z-0">
      <section className="snap-center" id="reel">
        {/* Reel */}
        <ReelPage />
      </section>
      {/* About */}
      {/* Projects */}
      {/* Contact */}
    </main>
  );
}
