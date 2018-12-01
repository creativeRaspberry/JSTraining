// const fetch = require('fetch');
/**

 # Zadania:
 1. Sprawdź jak działa Promise
 2. Co by było gdyby Promise zwracała wartość synchroniczną?

 #Cel:
 Utrwalenie / Poznanie koncepcji Promise. Praca z kodem asynchronicznym

 */

const fetchData = (breakIt = false) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(breakIt) {
      reject(new Error('breakIt flag is on!'))
    } else {
      resolve('Hello from promise')
    }
  }, 1000)
});


// Nowości ES6+:
// promise finally

fetchData()
  .then((result) => console.log('#  ---- result:', result))
  .finally(() => console.info('#  ---- finally !'));

fetchData(true)
  .then((result) => console.log('#  ---- result 2:', result))
  .catch((err) => console.error('#  ---- error 2:', err.message))
  .finally(() => console.info('#  ---- finally 2 !'));


// fetch('http://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data));

