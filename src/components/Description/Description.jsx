import styles from "./Description.module.css";

function Description() {
  return (
    <div className={styles.description}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

export default Description;
