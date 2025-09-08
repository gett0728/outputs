import { useState, useEffect } from "react";

const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()));
    return () => clearInterval(timer);
  }, []);

  return time;
};

export default useCurrentTime;