import React, { useState } from "react";

export const Contexto = React.createContext({});

export const ContextoProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [clockCount, setClockCount] = useState(1500); //25 minutes in seconds
  const [reset, setReset] = useState(false);

  return (
    <Contexto.Provider
      value={{
        play,
        setPlay,
        isBreak,
        setIsBreak,
        clockCount,
        setClockCount,
        reset,
        setReset,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
