import { useState } from "react";
import styles from "../styles/step.module.css";

function Step() {
  const stepItem = ["Dream", "Believe", "Come True"];
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  function handlePrev() {
    if (step > 1) setStep((step) => step - 1);
  }

  return (
    <>
      <button
        className={styles.close}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className={styles.steps}>
          <div className={styles.numbers}>
            <div className={step >= 1 ? styles.active : ""}>1</div>
            <div className={step >= 2 ? styles.active : ""}>2</div>
            <div className={step >= 3 ? styles.active : ""}>3</div>
          </div>
          <p className={styles.message}>
            Step {step}: {stepItem[step - 1]}
          </p>

          <div className={styles.buttons}>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Step;
