import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "../../motion/variants";

const line1 = "Clean code.".split(" ");
const line2 = "Beautiful experiences.".split(" ");

const wordVariant: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col justify-center px-6 md:px-8 pt-24 relative"
    >
      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8 md:mb-10 font-body text-sm">
  <span className="text-ink">Imrane Bhihi</span>
  <span className="text-ink/30">/</span>
  <span className="text-ink/50">Frontend Developer</span>
  <span className="text-ink/30">/</span>
  <span className="text-ink/50">Based in Morocco</span>
</motion.div>

      <h1 className="font-display font-bold text-ink text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight flex flex-wrap gap-x-4">
        {line1.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block pb-1">
            <motion.span variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <h1 className="font-display font-bold text-ink text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight flex flex-wrap gap-x-4">
        {line2.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block pb-1">
            <motion.span variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.a
        variants={fadeUp}
        href="#work"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="inline-block mt-8 md:mt-10 w-fit border-b border-accent text-accent font-body"
      >
        View my work
      </motion.a>
    </motion.section>
  );
}