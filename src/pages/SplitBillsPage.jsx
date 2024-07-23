import Styles from "../styles/splitBills.module.css";
import FriendLists from "../components/FriendLists";
import FormAddFriend from "../components/FormAddFriend";
import FormSplitBills from "../components/FormSplitBills";
import { useState } from "react";

function SplitBillsPage() {
  const initialFriends = [
    {
      id: 1,
      nama: "apin",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: 10,
    },
    {
      id: 2,
      nama: "lilis",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: -20,
    },
    {
      id: 3,
      nama: "toni",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleSelectFriend(friend) {
    setSelectFriend((selectFriend) =>
      selectFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend?.id === selectFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );

    setSelectFriend(null);
  }

  return (
    <div className={Styles.app}>
      <div className={Styles.sidebar}>
        <FriendLists
          friends={friends}
          onSelectedFriend={handleSelectFriend}
          selectFriend={selectFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button className={Styles.button} onClick={handleShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>
      {selectFriend && (
        <FormSplitBills friend={selectFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default SplitBillsPage;
