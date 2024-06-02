import capitalize from '../lib/capitalize.js';

test('Takes a string and returns it capitalized', () => {
  expect(capitalize('name')).toBe('Name');
});
