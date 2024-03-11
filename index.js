// index.js

function formatDate(date, timezone = "UTC", locale = "en-US") {
  const options = { day: "2-digit", month: "long", year: "numeric", timezone };
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

  // Remove the comma from the formatted date
  const formattedDateWithoutComma = formattedDate.replace(",", "");

  // Split the formatted date into day, month, and year
  const [month, day, year] = formattedDateWithoutComma.split(" ");

  // Reconstruct the date in the desired format
  return `${day} ${month} ${year}`;
}

module.exports = formatDate;
