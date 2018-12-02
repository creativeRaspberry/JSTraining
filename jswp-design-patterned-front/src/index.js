import { $ } from './dom-api/dom-helpers';
import './styles.css';
import { DOMPreset } from './dom-api/make-dom';
import { cardElement } from './main/card-element';
// import { observerView } from './main/observer/observer-view';

const { b, div } = DOMPreset;
(function runDefault () {
  const rootDOM = $('#root');
  const rootDiv = div([
    div([
      b('Trzeba zrobić card-element !')
    ]),
    cardElement({
      cardTitle: 'Moja karta',
      cardSubtitle: 'Moj podtytul',
      clickCallback: (ev) => {
        alert('Hello world');
      } })
    // observerView()
  ],
  'container.mt-5'
  )
  rootDOM.appendChild(rootDiv);
})();
