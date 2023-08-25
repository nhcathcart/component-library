"use client";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import styles from "./AccordionOne.module.css";

export interface Props {
  items: AccItemOuter[];
}
export interface AccItemOuter {
  title: string;
  body: ReactNode;
}
export interface AccItem {
  title: string;
  body: ReactNode;
  index: number;
  expanded: boolean;
  expandFunc: Function;
}
export default function AccordionOne({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);
  function expandFunc (index: number) {
    if (index === activeIndex) return setActiveIndex(-1)
    return setActiveIndex(index)
  }
  const itemList = items.map((item, index) => {
    return (
      <AccordionItem
        title={item.title}
        body={item.body}
        key={`${item.title}-${index}`}
        index={index}
        expanded={index === activeIndex}
        expandFunc = {expandFunc}
      />
    ); //Use whatever you like for the key value.
  });
  return <div className={styles.accordionContainer}>{itemList}</div>;
}

function AccordionItem({ title, body, index, expanded, expandFunc }: AccItem) {
  

  return (
    <div className={styles.accordionItemContainer}>
      <button
        className={styles.accordionButton}
        onClick={() => expandFunc(index)}
        style={{
          backgroundColor: expanded ? "#f1787e" : "#fff",
          color: expanded ? "white" : "black",
        }}
      >
        <div>{title}</div>
        <div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth=".5"
            stroke="currentColor"
            width="1.8rem"
            height="1.8rem"
            animate={{
              rotate: expanded ? 180 : 0,
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </motion.svg>
        </div>
      </button>
      <motion.div
        className={styles.accordionBody}
        initial={{
          height: expanded ? "auto" : "0px",
        }}
        animate={{
          height: expanded ? "auto" : "0px",
        }}
        transition={{ type: "linear"}}
      >
        {body}
      </motion.div>
    </div>
  );
}