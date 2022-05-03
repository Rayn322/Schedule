import { type Period, scheduleList, type Schedule } from './schedule';

export function getCurrentPeriod(): Period {
  let currentPeriod;

  getCurrentSchedule().every((period) => {
    if (isCurrentPeriod(period)) {
      currentPeriod = period;
      return false;
    }
    return true;
  });

  return (
    currentPeriod || {
      name: 'Something went wrong',
      start: {
        hour: 0,
        minute: 0
      },
      end: {
        hour: 24,
        minute: 0
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

function getCurrentSchedule(): Schedule {
  const now = new Date();
  const day = now.getDay();

  if (day === 3) {
    return scheduleList.block1;
  } else if (day === 4) {
    return scheduleList.block2;
  } else {
    return scheduleList.regular;
  }
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
