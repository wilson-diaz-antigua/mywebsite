import { motion } from "framer-motion";

export const Typewriter = ({
  text,
  delay = 0.3,
  duration = 0.1,
  className = "",
}) => {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: duration,
      },
    },
  };
  const cursorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 1,
        ease: "linear",
      },
    },
  };

  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {characters.map((char, index) => (
          <motion.span key={index} variants={characterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span variants={cursorVariants}>|</motion.span>
      </motion.div>
    </div>
  );
};
