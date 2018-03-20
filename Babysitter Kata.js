// BABYSITTER KATA

/*
The babysitter:
 - starts no earlier than 5:00 pm
 - leaves no later than 4:00 am
 - gets paid $12/hour from start-time to bedtime
 - gets paid $8/hour from bedtime to midnight
 - gets paid $16/hour from midnight to end of job
 - gets paid for full hours only (no fractions)
*/

// Times
// using default values in military time for now
// start time and bed time should be on the hour
const START_TIME = '18:00';
const END_TIME = '3:35';
const BED_TIME = '20:00';

// round end time to nearest hour
const ROUNDED_END_TIME = roundTime(END_TIME);

// create hour variables from time inputs
const ROUNDED_END_TIME_HOUR = getHourFromTime(ROUNDED_END_TIME);
const BED_TIME_HOUR = getHourFromTime(BED_TIME);
const START_TIME_HOUR = getHourFromTime(START_TIME);

// Pay Rates
const HOURLY_RATE_BEFORE_BEDTIME = 12;
const HOURLY_RATE_FROM_BEDTIME_TO_MIDNIGHT = 8;
const HOURLY_RATE_AFTER_MIDNIGHT = 16;
var total_pay = 0;

// Loop through each hour worked calculating pay
for (var i = START_TIME_HOUR;
i != ROUNDED_END_TIME_HOUR;
i = incrementHour(i)){

  // Case 1: before bedtime, and before midnight
  if (i < String(parseInt(BED_TIME_HOUR) ) && i >= parseInt(START_TIME_HOUR)){
    total_pay += HOURLY_RATE_BEFORE_BEDTIME;

  // Case 2: after bedtime, before midnight
  } else if (i >= parseInt(BED_TIME_HOUR)) {
    total_pay += HOURLY_RATE_FROM_BEDTIME_TO_MIDNIGHT;

  // Case 3: after midnight
  } else {
    total_pay += HOURLY_RATE_AFTER_MIDNIGHT;
  }
  console.log('current hour ' + i);
  console.log('pay $' + total_pay);
}

function getHourFromTime(time){
  // returns string of length 1 or 2 with hour
  return time.slice(0, time.indexOf(':'));
}

function getMinuteFromTime(time){
  // returns string of length 2 with minute value
  return time.substr(time.indexOf(':') + 1, 2);
}

function incrementHour(hour){
  // returns string in military format of the hour after input hour
  if (hour === '23'){
    return '0';
  }
  else{
    return String(parseInt(hour)+1);
  }
}

// function decrementHour(hour){
//   // returns string in military format of the hour before input hour
//   if (hour === '0'){
//     return '23';
//   }
//   else{
//     return String(parseInt(hour)-1);
//   }
// }

function roundTime(time){
  // returns string in military format of time rounded to nearest hour
  let minute = getMinuteFromTime(time);
  let hour = getHourFromTime(time);
  // round up if past :30, otherwise no change to hour
  if (minute >= 30){
    hour = incrementHour(hour);
  }
  minute = '00';

  return hour + ':' + minute;
}

// function getAmPmFromTime(time){
//   // returns string of length 2 containing 'am' or 'pm'
//   return time.substr(time.lastIndexOf('m') - 1, 2)
// }
