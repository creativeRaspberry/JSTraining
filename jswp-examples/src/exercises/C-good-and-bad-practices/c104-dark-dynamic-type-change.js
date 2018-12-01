/**

 # Zadanie
 1. Zaproponuj rozwiązanie problemów i popraw sposób wykorzystania zmiennych

 #Cel:
 Możliwość dynamicznej zmiany typu zawartości zmiennych nigdy nie jest dobrym pomysłem.
 Zaciemnia intencje programisty, logikę kodu i będzie ciężkie do debugowania.

 */

let myVariable = 0;
console.log(myVariable);

for(myVariable = 1; myVariable<=10; myVariable++){
  console.count('Hello');
}

// Problem: Poza tym że zmienna wykorzystana jest do kilku rzeczy,
// zmienia ona swój typ z number na string 
myVariable = 'Hello World';
console.log(myVariable);

// Problem: Tablica ma pomieszane typy danych (string i number)
const arrayWithMixedTypes = [1, 2, 3, 'hello', 5, 'P', 10, 'G'];

console.log(arrayWithMixedTypes);
