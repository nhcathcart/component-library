import { ReactElement, ReactNode, useState } from "react";
import styles from "./Modal.module.css";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalButton(props: {
  children: ReactElement;
  isDefault: boolean;
  text: string;
  cssClass?: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const { isDefault, cssClass, text } = props;

  return (
    <>
      <button
        className={isDefault ? styles.modalButton : cssClass}
        onClick={() => setShowModal(true)}
      >
        {text}
      </button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        {props.children}
      </Modal>
    </>
  );
}

interface props {
  isVisible: boolean;
  onClose: Function;
  children: ReactElement;
}

export function Modal({ isVisible, onClose, children }: props) {
  
  function handleClose(e: any) {
    if (e.target.id === "modal-wrapper") {
      onClose();
    }
  }

  const childWithProps = React.cloneElement(children, { onClose: onClose });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
        className={styles.modalWrapper}
        id={styles.modalWrapper}
        onClick={(e) => handleClose(e)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: .2}}
      >
        <motion.div
          className={styles.modalContent}
        >
          <div className={styles.modalCloseContainer}>
            <button
              className={styles.closeButton}
              onClick={() => {
                onClose();
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
          </div>
          {childWithProps}
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
