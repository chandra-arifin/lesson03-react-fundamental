import styles from "../styles/vcard.module.css";

import Badge from "./Badge";

function Highlight() {
  return (
    <>
      <div className={styles.buttons}>
        <Badge text="phD" />
        <Badge text="maintainer" />
      </div>
    </>
  );
}

export default Highlight;
