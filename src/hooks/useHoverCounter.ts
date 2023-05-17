import { useState } from 'react';

export default function useHoverCounter() {
  const [hoverCounter, setHoverCounts] = useState(0);

  const incrementCounter = () => {
    setHoverCounts((c) => c + 1);
  };

  function isDisplayProgressIndex(index: number) {
    if (index === 0) return true;
    if (index === 5) return true;
    return index % 10 === 0;
  }

  const isDisplayProgressNumber = () => {
    return isDisplayProgressIndex(hoverCounter);
  };

  return { incrementCounter, isDisplayProgressNumber, hoverCounter };
}
