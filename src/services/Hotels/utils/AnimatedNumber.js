import React, { useState, useEffect } from "react";

export const AnimatedNumber = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2500;
    const stepTime = Math.abs(Math.floor(duration / (targetNumber - start)));

    const timer = setInterval(() => {
      start += 1;
      setCurrentNumber(start);
      if (start === targetNumber) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return <span>{currentNumber}</span>;
};
