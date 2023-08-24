/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./HorizontalCard.module.css";

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function HorizontalCard({ image, title, description }: Props) {
  function handleClick() {
    //put your logic here to handle button click
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img src={image} alt={`oops`} className={styles.cardImage} />
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p>{description}</p>
        <div className={styles.cardButtonContainer}>
          <button className={styles.addButton} onClick={() => handleClick()}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
