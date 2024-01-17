import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    start,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    start();
  }, []);

  return (
    <div>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 180);
        restart(time)
      }}>Restart</button> */}
    </div>
  );
}
