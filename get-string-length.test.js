// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { myString, len } = require('./get-string-length');

test('should get the real length of myString', () => {
  expect(len).toBeGreaterThan(-1);
  expect(len).toBe(myString.length);
});
