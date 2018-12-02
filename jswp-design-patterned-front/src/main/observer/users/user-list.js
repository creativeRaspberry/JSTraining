import { DOMPreset } from '../../../dom-api/make-dom';

const { div, ul, li } = DOMPreset;

/**
 * Komponent jest REUŻYWALNY, nie wie skąd pochodzą dane.
 * Jego zadaniem jest tylko ich przedstawienie
 *
 * */
export function userList (users = []) {
  return div([
    ul(
      users.map((user) => li(user))
    )
  ]);
}
