import CertificateBox from "./CertificateBox";
import { GrCertificate } from "react-icons/gr";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SelectedCertificate = () => {
  const data = [
    {
      id: 1,
      img: "./certificates/java-tim.jpg",
      title: "TITLE1",
      des: "this is a description",
    },
    {
      id: 2,
      img: "./certificates/ideate.jpg",
      title: "TITLE2",
      des: "this is a description",
    },
    {
      id: 3,
      img: "./certificates/Hack3.0.jpg",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 4,
      img: "./certificates/Xylem.png",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 5,
      img: "./certificates/ranga.jpg",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 6,
      img: "./certificates/mlsa.png",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 7,
      img: "./certificates/MAIT.jpg",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 8,
      img: "./certificates/Live the code 2.0.png",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 9,
      img: "../certificates/Hack Unicorn Hackathon.png",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 10,
      img: "./certificates/devtown.png",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 11,
      img: "../certificates/development-student-club.png",
      title: "TITLE3",
      des: "this is a description",
    },
    {
      id: 12,
      img: "./certificates/codegeeks.png",
      title: "TITLE3",
      des: "this is a description",
    },
  ];

  const startId = 1;
  const endId = 3;

  const startIndex = data.findIndex((item) => item.id === startId);
  const endIndex = data.findIndex((item) => item.id === endId);

  const slicedData = data.slice(startIndex, endIndex + 1);

  const [vis, setVis] = useState(false);
  function handlevis() {
    setVis((prev) => !prev);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }} // Start with 0 opacity and slightly above the final position
      animate={{ opacity: 1, y: 0 }} // Fade in and move down to the original position
      transition={{ duration: 0.6 }} // Duration of the animation
    >
      <div className=" mt-7 md:px-6 px-3">
        <div className=" font-bricolage flex items-center gap-1 text-2xl font-semibold">
          Certificates
          <GrCertificate />.
        </div>
        <div className=" md:flex flex-col items-center">
          <div className=" flex-col flex md:gap-6 gap-4 mt-4">
            <div className=" flex md:flex-row flex-col gap-4">
              {slicedData.map((cert) => (
                <div className="basis-1/3" key={cert.id}>
                  <CertificateBox
                    title={cert.title}
                    img={cert.img}
                    des={cert.des}
                  />
                </div>
              ))}
            </div>
            <AnimatePresence>
              {vis && (
                <motion.div
                  initial={{ opacity: 0, y: -40 }} // Start with 0 opacity and slightly above the final position
                  animate={{ opacity: 1, y: 0 }} // Fade in and move down to the original position
                  transition={{ duration: 0.4 }} // Duration of the animation
                  exit={{ opacity: 0, y: -40 }}
                >
                  <div className=" flex-col flex md:gap-6 gap-4 ">
                    <div className=" flex md:flex-row flex-col gap-4">
                      {slicedData.map((cert) => (
                        <div className="basis-1/3" key={cert.id}>
                          <CertificateBox
                            title={cert.title}
                            img={cert.img}
                            des={cert.des}
                          />
                        </div>
                      ))}
                    </div>
                    <div className=" flex md:flex-row flex-col gap-4">
                      {slicedData.map((cert) => (
                        <div className="basis-1/3" key={cert.id}>
                          <CertificateBox
                            title={cert.title}
                            img={cert.img}
                            des={cert.des}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-4">
            <motion.div
              whileTap={{ scale: 0.85 }}
              onClick={handlevis}
              whileHover={{
                scale: 1.07,
              }}
              className="px-2 py-1.5 cursor-pointer dark:shadow-none dark:border-none hover:bg-gray-200 dark:hover:bg-white/20 border-2 border-gray-200 shadow-md shadow-gray-300 font-semibold text-black dark:text-white dark:bg-white/30 w-fit rounded-md"
            >
              {vis ? "show less" : "show more"}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SelectedCertificate;
