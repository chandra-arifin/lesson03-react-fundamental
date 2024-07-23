import { useState } from "react";
import Styles from "../styles/splitBills.module.css";

function FriendItem({ friend, onSelectedFriend, selectFriend }) {
  const isSelected = friend?.id === selectFriend?.id;

  return (
    <>
      <li className={isSelected ? Styles.selected : ""}>
        <img src={friend.image} alt={friend.nama} />
        <h3>{friend.nama}</h3>
        {friend.balance < 0 && (
          <p className={Styles.red}>
            Kamu Berhutang Rp {Math.abs(friend.balance)} ke {friend.nama}
          </p>
        )}
        {friend.balance > 0 && (
          <p className={Styles.green}>
            {friend.nama} Berhutang Rp {friend.balance} ke Kamu
          </p>
        )}
        {friend.balance === 0 && <p>Kamu dan {friend.nama} Tidak ada Hutang</p>}
        <button
          className={Styles.button}
          onClick={() => onSelectedFriend(friend)}
        >
          {isSelected ? "Tutup" : "Pilih"}
        </button>
      </li>
    </>
  );
}

export default FriendItem;
