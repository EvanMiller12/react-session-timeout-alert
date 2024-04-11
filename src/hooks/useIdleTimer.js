import { useState } from "react";
import { useIdleTimer } from "react-idle-timer";

const useIdle = ({ onIdle, idleTime, debounceTime }) => {
  const [isIdle, setIsIdle] = useState(null);

  //handles what happens when the user is idle
  const handleOnIdle = event => {
    setIsIdle(true); //set the state to true
    onIdle(); //then call onIdle function
  };

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * idleTime,
    onIdle: handleOnIdle,
    debounce: debounceTime
  });
  return {
    getRemainingTime,
    getLastActiveTime,
    isIdle
  };
};

export { useIdle };
