export function miliseccondsSincePost(date) {
  const dataRepositorio = new Date(date);
  const dateNow = new Date();
  const TimePassed = dateNow - dataRepositorio;

  Math.min(TimePassed)

  return TimePassed;
}
