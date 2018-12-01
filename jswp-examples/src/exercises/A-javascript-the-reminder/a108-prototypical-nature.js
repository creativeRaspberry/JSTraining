/**

 # Zadanie:
 Rozszerz prototyp funkcji konstruującej SuperCar, o nową funkcję
 "logMeOut" - która pokazuje całą instancję obiektu SuperCar na konsoli

 #Cel:
 Przypomnienie / Poznanie prototyp'owalnej natury JavaScript'u.
 Prototypy są "lekkie", ponieważ zajmują jedno miejsce w pamięci, dla wszystkich instancji obiektu.
*/



function SuperCar(name, engine, maxSpeed) {
  this.name = name;
  this.engine = engine;
  this.maxSpeed = maxSpeed;

}

const myCar = new SuperCar('Audi', 'V8', 350);

// Rozwiązanie:
// myCar.logMeOut = function(){
//   console.log(this);
// }

SuperCar.prototype.logMeOut = function(){
  console.log(this);
}

// linia poniżej musi działać
myCar.logMeOut();

console.log(SuperCar.constructor);