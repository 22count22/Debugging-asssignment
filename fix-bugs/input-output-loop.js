'use strict';

/*

*/


let userNumber = NaN;
while (true) {
  const userInput = prompt('enter a number');

  if (userInput !== null || userInput !== '') {
    alert('please enter something');
    continue;
  }

  userNumber = Number(userInput);
  if (typeof userNumber === 'number') {
    break;
  }
}

const numberAlert = 'you entered the number ' + userNumber;
alert(numberAlert);
