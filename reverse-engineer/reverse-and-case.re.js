const a = ['toLowerCase', 'toUpperCase', 'userInput:', 'is\x20this\x20correct:\x20\x22', 'userConfirmed:', 'confirmUpperCase:', 'here\x20it\x20is!\x0a\x0a\x22', '---\x20begin\x20user\x20interaction\x20---', 'length', 'reversedString:', 'do\x20you\x20want\x20this\x20in\x20upper\x20or\x20lower\x20case?\x0a\x0a-\x20ok:\x20upper\x20case\x0a-\x20cancel:\x20lower\x20case', 'log', 'nope,\x20gotta\x20enter\x20something.', 'enter\x20something\x20to\x20reverse', 'casedString:']; (function (b, c) { const f = function (g) { while (--g) { b['push'](b['shift']()); } }; f(++c); }(a, 0x77)); const b = function (c, d) { c = c - 0x0; let e = a[c]; return e; }; const c = b; 'use strict'; console['log'](c('0x8')); let userInput = '', userConfirmed = ![]; while (!userConfirmed) { userInput = prompt(c('0xe')), console[c('0xc')](c('0x3'), typeof userInput, userInput); if (userInput === null || userInput === '') { alert(c('0xd')); continue; } userConfirmed = confirm(c('0x4') + userInput + '\x22'), console[c('0xc')](c('0x5'), typeof userConfirmed, userConfirmed); } const confirmUpperCase = confirm(c('0xb')); console[c('0xc')](c('0x6'), typeof confirmUpperCase, confirmUpperCase); let reversedString = ''; for (let i = userInput[c('0x9')] - 0x1; i >= 0x0; i--) { reversedString += userInput[i]; } console[c('0xc')](c('0xa'), typeof reversedString, reversedString); let casedString; confirmUpperCase ? casedString = reversedString[c('0x2')]() : casedString = reversedString[c('0x1')](); console[c('0xc')](c('0x0'), typeof casedString, casedString), alert(c('0x7') + casedString + '\x22');