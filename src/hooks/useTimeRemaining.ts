import { useEffect, useState } from 'react';

export default function useTimeRemaining(targetDate: Date) {
  const calculateTimeRemaining = () => {
    const totalSeconds = Math.round((targetDate.getTime() - new Date().getTime()) / 1000);

    if (totalSeconds < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return { timeRemaining };
}
