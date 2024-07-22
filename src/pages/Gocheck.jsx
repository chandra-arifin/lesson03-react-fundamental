import "../styles/gocheck.css";
import Logo from "../components/Logo";
import Checklist from "../components/Checklist";
import Stat from "../components/Stat";
import AddNote from "../components/AddNote";
import { useState } from "react";

function Gocheck() {
  const LISTITEMS = [
    {
      "id": 1,
      "title": "Makan",
      "done": true,
      "tgl": "2022-01-10",
    },
    {
      "id": 2,
      "title": "Tidur",
      "done": false,
      "tgl": "2022-04-11",
    },
    {
      "id": 3,
      "title": "aSekolah",
      "done": false,
      "tgl": "2022-09-14",
    },
  ];

  const [listItems, setListItems] = useState(LISTITEMS);
  const [sortBy, setSortBy] = useState("input");

  function handleAddItem(item) {
    setListItems((old) => [...old, item]);
    handleSortListItems(sortBy);
  }

  function handleToggleItem(id) {
    setListItems((listItems) =>
      listItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            "done": !item.done,
          };
        }
        return item;
      })
    );
    handleSortListItems(sortBy);
  }

  function handleDeleteItem(id) {
    setListItems((listItem) => listItem.filter((e) => e.id !== id));
  }

  function handleClearItems() {
    const confirm = window.confirm("Mau hapus semua list?");
    if (confirm) setListItems([]);
  }

  function handleSortListItems(sortBy) {
    setSortBy(() => sortBy);

    switch (sortBy) {
      case "title":
        setListItems((listItems) =>
          listItems
            .slice()
            .sort((a, b) =>
              a.title.toUpperCase().localeCompare(b.title.toUpperCase())
            )
        );
        break;
      case "status":
        setListItems((listItems) =>
          listItems.slice().sort((a, b) => Number(a.done) - Number(b.done))
        );
        break;
      default:
        setListItems((listItems) =>
          listItems.slice().sort((a, b) => {
            return new Date(a.tgl).getTime() - new Date(b.tgl).getTime();
          })
        );
    }
  }

  return (
    <>
      <div className="app">
        <Logo />
        <AddNote onAddItem={handleAddItem} />
        <Checklist
          items={listItems}
          sortBy={sortBy}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          onClearItems={handleClearItems}
          onSortList={handleSortListItems}
        />
        <Stat items={listItems} />
      </div>
    </>
  );
}

export default Gocheck;
