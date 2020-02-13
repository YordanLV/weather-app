export default function (value: number, fallBack: string) {
  return isNaN(value) ? fallBack : value;
}
