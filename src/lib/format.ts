export const formatHuf = (value: number) =>
  `${value.toLocaleString("hu-HU").replace(/,/g, " ")} Ft`;
