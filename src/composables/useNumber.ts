export const setVisitNum = (num: number) => {
  if (num > 1000) {
    return `${(num / 1000).toFixed(2)?.replace(".00", "") || 0}w`;
  }
  return num;
};
