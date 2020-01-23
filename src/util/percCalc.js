export default function(number, min = -100, max = 100) {
  return Math.abs(100 - (10 + ((number - min) / (max - min)) * 90));
}
