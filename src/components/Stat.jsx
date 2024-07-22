function Stat({ items }) {
  if (items.length === 0) {
  }

  const totalItem = items.length;
  const doneItem = items.filter((item) => item.done).length;

  // prettier-ignore
  const msg =
    items.length === 0
      ? `Tidak Ada Catatan.`
      : (totalItem === doneItem
      ? `Semua Sudah Selesai dilakukan`
      : `Kamu Punya ${totalItem} Catatan dan baru ${doneItem} yang dichecklist`);
  // };

  return (
    <>
      <footer className="stats">
        <span>{msg}</span>
      </footer>
    </>
  );
}

export default Stat;
