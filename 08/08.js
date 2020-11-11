// Feladat
// Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést!

'use strict';

const numericArray = [3, 45, 62, 23, 1, 8];
 function linearSearch(numericArray, search) 
 {
for (let i = 0; i < numericArray.length; i += 1) 
{
    if ( numericArray[i] === search)
    {   return 'igen';
    }
        
}
return 'nem;' 
 }
 
console.log(linearSearch(numericArray, 23));

