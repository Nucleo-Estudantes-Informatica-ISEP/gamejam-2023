import { useMemo } from 'react';

export default function useStickyDino(width: number, height: number) {
  const dinoPosition = useMemo(() => {
    if (width < 768) return -35;
    if (width < 1024) return -50;
    return -70;
  }, [width, height]);

  const stickyDinoPositions = useMemo(() => {
    return [
      { top: dinoPosition, right: width + dinoPosition * 2.3, rotate: 135 },
      { top: dinoPosition, right: dinoPosition, rotate: -135 },
      { top: height + dinoPosition * 2, right: width + dinoPosition * 2, rotate: 45 },
      { top: height + dinoPosition * 2, right: dinoPosition, rotate: -45 }
    ];
  }, [dinoPosition, height, width]);

  return { stickyDinoPositions };
}
