import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../motion/variants";

const steps = [
  {
    number: "1",
    title: "Discover",
    description:
      "I start by understanding your goals, users, and constraints before writing any code.",
  },
  {
    number: "2",
    title: "Build",
    description:
      "I design and develop in focused iterations, sharing progress regularly along the way.",
  },
  {
    number: "3",
    title: "Ship & Support",
    description:
      "I deploy, test thoroughly, and stay available for fixes and tweaks after launch.",
  },
];

export default function Process() {
  return (
    <motion.section
      id="process"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 md:px-8 py-24 md:py-32 border-t border-hairline"
    >
      <motion.h2
        variants={fadeUp}
        className="font-display font-bold text-3xl md:text-4xl text-ink mb-16 md:mb-20"
      >
        How I Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            className={`relative py-10 md:py-0 md:px-8 ${
              i !== 0 ? "border-t md:border-t-0 md:border-l border-hairline" : ""
            }`}
          >
            <span className="font-display font-bold text-6xl md:text-7xl text-ink/10 leading-none block mb-4">
              {step.number}
            </span>
            <h3 className="font-display font-bold text-xl text-ink mb-3">
              {step.title}
            </h3>
            <p className="font-body text-ink/70 leading-relaxed max-w-xs">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}