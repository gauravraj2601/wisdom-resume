import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import profilePic from "../Assets/ProfilePic.png";
import Image from 'next/image';

const Header = () => {
    return (
      <>
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
