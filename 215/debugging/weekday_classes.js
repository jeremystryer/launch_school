// There are a lot of exciting classes offered in our region. We wrote a small script that checks which ones are still upcoming and compatible with our calendar. We must be available to attend all sessions of a particular class in order to sign up for it. We can always arrange that on weekends, but for weekdays we have to check whether our calendar is free.
//
// Although the code below runs, something is wrong with it. Why is everything except for the Back To The Future Movie Night in the list of compatible classes?

const TODAY = toDate("2018-08-05");

function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 &&
         date.getDay() <= 5;
}

const myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
};

const offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"], // function isInThePast returns true, so this movie is in the past
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    const dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  };

  const compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    const classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]

// The problem is with the toString() function, specifically the getYear(), getMonth(), and getDay() functions.
// 1) getYear() has been deprecated. getFullYear() should be used.
// 2) getMonth() returns a number of 0 - 11, corresponding to January - December. So 1 should be added to the return value in order to match the anticipated string value.
// 3) getDay() returns a number of 0 - 6, corresponding to Sunday - Saturday. getDate() should be used.
// Finally, the string is written out as 4 digit year, 2 digit month, and 2 digit day, so both the return values for getMonth() and getDay() need to be formatted accordingly.

// Here is the fix:

// function toString(date) {
//   let month = date.getMonth() + 1;
//   let dayOfMonth = date.getDate();
//   let stringDate = `${date.getFullYear()}-${formatDate(month)}-${formatDate(dayOfMonth)}`;
//   return stringDate;
// }
//
// function formatDate(number) {
//   return String(number).length === 1 ? `0${number}` : number;
// }
