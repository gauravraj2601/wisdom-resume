import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import { usePDF } from 'react-to-pdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const GauravResumeComp = () => {
    const { toPDF, targetRef } = usePDF({filename: 'Gaurav_Raj_Resume.pdf'});

    const generatePDF = () => {
        const element = document.getElementById('pdf-content');
        html2canvas(element, {
            scale: 2, // Increase scale for better quality
            useCORS: true, // Enable CORS to handle external resources
            logging: true, // Enable logging for debugging
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 180; // A4 width in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
    
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdf.internal.pageSize.height;
    
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pdf.internal.pageSize.height;
            }
    
            pdf.save('Resume_GauravRaj.pdf');
        });
    };
    
  return (
        <div ref={targetRef} id="pdf-content" className=" w-[95%] sm:w-[80%] md:w-[70%] m-auto">
               <div className="page-break">

            <Header />
               </div>

            <div className="page-break">
        <MainContent />
    </div>
<div className='page-break'>

          <Footer handleGeneratePDF={generatePDF} />
</div>
        </div>

      )
}

export default GauravResumeComp