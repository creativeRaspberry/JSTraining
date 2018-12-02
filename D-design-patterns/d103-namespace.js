/**

 # Zadanie:
 Zastosuj przestrzeń nazw tak by podzielić logicznie części kodu.

 #Cel:
 Do wzorców kreacyjnych w JavaScript można dołożyć: przestrzeń nazw.
 Którą możemy zasymulować obiektami, wewnątrz których umieszczamy
 kolejne porcje kodu - będą one dostępne publicznie

 */

const defaultMail = 'john.doe@gmail.com';
const replyTo = 'janina.zet@wp.pl';
const checkMailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendEmail(address) {
  // some sendMail logic here....
}

function prepareEmail(template, values) {
  // some mail preparation logic here....
}

function validateEmail(address) {
  return checkMailRegExp.test(address);
}

function logUser(username, password) {
  // some User sing in logic here....
}

function getUserData(id) {
  // some data....
}

function getUserName(id) {
  // some User sing in logic here....
}

// Rozwiązanie: