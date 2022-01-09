const names = require("./names");
test('example', () => {
  expect(names("james bond")).toStrictEqual(["James", "Bond"]);
});

test('names should return array of first name and last name', () => {
  expect(names("james bond")).toStrictEqual(["James", "Bond"]);
  expect(names("MR JOHN NAZING")).toStrictEqual(["John", "Nazing"]);
  expect(names("Mrs Anne Mary Smith")).toStrictEqual(["Anne", "Smith"]);
  expect(names("Yvonne Randall")).toStrictEqual(["Yvonne", "Randall"]);
  expect(names("mark jason thomas foster")).toStrictEqual(["Mark", "Foster"]);
  expect(names("mr ronald jeffrey peter lambourne")).toStrictEqual(["Ronald", "Lambourne"]);
});
