import { useContext, useEffect, useState } from "react";
import { Contexto } from "../context/ContextoProvider";

export const BreakLength = () => {
  const { play, isBreak, setClockCount, reset } = useContext(Contexto);
  const [breakCount, setBreakCount] = useState(5); // Default value 5min

  useEffect(() => {
    if (reset === true) {
      setBreakCount(5);
    }
  }, [reset]);

  useEffect(() => {
    if (isBreak === true) {
      setClockCount(breakCount * 60);
    }
  }, [isBreak]);

  const handleClickSum = () => {
    if (breakCount < 60 && play === false) {
      setBreakCount((c) => c + 1);
      if (isBreak === true) {
        setClockCount(breakCount * 60 + 60);
      }
    }
  };

  const handleClickSubtra = () => {
    if (breakCount > 1 && play === false) {
      setBreakCount((c) => c - 1);
      if (isBreak === true) {
        setClockCount(breakCount * 60 - 60);
      }
    }
  };

  return (
    <div>
      <h2>Break Length</h2>
      <h3>Count: {breakCount}</h3>
      <button onClick={handleClickSum}>Up</button>
      <button onClick={handleClickSubtra}>Down</button>
    </div>
  );
};
