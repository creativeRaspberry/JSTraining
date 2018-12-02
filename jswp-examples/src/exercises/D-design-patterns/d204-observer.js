import {Subject} from "rxjs";
import {filter} from "rxjs/operators";

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
    constructor(name) {
  this.name = 'simple-car';
  this.engine = 1.6;
  this.features = ['air-condition', 'electrical-mirrors', '8x-airbag'];



  }
}

function firstComponent(ev$) {
  ev$.pipe(
      filter((car) => car.name !== 'Audi A8')
  ).subscribe((car) => {
    console.log(`Hello first ${car.name}`)
  })
}

function secondComponent(ev$) {
ev$.subscribe((car =>
console.log('Hello second $(car.name)')))
}

function thirdCoponent(ev$) {
    ev$.subscribe((car =>
        console.log('Hello third $(car.name)')))
}

(function mainBroadcaster() {

  const myCar = new Car('Audi A8');
  const myCar2 = new Car('Renault');
  const carStream = new Subject();
  firstComponent(carStream);
  secondComponent(carStream);
  thirdCoponent(carStream);
})();

// ZADANIA

// #
