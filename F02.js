// Készíts egy HU nevű objektumot, aminek az alábbi property-jei vannak:
// date(): Visszaadja a paraméterként megadott dátumot, a magyar dátumírás szabályainak megfelelően
// currency(): Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően, a Ft végződéssel együtt
// list(): A paraméterként kapott stringtömböt visszaadja az alábbi formában: "első, második és harmadik" 
// (Tehát vesszőkkel elválasztva, az utolsó elem előtt az "és" szóval.)

'use strict'

const HU = {
    date(dateInput) { return new Intl.DateTimeFormat('hu-HU').format(dateInput) },
    currency(valueInput) { return (new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' })).format(valueInput) },
    list() {

    }
}

const now = new Date();
console.log(HU.date(now));
console.log(HU.currency(100200400.59));