import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.1, 0.65)}
        className={styles.serviceCard + " rounded-[20px] p-[1px] shadow-card"}
      >
        <div className={styles.serviceCardBody + " flex min-h-[210px] flex-col items-center justify-center gap-6 rounded-[20px] px-8 py-8"}>
          <img src={icon} alt="" aria-hidden="true" className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[19px] font-bold text-white">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <div className="mt-6 max-w-4xl space-y-5 text-[17px] leading-8 text-secondary">
        <p>
          I work across software engineering, applied AI and geospatial data.
          I'm pursuing an M.S. in Computer Science at the College of Staten Island
          (CUNY), building on earlier full-stack and NYC transportation data work.
        </p>
        <p>
          I'm interested in making complex systems easier to understand and test:
          clear APIs, reproducible experiments, good visualizations and documentation
          that explains why the implementation works.
        </p>
      </div>
      <div className="mt-12 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");
