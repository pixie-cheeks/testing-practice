import capitalize from '../lib/capitalize.js';

test('Takes a string & returns it with the first letter capitalized', () => {
  expect(capitalize('name')).toBe('Name');
});

test('Works with any input string', () => {
  expect(capitalize('golem')).toBe('Golem');
  expect(capitalize('my name is pikachu')).toBe('My name is pikachu');
});

test('Works on empty string', () => {
  expect(capitalize('')).toBe('');
});
