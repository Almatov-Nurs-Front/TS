function wrapInObject<T>(arr: T[]): {value: T}[] {
  return arr.map(value => ({ value }));
};

const finalArrFromNumbers = wrapInObject([1, 2, 3]);
