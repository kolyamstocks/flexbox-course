import moment from 'moment';

// Epic time stamp -> every second since jan 1, 1970
console.log(moment.now());

// Date right now
const rightNow = moment();
console.log(rightNow);

// Can pass specific date
const birthday = moment('1999-11-29', 'YYYY-MM-DD');
console.log(birthday);
// Shows day of the week
console.log(birthday.format('dddd'));
// Time from now
console.log(birthday.fromNow());
// Formats date
console.log(birthday.format('MMM Do YYYY'));

// Time addition
const twoWeeksFromNow = moment().add(14, 'days');
console.log(twoWeeksFromNow.toString());