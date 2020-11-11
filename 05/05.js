// Feladat
// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

'use strict';

const numericArray = [3, 45, 62, 1, 8];
let evenNumber = 0;
for (let i = 0; i < numericArray.length; i += 1) {
    if ( numericArray[i] % 2 == 0) {
        evenNumber += 1
    }
}
 console.log(evenNumber);

