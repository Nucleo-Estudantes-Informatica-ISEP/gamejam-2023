export default function extendAnimationKeyframes(x: number[], multiplier: number) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i]);
    for (let j = 0; j < multiplier; j++) {
      if (i === x.length - 1) result.push(x[i]);
      else {
        if (x[i] === x[i + 1]) result.push(x[i]);
        else result.push(0);
      }
    }
  }

  return result;
}
