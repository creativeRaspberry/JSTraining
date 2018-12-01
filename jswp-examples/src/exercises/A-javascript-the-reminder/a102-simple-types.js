/**
 * JSDoc
 * Ten fragment komentarza jest zapisany w rozpoznawalnym dla większości IDE formacie JSDoc
 *
 * podobnie jak np zapis Javadoc możemy opisywać dodatkowo nasze metody / klasy
 * tak tutaj: w JSDoc opisujemy : moduł (plik), obiekt, metody itd.
 *
 * więcej znajdziesz na:
 * @see {@link http://usejsdoc.org |Official website}
 * @see {@link https://github.com/jsdoc3/jsdoc GitHub JSDoc project}
 * @see {@link https://en.wikipedia.org/wiki/JSDoc}
 *
 * Jeśli Twoje IDE poprawnie interpretuje JSDoc, pomoże Ci np. w:
 *  używaniu prawidłowych typów
 *  podpowiadaniu składni
 *  prowadzeniu dokumentacji projektu
 *
 *  @autor Michał Jabłoński
 *  @version 1.0
 * */

// Typy proste:
const myString = 'My Sample Text';
const myNumber = 123;
let myBoolean = true;

// Standardowy sposób "sprawdzania co się dzieje":
console.log(myString);

// Przykładowe, wbudowane metody na typach prostych:

console.log('>> STRINGS:');
console.log(myString.substr(3));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.charAt(4));
console.log('Hello World'.charAt(6));
console.log('Hello World'.slice(-5));
console.log('Ha'.repeat(10));
console.log(String.fromCharCode(65));
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log('>> NUMBERS:');
console.log(myNumber.toFixed(3));
console.log(myNumber + 0.321 | 0);
console.log(Number.isInteger(2.3));
console.log(Number.parseInt('00110001111101', 2));
console.log(Number.parseInt('00110001111101', 10));
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.log('>> BOOLEANS:');
console.log(myBoolean.toString());
// więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean


// Nowości ES6+:
// dopełnienie wartości typu string o dany znak
console.log('Today is: ', '9'.padStart(2, '0'));
console.log('You got: ', '9,'.padEnd(5, '0'), '$');

console.log('EnterNumber: ', '9'.padStart(5, '-'));
console.log('EnterNumber: ', '91'.padStart(5, '-'));
console.log('EnterNumber: ', '911'.padStart(5, '-'));
