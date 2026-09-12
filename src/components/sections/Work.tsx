import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../motion/variants";

export default function Work() {
  return (
    <motion.section
      id="work"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 md:px-8 py-24 md:py-32 border-t border-hairline"
    >
      <motion.h2
        variants={fadeUp}
        className="font-display font-bold text-3xl md:text-4xl text-ink mb-4"
      >
        Selected Work
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="font-body text-ink/60 max-w-md mb-16"
      >
        I'm currently building out my first projects — case studies will
        appear here soon.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="border-t border-b border-hairline py-16 flex flex-col items-center justify-center text-center"
      >
        <span className="font-display font-bold text-xl md:text-2xl text-ink/30 tracking-tight">
          New work coming soon.
        </span>
        <span className="font-body text-sm text-ink/40 mt-3">
          Check back shortly, or get in touch to be the first project.
        </span>
      </motion.div>
    </motion.section>
  );
}