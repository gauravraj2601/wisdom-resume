
const Education = () => {
 
    return (
      <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2022 - Present</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full Stack Web Development (Full Time)</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Masai School, Bengaluru</p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2018 - December 2021</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Commerce</h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Munshi Singh College, Motihari</p>
        </li>
      </ol>
    </section>
    
    );
  };
  
  export default Education;
  