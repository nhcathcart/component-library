import Prism from "prismjs";
import "./prism-css.css";
import { useEffect } from "react";

interface CodeBlockProps {
  language: string;
  children: string;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
  useEffect(() => {
    if (window !== undefined) Prism.highlightAll();
  }, [children]);

  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
