import React, { useContext } from "react";

import useCurrentTime from "./useCurrentTime";
import { ThemeContext } from "./ThemeContext";


const AnalogClock = () => {
  const time = useCurrentTime();
  const { theme } = useContext(ThemeContext);
  
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  const $darkHourHand = "grey";
  const $darkMinuteHand = "grey";
  const $darkSecondHand = "red";
  const $darkCenterDot = "white";
  
  const $lightHourHand = "dimgrey";
  const $lightMinuteHand = "dimgray";
  const $lightSecondHand = "blue";
  const $lightCenterDot = "black";

  const hourColor = theme === "dark" ? $darkHourHand : $lightHourHand;
  const minuteColor = theme === "dark" ? $darkMinuteHand : $lightMinuteHand;
  const secondColor = theme === "dark" ? $darkSecondHand : $lightSecondHand;
  const centerDotColor = theme === "dark" ? $darkCenterDot : $lightCenterDot;

  return (
    <div className="analog-clock">
      <div className="dial">
        <div className="hand hour" style={{ background: hourColor, transform: `rotate(${hourDeg}deg)` }} />
        <div className="hand minute" style={{ background: minuteColor, transform: `rotate(${minuteDeg}deg)` }} />
        <div className="hand second" style={{ background: secondColor, transform: `rotate(${secondDeg}deg)` }} />
        <div className="center-dot" style={{ background: centerDotColor }} />
      </div>
    </div>
  );
};

export default AnalogClock;