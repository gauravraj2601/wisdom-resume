
// components/Footer.jsx
import { AiOutlineDownload } from 'react-icons/ai'; // Download icon from React Icons

const Footer = ({handleGeneratePDF}) => {
    return (
      <footer  className="font-semibold text-[10px]">
        <div className=" fixed bottom-4 right-4 z-10 ">
        <button
          className="hover:underline bg-[#333a4d] text-white flex items-center space-x-1 px-1 py-1 rounded"
          onClick={handleGeneratePDF}
        >
          <AiOutlineDownload className="h-5 w-5" /> {/* Download icon */}
          <span>Resume as PDF</span>
        </button>
        </div>
        {/* Google Maps iframe */}
      
      </footer>
    );
  };
  
  export default Footer;
  