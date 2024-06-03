import caesarCipher from '../lib/caesar-cipher.js';

test('Shifts each letter in a string by the shift factor', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test('Works on more than one input', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
  expect(caesarCipher('abc', 2)).toBe('cde');
  expect(caesarCipher('def', 2)).toBe('fgh');
  expect(caesarCipher('def', 1)).toBe('efg');
});

test('Wraps from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('xyz', 4)).toBe('bcd');
  expect(caesarCipher('xyz', 1)).toBe('yza');
  expect(caesarCipher('bcd', 26)).toBe('bcd');
});

test('Preserves case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('ZigZag', 1)).toBe('AjhAbh');
  expect(caesarCipher('ABCD', 26)).toBe('ABCD');
  expect(caesarCipher('Hello Is', 26)).toBe('Hello Is');
});

test('Preserves Punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(
    caesarCipher('Hello there! Is this the right time for this?', 26),
  ).toBe('Hello there! Is this the right time for this?');
  expect(caesarCipher('1, 2, 3, 4, 5 and then 6', 26)).toBe(
    '1, 2, 3, 4, 5 and then 6',
  );
});
