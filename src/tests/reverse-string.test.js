import reverseString from '../lib/reverse-string.js';

describe('reverseString function', () => {
  test('Takes a string and returns it reversed', () => {
    expect(reverseString('wonder')).toBe('rednow');
  });
});
