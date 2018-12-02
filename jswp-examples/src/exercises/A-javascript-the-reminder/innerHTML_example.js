console.clear();
console.time('for-loop');
const $h1 = document.querySelector('#h1');
let result = 0;
for(let x=0; x<= 10000; x++){result++};
console.timeEnd('for-loop');
