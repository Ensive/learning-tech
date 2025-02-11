function countDaysBetweenDates(date1, date2) {
  const milliseconds = new Date(date2).getTime() - new Date(date1).getTime();
  return Math.floor(milliseconds / 1000 / 60 / 60 / 24);
}

// true and need to send Edwin an example (actual text)
const daysAtOSDN = countDaysBetweenDates(
  new Date(2013, 2, 18),
  new Date(2014, 7, 15),
);

// true and waiting for letter of experience
const daysAtInfopulse = countDaysBetweenDates(
  new Date(2014, 7, 18),
  new Date(2015, 5, 30), // likely higher
);

// true and proven
const daysAtInnovecs = countDaysBetweenDates(
  new Date(2015, 6, 1),
  new Date(2015, 9, 31), // likely higher
);

// true and proven
const daysAtSvitla = countDaysBetweenDates(
  new Date(2015, 10, 11),
  new Date(2017, 2, 10), // likely higher
);

// true and proven +++
const daysAtCS = countDaysBetweenDates(
  new Date(2017, 3, 5),
  new Date(2018, 10, 20),
);

// true and proven, but need updated letter of experience
const daysAtGlomex = countDaysBetweenDates(
  new Date(2018, 4, 8),
  new Date(2020, 0, 31),
);

// true and proven
const daysAtKayzen = countDaysBetweenDates(
  new Date(2020, 6, 13),
  new Date(2020, 10, 15),
);

// true and can do anything (employees, customers, etc)
const daysAtCollaba = countDaysBetweenDates(
  new Date(2019, 3, 9),
  new Date(2023, 5, 23),
);

// true and proven
const daysAtSonatus = countDaysBetweenDates(new Date(2023, 6, 24), new Date());

// boxbrain
// illuminate
// fondexx
// bytecode
// intetics ?
// soft engines ?

const totalDays = [
  daysAtOSDN,
  daysAtInfopulse,
  daysAtInnovecs,
  daysAtSvitla,
  daysAtCS,
  daysAtGlomex,
  daysAtKayzen,
  // daysAtCollaba,
  // daysAtSonatus
];

const totalDaysCount = totalDays.reduce((value, currentValue) => {
  return value + currentValue;
}, 0);

const totalYears = totalDaysCount / 366;

console.log("totalDaysCount :>> ", totalDaysCount);
console.log("totalYears :>> ", totalYears);

// console.log("daysAtOSDN :>> ", daysAtOSDN);
// console.log("daysAtCS :>> ", daysAtCS);
