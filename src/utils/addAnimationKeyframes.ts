export default function addAnimationKeyframes(x: number[], multiplier: number) {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i]);
    for (let j = 0; j < multiplier - 1; j++) result.push(0);
  }

  console.log(result);

  return result;
}
