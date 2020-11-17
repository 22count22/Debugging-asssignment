'use strict';


/*
  browser:chrome

  name:
  message:SyntaxError

  callstack:

  live cycle:

  the mistake: SyntaxError
  the fix(es):add the correct syntax
*/


const aString = 'wxyz';

for (let index = aString.length - 1; index >= 0; index--) {
  const nextCharacter = aString[index];
  console.log(index, nextCharacter);
}



/* anything else to say?

*/
