import caesarCipher from '../lib/caesar-cipher.js';

test('Shifts each letter in a string by the shift factor', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});
