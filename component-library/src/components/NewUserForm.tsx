"use client";
import { useState } from "react";
import styles from "./NewUserForm.module.css";
export default function NewUserForm() {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmState, setConfirmState] = useState("");

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

  function handleSubmit() {
    if (!isValidEmail(emailState))
      return alert("Please enter a valid email address");
    if (!isStrongPassword(passwordState))
      return alert(
        "Passwords must be 8 or more characters and must contain an uppercase letter, a lowercase case letter, a number and a specail character"
      );
    if (passwordState !== confirmState) return alert("Passwords must match")
    console.log("login success"); //replace this with your login logic.
  }
  function updateEmail(newEmail: string) {
    setEmailState(newEmail);
  }
  function updatePassword(newPass: string) {
    setPasswordState(newPass);
  }
  function updateConfirm(newPass: string) {
    setConfirmState(newPass);
  }

  return (
    <div className={styles.loginContainer}>
      <form>
        <div className={styles.formGroup}>
          <label>Email :</label>
          <input
            type="text"
            placeholder="Email"
            className={styles.loginInput}
            onChange={(e) => updateEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password :</label>
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            onChange={(e) => updatePassword(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Confirm Password :</label>
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            onChange={(e) => updateConfirm(e.target.value)}
          />
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
    </div>
  );
}