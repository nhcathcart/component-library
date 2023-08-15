
import { ReactElement, ReactNode, useState } from "react"
import styles from "./Modal.module.css"
import React from "react";


export default function ModalButton(props: { children: ReactElement, isDefault: boolean, text: string, cssClass?: string}) {
  const [showModal, setShowModal] = useState(false);
  const { isDefault, cssClass, text } = props;

  return (
    <>
      <button className={isDefault? styles.modalButton : cssClass} onClick={() => setShowModal(true)}>
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
  if (!isVisible) return null;
  function handleClose(e: any) {
    if (e.target.id === "modal-wrapper") {
      onClose();
    }
  }

  const childWithProps = React.cloneElement(children, {onClose: onClose})
  
  return (
    <div
      className={styles.modalWrapper}
      id={styles.modalWrapper}
      onClick={(e) => handleClose(e)}
    >
      <div className={styles.modalContent}>
        {childWithProps}
      </div>
    </div>
  );
}
