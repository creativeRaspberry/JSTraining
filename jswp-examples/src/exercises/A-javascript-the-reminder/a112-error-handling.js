/**

 # Zadanie
 1. Wywołaj metodę z true i false - porównaj działanie
 2. Obsłuż błąd który został rzucony

 #Cel:
 Przypomnienie API do obsługi błędów
 Więcej: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

 */


/**
 * @method will be broken depend on condition
 *
 * @param {boolean} condition
 * @throws {Error} when condition is a true value
 *
 * @return {string}
 * */
function helloICanBreak(condition) {
  if (condition){
    throw new Error('Braker !')
  } else {
    return 'not-break'
  }
}

// console.log(helloICanBreak(false));
// helloICanBreak(true);

try {
    helloICanBreak(true);
} catch (e) {

  console.error(e);
}