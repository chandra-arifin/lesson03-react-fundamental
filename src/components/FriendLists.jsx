import { useState } from "react";
import Styles from "../styles/splitBills.module.css";
import FriendItem from "./FriendItem";

function FriendLists({ friends, onSelectedFriend, selectFriend }) {
  return (
    <>
      <div className={Styles.accordion}>
        {friends.map((friend) => (
          <FriendItem
            key={friend?.id}
            friend={friend}
            onSelectedFriend={onSelectedFriend}
            selectFriend={selectFriend}
          />
        ))}
      </div>
    </>
  );
}

export default FriendLists;
