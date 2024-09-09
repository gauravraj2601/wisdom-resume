// components/sections/About.jsx
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
  return (
        <ScrollAnimation animateIn='bounceInRight' 
        animateOut='bounceOutLeft'
        animateOnce={true}
        >
    <section id="about" className="mb-12 mt-[-140px]">
      <div>

        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground">
          An Enthusiastic Web Developer, skilled in front-end Web Development.
          Knowlwdge of React,Javascript, HTML CSS, express, and MongoDB. I am actively seeking a job opportunity in a technology-driven organization to further enhance my skills and knowledge.

        </p>
      </div>
    </section>
        </ScrollAnimation>
  );
};

export default About;
