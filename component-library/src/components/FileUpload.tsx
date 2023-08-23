"use client";
import React, { ChangeEvent, useState, useRef } from "react";
import styles from "./FileUpload.module.css";
import {
  motion,
  AnimatePresence,
  useIsPresent,
} from "framer-motion";
import { v4 as uuid } from "uuid";

interface uploadedFile extends File {
  id: string;
}
export default function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<uploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null); // Create a ref for the input element

  function handleFileInputChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;

    if (files !== null) {
      const newSelectedFiles = Array.from(files).map((file) => {
        const fileWithId: any = {};
        for (const prop in file) {
          const value = (file as any)[prop];
          fileWithId[prop] = value;
        }
        fileWithId.id = uuid();
        return fileWithId;
      });

      const newFiles = [
        ...selectedFiles,
        ...newSelectedFiles,
      ] as uploadedFile[];
      setSelectedFiles(newFiles);
    }
  }

  function handleRemoveFile(index: number) {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);

    // Reset the input value to trigger the onChange event even if the same file is added again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }
  
  function handleSubmit(){
    //Handle submit clicks here. 
  }
  return (
    <motion.div className={styles.fileUploadContainer} layout>
      <motion.label
        htmlFor="fileInput"
        className={styles.customFileInput}
        layout
      >
        Choose files
      </motion.label>
      <input
        type="file"
        style={{ display: "none" }}
        id="fileInput"
        multiple={true}
        ref={fileInputRef} // Attach the ref to the input element
        onChange={handleFileInputChange}
      />
      <motion.div className={styles.fileListContainer} layout>
        <motion.h4 layout>Selected Files:</motion.h4>
        <AnimatePresence>
          {selectedFiles.map((file, index) => {
            return (
              <ListItem
                file={file}
                index={index}
                key={file.id}
                handleRemoveFile={handleRemoveFile}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
      <motion.div className={styles.submitContainer}>
        <motion.button
          className={styles.submitButton}
          layout
          onClick={() => handleSubmit()}
        >
          Submit
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

interface ListItemProps {
  file: uploadedFile;
  handleRemoveFile: Function;
  index: number;
}
function ListItem({ file, handleRemoveFile, index }: ListItemProps) {
  const isPresent = useIsPresent();
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
        opacity: 0,
        transition: { duration: 0 },
      };
    },
  };

  return (
    <motion.div
      key={file.id}
      className={styles.fileListItem}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{ position: isPresent ? "static" : "absolute" }}
      layout
    >
      {file.name}
      <button
        onClick={() => handleRemoveFile(index)}
        className={styles.closeButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
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
