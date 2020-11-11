// Feladat
// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

'use strict';


const numericArray = [3, 45, 62, 1, 8];
let len = numericArray.length;
let sum = 0;
for (let i = 0; i < numericArray.length; i += 1) {
    sum += numericArray[i]
}
// console.log(sum);
let avarage = (sum / len);

console.log(avarage);



