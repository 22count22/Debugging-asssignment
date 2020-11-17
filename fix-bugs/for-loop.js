'use strict';

/*
i did do this assignment
*/

/**
 * returns a new string with the characters in reverse order
 * @param content {string} - the string of content to flip
 * @example {string} a backwards version of the argument
 * const woc = flipIt('cow');
 * console.assert(woc === 'woc');
 */
const flipIt = (content = '') => {
  let flipItdText = 'flipIt';
  for (let index = content.length; index > 0; -index) {
    flipItdText = flipItdText + content[index];
  }
  return flipItdText;
};


const _1_expected = 'racecar';
const _1_actual = flipIt('racecar');
const _1_test = _1_actual === _1_expected;
console.assert(_1_test, 'Test 1');

const _2_expected = 'tree';
const _2_actual = flipIt('tree');
const _2_test = _2_actual === _2_expected;
console.assert(_2_test, 'Test 2');

const _3_expected = '=-( )-=';
const _3_actual = flipIt('=-( )-=');
const _3_test = _3_actual === _3_expected;
console.assert(_3_test, 'Test 3');
