"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [viewSidebar, setViewSidebar] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState("250px");
  const router = useRouter();

  useEffect(() => {
    function handleResize() {
      const windowSize = window.innerWidth;
      if (windowSize > 764) {
        setSidebarWidth("250px");
      } else {
        setSidebarWidth(windowSize.toString() + "px");
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleClick() {
    if (sidebarWidth === "250px") return;
    setTimeout(() => setViewSidebar(false), 300);
  }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.navbar}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleContainerText}>Library</h2>
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
      <div className={styles.sideBarAndContentContainer}>
        <motion.div
          className={styles.sidebar}
          initial={{
            width: viewSidebar ? sidebarWidth : "0px",
          }}
          animate={{
            width: viewSidebar ? sidebarWidth : "0px",
          }}
          transition={{ type: "linear", duration: 0.3 }}
        >
          <NavButton
            title="accordion"
            onClick={() => {
              router.push("/accordion");
              handleClick();
            }}
          />
          <NavButton
            title="modal"
            onClick={() => {
              router.push("/modal");
              handleClick();
            }}
          />
          <NavButton
            title="login-form"
            onClick={() => {
              router.push("/login-form");
              handleClick();
            }}
          />
          <NavButton
            title="new-user-form"
            onClick={() => {
              router.push("/new-user-form");
              handleClick();
            }}
          />
          <NavButton
            title="carousel"
            onClick={() => {
              router.push("/carousel");
              handleClick();
            }}
          />
          <NavButton
            title="select"
            onClick={() => {
              router.push("/select");
              handleClick();
            }}
          />
          <NavButton
            title="list"
            onClick={() => {
              router.push("/list");
              handleClick();
            }}
          />
          <NavButton
            title="file explorer"
            onClick={() => {
              router.push("/file-explorer");
              handleClick();
            }}
          />
          <NavButton
            title="cards"
            onClick={() => {
              router.push("/cards");
              handleClick();
            }}
          />
          <NavButton
            title="file-upload"
            onClick={() => {
              router.push("/file-upload");
              handleClick();
            }}
          />
          <NavButton
            title="tabs"
            onClick={() => {}}
            childButtons={[
              {
                title: "paper-tabs",
                onClick: () => {
                  router.push("/paper-tabs");
                  handleClick();
                },
              },
              {
                title: "slider-tabs",
                onClick: () => {
                  router.push("/slider-tabs");
                  handleClick();
                },
              },
            ]}
          />
          
        </motion.div>
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  );
}

interface props {
  title: string;
  onClick: Function;
  childButtons?: { title: string; onClick: Function }[];
}

function NavButton({ title, onClick, childButtons }: props) {
  const [showChildren, setShowChildren] = useState(false);

  if (!childButtons) {
    return (
      <button className={styles.navButton} onClick={() => onClick()}>
        {title}
      </button>
    );
  }

  const childArray = childButtons.map((child) => {
    return (
      <button
        key={child.title}
        onClick={() => child.onClick()}
        className={styles.childButton}
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
      
        <motion.div
          className={styles.childButtonContainer}
          initial={{
            height: showChildren ? "auto" : "0px",
          }}
          animate={{
            height: showChildren ? "auto" : "0px",
          }}
          transition={{ type: "linear", duration: 0.3 }}
        >
          {childArray}
        </motion.div>
      
    </>
  );
}
