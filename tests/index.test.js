// index.test.js
const formatDate = require("../index");

test("formats date correctly", () => {
  const date = new Date("2024-03-12");
  expect(formatDate(date, "UTC", "en-US")).toBe("12 March 2024");
});
