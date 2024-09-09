import { Accordion } from "flowbite-react";
import ScrollAnimation from "react-animate-on-scroll";

const Hobbies = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Soft Skills and Interests</h2>
        
        {/* Flowbite Accordion */}
        <Accordion collapseAll={true}>
          {/* Soft Skills Section */}
          <Accordion.Panel>
            <Accordion.Title className="w-full h-12 pl-5 pr-5 bg-gray-100 text-gray-900" >Soft Skills</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 p-2 font-bold text-gray-500 dark:text-gray-400 ">
                Problem Solving | Teamwork | Time Management | Adaptability
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          

          {/* Interests Section */}
          <Accordion.Panel>
            <Accordion.Title  className="w-full h-12 pl-5 pr-5 bg-gray-100 text-gray-900"  >Interests</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 p-2 font-bold text-gray-500 dark:text-gray-400">
                Travelling | Coding | Sports
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </section>
    </ScrollAnimation>
  );
};

export default Hobbies;
