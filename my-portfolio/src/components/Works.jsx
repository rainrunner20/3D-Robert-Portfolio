import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

function ProjectCard({ index, name, description, tags, source_code_link }) {
  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.12, 0.6)}
      className="flex h-full min-h-[245px] flex-col rounded-2xl border border-white/10 bg-tertiary p-6 shadow-lg"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8cddd7]">
        Reproducible project
      </p>
      <h3 className="mt-3 text-2xl font-bold text-white">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-secondary">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {tags.map((tag) => (
          <span key={tag.name} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white">
            {tag.name}
          </span>
        ))}
      </div>
      <a
        className="mt-6 inline-flex w-fit rounded-lg bg-[#8cddd7] px-4 py-2 font-semibold text-[#0c1e28] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View repository
        <span className="sr-only"> for {name} (opens in a new tab)</span>
      </a>
    </motion.article>
  );
}

function Works() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected engineering work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <p className="mt-4 max-w-3xl text-[17px] leading-8 text-secondary">
        These repositories show actual code, tests and design decisions. Each README
        separates verified features from roadmap items and external services.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
}
export default SectionWrapper(Works, "");
