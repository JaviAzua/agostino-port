import ReelPage from "@/components/ReelPage";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="snap-mandatory snap-y z-0">
      <section className="absolute inset-0 snap-center h-[90vh]" id="reel">
        {/* Reel */}
        <ReelPage />
      </section>
      {/* About */}
      {/* Projects */}
      {/* Contact */}
    </main>
  );
}
