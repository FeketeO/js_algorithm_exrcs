// Feladat
// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb  elemét!

'use strict';
const numericArray = [34325, 35252, 45435, 44212, 4, 45464, 4543];
function getMax(numericArray) {
    let max = numericArray[0];
    for (let i = 1; i < numericArray.length; i += 1)
    {
        if (numericArray[i] > max) {
            max = numericArray[i];
        }
    }
    console.log(max);
}
                getMax(numericArray);

