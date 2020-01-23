export default function getDate(unix_timestamp) {
  return new Date(unix_timestamp * 1000);
}

export function getHours(unix_timestamp) {
  return getDate(unix_timestamp).getHours();
}
