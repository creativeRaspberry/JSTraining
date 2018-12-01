/**

 # Zadanie
 1. Potwierdź, że dostęp poza "thisIsModule1" do "innerScope" jest niemożliwy.
 2. Podobnie z pozostałymi modułami - sprawdź.
 3. Przy sprawdzaniu const from - zamień na var - zobacz różnicę.

 #Cel:
 Poznanie dawniejszych i aktualnych metod osiągania modułowości w JavaScript.
 Dla pełniejszego obrazu należy jeszcze zapoznać się z przykładem d102-modules.js
 oraz sprawdzić pozostałe projekty dołączone do tego kursu, które używają CommonJS,
 tj. importów i eksportów w plikach

 */


// IIFE -> podstawowa koncepcja modułowości JS:
// Immediately Invoked Function Expression
// Wymuszenie zasięgu leksykalnego (blokowego)

(function(){
  const hello = 'This hello is private !';
  console.log(hello);
})();

// Kolejne przykłady:
(function thisIsModule1() {

  const innerScope = 'Inner scope value';
  console.log('Hello Module #1');

}());
// console.log(innerScope)

(function thisIsModule2() {

  const innerScope2 = 'Inner scope value';
  console.log('Hello Module #2');
}());
// console.log(innerScope2)


// A znacie / pamiętacie jQuery?
const fakeJQuery = { fn: {} };
(function ( $ ) {

  $.fn.whoIsYourCreator = function() {
    const author = {
      name: 'John Resig',
      birth: 'May 8, 1984',
      tweet: '@jeresig'
    };
    return author.name;
  };
}( fakeJQuery ));
console.log('my fake jQuery', fakeJQuery);


// Nowości ES6+:
// problem blokowego zasięgu rozwiążemy dzięki użyciu: const i let
// sprawdź:

const hello = 'hello';
{
  const from = 'from the other side';
  console.log(hello, from);
}
// console.log(hello);
// console.log(from);


// Teraz mamy cały modułowy syntax w Node.js
// Moduły są trzymane jako oddzielne pliki posiadające swoje importy i eksporty.