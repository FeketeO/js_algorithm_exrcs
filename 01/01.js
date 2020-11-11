
// Feladat
// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

'use strict';
const numericArray = [34325, 35252, 45435, 44212, 4, 45464, 4543];

function getMin(numericArray) {
    let min = numericArray[0];
    for (let i = 0; i < numericArray.length; i += 1) {
        if (numericArray[i] < min) {
            min = numericArray[i]
        }

    }
    console.log(min);
}
getMin(numericArray);

