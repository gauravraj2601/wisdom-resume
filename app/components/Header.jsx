import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import profilePic from "../Assets/ProfilePic.png";
import Image from 'next/image';

const Header = () => {
  const NavigateSection = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const sectionId = e.target.getAttribute('href'); // Get the target section's ID
    const section = document.querySelector(sectionId); // Find the section element by its ID
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
    console.log(sectionId)
  };
    return (
      <>
      <nav className='nav '>
      <div id="logo">
        <span className="span">{"<"}</span> <h2>Gaurav</h2>{" "}
        <span className="span"> {"/>"}</span>
      </div>
      <ul className='font-semibold text-[13px] sm:font-bold md:text-[18px] overflow-hidden '>
        <li>
          <a href="#about" onClick={NavigateSection}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={NavigateSection}>
            Skills
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={NavigateSection}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={NavigateSection}>
            Contact
          </a>
        </li>
        <li id="resume-link-1">
          <a
            className="nav-link resume"
            id="resume-link-1"
            href={"#"}
            // onClick={handleClick}
            download="Gaurav_Raj_Resume"
          >
            Resume
          </a>
        </li>
      </ul>
      </nav>
        <header
            className="h-[260px] sm:h-[250px] md:h-[300px] bg-[#333a4d] text-white py-3 px-4 sm:px-6 flex items-center justify-between"
            style={{
                borderBottomLeftRadius: '50% 20%',
                borderBottomRightRadius: '50% 20%',
            }}
        >
            <div className="space-y-1 mb-10">
                <h1 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] font-extrabold">Gaurav Raj</h1>
                <p className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px]">Full Stack Web Developer</p>
            </div>
            <div className="flex flex-col items-start pr-2 mb-[70px] text-sm sm:text-base md:text-lg lg:text-xl space-y-3">
                <a href="mailto:gauravraj2601@gmail.com" className="hover:underline flex items-center">
                    <FaEnvelope className="mr-2" />
                    gauravraj2601@gmail.com
                </a>
                <a href="tel:+918083368861" className="hover:underline flex items-center">
                    <FaPhone className="mr-2" />
                    +91-8083368861
                </a>
                <a href="https://www.linkedin.com/in/gaurav-raj-915150157/" className="hover:underline flex items-center">
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                </a>
                <a href="https://github.com/gauravraj2601" className="hover:underline flex items-center">
                    <FaGithub className="mr-2" />
                    GitHub
                </a>
            </div>
        </header>
        <div className="flex justify-center">
            <Image
                src={profilePic}
                alt="Gaurav Raj"
                width={200}
                height={200}
                className="rounded-full relative top-[-80px] sm:top-[-100px] md:top-[-120px] lg:top-[-140px]"
                style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
        </div>
      </>
    );
};

export default Header;
