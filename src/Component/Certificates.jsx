import CertificateBox from "./CertificateBox";
import { GrCertificate } from "react-icons/gr";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CompScreen from "../Layouts/CompScreen";
import Title from "./Title";

const SelectedCertificate = () => {
  const data = [
    {
      id: 1,
      img: "./certificates/Live the code 2.0.png",
      title: "Live The Code 2.0",
      des: "Participated in Live The Code 2.0 hackathon, built an awesome project, learned a lot!",
    },
    {
      id: 2,
      img: "./certificates/Hack Unicorn Hackathon.png",
      title: "Hack Unicorn",
      des: "Participated in Hack Unicorn hackathon, built an awesome project, learned a lot!",
    },
    {
      id: 3,
      img: "./certificates/Xylem.png",
      title: "Xylem 2023",
      des: "Participated in Xylem 2023 hackathon, built an awesome project, learned a lot!",
    },
    {
      id: 4,
      img: "./certificates/Hack3.0.jpg",
      title: "Hack 3.0",
      des: "Participated in Hack 3.0 hackathon, built an awesome project, learned a lot!",
    },
    {
      id: 5,
      img: "./certificates/ranga.jpg",
      title: "Java Ranga",
      des: "Completed the Java course by Ranga, and created several impressive projects.",
    },
    {
      id: 6,
      img: "./certificates/mlsa.png",
      title: "Microsoft Learn",
      des: "Completed the Microsoft Learn course, and created several impressive projects.",
    },
    {
      id: 7,
      img: "./certificates/MAIT.jpg",
      title: "Pulse MAIT",
      des: "Participated in Pulse MAIT hackathon, built an awesome project, learned a lot!",
    },
    {
      id: 8,
      img: "./certificates/java-tim.jpg",
      title: "Java Tim",
      des: "Completed the Java course by Tim Buchalka, and created several impressive projects.",
    },
    {
      id: 9,
      img: "./certificates/ideate.jpg",
      title: "Ideate BVP",
      des: "Participated in Ideate BVP hackathon, built an awesome project, and won 3rd prize!",
    },
    {
      id: 10,
      img: "./certificates/devtown.png",
      title: "Devtown",
      des: "Completed the Devtown course, learned a lot, and created several impressive projects.",
    },
    {
      id: 11,
      img: "../certificates/development-student-club.png",
      title: "Google Developer",
      des: "Completed the Google Developer course, and created several impressive projects.",
    },
    {
      id: 12,
      img: "./certificates/codegeeks.png",
      title: "Code Geeks",
      des: "Participated in Code Geeks hackathon, built an awesome project, learned a lot!",
    },
  ];

  const S1 = 1;
  const E1 = 3;
  const S2 = 4;
  const E2 = 6;
  const S3 = 7;
  const E3 = 9;
  const S4 = 10;
  const E4 = 12;

  const startIndex = (S1) => {
    return data.findIndex((item) => item.id === S1);
  };
  const endIndex = (E1) => {
    return data.findIndex((item) => item.id === E1);
  };

  const D1 = data.slice(startIndex(S1), endIndex(E1) + 1);
  const D2 = data.slice(startIndex(S2), endIndex(E2) + 1);
  const D3 = data.slice(startIndex(S3), endIndex(E3) + 1);
  const D4 = data.slice(startIndex(S4), endIndex(E4) + 1);

  const [vis, setVis] = useState(false);
  function handlevis() {
    setVis((prev) => !prev);
  }
  return (
    <CompScreen>
      <Title title="Certificate" icon={<GrCertificate />} />
      <div className=" md:flex flex-col items-center">
        <div className=" flex-col flex md:gap-6 gap-4 mt-4">
          <div className=" flex md:flex-row items-center flex-col gap-4">
            {D1.map((cert) => (
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
                  <div className=" flex md:flex-row flex-col items-center gap-4">
                    {D2.map((cert) => (
                      <div className="basis-1/3" key={cert.id}>
                        <CertificateBox
                          title={cert.title}
                          img={cert.img}
                          des={cert.des}
                        />
                      </div>
                    ))}
                  </div>
                  <div className=" flex md:flex-row flex-col items-center gap-4">
                    {D3.map((cert) => (
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
                    {D4.map((cert) => (
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
      </div>
      <div className="flex justify-center mt-4 font-sans">
        <div onClick={handlevis}>
          <motion.div
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.85 }}
            whileHover={{
              scale: 1.07,
            }}
            className="px-2 py-1.5 cursor-pointer dark:shadow-none dark:border-none hover:bg-gray-200 dark:hover:bg-white/20 border-2 border-gray-200 shadow-md shadow-gray-300 font-medium text-black dark:text-white dark:bg-white/30 w-fit rounded-md"
          >
            {vis ? "show less" : "show more"}
          </motion.div>
        </div>
      </div>{" "}
    </CompScreen>
  );
};

export default SelectedCertificate;
