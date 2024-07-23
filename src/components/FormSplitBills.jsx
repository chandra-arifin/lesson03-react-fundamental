import styles from "../styles/splitBills.module.css";
import { useState } from "react";

function FormSplitBills({ friend, onSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoPay, setWhoPay] = useState("user");

  function handleSplitBill(e) {
    e.preventDefault();

    if (!amount || !myBill) return;

    onSplitBill(whoPay === "user" ? friendBill : -myBill);
  }

  return (
    <>
      <form className={styles["form-split-bill"]} onSubmit={handleSplitBill}>
        <h2>Patungan bareng {friend.nama}</h2>
        <label htmlFor="">Total Tagihan</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="">Tagihan Kamu</label>
        <input
          type="text"
          value={myBill}
          onChange={(e) => setMyBill(e.target.value)}
        />
        <label htmlFor="">Tagihan {friend.nama}</label>
        <input type="text" value={friendBill} disabled />
        <label htmlFor="">Ditalangi sama</label>
        <select
          name=""
          id=""
          value={whoPay}
          onChange={(e) => setWhoPay(e.target.value)}
        >
          <option value="user">Kamu</option>
          <option value="friend">{friend.nama}</option>
        </select>

        <button className={styles.button}>Tambah</button>
      </form>
    </>
  );
}

export default FormSplitBills;
