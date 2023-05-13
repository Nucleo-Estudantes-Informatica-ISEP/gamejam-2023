import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import paddingNumber from '../utils/paddingNumber';
import dinoImage from '/dino.gif';

import extendAnimationKeyframes from '../utils/extendAnimationKeyframes';
import useWindowDimensions from '../utils/useWindowDimensions';

interface Props {
  targetDate: Date;
}

const JUMPING_NUMBERS_ORDER = [2, 4, 3, 1, 2, 4, 3, 1];

const Counter: React.FC<Props> = ({ targetDate }) => {
  const { width } = useWindowDimensions();

  const jumpingNumbersAnimation = JUMPING_NUMBERS_ORDER.flatMap((val, i) =>
    i === JUMPING_NUMBERS_ORDER.length - 1 ? [val] : [val, -1]
  );
  const NUMBER_POSITIONS = [width * 0.02, width * 0.25, width * 0.4, width * 0.6];

  const x = [
    NUMBER_POSITIONS[1],
    NUMBER_POSITIONS[1] * 1.1,
    NUMBER_POSITIONS[1] * 1.2,
    NUMBER_POSITIONS[2] * 1.3,
    NUMBER_POSITIONS[3],
    NUMBER_POSITIONS[1] * 1.2,
    NUMBER_POSITIONS[1] * 1.2,
    NUMBER_POSITIONS[1] * 1.3,
    NUMBER_POSITIONS[2] * 1.4,
    NUMBER_POSITIONS[3],
    NUMBER_POSITIONS[3],
    NUMBER_POSITIONS[2] * 1.7,
    NUMBER_POSITIONS[1] * 1.6,
    NUMBER_POSITIONS[1] * 1.2,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0] * 1.3,
    NUMBER_POSITIONS[0] * 1.1,
    NUMBER_POSITIONS[1] * 1.4,
    NUMBER_POSITIONS[2],
    NUMBER_POSITIONS[2],
    NUMBER_POSITIONS[2] * 1.2,
    NUMBER_POSITIONS[2] * 1.7,
    NUMBER_POSITIONS[0] * 1.9,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0] * 1.4,
    NUMBER_POSITIONS[1] * 1.5,
    NUMBER_POSITIONS[2] * 1.2,
    NUMBER_POSITIONS[2] * 1.2,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0] * 1.8,
    NUMBER_POSITIONS[1] * 1.1,
    NUMBER_POSITIONS[1] * 1.6,
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0],
    NUMBER_POSITIONS[0] * 1.7,
    NUMBER_POSITIONS[0] * 1.2,
    NUMBER_POSITIONS[1] * 1.3,
    NUMBER_POSITIONS[1]
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
      repeatDelay: 4.8,
      duration: 0.2,
      ease: 'linear',
      repeat: Infinity
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
        className="tracking-tight text-center text-3xl md:text-4xl lg:text-8xl my-4 font-bold text-white font-retro"
        key={index}
        transition={transition}
        animate={jumpingIndex === index ? { y: [0, width < 768 ? -20 : -40, 0] } : { y: 0 }}>
        {paddingNumber(value, 2)}
      </motion.span>
    );
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-center w-full ">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl uppercase font-retro text-white">
            dias
          </h2>
          {renderDigits(timeRemaining.days, 1)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase font-retro text-white">
            horas
          </h2>
          {renderDigits(timeRemaining.hours, 2)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase text-white font-retro">
            {width < 768 ? 'min' : 'minutos'}
          </h2>
          {renderDigits(timeRemaining.minutes, 3)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase font-retro text-white">
            {width < 768 ? 'seg' : 'segundos'}
          </h2>
          {renderDigits(timeRemaining.seconds, 4)}
        </div>
      </div>
      <motion.div
        transition={dinosaurTransition}
        animate={dinosaurAnimation}
        className="w-16 md:w-24 lg:w-52">
        <img src={dinoImage} alt="dinosaur" />
      </motion.div>
    </div>
  );
};

export default Counter;
