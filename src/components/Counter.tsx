import { useRef, useState } from 'react';

import { motion, useInView, useScroll } from 'framer-motion';

import paddingNumber from '../utils/paddingNumber';
import dinoImage from '/dino.gif';

import useDinoComingSoonAnimation from '../hooks/useDinoComingSoonAnimation';
import useHoverCounter from '../hooks/useHoverCounter';
import useStickyDino from '../hooks/useStickyDino';
import useTimeRemaining from '../hooks/useTimeRemaining';
import useWindowDimensions from '../utils/useWindowDimensions';

interface Props {
  targetDate: Date;
}

const Counter: React.FC<Props> = ({ targetDate }) => {
  const { width, height } = useWindowDimensions();
  const dinoRef = useRef<HTMLDivElement>(null);

  const dinosaurInView = useInView(dinoRef);
  const scrollPos = useScroll();
  const [hoverRandomPositionIndex, setHoverRandomPositionIndex] = useState(0);

  const { incrementCounter, isDisplayProgressNumber, hoverCounter } = useHoverCounter();
  const { timeRemaining } = useTimeRemaining(targetDate);
  const { stickyDinoPositions } = useStickyDino(width, height);
  const { dinosaurAnimation, dinosaurTransition, jumpingIndex } = useDinoComingSoonAnimation(width);

  function incHover() {
    const randomBetween1And3 = Math.floor(Math.random() * 2 + 1);
    setHoverRandomPositionIndex((c) => (c + randomBetween1And3) % 4);
    incrementCounter();
  }

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
        className="tracking-tight text-center text-4xl md:text-4xl lg:text-8xl my-4 font-bold text-white font-retro-numbers"
        key={index}
        transition={transition}
        animate={jumpingIndex === index ? { y: [0, width < 768 ? -20 : -40, 0] } : { y: 0 }}>
        {paddingNumber(value, 2)}
      </motion.span>
    );
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-center w-full select-none font-retro-numbers">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl uppercase  text-white">
            dias
          </h2>
          {renderDigits(timeRemaining.days, 1)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase  text-white">
            horas
          </h2>
          {renderDigits(timeRemaining.hours, 2)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase text-white">
            {width < 768 ? 'min' : 'minutos'}
          </h2>
          {renderDigits(timeRemaining.minutes, 3)}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase  text-white">
            {width < 768 ? 'seg' : 'segundos'}
          </h2>
          {renderDigits(timeRemaining.seconds, 4)}
        </div>
      </div>
      <motion.div
        ref={dinoRef}
        transition={dinosaurTransition}
        animate={dinosaurAnimation}
        className="w-24 lg:w-52 select-none z-20">
        <img src={dinoImage} alt="dinosaur" />
      </motion.div>
      <motion.div
        animate={{
          display: scrollPos.scrollYProgress.get() > 0.4 ? 'block' : 'none',
          top:
            !dinosaurInView && scrollPos.scrollYProgress.get() > 0.4
              ? stickyDinoPositions[hoverRandomPositionIndex].top
              : -200,
          right:
            !dinosaurInView && scrollPos.scrollYProgress.get() > 0.4
              ? stickyDinoPositions[hoverRandomPositionIndex].right
              : -200,
          rotate:
            !dinosaurInView && scrollPos.scrollYProgress.get() > 0.4
              ? stickyDinoPositions[hoverRandomPositionIndex].rotate
              : 0
        }}
        onHoverStart={incHover}
        transition={{
          duration: 0.4,
          type: 'spring'
        }}
        className="w-24 md:w-40 lg:w-52 select-none"
        style={{ position: 'fixed' }}>
        <img src={dinoImage} alt="dinosaur" />
      </motion.div>
      {isDisplayProgressNumber() && (
        <motion.h1
          animate={{
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5
          }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-white font-retro-numbers">
          {hoverCounter}
        </motion.h1>
      )}
    </div>
  );
};

export default Counter;
