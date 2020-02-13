export default function (number: number, min: number = -100, max: number = 100) {
  return Math.abs(100 - (10 + ((number - min) / (max - min)) * 90));
}
