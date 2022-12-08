export function dateGenerator(date) {
  // return new Date(date).toLocaleDateString('uk')
  return date.replace(/\//g, '.')
}
