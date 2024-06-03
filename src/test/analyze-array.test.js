import analyzeArray from '../lib/analyze-array.js';

test('Finds average in input array', () => {
  expect(analyzeArray([2, 2, 2, 2, 2, 2]).average).toBe(2);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Finds minimum in input array', () => {
  expect(analyzeArray([1, 2, 3]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Finds maximum in input array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 2, 3]).max).toBe(3);
});

test('Stores input array length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

test('Has all the properties in one return value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
