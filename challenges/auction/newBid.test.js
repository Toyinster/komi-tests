const newBid = require('./newBid');

test('example', () => {
  expect(newBid(220, 3)).toBe(226);
});

test('new bid should return correct bid', () => {
  expect(newBid(100, 1)).toBe(101);
  expect(newBid(220, 3)).toBe(226);
  expect(newBid(330, 2)).toBe(340);
  expect(newBid(440, 3)).toBe(470);
  expect(newBid(720, 4)).toBe(800);
  expect(newBid(298, 2)).toBe(305);
  expect(newBid(298, 42)).toBe(620);
});
