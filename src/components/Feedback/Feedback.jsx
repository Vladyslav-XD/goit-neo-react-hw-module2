import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
  return (
    <div className={styles.feedback}>
      <p className={styles.stat}>Good: {good}</p>
      <p className={styles.stat}>Neutral: {neutral}</p>
      <p className={styles.stat}>Bad: {bad}</p>
      <p className={styles.stat}>Total: {totalFeedback}</p>
      <p className={styles.stat}>Positive: {positiveFeedback}%</p>
    </div>
  );
}

export default Feedback;
