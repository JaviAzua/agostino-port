import "./globals.css";
import { Roboto } from "@next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        className={
          (roboto.className, "bg-blackB scrollbar-hide overflow-x-hidden")
        }
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
