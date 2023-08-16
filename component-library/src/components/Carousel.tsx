/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import styles from "./Carousel.module.css";
import { useState, useReducer } from "react";

interface Props {
  images: string[];
}
type NullableString = null | "left" | "right";
export default function Carousel({ images }: Props) {
  //   const [direction, setDirection] = useState('left');

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<NullableString>("right");

  const currImage = images[activeIndex];
  const imagesLength = images.length;
  const atEnd = activeIndex === imagesLength - 1;
  const atBeginning = activeIndex === 0;
  const variants = {
    enter: (direction: string | null) => {
      return {
        x: direction === "right" ? "50%" : "-50%",
        opacity: 0,
        transition: { duration: 0.4 },
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
    exit: (direction: string | null) => {
      return {
        x: direction === "right" ? "-50%" : "50%",
        opacity: 0,
        scale: 0.6,
        transition: { duration: 0.4 },
      };
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
    setDirection("left");
    setActiveIndex(newIndex);

    return;
  }
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselInner}>
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
                stroke={atBeginning ? "currColor" : "#f4f4f4"}
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
          <div className={styles.imgContainer}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={`carouselImage-${activeIndex}`}
                custom={direction}
                variants={variants}
                src={currImage}
                alt={`Couldn't get the image`}
                className={styles.img}
                initial={"enter"}
                animate={"center"}
                exit={"exit"}
              />
            </AnimatePresence>
          </div>

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
                stroke={atEnd ? "currColor" : "#f4f4f4"}
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
    </div>
  );
}
