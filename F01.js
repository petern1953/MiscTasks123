// Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
// A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

'use strict'

const removeDuplicates = (arr) => arr.filter((item, idx) => idx === arr.indexOf(item));

console.log(removeDuplicates([1, 2, 3, 1, 2, 4, 5, 2, 7, 23, 3]));