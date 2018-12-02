import { $ } from './dom-api/dom-helpers';
import './styles.css';
import { DOMPreset } from './dom-api/make-dom';
import { observerView } from './main/observer/observer-view';

const { b, div } = DOMPreset;
(function runDefault () {
  const rootDOM = $('#root');
  const rootDiv = div([
    div([
      b('Trzeba zrobić card-element !')
    ]),
    observerView()
  ], 'container.mt-5');
  rootDOM.appendChild(rootDiv);
})();
