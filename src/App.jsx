import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

const STORAGE_KEY = "sip-happens-feedback";

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      return {
        good: data.good ?? 0,
        neutral: data.neutral ?? 0,
        bad: data.bad ?? 0,
      };
    }
  } catch (_) {}
  return { good: 0, neutral: 0, bad: 0 };
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {}
}

function App() {
  const [state, setState] = useState(loadState);

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  useEffect(() => {
    saveState(state);
  }, [state]);

  const updateFeedback = (feedbackType) => {
    setState((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => setState({ good: 0, neutral: 0, bad: 0 });

  return (
    <div className={styles.app}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback yet" />
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
