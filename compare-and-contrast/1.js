'use strict';

/*

*/

let userInput = '';
let repetitions = 1;
let userConfirmed = false;
while (!userConfirmed) {

  const phraseInstructions = 'enter a phrase to repeat:';
  const phraseInput = prompt(phraseInstructions);
  console.log('phraseInput:', typeof phraseInput, phraseInput);

  if (phraseInput === '' || phraseInput === null) {
    alert('nope, enter something');

  } else {

    userInput = phraseInput;

    const repetitionsInput = prompt('how many times do you want to repeat it?');
    console.log('repetitionsInput:', typeof repetitionsInput, repetitionsInput);

    const numberInput = Number(repetitionsInput);
    console.log('numberInput:', typeof numberInput, numberInput);

    const inputIsNotANumber = Number.isNaN(numberInput);
    if (inputIsNotANumber) {
      alert('"' + repetitionsInput + '" is not a number');

    } else {
      repetitions = numberInput;
      userConfirmed = confirm(
        'is this correct?\n\n'
        + '- "' + userInput + '"\n'
        + '- ' + repetitions
      );

    }
  }

}


let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput += userInput;
}

console.log('repeatedInput:', typeof repeatedInput, repeatedInput);

alert(`"${userInput}" -> "${repeatedInput}"`);
