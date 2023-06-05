import React, { useContext, useEffect, useRef, useState } from "react";
import { Contexto } from "../context/ContextoProvider";
import alarm from "../assets/Alarm-sound.mp3";

export const TimeDisplay = () => {
  const { play, setPlay, isBreak, setIsBreak, clockCount, setReset } =
    useContext(Contexto);
  const audioElem = useRef(null);
  const [currCount, setCurrCount] = useState(0);

  useEffect(() => {
    let timeOutId;
    //Up or Down Length
    if (play === false) {
      setCurrCount(clockCount);
    }
    // Session or Break change
    else if (play === true) {
      audioElem.current.play();
      timeOutId = setTimeout(() => {
        //Set the change with 1s delay
        setCurrCount(clockCount);
      }, 1000);
    }
    return () => clearTimeout(timeOutId);
  }, [clockCount]);

  useEffect(() => {
    //Countdown timer
    let intervalId;
    if (currCount <= 0) {
      setIsBreak((b) => !b);
    } else if (play) {
      intervalId = setTimeout(() => {
        setCurrCount((currCount) => currCount - 1);
      }, 1000);
    }
    return () => clearTimeout(intervalId);
  }, [currCount, play]);

  //Reset Func
  const handleReset = () => {
    setCurrCount(1500);
    setReset(true);
    setPlay(false);
  };

  //Time converter
  const minutes = Math.floor(currCount / 60);
  const seconds = currCount % 60;
  console.log("Re-rendering");

  return (
    <div className="TimeDisplay_container">
      <div>
        <h1>{isBreak ? "Break" : "Session"} Time</h1>
        <h2>{`${minutes < 10 ? "0" : ""}${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`}</h2>
        <button onClick={() => setPlay((play) => !play)}>Start/Stop</button>
        <br />
        <button onClick={handleReset}>Reset</button>
        <audio ref={audioElem} id="beep" src={alarm}></audio>
      </div>
    </div>
  );
};
