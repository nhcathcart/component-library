"use client"
import { ReactElement, useState } from "react";
import CodeBlock from "./CodeBlock";

import styles from "./ReactSnippet.module.css";

export function ReactSnippet(props: {
  title: string;
  description: string;
  example: ReactElement;
  TSX: string;
  CSS: string;
}) {
  const { title, description, example, TSX, CSS } = props;
  const [snippetView, setSnippetView] = useState({
    TSX: true,
    CSS: false,
  });
  function chooseView(choice: "TSX" | "CSS") {
    const newSnippetView = Object.assign({}, snippetView);
    if (choice === "TSX") {
      newSnippetView.TSX = true;
      newSnippetView.CSS = false;
      setSnippetView(newSnippetView);
    } else {
      newSnippetView.TSX = false;
      newSnippetView.CSS = true;
      setSnippetView(newSnippetView);
    }
  }
  const content = snippetView.TSX ? (
    <CodeBlock language={"javascript"}>{TSX}</CodeBlock>
  ) : (
    <CodeBlock language={"css"}>{CSS}</CodeBlock>
  );

  return (
    <div className={styles.snippetContainer}>
      <h1 className={styles.snippetTitle} id={title}>
        {title}
      </h1>
      <div className={styles.snippetDescription}>
        <p>{description}</p>
      </div>
      <div className={styles.snippetExample}>{example}</div>
      <div className={styles.snippetButtonContainer}>
        <button className={styles.snippetButton} onClick={() => chooseView("TSX")}>
          TSX
        </button>
        <button className={styles.snippetButton} onClick={() => chooseView("CSS")}>
          CSS
        </button>
      </div>
      <div className={styles.snippetCodeblock}>{content}</div>
    </div>
  );
}
