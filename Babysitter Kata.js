/*
The babysitter:
 - starts no earlier than 5:00 pm
 - leaves no later than 4:00 am
 - gets paid $12/hour from start-time to bedtime
 - gets paid $8/hour from bedtime to midnight
 - gets paid $16/hour from midnight to end of job
 - gets paid for full hours only (no fractions)
*/

// using default values in military time for now
const START_TIME = '18:00';
const END_TIME = '3:35';
const BED_TIME = '20:00';



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

function decrementHour(hour){
  // returns string in military format of the hour before input hour
  if (hour === '0'){
    return '23';
  }
  else{
    return String(parseInt(hour)-1);
  }
}


// function getAmPmFromTime(time){
//   // returns string of length 2 containing 'am' or 'pm'
//   return time.substr(time.lastIndexOf('m') - 1, 2)
// }
