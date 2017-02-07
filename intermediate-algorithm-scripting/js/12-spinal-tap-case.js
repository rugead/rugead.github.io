'use strict';

function spinalCase(str) {
  str = str.replace(/[A-Z]/g, ' $&');
  str = str.replace(/_/g, ' ');
  str = str.replace(/-/g, ' ');
  str = str.replace(/\s+/g, '-');
  str = str.replace(/^-/, '');
  str = str.toLowerCase();
  console.log('RETURN => ', str);
  return str;
}

spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); //should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); //should return "all-the-small-things".