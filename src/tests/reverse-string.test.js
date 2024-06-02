import reverseString from '../lib/reverse-string.js';

test('Takes a string and returns it reversed', () => {
  expect(reverseString('wonder')).toBe('rednow');
});

test('Works on another string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Works on any string', () => {
  expect(reverseString('blah')).toBe('halb');
});
