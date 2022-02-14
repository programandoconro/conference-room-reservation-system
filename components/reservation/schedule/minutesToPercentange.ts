const minutesToPercentange = (minutes: number): string => {
  if (minutes === 0) {
    return "100%";
  }
  const percentage = (minutes / 60) * 100;
  return `${percentage}%`;
};

export default minutesToPercentange;
