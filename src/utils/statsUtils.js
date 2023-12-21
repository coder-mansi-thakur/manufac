
export const calculateMean = (values) => {
  const sum = values.reduce((acc, value) => acc + value, 0);

  return Number((sum / values.length).toFixed(3));
};


export const calculateMedian = (values) => {
  if(!values) return 0
  const sortedValues = values.sort((a, b) => a - b);
  const middle = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 0) {
    return ((sortedValues[middle - 1] + sortedValues[middle]) / 2);
  } else {
    return sortedValues[middle];
  }
};


export const calculateMode = (values) => {
  const countMap = {};
  let maxCount = 0;
  let modeValue = null;

  values.forEach((value) => {
    countMap[value] = (countMap[value] || 0) + 1;

    if (countMap[value] > maxCount) {
      maxCount = countMap[value];
      modeValue = value;
    }
  });

  return modeValue;
};