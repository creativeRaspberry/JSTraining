import { BehaviorSubject } from 'rxjs';

const users$ = new BehaviorSubject(['Stefan', 'Roman', 'Janina']);

/**
 * Fasada serwisowa
 * Komponent pyta o dane dzięki publicznym metodom, jednak nie wie w jaki sposób są dostarczane
 * */

export const userService = {

  getAll: () => users$.asObservable(),
  add: (user) => users$.next([...users$.getValue(), user]),
  countAll: () => users$.pipe(map(arrUser => arrUser.length)) .asObservable()
};
