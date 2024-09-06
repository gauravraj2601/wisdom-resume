import React from 'react';
import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi'; // Importing icons from react-icons
import 'flowbite'; // For tooltips

const ContactInfo = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <ul className="space-y-4">
          {/* Phone with tooltip */}
          <li className="flex items-center gap-4">
            <FiPhone className="w-6 h-6 text-blue-600" />
            <span 
              data-tooltip-target="tooltip-phone"
              className="text-gray-700 font-medium"
            >
              Phone: +91 8083368861
            </span>
            <div id="tooltip-phone" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Click to call
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </li>

          {/* Email with tooltip */}
          <li className="flex items-center gap-4">
            <FiMail className="w-6 h-6 text-red-600" />
            <span 
              data-tooltip-target="tooltip-email"
              className="text-gray-700 font-medium"
            >
              Email: 
              <a href="mailto:gauravraj2601@gmail.com" className="text-blue-500 underline ml-2">
                gauravraj2601@gmail.com
              </a>
            </span>
            <div id="tooltip-email" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Click to send an email
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </li>

          {/* LinkedIn with tooltip */}
          <li className="flex items-center gap-4">
            <FiLinkedin className="w-6 h-6 text-blue-500" />
            <span 
              data-tooltip-target="tooltip-linkedin"
              className="text-gray-700 font-medium"
            >
              LinkedIn: 
              <a href="https://www.linkedin.com/in/gaurav-raj-915150157" className="text-blue-500 underline ml-2" target="_blank" rel="noopener noreferrer">
                Gaurav Raj
              </a>
            </span>
            <div id="tooltip-linkedin" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Visit LinkedIn profile
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
