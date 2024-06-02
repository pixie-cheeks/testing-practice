import calculator from '../lib/calculator.js';

describe('Add two numbers', () => {
  test('2 + 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('5 + 10', () => {
    expect(calculator.add(5, 10)).toBe(15);
  });

  test('Works with negatives', () => {
    expect(calculator.add(-2, 2)).toBe(0);
  });
});

describe('Subtract two numbers', () => {
  test('2 - 2', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });

  test('5 - 3', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('Works with any integer', () => {
    expect(calculator.subtract(-5, 15)).toBe(-20);
    expect(calculator.subtract(5, -15)).toBe(20);
  });
});

describe('Divide two numbers', () => {
  test('2 / 2', () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  test('Works with negatives', () => {
    expect(calculator.divide(-2, 2)).toBe(-1);
  });

  test('Works with any number', () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(2, 10)).toBe(0.2);
    expect(calculator.divide(2, 0.1)).toBe(20);
  });
});

describe('Multiply two numbers', () => {
  test('2 * 2', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test('Works with any number', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(3, 10)).toBe(30);
    expect(calculator.multiply(4, 5)).toBe(20);
  });
});
