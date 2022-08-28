export function dateSubtration(date) {
  const dataRepositorio = new Date(date);
  const dateNow = new Date();
  const TimePassed = dateNow - dataRepositorio;

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
    : `Postado a ${passedHours}:${passedMinutes}:${passedSeconds}`;
}
