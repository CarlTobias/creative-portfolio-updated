"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "./utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (current < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md pr-5 pl-5 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </a>
      ))}
    </motion.div>
  );
};
