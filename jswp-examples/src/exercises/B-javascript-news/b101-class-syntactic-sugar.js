/**

 # Zadania
 1. Sprawdź dziedziczenie (odkomentuj i dziedzicz po klasie Vehicle)
 2. Co się stanie jeśli zapomnimy słowa new (porównaj z a111-context-of-this)

 #Cel:
 Poznanie lukru składniowego "class"

 */


class Vehicle {
  constructor () {
    this.name = 'vehicle';
  }
}


class NewCar extends Vehicle{

  constructor(name) {
    super();
    this.engine = 'V8';
    // this.name = 'Aston Martin Vantage';
    this.name = name || this.name;
  }

  makeSomeNoise() {
    console.log(`Wroom ${this.engine}, wroom - the ${this.name} is driving here`);
  }
}

new NewCar().makeSomeNoise();

const otherCar = new NewCar();

otherCar.engine = 'V12';
otherCar.name = 'Aston Martin DB11';

otherCar.makeSomeNoise();
