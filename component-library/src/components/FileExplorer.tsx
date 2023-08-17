"use client"
import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./FileExplorer.module.css";
import { motion } from "framer-motion";

export interface FileSystem {
  name: string;
  isDirectory: boolean;
  children?: FileSystem[];
}
interface Props {
  files: FileSystem;
}

export default function FileExplorer({ files }: Props) {
  const [expand, setExpand] = useState(false);
  const variants = {
    enter: {
      
        height: "0px",
        opacity: 0,
        transition: { duration: 0.4 },
      
    },
    center: () => {
        return {
          height: expand  ? "auto" : "0px",
          opacity: 1,
          transition: { duration: 0.4 },
        };
      },
    exit: {
        height: "0px",
        opacity: 0,
        transition: { duration: 0.4 },
    }
  };
  return (
    <motion.div className={styles.fileExplorerContainer} layout>
      <div className={styles.directory}>
        <button onClick={()=>setExpand(!expand)}>clickMe</button>
        {files.name}
      </div>
      <motion.div
        className={styles.childrenContainer}
        variants={variants}
        initial={"enter"}
        animate={"center"}
        exit={"exit"}
        layout
      >
      {files.children?.map((child) => {
        if (child.isDirectory) {
          return <FileExplorer key={uuid()} files={child} />;
        } else {
          return (
            <div key={uuid()} className={styles.file}>
              {child.name}
            </div>
          );
        }
      })}
      </motion.div>
    </motion.div>
  );
}
