/* eslint-disable @next/next/no-img-element */
import styles from "./SmallCard.module.css";

interface Props {
  image: string;
  title: string;
  description: string;
}
export default function SmallCard({ image, title, description }: Props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img src={image} alt={`oops`} className={styles.cardImage} />
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p>{description}</p>
        <div className={styles.cardButtonContainer}>
          <button className={styles.cardButton}>Buy</button>
        </div>
      </div>
    </div>
  );
}
