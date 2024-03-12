# dformater

A Node.js package to easily format dates into "dd M Y" format with the option to set the timezone dynamically.

## Installation

You can install `dformater` using npm:

```bash
npm install dformater
```

## Usage

This is usage for dformater, its basic and its easy for user to contribute to, theres a feature that you can try the list will be listed below :

- Change Format Date to d M Y
- Extract date into object {day, month, year}

### Format Date into d M Y

```javascript
const formatDate = require("dformater");

const date = new Date(); // Current date and time
const formattedDate = formatDate(date, "America/New_York", "en-US");
console.log(formattedDate); // Output: "12 March 2024"
```

### Extract Date into an object

```javascript
const formatDate = require("dformater");

const date = new Date(); // Current date and time
const formattedDate = extractDate(date, "UTC", "en-US");
console.log(formattedDate); // Output: { day, month, year }
```

## API

`formatDate(date[, timezone[, locale]])`

Formats a given date into the desired format.

- date: The date to be formatted. It can be a Date object or a string representing a date.
- timezone (optional): The timezone to use for formatting the date. Defaults to "UTC".
- locale (optional): The locale to use for formatting. Defaults to "en-US".

### Example

```javascript
const formatDate = require("dformater");

const date = new Date(); // Current date and time
const formattedDate = formatDate(date, "America/New_York", "en-US");
console.log(formattedDate); // Output: "12 March 2024"
```

## Notes

- The function uses the Intl.DateTimeFormat object to format the date.
- The default format is "day month year", where:
  -- day is a two-digit day of the month.
  -- month is the full name of the month.
  -- year is the full numeric representation of the year.
- The timezone parameter allows you to specify the timezone in which the date should be interpreted. If not provided, it defaults to "UTC".
- The locale parameter allows you to specify the locale for formatting. If not provided, it defaults to "en-US".
- The formatted date does not include a comma.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
