import { Clock } from '@/types/clock';

export function durationToString(durationInSeconds: number): string {
  if (durationInSeconds < 60) {
    return `${durationInSeconds}s`;
  }

  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
}

export function hmsToClockString(
  hours: number,
  minutes: number,
  seconds: number | null = null
): string {
  return (
    `${hours.toString().padStart(2, '0')}:` +
    `${minutes.toString().padStart(2, '0')}` +
    (seconds ? `:${seconds?.toString().padStart(2, '0')}` : '')
  );
}

export function clockToTimeString(clock: Clock): string {
  return (
    `${clock.time.hour.toString().padStart(2, '0')}:` +
    `${clock.time.min.toString().padStart(2, '0')}:` +
    `${clock.time.sec.toString().padStart(2, '0')}`
  );
}

export function clockToDate(clock: Clock): string {
  return (
    `${clock.time.day.toString().padStart(2, '0')}/` +
    `${clock.time.month.toString().padStart(2, '0')}/` +
    `${clock.time.year.toString().padStart(2, '0')}`
  );
}

export function clockToWeekDay(clock: Clock): string {
  const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  return days[clock.time.dotw];
}
