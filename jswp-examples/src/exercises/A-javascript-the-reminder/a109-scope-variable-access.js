/**

 # Zadanie:
 1. Co pokaże console.log po odkomentowaniu?
 2. Spróbuj dodać tak samo nazywającą się zmienną wewnątrz kolejnych zasięgów. Która wygrywa na console.log ?

 #Cel:
 Przypomnienie o "zasięgach" w JavaScript. Każda funkcja wewnętrzna,
 ma dostęp do zmiennych na zewnątrz miejsca w którym zostaje zadeklarowana.
 Z tego tytułu może zaistnieć zjawisko tzw. "Shadowed value".
 */

const seekForThis = 'Good monday morning!';
(function grandFatherScope() {
  //
  (function fatherScope() {
    //
    (function sonScope() {
      //
      (function grandsonScope() {
        // console.log(seekForThis);
      })();
    })();
  })();
})();





