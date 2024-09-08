"use client"
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function Home() {
  const resumeRef = useRef();
  const handleGeneratePDF = () => {
    const element = resumeRef.current; // Capture the current resume section

    // PDF options (you can customize these)
    const opt = {
      margin: [0.5, 0.5],
      filename: 'Resume_GauravRaj.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // Generate PDF from the element (resume content)
    html2pdf().from(element).set(opt).save();
  };
  return (
    <div ref={resumeRef} className="w-[95%] sm:w-[80%] md:w-[75%] m-auto font-[family-name:var(--font-geist-sans)] ">
      <Header />
      <MainContent />
      <Footer handleGeneratePDF={handleGeneratePDF} />
    </div>
  );
}
