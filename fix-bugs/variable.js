'use strict';

/*

*/


let a = 'z';
let b = 'y';
let c = 'x';
let temp = null;

// write some code, be sure to use temp!


temp = a;
a = c;
c = temp


// fill in the _ to pass the assertions

const test1 = a === 'x';
console.assert(test1, 'Test 1');

const test2 = b === 'y';
console.assert(test2, 'Test 2');

const test3 = c === 'z';
console.assert(test3, 'Test 3');

const test4 = temp === 'z';
console.assert(test4, 'Test 4');
