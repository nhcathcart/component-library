import styles from "./Select.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  choices: string[];
}
export default function Select({ choices }: Props) {
  const [selected, setSelected] = useState("Choose one");
  const [expanded, setExpanded] = useState(false);
  const choiceList = choices.map((choice) => {
    return (
      <button
        key={choice}
        className={styles.selectOption}
        onClick={() => {
          setSelected(choice);
          setExpanded(false);
        }}
      >
        {choice}
      </button>
    );
  });
  return (
    <div className={styles.selectContainer}>
      <button
        className={styles.selectDisplay}
        onClick={() => setExpanded(!expanded)}
      >
        {selected}
        <motion.svg
          className={styles.expandArrow}
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
      </button>
      <motion.div
        className={styles.choicesContainer}
        initial={{
          height: expanded ? "auto" : "0px",
        }}
        animate={{
          height: expanded ? "auto" : "0px",
        }}
        transition={{ type: "linear" }}
      >
        {choiceList}
      </motion.div>
    </div>
  );
}
