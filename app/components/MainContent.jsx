// components/MainContent.jsx
// import Experience from "./sections/Experience";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import Portfolio from "./sections/Portfolio";
// import References from "./sections/References";
import ContactForm from "./sections/ContactForm";
import ContactInfo from "./sections/ContactInfo";
import ScrollAnimation from 'react-animate-on-scroll';


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

      <ScrollAnimation animateIn='bounceInRight' 
        animateOut='bounceOutLeft'
        animateOnce={true}
        className="smooth-transition" >
        <div id="contact" className="w-[95%] m-auto flex-1  lg:flex justify-between items-center bg-[url('https://img.freepik.com/free-vector/blue-technical-background-1_78370-98.jpg?t=st=1725795429~exp=1725799029~hmac=c58965d902dfd73d96ac3fa5546542b0b9d86d99a269aa938baa9515fa144788&w=996')] bg-cover bg-center p-4 rounded-[20px] gap-2">
        <ContactInfo />
        <ContactForm />
        </div>
      </ScrollAnimation>
      {/* <References /> */}
    </main>
  );
};

export default MainContent;
