export function dateFormatter(repositoryDate) {
  const date = new Date(repositoryDate);


  const d = zeroFill(date.getDate());
  const mo = zeroFill(date.getMonth());
  const y = zeroFill(date.getFullYear());
  const h = zeroFill(date.getHours());
  const mi = zeroFill(date.getMinutes());
  const s = zeroFill(date.getSeconds());
  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;

  function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
  }
}
