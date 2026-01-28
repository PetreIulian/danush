import { useEffect, useState } from "react";
import "./Timer.css";

const formatTime = (time) => {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const startFlag = localStorage.getItem("timerStart");
    let endTime = localStorage.getItem("timerEnd");

    if (startFlag === "true" && endTime) {
      endTime = Number(endTime);
      setIsActive(true);
      const remaining = Math.max(endTime - Date.now(), 0);
      setTime(remaining);
    }
  }, []);

  useEffect(() => {
    if (!isActive || time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 1000;
        if (newTime <= 0) {
          localStorage.setItem("timerStart", "false");
          setIsActive(false);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <section className="timer-container">
      <div className="timer">{formatTime(time)}</div>
    </section>
  );
}

export default Timer;
