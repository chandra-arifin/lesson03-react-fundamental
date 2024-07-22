import { useState } from "react";

function AddNote({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTitle(e.target.value);
    if (!title) return;
    // if (title.trim().length === 0) return;

    const newItem = {
      id: Date.now(),
      title: title,
      done: false,
      tgl: Date.now(),
    };

    onAddItem(newItem);
    setTitle("");
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Add Note</h3>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
}

export default AddNote;
