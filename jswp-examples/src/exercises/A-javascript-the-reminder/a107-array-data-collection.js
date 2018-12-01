/**

 # Zadanie
 1. Sprawdź wynik działania każdej z funkcji. Czy oryginalne myNumbersArray zostało zmienione?
 2. Sprawdź "mutujące" metody tablice
 3. Rozwiąż zadanie w dalszej części przykładu

 #Cel:
 Podstawowy sposób przechowywania kolekcji danych w JavaScript.
 Poznanie API tablicowego pomocnego przy operacjach na tablicach
 metody głównie oparte o higher order functions, nie mutują kolekcji danych.

 */

const myNumbersArray = [ 1, 2, 33, 44, 55, 3, 1 ];


// Iteracja elementów
[1,2,3,4,5].forEach(element => {});

// Mapowanie
// Transformacja elementów
const mapped = [1,2,3,4,5].map((nr) => 'Chapter #'+nr);

// Filtrowanie
// Zmiana ilości elementów
const oddNumbers = [1,2,3,4,5].filter((nr) => (nr%2));

// Sprawdzenie warunku
// Każdy element spełnia predykat
const allLowerThan10 = [1,2,3,4,5].every((nr) => nr < 10);

// "Redukcja" elementów
// Gdzie map i filter nie może tam przyda się reduce
const sumOfElements = myNumbersArray.reduce((acc, value) => acc + value);


// Metody mutujące tablicę:
const mutableArray = ['a','b','c','d'];

// dodanie elementu na koniec:
mutableArray.push('e');

// "wyjęcie" ostatniego elementu:
mutableArray.pop();

// dodanie elementu na początek:
mutableArray.unshift('x');

// "wyjęcie" pierwszego elementu:
mutableArray.shift();


// przeszukiwanie index'ów, elementów, inne...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



// Nowości ES6+:
// uproszczone sprawdzenie czy dany element istnieje w tablicy

const lawyers = ['Louis', 'Rachel', 'Jessica', 'Michael', 'Harvey'];

console.log('Dona is present?', lawyers.includes('Donna'));
console.log('Jessica is present?', lawyers.includes('Jessica'));
// I, tak - jest case-sensitive:
console.log('JessiCa is present?', lawyers.includes('JessiCa'));


// #Zadanie:
// Zamień wartość userOptions na obiekt
// Używając metod dla string oraz Array.

// efekt finalny powinien wyglądać następująco:
/*
  const user = {
     login: '',
     name: '',
     lastName: '',
     profession: '',
  }
* */
const userOptions = 'login,name,lastName,profession';

const isNotNullString = val => val !== 'null';
// Rozwiązanie:
// const reduceKeysToObject = (acc, value) => {
//     acc[value] = '';
//     return Object.assign((), acc);
// };

const user = userOptions.split(',')
    .filter(isNotNullString)
    .reduce((acc, value) => {
        acc[value] = '';
        return acc;
    })
;

console.log(user);

console.assert(isNotNullString('null'), 'String is a null');


// Rozwiązanie:



