import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import "../Timer/Style/timer.css";

const Timer = () => {
  const targetDate = moment.tz("2024-03-11 00:00:00", "Africa/Lagos");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = moment();
    const diff = targetDate.diff(now);

    if (diff < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const duration = moment.duration(diff);
    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" w-full Timer-container">
      <div className=" w-full Timer-inner-container px-20 py-20">
        <div className="w-full Timer-box flex gap-3 justify-center text-[112px]">
          <p className="ml-5">
            {timeLeft.days} <span className="text-[28px]">Days</span>
          </p>
          <p>:</p>
          <p className="ml-5">
            {timeLeft.hours} <span className="text-[28px] mr-2">Hours</span>
          </p>
          <p>:</p>
          <p className="ml-5">
            {timeLeft.minutes} <span className="text-[28px] mr-2">Mins</span>
          </p>
          <p>:</p>
          <p className="ml-5">
            {timeLeft.seconds} <span className="text-[28px] mr-2">Secs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
