"use client";
import { ReactElement, ReactNode, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"; // Import motion and AnimatePresence
import styles from "./Navbar.module.css";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [viewSidebar, setViewSidebar] = useState(true);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.navbar}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleContainerText}>Components</h2>
          <button
            className={styles.hamburgerMenuButton}
            onClick={() => {
              setViewSidebar(!viewSidebar);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={styles.hamburgerMenuButton}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <motion.div
        layout // Apply layout to animate
        className={styles.sideBarAndContentContainer}
        initial={{ opacity: 0 }} // Set initial opacity to 0
        animate={{ opacity: 1 }} // Animate opacity to 1
        exit={{ opacity: 0 }} // Set exit opacity to 0
        transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
      >
        <AnimatePresence>
          {viewSidebar && (
            <motion.div
              layout
              className={styles.sidebar}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            >
              <NavButton
                  title="navbars"
                  onClick={() => {}}
                  childButtons={[{ title: "A Navbar", onClick: () => {} }]}
                />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          layout // Apply layout to animate
          className={styles.contentContainer}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

interface props {
  title: string;
  onClick: Function;
  childButtons: { title: string; onClick: Function }[];
}

function NavButton({ title, onClick, childButtons }: props) {
  const [showChildren, setShowChildren] = useState(false);

  if (!childButtons) {
    return <button onClick={() => onClick()}>{title}</button>;
  }

  const childArray = childButtons.map((child) => {
    return (
      <button
        key={child.title}
        onClick={() => child.onClick()}
        className={styles.navButton}
      >
        {child.title}
      </button>
    );
  });

  return (
    <>
      <button
        onClick={() => {
          onClick();
          setShowChildren(!showChildren);
        }}
        className={styles.navButton}
      >
        {title}
      </button>
      {showChildren ? (
        <div className={styles.childButtonContainer}>{childArray}</div>
      ) : null}
    </>
  );
}
