import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import css from "./Loader.module.css";

export default function AnimatedLoader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: 292, height: 292 }}>
      <CircularProgressbar
        className={css.circularProgressbar}
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "black",
          pathColor: "black",
          trailColor: "rgba(255, 255, 255, 0.3)",
          textSize: "24px",
          strokeWidth: 1,
        })}
      />
    </div>
  );
}
