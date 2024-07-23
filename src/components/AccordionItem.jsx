import { useState } from "react";
import Styles from "../styles/Accordion.module.css";

function AccordionItem({ number, question, answer, curOpen, onOpen }) {
  const isOpen = number === curOpen;

  function handleOpen() {
    onOpen(isOpen ? null : number);
  }

  function pad(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
  }

  return (
    <>
      <div
        className={`${Styles.item} ${isOpen ? Styles.open : ""}`}
        onClick={handleOpen}
      >
        <div className={Styles.number}>{pad(number)}</div>
        <div className={Styles.title}>{question}</div>
        <div className={Styles.icon}> {isOpen ? "-" : "+"}</div>
        {isOpen && <div className={Styles["content-box"]}>{answer}</div>}
      </div>
    </>
  );
}

export default AccordionItem;
