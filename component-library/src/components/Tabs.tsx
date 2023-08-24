"use client";
import { ReactNode, useState } from "react";
import styles from "./Tabs.module.css";

interface Props {
  content: Tab[];
}
interface Tab {
  title: string;
  content: ReactNode;
}
export default function Tabs({ content }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  function chooseTab(index: number) {
    return setActiveIndex(index);
  }
  const tabSize = 100 / content.length;
  
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabTopsContainer}>
        {content.map((item, index) => {
          return (
            <div
              key={`tab-${index}`}
              className={
                index === activeIndex ? styles.tabTopActive : styles.tabTop
              }
              onClick={() => chooseTab(index)}
              style={{
                width: `${tabSize}`
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className={styles.tabsContentContainer}>
        {content[activeIndex].content}
      </div>
    </div>
  );
}
