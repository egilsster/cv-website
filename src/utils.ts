import { format, intervalToDuration } from "date-fns";

export function formatDate(value: string | undefined): string {
  if (!value) {
    return "Present";
  }
  return format(new Date(value), "MMM, yyyy");
}

export function getTimeRange(start: string, end: string | undefined): string {
  const { months, years } = intervalToDuration({
    start: new Date(start),
    end: end ? new Date(end) : new Date(),
  });
  if (years) {
    return `${years} years, ${months} month(s)`;
  }
  return `${months} month(s)`;
}
