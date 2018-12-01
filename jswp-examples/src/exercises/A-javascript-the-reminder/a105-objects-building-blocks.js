/**

 # Zadanie
 1. Sprawdź na konsoli jak działa i jakie pola mają shortenObject oraz shortenFunction
 2. Dodaj dodatkową funkcję arrow do cat
 3. Jakiej metody statycznej trzeba użyć żeby powielić naszego kota (cat)?

 #Cel:
 Przypomnienie oczywistych i poznanie nowych sposobów deklarowania, kreowania
 rozszerzania i operacji na obiektach w JavaScript.

*/


// Przykład obiektu JS:
// Po deklaracji i przypisaniu, jest gotowy do użytku!
const cat = {
  whiskers: 'long',
  eyes: 2,
  voice: function() {
    return 'Mrauuu';
  },
  alwaysLandsOn4Feet: true
};

// Literał obiektowy:
const object = {};

object.hello = 'World';
console.log(object);


// Nowości ES6+:
// skrót do nazw pól obiektu (jeśli pole nazywa się tak samo jak zmienna)
function welcome() {
  console.log('Welcome Back !');
}
const shortenObject = {
  welcome
};

// Zapis funkcji wewnątrz obiektu:
const shortenFunction = {

  myFunction() {
    return 'this is what function returns';
  },
  myField: 'this is a field'
};

// Zwróć uwagę na przecinek na końcu deklaracji pól
const objCanEndWithComma = {
  field1: '',
  field2: '',
  field3: 'comma-after',
};

// Object API:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// pobranie nazw pól obiektu:
const catKeys = Object.keys(cat);

// rozszerzenie obiektu:
const extendedCat = Object.assign({}, cat, {breed: 'Persian'});

console.log(cat.eyes);

// const cat2 = Object.assign((),cat);
// console.log(allLowerThan10);

// ES8 --------------
// tablica wartości danego obiektu
const barrel = {
  lid: 'plastic',
  body: 'wooden',
  content: 'pickles'
};
console.log('barrel values:', Object.values(barrel));
