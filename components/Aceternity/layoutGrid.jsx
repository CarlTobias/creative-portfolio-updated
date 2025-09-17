"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "./utils";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      className={cn("absolute inset-0 w-full h-full object-contain rounded-xl")}
      alt="thumbnail"
    />
  );
};
