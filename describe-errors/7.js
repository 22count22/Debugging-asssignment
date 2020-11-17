'use strict';


/*
  browser:chrome

  name:let
  message: TypeError: Assignment to constant variable.

  callstack:

  live cycle:

  the mistake: TypeError: Assignment to constant variable.
  the fix(es): const to let
*/


const aString = 'wxyz';

for (let index = aString.length - 1; index >= 0; index--) {
  const nextCharacter = aString[index];
  console.log(index, nextCharacter);
}


/* anything else to say?

*/
