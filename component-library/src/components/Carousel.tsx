/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "./Carousel.module.css";
import { useState, useReducer } from "react";

interface Props {
  images: string[];
}
export default function Carousel({ images }: Props) {
  
  const [direction, setDirection] = useState('left');

  const [activeIndex, setActiveIndex] = useState(0);
  
  const currImage = images[activeIndex];
  const imagesLength = images.length;
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      
      transition: {
        duration: 1,
      },
    },
  };

  async function handleRightClick() {
    let newIndex = activeIndex + 1;
    if (newIndex >= imagesLength) return;
    setDirection("right");
    setActiveIndex(newIndex);
    return;
  }

  function handleLeftClick() {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) return;
    setDirection("left")
    setActiveIndex(newIndex);
    return;
  }
  return (
    <div className={styles.carouselContainer}>
      <motion.div className={styles.btnImgContainer} layout>
        <div className={styles.btnContainer}>
          <button
            className={styles.carouselBtn}
            onClick={() => handleLeftClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              height="2rem"
              width="2rem"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          <motion.img
            key={`carouselImage-${activeIndex}`}
            src={currImage}
            alt={`Couldn't get the image`}
            className={styles.img}
            variants={slideVariants}
            initial={
              direction === "right" ? slideVariants.hiddenRight : slideVariants.hiddenLeft
            }
            animate={slideVariants.visible}
            exit={slideVariants.exit}
          />
        </AnimatePresence>

        <div className={styles.btnContainer}>
          <button
            className={styles.carouselBtn}
            onClick={() => handleRightClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              height="2rem"
              width="2rem"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
