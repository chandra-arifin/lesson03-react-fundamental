import { useState } from "react";
import Styles from "../styles/accordion.module.css";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <>
      <div className={Styles.accordion}>
        {data.map((faq, index) => (
          <AccordionItem
            key={index}
            curOpen={curOpen}
            onOpen={setCurOpen}
            number={index + 1}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </>
  );
}

export default Accordion;
