/**

 # Zadanie:
 1. Doinstaluj bibliotekę rxjs
 2. Dodaj logikę rozgłaszania zamian w "mainBroadcaster"
 3. Przekaż strumień i zasubskrybuj zmiany przez każdy z komponentów
 4. Rozgłoś kilka zmian w odstępach czasowych używając setInterval(()=>{}, timeout);

 #Cel:
 Wykorzystanie wzorca obserwator pozwala na "rozgłoszenie zmian

 */


// UWAGA : zadanie wymaga użycia biblioteki Rx.js

/* jshint esnext: true */

class Car {

  name = 'simple-car';
  engine = 1.6;
  features = ['air-condition', 'electrical-mirrors', '8x-airbag'];

  constructor(name) {
    this.name = name;
  }
}

function firstComponent(ev$) {
  ev$.subscribe((car) => {
    console.log(`Hello first ${car.name}`)
  })
}

function secondComponent(ev$) {

}

function thirdCoponent(ev$) {

}

(function mainBroadcaster() {

  // logic here

})();

// ZADANIA

// #