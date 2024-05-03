import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Home • NextJS Demo",
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  other: {
    title: "NextJS Demo",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-stone-950 dark:bg-[#0a0910] dark:text-white">
        <main className="px-5 sm:mx-auto sm:max-w-2xl sm:px-8 lg:px-0 antialiased md:max-w-6xl grid gap-12 mt-4 overflow-hidden md:overflow-visible">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
