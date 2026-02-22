import styles from "./Options.module.css";

function Options({ updateFeedback, onReset, totalFeedback }) {
  return (
    <div className={styles.options}>
      <button
        type="button"
        className={styles.buttonGood}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.buttonNeutral}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.buttonBad}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" className={styles.buttonReset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
