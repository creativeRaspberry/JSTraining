// const assert = require('assert');

/**

 Więcej niż tylko console.log ?!

 #Cel:
 Poznanie dodatkowych komend i zastosowań konsoli
*/

// Klasyczne logowanie:
console.log('This is captain\'s log');

// Informacja:
console.info('This is an information');

// Ostrzeżenie:
console.warn('This is a warning');

// Błąd:
console.error(new Error('This is an error'));

// Tabelaryczny sposób przedstawienia danych z "console.table":
const dataArr = [
  {name: 'Michał', age: 40},
  {name: 'Marysia', age: 50},
  {name: 'Jacek', age: 66, job: 'programmer'},
];
console.table(dataArr);


// Asercje:
const weatherToday = 'sunny';
// assert.ok(weatherToday == 'rainy');
console.assert(weatherToday === 'rainy', 'Today is not a rainy day!');


// Podgląd właściwości obiektu:
const obj = {
  hello: 'World',
  inner: {
    name: 'Object',
    value: 21
  }
};
console.dir(obj);

// Wyczyszczenie konsoli (zadziała w przeglądarce)
console.clear();

// Zliczanie wystąpień tego samego odwołania w tej samej linii
function callMarry() {
  console.count('Marry');
}
callMarry();
callMarry();

// Obliczanie czasu wykonania
console.time('for-loop');
for(let x=0; x <= 1000; x++){

}
console.timeEnd('for-loop');

// Grupowanie wiadomości (przekopiuj do Chrome żeby sprawdzić)
console.group('Use this Group in Chrome');
console.log('1');
console.log('2');
console.log('3');
console.groupCollapsed('SubGroup');
console.log('monkey');
console.log('got');
console.log('banana');
console.groupEnd();
console.log('out from group!');
