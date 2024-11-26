"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const instructions = [
  { id: 1, img: "img/tutorial/step1.gif", desc: "When it's your turn, choose a word you want to draw!" },
  { id: 2, img: "img/tutorial/step2.gif", desc: "Try to draw your choosen word! No spelling!" },
  { id: 3, img: "img/tutorial/step3.gif", desc: "Let other players try to guess your drawn word!" },
  { id: 4, img: "img/tutorial/step4.gif", desc: "When it's not your turn, try to guess what other players are drawing!" },
  { id: 5, img: "img/tutorial/step5.gif", desc: "Score the most points and be crowned the winner at the end!" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % instructions.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const variants = {
    enter: {
      x: "100%",
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  };

  return (
    <div className="relative w-full h-80 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-64"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={instructions[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover invert dark:invert-0"
          />
          <h3 className="text-center">{instructions[currentIndex].desc}</h3>
        </motion.div>
      </AnimatePresence>

      {/* Dots for indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {instructions.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-stone-500 dark:bg-gray-200" : "bg-stone-300 dark:bg-gray-600"}`}
            onClick={() => setCurrentIndex(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
