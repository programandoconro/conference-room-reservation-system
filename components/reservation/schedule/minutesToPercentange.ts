const minutesToPercentange = (minutes: number): string => {
  if (minutes === 0) {
    return "100%";
  }
  const percentage = (minutes / 60) * 100;
  return `${percentage + 1}%`;
};

export default minutesToPercentange;
