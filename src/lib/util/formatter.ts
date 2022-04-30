import type { Time } from '$lib/schedule';

export function formatEndTime(time: Time): string {
  // subtract 24 in case the hour is above 24 (which represents the next day)
  const hour = time.hour > 24 ? time.hour - 24 : time.hour;
  return `${hour}:${time.minute}`;
}

export function formatCountdown(hours: number, minutes: number, seconds: number) {
  // empty string if no time left and add 's' if greater than 1
  const hoursString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  const minutesString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : '';
  const secondsString = seconds > 0 ? `${seconds} second${seconds > 1 ? 's' : ''}` : '';

  // put strings that aren't empty into array
  let parts = [hoursString, minutesString, secondsString];
  parts = parts.filter((part) => part.length > 0);

  // do proper formatting
  if (parts.length === 3) {
    return `${parts[0]}, ${parts[1]}, and ${parts[2]}`;
  } else if (parts.length === 2) {
    return `${parts[0]} and ${parts[1]}`;
  } else if (parts.length === 1) {
    return parts[0];
  } else {
    return '0 seconds';
  }
}
