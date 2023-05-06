import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import dinoImage from '../../public/dino.gif';
import paddingNumber from '../utils/paddingNumber';

import '../styles/Countdown.css';
import extendAnimationKeyframes from '../utils/extendAnimationKeyframes';

interface Props {
  targetDate: Date;
}

const Counter: React.FC<Props> = ({ targetDate }) => {
  const NUMBER_POSITIONS = [30, 280, 530, 780];
  const JUMPING_NUMBERS_ORDER = [2, 4, 3, 1, 2, 4, 3, 1];
  const jumpingNumbersAnimation = JUMPING_NUMBERS_ORDER.flatMap((val) => [-1, val]);

  const x = [
    NUMBER_POSITIONS[0],
    150,
    200,
    NUMBER_POSITIONS[1] - 20,
    NUMBER_POSITIONS[1],
    NUMBER_POSITIONS[1],
    NUMBER_POSITIONS[1] + 10,
    200,
    NUMBER_POSITIONS[3] - 40,
    NUMBER_POSITIONS[3],
    NUMBER_POSITIONS[3] + 40,
    600,
    500,
    300,
    NUMBER_POSITIONS[3],
    NUMBER_POSITIONS[3],
    NUMBER_POSITIONS[3] - 40,
    200,
    300,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0],
    150,
    200,
    NUMBER_POSITIONS[2] - 20,
    NUMBER_POSITIONS[2],
    NUMBER_POSITIONS[2],
    NUMBER_POSITIONS[2] + 10,
    200,
    NUMBER_POSITIONS[0] - 40,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0] + 80,
    700,
    500,
    300,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0] - 40,
    200,
    300,
    NUMBER_POSITIONS[0]
  ];

  const rotateY: number[] = x.map((val, i) => {
    if (i === 0) return 0;
    if (i === x.length - 1) return 0;

    return val < x[i - 1] ? 180 : 0;
  });

  const dinosaurAnimation = {
    x,
    y: [0, -40, 0],
    rotateY: extendAnimationKeyframes(rotateY, 4)
  };

  const dinosaurTransition = {
    y: {
      delay: 2.5,
      repeatDelay: 4.8,
      duration: 0.2,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    },
    x: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    },
    rotateY: {
      ease: 'linear',
      duration: 20,
      repeat: Infinity
    }
  };

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
  const [currentJumpingIndex, setCurrentJumpingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJumpingIndex((prev) => (prev + 1) % (jumpingNumbersAnimation.length + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setJumpingIndex(jumpingNumbersAnimation[currentJumpingIndex]);
  }, [currentJumpingIndex]);

  const renderDigits = (value: number, index: number) => {
    const transition = {
      type: 'spring',
      y: {
        duration: 0.2,
        ease: 'linear'
      }
    };

    return (
      <motion.span
        className="countdown-value"
        key={index}
        transition={transition}
        animate={jumpingIndex === index ? { y: [0, -40, 0] } : { y: 0 }}>
        {paddingNumber(value, 2)}
      </motion.span>
    );
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-center w-full ">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl font-black uppercase">dias</h2>
          {renderDigits(timeRemaining.days, 1)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl font-black uppercase">horas</h2>
          {renderDigits(timeRemaining.hours, 2)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl font-black uppercase">minutos</h2>
          {renderDigits(timeRemaining.minutes, 3)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-4xl font-black uppercase">segundos</h2>
          {renderDigits(timeRemaining.seconds, 4)}
        </div>
      </div>
      <motion.div
        transition={dinosaurTransition}
        animate={dinosaurAnimation}
        className="dinosaur-item">
        <img src={dinoImage} alt="dinosaur" />
      </motion.div>
    </div>
  );
};

export default Counter;
