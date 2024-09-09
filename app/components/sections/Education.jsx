import { useState } from "react";
import { Modal, Button } from "flowbite-react";

const Education = () => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalId) => {
    setOpenModal(modalId);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {/* Full Stack Web Development */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-[#b4b0b0] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2022 - Present
          </time>
          <h3
            onClick={() => handleOpenModal("fullStack")}
            className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-white hover:scale-110 duration-300 ease-in-out"
          >
            Full Stack Web Development (Full Time)
          </h3>
          <p onClick={()=>handleOpenModal("map-fullStack")} className="text-base font-normal text-gray-500 dark:text-gray-400 hover:scale-110 duration-300 ease-in-out cursor-pointer ">
            Masai School, Bengaluru
          </p>
        </li>

        {/* Modal for Full Stack Web Development */}
        <Modal
          show={openModal === "fullStack"}
          onClose={handleCloseModal}
          size="md"
          className=" w-[50%] h-[450px] m-auto"
        >
          <Modal.Header className="mt-5 p-2 font-extrabold text-[#333a4d]">
            Full Stack Web Development (Full Time)
            </Modal.Header>
          <Modal.Body>
            <div className="space-y-2">
              <p>
                <strong>Time Period:</strong> January 2022 - Present
              </p>
              <p>
                <strong>Institution:</strong> Masai School, Bengaluru
              </p>
              <p>
                A rigorous full-time course focusing on both front-end and
                back-end web development technologies such as React, Node.js,
                MongoDB, etc.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-[#333a4d]" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
         {/*Map Modal for Full Stack Web Development*/}
         <Modal
          show={openModal === "map-fullStack"}
          onClose={handleCloseModal}
          size="sm"
          className=" w-[95%] sm:w-[80%] md:w-[70%] m-auto"

        >
          <Modal.Header className="pt-4 pl-4 pr-4"> Masai School</Modal.Header>
          <Modal.Body>
            <div className="">
              <p>
                <strong>Address:</strong>Masai School, 5th Main Rd, Sector 6, HSR Layout Bengaluru, Karnataka - 560068
              </p>
              <div className="w-[95%] sm:w-[80%] md:w-[70%] h-[450px] mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.773243134878!2d77.6219700444146!3d12.91136509837362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1525f3226a65%3A0x9d0c72b3bd41f2ef!2sMasai%20School!5e0!3m2!1sen!2sin!4v1725850801485!5m2!1sen!2sin"
          width="110%"
          height="110%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-[#333a4d]" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>


        {/* Bachelor of Commerce */}
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-[#b4b0b0] rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2018 - December 2021
          </time>
          <h3
            onClick={() => handleOpenModal("commerce")}
            className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-white
              hover:scale-110 duration-300 ease-in-out
            "
          >
            Bachelor of Commerce
          </h3>
          <p onClick={()=>handleOpenModal("map-commerce")} className="text-base cursor-pointer font-normal text-gray-500 dark:text-gray-400 hover:text-black hover:scale-110 duration-300 ease-in-out">
            Munshi Singh College, Motihari
          </p>
        </li>

        {/* Modal for Bachelor of Commerce */}
        <Modal
          show={openModal === "commerce"}
          onClose={handleCloseModal}
          size="sm"
          className=" w-[50%] h-[450px] m-auto"

        >
          <Modal.Header className="p-2">Bachelor of Commerce</Modal.Header>
          <Modal.Body>
            <div className="space-y-2">
              <p>
                <strong>Time Period:</strong> August 2018 - December 2021
              </p>
              <p>
                <strong>Institution:</strong> Munshi Singh College, Motihari
              </p>
              <p>
                Completed a Bachelor of Commerce degree focusing on accounting,
                finance, and business studies.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-[#333a4d]" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
              {/*Map Modal for Bachelor of Commerce */}
        <Modal
          show={openModal === "map-commerce"}
          onClose={handleCloseModal}
          size="sm"
          className=" w-[95%] sm:w-[80%] md:w-[70%] m-auto"

        >
          <Modal.Header className="p-4">Munshi Singh College</Modal.Header>
          <Modal.Body>
            <div className="space-y-2">
              <p>
                <strong>Address:</strong>Munshi Singh College, Chandmari, Motihari, Bihar 845401
              </p>
              <div className="w-[95%] sm:w-[80%] md:w-[70%] h-[450px] mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14262.962330267861!2d84.8933843505002!3d26.656787228806596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399335a1780e946b%3A0x868bb06bf7664844!2sM%20S%20College!5e0!3m2!1sen!2sin!4v1725848814493!5m2!1sen!2sin"
          width="110%"
          height="110%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bg-[#333a4d]" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ol>
    </section>
  );
};

export default Education;
