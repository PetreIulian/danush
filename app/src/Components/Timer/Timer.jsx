import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

function Timer({ duration, start }) {
  const [time, setTime] = useState(() => {
    const saved = localStorage.getItem("timer");
    return saved ? Number(saved) : duration;
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1000) {
            clearInterval(intervalRef.current);
            localStorage.removeItem("timer");
            return 0;
          }
          const newTime = prev - 1000;
          localStorage.setItem("timer", newTime);
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [start]);

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="timer-container">
      <p>Etapa de lucru se sfârșește în:</p>
      <div className="timer">{formatTime(time)}</div>
    </section>
  );
}

export default Timer;
