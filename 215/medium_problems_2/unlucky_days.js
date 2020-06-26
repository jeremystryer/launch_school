// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

// input: number representing a year > 1752
// output: number representing amout of "Fridays the 13ths" in given year

// have a count of Friday13ths initialized to 0
// create an array of months [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// iterate through array of months
// let date = new Date(`${months[index]}, 13, ${inputYear}`)
// let day = date.getDay(); -> returns an integer of 0 - 6 which corresponds to Sun - Sat, Fri is 5
// if day ==== 5, the increment counter of Friday13ths by 1
// after iteration is complete, return counter

// solution using forEach and a counter
function fridayThe13ths(year) {
  let friday13ths = 0;
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  months.forEach(function (month) {
    let date = new Date(`${month}, 13, ${year}`)
    let day = date.getDay();
    if (day === 5) friday13ths += 1;
  });

  return friday13ths;
}

// solution using reduce with all logic in one anonymous function
function fridayThe13ths(year) {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return months.reduce(function (fridaythe13ths, month) {
    let date = new Date(`${year}, ${month}, 13`)
    let day = date.getDay();
    if (day === 5) fridaythe13ths += 1;
    return fridaythe13ths;
  }, 0);
}

// solution using reduce with one helper function to create dates of 13th
function fridayThe13ths(year) {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return months.reduce(function (fridaythe13ths, month) {
    let day = createDate(month, year);
    if (day === 5) fridaythe13ths += 1;
    return fridaythe13ths;
  }, 0);
}

function createDate(month, year) {
  let date = new Date(`${month}, 13, ${year}`)
  let day = date.getDay();
  return day;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
