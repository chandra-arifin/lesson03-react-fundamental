import styles from "../styles/vcard.module.css";

function Badge({ text }) {
  return (
    <button>
      <div className={styles.height}>{text}</div>
    </button>
  );
}

export default Badge;
