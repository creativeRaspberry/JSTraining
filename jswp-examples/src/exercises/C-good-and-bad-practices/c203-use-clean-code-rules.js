/**

 #Zadanie:
 1. Popraw, zaproponuj alternatywy do kodu napisanego poniżej w zły sposób
 2. Jaką dodatkową korzyść osiągamy dodając domyślne wartości argumentów w funkcjach

 #Cel:
 Zrozumienie i przełożenie na praktykę, zasad "Czystego kodu".
 Metody i zmienne powinny mieć unikatowe ale znaczące nazwy.
 Wielkość całego modułu nie powinna przekraczać 200+ linii kodu
 Wielkość metody nie powinna przekraczać 20+ linii

 Zobacz książkę:
 "Czysty kod. Podręcznik dobrego programisty" - Robert C. Martin

 */

function calc(a, b) {
  return a * b;
}

function n(n) {

  return `Your name is ${n}`
}

const obj = {
  name: '',
  address: {},
  gender: 'male'
};

// Metoda z wieloma parametrami na 1 rzut oka wygląda niegroźnie
// w momencie deklaracji faktycznie wygląda "składnie"
function setupUserParams(
    name= '',
    address = '',
        sendMails, hasAdminAccount = false, hasTelephone=false, hasGMTTimeZone=false){
  //
  //
  // ...
  // tutaj niżej byłaby jakaś logika....
};

// problem pojawia się w momencie odczytania kodu gdy ją wywołujemy:
// setupUserParams((name: 'Michal',
//                  address: 'michal@test.pl',
//                  hasAdminAccount: true,
//                  hasTelephone: true, hasGMTTimezone: true
// ));




