import { useContext, useEffect, useState } from "react";
import { Contexto } from "../context/ContextoProvider";

export const SessionLength = () => {
  const { play, isBreak, setIsBreak, setClockCount, reset, setReset } =
    useContext(Contexto);
  const [sessionCount, setSessionCount] = useState(25); // Default value 25 min

  useEffect(() => {
    if (reset === true) {
      setSessionCount(25);
      setClockCount(25 * 60);
      setReset(false);
      setIsBreak(false);
    }
  }, [reset]);

  useEffect(() => {
    if (isBreak === false) {
      setClockCount(sessionCount * 60);
    }
  }, [isBreak]);

  const handleClickSum = () => {
    if (sessionCount < 60 && play === false) {
      setSessionCount((c) => c + 1);
      if (isBreak === false) {
        setClockCount(sessionCount * 60 + 60);
      }
    }
  };

  const handleClickSubtra = () => {
    if (sessionCount > 1 && play === false) {
      setSessionCount((c) => c - 1);
      if (isBreak === false) {
        setClockCount(sessionCount * 60 - 60);
      }
    }
  };

  return (
    <div>
      <h2>Session Length</h2>
      <h3>Count: {sessionCount}</h3>
      <button onClick={handleClickSum}>Up</button>
      <button onClick={handleClickSubtra}>Down</button>
    </div>
  );
};
