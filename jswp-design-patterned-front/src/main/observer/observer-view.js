import { DOMPreset } from '../../dom-api/make-dom';
import { userList } from './users/user-list';
import { userService } from './users/user-service';

const { button, div, h5 } = DOMPreset;

export function observerView () {
  const listWrapper = div([], 'col-4');
  const counterWrapper = div([], 'col-4');
  const addButton = button('Add user', ['btn-primary']);

  userService.getAll().subscribe((users) => {
    listWrapper.innerHTML = '';
    listWrapper.appendChild(userList(users));
  });
  userService.countAll().subscribe((users) => {
    counterWrapper.innerHTML = '';
    counterWrapper.appendChild(h5(users.length));
  });
  return div([
    div([
      listWrapper,
      counterWrapper,
      div([addButton], 'col-4')
    ], 'row.my-5')
  ], 'container.py-2');
}
