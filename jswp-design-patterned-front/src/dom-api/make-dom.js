/**
 * DOM Elements FACTORY
 * Metoda pomagająca nam utworzyć i dekorować obiekty DOM
 *
 * @param tagName {string} Name of a DOM tag
 * @param elements {string | Array<HTMLElement>} Other Html Elements to append
 * @param cssClasses {string | Array<string>} List of classes
 *
 * @return {HTMLElement}
 * */
function makeElement (tagName, elements = [], cssClasses = []) {
  const nodeElement = document.createElement(tagName);
  const resolvedClasses = resolveClasses(cssClasses);
  if (resolvedClasses.length) {
    nodeElement.classList.add(...resolvedClasses);
  }
  const resolvedElements = resolveElements(elements);
  resolvedElements.forEach((el) => nodeElement.appendChild(el));
  return nodeElement;
}

/**
 * DOM Attributed Elements DECORATOR
 *
 * @param element {HTMLElement}
 * @param attributes { Object.<string, string> }
 *
 * @return {HTMLElement}
 * */
function decorateElementWithAttributes (element, attributes) {
  Object
    .keys(attributes)
    .forEach((a) => element.setAttribute(a, attributes[a]));
  return element;
}

/**
 * DOM Classes ADAPTER
 * Metoda dostosowuje podane dane w 2 formatach do jednego,
 * obsługiwalnego przez API do 'classList'
 *
 * @param myClasses {string | Array<string>} List of Classes as Array or dot notation class.class1.class2 etc.
 *
 * @return {Array<string>}
 * */
function resolveClasses (myClasses = []) {
  if (!Array.isArray(myClasses)) {
    return myClasses.split('.')
  }
  return myClasses;
}

/**
 * DOM Elements ADAPTER
 * Metoda dostosowuje podane dane w 2 formatach do jednego,
 * obsługiwalnego przez API do 'appendChild' w DOM
 *
 * @param myElements {string | Array<HTMLElement>} List of Elements or text to change for textElement
 *
 * @return {Array<HTMLElement>}
 * */
function resolveElements (myElements = []) {
  const makeTxtElement = (text = '') => document.createTextNode(text);

  if (!Array.isArray(myElements)) {
    return [ makeTxtElement(myElements) ]
  }
  return myElements;
}

/**
  * DOM Presets FACADE
  *
  * Ukrywamy za fasadą sposób tworzenia elementów. Wystawiamy jedynie gotowe metody do budowania DOM
* */
export const DOMPreset = {
  a: (href, text, cssClasses = []) => decorateElementWithAttributes(makeElement('a', text, cssClasses), { href }),
  b: (text, cssClasses = []) => makeElement('b', text, cssClasses),
  button: (text, cssClasses = []) => makeElement('button', text, ['btn', ...cssClasses]),
  div: (elements, cssClasses) => makeElement('div', elements, cssClasses),
  h2: (elements, cssClasses) => makeElement('h2', elements, cssClasses),
  h5: (elements, cssClasses) => makeElement('h5', elements, cssClasses),
  h6: (elements, cssClasses) => makeElement('h6', elements, cssClasses),
  li: (elements, cssClasses = []) => makeElement('li', elements, [...cssClasses, 'list-group-item']),
  p: (elements, cssClasses) => makeElement('p', elements, cssClasses),
  span: (elements, cssClasses) => makeElement('span', elements, cssClasses),
  ul: (elements = [], cssClasses = []) => makeElement('ul', elements, [...cssClasses, 'list-group'])
};
