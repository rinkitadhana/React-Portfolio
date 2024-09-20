import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

const CertificateBox = ({ title, des, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = img;

  const openModal = () => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 400);
    return () => clearTimeout(timer);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div>
        <div className="flex flex-col gap-2 items-center px-4 py-6 box-border rounded-lg  dark:bg-white/20 shadow-md shadow-gray-300 border-2 border-gray-100 dark:shadow-none dark:border-none ">
          <motion.div
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.2 }}
          >
            <img
              className="object-cover rounded cursor-pointer md:border-2"
              src={imageUrl}
              onClick={openModal}
            />
          </motion.div>
          <Modal
            openTimeoutMS={500}
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: window.innerWidth <= 768 ? "-50%" : "-20%",
                transform: "translate(-50%, -50%)",
                padding: "",
                border: "none",
                background: "none",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0)",
              },
            }}
          >
            <img
              className="object-fill"
              src={imageUrl}
              alt="Example Fullscreen"
              style={{ width: "100%", height: "auto" }}
              onClick={closeModal}
            />
          </Modal>
          <div className=" flex flex-col items-center">
            <div className=" text-xl text-center font-bold">{title}</div>
            <div className=" text-center text-sm">{des}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateBox;
