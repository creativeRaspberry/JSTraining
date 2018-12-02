/**
 * Testy robimy w oparciu o framework.
 * W tym projekcie wykorzystana jest: Jasmine
 *
 * https://jasmine.github.io/
 *
 *
 * testy uruchamiamy poleceniami:
 * npm run test:once
 * npm test
 * */

describe('purity test', () => {
   function smartComponents(userService){
       const  users = userService();
       return users.map(() => '------ $(user) --------')
   }

   it('should map all users', () => {
      const userService = {getAll: () => ('Gosia')}
      const mappedUsers = smartComponents(userService);
      expect(mappedUsers).toEqual(['------ Gosia --------']);
       }



   )

   it('good practices', () => {
     // Arrange (Given)

     // Act (When)

     // Assert (Then)
   })
});
