export function getUniquePairs (array) {
  const pairs = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length - 1; j++) {
      pairs.push([array[i], array[j + 1]]);
    }
  }

  return pairs;
}

export const arrayService = {
  getUniquePairs
};
