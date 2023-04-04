const padTime = (time: number) => `0${time}`.slice(-2);
// const padTime = (time: number) => time.toString().padStart(2, "00");

export function humanReadable(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const restMinutes = totalSeconds % 3600;
  const minutes = Math.floor(restMinutes / 60);
  const seconds = totalSeconds % 60;

  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
}
