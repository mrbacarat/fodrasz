export function formatHuf(value: number) {
  return new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatDuration(minutes: number) {
  return `${minutes} perc`;
}
