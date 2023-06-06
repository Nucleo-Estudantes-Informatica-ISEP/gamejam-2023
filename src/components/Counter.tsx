import { useRef } from 'react';

import { motion, useInView, useScroll } from 'framer-motion';
import ReactCanvasConfetti from 'react-canvas-confetti';

import paddingNumber from '../utils/paddingNumber';

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

  const {
    incrementCounter,
    hoverRandomPositionIndex,
    isDisplayProgressNumber,
    hoverCounter,
    getHoverMessage,
    fire
  } = useHoverCounter();
  const { timeRemaining } = useTimeRemaining(targetDate);
  const { stickyDinoPositions } = useStickyDino(width, height);
  const { dinosaurAnimation, dinosaurTransition, jumpingIndex } = useDinoComingSoonAnimation(width);

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
    <>
      <div className="w-full mx-auto">
        <div className="flex items-center justify-center w-full select-none font-retro-numbers">
          <div className="flex flex-col items-center justify-center w-full drop-shadow-primaryStrokeShadow">
            <h2 className="text-lg md:text-2xl text-center lg:text-4xl uppercase  text-white ">
              dias
            </h2>
            {renderDigits(timeRemaining.days, 1)}
          </div>
          <div className="flex flex-col items-center justify-center w-full drop-shadow-primaryStrokeShadow">
            <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase  text-white ">
              horas
            </h2>
            {renderDigits(timeRemaining.hours, 2)}
          </div>
          <div className="flex flex-col items-center justify-center w-full drop-shadow-primaryStrokeShadow">
            <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase text-white ">
              {width < 768 ? 'min' : 'minutos'}
            </h2>
            {renderDigits(timeRemaining.minutes, 3)}
          </div>
          <div className="flex flex-col items-center justify-center w-full drop-shadow-primaryStrokeShadow">
            <h2 className="text-lg md:text-2xl text-center lg:text-4xl font-black uppercase  text-white ">
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
          <img className="drop-shadow-primaryStrokeShadow" src={'/dino.gif'} alt="dinosaur" />
        </motion.div>
        <motion.div
          animate={{
            display: scrollPos.scrollYProgress.get() > 0.2 ? 'block' : 'none',
            top:
              !dinosaurInView && scrollPos.scrollYProgress.get() > 0.2
                ? stickyDinoPositions[hoverRandomPositionIndex].top
                : -200,
            right:
              !dinosaurInView && scrollPos.scrollYProgress.get() > 0.2
                ? stickyDinoPositions[hoverRandomPositionIndex].right
                : -200,
            rotate:
              !dinosaurInView && scrollPos.scrollYProgress.get() > 0.2
                ? stickyDinoPositions[hoverRandomPositionIndex].rotate
                : 0
          }}
          onHoverStart={incrementCounter}
          transition={{
            duration: 0.4,
            type: 'spring'
          }}
          className="w-24 md:w-40 lg:w-52 select-none"
          style={{ position: 'fixed' }}>
          <img src={'/dino.gif'} alt="dinosaur" />
        </motion.div>
        <ReactCanvasConfetti
          particleCount={150}
          colors={['#B567DC', '#3b82f6', '#C673EE', '#20E6BD', '#19DCB1', ' #6B6FA4', '#0D1E25']}
          gravity={0.9}
          drift={0.2}
          disableForReducedMotion={true}
          decay={0.95}
          scalar={1.2}
          fire={fire}
          origin={{ y: 0.85, x: 0.5 }}
          className="fixed w-full h-full top-0 left-0 -z-10"
        />
      </div>
      {isDisplayProgressNumber() && (
        <motion.div
          animate={{
            opacity: isDisplayProgressNumber() ? [0, 1, 0] : 0
          }}
          transition={{
            duration: 0.8
          }}
          className="relative z-50">
          <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl md:text-[10rem] lg:text-[14rem] text-white font-retro-numbers z-50">
            {hoverCounter}
          </h1>
          <h2
            className={`fixed top-1/3 text-2xl md:text-3xl lg:text-5xl text-white font-retro-numbers z-50
            ${hoverCounter % 10 === 0 ? 'rotate-[30deg]' : 'rotate-[-30deg]'}
            ${hoverCounter % 10 === 0 ? 'right-1/3' : 'left-1/3'}`}>
            {getHoverMessage()}
          </h2>
        </motion.div>
      )}
    </>
  );
};

export default Counter;
