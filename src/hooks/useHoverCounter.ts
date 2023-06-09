import { useEffect, useState } from 'react';

const messages = [
  '',
  'Ahm...',
  'Ok..',
  'Ainda não',
  'Se calhar',
  '',
  'Ui...',
  'Imagina',
  '...',
  'Será?',
  ''
];

export default function useHoverCounter() {
  const [hoverCounter, setHoverCounts] = useState(0);
  const [hoverRandomPositionIndex, setHoverRandomPositionIndex] = useState(0);
  const [fire, setFire] = useState(false);

  function isDisplayProgressIndex(index: number) {
    if (index === 0) return false;
    if (index === 1) return true;
    if (index === 3) return true;
    if (index === 5) return true;
    return index % 10 === 0;
  }

  const isDisplayProgressNumber = () => {
    return isDisplayProgressIndex(hoverCounter);
  };

  const incrementCounter = () => {
    const randomBetween1And3 = Math.floor(Math.random() * 2 + 1);
    setHoverRandomPositionIndex((c) => (c + randomBetween1And3) % 4);
    setHoverCounts((c) => c + 1);
  };

  const getHoverMessage = () => {
    if (hoverCounter === 0) return '';
    if (hoverCounter === 5) return '...';

    return messages[hoverCounter / 10];
  };

  useEffect(() => {
    if (hoverCounter > 0 && hoverCounter % 50 === 0) setFire(true);
  }, [hoverCounter]);

  return {
    incrementCounter,
    hoverRandomPositionIndex,
    isDisplayProgressNumber,
    hoverCounter: hoverCounter,
    getHoverMessage,
    fire
  };
}
