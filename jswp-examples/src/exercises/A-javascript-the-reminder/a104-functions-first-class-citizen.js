/**

 #Zadanie:
 1. Przekaż i wywołaj callback dla callCarFunction
 2. Sprawdź (użyj) funkcji carCollector'a : useHorn() a dla engine: start(), stop()

 #Cel:
 Utrwalenie podstawowych sposobów wykorzystywania funkcji w JavaScript.
*/


const engineStart = function() {
  //I am anonymous
  console.log('-start-');
};

const engineStop = function engineStop() {
  console.log('-stop-');
};

function useHorn() {
  console.log('beep Beep !!!');
}

const carCollector = {

  engine : {
    start: engineStart,
    stop: engineStop
  },
  useHorn: useHorn
};


function callCarFunction(callback) {
  callback();
}

// Rozwiązania:

// #1


// #2


// Nowości ES6+:
// dostajemy Arrow functions:
const newFunc  = (name) => `Hello ${name}!`;
const newFunc2 =  name  => `Hello ${name}!`;
const newFunc3 = (name) => {
  return `Hello ${name}!`;
};


// Nowości ES6+:
// domyślne wartości argumentów funkcji:
function funcWithDefaultParameters(hello = 'Hello', world = 'World', status = 1, object = {a: 'aaa', b: 'bee'}) {
  console.log(hello, world, status, object);
}

funcWithDefaultParameters();
funcWithDefaultParameters('Goodbye', 'John', 2);
funcWithDefaultParameters('Welcome to', 'my World', 3, {});

// Przykład #2
// Domyślne wartości dla argumentów funkcji
function callMyGrandpa(name, phoneNo = '111-223-222', device = 'Motorola') {
  console.log('Grab', device, 'dial', phoneNo, 'call', name)
}

callMyGrandpa('Józef');
callMyGrandpa('Staszek', '0000-1202917');
callMyGrandpa('Zbyszek', '+48 601-284-212', 'Xiaomi');

// Żegnaj if'ologio stosowana?
