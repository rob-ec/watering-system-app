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

export function clockToWeekDay(clock: Clock, short: boolean = false): string {
  const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  return short ? days[clock.time.dotw].slice(0, 3) : days[clock.time.dotw];
}

export function clockToMonth(clock: Clock, short: boolean = false): string {
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  return short ? months[clock.time.month - 1].slice(0, 3) : months[clock.time.month - 1];
}

export function clockToElegantDate(clock: Clock): string {
  let dayName = clockToWeekDay(clock);
  dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

  return `${dayName}, ${clock.time.day} de ${clockToMonth(clock)} de ${clock.time.year}`;
}
