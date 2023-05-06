import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Countdown.css';
import dinoImage from '../../public/dino.gif';

interface Props {
  targetDate: Date;
}

const Counter: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const totalSeconds = Math.round((targetDate.getTime() - new Date().getTime()) / 1000);

    if (totalSeconds < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
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

  const [jumpingIndex, setJumpingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJumpingIndex((prev) => (prev + 1) % 4);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const renderDigits = (value: number, index: number, isJumping: boolean) => {
    const numberTransition = {
      y: {
        duration: 0.8,
        repeat: Infinity,
        ease: 'linear'
      }
    };

    const applyTransition = isJumping && Math.random() < 0.5;

    return (
      <motion.span
        className="countdown-value"
        key={index}
        transition={applyTransition ? numberTransition : undefined}
        animate={applyTransition ? { y: ['0px', '-60px', '0px'] } : {}}>
        {value < 10 ? `${value}` : value}
      </motion.span>
    );
  };

  return (
    <>
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-label">DIAS</span>
          {renderDigits(timeRemaining.days, 1, jumpingIndex === 0)}
        </div>
        <div className="countdown-item">
          <span className="countdown-label">HORAS</span>
          {renderDigits(timeRemaining.hours, 2, jumpingIndex === 1)}
        </div>
        <div className="countdown-item">
          <span className="countdown-label">MIN</span>
          {renderDigits(timeRemaining.minutes, 3, jumpingIndex === 2)}
        </div>
        <div className="countdown-item">
          <span className="countdown-label">SEG</span>
          {renderDigits(timeRemaining.seconds, 4, jumpingIndex === 3)}
        </div>
      </div>
      <div className="dinosaur-item">
        <img src={dinoImage} alt="dinosaur" />
      </div>
    </>
  );
};

export default Counter;
