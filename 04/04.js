// Feladat
// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

'use strict';

const numericArray = [3, 45, 62, 1, 8];
let sum = 0;
for (let i = 0; i < numericArray.length; i += 1) {
    sum += numericArray[i]
}
 console.log(sum);

