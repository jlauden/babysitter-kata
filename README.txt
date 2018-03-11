Date: 3/10/18
Author: Jon Lauden

-- Preface -----------------
This is my first README of any kind, and I have not yet read a single thing about what the proper format is for a README (is the title even supposed to be in caps?), so please bear with me and the stylistic mistakes that I am sure to make in this document.  What follows are notes from the creation of my first Kata.
From https://github.com/PillarTechnology/kata-babysitter

-- Method ------------------
For now, as this is my first attempt, I will not attempt to code following TDD principles.  Nor will this be an object-oriented approach.  I will attempt to add deterministic functions where possible.  

-- Problem Statement -------
From https://github.com/PillarTechnology/kata-babysitter

The babysitter:
 - starts no earlier than 5:00 pm
 - leaves no later than 4:00 am
 - gets paid $12/hour from start-time to bedtime
 - gets paid $8/hour from bedtime to midnight
 - gets paid $16/hour from midnight to end of job
 - gets paid for full hours only (no fractions)

-- Assumptions ------------
1.  At this time, input will not be checked for validity.  Thus it is assumed:
	a) input will follow the “after 5:00 pm, before 4:00 am” rule.  
	b) input will be in the format of hh:mm in military time.
2.  The full hours only rule is interpreted as follows:
	a) start time and bed time are on the hour.
	b) end time is rounded to the nearest hour.
