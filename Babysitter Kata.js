/*
The babysitter:
 - starts no earlier than 5:00 pm
 - leaves no later than 4:00 am
 - gets paid $12/hour from start-time to bedtime
 - gets paid $8/hour from bedtime to midnight
 - gets paid $16/hour from midnight to end of job
 - gets paid for full hours only (no fractions)
*/

const START_TIME = '6:15 pm';
const END_TIME = '3:35 am';
const BED_TIME = '8:00 pm'





}

function getHourFromTime(time){
  // returns string of length 1 or 2 with hour
  return time.slice(0, time.indexOf(':'));
}

function getMinuteFromTime(time){
  // returns string of length 2 with minute value
  return time.substr(time.indexOf(':') + 1, 2);
}

function getAmPmFromTime(time){
  // returns string of length 2 containing 'am' or 'pm'
  return time.substr(time.lastIndexOf('m') - 1, 2)
}
