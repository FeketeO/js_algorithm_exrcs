// Feladat
// Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

'use strict';

const numericArray = [3, 4, 8, 23, 31, 88];
function lbinarySearch(numericArray, search) {
    let start = 0;
    let end = numericArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (numericArray[middle] === search) {
            return true
        }
        else if (numericArray[middle] < search)
            start = middle + 1;
        else
            end = middle - 1;
       
    }
    return false;
}
console.log(lbinarySearch(numericArray, 23));
