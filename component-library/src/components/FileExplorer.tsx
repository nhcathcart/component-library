"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./FileExplorer.module.css";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { File } from "buffer";

export interface FileSystem {
  name: string;
  isDirectory: boolean;
  children?: FileSystem[];
}
interface Props {
  files: FileSystem;
  expanded: boolean;
}
export default function FileExplorerContainer({ files, expanded }: Props) {
  return (
    <div className={styles.fileExplorerContainer}>
      <FileExplorer files={files} expanded={expanded} />
    </div>
  );
}

export function FileExplorer({ files, expanded }: Props) {
  const [expand, setExpand] = useState(expanded);

  return (
    <>
      <button
        className={expand ?  styles.fileExpBtnExpanded : styles.fileExpBtn}
        onClick={() => setExpand(!expand)}
      >
        <div className={styles.svgContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth=".5"
            stroke="currentColor"
            width="1.5rem"
            height="1.5rem"
            initial={false}
            animate={{
              rotate: expand ? 90 : 0,
              //   color: expand ? "#f1787e" : "black",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </motion.svg>
        </div>
        <div>{files.name}</div>
      </button>

      <motion.div className={expand ? styles.childrenContainer : styles.hidden}>
        {files.children?.map((child) => {
          if (child.isDirectory) {
            return <FileExplorer key={uuid()} files={child} expanded={false} />;
          } else {
            return (
              <div key={uuid()} className={styles.file}>
                {child.name}
              </div>
            );
          }
        })}
      </motion.div>
    </>
  );
}
