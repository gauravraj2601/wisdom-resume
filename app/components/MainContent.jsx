// components/MainContent.jsx
import Experience from "./sections/Experience";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import Portfolio from "./sections/Portfolio";
import References from "./sections/References";
import ContactForm from "./sections/ContactForm";
import ContactInfo from "./sections/ContactInfo";

const MainContent = () => {
  return (
    <main className="flex-1 container mx-auto py-12 px-4 md:px-6">
      <About />
      {/* <Experience /> */}
      <div className="flex justify-between">
        <Education />
        <Skills />
      </div>
      <Hobbies />
      <Portfolio />
      <ContactInfo />
      <ContactForm />
      <References />
    </main>
  );
};

export default MainContent;
