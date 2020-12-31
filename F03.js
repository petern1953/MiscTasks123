// Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:

// arrayToMap(array)
// arrayToSet(array)
// setToMap(set)
// setToArray(set)
// mapToArray(map)
// mapToSet(map)

// A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból
// konvertálják át az adatokat egy másikba.
// Mindegyik metódus visszatérési értéke egy új Array, Map vagy Set object.

'use strict'

const converter = {
    arrayToMap(array) {
        const newMap = new Map();
        array.forEach((value, index) => newMap.set(index, value));
        return newMap;
    },
    arrayToSet(array) {
        const newSet = new Set();
        array.forEach(value => newSet.add(value));
        return newSet;
    },
    setToMap(setInput) {
        const newMap = new Map();
        let i = 0;
        setInput.forEach(setElement => newMap.set(i++, setElement));
        return newMap;
    },
    setToArray(setInput) {
        const arr = [];
        setInput.forEach(setElement => arr.push(setElement));
        return arr;
    },
    mapToArray(map) {
        return this.setToArray(map);
    },
    mapToSet(map) {
        return this.arrayToSet(this.mapToArray(map));
    }
}

console.log(converter.arrayToMap(['Athos', 'Porthos', 'Aramis']));
console.log(converter.arrayToMap([1, 2, 3, 4]));

console.log(converter.arrayToSet(['Athos', 'Porthos', 'Aramis']));
console.log(converter.arrayToSet([1, 2, 3, 4]));

console.log(converter.setToMap(converter.arrayToSet([1, 2, 3, 4])));
console.log(converter.setToMap(converter.arrayToSet(['Athos', 'Porthos', 'Aramis'])));

console.log(converter.setToArray(converter.arrayToSet(['Athos', 'Porthos', 'Aramis'])));
console.log(converter.setToArray(converter.arrayToSet([1, 'wer', false, 123])));

console.log(converter.mapToArray(converter.arrayToMap([1, 'wer', false, 123])));
console.log(converter.mapToArray(converter.arrayToMap(['Athos', 'Porthos', 'Aramis'])))

console.log(converter.mapToSet(converter.arrayToMap(['Athos', 'Porthos', 'Aramis'])))
console.log(converter.mapToSet(converter.arrayToMap([1, 'wer', false, 123])))

