import styles from "../styles/splitBills.module.css";
import { useState } from "react";

function FormAddFriend({ onAddFriend }) {
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama || !image) return;

    const id = crypto.randomUUID;
    const friend = {
      id,
      nama,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(friend);
    setNama("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form className={styles["form-add-friend"]} onSubmit={handleSubmit}>
        <label htmlFor="">Nama</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <label htmlFor="">Gambar</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className={styles.button}>Tambah</button>
      </form>
    </>
  );
}

export default FormAddFriend;
