export const formatDate = (value: string | undefined): string =>
  value ?? "Present";

export function parseDate(value: string): Date {
  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

export function getTimeRange(start: string, end?: string): string {
  const startDate = parseDate(start);
  const endDate = end ? parseDate(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (endDate.getDate() < startDate.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} year${years === 1 ? "" : "s"}`);
  }

  if (months > 0) {
    parts.push(`${months} month${months === 1 ? "" : "s"}`);
  }

  return parts.join(", ");
}
