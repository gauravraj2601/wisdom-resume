import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
const Hobbies = () => {
    return (
        <ScrollAnimation  animateIn='fadeIn' animateOnce={true} >
      <section className="mb-12">


      <h2 className="text-2xl font-bold mb-4">Soft Skills and Interests</h2>
      <div id="accordion-collapse" data-accordion="collapse">
        {/* Soft Skills Section */}
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-1"
          >
            <span>Soft Skills</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                d="M9 5L5 1 1 5"
                />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-300 bg-gray-100 text-[#172c65] font-bold dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-500 dark:text-gray-400">
              Problem Solving | Teamwork | Time Management | Adaptability
            </p>
          </div>
        </div>

        {/* Interests Section */}
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
            >
            <span>Interests</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                // stroke-linecap="round"
                // stroke-linejoin="round"
                // stroke-width="2"
                d="M9 5L5 1 1 5"
                />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div className="p-5  border border-gray-200 text-[#333a4d] bg-gray-100 font-bold dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-500 dark:text-gray-400">
              Travelling | Coding | Sports
            </p>
          </div>
        </div>
      </div>
    </section>
                </ScrollAnimation>
    );
  };
  
  export default Hobbies;
  