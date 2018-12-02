/**

 # Zadania
 1. Wyodrębnij logikę i spraw żeby staticWebComponent stał się bardziej użyteczny

 #Cel:
 Zrozumienie zasad "Ogłupiania" komponentu - zmuszania go do pełnienia jedynie funkcji prezentacyjnej.

 */

function getName() {
  return 'the title';
}

function getDescription() {
  return 'the paragraph';
}

function staticWebComponent() {

  const name = getName();
  const description = getDescription();

  return `<h1>${name}</h1><p>${description}</p>`
}
