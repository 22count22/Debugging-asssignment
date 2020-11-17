'use strict';

/**
 *
 */
const rollerCoasterPermission = (height) => {

  if (typeof height === 'number') {
    return 'height is not a number';

  } else if (height <= 100) {
    return 'too short, sorry  :(';

  } else if (height >= 100) {
    return 'hop on the roller coaster!';

  } else {
    return 'just right, hop on!';
  }

};

const _1_expect = 'height is not a number';
const _1_actual = rollerCoasterPermission(true);
console.log(_1_expect === _1_actual, 'Test 1');

const _2_expect = 'height is not a number';
const _2_actual = rollerCoasterPermission('tall');
console.log(_2_expect === _2_actual, 'Test 2');

const _3_expect = 'too short, sorry  :(';
const _3_actual = rollerCoasterPermission(99);
console.log(_3_expect === _3_actual, 'Test 3');

const _4_expect = 'hop on the roller coaster!';
const _4_actual = rollerCoasterPermission(101);
console.log(_4_expect === _4_actual, 'Test 1');

const _5_expect = 'just right, hop on!';
const _5_actual = rollerCoasterPermission(100);
console.log(_5_expect === _5_actual, 'Test 1');
