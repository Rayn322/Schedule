import { type Period, schedule } from './schedule';

export function getCurrentPeriod(): Period {
  let currentPeriod;

  schedule.regular.every((period) => {
    if (isCurrentPeriod(period)) {
      currentPeriod = period;
      return false;
    }
    return true;
  });

  return (
    currentPeriod || {
      name: 'Break probably',
      start: {
        hour: 2,
        minute: 50
      },
      end: {
        hour: 31,
        minute: 45
      }
    }
  );
}

function isCurrentPeriod(period: Period) {
  const now = new Date();
  const start = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    period.start.hour,
    period.start.minute
  );
  const end = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    period.end.hour,
    period.end.minute
  );

  return now >= start && now <= end;
}

export interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export function getTimeLeft(period: Period): TimeLeft {
  const now = new Date();
  const end = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    period.end.hour,
    period.end.minute
  );
  const timeLeft = end.getTime() - now.getTime();
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft - hours * 1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor((timeLeft - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);

  return {
    hours,
    minutes,
    seconds
  };
}
