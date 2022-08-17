const agent = require("./lastNames")
test('example', () => {
  expect(
    agent(
    "John",
      "Hey John, is your full name John Lennon or John Travolta?"
    )
  ).toStrictEqual(["Lennon", "Travolta"])
});

test('lastNames should return array of last names', () => {
  expect(
    agent(
      "Michael",
      "Michael, how are you? - Cool, how is John Williams and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?"
    )
  ).toStrictEqual(["Jordan", "Johnson", "Green", "Wood"])
});
