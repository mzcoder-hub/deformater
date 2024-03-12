// index.test.js
const { formatDate, extractDate } = require("../index");

test("formats date correctly", () => {
  const date = new Date("2024-03-12");
  expect(formatDate(date, "UTC", "en-US")).toBe("12 March 2024");
});

test("extracts date correctly", () => {
  const date = new Date("2024-03-12");
  expect(extractDate(date, "UTC", "en-US")).toEqual({
    day: "12",
    month: "March",
    year: "2024",
  });
});
