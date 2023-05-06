export default function paddingNumber(num: number, length: number) {
  return num.toString().padStart(length, '0');
}
