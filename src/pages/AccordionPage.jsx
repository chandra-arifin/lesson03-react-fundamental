import Accordion from "../components/Accordion";

function AccordionPage() {
  const tes = "ttt";
  const faq = [
    {
      question: "Apakah ini?",
      answer: "ini sapi",
    },
    {
      question: "ini Berapa?",
      answer: "2000 rupiah",
    },
    {
      question: "Siapa Kamu?",
      answer: "Saya Apin",
    },
  ];

  return (
    <div>
      <Accordion data={faq} />
    </div>
  );
}

export default AccordionPage;
