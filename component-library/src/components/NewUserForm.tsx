"use client";
import { useState } from "react";
import styles from "./NewUserForm.module.css";
import { motion, useAnimate } from "framer-motion";

export default function NewUserForm() {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmState, setConfirmState] = useState("");

  const [valEmail, setValEmail] = useState(true);
  const [valPass, setValPass] = useState(true);
  const [passMatch, setPassMatch] = useState(true);

  const [scope, animate] = useAnimate();
  //warning messages
  const invalidPassMess = `Passwords must be 8 or more characters and must contain an uppercase letter, a lowercase case letter, a number and a special character`;
  const invalidEmailMess = `Please enter a valid email address`;
  const passMismatchMess = `Passwords must match`;
  //shakes the form
  function shake() {
    animate(scope.current, { x: [-20, 20, 0] }, { duration: 0.2 });
  }
  //helper functions to validate the form
  function isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  function isStrongPassword(password: string) {
    if (password.length < 8) {
      return false;
    }
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    if (
      !lowercaseRegex.test(password) ||
      !uppercaseRegex.test(password) ||
      !digitRegex.test(password)
    ) {
      return false;
    }
    const specialCharacterRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>?]/;
    if (!specialCharacterRegex.test(password)) {
      return false;
    }
    return true;
  }
  //function to handle submit clicks
  function handleSubmit() {
    if (!isValidEmail(emailState)) {
      setValEmail(false);
      shake();
      return;
    }
    if (!isStrongPassword(passwordState)) {
      setValPass(false);
      shake();
    }

    if (passwordState !== confirmState) {
      setPassMatch(false);
      shake();
    }
    console.log("login success"); //replace this with your login logic.
  }
  //update functions for the inputs
  function updateEmail(newEmail: string) {
    if (isValidEmail(newEmail)) setValEmail(true);
    setEmailState(newEmail);
  }
  function updatePassword(newPass: string) {
    if (isStrongPassword(newPass)) setValPass(true)
    setPasswordState(newPass);
  }
  function updateConfirm(newPass: string) {
    if (newPass === passwordState) setPassMatch(true)
    setConfirmState(newPass);
  }

  return (
    <motion.div ref={scope} className={styles.loginContainer}>
      <form>
        <div className={styles.formGroup}>
          <label>Email :</label>
          <input
            type="text"
            placeholder="Email"
            className={styles.loginInput}
            onChange={(e) => updateEmail(e.target.value)}
          />
          {!valEmail ? <p className={styles.smallWarning}>{invalidEmailMess}</p> : null}
        </div>
        <div className={styles.formGroup}>
          <label>Password :</label>
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            onChange={(e) => updatePassword(e.target.value)}
          />
          {!valPass ? <p className={styles.smallWarning}>{invalidPassMess}</p> : null}
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password :</label>
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            onChange={(e) => updateConfirm(e.target.value)}
          />
          {!passMatch ? <p className={styles.smallWarning}>{passMismatchMess}</p> : null}
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.submitButton}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}
