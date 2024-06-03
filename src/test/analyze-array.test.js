import analyzeArray from '../lib/analyze-array.js';

test('Finds average in input array', () => {
  expect(analyzeArray([2, 2, 2, 2, 2, 2]).average).toBe(2);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
