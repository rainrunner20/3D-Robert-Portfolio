import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

function Contact() {
  return (
    <div className="mt-12 flex flex-col-reverse gap-10 overflow-hidden xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <p className="mt-7 max-w-lg text-[17px] leading-8 text-secondary">
          Interested in the engineering work or want to talk about data,
          AI evaluation or smart cities? You can reach me through email or LinkedIn.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            className="rounded-xl bg-[#8cddd7] px-6 py-4 font-semibold text-[#0c1e28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="mailto:robertle982@gmail.com"
          >Email me</a>
          <a
            className="rounded-xl border border-white/30 px-6 py-4 font-semibold text-white hover:bg-white/10"
            href="https://www.linkedin.com/in/robert-le982/"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn profile</a>
        </div>
        <p className="mt-8 text-sm leading-6 text-secondary">
          There is no contact-form service or personal-message storage on this site.
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] flex-1 md:h-[500px] xl:h-auto"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
}
export default SectionWrapper(Contact, "contact");
