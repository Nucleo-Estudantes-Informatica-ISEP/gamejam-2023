export default function extendAnimationKeyframes(x: number[], multiplier: number) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < multiplier; j++) result.push(x[i]);
  }

  return result;
}
