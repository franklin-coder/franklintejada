import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 500,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {" "}
          <span>Introduction</span>
        </p>
        <h2 className={styles.sectionHeadText}>
          {" "}
          <motion.span className="saludo">
            Overview.
          </motion.span>{" "}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text[17px] w-100 leading[30px]"
      >
        <span className="text-white">MERN</span> stack and{" "}
        <span className="text-white">C#</span> , adeptly merging expertise in
        web development with immersive gaming experiences in Unity. Seamlessly
        blending technical prowess with honed soft skills cultivated from a
        background in{" "}
        <span className="text-white">negotiations and sales.</span> Bringing a
        diverse skill set in game and web development, integrating innovative
        solutions for captivating experiences. My portfolio showcases a fusion
        of MERN's modern web capabilities and Unity's dynamic gaming potential,
        highlighting a comprehensive journey in software development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
