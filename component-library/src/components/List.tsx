import React, { ReactNode, useState } from "react";
import { AnimatePresence, useIsPresent, motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import styles from "./List.module.css";

export default function List() {
  const [list, setList] = useState<{ id: string; item: React.ReactNode }[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  function addToList(item: React.ReactNode) {
    const newItem = {
      id: uuid(),
      item: item,
    };
    setList((prevList) => [...prevList, newItem]);
    setNewItem("");
  }
  function removeFromList(indexToRemove: number) {
    const newList = [...list];
    newList.splice(indexToRemove, 1);
    setList(newList);
    return;
  }

  const variants = {
    enter: () => {
      return {
        y: -40,
        opacity: 0,
        transition: { duration: 0.4 },
      };
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: () => {
      return {
        y: -40,
        opacity: 0,

        transition: { duration: 0.4 },
      };
    },
  };

  const listComps = list.map(({ id, item }, index) => {
    return (
        <ListItem key={id}id={id} item={item} index={index} removeFromList={removeFromList}/>
    );
  });

  return (
    <motion.div className={styles.listContainer} layout>
      <motion.div className={styles.newEntryContainer} layout>
        <input
          className={styles.listInput}
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => addToList(newItem)} className={styles.submitButton}>submit</button>
      </motion.div>
      <motion.div layout>
        
          <AnimatePresence>{listComps}</AnimatePresence>
        
      </motion.div>
    </motion.div>
  );
}
const variants = {
    enter: () => {
      return {
        y: -40,
        opacity: 0,
        transition: { duration: 0.2 },
      };
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, type: "linear" },
    },
    exit: () => {
      return {
        y: -40,
        opacity: 0,

        transition: { duration: 0.2 },
      };
    },
  };
interface ItemProps{
    id: string;
    item: ReactNode;
    index: number;
    removeFromList: Function;
}
function ListItem ({id, item, index, removeFromList} : ItemProps){
    const isPresent = useIsPresent();

    return (
        <motion.div
          layout
          key={id}
          className={styles.listItem}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{position: isPresent? 'static' : "absolute"}}
        >
          {item}
          <button
            className={styles.closeButton}
            onClick={() => {
              removeFromList(index);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#ccc"
              className={styles.closeButtonIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </motion.div>
      );
}