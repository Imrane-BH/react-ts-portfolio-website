import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../motion/variants";
import photo from "../../assets/images/img.jpg";

const stack = ["React", "TypeScript", "Tailwind CSS", "Vite", "Git"];

export default function About() {
  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 md:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
    >
      {/* Photo */}
      <motion.div
        variants={fadeUp}
        className="order-1 md:order-1"
      >
        <img
          src={photo}
          alt="Imrane Bhihi"
          className="w-full max-w-sm mx-auto md:mx-0 aspect-[4/5] object-cover  border border-hairline rounded-4xl shadow-2xl"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        variants={fadeUp}
        className="order-2 md:order-2 flex flex-col justify-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-6">
          About
        </h2>

        <p className="font-body text-ink/80 leading-relaxed mb-10 max-w-md">
          I'm a frontend developer focused on building clean, fast, and
          accessible interfaces. I care about the small details that make a
          website feel considered — performance, usability, and clarity —
          not just how it looks on the surface.
        </p>

        <div className="flex flex-wrap">
          {stack.map((item, i) => (
            <span
              key={item}
              className={`font-body text-sm text-ink/70 py-2 pr-4 ${
                i !== 0 ? "border-l border-hairline pl-4" : ""
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}