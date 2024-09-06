"use client"

import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="w-[95%] sm:w-[80%] md:w-[75%] m-auto font-[family-name:var(--font-geist-sans)] ">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
