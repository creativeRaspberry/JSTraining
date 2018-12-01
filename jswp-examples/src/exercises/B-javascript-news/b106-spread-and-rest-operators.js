/**

 #

 #Cel:


 */


// pomocnicy wrzucania i wyciągania argumentów oraz manipulacji tablicami


const fruits = ['apple', 'banana', 'pear'];
const vegetables = ['carrot', 'onion'];

// połącz owoce i warzywa:
const combineWithSpread = [...fruits, ...vegetables];
console.log(combineWithSpread);

let no = 1;
function consoleCounter(msg, ...rest) {
  // najpierw rest potem spread
  console.log(`no.${no++}`, msg, ...rest);
}

consoleCounter('First message', 'Hello World');
consoleCounter('Second message');
consoleCounter('Third message', 'Greetings !');
