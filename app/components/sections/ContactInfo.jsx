import React from 'react';
import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi';
import { Tooltip } from 'flowbite-react'; // Import Flowbite's Tooltip component

const ContactInfo = () => {
  return (
  
      <section className=" p-[20px] bg-[rgb(0,0,0,0.3)] rounded-[15px] ">
        <h2 className="text-3xl text-white font-bold mb-4">Contact Information</h2>
        <div className="bg-white shadow-md p-6 rounded-lg overflow-hidden">
          <ul className="space-y-4">
            {/* Phone with Flowbite Tooltip */}
            <li className="flex items-center gap-4">
              <FiPhone className="w-6 h-6 text-blue-600" />
              <Tooltip content="Click to call" placement="top" arrow={false} animation="duration-300" trigger="hover" className="tooltip-custom" >
                <span className="text-gray-700 text-md sm:text-2xl font-medium">
                  Phone: +91 8083368861
                </span>
              </Tooltip>
            </li>

            {/* Email with Flowbite Tooltip */}
            <li className="flex items-center gap-4">
              <FiMail className="w-6 h-6 text-red-600" />
              <Tooltip content="Click to send an email" placement="top" arrow={false} animation="duration-300" trigger="hover" className="tooltip-custom" >
                <span className="text-gray-700 text-md sm:text-2xl font-medium  ">
                  Email: 
                  <a href="mailto:gauravraj2601@gmail.com" className="text-blue-500 underline ml-2">
                    gauravraj2601@gmail.com
                  </a>
                </span>
              </Tooltip>
            </li>

            {/* LinkedIn with Flowbite Tooltip */}
            <li className="flex items-center gap-4">
              <FiLinkedin className="w-6 h-6 text-blue-500" />
              <Tooltip  content="Visit LinkedIn profile" placement="top" arrow={false} animation="duration-300" trigger="hover" className="tooltip-custom"
              >
                <span className="text-gray-700 text-md sm:text-2xl font-medium">
                  LinkedIn: 
                  <a href="https://www.linkedin.com/in/gaurav-raj-915150157" className="text-blue-500 underline ml-2" target="_blank" rel="noopener noreferrer">
                    Gaurav Raj
                  </a>
                </span>
              </Tooltip>
            </li>
          </ul>
        </div>
      </section>
   
  );
};

export default ContactInfo;
