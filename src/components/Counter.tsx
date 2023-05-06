import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import dinoImage from '../../public/dino.gif';
import paddingNumber from '../utils/paddingNumber';

import '../styles/Countdown.css';
import addAnimationKeyframes from '../utils/addAnimationKeyframes';

interface Props {
  targetDate: Date;
}

const Counter: React.FC<Props> = ({ targetDate }) => {
  const NUMBER_POSITIONS = [30, 280, 530, 780];

  const x = [
    0,
    150,
    200,
    NUMBER_POSITIONS[0] - 20,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0] + 10,
    200,
    NUMBER_POSITIONS[2] - 40,
    NUMBER_POSITIONS[2],
    NUMBER_POSITIONS[2],
    700,
    500,
    300,
    NUMBER_POSITIONS[3] - 40,
    NUMBER_POSITIONS[3],
    NUMBER_POSITIONS[3],
    200,
    300,
    0
  ];

  const rotateY: number[] = x.map((val, i) => {
    if (i === 0) return 0;
    if (i === x.length - 1) return 0;

    return val < x[i - 1] ? 180 : 0;
  });

  console.log(rotateY);

  const dinosaurAnimation = {
    x,
    y: [0, -40, 0],
    rotateY: addAnimationKeyframes(rotateY, 2)
  };

  const dinosaurTransition = {
    y: {
      delay: 2.5,
      repeatDelay: 5,
      duration: 0.4,
      ease: 'linear',
      repeat: Infinity
    },
    x: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'reverse'
    },
    rotateY: {
      ease: 'linear',
      duration: 10, // hack to make repeat delay work
      repeat: Infinity,
      repeatType: 'reverse'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setJumpingIndex((prev) => (prev + 1) % (4 + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderDigits = (value: number, index: number) => {
    const transition = {
      type: 'spring',
      y: {
        duration: 0.4,
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
      <div className="flex items-center justify-center w-full border">
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
