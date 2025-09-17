import React from "react";
import { motion } from "motion/react";
import { colorPalette } from "./colorPalette";

export function ColourfulText({ text }) {
  const [currentColors, setCurrentColors] = React.useState([]);

  React.useEffect(() => {
    const shuffled = [...colorPalette].sort(() => Math.random() - 0.5);
    setCurrentColors(shuffled);
  }, []);

  if (currentColors.length === 0) return null;

  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="inline-block whitespace-pre tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
