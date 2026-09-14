import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../motion/variants";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 md:px-8 py-24 md:py-32 border-t border-hairline"
    >
      <motion.h2
        variants={fadeUp}
        className="font-display font-bold text-3xl md:text-5xl text-ink mb-8 leading-tight bg-gradient-to-r from-blue-800 to-cyan-300 text-transparent bg-clip-text"
      >
        Let's build something.
      </motion.h2>

      <motion.a
        variants={fadeUp}
        href="mailto:bhihiimrane0@gmail.com"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="inline-block font-display text-2xl md:text-4xl text-accent border-b border-accent mb-12 w-fit"
      >
        bhihiimrane0@gmail.com
      </motion.a>

      <motion.div
        variants={fadeUp}
        className="flex gap-6 font-body text-sm text-ink/70"
      >
        <a
          href="https://github.com/Imrane-BH"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors hover:scale-105 transition:transform duration-300"
        >
          GitHub
        </a>
        <span className="text-hairline">|</span>
        <a
          href="https://www.linkedin.com/in/imrane-bhihi-969077395/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent transition-colors hover:scale-105 transition:transform duration-300"
        >
          LinkedIn
        </a> 
      </motion.div>
      <div className=" border-l border-blue-400 pl-3 mt-2 text-ink lg:font-bold">Contact me : 06 82 50 86 42</div>
    </motion.section>
  );
}