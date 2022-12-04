export function pipeDuration(minutes) {
  const m = minutes % 60;
  const h = Math.floor((minutes / 60) % 60);
  return String(h).padStart(2, 0) + ':' + String(m).padStart(2, 0);
}
