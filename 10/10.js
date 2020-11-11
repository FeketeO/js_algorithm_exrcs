// Feladat
// Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

'use strict';

const numericArray = [3, 4, 8, 23, 31, 88, 23];
function howManyTimes(numericArray, count) {
    
    let count = [];
    for (let i = 0; i < numericArray.length; i += 1){
        let value = numericArray[i]
        if (count.indexOf(value) !== -1){
            return true

        }
    // if (numericArray[i] === count) {
    //     count += 1;
    // }}
    // return count;
}

console.log(howManyTimes(numericArray, 23));