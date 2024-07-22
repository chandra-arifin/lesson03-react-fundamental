import styles from "../styles/vcard.module.css";

import Biodata from "./Biodata";
import Header from "./Header";
import Highlight from "./Highlight";
import Identity from "./Identity";

function VirtualCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.top}>
          <Header />
          <Identity />
        </div>
        <div className={styles.bottom}>
          <Biodata />
          <Highlight />
        </div>
      </div>
    </>
  );
}

export default VirtualCard;
