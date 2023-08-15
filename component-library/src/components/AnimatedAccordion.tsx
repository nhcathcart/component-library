"use client";
import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedAccordion.module.css";

export interface Props {
  items: AccItem[];
}
export interface AccItem {
  title: string;
  body: ReactNode;
}
export default function Accordion({ items }: Props) {
  const itemList = items.map((item, index) => {
    return (
      <AccordionItem
        title={item.title}
        body={item.body}
        key={`${item.title}-${index}`}
      />
    ); //Use whatever you like for the key value.
  });
  return <div className={styles.accordionContainer}>{itemList}</div>;
}

function AccordionItem({ title, body }: AccItem) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => setExpanded(!expanded);

  return (
    <div className={styles.accordionItemContainer}>
      <button className={styles.accordionButton} onClick={() => handleClick()} style={{backgroundColor: expanded? "#f1787e" : "#fff"}}>
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
        transition={{ type: "linear", duration: 0.2 }}
      >
        

        {body}
      </motion.div>
    </div>
  );
}
