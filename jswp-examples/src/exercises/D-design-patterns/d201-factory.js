/**

 # Zadanie
 Sprawdź działanie fabryki samochodów, dla domyślnych wartości i swoich propozycji.

 #Cel:
 Wykorzystanie wzorca kreacyjnego Fabryka.
 Obiekt zwracany może być odpowiednio przygotowany, zanim zostanie zwrócona jego instancja.
 Dzięki temu możemy zdefiniować kilka różnych sytuacji kreowania obiektu.
 Często przydatna metoda z zamierzchłym API, gdzie nie mamy wpływu na to jakimi metodami wywołany jest obiekt,
 a zawsze musimy go konfigurować dla własnych potrzeb.
 */


const DEFAULT_ENGINE_CAPACITY = '2.0l';

class Car {

  constructor (model, year) {
    this.model = model;
    this.year = year;
    this.engineCapacity = DEFAULT_ENGINE_CAPACITY;
  }

  shoutModelName() {
    console.log(this.model);
  }

  shoutYear() {
    console.log(this.year);
  }

  shoutEngineCapacity() {
    console.log(this.engineCapacity);
  }

  addEngineCapacity(engineCapacity = DEFAULT_ENGINE_CAPACITY) {
    this.engineCapacity = engineCapacity;
  }
}

export function carFactory ( carDetails = {model: 'BMW', year: 2018, capacity: DEFAULT_ENGINE_CAPACITY} ) {

  const {model, year, capacity} = carDetails;
  const myCar = new Car(model, year);
  if(capacity) {
    myCar.addEngineCapacity(capacity);
  }
  return myCar;
}


