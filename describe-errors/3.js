'use strict';


/*
  browser:

  name:
  message:

  callstack:

  live cycle:

  the mistake:
  the fix(es):
*/


let flag = true;

for (flag) {

  const userInput = prompt('enter something to leave this loop');
  console.log('userInput:', typeof userInput, userInput);

  if (userInput !== null && userInput !== 'null') {
    flag = false;
    console.log('flag:', typeof flag, flag);
  }

}


/* anything else to say?

*/
