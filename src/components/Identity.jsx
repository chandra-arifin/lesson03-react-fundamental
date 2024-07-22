import styles from "../styles/vcard.module.css";

function Identity() {
  return (
    <>
      <div className={styles.text}>
        <div className={styles["name-wrapper"]}>
          <div className={styles.name}>Apin</div>
        </div>
        <div className={styles.title}>Software Engineering</div>
      </div>
    </>
  );
}

export default Identity;
