// Feladat
// Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, csak lebegőpontos számokat tartalmazó tömb elemeit növekvő sorrendbe! Írasd ki a rendezett tömböt! 

'use strict';

const numericArray = [21.4, 43.5, 10.2, 4.4, 8.3];
function advancedBubbleSort(numericArray) {
    let swapped;

    do {
        swapped = false; 
    for (let i = 0; i < numericArray.length - 1; i += 1) {
            if (numericArray[i] > numericArray[i + 1]) {
                let temp = numericArray[i];
                numericArray[i] = numericArray[i + 1];
                numericArray[i + 1] = temp;
                swapped = true;
            }
        }
    }   while (swapped);
        return numericArray;
    }    
    console.log(advancedBubbleSort(numericArray));
