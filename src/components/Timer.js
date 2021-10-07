import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  //Adding State using the useState React Hook

  const [durationSecs, setDurationSecs] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setDurationSecs(0);
    setSeconds(0);
    setIsActive(false);
  }

  function done() {
    setIsActive(false);
  }

  //show the time in hours minutes seconds
  function getTimeInHMS() {
    let today = new Date();

    let hours = today.getHours();
    if (hours > 12) {
      hours = Number(hours) - 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    let mins = today.getMinutes();
    if (mins < 10) {
      mins = "0" + mins;
    }

    let secs = today.getSeconds();
    if (secs < 10) {
      secs = "0" + secs;
    }
    let timeInHMS = `${hours}:${mins}:${secs}`;
    return timeInHMS;
  }

  //show the duration in minute and seconds

  const durationInMS = (secs) => {
    let strDuration = "";
    let mins = 0;
    if (secs >= 60) {
      mins = Math.floor(secs / 60);
      secs = secs % 60;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    strDuration = `${mins} m ${secs} s`;
    return strDuration;
  };

  useEffect(() => {
    //for the clock
    let interval = setInterval(() => {
      setSeconds((seconds) => parseInt(seconds) + 1);
    }, 1000);
    //for the timer
    let interval1 = null;
    if (isActive) {
      interval1 = setInterval(() => {
        setDurationSecs((durationSecs) => parseInt(durationSecs) + 1);
      }, 1000);
    } else if (!isActive && durationSecs !== 0) {
      clearInterval(interval1);
    }
    return () => {
      clearInterval(interval);
      clearInterval(interval1);
    };
  }, [isActive, seconds, durationSecs]);

  return (
    <div className="timerContainer">
      <h2>Let's Practice REACTO</h2>
      <div className="timer">
        <div className="currTime"> Current Time: {getTimeInHMS()}</div>
        <div className="duration">Duration: {durationInMS(durationSecs)}</div>
        {/* <div className="totalTime">{Done()}</div> */}
      </div>
      <div className="button">
        Press Start whenever you are ready
        {isActive ? (
          <button type="button" onClick={toggle}>
            Pause
          </button>
        ) : (
          <button type="button" onClick={toggle}>
            Start
          </button>
        )}
        <button type="button" onClick={done}>
          Done
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
