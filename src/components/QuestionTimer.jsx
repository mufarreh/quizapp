import { useEffect, useState } from "react";

export default function QuestionTimer({ timeOut, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    console.log("Setting Timeout");
    const timer = setTimeout(onTimeOut, timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    console.log("Setting Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={timeOut} value={remainingTime}></progress>
  );
}
