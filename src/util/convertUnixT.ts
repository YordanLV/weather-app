export default function getDate(unix_timestamp: number) {
  return new Date(unix_timestamp * 1000);
}

export function getHours(unix_timestamp: number) {
  return getDate(unix_timestamp).getHours();
}
