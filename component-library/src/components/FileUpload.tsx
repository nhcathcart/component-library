"use client"
import React, { ChangeEvent, useState } from "react";
import styles from "./FileUpload.module.css";

export default function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  function handleFileInputChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
  
    if (files !== null) {
      const selectedFiles = Array.from(files);
      setSelectedFiles(selectedFiles);
    }
  }

  return (
    <div className={styles.fileUploadContainer}>
      <label htmlFor="fileInput" className={styles.customFileInput}>
        Choose file
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id="fileInput"
        multiple={true}
        onChange={handleFileInputChange}
      />
      <div className={styles.fileListContainer}>
        <h4>Selected Files:</h4>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
