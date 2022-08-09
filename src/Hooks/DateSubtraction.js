export function dateSubtration(data) {
  const dataRepositorio = new Date(data);
  const dataAgora = new Date();
  const TimePassed = dataAgora - dataRepositorio;

  //                ms           s      m    h    d
  const days = TimePassed / 1000 / 60 / 60 / 24;
  const hours = TimePassed / 1000 / 60 / 60;
  const minutes = TimePassed / 1000 / 60;
  const seconds = TimePassed / 1000;

  const passedDays = Math.floor(days);
  const passedHours = Math.floor(hours % 24);
  const passedMinutes = Math.floor(minutes % 60);
  const passedSeconds = Math.floor(seconds % 60);
  return passedDays > 1
    ? `Postado a ${passedDays} dias ${passedHours}:${passedMinutes}:${passedSeconds}`
    : `Postado a ${passedDays} dia ${passedHours}:${passedMinutes}:${passedSeconds}`;
}

// export function DateFormatter() {
//   function zeroFill(n) {
//     return n < 9 ? `0${n}` : `${n}`;
//   }
//   function formatDate(date) {
//     const d = zeroFill(date.getDate());
//     const mo = zeroFill(date.getMonth());
//     const y = zeroFill(date.getFullYear());
//     const h = zeroFill(date.getHours());
//     const mi = zeroFill(date.getMinutes());
//     const s = zeroFill(date.getSeconds());
//     return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
//   }
//   const formatedRepositoryDate = formatDate(dataRepositorio)
//   const formatedNowDate = formatDate(dataAgora)
// }
