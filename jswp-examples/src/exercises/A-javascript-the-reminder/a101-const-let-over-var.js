const s = require('jquery');

/**

 Po 2015 dostajemy zasięg leksykalny zmiennych i 2 słowa kluczowe
 używamy let i const zamiast var

 Sprawdzenie czy przeglądarka rozpoznaje te słowa kluczowe:
 @see {@link https://caniuse.com/#search=let}
 @see {@link https://caniuse.com/#search=const}

 Jeśli nie, pozostaje nam użycie transpilera:
 @see {@link https://babeljs.io/}
 
 #Cel:
 Osiągniecie zasięgu leksykalnego.
 Faworyzowanie const - wtedy nie można ponownie przypisać zmiennej.
*/
{
    var xyz = 'moj xyz';
    let local_xyz = 'local xyz';
}
/*
* let to też taka deklaracja zmiennej ale w tym przyadku pilnuje zasięgu,
* przy var javascript automatycznie przenosi zasięg zmiennej tak, aby było widać zmienną w miejscu, w którym próbujemy sę do niej odwołać
* let ma sztywną
* */
console.log(xyz);
// Nowe sposoby deklarowania zmiennych: let, const
// console.log(local_xyz);
let x = 1;
x++;
console.log('My ex is645:', x);

const y = 100;
console.log('Hello I\'m', y, 'I cannot be reassigned');

const arr = [1,2,3];
arr.push(4);
console.log(arr);
// Zadanie:

// #1 spróbuj przypisać inną wartość do y, co się stanie?

console.log(s);

module.export = {
  x: x
};