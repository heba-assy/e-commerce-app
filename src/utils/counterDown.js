export function calcCounter(targetDate) {
  if (!targetDate) targetDate = new Date().setHours(23, 59, 59, 999);

  const ONE_HOUR_MS = 60 * 60 * 1000;
  const ONE_MIN_MS = 60 * 1000;
  const ONE_SEC_MS = 1000;

  const timeLeft = targetDate - new Date().getTime();

  if (timeLeft > 0) {
    const hours = Math.trunc(timeLeft / ONE_HOUR_MS);
    const mins = Math.trunc((timeLeft % ONE_HOUR_MS) / ONE_MIN_MS);
    const secs = Math.trunc(
      ((timeLeft % ONE_HOUR_MS) % ONE_MIN_MS) / ONE_SEC_MS
    );

    return { hours, mins, secs };
  } else {
    return { hours: 0, mins: 0, secs: 0 };
  }
}
