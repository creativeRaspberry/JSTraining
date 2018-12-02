import { DOMPreset } from '../../../dom-api/make-dom';

const { div } = DOMPreset;
/**
 * Zadanie:
 * Zrób komponent do dodawania użytkowników (uzupełnij userAddition) według schematu HTML poniżej:
 * */
/*
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Add New User</h5>
    <p class="card-text">
       <input class="form-control" placeholder="type user name...">
    </p>
    <button class="btn btn-primary float-right">Add</button>
  </div>
</div>
*/

export function userAddition () {
  return div();
}
