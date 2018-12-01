/**

 # Zadanie
 1. Przypisz composableFunc do myObject i wywołaj
 2. Co się stanie jeśli wywołamy samo "composableFunc"
 3. Co się stanie jeśli zapomnimy o słowie "new" przy kreowaniu nowego SuperCat

 #Cel:
 Przypomnienie / utrwalenie, inaczej niż z zasięgiem. W kontekście wywołania - jeśli
 funkcja nie zostaje wywołana ze zbindowanym lub nowym kontekstem (new) - otrzyma kontekst globalny.
 tj. pod słowem "this" będzie się krył globalny obiekt Node.

 */

function composableFunc() {
  return this.myName;
}

const myObject = {
  myName: 'Named object'
};

function SuperCat() {
  this.myName = 'Super Cat';
  this.shoutName = composableFunc;
}

// Rozwiązania:
