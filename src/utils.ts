import { format, intervalToDuration } from "date-fns";

export function formatDate(value: string | undefined): string {
  if (!value) {
    return "Present";
  }
  return format(new Date(value), "MMM, yyyy");
}

export function getTimeRange(start: string, end: string | undefined): string {
  function fmt(text: string, plural: boolean): string {
    return text.concat(plural ? "s" : "");
  }

  const { months, years } = intervalToDuration({
    start: new Date(start),
    end: end ? new Date(end) : new Date(),
  });
  const ranges: string[] = [];
  if (years) {
    ranges.push(`${years} ${fmt("year", years > 1)}`);
  }
  if (months) {
    ranges.push(`${months} ${fmt("month", months > 1)}`);
  }
  return ranges.join(", ");
}
