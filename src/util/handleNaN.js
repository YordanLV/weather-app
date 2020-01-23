export default function(value, fallBack) {
  return isNaN(value) ? fallBack : value;
}
