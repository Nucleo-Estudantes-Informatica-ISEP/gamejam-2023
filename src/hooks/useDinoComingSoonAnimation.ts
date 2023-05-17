import { useEffect, useMemo, useState } from 'react';
import extendAnimationKeyframes from '../utils/extendAnimationKeyframes';

const JUMPING_NUMBERS_ORDER = [2, 4, 3, 1, 2, 4, 3, 1];

export default function useDinoComingSoonAnimation(width: number) {
  const [jumpingIndex, setJumpingIndex] = useState(0);
  const [currentJumpingIndex, setCurrentJumpingIndex] = useState(0);

  const jumpingNumbersAnimation = JUMPING_NUMBERS_ORDER.flatMap((val, i) =>
    i === JUMPING_NUMBERS_ORDER.length - 1 ? [val] : [val, -1]
  );
  const NUMBER_POSITIONS = [width * 0.02, width * 0.25, width * 0.45, width * 0.68];

  const x = useMemo(
    () => [
      NUMBER_POSITIONS[1],
      NUMBER_POSITIONS[1] * 1.1,
      NUMBER_POSITIONS[1] * 1.4,
      NUMBER_POSITIONS[2] * 1.1,
      NUMBER_POSITIONS[2],
      NUMBER_POSITIONS[1] * 1.4,
      NUMBER_POSITIONS[2] * 1.1,
      NUMBER_POSITIONS[2] * 1.3,
      NUMBER_POSITIONS[3] * 0.95,
      NUMBER_POSITIONS[3],
      NUMBER_POSITIONS[3],
      NUMBER_POSITIONS[2] * 1.1,
      NUMBER_POSITIONS[1] * 1.3,
      NUMBER_POSITIONS[0] * 1.3,
      NUMBER_POSITIONS[0],
      NUMBER_POSITIONS[0],
      NUMBER_POSITIONS[0] * 1.3,
      NUMBER_POSITIONS[1] * 1.1,
      NUMBER_POSITIONS[1] * 1.3,
      NUMBER_POSITIONS[2],
      NUMBER_POSITIONS[2],
      NUMBER_POSITIONS[1] * 1.1,
      NUMBER_POSITIONS[1] * 1.4,
      NUMBER_POSITIONS[1] * 1.3,
      NUMBER_POSITIONS[1],
      NUMBER_POSITIONS[0] * 1.4,
      NUMBER_POSITIONS[1] * 1.2,
      NUMBER_POSITIONS[1] * 1.1,
      NUMBER_POSITIONS[0] * 1.3,
      NUMBER_POSITIONS[0],
      NUMBER_POSITIONS[0],
      NUMBER_POSITIONS[0] * 1.4,
      NUMBER_POSITIONS[0] * 1.6,
      NUMBER_POSITIONS[0] * 1.3,
      NUMBER_POSITIONS[0],
      NUMBER_POSITIONS[0],
      NUMBER_POSITIONS[0] * 1.5,
      NUMBER_POSITIONS[0] * 1.2,
      NUMBER_POSITIONS[1] * 1.3,
      NUMBER_POSITIONS[1]
    ],
    []
  );

  const scaleX: number[] = useMemo(
    () =>
      x.map((val, i) => {
        if (i === 0) return 1;
        if (i === x.length - 1) return 1;

        return val < x[i - 1] ? -1 : 1;
      }),
    [x]
  );

  const dinosaurAnimation = useMemo(
    () => ({
      x,
      y: [0, -40, 0],
      scaleX: extendAnimationKeyframes(scaleX, 8)
    }),
    [x, scaleX, width]
  );

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
    scaleX: {
      ease: 'linear',
      duration: 20,
      repeat: Infinity
    }
  };

  useEffect(() => {
    setJumpingIndex(jumpingNumbersAnimation[currentJumpingIndex]);
  }, [currentJumpingIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJumpingIndex((prev) => (prev + 1) % (jumpingNumbersAnimation.length + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [width]);

  useEffect(() => {
    setCurrentJumpingIndex(0);
  }, [width]);

  return { dinosaurAnimation, dinosaurTransition, jumpingIndex };
}
