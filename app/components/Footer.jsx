
// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6 flex items-center justify-between">
        <div>
          <a href="#" className="hover:underline">Download Resume</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:underline">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6m0-4V4m8 8H4"/>
            </svg>
            123 Main St, Anytown USA
          </a>
          <div className="flex items-center space-x-2">
            <span>&copy; 2024 John Doe</span>
            <div className="h-5 w-[1px] bg-gray-400"></div>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <div className="h-5 w-[1px] bg-gray-400"></div>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  