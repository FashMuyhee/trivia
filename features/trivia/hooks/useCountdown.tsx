import {useState, useEffect} from 'react';

interface CountdownHook {
  timeLeft: number;
  isActive: boolean;
  start: () => void;
  reset: () => void;
}

export const useCountdown = (initialTime: number): CountdownHook => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const start = () => {
    setIsActive(true);
  };

  const reset = () => {
    setTimeLeft(initialTime);
    setIsActive(false);
  };

  return {timeLeft, isActive, start, reset};
};
