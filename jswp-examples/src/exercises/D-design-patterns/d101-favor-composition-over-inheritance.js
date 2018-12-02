/**

 # Zadanie
 1. Wykorzystaj przygotowane funkcje do zrobienia pojazdu, samochodu, monsterTruck'a
 2. Dołącz do nich i sprawdź czy działa metoda: logSuspension

 #Cel:
 Poznanie właściwości fornt-endu. Wszędzie tam gdzie możemy, nie warto pakować się w ciężkie konstrukcje,
 Typu klasy razem z dziedziczeniem które to dziedziczenie wynika z dziedziczenia innej klasy itd. itd.


 */

function makeCar() {
  return {
    rims: 'funny',
    wheelSize: 16,
    suspension: 'super-suspended',
    wheelType: '4x4'
  }
}

function makeMonsterTruckCar( carFn) {
  return {
    ...carFn(),
    wheelSize: 45,
    suspension: 'monster-truck-suspension',
    powerUps: ['shining-rims', 'defence-hood']
  }
}

function makeVehicle() {
  return {
    suspension: 'simple-suspension'
  }
}

const logSuspension = function() {
  console.log( this.suspension );
};

const car = makeCar();
const veh = makeVehicle();
const monsterTruckCar = makeMonsterTruckCar(makeCar);

console.log(car);
console.log(veh);
console.log(monsterTruckCar);

monsterTruckCar.log = logSuspension();
