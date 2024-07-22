import { useState } from "react";
import ItemList from "./ItemList";

function Checklist({
  items,
  sortBy,
  onDeleteItem,
  onToggleItem,
  onClearItems,
  onSortList,
}) {
  // const [sortBy, setSortBy] = useState("input");

  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <ItemList
              item={item}
              key={item.id}
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => onSortList(e.target.value)}>
            <option value="input">Urutkan Berdasarkan Input</option>
            <option value="title">Urutkan Berdasarkan Judul</option>
            <option value="status">Urutkan Berdasarkan Status</option>
          </select>
          <button onClick={onClearItems}>Hapus</button>
        </div>
      </div>
    </>
  );
}

export default Checklist;
