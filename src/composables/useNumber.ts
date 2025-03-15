export const setVisitNum = (num: number) => {
  if (num > 10000) {
    return `${(num / 10000).toFixed(1)?.replace(".0", "") || 0}w`;
  }
  return num;
};
