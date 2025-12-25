import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const LayoutTextFlip = ({ text, words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={`flex items-center justify-center ${className || ""}`}>
      <span className="text-4xl md:text-6xl font-bold text-white">
        {text}
      </span>
      <div className="relative inline-block ml-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWordIndex}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="inline-block text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
          >
            {words[currentWordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
